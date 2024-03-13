<template>
    <v-text-field v-model="search" clearable hide-details label="Search Products..." prepend-inner-icon="mdi-magnify"
        single-line></v-text-field>
    <v-container>
        <v-row>
            <v-col v-for="item in displayedItems" :key="item.id" cols="12" sm="6" md="4">
                <v-card height="200" link>
                    <v-card-title>{{ item.title }}</v-card-title>
                    <v-card-text>{{ item.content }}</v-card-text>
                    <v-card-subtitle>Price: ${{ item.prices }}</v-card-subtitle>
                    <v-card-subtitle>Class: {{ item.class }}</v-card-subtitle>
                </v-card>
            </v-col>
        </v-row>
        <v-pagination v-model="page" :length="Math.ceil(totalItems / perPage)"></v-pagination>
    </v-container>
</template>

<script>
export default {
    data() {
        return {
            search: '',
            page: 1,
            perPage: 9,
            items: [
            {
                    "id": 1,
                    "title": "良品肉條280克原價300特價175元",
                    "content": "85％新鮮肉泥烘烤18小時目前應雞肉原物料短缺，固生產出來的顏色和軟硬度會有差異，不介意者再下單，嗜口性一樣佳鮭魚雞肉貓草條牛肉風味肉條燕麥雞肉條芝麻機肉條起司機肉片紅蘿波雞肉條保存期限一年",
                    "prices": 189,
                    "class": "寵物食品"
                },
                {
                    "id": 2,
                    "title": "高纖燕麥寵物食品 1公斤裝",
                    "content": "含有豐富的燕麥和高纖食材，有助於寵物的腸道健康。適合所有品種的狗狗和貓咪。",
                    "prices": 199,
                    "class": "寵物食品"
                },
                {
                    "id": 3,
                    "title": "新鮮雞胸肉寵物罐頭 12罐裝",
                    "content": "100%純雞胸肉，無添加人工色素或防腐劑。提供健康的蛋白質來源。",
                    "prices": 299,
                    "class": "寵物食品"
                },
                {
                    "id": 4,
                    "title": "鮮嫩魚肉寵物飼料 2公斤裝",
                    "content": "富含魚肉和蔬菜，提供全面的營養支持。適合所有年齡的寵物。",
                    "prices": 249,
                    "class": "寵物食品"
                },
                {
                    "id": 5,
                    "title": "有機貓草種子套裝",
                    "content": "種植您自己的有機貓草，為貓咪提供天然的消化支持。",
                    "prices": 12,
                    "class": "寵物食品"
                },
                {
                    "id": 6,
                    "title": "天然寵物牛耳朵 10根裝",
                    "content": "無添加人工色素或香料的牛耳朵，適合狗狗的咀嚼娛樂。",
                    "prices": 15,
                    "class": "寵物食品"
                },
                {
                    "id": 7,
                    "title": "寵物牛奶骨 20個裝",
                    "content": "美味的牛奶味骨頭，狗狗愛不釋手。",
                    "prices": 8,
                    "class": "寵物食品"
                },
                {
                    "id": 8,
                    "title": "多味貓咪零食禮盒",
                    "content": "包含多種口味的貓咪零食，滿足貓咪的味蕾。",
                    "prices": 25,
                    "class": "寵物食品"
                },
                {
                    "id": 9,
                    "title": "寵物營養補充劑 120片裝",
                    "content": "提供寵物所需的維生素和礦物質，維護健康。",
                    "prices": 18,
                    "class": "寵物食品"
                },
                {
                    "id": 10,
                    "title": "有機紅蘿波雞肉零食",
                    "content": "健康的有機紅蘿波雞肉零食，適合狗狗和貓咪。",
                    "prices": 14,
                    "class": "寵物食品"
                },
                {
                    "id": 11,
                    "title": "天然雞肉和蔬菜寵物罐頭 12罐裝",
                    "content": "含有天然雞肉和多種蔬菜，提供全面的營養。",
                    "prices": 329,
                    "class": "寵物食品"
                },
                {
                    "id": 12,
                    "title": "有機燕麥狗餅乾 500克裝",
                    "content": "有機燕麥餅乾，適合狗狗作為健康的零食。",
                    "prices": 22,
                    "class": "寵物食品"
                },
                {
                    "id": 13,
                    "title": "多味雞肉寵物零食禮盒",
                    "content": "多種口味的雞肉寵物零食，適合狗狗和貓咪。",
                    "prices": 28,
                    "class": "寵物食品"
                },
                {
                    "id": 14,
                    "title": "有機紅鯛魚零食 50克裝",
                    "content": "有機紅鯛魚零食，提供豐富的蛋白質。",
                    "prices": 19,
                    "class": "寵物食品"
                },
                {
                    "id": 15,
                    "title": "鮮嫩羊肉寵物飼料 2公斤裝",
                    "content": "富含羊肉和蔬菜，提供全面的營養支持。適合所有年齡的寵物。",
                    "prices": 259,
                    "class": "寵物食品"
                },
                {
                    "id": 16,
                    "title": "香檳泡泡寵物洗澡露 500毫升裝",
                    "content": "溫和的洗澡露，帶有香檳泡泡，讓您的寵物沐浴愉快。",
                    "prices": 29,
                    "class": "寵物清潔用品"
                },
                {
                    "id": 17,
                    "title": "柔軟寵物刷子和梳子套裝",
                    "content": "刷子和梳子的套裝，用於寵物的毛髮護理。",
                    "prices": 15,
                    "class": "寵物清潔用品"
                },
                {
                    "id": 18,
                    "title": "寵物牙刷和牙膏套裝",
                    "content": "專為寵物設計的牙刷和牙膏，有助於保持口腔健康。",
                    "prices": 12,
                    "class": "寵物清潔用品"
                },
                {
                    "id": 19,
                    "title": "香薰寵物除臭噴霧 250毫升裝",
                    "content": "帶有香薰的除臭噴霧，適用於寵物的床和空間。",
                    "prices": 18,
                    "class": "寵物清潔用品"
                },
                {
                    "id": 20,
                    "title": "寵物浴巾和浴帽套裝",
                    "content": "柔軟的浴巾和可愛的浴帽，用於寵物的沐浴。",
                    "prices": 10,
                    "class": "寵物清潔用品"
                },
                {
                    "id": 21,
                    "title": "寵物洗澡刷 2個裝",
                    "content": "方便使用的洗澡刷，幫助深層清潔寵物的毛髮。",
                    "prices": 8,
                    "class": "寵物清潔用品"
                },
                {
                    "id": 22,
                    "title": "無漂白寵物毛巾 4條裝",
                    "content": "無漂白的柔軟毛巾，用於寵物的沐浴和擦乾。",
                    "prices": 14,
                    "class": "寵物清潔用品"
                },
                {
                    "id": 23,
                    "title": "寵物專用指甲剪",
                    "content": "專為寵物設計的指甲剪，幫助保持寵物的爪子整潔。",
                    "prices": 7,
                    "class": "寵物清潔用品"
                },
                {
                    "id": 24,
                    "title": "寵物除毛滾筒",
                    "content": "方便去除寵物毛髮的除毛滾筒。",
                    "prices": 9,
                    "class": "寵物清潔用品"
                },
                {
                    "id": 25,
                    "title": "溫和寵物洗髮精 250毫升裝",
                    "content": "溫和的寵物洗髮精，適用於所有寵物品種。",
                    "prices": 12,
                    "class": "寵物清潔用品"
                },
                {
                    "id": 26,
                    "title": "寵物擦眼液 50毫升裝",
                    "content": "溫和的寵物擦眼液，有助於保持寵物的眼睛清潔。",
                    "prices": 15,
                    "class": "寵物清潔用品"
                },
                {
                    "id": 27,
                    "title": "寵物毛刷和梳子套裝",
                    "content": "多功能的毛刷和梳子套裝，適用於長毛和短毛寵物。",
                    "prices": 16,
                    "class": "寵物清潔用品"
                },
                {
                    "id": 28,
                    "title": "寵物耳朵清潔液 100毫升裝",
                    "content": "專為寵物耳朵設計的清潔液，有助於保持耳朵健康。",
                    "prices": 10,
                    "class": "寵物清潔用品"
                },
                {
                    "id": 29,
                    "title": "寵物洗澡手套",
                    "content": "方便使用的寵物洗澡手套，幫助深層清潔寵物的毛髮。",
                    "prices": 6,
                    "class": "寵物清潔用品"
                },
                {
                    "id": 30,
                    "title": "寵物口腔清潔噴霧 60毫升裝",
                    "content": "口腔清潔噴霧，有助於保持寵物的口腔健康。",
                    "prices": 11,
                    "class": "寵物清潔用品"
                }, {
                    "id": 31,
                    "title": "耐咬橡膠寵物球",
                    "content": "耐咬的橡膠球，適用於狗狗的遊戲和咀嚼。",
                    "prices": 10,
                    "class": "寵物玩具"
                },
                {
                    "id": 32,
                    "title": "可愛毛絨玩具貓咪套裝",
                    "content": "多款可愛的毛絨玩具，為貓咪提供娛樂。",
                    "prices": 12,
                    "class": "寵物玩具"
                },
                {
                    "id": 33,
                    "title": "寵物摸摸球 3個裝",
                    "content": "摸摸球，發出有趣的聲音，引起寵物的興趣。",
                    "prices": 8,
                    "class": "寵物玩具"
                },
                {
                    "id": 34,
                    "title": "智力拼圖寵物玩具",
                    "content": "挑戰寵物的智力，讓他們解決拼圖以取得獎勵。",
                    "prices": 15,
                    "class": "寵物玩具"
                },
                {
                    "id": 35,
                    "title": "繩索拉拉寵物玩具",
                    "content": "繩索拉拉玩具，適用於狗狗的拉扯遊戲。",
                    "prices": 9,
                    "class": "寵物玩具"
                },
                {
                    "id": 36,
                    "title": "貓咪滾球迷宮",
                    "content": "迷宮設計的貓咪滾球玩具，激發貓咪的好奇心。",
                    "prices": 18,
                    "class": "寵物玩具"
                },
                {
                    "id": 37,
                    "title": "狗狗飛盤",
                    "content": "飛盤玩具，適用於狗狗的室外活動。",
                    "prices": 11,
                    "class": "寵物玩具"
                },
                {
                    "id": 38,
                    "title": "貓咪互動遊戲棒",
                    "content": "互動遊戲棒，讓您和貓咪一起玩耍。",
                    "prices": 7,
                    "class": "寵物玩具"
                },
                {
                    "id": 39,
                    "title": "寵物咀嚼繩 5條裝",
                    "content": "耐咬的咀嚼繩，適用於狗狗的咀嚼遊戲。",
                    "prices": 13,
                    "class": "寵物玩具"
                },
                {
                    "id": 40,
                    "title": "貓咪貓薄荷玩具",
                    "content": "貓薄荷玩具，激發貓咪的興趣。",
                    "prices": 6,
                    "class": "寵物玩具"
                },
                {
                    "id": 41,
                    "title": "寵物追逐光點玩具",
                    "content": "追逐光點的互動玩具，適用於貓咪和狗狗。",
                    "prices": 10,
                    "class": "寵物玩具"
                },
                {
                    "id": 42,
                    "title": "智力球形寵物玩具",
                    "content": "球形玩具，藏有小零食，挑戰寵物的智力。",
                    "prices": 14,
                    "class": "寵物玩具"
                },
                {
                    "id": 43,
                    "title": "狗狗咬咬玩具 3個裝",
                    "content": "耐咬的狗狗咬咬玩具，滿足狗狗的咀嚼需求。",
                    "prices": 9,
                    "class": "寵物玩具"
                },
                {
                    "id": 44,
                    "title": "貓咪互動滑梯玩具",
                    "content": "互動滑梯玩具，貓咪愛不釋手。",
                    "prices": 17,
                    "class": "寵物玩具"
                },
                {
                    "id": 45,
                    "title": "寵物摩擦按摩器",
                    "content": "按摩器設計的寵物玩具，為寵物提供按摩和娛樂。",
                    "prices": 8,
                    "class": "寵物玩具"
                }
            ],
        }
    },
    computed: {
        totalItems() {
            return this.searching.length;
        },
        displayedItems() {
            const start = (this.page - 1) * this.perPage;
            const end = start + this.perPage;
            return this.searching.slice(start, end);
        },
        searching() {
            if (!this.search) return this.items;

            const search = this.search.toLowerCase();

            return this.items.filter(item => {
                const text = item.title.toLowerCase() + item.content.toLowerCase() + item.class.toLowerCase();

                return text.indexOf(search) > -1;
            })
        },
    }
}
</script>
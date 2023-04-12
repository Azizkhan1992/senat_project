<template>
    <header class="header">
        <div class="header_top">
            <div class="header_top_content df-spb commonContent">
                <div class="content_left df-cen">
                    <p class="commonP content_left-hour">{{ hour }} : {{ minut }}</p>

                    <p v-if="day !== null" class="commonP content_left-date">{{ day[$i18n.locale] }}, {{ date }} {{
                        month[$i18n.locale] }} {{ year}} (GMT+5)</p>
                </div>

                <div class="content_center df-cen">
                    <div class="imgWrapper">
                        <img src="../static/images/carefull.png" alt="">
                    </div>
                    <span class="commonP content_center_title">{{ $t("test") }}</span>
                </div>

                <div class="content_right df-cen">
                    <p class="commonP content_right_title">{{ $t("social") }}:</p>

                    <div class="content_right_items">
                        <a :href="item.link" class="right-item" v-for="item in socials" :key="item.id">
                            <Icons :icon="item.img" />
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <div class="header_center">
            <div class="header_center_content df-spb commonContent">
                <div class="header_center_logo df-cen">
                    <div class="logo_img ImgWr">
                        <img src="../static/images/sign.png" alt="">
                    </div>
                    <div class="logo_title">
                        <h1 class="descP">{{ $t("UZB") }}</h1>
                        <h3 class="descT">{{ $t("senat") }}</h3>
                    </div>
                </div>
                <div class="center_right_content">
                    <div class="right_chances">
                        <div class="chance_items df-cen" v-for="item in chances" :key="item.id">
                            <img :src="require('../static/images/' + item.img)" alt="">
                        </div>
                    </div>

                    <hr class="vert_hr">

                    <div class="right_vr_accept df-cen">
                        <div class="Img">
                            <img src="../static/images/vr.png" alt="">
                        </div>
                        <a href="#" class="descP">{{ $t("reception") }}</a>
                    </div>

                    <hr class="vert_hr">

                    <div class="right_lang_content">
                        <div class="lang-visible" @click="isLang = !isLang">
                            <img src="../static/images/lang.png" alt="">
                            <span class="descBl" v-if="$i18n.locale == 'uz'">O'zbek</span>
                            <span class="descBl" v-if="$i18n.locale == 'uzc'">Ўзбек</span>
                            <span class="descBl" v-if="$i18n.locale == 'ru'">Русский</span>
                            <font-awesome-icon :icon="['fas', 'chevron-down']" />
                        </div>
                        <div class="lang_hidden" :class="isLang ? 'active' : 'deactive'">
                            <div class="hidden_languages" v-for="lang in languages" :key="lang.code"
                                @click.prevent.stop="$i18n.setLocale(lang.code)">
                                <span class="descBl">{{ lang.name }}</span>
                            </div>
                        </div>
                    </div>

                    <div class="right_login_item df-cen">
                        <div class="Img">
                            <img src="../static/images/log.png" alt="">
                        </div>

                        <span class="descBl">{{ $t('enter') }}</span>
                    </div>
                </div>
            </div>


        </div>

        <NavigationBar />
    </header>
</template>
<script>
import NavigationBar from '~/components/NavigationBar.vue'
import Icons from '../components/Icons.vue'
export default {
    name: 'app-header',
    components: { Icons, NavigationBar },
    data() {
        return {
            socials: this.$store.state.socials,
            days: [
                {
                    id: 1,
                    uz: 'Dushanba',
                    uzc: 'Душанба',
                    ru: 'Понедельник'
                },
                {
                    id: 2,
                    uz: 'Seshanba',
                    uzc: 'Сешанба',
                    ru: 'Вторник',
                },
                {
                    id: 3,
                    uz: 'Chorshanba',
                    uzc: 'Чоршанба',
                    ru: 'Среда'
                },
                {
                    id: 4,
                    uz: 'Payshanba',
                    uzc: 'Пайшанба',
                    ru: 'Четверг'
                },
                {
                    id: 5,
                    uz: 'Juma',
                    uzc: 'Жума',
                    ru: 'Пятница'
                },
                {
                    id: 6,
                    uz: 'Shanba',
                    uzc: 'Шанба',
                    ru: 'Суббота'
                },
                {
                    id: 7,
                    uz: 'Yakshanba',
                    uzc: 'Якшанба',
                    ru: 'Воскресенье'
                }
            ],
            months: [
                {
                    id: 1,
                    uz: 'Yanvar',
                    uzc: 'Январ',
                    ry: 'Январь'
                },
                {
                    id: 2,
                    uz: 'Fevral',
                    uzc: 'Феврал',
                    ru: 'Февраль'
                },
                {
                    id: 3,
                    uz: 'Mart',
                    uzc: 'Март',
                    ru: 'Марть'
                },
                {
                    id: 4,
                    uz: 'Aprel',
                    uzc: 'Aпрел',
                    ru: 'Aпрель'
                },
                {
                    id: 5,
                    uz: 'May',
                    uzc: 'Май',
                    ru: 'Май'
                },
                {
                    id: 6,
                    uz: 'Iyun',
                    uzc: 'Июн',
                    ru: 'Июнь'
                },
                {
                    id: 7,
                    uz: 'Iyul',
                    uzc: 'Июл',
                    ru: 'Июль'
                },
                {
                    id: 8,
                    uz: 'Avgust',
                    uzc: 'Август',
                    ru: 'Август'
                },
                {
                    id: 9,
                    uz: 'Sentabr',
                    uzc: 'Сентабр',
                    ru: 'Сентябрь'
                },
                {
                    id: 10,
                    uz: 'Oktabr',
                    uzc: 'Октабр',
                    ru: 'Октябрь'
                },
                {
                    id: 11,
                    uz: 'Noyabr',
                    uzc: 'Ноябр',
                    ru: 'Ноябрь'
                },
                {
                    id: 12,
                    uz: 'Dekabr',
                    uzc: 'Декабр',
                    ru: 'Декабрь'
                }
            ],
            day: null,
            hour: null,
            minut: null,
            date: null,
            month: null,
            year: null,
            chances: [
                {
                    id: 1,
                    img: 'h1.png'
                },
                {
                    id: 2,
                    img: 'h2.png'
                },
                {
                    id: 3,
                    img: 'h3.png'
                }
            ],
            selectedLang: { language: 'Ўзбек' },
            isLang: false
        }
    },
    mounted() {
        this.getDay()
    },
    computed: {
        languages() {
            return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale)
        }
    },
    methods: {
        selectLang(lang) {
            this.selectedLang = lang
        },
        getDay() {
            let temp = new Date()

            let monthDay = temp.getDay() + 1

            this.day = this.days.filter(e => e.id === monthDay).pop()
            this.hour = temp.getHours()
            this.minut = temp.getMinutes()
            // console.log(this.day)

            if (temp.getDate() < 10) {
                this.date = '0' + temp.getDate()
            } else {
                this.date = temp.getDate()
            }

            this.year = temp.getFullYear()

            this.getMonth(temp.getMonth())
        },

        getMonth(month) {
            this.month = this.months.filter(e => e.id === month + 1).pop()
        }
    }
}
</script>
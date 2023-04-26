<template>
    <footer class="footer">
        <div class="footer_container">
            <div class="footer_header">
                <div class="footer_header_container commonContent">
                    <div class="header_center_logo df-cen">
                        <div class="logo_img ImgWr">
                            <img src="../static/images/sign.png" alt="">
                        </div>
                        <div class="logo_title">
                            <h1 class="descP">{{ $t("UZB") }}</h1>
                            <h3 class="descT">{{ $t("senat") }}</h3>
                        </div>
                    </div>

                    <div class="header_details">
                        <div class="header_socials">
                            <div class="social_items df-cen" v-for="item in footerSocials" :key="item.id">
                                <img :src="require('../static/images/' + item.img)" alt="">
                            </div>
                        </div>

                        <div class="footer_search">
                            <input type="email" :placeholder="$t('inp_mail')">

                            <button class="send_btn">{{ $t('subscribe') }}</button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="footer-content commonContent">
                <div class="footer_links">
                    <div class="link_items" v-for="item in footer_links" :key="item.id">
                        <nuxt-link class="descP" to="#">{{ item.name?.[$i18n.locale] }}</nuxt-link>
                    </div>
                </div>

                <div class="footer_content_details">
                    <div class="footer_contacts">
                        <div class="contact_phones">
                            <div class="phone__wrapper" v-for="phone in contacts.phone" :key="phone.id">
                                <div class="phone_title_wrapper">
                                    <font-awesome-icon :icon="['fasr', 'phone']" />
                                    <span class="commonP">{{ phone?.title }}:</span>
                                </div>
                                <a :href="`tel: ${phone.value}`" class="descP">{{ phone.value }}</a>
                            </div>
                        </div>

                        <div class="contact_address">
                            <div class="phone_title_wrapper">
                                <font-awesome-icon :icon="['fasr', 'location-dot']" />
                                <span class="commonP">{{ $t('address') }}:</span>
                            </div>
                            <p class="descP" v-for="address in contacts.address" :key="address.id">{{ address.text }}</p>
                        </div>
                    </div>

                    <div class="footer_exception_error">
                        <span class="commonP">{{ $t('exception_error1') }}</span>
                        <span class="commonP">{{ $t('exception_error2') }}</span>
                    </div>
                </div>
            </div>

            <hr class="commonContent">

            <div class="footer_bottom commonContent">
                <p class="commonP">{{ $t('footer_title1') }}</p>
                <p class="commonP">{{ $t('footer_title2') }}</p>
            </div>
        </div>
    </footer>
</template>
<script>
export default {
    name: 'site-footer',
    data() {
        return {
            footerSocials: [
                {
                    id: 1,
                    img: 'in.svg'
                },
                {
                    id: 2,
                    img: 'tg.svg'
                },
                {
                    id: 3,
                    img: 'yt1.svg'
                },
                {
                    id: 4,
                    img: 'fb1.svg'
                },
                {
                    id: 5,
                    img: 'ast.svg'
                }
            ],
            footer_links: [
                {
                    id: 1,
                    name: {
                        uz: 'Hujjatlar',
                        uzc: 'Ҳужжатлар',
                        ru: 'Документы'
                    }
                },
                {
                    id: 2,
                    name: {
                        uz: 'Nazorat-tahlil faoliyati',
                        uzc: 'Назорат-таҳлил фаолияти',
                        ru: 'Мониторинг и анализ деятельности'
                    }
                },
                {
                    id: 3,
                    name: {
                        uz: 'Yalpi majlislar',
                        uzc: 'Ялпи мажлислар',
                        ru: 'Пленарные заседания'
                    }
                },
                {
                    id: 4,
                    name: {
                        uz: 'Harakatlar strategiyasi',
                        uzc: 'Харакатлар стратегияси',
                        ru: 'Стратегия действий'
                    }
                },
                {
                    id: 5,
                    name: {
                        uz: 'Kengash majlislari',
                        uzc: 'Кенгаш мажлислари',
                        ru: 'Заседания Совета'
                    }
                },
                {
                    id: 6,
                    name: {
                        uz: 'OAVdagi chiqishlar',
                        uzc: 'ОАВдаги чиқишлар',
                        ru: 'Выступления в СМИ'
                    }
                },
                {
                    id: 7,
                    name: {
                        uz: 'Tadbirlar',
                        uzc: 'Тадбирлар',
                        ru: 'События'
                    }
                },
                {
                    id: 8,
                    name: {
                        uz: 'Respublika komissiyalari',
                        uzc: 'Республика комиссиялари',
                        ru: 'Республиканские комиссии'
                    }
                },
                {
                    id: 9,
                    name: {
                        uz: 'Xalqaro hamkorlik',
                        uzc: 'Халқаро ҳамкорлик',
                        ru: 'Международное сотрудничество'
                    }
                },
                {
                    id: 10,
                    name: {
                        uz: 'Senator so‘rovi',
                        uzc: 'Сенатор сўрови',
                        ru: 'Запрос сенатора'
                    }
                }
            ],
            contacts: {}
        }
    },
    mounted() {
        this.getContacts()
    },
    methods: {
        async getContacts() {
            this.contacts = await this.$store.dispatch('getContacts')
        }
    }
}
</script>
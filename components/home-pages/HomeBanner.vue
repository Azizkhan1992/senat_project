<template>
    <section class="banner_section" data-aos="slide-up" data-aos-easing="ease-in-quart" data-aos-duration="600">
        <div class="banner_container commonContent">
            <div class="banner_details">
                <h2>{{ banner.name?.[$i18n.locale] }}</h2>
                <p class="descT">{{ banner.step?.[$i18n.locale] }}</p>

                <div class="banner_items">
                    <button class="send_btn">
                        <font-awesome-icon :icon="['fasr', 'envelope']" size="2x" />
                        {{ $t('send') }}
                    </button>

                    <div class="banner_social_networks">
                        <span class="descT">{{ $t('social_networks') }}:</span>

                        <div class="social_items_wrapper">
                            <div class="social_items" v-for="social in banner.socials" :key="social.id">
                            <img :src="require('../../static/images/'+social.link)" alt="">
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    name: 'home-banner',
    data(){
        return{
            banner: {
                name: {
                    uz: 'Narbaeva tanzila kamalovna',
                    uzc: 'Нарбаева танзила камаловна',
                    ru: 'Нарбаева Танзила Камаловна'
                },
                step: {
                    uz: 'O‘zbekiston Respublikasi Oliy Majlisi Senati raisi',
                    uzc: 'Ўзбекистон Республикаси Олий Мажлиси Сенати раиси',
                    ru: 'Председатель Сената Олий Мажлиса Республики Узбекистан'
                },
                socials: [
                    {
                        id: 1,
                        link: 'fb.svg'
                    },
                    {
                        id: 2,
                        link: 'tg.svg'
                    },
                    {
                        id: 3,
                        link: 'tw.svg'
                    },
                    {
                        id: 4,
                        link: 'yt.svg'
                    }
                ]
            }
        }
    }
}
</script>
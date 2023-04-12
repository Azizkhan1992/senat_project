<template>
    <section class="Interactive_section">
        <div class="Interactive_container">
            <div class="Interactive_wrapper commonContent">
                <div class="services_head df-spb">
                    <h2 class="mainP">Интерактив хизматлар</h2>
                    <nuxt-link to="#" class="descBl">Барча хизматлар
                        <font-awesome-icon :icon="['fas', 'angle-right']" />
                    </nuxt-link>
                </div>

                <div class="Interactive_services">
                    <nuxt-link to="#" v-for="(link, idx) in services" :key="link.id" class="service__link"
                        data-aos="fade-up" :data-aos-duration="`${durations[idx]}`" data-aos-easing="ease-in-cubic">
                        <div class="Img_wr">
                            <img :src="require('../../static/images/' + link.img)" alt="">
                        </div>

                        <div class="service_tit">
                            <h3 class="descT">{{ link.name?.[$i18n.locale] }}</h3>
                        </div>
                    </nuxt-link>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import Scroll from '../../plugins/scrollPosition'
export default {
    name: 'interactive-services',
    data() {
        return {
            services: [
                {
                    id: 1,
                    name: {
                        uz: 'Qabul jadvali',
                        uzc: 'Қабул жадвали',
                        ru: 'График приема',
                    },
                    img: 'calendar.png'
                },
                {
                    id: 2,
                    name: {
                        uz: 'Virtual qabulxona',
                        uzc: 'Виртуал қабулхона',
                        ru: 'Виртуальная приемная'
                    },
                    img: 'note.png'
                },
                {
                    id: 3,
                    name: {
                        uz: 'Senatorga murojaat',
                        uzc: 'Сенаторга мурожаат',
                        ru: 'Обращение к сенатору'
                    },
                    img: 'mail.png'
                },
                {
                    id: 4,
                    name: {
                        uz: 'Axborot xizmati',
                        uzc: 'Ахборот хизмати',
                        ru: 'Информационная служба'
                    },
                    img: 'message.png'
                },
                {
                    id: 5,
                    name: {
                        uz: 'Mustaqillikning 31 yilligi',
                        uzc: 'Мустақилликнинг 31 йиллиги',
                        ru: '31-я годовщина независимости'
                    },
                    img: 'prog.png'
                },
                {
                    id: 6,
                    name: {
                        uz: 'Fotogalereya',
                        uzc: 'Фотогалерея',
                        ru: 'Фотогалерея'
                    },
                    img: 'gallery.png'
                }
            ],
            durations: [
                250, 500, 750,
                250, 500, 750
            ]
        }
    },
    mixins: [Scroll('scrollY')],

    // watch: {
    //     'scrollY': function (val) {
    //         console.log(val)
    //     }
    // }
}
</script>
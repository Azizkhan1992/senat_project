import Vue from "vue";
import Vuex from 'vuex'

Vue.use(Vuex);

export const state = () => ({
    socials: [
        {
            id: 1,
            link: '#',
            img: 'fb'
        },
        {
            id: 2,
            link: '#',
            img: 'tg'
        },
        {
            id: 3,
            link: '#',
            img: 'tw'
        },
        {
            id: 4,
            link: '#',
            img: 'yt'
        }
    ],
    menus: [
        {
            id: 1,
            name: {
                uz: 'Senat',
                uzc: 'Сенат',
                ru: 'Сенат'
            },
            subMenu: [
                {
                    id: 1,
                    name: {
                        uz: 'O\'zbekiston Respublikasi Oliy Majlisi',
                        uzc: 'Ўзбекистон Республикаси Олий Мажлиси',
                        ru: 'Олий Мажлис Республики Узбекистан'
                    },
                    link: '#'
                },
                {
                    id: 2,
                    name: {
                        uz: 'O\'zbekistonda parlamentarizmning rivojlanish tarixi',
                        uzc: 'Ўзбекистонда парламентаризмнинг ривожланиш тарихи',
                        ru: 'История развития парламентаризма в Узбекистане'
                    },
                    link: '#'
                },
                {
                    id: 3,
                    name: {
                        uz: 'Senat',
                        uzc: 'Сенат',
                        ru: 'Сенат'
                    },
                    link: '#'
                },
                {
                    id: 4,
                    name: {
                        uz: 'Senat rahbariyati',
                        uzc: 'Сенат раҳбарияти',
                        ru: 'Сенатское руководство'
                    },
                    link: 'leadership'
                },
                {
                    id: 5,
                    name: {
                        uz: 'Senat kengashi',
                        uzc: 'Сенат кенгаши',
                        ru: 'Совет Сената'
                    },
                    link: '#'
                },
                {
                    id: 6,
                    name: {
                        uz: 'Qo‘mitalar',
                        uzc: 'Қўмиталар',
                        ru: 'Комитеты'
                    },
                    link: 'committees'
                },
                {
                    id: 7,
                    name: {
                        uz: 'Komissiyalar',
                        uzc: 'Комиссиялар',
                        ru: 'Комиссии'
                    },
                    link: 'commissions'
                },
                {
                    id: 8,
                    name: {
                        uz: 'Senatorlar',
                        uzc: 'Сенаторлар',
                        ru: 'Senators'
                    },
                    link: 'senators'
                }
            ]
        },
        {
            id: 2,
            name: {
                uz: 'Hujjatlar',
                uzc: 'Ҳужжатлар',
                ru: 'Документы'
            },
            subMenu: [
                {
                    id: 6,
                    name: {
                        uz: 'Qonunlar',
                        uzc: 'Қонунлар',
                        ru: 'Законы'
                    },
                    link: '#'
                },
                {
                    id: 7,
                    name: {
                        uz: 'Qarorlar',
                        uzc: 'Қарорлар',
                        ru: 'Решения'
                    },
                    link: '#'
                }
            ]
        },
        {
            id: 3,
            name: {
                uz: 'Yalpi majlislar',
                uzc: 'Ялпи мажлислар',
                ru: 'Пленарные заседания'
            },
            link: '#'
        },
        {
            id: 4,
            name: {
                uz: 'Kengash majlislari',
                uzc: 'Кенгаш мажлислари',
                ru: 'Заседания Совета'
            },
            link: '#'
        },
        {
            id: 5,
            name: {
                uz: 'Tadbirlar',
                uzc: 'Тадбирлар',
                ru: 'События'
            },
            type: 'section',
            subMenu: [
                {
                    id: 8,
                    name: {
                        uz: 'Palatalarning qo\'shma majlislari',
                        uzc: 'Палаталарнинг қўшма мажлислари',
                        ru: 'Совместные заседания палат'
                    },
                    link: 'events/categories/Palatalarning qo\'shma majlislari'
                },
                {
                    id: 9,
                    name: {
                        uz: 'Qo\'mita va komissiyalar majlislari',
                        uzc: 'Қўмита ва комиссиялар мажлислари',
                        ru: 'Заседания комитетов и комиссий'
                    },
                    link: 'events/categories/Qo\'mita va komissiyalar majlislari'
                },
                {
                    id: 10,
                    name: {
                        uz: 'Konferensiyalar, davra suhbatlari, seminarlar va boshqa tadbirlar',
                        uzc: 'Конференсиялар, давра суҳбатлари, семинарлар ва бошқа тадбирлар',
                        ru: 'Конференции, круглые столы, семинары и другие мероприятия'
                    },
                    link: 'events/categories/Konferensiyalar, davra suhbatlari, seminarlar va boshqa tadbirlar'
                },
                {
                    id: 11,
                    name: {
                        uz: 'Tabriklar',
                        uzc: 'Табриклар',
                        ru: 'Поздравления'
                    },
                    link: 'events/categories/Tabriklar'
                },
                {
                    id: 12,
                    name: {
                        uz: 'Fuqaro murojaati',
                        uzc: 'Фуқаро мурожаати',
                        ru: 'Обращение граждан'
                    },
                    link: 'events/categories/Fuqaro murojaati'
                }
            ]
        },
        {
            id: 6,
            name: {
                uz: 'Xalqaro hamkorlik',
                uzc: 'Халқаро ҳамкорлик',
                ru: 'Международное сотрудничество'
            },
            subMenu: [
                {
                    id: 13,
                    name: {
                        uz: 'Xorijiy delegatsiyalar tashrifi',
                        uzc: 'Хорижий делегациялар ташрифи',
                        ru: 'Визит иностранных делегаций'
                    },
                    link: '#'
                },
                {
                    id: 14,
                    name: {
                        uz: 'Senat delegatsiyalarining xorijga safari',
                        uzc: 'Сенат делегацияларининг хорижга сафари',
                        ru: 'Поездка делегаций Сената за границу'
                    },
                    link: '#'
                },
                {
                    id: 15,
                    name: {
                        uz: 'Parlamentlararo hamkorlik',
                        uzc: 'Парламентлараро ҳамкорлик',
                        ru: 'Межпарламентское сотрудничество'
                    },
                    link: '#'
                }
            ]
        },
        {
            id: 7,
            name: {
                uz: 'Nazorat-tahlil faoliyati',
                uzc: 'Назорат-таҳлил фаолияти',
                ru: 'Мониторинг и анализ деятельности'
            },
            subMenu: [
                {
                    id: 16,
                    name: {
                        uz: 'Parlament eshituvlari',
                        uzc: 'Парламент эшитувлари',
                        ru: 'Парламентские слушания'
                    },
                    link: '#'
                },
                {
                    id: 17,
                    name: {
                        uz: 'Qonun hujjatlarining ijrosini o\'rganish',
                        uzc: 'Қонун ҳужжатларининг ижросини ўрганиш',
                        ru: 'Изучение оформления правоустанавливающих документов'
                    },
                    link: '#'
                }
            ]
        },
        {
            id: 8,
            name: {
                uz: 'Taraqqiyot strategiyasi',
                uzc: 'Тараққиёт стратегияси',
                ru: 'Стратегия развития'
            },
            link: '#'
        }
    ],
    hotNews: [
        {
            id: 1,
            selected: true,
            title: {
                uz: 'Senatda Sog\'liqni saqlash va Qurilish vazirliklarining axborotlari eshitildi',
                uzc: 'Сенатда Соғлиқни сақлаш ва Қурилиш вазирликларининг ахборотлари эшитилди',
                ru: 'Информация Минздрава заслушана в Сенате'
            },
            descript: {
                uz: 'Sog‘liqni saqlash vazirligi xorijiy kreditlar hisobiga xarid qilingan jihozlarning aksariyat qismi foydalanishga topshirilmagan. Vrach qabuliga masofadan turib yozilish...',
                uzc: 'Соғлиқни сақлаш вазирлиги хорижий кредитлар ҳисобига харид қилинган жиҳозларнинг аксарият қисми фойдаланишга топширилмаган. Врач қабулига масофадан туриб ёзилиш...',
                ru: 'Большая часть оборудования, закупленного Минздравом за счет иностранных кредитов, не введена в эксплуатацию. Запись на прием к врачу дистанционно...'
            },
            date: {
                uz: '12 noyabr, 2022 y',
                uzc: '12 ноябрь, 2022 й',
                ru: '12 ноября 2022 г.'
            },
            img: 'img1.png'
        },
        {
            id: 2,
            title: {
                uz: 'YeXHT bilan hamkorlik aloqalari yanada faollashadi',
                uzc: 'ЕХҲТ билан ҳамкорлик алоқалари янада фаоллашади',
                ru: 'Сотрудничество с ОБСЕ станет более активным'
            },
            descript: {
                uz: 'Bugun, 4 aprelь kuni Oliy Majlis Senati Kengashining navbatdagi majlisi bo‘lib o‘tdi. Uni Senat Raisi Tanzila Narbaeva olib bordi. Majlisda Senatning o‘ttiz to‘qqizinchi yalpi majlisini 2023 yilning 6 aprelь kuni chaqirish to‘g‘ris',
                uzc: 'Бугун, 4 апрель куни Олий Мажлис Сенати Кенгашининг навбатдаги мажлиси бўлиб ўтди. Уни Сенат Раиси Танзила Нарбаева олиб борди. Мажлисда Сенатнинг ўттиз тўққизинчи ялпи мажлисини 2023 йилнинг 6 апрель куни чақириш тўғрис',
                ru: 'Сегодня, 4 апреля, состоялось очередное заседание Совета Сената Олий Мажлиса. Его возглавила председатель Сената Танзила Нарбаева. Правильно созвать тридцать девятое пленарное заседание Сената 6 апреля 2023 года.'
            },
            date: {
                uz: '12 noyabr, 2022 y',
                uzc: '12 ноябрь, 2022 й',
                ru: '12 ноября 2022 г.'
            },
            img: 'img2.jpg'
        },
        {
            id: 3,
            title: {
                uz: 'Yangi tahrirdagi Mehnat kodeksining mazmun-mohiyati aholiga keng targ‘ib qilinmoqda',
                uzc: 'Янги таҳрирдаги Меҳнат кодексининг мазмун-моҳияти аҳолига кенг тарғиб қилинмоқда',
                ru: 'Содержание новой редакции Трудового кодекса широко доводится до населения'
            },
            descript: {
                uz: 'Joriy yilning 4 aprelь kuni Oliy Majlis Senati Raisi, Odam savdosiga va majburiy mehnatga qarshi kurashish milliy komissiyasi raisi Tanzila Narbaevaning “Better Cotton Initiattive” (BCI) xalqaro tashkilotining standartlar va',
                uzc: 'Жорий йилнинг 4 апрель куни Олий Мажлис Сенати Раиси, Одам савдосига ва мажбурий меҳнатга қарши курашиш миллий комиссияси раиси Танзила Нарбаеванинг “Better Cotton Initiattive” (BCI) халқаро ташкилотининг стандартлар ва',
                ru: '4 апреля текущего года Танзила Нарбаева, Председатель Сената Олий Мажлиса, Председатель Национальной комиссии по борьбе с торговлей людьми и принудительным трудом, представила нормы и стандарты международной организации «Инициатива лучшего хлопка» (BCI).'
            },
            date: {
                uz: '12 noyabr, 2022 y',
                uzc: '12 ноябрь, 2022 й',
                ru: '12 ноября 2022 г.'
            },
            img: 'img3.jpg'
        }
    ],

    news: [
        {
            id: 1,
            title: {
                uz: 'Qashqadaryo viloyatining turizm salohiyatini rivojlantirish...',
                uzc: 'Қашқадарё вилоятининг туризм салоҳиятини ривожлантириш...',
                ru: 'Развитие туристического потенциала Кашкадарьинской области...'
            },
            descript: {
                uz: 'Shahrisabz shahrida Senatning Xalqaro munosabatlar, tashqi iqtisodiy...',
                uzc: 'Шаҳрисабз шаҳрида Сенатнинг Халқаро муносабатлар, ташқи иқтисодий...',
                ru: 'В Шахрисабзе Сенат международных отношений, внешнеэкономической...'
            },
            date: {
                uz: '12 noyabrь, 2022 y',
                uzc: '12 ноябрь, 2022 й',
                ru: '12 ноября 2022 г.'
            },
            img: 'news1.png'
        },
        {
            id: 2,
            title: {
                uz: 'Oliy sud tarkibiga o‘zgartirishlar kiritish to‘g‘risidagi masala ko‘rib chiqildi',
                uzc: 'Олий суд таркибига ўзгартиришлар киритиш тўғрисидаги масала кўриб чиқилди',
                ru: 'Рассмотрен вопрос о внесении изменений в состав Верховного суда'
            },
            descript: {
                uz: 'Senatning o‘ttiz to‘qqizinchi yalpi majlisida Oliy sud tarkibiga o‘zgartirishlar kiritish to‘g‘risidagi masala ko‘rib chiqildi. Senat Sarvarbek Azimjonovich Raxmonov, Ibragim Mirzaraximovich Alimov va Azamat Shodmonovich Ikro',
                uzc: 'Сенатнинг ўттиз тўққизинчи ялпи мажлисида Олий суд таркибига ўзгартиришлар киритиш тўғрисидаги масала кўриб чиқилди. Сенат Сарварбек Азимжонович Рахмонов, Ибрагим Мирзарахимович Алимов ва Азамат Шодмонович Икро',
                ru: 'На тридцать девятом пленарном заседании Сената рассматривался вопрос о внесении изменений в состав Верховного суда. Сенат Сарварбек Азимжонович Рахмонов, Ибрагим Мирзарахимович Алимов и Азамат Шодмонович Икро'
            },
            date: {
                uz: '12 noyabrь, 2022 y',
                uzc: '12 ноябрь, 2022 й',
                ru: '12 ноября 2022 г.'
            },
            img: 'news2.jpg'
        },
        {
            id: 3,
            title: {
                uz: 'Orolbo‘yi mintaqasini kompleks rivojlantirish va ekologik barqarorligini ta\'minlashga oid muhim masalalar muhokama qilindi  ',
                uzc: 'Оролбўйи минтақасини комплекс ривожлантириш ва экологик барқарорлигини таъминлашга оид муҳим масалалар муҳокама қилинди',
                ru: 'Обсуждены важные вопросы, связанные с комплексным развитием островного региона и обеспечением экологической стабильности'
            },
            descript: {
                uz: 'Yalpi majlisda Orolbo‘yi mintaqasida ekologik barqarorlikni ta\'minlash hamda zamonaviy innovasion texnologiyalarni keng tatbiq qilish bo‘yicha belgilangan vazifalarning ijro etilishi holati muhokama qilindi. Ta\'kidlanga',
                uzc: 'Ялпи мажлисда Оролбўйи минтақасида экологик барқарорликни таъминлаш ҳамда замонавий инновацион технологияларни кенг татбиқ қилиш бўйича белгиланган вазифаларнинг ижро этилиши ҳолати муҳокама қилинди. Таъкидланга',
                ru: 'На пленарном заседании обсужден ход выполнения поставленных задач по обеспечению экологической стабильности и широкому применению современных инновационных технологий в Приаралье. Подчеркивать'
            },
            date: {
                uz: '12 noyabrь, 2022 y',
                uzc: '12 ноябрь, 2022 й',
                ru: '12 ноября 2022 г.'
            },
            img: 'news3.jpg'
        }
    ],

    tagNews: [
        {
            id: 1,
            title: {
                uz: 'YeXHT bilan hamkorlik aloqalari yanada faollashadi',
                uzc: 'ЕХҲТ билан ҳамкорлик алоқалари янада фаоллашади',
                ru: 'Сотрудничество с ОБСЕ станет более активным'
            },
            date: {
                uz: '12 noyabr, 2022 y',
                uzc: '12 ноябрь, 2022 й',
                ru: '12 ноября 2022 г.'
            },
            img: 'news4.png'
        },
        {
            id: 2,
            title: {
                uz: 'Oliy Majlis Senati Raisi Tanzila Narbaeva: Tashqi ishlar vazirligi tomonidan salmoqli ishlar amalga oshirilayotganini qayd etamiz',
                uzc: 'Олий Мажлис Сенати Раиси Танзила Нарбаева: Ташқи ишлар вазирлиги томонидан салмоқли ишлар амалга оширилаётганини қайд этамиз',
                ru: 'Председатель Сената Олий Мажлиса Танзила Нарбаева: Отмечаем, что важная работа проводится Министерством иностранных дел'
            },
            date: {
                uz: '12 noyabr, 2022 y',
                uzc: '12 ноябрь, 2022 й',
                ru: '12 ноября 2022 г.'
            },
            img: 'news5.png'
        },
        {
            id: 3,
            title: {
                uz: 'Senatning yalpi majlisida Tashqi ishlar vazirligining 2022 yildagi faoliyati to‘g‘risidagi axboroti eshitildi.',
                uzc: 'Сенатнинг ялпи мажлисида Ташқи ишлар вазирлигининг 2022 йилдаги фаолияти тўғрисидаги ахбороти эшитилди.',
                ru: 'Информация о деятельности МИД в 2022 году была заслушана на пленарном заседании Сената.'
            },
            date: {
                uz: '12 noyabr, 2022 y',
                uzc: '12 ноябрь, 2022 й',
                ru: '12 ноября 2022 г.'
            },
            img: 'news6.png'
        }
    ],

    assemblies: [
        {
            id: 1,
            number: 30,
            title: {
                uz: 'Yalpi Majlis',
                uzc: 'Ялпи Мажлис',
                ru: 'Генеральная Ассамблея'
            },
            date: {
                uz: '2-4 Noyabrь, 2022 yil',
                uzc: '2-4 Ноябрь, 2022 йил',
                ru: '2-4 ноября 2022 г.'
            }
        },
        {
            id: 2,
            number: 23,
            title: {
                uz: 'Yalpi Majlis',
                uzc: 'Ялпи Мажлис',
                ru: 'Генеральная Ассамблея'
            },
            date: {
                uz: '2-4 Noyabrь, 2022 yil',
                uzc: '2-4 Ноябрь, 2022 йил',
                ru: '2-4 ноября 2022 г.'
            }
        },
        {
            id: 3,
            number: 21,
            title: {
                uz: 'Yalpi Majlis',
                uzc: 'Ялпи Мажлис',
                ru: 'Генеральная Ассамблея'
            },
            date: {
                uz: '2-4 Noyabrь, 2022 yil',
                uzc: '2-4 Ноябрь, 2022 йил',
                ru: '2-4 ноября 2022 г.'
            }
        },
        {
            id: 4,
            number: 20,
            title: {
                uz: 'Yalpi Majlis',
                uzc: 'Ялпи Мажлис',
                ru: 'Генеральная Ассамблея'
            },
            date: {
                uz: '2-4 Noyabrь, 2022 yil',
                uzc: '2-4 Ноябрь, 2022 йил',
                ru: '2-4 ноября 2022 г.'
            }
        },
    ],

    activeAssembly: {
        number: 31,
        title: {
            uz: 'Yalpi Majlis',
            uzc: 'Ялпи Мажлис',
            ru: 'Генеральная Ассамблея'
        },
        date: {
            uz: '',
            uzc: '2-4 Ноябрь, 2022 йил',
            ru: '2-4 Noyabrь, 2022 yil'
        },
        img: 'assembly.png',
        link: 'https://www.youtube.com/watch?v=Wbwh7vuXmQY',
        plans: [
            {
                id: 1,
                title: {
                    uz: 'Kun tartibi',
                    uzc: 'Кун тартиби',
                    ru: 'Повестка дня'
                }
            },
            {
                id: 2,
                title: {
                    uz: 'Qabul qilingan hujjatlar',
                    uzc: 'Қабул қилинган ҳужжатлар',
                    ru: 'Принятые документы'
                }
            },
            {
                id: 3,
                title: {
                    uz: 'Majlis yangiliklari',
                    uzc: 'Мажлис янгиликлари',
                    ru: 'Новости встречи'
                }
            }
        ]
    },

    allSenators: [
        {
            id: 1,
            district: 1,
            assembly: 1,
            name: {
                uz: 'Narbaeva Tanzila Kamalovna',
                uzc: 'Нарбаева Танзила Камаловна',
                ru: 'Нарбаева Танзила Камаловна'
            },
            step: {
                uz: 'O‘zbekiston Respublikasi Oliy Majlisi Senati Raisi',
                uzc: 'Ўзбекистон Республикаси Олий Мажлиси Сенати Раиси',
                ru: 'Председатель Сената Олий Мажлиса Республики Узбекистан'
            },
            img: 'Narbayeva-Tanzila.jpg'
        },
        {
            id: 2,
            district: 1,
            assembly: 2,
            name: {
                uz: 'Ziyo Azamat Hamid o‘g‘li',
                uzc: 'Зиё Азамат Ҳамид ўғли',
                ru: 'Зия Азамат Хамидович'
            },
            step: {
                uz: 'O‘zbekiston Respublikasi Fanlar akademiyasi Tarix instituti direktori',
                uzc: 'Ўзбекистон Республикаси Фанлар академияси Тарих институти директори',
                ru: 'Директор Института истории Академии наук Республики Узбекистан'
            },
            img: 'img1.jpg'
        },
        {
            id: 3,
            district: 1,
            assembly: 3,
            name: {
                uz: 'Tashmuxamedova Diloram Gafurdjanovna ',
                uzc: 'Ташмухамедова Дилорам Гафурджановна',
                ru: 'Ташмухамедова Дилорам Гафурджановна'
            },
            step: {
                uz: 'Senatning Yoshlar, madaniyat va sport masalalari qo‘mitasi raisi o‘rinbosari',
                uzc: 'Сенатнинг Ёшлар, маданият ва спорт масалалари қўмитаси раиси ўринбосари',
                ru: 'Заместитель председателя комитета по делам молодежи, культуры и спорта Сената'
            },
            img: 'img2.jpg'
        },
        {
            id: 4,
            district: 2,
            assembly: 5,
            name: {
                uz: 'Cho‘lliev Shuxrat Askarovich',
                uzc: 'Чўллиев Шухрат Аскарович',
                ru: 'Чуллиев Шухрат Аскарович'
            },
            step: {
                uz: 'Senatning Sud-huquq masalalari va korrupsiyaga qarshi kurashish qo‘mitasi raisi o‘rinbosari',
                uzc: 'Сенатнинг Суд-ҳуқуқ масалалари ва коррупцияга қарши курашиш қўмитаси раиси ўринбосари',
                ru: 'Заместитель председателя Комитета по судебной власти и борьбе с коррупцией Сената'
            },
            img: 'img3.jpg'
        },
        {
            id: 5,
            district: 2,
            assembly: 4,
            name: {
                uz: 'Xuseynova Abira Amanovna',
                uzc: 'Хусейнова Абира Амановна',
                ru: 'Хусейнова Абира Амановна'
            },
            step: {
                uz: 'O‘zbekiston Respublikasi Oliy Majlisining Inson huquqlari bo‘yicha vakilining (ombudsmanning) Buxoro viloyatidagi mintaqaviy vakili',
                uzc: 'Ўзбекистон Республикаси Олий Мажлисининг Инсон ҳуқуқлари бўйича вакилининг (омбудсманнинг) Бухоро вилоятидаги минтақавий вакили',
                ru: 'Региональный представитель Уполномоченного по правам человека (омбудсмена) Олий Мажлиса Республики Узбекистан в Бухарской области'
            },
            img: 'img4.jpg'
        },
        {
            id: 6,
            district: 2,
            assembly: 2,
            name: {
                uz: 'Zaripov Botir Komilovich',
                uzc: 'Зарипов Ботир Комилович',
                ru: 'Зарипов Ботир Комилович'
            },
            step: {
                uz: 'Buxoro viloyati hokimi',
                uzc: 'Бухоро вилояти ҳокими',
                ru: 'Хоким Бухарской области'
            },
            img: 'img5.jpg'
        },
        {
            id: 7,
            district: 3,
            assembly: 6,
            name: {
                uz: 'Alimov Ravshanbek Azadbekovich',
                uzc: 'Алимов Равшанбек Азадбекович',
                ru: 'Алимов Равшанбек Азадбекович'
            },
            step: {
                uz: 'Senatning Xalqaro munosabatlar, tashqi iqtisodiy aloqalar, xorijiy investisiyalar va turizm masalalari qo‘mitasi raisi',
                uzc: 'Сенатнинг Халқаро муносабатлар, ташқи иқтисодий алоқалар, хорижий инвестициялар ва туризм масалалари қўмитаси раиси',
                ru: 'Председатель комитета Сената по международным отношениям, внешнеэкономическим связям, иностранным инвестициям и туризму'
            },
            img: 'img6.jpg'
        },
        {
            id: 8,
            district: 3,
            assembly: 5,
            name: {
                uz: 'Abduraxmanov Shuxratbek Qushaqbaevich',
                uzc: 'Абдурахманов Шухратбек Кушақбаевич',
                ru: 'Абдурахманов Шухратбек Кушакбаевич'
            },
            step: {
                uz: 'Andijon viloyati hokimi',
                uzc: 'Андижон вилояти ҳокими',
                ru: 'Хоким Андижанской области'
            },
            img: 'img7.jpg'
        },
        {
            id: 9,
            district: 3,
            assembly: 6,
            name: {
                uz: 'Iminov Odiljon Karimovich',
                uzc: 'Иминов Одилжон Каримович',
                ru: 'Иминов Одилжон Каримович'
            },
            step: {
                uz: 'Senatning Fan, ta\'lim va sog‘liqni saqlash masalalari qo‘mitasi raisi',
                uzc: 'Сенатнинг Фан, таълим ва соғлиқни сақлаш масалалари қўмитаси раиси',
                ru: 'Председатель комитета Сената по науке, образованию и здравоохранению'
            },
            img: 'img8.jpg'
        },
        {
            id: 10,
            district: 4,
            assembly: 4,
            name: {
                uz: 'Salimova Manzura Alimovna',
                uzc: 'Салимова Манзура Алимовна',
                ru: 'Салимова Манзура Алимовна'
            },
            step: {
                uz: 'Fan, ta\'lim va sog‘liqni saqlash masalalari qo‘mitasida doimiy asosda ishlovchi senator',
                uzc: 'Фан, таълим ва соғлиқни сақлаш масалалари қўмитасида доимий асосда ишловчи сенатор',
                ru: 'Сенатор, работающий на постоянной основе в Комитете по науке, образованию и здравоохранению'
            },
            img: 'img9.jpg'
        },
        {
            id: 11,
            district: 4,
            assembly: 1,
            name: {
                uz: 'Bozarov Xayrullo Xayitbaevich',
                uzc: 'Бозаров Хайрулло Хайитбаевич',
                ru: 'Бозаров Хайрулло Хайитбаевич'
            },
            step: {
                uz: 'Farg‘ona viloyati hokimi',
                uzc: 'Фарғона вилояти ҳокими',
                ru: ' Хоким Ферганской области'
            },
            img: 'img10.jpg'
        },
        {
            id: 12,
            district: 4,
            assembly: 5,
            name: {
                uz: 'Sultanov Ibroxim Ashiralievich ',
                uzc: 'Султанов Иброхим Аширалиевич',
                ru: 'Султанов Иброхим Аширалиевич'
            },
            step: {
                uz: 'Farg‘ona viloyati Qo‘shtepa tumani “Ismoiljon gilamlari” xususiy ishlab chiqarish korxonasi rahbari',
                uzc: 'Фарғона вилояти Қўштепа тумани “Исмоилжон гиламлари” хусусий ишлаб чиқариш корхонаси раҳбари',
                ru: 'Руководитель частного производственного предприятия «Исмаилджанские ковры» Коштепинского района Ферганской области'
            },
            img: 'img11.jpg'
        },
        {
            id: 13,
            district: 5,
            assembly: 3,
            name: {
                uz: 'Alimova Xalida Raufovna',
                uzc: 'Алимова Халида Рауфовна',
                ru: 'Алимова Халида Рауфовна'
            },
            step: {
                uz: 'Jizzax viloyati bolalar ko‘p tarmoqli tibbiyot markazi bosh vrachi Jizzax viloyati bolalar ko‘p tarmoqli tibbiyot markazi bosh shifokori',
                uzc: 'Жиззах вилояти болалар кўп тармоқли тиббиёт маркази бош врачи Жиззах вилояти болалар кўп тармоқли тиббиёт маркази бош шифокори',
                ru: 'Главный врач Детского многопрофильного медицинского центра Джизакской области Главный врач Детского многопрофильного медицинского центра Джизакской области'
            },
            img: 'img12.jpg'
        },
        {
            id: 14,
            district: 5,
            assembly: 4,
            name: {
                uz: 'Muxtorova Nazira Abdusattarovna',
                uzc: 'Мухторова Назира Абдусаттаровна',
                ru: 'Мухторова Назира Абдусаттаровна'
            },
            step: {
                uz: 'Jizzax viloyati hokimi o‘rinbosari – oila va xotin-qizlar boshqarmasi boshlig‘i vazifasini bajaruvchi',
                uzc: 'Жиззах вилояти ҳокими ўринбосари – оила ва хотин-қизлар бошқармаси бошлиғи вазифасини бажарувчи',
                ru: 'Заместитель хакима Джизакской области – и.о. начальника управления семьи и женщин'
            },
            img: 'img13.jpg'
        },
        {
            id: 15,
            district: 5,
            assembly: 2,
            name: {
                uz: 'Saliev Ergash Alibekovich',
                uzc: 'Салиев Эргаш Алибекович',
                ru: 'Салиев Эргаш Алибекович'
            },
            step: {
                uz: 'Jizzax viloyati hokimi',
                uzc: 'Жиззах вилояти ҳокими',
                ru: 'Хоким Джизакской области'
            },
            img: 'img14.jpg'
        },
        {
            id: 16,
            district: 6,
            assembly: 4,
            name: {
                uz: 'Orinbaev Amanbay Tleubaevich',
                uzc: 'Оринбаев Аманбай Тлеубаевич',
                ru: 'Оринбаев Аманбай Тлеубаевич'
            },
            step: {
                uz: 'O‘zbekiston Respublikasi Oliy Majlisi Senati Raisi o‘rinbosari, Qoraqalpog‘iston Respublikasi Jo‘qorg‘i Kengesi Raisi',
                uzc: 'Ўзбекистон Республикаси Олий Мажлиси Сенати Раиси ўринбосари, Қорақалпоғистон Республикаси Жўқорғи Кенгеси Раиси',
                ru: 'Заместитель Председателя Сената Олий Мажлиса Республики Узбекистан, Председатель Джокорг Совета Республики Каракалпакстан'
            },
            img: 'img15.png'
        },
        {
            id: 17,
            district: 6,
            assembly: 3,
            name: {
                uz: 'Ataniyazova Oral Aminovna',
                uzc: 'Атаниязова Орал Аминовна',
                ru: 'Атаниязова Орал Аминовна'
            },
            step: {
                uz: 'Qoraqalpog‘iston tibbiyot instituti rektori',
                uzc: 'Қорақалпоғистон тиббиёт институти ректори',
                ru: 'Ректор Каракалпакского медицинского института'
            },
            img: 'img16.jpg'
        },
        {
            id: 18,
            district: 6,
            assembly: 2,
            name: {
                uz: 'Matmuratov Batir Djoldasovich',
                uzc: 'Матмуратов Батир Джолдасович',
                ru: 'Матмуратов Батыр Джолдасович'
            },
            step: {
                uz: 'Senatning Orolbo‘yi mintaqasini rivojlantirish masalalari va ekologiya qo‘mitasi raisi o‘rinbosari',
                uzc: 'Сенатнинг Оролбўйи минтақасини ривожлантириш масалалари ва экология қўмитаси раиси ўринбосари',
                ru: 'Заместитель председателя комитета Сената по развитию Приаралья и экологии'
            },
            img: 'img17.jpg'
        },
        {
            id: 19,
            district: 7,
            assembly: 1,
            name: {
                uz: 'Abdullaxanov Nosirbek Abdurashitovich',
                uzc: 'Абдуллаханов Носирбек Абдурашитович',
                ru: 'Абдуллаханов Насирбек Абдурашитович'
            },
            step: {
                uz: 'Namangan shahridagi “ANAMED” diagnostika markazi direktori',
                uzc: 'Наманган шаҳридаги “АNAMED” диагностика маркази директори',
                ru: 'Директор диагностического центра "ANAMED" г. Наманган'
            },
            img: 'img18.jpg'
        },
        {
            id: 20,
            district: 7,
            assembly: 6,
            name: {
                uz: 'Dobrix Anna Konstantinovna',
                uzc: 'Добрих Анна Константиновна',
                ru: 'Добрих Анна Константиновна'
            },
            step: {
                uz: 'Namangan shahridagi “Iftixor kiyim sanoat” mas\'uliyati cheklangan jamiyati rahbari',
                uzc: 'Наманган шаҳридаги “Ифтихор кийим саноат” масъулияти чекланган жамияти раҳбари',
                ru: 'Руководитель Общества с ограниченной ответственностью «Ифтихор Швейная Индустрия» в г. Наманган'
            },
            img: 'img19.jpg'
        },
        {
            id: 21,
            district: 7,
            assembly: 5,
            name: {
                uz: 'Abdurazakov Shavkat Shokirdjanovich',
                uzc: 'Абдуразаков Шавкат Шокирджанович',
                ru: 'Абдуразаков Шавкат Шокирджанович'
            },
            step: {
                uz: 'Namangan viloyati hokimi',
                uzc: 'Наманган вилояти ҳокими',
                ru: 'Хоким Наманганской области'
            },
            img: 'img20.jpg'
        },
        {
            id: 22,
            district: 8,
            assembly: 3,
            name: {
                uz: 'Orzieva Dilbar Adizovna',
                uzc: 'Орзиева Дилбар Адизовна',
                ru: 'Орзиева Дилбар Адизовна'
            },
            step: {
                uz: 'Navoiy viloyati Karmana tumanidagi “Yangi zamon bolalari” oilaviy mehribonlik uyi tarbiyachisi',
                uzc: 'Навоий вилояти Кармана туманидаги “Yangi zamon bolalari” оилавий меҳрибонлик уйи тарбиячиси',
                ru: 'Воспитатель семейного детского дома «Yangi zamon bolalari» Карманинского района Навоийской области'
            },
            img: 'img21.jpg'
        },
        {
            id: 23,
            district: 8,
            assembly: 1,
            name: {
                uz: 'Tursunov Kobul Beknazarovich',
                uzc: 'Турсунов Кобул Бекназарович',
                ru: 'Турсунов Кобул Бекназарович'
            },
            step: {
                uz: 'Senatning Byudjet va iqtisodiy islohotlar masalalari qo‘mitasi raisi o‘rinbosari',
                uzc: 'Сенатнинг Бюджет ва иқтисодий ислоҳотлар масалалари қўмитаси раиси ўринбосари',
                ru: 'Заместитель председателя Комитета по бюджету и экономическим реформам Сената'
            },
            img: 'img22.jpg'
        },
        {
            id: 24,
            district: 8,
            assembly: 4,
            name: {
                uz: 'Tursunov Normat To‘lkinovich',
                uzc: 'Турсунов Нормат Тўлкинович',
                ru: 'Турсунов Нормат Тулкинович'
            },
            step: {
                uz: 'Navoiy viloyati hokimi',
                uzc: 'Навоий вилояти ҳокими',
                ru: 'Хоким Навоийской области'
            },
            img: 'img23.jpg'
        },
        {
            id: 25,
            district: 9,
            assembly: 5,
            name: {
                uz: 'Irkaev Abduraxim Pandjievich',
                uzc: 'Иркаев Абдурахим Панджиевич',
                ru: 'Иркаев Абдурахим Панджиевич'
            },
            step: {
                uz: 'Qashqadaryo viloyati Qarshi davlat universitetining “Milliy g‘oya va ma\'naviyat asoslari” kafedrasi professori',
                uzc: 'Қашқадарё вилояти Қарши давлат университетининг “Миллий ғоя ва маънавият асослари” кафедраси профессори',
                ru: 'профессор кафедры «Основы национальной мысли и духовности» Каршинского государственного университета Кашкадарьинской области'
            },
            img: 'img24.jpg'
        },
        {
            id: 26,
            district: 9,
            assembly: 5,
            name: {
                uz: 'Azimov Murotjon Berdialievich',
                uzc: 'Азимов Муротжон Бердиалиевич',
                ru: 'Азимов Муротжон Бердиалиевич'
            },
            step: {
                uz: 'Qashqadaryo viloyati hokimi',
                uzc: 'Қашқадарё вилояти ҳокими',
                ru: 'Хоким Кашкадарьинской области'
            },
            img: 'img25.jpg'
        },
        {
            id: 27,
            district: 9,
            assembly: 1,
            name: {
                uz: 'Kurbanov Ilxam Uzakovich ',
                uzc: 'Курбанов Илхам Узакович',
                ru: 'Курбанов Илхам Узакович'
            },
            step: {
                uz: 'Qarshi magistral kanalidan foydalanish boshqarmasi boshlig‘i',
                uzc: 'Қарши магистрал каналидан фойдаланиш бошқармаси бошлиғи',
                ru: 'Начальник отдела по использованию Каршинского магистрального канала'
            },
            img: 'img26.jpg'
        },
        {
            id: 28,
            district: 10,
            assembly: 4,
            name: {
                uz: 'Alimova Gavhar Zayirovna',
                uzc: 'Алимова Гавҳар Зайировна',
                ru: 'Алимова Гавхар Заировна'
            },
            step: {
                uz: 'Samarqand viloyati Kattaqo‘rg‘on shahar hokimi',
                uzc: 'Самарқанд вилояти Каттақўрғон шаҳар ҳокими',
                ru: 'Хоким города Каттакорган Самаркандской области'
            },
            img: 'img27.jpg'
        },
        {
            id: 29,
            district: 10,
            assembly: 6,
            name: {
                uz: 'Djalolov Shavkat Amonovich',
                uzc: 'Джалолов Шавкат Амонович',
                ru: 'Джалолов Шавкат Амонович'
            },
            step: {
                uz: '“Agromir group” direktorlar assosiasiyasi kengashi raisi',
                uzc: '“Agromir group” директорлар ассоциацияси кенгаши раиси',
                ru: 'Председатель Совета директоров Ассоциации «Agromir group».'
            },
            img: 'img28.jpg'
        },
        {
            id: 30,
            district: 10,
            assembly: 3,
            name: {
                uz: 'Turdimov Erkinjon Oqbutaevich',
                uzc: 'Турдимов Эркинжон Оқбутаевич',
                ru: 'Турдимов Эркинжон Окбутаевич'
            },
            step: {
                uz: 'Samarqand viloyati hokimi',
                uzc: 'Самарқанд вилояти ҳокими',
                ru: 'Хоким Самаркандской области'
            },
            img: 'img29.jpg'
        },
        {
            id: 31,
            district: 11,
            assembly: 2,
            name: {
                uz: 'Bo‘taeva Baxtigul Abraxmatovna',
                uzc: 'Бўтаева Бахтигул Абрахматовна',
                ru: 'Бутаева Бахтигуль Абрахматовна'
            },
            step: {
                uz: 'Surxondaryo viloyati Qiziriq tumani 17-umumiy o‘rta ta\'lim maktabi direktori',
                uzc: 'Сурхондарё вилояти Қизириқ тумани 17-умумий ўрта таълим мактаби директори',
                ru: 'Директор 17-й общеобразовательной школы Кызырикского района Сурхандарьинской области'
            },
            img: 'img30.jpg'
        },
        {
            id: 32,
            district: 11,
            assembly: 4,
            name: {
                uz: 'Kadirov Baxadir Tuxtaevich',
                uzc: 'Кадиров Бахадир Тухтаевич',
                ru: 'Кадиров Бахадир Тухтаевич'
            },
            step: {
                uz: 'Termiz shahri “Surxon sanoat qurilish” kompaniyasi boshqaruvi raisi',
                uzc: 'Термиз шаҳри “Сурхон саноат қурилиш” компанияси бошқаруви раиси',
                ru: 'Председатель правления компании “Surxon sanoat qurilish” Термеза'
            },
            img: 'img31.jpg'
        },
        {
            id: 33,
            district: 11,
            assembly: 6,
            name: {
                uz: 'Sanginov Abdug\'ani Abduraxmonovich',
                uzc: 'Сангинов Абдугани Абдурахмонович',
                ru: 'Сангинов Абдугани Абдурахмонович'
            },
            step: {
                uz: '“O‘zbekgidroenergo” aksiyadorlik jamiyati boshqaruvi raisi',
                uzc: '“Ўзбекгидроэнерго” акциядорлик жамияти бошқаруви раиси',
                ru: 'Председатель Правления Акционерного Общества «Узбекгидроэнерго»'
            },
            img: 'img32.jpg'
        },
        {
            id: 34,
            district: 12,
            assembly: 5,
            name: {
                uz: 'Kadirxanova Malika Akbarovna',
                uzc: 'Кадирханова Малика Акбаровна',
                ru: 'Кадирханова Малика Акбаровна'
            },
            step: {
                uz: 'Senatning Xotin-qizlar va gender tenglik masalalari qo‘mitasi raisi',
                uzc: 'Сенатнинг Хотин-қизлар ва гендер тенглик масалалари қўмитаси раиси',
                ru: 'Председатель комитета по делам женщин и гендерному равенству Сената'
            },
            img: 'img33.jpg'
        },
        {
            id: 35,
            district: 12,
            assembly: 1,
            name: {
                uz: 'Burxanov Kutbidin Nukritdinovich',
                uzc: 'Бурханов Кутбидин Нукритдинович',
                ru: 'Бурханов Кутбидин Нукритдинович'
            },
            step: {
                uz: 'Senatning Mudofaa va xavfsizlik masalalari qo‘mitasi raisi',
                uzc: 'Сенатнинг Мудофаа ва хавфсизлик масалалари қўмитаси раиси',
                ru: 'Председатель комитета Сената по вопросам обороны и безопасности'
            },
            img: 'img34.jpg'
        },
        {
            id: 36,
            district: 12,
            assembly: 2,
            name: {
                uz: 'Mirzaev Zoyir Toirovich',
                uzc: 'Мирзаев Зойир Тоирович',
                ru: 'Мирзаев Зойир Тоирович'
            },
            step: {
                uz: 'Toshkent viloyati hokimi',
                uzc: 'Тошкент вилояти ҳокими',
                ru: 'Хоким Ташкентской области'
            },
            img: 'img35.jpg'
        },
        {
            id: 37,
            district: 13,
            assembly: 3,
            name: {
                uz: 'Durdieva Gavhar Salaevna',
                uzc: 'Дурдиева Гавҳар Салаевна',
                ru: 'Дурдиева Гавхар Салаевна'
            },
            step: {
                uz: 'O‘zbekiston Respublikasi Fanlar akademiyasi mintaqaviy bo‘limi - Xorazm Ma\'mun akademiyasi ilmiy laboratoriya mudiri',
                uzc: 'Ўзбекистон Республикаси Фанлар академияси минтақавий бўлими - Хоразм Маъмун академияси илмий лаборатория мудири',
                ru: 'Региональное отделение Академии наук Республики Узбекистан – заведующий научной лабораторией Хорезмской академии Маъмуна'
            },
            img: 'img36.jpeg'
        },
        {
            id: 38,
            district: 13,
            assembly: 4,
            name: {
                uz: 'Kurbanov Ravshanbek Davletovich',
                uzc: 'Курбанов Равшанбек Давлетович',
                ru: 'Курбанов Равшанбек Давлетович'
            },
            step: {
                uz: 'Respublika ixtisoslashtirilgan kardiologiya ilmiy-amaliy tibbiyot markazi direktori maslahatchisi',
                uzc: 'Республика ихтисослаштирилган кардиология илмий-амалий тиббиёт маркази директори маслаҳатчиси',
                ru: 'Советник директора Республиканского специализированного кардиологического научно-практического медицинского центра'
            },
            img: 'img36.jpg'
        },
        {
            id: 39,
            district: 13,
            assembly: 2,
            name: {
                uz: 'Sadullaeva Faraxat Aminovna',
                uzc: 'Садуллаева Фарахат Аминовна',
                ru: 'Садуллаева Фарахат Аминовна'
            },
            step: {
                uz: 'Xorazm viloyati Xotin-qizlar tadbirkorlik markazi rahbari',
                uzc: 'Хоразм вилояти Хотин-қизлар тадбиркорлик маркази раҳбари',
                ru: 'Руководитель Хорезмского областного центра женского предпринимательства'
            },
            img: 'img37.jpg'
        },
        {
            id: 40,
            district: 14,
            assembly: 2,
            name: {
                uz: 'Boqiev Farxod Esanovich',
                uzc: 'Боқиев Фарход Эсанович',
                ru: 'Бокиев Фарход Эсанович'
            },
            step: {
                uz: 'Senatning Axborot siyosati va davlat organlarida ochiqlikni ta\'minlash masalalari qo‘mitasi raisi o‘rinbosari',
                uzc: 'Сенатнинг Ахборот сиёсати ва давлат органларида очиқликни таъминлаш масалалари қўмитаси раиси ўринбосари',
                ru: 'Заместитель председателя комитета Сената по информационной политике и прозрачности в государственных органах'
            },
            img: 'Boqiyev-Farxod.jpg'
        },
        {
            id: 41,
            district: 14,
            assembly: 6,
            name: {
                uz: 'Artukbaeva Xaytxan',
                uzc: 'Артукбаева Хайтхан',
                ru: 'Артукбаева Хайтхан'
            },
            step: {
                uz: 'O‘zbekiston Yozuvchilar uyushmasi Sirdaryo viloyati bo‘limi rahbari',
                uzc: 'Ўзбекистон Ёзувчилар уюшмаси Сирдарё вилояти бўлими раҳбари',
                ru: 'Председатель Сырдарьинского областного отделения Союза писателей Узбекистана'
            },
            img: 'img38.jpg'
        },
        {
            id: 42,
            district: 14,
            assembly: 1,
            name: {
                uz: 'Sotiboldiev Ulug‘bek Norxojaevich',
                uzc: 'Сотиболдиев Улуғбек Норхожаевич',
                ru: 'Сотиболдиев Улугбек Норходжаевич'
            },
            step: {
                uz: '“BEK CORP” Mas\'uliyati cheklangan jamiyati bosh direktori',
                uzc: '“BEK CORP” Масъулияти чекланган жамияти бош директори',
                ru: 'Генеральный директор Общества с ограниченной ответственностью "BEK CORP"'
            },
            img: 'img39.jpg'
        }
    ],

    senators: [],

    byDistrict: null,
    byAssembly: null,

    appealStatistics: [
        {
            id: 1,
            title: {
                uz: 'Kelib tushgan arizalar',
                uzc: 'Келиб тушган аризалар',
                ru: 'Входящие заявки'
            },
            number: '4 154'
        },
        {
            id: 2,
            title: {
                uz: 'Hal qilingan arizalar',
                uzc: 'Ҳал қилинган аризалар',
                ru: 'Решенные приложения'
            },
            number: '451'
        },
        {
            id: 3,
            title: {
                uz: 'Rad etilgan arizalar',
                uzc: 'Рад этилган аризалар',
                ru: 'Отклоненные заявки'
            },
            number: '785'
        },
        {
            id: 4,
            title: {
                uz: 'Ko‘rib chiqilmoqda',
                uzc: 'Кўриб чиқилмоқда',
                ru: 'На рассмотрении'
            },
            number: '2 574'
        }
    ],

    homeArticles: [
        {
            id: 1,
            title: {
                uz: 'O‘zbekiston mintaqaviy va global masalalarga yechim topishda asosiy tashabbuskorga aylanmoqda',
                uzc: 'Ўзбекистон минтақавий ва глобал масалаларга ечим топишда асосий ташаббускорга айланмоқда',
                ru: 'Узбекистан становится главным инициатором в поиске решений региональных и глобальных вопросов'
            },
            date: {
                uz: '12 noyabrь, 2022 y',
                uzc: '12 ноябрь, 2022 й',
                ru: '12 ноября 2022 г.'
            }
        },
        {
            id: 2,
            title: {
                uz: 'Sirdaryo-Qonliko‘l do‘stlik bayrami barchaga yuqori kayfiyat ulashdi',
                uzc: 'Сирдарё-Қонликўл дўстлик байрами барчага юқори кайфият улашди',
                ru: 'Праздник дружбы «Сырдарья-Конликоль» подарил всем хорошее настроение'
            },
            date: {
                uz: '12 noyabrь, 2022 y',
                uzc: '12 ноябрь, 2022 й',
                ru: '12 ноября 2022 г.'
            }
        },
        {
            id: 3,
            title: {
                uz: 'O‘zbekiston mintaqaviy va global masalalarga yechim topishda asosiy tashabbuskorga aylanmoqda',
                uzc: 'Ўзбекистон минтақавий ва глобал масалаларга ечим топишда асосий ташаббускорга айланмоқда',
                ru: 'Узбекистан становится главным инициатором в поиске решений региональных и глобальных вопросов'
            },
            date: {
                uz: '12 noyabrь, 2022 y',
                uzc: '12 ноябрь, 2022 й',
                ru: '12 ноября 2022 г.'
            }
        },
        {
            id: 4,
            title: {
                uz: 'Tinchlik va ezgulik ovozi bo‘lib jaranglagan anjuman',
                uzc: 'Тинчлик ва эзгулик овози бўлиб жаранглаган анжуман',
                ru: 'Конференция, прозвучавшая голосом мира и добра'
            },
            date: {
                uz: '12 noyabrь, 2022 y',
                uzc: '12 ноябрь, 2022 й',
                ru: '12 ноября 2022 г.'
            }
        },
        {
            id: 5,
            title: {
                uz: 'Senat Bundestag bilan hamkorlikni faollashtiradi',
                uzc: 'Сенат Бундестаг билан ҳамкорликни фаоллаштиради',
                ru: 'Сенат активизирует сотрудничество с Бундестагом'
            },
            date: {
                uz: '12 noyabrь, 2022 y',
                uzc: '12 ноябрь, 2022 й',
                ru: '12 ноября 2022 г.'
            }
        },
        {
            id: 6,
            title: {
                uz: 'Senat qo‘mitalari qo‘shma majlisida xalq ta\'limi vazirining axboroti eshitildi',
                uzc: 'Сенат қўмиталари қўшма мажлисида халқ таълими вазирининг ахбороти эшитилди',
                ru: 'Информация министра народного просвещения заслушана на совместном заседании комитетов Сената'
            },
            date: {
                uz: '12 noyabrь, 2022 y',
                uzc: '12 ноябрь, 2022 й',
                ru: '12 ноября 2022 г.'
            }
        },
        {
            id: 7,
            title: {
                uz: 'ShHTning Samarqand sammiti mamlakatlar taraqqiyotining garovi',
                uzc: 'ШҲТнинг Самарқанд саммити мамлакатлар тараққиётининг гарови',
                ru: 'Самаркандский саммит ШОС – залог развития стран'
            },
            date: {
                uz: '12 noyabrь, 2022 y',
                uzc: '12 ноябрь, 2022 й',
                ru: '12 ноября 2022 г.'
            }
        },
        {
            id: 8,
            title: {
                uz: 'Samarqand sammiti ShHT makonida butkul yangi davrni boshlab beradi',
                uzc: 'Самарқанд саммити ШҲТ маконида буткул янги даврни бошлаб беради',
                ru: 'Саммит в Самарканде откроет совершенно новую эру на пространстве ШОС'
            },
            date: {
                uz: '12 noyabrь, 2022 y',
                uzc: '12 ноябрь, 2022 й',
                ru: '12 ноября 2022 г.'
            }
        }
    ],

    videoGallery: [
        {
            id: 1,
            title: {
                uz: 'Qashqadaryo viloyatining turizm salohiyatini rivojlantirish...',
                uzc: 'Қашқадарё вилоятининг туризм салоҳиятини ривожлантириш...',
                ru: 'Развитие туристического потенциала Кашкадарьинской области...'
            },
            date: {
                uz: '12 noyabr, 2022 y',
                uzc: '12 ноябрь, 2022 й',
                ru: '12 ноября 2022 г.'
            },
            link: 'https://www.youtube.com/embed/vQVwkyn3-F8?autoplay=1',
            img: 'video1.png'
        },
        {
            id: 2,
            title: {
                uz: 'Qashqadaryo viloyatining turizm salohiyatini rivojlantirish...',
                uzc: 'Қашқадарё вилоятининг туризм салоҳиятини ривожлантириш...',
                ru: 'Развитие туристического потенциала Кашкадарьинской области...'
            },
            date: {
                uz: '12 noyabr, 2022 y',
                uzc: '12 ноябрь, 2022 й',
                ru: '12 ноября 2022 г.'
            },
            link: 'https://www.youtube.com/embed/vQVwkyn3-F8?autoplay=1',
            img: 'video2.png'
        },
        {
            id: 3,
            title: {
                uz: 'Qashqadaryo viloyatining turizm salohiyatini rivojlantirish...',
                uzc: 'Қашқадарё вилоятининг туризм салоҳиятини ривожлантириш...',
                ru: 'Развитие туристического потенциала Кашкадарьинской области...'
            },
            date: {
                uz: '12 noyabr, 2022 y',
                uzc: '12 ноябрь, 2022 й',
                ru: '12 ноября 2022 г.'
            },
            link: 'https://www.youtube.com/embed/vQVwkyn3-F8?autoplay=1',
            img: 'video3.png'
        },
        {
            id: 4,
            title: {
                uz: 'Qashqadaryo viloyatining turizm salohiyatini rivojlantirish...',
                uzc: 'Қашқадарё вилоятининг туризм салоҳиятини ривожлантириш...',
                ru: 'Развитие туристического потенциала Кашкадарьинской области...'
            },
            date: {
                uz: '12 noyabr, 2022 y',
                uzc: '12 ноябрь, 2022 й',
                ru: '12 ноября 2022 г.'
            },
            link: 'https://www.youtube.com/embed/vQVwkyn3-F8?autoplay=1',
            img: 'video4.png'
        }
    ],

    photoGallery: [
        {
            id: 1,
            title: {
                uz: 'Qashqadaryo viloyatining turizm salohiyatini rivojlantirish...',
                uzc: 'Қашқадарё вилоятининг туризм салоҳиятини ривожлантириш...',
                ru: 'Развитие туристического потенциала Кашкадарьинской области...'
            },
            date: {
                uz: '12 noyabr, 2022 y',
                uzc: '12 ноябрь, 2022 й',
                ru: '12 ноября 2022 г.'
            },
            img: 'video4.png'
        },
        {
            id: 2,
            title: {
                uz: 'Fotoreportaj: “Mahalla – beshta tashabbus beshigi” ko‘rik-tanlovi g‘oliblarini taqdirlash marosimi bo‘lib o‘tdi',
                uzc: 'Фоторепортаж: “Маҳалла – бешта ташаббус бешиги” кўрик-танлови ғолибларини тақдирлаш маросими бўлиб ўтди',
                ru: 'Фоторепортаж: Состоялась церемония награждения победителей конкурса «Mahalla – beshta tashabbus beshigi»'
            },
            date: {
                uz: '12 noyabr, 2022 y',
                uzc: '12 ноябрь, 2022 й',
                ru: '12 ноября 2022 г.'
            },
            img: 'photo1.jpg'
        },
        {
            id: 3,
            title: {
                uz: 'Oliy Majlis Senati Raisining MDH Parlamentlararo Assambleyasi Kengashi majlisi ishidagi ishtiroki',
                uzc: 'Олий Мажлис Сенати Раисининг МДҲ Парламентлараро Ассамблеяси Кенгаши мажлиси ишидаги иштироки',
                ru: 'Участие Председателя Сената Олий Мажлиса в заседании Совета Межпарламентской Ассамблеи СНГ'
            },
            date: {
                uz: '12 noyabr, 2022 y',
                uzc: '12 ноябрь, 2022 й',
                ru: '12 ноября 2022 г.'
            },
            img: 'photo2.jpg'
        },
        {
            id: 4,
            title: {
                uz: 'O‘zbekiston Respublikasi Oliy Majlisi Senatining yigirma birinchi yalpi majlisi',
                uzc: 'Ўзбекистон Республикаси Олий Мажлиси Сенатининг йигирма биринчи ялпи мажлиси',
                ru: 'Двадцать первое пленарное заседание Сената Олий Мажлиса Республики Узбекистан'
            },
            date: {
                uz: '12 noyabr, 2022 y',
                uzc: '12 ноябрь, 2022 й',
                ru: '12 ноября 2022 г.'
            },
            img: 'photo3.jpg'
        }
    ],
    usefulSites: [
        {
            id: 1,
            title: {
                uz: 'Oliy Majlisning inson huquqlari bo‘yicha vakili (Ombudsman)',
                uzc: 'Олий Мажлиснинг инсон ҳуқуқлари бўйича вакили (Омбудсман)',
                ru: 'Уполномоченный Олий Мажлиса по правам человека (Омбудсмен)'
            },
            name: 'ombudsman.uz',
            link: 'http://ombudsman.uz/',
            img: 'img1.svg'
        },
        {
            id: 2,
            title: {
                uz: 'O‘zbekiston Respublikasi Prezidentining rasmiy veb-sayti',
                uzc: 'Ўзбекистон Республикаси Президентининг расмий веб-сайти',
                ru: 'Официальный сайт Президента Республики Узбекистан'
            },
            name: 'president.uz',
            link: 'https://president.uz/',
            img: 'img2.svg'
        },
        {
            id: 3,
            title: {
                uz: 'O‘zbekiston Respublikasi Oliy Majlisi Qonunchilik palatasi',
                uzc: 'Ўзбекистон Республикаси Олий Мажлиси Қонунчилик палатаси',
                ru: 'Законодательная палата Олий Мажлиса Республики Узбекистан'
            },
            name: 'parliament.gov.uz',
            link: 'parliament.gov.uz',
            img: 'img3.svg'
        },
        {
            id: 4,
            title: {
                uz: 'Jamoaviy murojaatlar portali',
                uzc: 'Жамоавий мурожаатлар портали',
                ru: 'Портал обращений сообщества'
            },
            name: 'meningfikrim.uz',
            link: 'https://meningfikrim.uz/',
            img: 'img4.svg'
        }
    ],

    contacts: {
        phone1: '+998 90 145-74-74',
        phone2: '+998 90 145-74-74',
        address: 'Тошкент шаҳри, Ислам Каримов кўчаси, 9-уй'
    },
    leaders: [
        {
            id: 1,
            name: {
                uz: 'Narbaeva Tanzila Kamalovna',
                uzc: 'Нарбаева Танзила Камаловна',
                ru: 'Нарбаева Танзила Камаловна'
            },
            step: {
                uz: 'O‘zbekiston Respublikasi Oliy Majlisi Senati Raisi',
                uzc: 'Ўзбекистон Республикаси Олий Мажлиси Сенати Раиси',
                ru: 'Председатель Сената Олий Мажлиса Республики Узбекистан'
            },
            img: 'Narbayeva-Tanzila.jpg'
        },
        {
            id: 2,
            name: {
                uz: 'Safoev Sodiq Solixovich',
                uzc: 'Сафоев Содиқ Солихович',
                ru: 'Сафоев Садик Солихович'
            },
            step: {
                uz: 'O‘zbekiston Respublikasi Oliy Majlisi Senati Raisining birinchi o‘rinbosari',
                uzc: 'Ўзбекистон Республикаси Олий Мажлиси Сенати Раисининг биринчи ўринбосари',
                ru: 'Олий Мажлис Республики Узбекистан Первый заместитель Председателя Сената'
            },
            img: 'img40.png'
        },
        {
            id: 3,
            name: {
                uz: 'Orinbaev Amanbay Tleubaevich',
                uzc: 'Оринбаев Аманбай Тлеубаевич',
                ru: 'Оринбаев Аманбай Тлеубаевич'
            },
            step: {
                uz: 'O‘zbekiston Respublikasi Oliy Majlisi Senati Raisi o‘rinbosari, Qoraqalpog‘iston Respublikasi Jo‘qorg‘i Kengesi Raisi',
                uzc: 'Ўзбекистон Республикаси Олий Мажлиси Сенати Раиси ўринбосари, Қорақалпоғистон Республикаси Жўқорғи Кенгеси Раиси',
                ru: 'Заместитель Председателя Сената Олий Мажлиса Республики Узбекистан, Председатель Джокорги Совета Республики Каракалпакстан'
            },
            img: 'img15.png'
        }
    ],

    committess: [
        {
            id: 1,
            name: {
                uz: 'Xalqaro munosabatlar, tashqi iqtisodiy aloqalar, xorijiy investisiyalar va turizm masalalari qo‘mitasi',
                uzc: 'Халқаро муносабатлар, ташқи иқтисодий алоқалар, хорижий инвестициялар ва туризм масалалари қўмитаси',
                ru: 'Комитет по международным отношениям, внешнеэкономическим связям, иностранным инвестициям и туризму'
            },
            committeCharter: {
                charterHeader: {
                    uz: 'O‘zbekiston Respublikasi Oliy Majlisi Senatining Xalqaro munosabatlar, tashqi iqtisodiy aloqalar, xorijiy investisiyalar va turizm masalalari qo‘mitasi to‘g‘risida N I Z O M',
                    uzc: 'Ўзбекистон Республикаси Олий Мажлиси Сенатининг Халқаро муносабатлар, ташқи иқтисодий алоқалар, хорижий инвестициялар ва туризм масалалари қўмитаси тўғрисида Н И З О М',
                    ru: 'Н И З О М О Комитете по международным отношениям, внешнеэкономическим связям, иностранным инвестициям и туризму Сената Олий Мажлиса Республики Узбекистан'
                },
                common: {
                    uz: '1. Ushbu Nizom O‘zbekiston Respublikasi Oliy Majlisi Senatining Xalqaro munosabatlar, tashqi iqtisodiy aloqalar, xorijiy investisiyalar va turizm masalalari qo‘mitasining (bundan buyon matnda Qo‘mita deb yuritiladi) asosiy vazifalari, funksiyalarini, shuningdek Qo‘mita faoliyatini tashkil etish hamda amalga oshirishda davlat hokimiyati va boshqaruvi, xo‘jalik boshqaruvi organlari, tashkilot hamda muassasalar, nodavlat notijorat tashkilotlari, ommaviy axborot vositalari va fuqarolar bilan hamkorlik qilish tartibini belgilaydi. 2. Qo‘mita o‘z faoliyatida O‘zbekiston Respublikasi Konstitusiyasiga, O‘zbekiston Respublikasi qonunlariga, O‘zbekiston Respublikasi Oliy Majlisi palatalari, O‘zbekiston Respublikasi Oliy Majlisi Senati (bundan buyon matnda Senat deb yuritiladi) Kengashi qarorlariga, shuningdek ushbu Nizomga amal qiladi. 3. Qo‘mita Senat oldida mas\'ul va unga hisobdordir',
                    uzc: '1. Ушбу Низом Ўзбекистон Республикаси Олий Мажлиси Сенатининг Халқаро муносабатлар, ташқи иқтисодий алоқалар, хорижий инвестициялар ва туризм масалалари қўмитасининг (бундан буён матнда Қўмита деб юритилади) асосий вазифалари, функцияларини, шунингдек Қўмита фаолиятини ташкил этиш ҳамда амалга оширишда давлат ҳокимияти ва бошқаруви, хўжалик бошқаруви органлари, ташкилот ҳамда муассасалар, нодавлат нотижорат ташкилотлари, оммавий ахборот воситалари ва фуқаролар билан ҳамкорлик қилиш тартибини белгилайди. 2. Қўмита ўз фаолиятида Ўзбекистон Республикаси Конституциясига, Ўзбекистон Республикаси қонунларига, Ўзбекистон Республикаси Олий Мажлиси палаталари, Ўзбекистон Республикаси Олий Мажлиси Сенати (бундан буён матнда Сенат деб юритилади) Кенгаши қарорларига, шунингдек ушбу Низомга амал қилади. 3. Қўмита Сенат олдида масъул ва унга ҳисобдордир',
                    ru: '1. Настоящее Положение определяет основные задачи и функции Комитета по международным отношениям, внешнеэкономическим связям, иностранным инвестициям и туризму (далее - Комитет) Сената Олий Мажлиса Республики Узбекистан, а также организация и осуществление деятельности Комитета определяет порядок взаимодействия с органами государственной власти и управления, органами хозяйственного управления, организациями и учреждениями, негосударственными некоммерческими организациями, средствами массовой информации и гражданами. 2. В своей деятельности Комитет руководствуется Конституцией Республики Узбекистан, законами Республики Узбекистан, решениями палат Олий Мажлиса Республики Узбекистан, Сената Олий Мажлиса Республики Узбекистан. Республики Узбекистан (далее - Сенат), а также применяется настоящее Положение. 3. Комитет ответственен и подотчетен Сенату.'  
                }
            },
            activity: [
                {
                    id: 1,
                    title: {
                        uz: 'O‘zbekiston Respublikasi, bir tomondan va Buyuk Britaniya va Shimoliy Irlandiya Birlashgan Qirolligi, ikkinchi tomondan, o‘rtasida sherikchilikni ta\'sis etuvchi sherikchilik va hamkorlik to‘g‘risidagi Bitimni (Toshkent, 2019 yil 31 oktyabrь) ratifikasiya qilish haqida"gi O‘zbekiston Respublikasi Qonuni yuzasidan QO‘MITA XULOSASI',
                        uzc: 'Ўзбекистон Республикаси, бир томондан ва Буюк Британия ва Шимолий Ирландия Бирлашган Қироллиги, иккинчи томондан, ўртасида шерикчиликни таъсис этувчи шерикчилик ва ҳамкорлик тўғрисидаги Битимни (Тошкент, 2019 йил 31 октябрь) ратификация қилиш ҳақида"ги Ўзбекистон Республикаси Қонуни юзасидан ҚЎМИТА ХУЛОСАСИ',
                        ru: 'О ратификации Соглашения о партнерстве и сотрудничестве между Республикой Узбекистан, с одной стороны, и Соединенным Королевством Великобритании и Северной Ирландии, с другой стороны (Ташкент, 31 октября 2019 г.) ЗАКЛЮЧЕНИЕ КОМИТЕТА по Закон Республики Узбекистан'
                    },
                },
                {
                    id: 2,
                    title: {
                        uz: '“O‘zbekiston Respublikasining Bo‘g‘uvchi, zaharli yoki boshqa shu kabi gazlar va bakteriologik vositalarning urushda qo‘llanilishini taqiqlash to‘g‘risida”gi Protokolga (Jeneva, 1925 yil 17 iyunь) qo‘shilish haqida”gi O‘zbekiston Respublikasining Qonuni yuzasidan xulosa',
                        uzc: '“Ўзбекистон Республикасининг Бўғувчи, заҳарли ёки бошқа шу каби газлар ва бактериологик воситаларнинг урушда қўлланилишини тақиқлаш тўғрисида”ги Протоколга (Женева, 1925 йил 17 июнь) қўшилиш ҳақида”ги Ўзбекистон Республикасининг Қонуни юзасидан хулоса',
                        ru: 'О присоединении Республики Узбекистан к Протоколу «О запрещении применения на войне удушливых, ядовитых или других подобных газов и бактериологических средств» (Женева, 17 июня 1925 г.) Заключение по Закону Республики'
                    }
                },
                {
                    id: 3,
                    title: {
                        uz: '“Shanxay hamkorlik tashkilotiga a\'zo davlatlar o‘rtasida hamkorlikdagi harbiy o‘quvlarni o‘tkazish to‘g‘risidagi Bitimga qo‘shimchalar kiritish haqidagi Bayonnomani (Bishkek, 2019 yil 29 aprelь) ratifikasiya qilish to‘g‘risida”gi O‘zbekiston Respublikasi Qonuni yuzasidan',
                        uzc: '“Шанхай ҳамкорлик ташкилотига аъзо давлатлар ўртасида ҳамкорликдаги ҳарбий ўқувларни ўтказиш тўғрисидаги Битимга қўшимчалар киритиш ҳақидаги Баённомани (Бишкек, 2019 йил 29 апрель) ратификация қилиш тўғрисида”ги Ўзбекистон Республикаси Қонуни юзасидан',
                        ru: '«О ратификации Протокола о дополнениях к Соглашению о проведении совместных военных учений между государствами-членами Шанхайской организации сотрудничества (г.Бишкек, 29 апреля 2019 года)» О Законе Республики Узбекистан'
                    }
                },
                {
                    id: 4,
                    title: {
                        uz: '“Xalqaro xususiy huquq bo‘yicha Gaaga konferensiyasi Ustavini (Gaaga, 1951 yil 31 oktyabrь) ratifikasiya qilish haqida”gi O‘zbekiston Respublikasining Qonuni yuzasidan xulosa',
                        uzc: '“Халқаро хусусий ҳуқуқ бўйича Гаага конференцияси Уставини (Гаага, 1951 йил 31 октябрь) ратификация қилиш ҳақида”ги Ўзбекистон Республикасининг Қонуни юзасидан хулоса',
                        ru: 'Заключение по Закону Республики Узбекистан «О ратификации Устава Гаагской конференции по международному частному праву (Гаага, 31 октября 1951 года)»'
                    }
                }
            ],
            monitoring: [
                {
                    id: 1,
                    title: {
                        uz: 'O‘zbekiston Respublikasining Amerika Qo‘shma Shtatlari va Xitoy Xalq Respublikasidagi diplomatik vakolatxonalari rahbarlarining hisobotlari haqida',
                        uzc: 'Ўзбекистон Республикасининг Америка Қўшма Штатлари ва Хитой Халқ Республикасидаги дипломатик ваколатхоналари раҳбарларининг ҳисоботлари ҳақида',
                        ru: 'Об отчетах глав дипломатических миссий Республики Узбекистан в Соединенных Штатах Америки и Китайской Народной Республике'
                    }
                },
                {
                    id: 2,
                    title: {
                        uz: 'O‘zbekiston Respublikasi tashqi ishlar vazirining 2020 yilda O‘zbekiston Respublikasi Tashqi ishlar vazirligi zimmasiga yuklangan vazifalarni bajarish bo‘yicha faoliyati to‘g‘risidagi axboroti haqida',
                        uzc: 'Ўзбекистон Республикаси ташқи ишлар вазирининг 2020 йилда Ўзбекистон Республикаси Ташқи ишлар вазирлиги зиммасига юкланган вазифаларни бажариш бўйича фаолияти тўғрисидаги ахбороти ҳақида',
                        ru: 'Об информации Министра иностранных дел Республики Узбекистан о выполнении задач, возложенных на Министерство иностранных дел Республики Узбекистан в 2020 году'
                    }
                },
                {
                    id: 3,
                    title: {
                        uz: 'Oliy darajadagi tashriflar davomida erishilgan savdo-iqtisodiy hamkorlik kelishuvlarini amalga oshirishda parlament nazoratini kuchaytirish chora-tadbirlari to‘g‘risida',
                        uzc: 'Олий даражадаги ташрифлар давомида эришилган савдо-иқтисодий ҳамкорлик келишувларини амалга оширишда парламент назоратини кучайтириш чора-тадбирлари тўғрисида',
                        ru: 'О мерах по усилению парламентского контроля за выполнением договоренностей о торгово-экономическом сотрудничестве, достигнутых в ходе визитов на высшем уровне'
                    }
                },
                {
                    id: 4,
                    title: {
                        uz: 'O‘zbekiston Respublikasi Oliy Majlisi Senatining Xalqaro munosabatlar, tashqi iqtisodiy aloqalar, xorijiy investisiyalar va turizm masalalari qo‘mitasi huzurida ekspertlar guruhini tashkil etish to‘g‘risida',
                        uzc: 'Ўзбекистон Республикаси Олий Мажлиси Сенатининг Халқаро муносабатлар, ташқи иқтисодий алоқалар, хорижий инвестициялар ва туризм масалалари қўмитаси ҳузурида экспертлар гуруҳини ташкил этиш тўғрисида',
                        ru: 'О создании группы экспертов при Комитете по международным отношениям, внешнеэкономическим связям, иностранным инвестициям и туризму Сената Олий Мажлиса Республики Узбекистан'
                    }
                },
                {
                    id: 5,
                    title: {
                        uz: '"Labor migration" elektron dasturiy majmuasi ishlashi samaradorligini o‘rganish yakunlari to‘g‘risida',
                        uzc: '"Labor migration" электрон дастурий мажмуаси ишлаши самарадорлигини ўрганиш якунлари тўғрисида',
                        ru: 'О результатах исследования эффективности электронного программного комплекса «Labor migration»'
                    }
                }
            ],
            link: 'Xalqaro munosabatlar, tashqi iqtisodiy aloqalar, xorijiy investisiyalar va turizm masalalari qo‘mitasi'
        },
        {
            id: 2,
            name: {
                uz: 'Byudjet va iqtisodiy islohotlar masalalari qo‘mitasi',
                uzc: 'Бюджет ва иқтисодий ислоҳотлар масалалари қўмитаси',
                ru: 'Комитет по бюджету и экономическим реформам'
            },
            link: 'Byudjet va iqtisodiy islohotlar masalalari qo‘mitasi'
        },
        {
            id: 3,
            name: {
                uz: 'Sud-huquq masalalari va korrupsiyaga qarshi kurashish qo‘mitasi',
                uzc: 'Суд-ҳуқуқ масалалари ва коррупцияга қарши курашиш қўмитаси',
                ru: 'Комитет по судебным вопросам и борьбе с коррупцией'
            },
            link: 'Sud-huquq masalalari va korrupsiyaga qarshi kurashish qo‘mitasi'
        },
        {
            id: 4,
            name: {
                uz: 'Mudofaa va xavfsizlik masalalari qo‘mitasi',
                uzc: 'Мудофаа ва хавфсизлик масалалари қўмитаси',
                ru: 'Комитет по вопросам обороны и безопасности'
            },
            link: 'Mudofaa va xavfsizlik masalalari qo‘mitasi'
        },
        {
            id: 5,
            name: {
                uz: 'Fan, ta\'lim va sog‘liqni saqlash masalalari qo‘mitasi',
                uzc: 'Фан, таълим ва соғлиқни сақлаш масалалари қўмитаси',
                ru: 'Комитет по науке, образованию и здравоохранению'
            },
            link: 'Fan, ta\'lim va sog‘liqni saqlash masalalari qo‘mitasi'
        },
        {
            id: 6,
            name: {
                uz: 'Axborot siyosati va davlat organlarida ochiqlikni ta\'minlash masalalari qo‘mitasi',
                uzc: 'Ахборот сиёсати ва давлат органларида очиқликни таъминлаш масалалари қўмитаси',
                ru: 'Комитет по информационной политике и вопросам обеспечения открытости в государственных органах'
            },
            link: 'Axborot siyosati va davlat organlarida ochiqlikni ta\'minlash masalalari qo‘mitasi'
        }
    ],

    events: [
        {
            id: 1,
            eventType: 1,
            commitType: 2,
            title: {
                uz: 'Bandlik dasturlari ijrosi — parlament nazoratida',
                uzc: 'Бандлик дастурлари ижроси — парламент назоратида',
                ru: 'Реализация программ занятости находится под парламентским контролем'
            },
            descript: {
                uz: 'Joriy yilning 28 fevralь kuni Oliy Majlis Qonunchilik palatasining Mehnat va ijtimoiy masalalar qo‘mitasi hamda Oliy Majlis Senatining Byudjet va iqtisodiy islohotlar masalalari qo‘mitasining kengaytirilgan yig‘ilishi bo‘',
                uzc: 'Жорий йилнинг 28 февраль куни Олий Мажлис Қонунчилик палатасининг Меҳнат ва ижтимоий масалалар қўмитаси ҳамда Олий Мажлис Сенатининг Бюджет ва иқтисодий ислоҳотлар масалалари қўмитасининг кенгайтирилган йиғилиши бў',
                ru: '28 февраля текущего года состоится расширенное заседание Комитета по труду и социальным вопросам Законодательной палаты Олий Мажлиса и Комитета по бюджету и экономическим реформам Сената Олий Мажлиса.'
            },
            date: '28.02.2023',
            viewed: 205,
            img: 'img1.jpg'
        },
        {
            id: 2,
            eventType: 1,
            commitType: 4,
            title: {
                uz: 'Qurilish vazirligi va Farg‘ona viloyati hokimligining hisobotlari tinglandi',
                uzc: 'Қурилиш вазирлиги ва Фарғона вилояти ҳокимлигининг ҳисоботлари тингланди',
                ru: 'Заслушаны отчеты Минстроя и хокима Ферганской области'
            },
            descript: {
                uz: 'Joriy yilning 18-oktyabrь kuni Oliy Majlis Senatining Sud-huquq masalalari va korrupsiyaga qarshi kurashish qo‘mitasining majlisida Qurilish vazirligi va Farg‘ona viloyati hokimligining 2021-yil 9 oyida amalga oshirilgan ishlar yu ',
                uzc: 'Жорий йилнинг 18-октябрь куни Олий Мажлис Сенатининг Суд-ҳуқуқ масалалари ва коррупсияга қарши курашиш қўмитасининг мажлисида Қурилиш вазирлиги ва Фарғона вилояти ҳокимлигининг 2021-йил 9 ойида амалга оширилган ишлар ю',
                ru: '18 октября текущего года на заседании Комитета Сената Олий Мажлиса по вопросам судебной власти и права и противодействию коррупции Минстроя и хокима Ферганской области рассмотрели работу, проведенную на 9 числа 2021 года.'
            },
            date: '19.10.2023',
            viewed: 205,
            img: 'img2.jpg'
        },
        {
            id: 3,
            eventType: 1,
            commitType: 3,
            title: {
                uz: 'Prezident Farmoni inson manfaatlarini himoya qilishga qaratilgan',
                uzc: 'Президент Фармони инсон манфаатларини ҳимоя қилишга қаратилган',
                ru: 'Указ Президента направлен на защиту интересов человека'
            },
            descript: {
                uz: '2020-yilning 20-mart kuni O‘zbekiston Respublikasi Oliy Majlisi Qonunchilik palatasida parlament a\'zolari, davlat hokimiyati va boshqaruvi organlari mas\'ul xodimlari, ommaviy axborot vositalari vakillari ishtirok etgan yig‘',
                uzc: '2020-йилнинг 20-март куни Ўзбекистон Республикаси Олий Мажлиси Қонунчилик палатасида парламент аъзолари, давлат ҳокимияти ва бошқаруви органлари масъул ходимлари, оммавий ахборот воситалари вакиллари иштирок этган йиғ',
                ru: '20 марта 2020 года в Законодательной палате Олий Мажлиса Республики Узбекистан состоялось собрание с участием депутатов парламента, ответственных работников органов государственной власти и управления, представителей средств массовой информации.'
            },
            date: '20.03.2023',
            viewed: 64,
            img: 'img3.jpg'
        },
        {
            id: 4,
            eventType: 2,
            commitType: 1,
            title: {
                uz: 'Qo‘mita boshlang‘ich sinf o‘quvchilariga bepul ovqat berish tizimi yuzasidan mutasaddilarning axborotini eshitdi',
                uzc: 'Қўмита бошланғич синф ўқувчиларига бепул овқат бериш тизими юзасидан мутасаддиларнинг ахборотини эшитди',
                ru: 'Комитет заслушал информацию чиновников о системе бесплатного питания учащихся начальных классов.'
            },
            descript: {
                uz: 'Senatning Fan, ta\'lim va sog‘liqni saqlash masalalari qo‘mitasi ishchi guruhi Qoraqalpog‘iston Respublikasi va Xorazm viloyatidagi umumiy o‘rta ta\'lim muassasalarida boshlang‘ich sinf o‘quvchilariga bepul ovqat berish tizimini',
                uzc: 'Сенатнинг Фан, таълим ва соғлиқни сақлаш масалалари қўмитаси ишчи гуруҳи Қорақалпоғистон Республикаси ва Хоразм вилоятидаги умумий ўрта таълим муассасаларида бошланғич синф ўқувчиларига бепул овқат бериш тизимини',
                ru: 'Рабочая группа Комитета Сената по вопросам науки, образования и здравоохранения предложила систему бесплатного питания учащихся начальных классов в общеобразовательных учреждениях Республики Каракалпакстан и Хорезмской области.'
            },
            date: '11.04.2023',
            viewed: 205,
            img: 'img4.jpg'
        },
        {
            id: 5,
            eventType: 2,
            commitType: 5,
            title: {
                uz: 'Xalqaro munosabatlar, tashqi iqtisodiy aloqalar, xorijiy investisiyalar va turizm masalalari qo‘mitasining majlisi  bo‘lib o‘tdi',
                uzc: 'Халқаро муносабатлар, ташқи иқтисодий алоқалар, хорижий инвестициялар ва туризм масалалари қўмитасининг мажлиси  бўлиб ўтди',
                ru: 'Состоялось заседание комитета по международным отношениям, внешнеэкономическим связям, иностранным инвестициям и туризму'
            },
            descript: {
                uz: '2023 yil 5 aprelь kuni Xalqaro munosabatlar, tashqi iqtisodiy aloqalar, xorijiy investisiyalar va turizm masalalari qo‘mitasining majlisi bo‘lib o‘tdi. Unda qator vazirlik va idoralar vakillari, ekspertlar va xalq deputatla',
                uzc: '2023 йил 5 апрель куни Халқаро муносабатлар, ташқи иқтисодий алоқалар, хорижий инвестициялар ва туризм масалалари қўмитасининг мажлиси бўлиб ўтди. Унда қатор вазирлик ва идоралар вакиллари, экспертлар ва халқ депутатла',
                ru: '5 апреля 2023 года состоялось заседание Комитета по международным отношениям, внешнеэкономическим связям, иностранным инвестициям и туризму. Присутствуют представители ряда министерств и ведомств, эксперты и народные депутаты.'
            },
            date: '05.04.2023',
            viewed: 126,
            img: 'img5.jpg'
        },
        {
            id: 6,
            eventType: 2,
            commitType: 6,
            title: {
                uz: 'Yalpi majlis oldidan qonunlar dastlabki tarzda muhokama etildi',
                uzc: 'Ялпи мажлис олдидан қонунлар дастлабки тарзда муҳокама этилди',
                ru: 'Законы обсуждались в предварительном порядке перед пленарным заседанием'
            },
            descript: {
                uz: '2023 yilning 4 aprelь kuni Senatning Fan, ta\'lim va sog‘liqni saqlash masalalari qo‘mitasining majlisi bo‘lib o‘tdi. Unda Qo‘mita a\'zolari, ekspertlar, vazirlik va idoralar rahbarlari hamda OAV vakillari ishtirok etdi. Majlisd',
                uzc: '2023 йилнинг 4 апрель куни Сенатнинг Фан, таълим ва соғлиқни сақлаш масалалари қўмитасининг мажлиси бўлиб ўтди. Унда Қўмита аъзолари, экспертлар, вазирлик ва идоралар раҳбарлари ҳамда ОАВ вакиллари иштирок этди. Мажлисд',
                ru: '4 апреля 2023 года состоялось заседание Комитета Сената по науке, образованию и здравоохранению. В нем приняли участие члены Комитета, эксперты, руководители министерств и ведомств, представители СМИ. Меджлис'
            },
            date: '04.04.2023',
            viewed: 33,
            img: 'img6.jpg'
        },
        {
            id: 7,
            eventType: 3,
            commitType: 1,
            title: {
                uz: 'Senat Raisi Qashqadaryo viloyatining bir qator tuman va shaharlarida aholi bilan uchrashuvlar o‘tkazdi',
                uzc: 'Сенат Раиси Қашқадарё вилоятининг бир қатор туман ва шаҳарларида аҳоли билан учрашувлар ўтказди',
                ru: 'Председатель Сената провел встречи с жителями ряда районов и городов Кашкадарьинской области'
            },
            descript: {
                uz: 'Joriy yilning 13-14 aprelь kunlari Oliy Majlis Senati Raisi Tanzila Narbaeva Qashqadaryo viloyatining Qarshi shahri, Qarshi va G‘uzor tumanlarida bo‘lib, mahalliy Kengash deputatlari, faollar, mahalla raislari, hokim yordamchilar',
                uzc: 'Жорий йилнинг 13-14 апрель кунлари Олий Мажлис Сенати Раиси Танзила Нарбаева Қашқадарё вилоятининг Қарши шаҳри, Қарши ва Ғузор туманларида бўлиб, маҳаллий Кенгаш депутатлари, фаоллар, маҳалла раислари, ҳоким ёрдамчилар',
                ru: '13-14 апреля текущего года Председатель Сената Олий Мажлиса Танзила Нарбаева посетила город Карши, Каршинский и Гузорский районы Кашкадарьинской области.'
            },
            date: '15.04.2023',
            viewed: 42,
            img: 'img7.jpg'
        },
        {
            id: 8,
            eventType: 3,
            commitType: 3,
            title: {
                uz: 'Senat Raisi Navoiy viloyatida',
                uzc: 'Сенат Раиси Навоий вилоятида',
                ru: 'Председатель Сената находится в Навоийской области'
            },
            descript: {
                uz: 'Joriy yilning 11-12 aprelь kunlari Oliy Majlis Senati Raisi Tanzila Narbaeva Navoiy viloyatining Qiziltepa, Navbahor tumanlari va Navoiy shahrida bo‘lib, aholi bilan muloqot qildi. Dastlab Senat Raisi Qiziltepa tumanining',
                uzc: 'Жорий йилнинг 11-12 апрель кунлари Олий Мажлис Сенати Раиси Танзила Нарбаева Навоий вилоятининг Қизилтепа, Навбаҳор туманлари ва Навоий шаҳрида бўлиб, аҳоли билан мулоқот қилди. Дастлаб Сенат Раиси Қизилтепа туманининг',
                ru: '11-12 апреля текущего года Председатель Сената Олий Мажлиса Танзила Нарбаева посетила Кызылтепинский, Навбахорский районы и город Навои Навоийской области и пообщалась с жителями. Первоначально председатель Сената Кизилтепинского района'
            },
            date: '13.04.2023',
            viewed: 12,
            img: 'img8.jpg'
        },
        {
            id: 9,
            eventType: 3,
            commitType: 4,
            title: {
                uz: 'Ijtimoiy ahamiyatga molik loyihalarni amalga oshirishdagi hamkorlik',
                uzc: 'Ижтимоий аҳамиятга молик лойиҳаларни амалга оширишдаги ҳамкорлик',
                ru: 'Сотрудничество в реализации социально значимых проектов'
            },
            descript: {
                uz: 'Joriy yilning 12 aprelь kuni Oliy Majlis Senatida Yoshlar, madaniyat va sport masalalari qo‘mitasi tomonidan Yoshlar parlamenti hamda Oliy Majlis huzuridagi Nodavlat notijorat tashkilotlarini va fuqarolik jamiyatning boshqa',
                uzc: 'Жорий йилнинг 12 апрель куни Олий Мажлис Сенатида Ёшлар, маданият ва спорт масалалари қўмитаси томонидан Ёшлар парламенти ҳамда Олий Мажлис ҳузуридаги Нодавлат нотижорат ташкилотларини ва фуқаролик жамиятнинг бошқа',
                ru: 'Joriy yilning 12 aprelь kuni Oliy Majlis Senatida Yoshlar, madaniyat va sport masalalari qo‘mitasi tomonidan Yoshlar parlamenti hamda Oliy Majlis huzuridagi Nodavlat notijorat tashkilotlarini va fuqarolik jamiyatning boshqa'
            },
            date: '12.04.2023',
            viewed: 143,
            img: 'img9.jpg'
        },
        {
            id: 10,
            eventType: 4,
            commitType: 1,
            title: {
                uz: 'Sharqona Yangi yil — Navro‘zi olam muborak!',
                uzc: 'Шарқона Янги йил — Наврўзи олам муборак!',
                ru: 'Восточный Новый год - с Наврози!'
            },
            descript: {
                uz: 'Navro‘z – o‘zaro qadr-qimmat, xayru saxovat, mehr-oqibat timsolidir. Ezgulik, sahovatga yo‘g‘irilgan uyg‘onish, yasharish ayyomi dillarimizni yanada quvonchu shodlikka chulg‘adi.Aziz yurtdoshlar! 21 mart – Navro‘z umumxalq bayrami',
                uzc: 'Наврўз – ўзаро қадр-қиммат, хайру саховат, меҳр-оқибат тимсолидир. Эзгулик, саҳоватга йўғирилган уйғониш, яшариш айёми дилларимизни янада қувончу шодликка чулғади.Азиз юртдошлар! 21 март – Наврўз умумхалқ байрами',
                ru: 'Новруз – это символ взаимного уважения, щедрости и доброты. Пробуждение доброты и великодушия наполнит наши сердца еще большей радостью и счастьем Дорогие соотечественники! 21 марта - национальный праздник Навруз'
            },
            date: '21.03.2023',
            viewed: 256,
            img: 'img10.jpg'
        },
        {
            id: 11,
            eventType: 5,
            commitType: 3,
            title: {
                uz: 'Yordam so‘rab murojaat qilganning farzandiga  davolanish uchun imtiyozli yo‘llanma berildi',
                uzc: 'Ёрдам сўраб мурожаат қилганнинг фарзандига  даволаниш учун имтиёзли йўлланма берилди',
                ru: 'Ребенку лица, обратившегося за помощью, выдано льготное направление на лечение'
            },
            descript: {
                uz: 'Oliy Majlis Senatining Agrar va suv xo‘jaligi masalalari qo‘mitasi raisi o‘rinbosari Risqul Siddiqov Jizzax viloyatida fuqarolarning murojaatlarini o‘rgandi.Jumladan, R.Siddiqov Senati Raisi T.Narbaevaga farzandini dav',
                uzc: 'Олий Мажлис Сенатининг Аграр ва сув хўжалиги масалалари қўмитаси раиси ўринбосари Рисқул Сиддиқов Жиззах вилоятида фуқароларнинг мурожаатларини ўрганди.Жумладан, Р.Сиддиқов Сенати Раиси Т.Нарбаевага фарзандини дав',
                ru: 'Заместитель председателя Комитета по аграрному и водному хозяйству Сената Олий Мажлиса Рискул Сиддиков изучил обращения граждан Джизакской области. В частности, Р.Сиддиков подарил своего ребенка Председателю Сената Т.Нарбаевой'
            },
            date: '29.03.2023',
            viewed: 142,
            img: 'img11.jpg'
        },
        {
            id: 12,
            eventType: 5,
            commitType: 5,
            title: {
                uz: 'Sariosiyo tumanida 80-sonli umumta\'lim maktabining yangi binosi foydalanishga topshirildi',
                uzc: 'Сариосиё туманида 80-сонли умумтаълим мактабининг янги биноси фойдаланишга топширилди',
                ru: 'Сдан в эксплуатацию новый корпус общеобразовательной школы №80 в Сариосинском районе'
            },
            descript: {
                uz: '2021 yilda Oliy Majlisi senatori  A.Sanginov Surxondaryo viloyati Sariosiyo tumani faollari va fuqarolari bilan uchrashgan edi. Unda “Gulobod” mahallasida joylashgan 80-sonli umumta\'lim maktabini kengaytirish masalasi',
                uzc: '2021 йилда Олий Мажлиси сенатори  A.Сангинов Сурхондарё вилояти Сариосиё тумани фаоллари ва фуқаролари билан учрашган эди. Унда “Гулобод” маҳалласида жойлашган 80-сонли умумтаълим мактабини кенгайтириш масаласи',
                ru: 'В 2021 году сенатор Олий Мажлиса А. Сангинов встретился с активом и жителями Сариосийского района Сурхандарьинской области. Речь идет о расширении общеобразовательной школы №80, расположенной в микрорайоне «Гулобод».'
            },
            date: '24.02.2023',
            viewed: 215,
            img: 'img12.jpg'
        },
        {
            id: 13,
            eventType: 5,
            commitType: 4,
            title: {
                uz: 'Senator ishtirokidagi navbatdagi fuqarolar qabuli',
                uzc: 'Сенатор иштирокидаги навбатдаги фуқаролар қабули',
                ru: 'Очередной прием граждан с участием сенатора'
            },
            descript: {
                uz: '2023 yil 9 fevralь kuni Senat binosida Fan, ta\'lim va sog‘liqni saqlash masalalari qo‘mitasi raisi O.Iminov fuqarolar qabulini o‘tkazdi. Unda Jizzax, Farg‘ona, Toshkent, Samarqand, Surxondaryo, Qashqadaryo viloyatilari va Toshkent sh',
                uzc: '2023 йил 9 февраль куни Сенат биносида Фан, таълим ва соғлиқни сақлаш масалалари қўмитаси раиси О.Иминов фуқаролар қабулини ўтказди. Унда Жиззах, Фарғона, Тошкент, Самарқанд, Сурхондарё, Қашқадарё вилоятилари ва Тошкент ш',
                ru: '9 февраля 2023 года председатель Комитета по науке, образованию и здравоохранению О.Иминов провел прием для граждан в здании Сената. В него входят Джизакская, Ферганская, Ташкентская, Самаркандская, Сурхандарьинская, Кашкадарьинская области и г. Ташкент.'
            },
            date: '09.02.2023',
            viewed: 6,
            img: 'img13.jpg'
        },
        {
            id: 14,
            eventType: 3,
            commitType: 2,
            title: {
                uz: 'Senat Raisi Buxoroda jamoatchilik vakillari bilan uchrashdi',
                uzc: 'Сенат Раиси Бухорода жамоатчилик вакиллари билан учрашди',
                ru: 'Председатель Сената встретился с представителями общественности Бухары'
            },
            descript: {
                uz: 'Joriy yilning 10-11 aprelь kunlari Oliy Majlis Senati Raisi Tanzila Narbaeva Buxoro viloyatining qator hududlari xususan,  Buxoro shahri, Buxoro, Romitan va Olot tumanlarida amaliy tashrif bilan bo‘ldi. U yerda mahalliy Ke',
                uzc: 'Жорий йилнинг 10-11 апрель кунлари Олий Мажлис Сенати Раиси Танзила Нарбаева Бухоро вилоятининг қатор ҳудудлари хусусан,  Бухоро шаҳри, Бухоро, Ромитан ва Олот туманларида амалий ташриф билан бўлди. У ерда маҳаллий Ке',
                ru: '10-11 апреля текущего года Председатель Сената Олий Мажлиса Танзила Нарбаева совершила практическую поездку в ряд районов Бухарской области, в частности, город Бухара, Бухарский, Ромитанский и Олотский районы. Местный Ке там'
            },
            date: '11.04.2023',
            viewed: 48,
            img: 'img14.jpg'
        }
    ]
})

export const actions = {
    // counterUp({ state, commit }){
    //     commit('setCounter', state.counter + 1)
    //   }
}

export const mutations = {
    changeDistrict(state, param){
        if(param == null){
            state.senators = state.allSenators
        } else {
            state.senators = state.allSenators.filter(e => e.district === param)
        }
    },
    changeAssembly(state, param){
        if(param == null){
            state.senators = state.allSenators
        } else {
            state.senators = state.allSenators.filter(e => e.assembly === param)
        }
    }
}

export const getters = {
    getSenators(state){
        return state.senators
    }
    // myGetter(state){ return state.counter + 1000}
}
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
                    link: '#'
                },
                {
                    id: 5,
                    name: {
                        uz: 'Senat kengashi',
                        uzc: 'Сенат кенгаши',
                        ru: 'Совет Сената'
                    },
                    link: '#'
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
            subMenu: [
                {
                    id: 8,
                    name: {
                        uz: 'Palatalarning qo\'shma majlislari',
                        uzc: 'Палаталарнинг қўшма мажлислари',
                        ru: 'Совместные заседания палат'
                    },
                    link: '#'
                },
                {
                    id: 9,
                    name: {
                        uz: 'Qo\'mita va komissiyalar majlislari',
                        uzc: 'Қўмита ва комиссиялар мажлислари',
                        ru: 'Заседания комитетов и комиссий'
                    },
                    link: '#'
                },
                {
                    id: 10,
                    name: {
                        uz: 'Konferensiyalar, davra suhbatlari, seminarlar va boshqa tadbirlar',
                        uzc: 'Конференсиялар, давра суҳбатлари, семинарлар ва бошқа тадбирлар',
                        ru: 'Конференции, круглые столы, семинары и другие мероприятия'
                    },
                    link: '#'
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
                    id: 11,
                    name: {
                        uz: 'Xorijiy delegatsiyalar tashrifi',
                        uzc: 'Хорижий делегациялар ташрифи',
                        ru: 'Визит иностранных делегаций'
                    },
                    link: '#'
                },
                {
                    id: 12,
                    name: {
                        uz: 'Senat delegatsiyalarining xorijga safari',
                        uzc: 'Сенат делегацияларининг хорижга сафари',
                        ru: 'Поездка делегаций Сената за границу'
                    },
                    link: '#'
                },
                {
                    id: 13,
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
                    id: 14,
                    name: {
                        uz: 'Parlament eshituvlari',
                        uzc: 'Парламент эшитувлари',
                        ru: 'Парламентские слушания'
                    },
                    link: '#'
                },
                {
                    id: 15,
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
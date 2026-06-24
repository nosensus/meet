import type { ScriptGraph } from "../types";

// O'zbekcha (lotin) skript. Tugun kalitlari, variant id'lari va `next` havolalari
// src/data/script.ts (ruscha) bilan bir xil — faqat matn tarjima qilingan.
// QQSh = qaror qabul qiluvchi shaxs (rus. ЛПР).

export const SCRIPT_UZ: ScriptGraph = {
  start: {
    id: "start",
    title: "Suhbat turi",
    situation: "Hozir qaysi qo'ng'iroq bosqichida turganingizni tanlang.",
    prompt: "Bu qanday suhbat?",
    options: [
      { id: "cold", label: "Sovuq qo'ng'iroq / QQSh ga chiqish", next: "cold" },
      { id: "present", label: "Taqdimot va argumentatsiya", next: "presentation" },
      { id: "objection", label: "E'tirozlar bilan ishlash (10 shablon)", next: "objection_type" },
      { id: "price", label: "Narx va chegirmalar", next: "price" },
      { id: "closing", label: "Bitimni yopish", next: "closing" },
    ],
  },

  cold: {
    id: "cold",
    title: "Sovuq qo'ng'iroq",
    situation:
      "Maqsad — QQSh ga chiqish va keyingi qadamni belgilash. Yaxshi usul — «ovchi» emas, servis xizmati niqobida qo'ng'iroq qilish.",
    prompt: "Qaysi bosqichdasiz?",
    options: [
      { id: "secretary", label: "Sekretardan o'tyapman", next: "cold_secretary" },
      { id: "lpr", label: "QQSh ga chiqdim — qanday boshlash", next: "cold_lpr_start" },
      { id: "service", label: "«O'z» bazam bo'yicha qo'ng'iroq (servis qo'ng'irog'i)", next: "cold_service" },
      { id: "forbidden", label: "Taqiqlangan iboralarni eslatish", next: "cold_forbidden" },
    ],
  },
  cold_secretary: {
    id: "cold_secretary",
    title: "Sekretardan o'tish",
    situation: "Ishonch bilan gapiring, go'yo sizni kutishyapti. «Taklif qilish», «hamkorlik» so'zlarisiz.",
    prompt: "Usulni tanlang",
    options: [
      {
        id: "universal",
        label: "Universal usul (tushuntirishsiz ism)",
        say: "— Ivan Ivanovich joydami? — Kim deb aytay? — Bu Yevgeniy. — Qaysi kompaniyadan, qaysi masala bo'yicha? — Shunchaki Yevgeniy Kolotilov qo'ng'iroq qilyapti deb ayting, shu yetarli.",
        next: "continue",
      },
      {
        id: "help",
        label: "«Iltimos, yordam bering»",
        say: "Iltimos, menga yordam bering… mendan ma'lumot yuborishni so'rashgan — direktoringizning otasining ismini ayting-chi?",
        note: "Yordam so'rash sekretarning himoyasini pasaytiradi.",
        next: "continue",
      },
    ],
  },
  cold_lpr_start: {
    id: "cold_lpr_start",
    title: "QQSh bilan suhbat boshlanishi",
    situation: "Birinchi 10 soniya. Maqsad — qisqa suhbatga huquq olish.",
    prompt: "Kirishni tanlang",
    options: [
      {
        id: "direct",
        label: "To'g'ridan-to'g'ri taklif",
        say: "Ivan Ivanovich, siz b2b sohasida ishlaysiz, demak ishonchli xaridorlardan keladigan so'rovlar oqimi sizga albatta foydali. Qanday boshlasak bo'ladi?",
        next: "continue",
      },
      {
        id: "advice",
        label: "Maslahatlashish",
        say: "Ivan Ivanovich, siz bilan bir masala bo'yicha maslahatlashmoqchi edim — atigi bir-ikki daqiqa, qulaymi?",
        next: "continue",
      },
      {
        id: "boss",
        label: "Tajribalilar uchun: «qattiqqo'l boshliq»",
        say: "Rostini aytsam: boshlig'im meni sovuq qo'ng'iroqlar qilishga majburlaydi, shuning uchun qo'ng'iroq qilyapman 🙂 30 soniya bering — keyin qiziqmi yoki yo'qligini hal qilasiz.",
        next: "continue",
      },
    ],
  },
  cold_service: {
    id: "cold_service",
    title: "Servis qo'ng'irog'i («ovchi» emas)",
    situation:
      "Allaqachon ro'yxatdan o'tgan / mahsulot qo'shayotganlarga qo'ng'iroq qiling. Avval g'amxo'rlik, sotuv — keyingi aloqada.",
    prompt: "Yurishni tanlang",
    options: [
      {
        id: "support",
        label: "Qo'llab-quvvatlash xizmati kirishi",
        say: "Assalomu alaykum, bu BIZKIM qo'llab-quvvatlash xizmati. Ko'ryapman, siz mahsulot qo'shyapsiz — hammasi qulaymi, sozlashda yordam kerakmi, deb bilish uchun qo'ng'iroq qildim. Telefon raqamimni yozib oling.",
        note: "Darrov sotmang. Hozir yordam — sotuv keyingi aloqada.",
        next: "continue",
      },
      {
        id: "upsell",
        label: "Yordamdan keyin yumshoq qo'shimcha sotuv",
        say: "Hammasi yoqayotgan ekan — aytib qo'yay: pullik tarifda hammasi sezilarli darajada tezroq va qulayroq bo'ladi, so'rovlar esa birinchi bo'lib keladi. Aynan nima olishingizni aytib beraymi?",
        next: "continue",
      },
    ],
  },
  cold_forbidden: {
    id: "cold_forbidden",
    title: "Taqiqlangan iboralar",
    situation: "Bu iboralar bir zumda «bizga hech narsa kerak emas» himoyasini yoqadi.",
    prompt: "Eslang va AYTMANG:",
    options: [
      { id: "f1", label: "«Sizga taklif qilmoqchiman…»", note: "Sotuvchini darrov fosh qiladi.", next: "cold" },
      { id: "f2", label: "«Hamkorlik yuzasidan qo'ng'iroq qilyapman…»", note: "Bo'sh shtamp.", next: "cold" },
      { id: "f3", label: "«Foydali taklif…»", note: "Buni hamma aytadi, bu shovqin.", next: "cold" },
      { id: "f4", label: "«Men kompaniya vakiliman…»", note: "O'zingiz haqingizda emas, mijoz haqida gapiring.", next: "cold" },
    ],
  },

  presentation: {
    id: "presentation",
    title: "Taqdimot va argumentatsiya",
    situation: "Taqdimotning 7 ta oltin qoidasi. Xususiyatlar tilida emas, mijoz manfaatlari tilida gapiring.",
    prompt: "Usulni tanlang",
    options: [
      {
        id: "need",
        label: "1. Ehtiyojga bog'lash («aynan siz uchun qilingan»)",
        say: "Siz falon bozorda ishlaysiz / falon mahsulot sotasiz — shuning uchun platforma sizga ideal mos keladi. Sizning vaziyatingizdan kelib chiqib…",
        note: "Biz uchun barcha mijozlar — bir ommadir, lekin har biri o'zini alohida deb hisoblaydi. Uning o'ziga xosligiga bog'lang.",
        next: "continue",
      },
      {
        id: "fab",
        label: "2. X-A-F / FAB (xususiyat → foyda)",
        say: "Xususiyat → «bu sizga … imkonini beradi» / «buning yordamida siz … qila olasiz». Misol: «Bizda kunu tun qo'llab-quvvatlash bor — bu istalgan vaqtda biz bilan bog'lanish imkonini beradi, demak vaqtingizni tejaydi». Oxirida: «Bu siz uchun qanchalik muhim?»",
        next: "continue",
      },
      {
        id: "facts",
        label: "3. Fikr emas, faktlar",
        say: "«Bizda yaxshi mahsulot» emas, balki «falon ekspertlar ma'lumotiga ko'ra platforma eng texnologik platformalardan biri deb tan olingan» / «mana, mijoz minnatdorchilik yo'lladi». Manba va raqamlarga tayaning.",
        next: "continue",
      },
      {
        id: "try",
        label: "4. Aytib berish → ko'rsatish → sinab ko'rishga berish",
        say: "O'zlashtirish: aytib berdingiz — 10%, ko'rsatdingiz — 20%, sinab ko'rishga berdingiz — 90%. Mijozni sayt/ekran bo'ylab olib o'ting, oldingizda hech bo'lmasa bitta kartochkani to'ldirsin.",
        next: "continue",
      },
      {
        id: "stories",
        label: "5. Hikoyalar",
        say: "«Bir mijoz bor edi… mana u nima dedi». Hikoyalar sotadi va e'tiborni ushlab turadi — sizda kerakli xulq-atvorni ko'rsatadigan tayyor hikoyalar to'plami bo'lishi kerak.",
        next: "continue",
      },
      {
        id: "channel",
        label: "6. 7-38-55 qoidasi (muloqot kanali)",
        say: "Ta'sirning atigi 7% — so'zlar, 38% — ovoz, 55% — tana tili. Asosiy mijozlar uchun yozishmani emas, uchrashuv yoki videoni tanlang.",
        next: "continue",
      },
      {
        id: "packages",
        label: "7. Paketlar farqini o'zingiz tushuntiring",
        say: "Mijoz o'qishni xohlamaydi — tariflar farqini sodda tilda tushuntiring (metafora: «bunisi Yamaha kabi, bunisi Fender/Mercedes kabi»; «katta sahnada chalsangiz — farqni sezasiz»).",
        next: "continue",
      },
      {
        id: "hook",
        label: "Ilgakni ilintirish (ijobiy faktga ilashish)",
        say: "Mijozning faktiga ilashamiz: «Siz faol o'sayotgan ekansiz — demak sizga yangi mijozlarning barqaror oqimi muhim, to'g'rimi?»",
        next: "continue",
      },
      {
        id: "scenario",
        label: "Suhbat ssenariysini dasturlash",
        say: "Vaqt kam ekan, mana shunday qilaylik: 1) men platforma nima berishini qisqa ko'rsataman, 2) siz savollar berasiz, 3) birga qanday qatnashishingizni ko'rib chiqamiz. Yaxshimi?",
        next: "continue",
      },
      {
        id: "magnet",
        label: "Magnitlash (foydani pulda hisoblash)",
        say: "Keling, hisoblaymiz: platforma oyiga atigi 200$ keltirsa ham — 3 yilda bu 7 200$. Agar men ularni hozir stolingizga qo'ysam, rad etmasdingiz, to'g'rimi? Endi nollar qo'shing.",
        next: "continue",
      },
      {
        id: "triggers",
        label: "Trigger-so'zlar",
        next: "triggers",
      },
    ],
  },

  triggers: {
    id: "triggers",
    title: "Taqdimot uchun trigger-so'zlar",
    situation: "Nutqni bezaydigan va mijozga yumshoq ta'sir qiladigan so'zlar. Aralashtiring, lekin suiiste'mol qilmang.",
    prompt: "Triggerni tanlang",
    options: [
      { id: "practically", label: "«Deyarli»", say: "«Ulangan deyarli hammasi birinchi haftada mijoz oldi». Mutlaqliklardan qochadi, ishonchni oshiradi.", next: "triggers" },
      { id: "only", label: "«Atigi»", say: "«Atigi 1000 dollar», «atigi 14 kun». Narx raqamlari va muddatlarni kichraytiradi. «Bor-yo'g'i» demang — bu xafa qiladi.", next: "triggers" },
      { id: "pleasure", label: "«Men mamnuniyat bilan»", say: "«Mamnuniyat bilan aytib beraman / hisob tayyorlayman / qayta qo'ng'iroq qilaman». Mijozga yoqimli.", next: "triggers" },
      { id: "youll-like", label: "«Sizga juda yoqadi»", say: "Funksiya haqidagi hikoyani yakunlang: «buning bilan ishlash sizga juda yoqadi» — lekin faqat argumentlardan keyin, ular o'rniga emas.", next: "triggers" },
      { id: "surprised", label: "«Yoqimli hayratlanasiz»", say: "«Soddaligidan / maqsadli so'rovlardan / natijadan yoqimli hayratlanasiz».", next: "triggers" },
      { id: "easy", label: "«Boshlash juda oson»", say: "«Foydalanish juda oson», «kartochkani to'ldirish juda oson». Onlayn-platforma murakkabligi qo'rquvini olib tashlaydi.", next: "triggers" },
      { id: "solve", label: "«Hammasini hal qilamiz»", say: "Xavotirlar uchun («birdan qo'ng'iroq o'tmasa / osilib qolsa»): «Ivan Ivanovich, hammasini hal qilamiz».", next: "triggers" },
      { id: "regret", label: "«Faqat ertaroq boshlamaganingizga afsuslanasiz»", say: "Yoki hikoya bilan: «mijoz qo'ng'iroq qilib, ertaroq boshlamaganimga afsuslanaman dedi». Yoki kelajakka o'tish: «birinchi mijozlarni olganingizda — men sizni qanday ko'ndirganimni tabassum bilan eslaysiz».", next: "triggers" },
      { id: "because", label: "«Chunki»", say: "«Yaxshisi bir yilga to'lang, chunki…». Chaldini tajribasi: «chunki» so'zining o'zi, hatto kuchsiz sabab bilan ham, rozilikni oshiradi.", next: "triggers" },
      { id: "oneminus", label: "«Plyuslari ko'p — minus faqat bitta»", say: "Mayda, ahamiyatsiz minus o'ylab toping: «plyuslari ko'p, minus faqat bitta — kartochkalarni to'ldirishga vaqt sarflash kerak». Hammasi «haddan tashqari shirin» degan shubhani olib tashlaydi.", next: "triggers" },
      { id: "inout", label: "«Barcha kirish va chiqishlarni ko'rsataman»", say: "«Men shaxsan barcha kirish va chiqishlarni ko'rsataman, sizni qo'lingizdan yetaklayman. Kol-markazga emas, shaxsan menga qo'ng'iroq qilasiz».", next: "triggers" },
    ],
  },

  objection_type: {
    id: "objection_type",
    title: "E'tirozlar bilan ishlash",
    situation:
      "Javob berishdan oldin AVVAL qo'shiling (bahslashmang), keyin 10 ta shablondan biri bilan javob bering. Mijozni ismi bilan chaqiring va ovozingizni yumshating. Aniq e'tirozni tanlang.",
    prompt: "Mijozda qanday e'tiroz bor?",
    options: [
      { id: "joining", label: "🔑 Qo'shilish — javobdan OLDIN qilish", next: "joining" },
      { id: "expensive", label: "«Qimmat / boshqalarda arzonroq»", next: "obj_expensive" },
      { id: "noresult", label: "«Bitim yo'q / nomaqsadli so'rovlar»", next: "obj_noresult" },
      { id: "dontknow", label: "«Biz sizni tanimaymiz»", next: "obj_dontknow" },
      { id: "online", label: "«Onlayn-platformalar bilan ishlamaymiz / xavfsiz emas»", next: "obj_online" },
      { id: "notinterested", label: "«Menga qiziq emas»", next: "obj_notinterested" },
      { id: "nothing", label: "«Bizga hech narsa kerak emas»", next: "obj_nothing" },
      { id: "otherway", label: "«Mijozlarni boshqa yo'l bilan jalb qilaman»", next: "obj_otherway" },
      { id: "later", label: "«Keyinroq / hozir emas»", next: "obj_later" },
      { id: "callback", label: "«O'zim sizga qayta qo'ng'iroq qilaman»", next: "obj_callback" },
      { id: "think", label: "«O'ylab ko'rishim kerak» (alohida)", next: "obj_think" },
      { id: "discount", label: "«Chegirma istayman»", next: "obj_discount" },
      { id: "templates", label: "— Bu 10 ta shablon nima (ma'lumotnoma)", next: "templates" },
    ],
  },

  joining: {
    id: "joining",
    title: "E'tirozga qo'shilish",
    situation:
      "Mijozga «men siz tomondaman» ekanini ko'rsating (u biror narsani bilmaslikka haqli). Qo'shilish = «tushunaman / bu normal…» + nega tushunishingizning izohi. Faqat qayta ishlash, qo'shilishsiz — qo'pol eshitiladi; faqat qo'shilish, qayta ishlashsiz — go'yo taslim bo'lgandek. Ikkalasi ham kerak. E'tirozga mos qo'shilishni tanlang — keyin qayta ishlash ochiladi.",
    prompt: "Qo'shilish (javobdan OLDIN ayting)",
    options: [
      {
        id: "j_expensive",
        label: "«Qimmat / boshqalarda arzonroq»ga",
        say: "Bu normal — men ham doim narxlarni solishtiraman va pul nimaga ketishini so'rayman. Siz hammasini to'g'ri qilyapsiz.",
        next: "obj_expensive",
      },
      {
        id: "j_noresult",
        label: "«Bitim yo'q / nomaqsadli so'rovlar»ga",
        say: "Tushunaman, bu haqiqatan ham yoqimsiz — ro'yxatdan o'tasan, kutasan, bitim esa yo'q. Va so'rovlarning o'zidan ko'ra, behuda sarflagan vaqtga achinasan.",
        next: "obj_noresult",
      },
      {
        id: "j_dontknow",
        label: "«Biz sizni tanimaymiz»ga",
        say: "Bu normal — hamma narsani bilish mumkin emas. Siz bizni hali tanimaslikka to'liq haqlisiz.",
        next: "obj_dontknow",
      },
      {
        id: "j_online",
        label: "«Onlayn-platformalar bilan ishlamaymiz»ga",
        say: "Sizni tushunaman — men ham notanish saytlarga ehtiyotkorlik bilan kiraman va tushunarsiz havolalarga o'tmaslikka harakat qilaman.",
        next: "obj_online",
      },
      {
        id: "j_notinterested",
        label: "«Menga qiziq emas»ga",
        say: "Tabiiy — har qanday taklif, mohiyatini bilmaguningcha, qiziq bo'lolmaydi. Menga ham aytib berilmaguncha ko'p narsa qiziq emas.",
        next: "obj_notinterested",
      },
      {
        id: "j_think",
        label: "«O'ylab ko'raman»ga",
        say: "Albatta, men hatto o'ylab ko'rishingizni xohlardim — bu muhim qaror, va hammasini o'ylab ko'rmasdan kirish rasmiylashtirishingizni istamasdim.",
        note: "«Murakkab» emas, «muhim qaror» deng — murakkab narsani qilish qiyinroq.",
        next: "obj_think",
      },
      {
        id: "j_discount",
        label: "«Chegirma istayman»ga",
        say: "Siz hammasini to'g'ri qilyapsiz — men ham biror narsa sotib olganimda doim chegirma so'rayman.",
        next: "obj_discount",
      },
    ],
  },

  obj_expensive: {
    id: "obj_expensive",
    title: "«Qimmat / boshqalarda arzonroq»",
    situation:
      "«Qimmat» = narxni ko'rishadi, lekin qadrini ko'rishmaydi. Narx bo'yicha e'tiroz xursand qilishi kerak. Avval qo'shiling, keyin shablonni tanlang (1–10).",
    prompt: "Yurishni tanlang",
    options: [
      {
        id: "join",
        label: "➊ Qo'shilish (javobdan oldin)",
        say: "Bu normal — men ham doim narxlarni solishtiraman va pul nimaga ketishini ko'raman. Siz hammasini to'g'ri qilyapsiz.",
        next: "continue",
      },
      {
        id: "t1",
        label: "1. Aynan shuning uchun",
        say: "Aynan shuning uchun biz bilan boshqalarnikidan ko'ra ko'proq foyda olasiz: targ'ibotga katta sarmoya kattaroq natija keltiradi.",
        next: "continue",
      },
      {
        id: "t2",
        label: "2. Biz aynan shunga ixtisoslashganmiz",
        say: "Biz aynan turli byudjet darajasidagi kompaniyalarga ixtisoslashganmiz — siz uchun ham nimadir tanlay olamiz. Masalan, yillik obunada foydaliroq bo'ladi.",
        next: "continue",
      },
      {
        id: "t3",
        label: "3. E'tirozni savolga aylantirish",
        say: "Siz bu narx qayerdan kelganini so'ramoqchimidingiz? Hozir aytib beraman… (tushuntirasiz). Savolingizga javob berdimmi?",
        next: "continue",
      },
      {
        id: "t4",
        label: "4. Ha, lekin … bu … degani emas",
        say: "Ha, lekin boshqalarda arzonroqligi, ular ham xuddi shu natijani beradi degani emas. Aksincha — bizning mahsulot funksionalroq.",
        next: "continue",
      },
      {
        id: "t5",
        label: "5. Agar",
        say: "Agar shu pulga aynan nima olishingizni ko'rsatsam, tarifni rasmiylashtirishga tayyormisiz?",
        next: "continue",
      },
      {
        id: "t6",
        label: "6. Me'yorlarga havola",
        say: "Narx biroz balandroq bo'lishi normal — qaynoq so'rovlar, yangi mijozlar va tejalgan vaqt uchun.",
        note: "«Qimmatroq» emas, «biroz balandroq» deng. «Kerak», «qimmat» stop-so'zlaridan qoching.",
        next: "continue",
      },
      {
        id: "t7",
        label: "7. Gap u haqida emas, bu haqida",
        say: "Gap bu qancha turishida emas, balki qancha bitim olishingiz va qancha topa olishingizda.",
        next: "continue",
      },
      {
        id: "t8",
        label: "8. Yana biror narsa bormi?",
        say: "Sizni faqat narx tashvishga solyaptimi yoki muhokama qilish kerak bo'lgan boshqa narsa ham bormi?",
        note: "Doirani toraytirasiz: avval barcha e'tirozlarni yig'ing, keyin javob bering.",
        next: "continue",
      },
      {
        id: "t9",
        label: "9. Hikoyalar",
        say: "Ming dollar sarflashga ikkilangan kompaniya oxir-oqibat 40–50 ming dollarlik bitimlar yopdi — yaqinda minnatdorchilik xati yo'lladi.",
        next: "continue",
      },
      {
        id: "t10",
        label: "10. Savol berish",
        say: "Sizningcha, nega bunday narxda bizdan sotib olishadi? Va agar bu sizga oyiga bir nechta yangi mijoz keltirsa — bu hali ham qimmatmi yoki endi o'rinlimi?",
        next: "continue",
      },
    ],
  },

  obj_noresult: {
    id: "obj_noresult",
    title: "«Bitim yo'q / nomaqsadli so'rovlar»",
    situation: "Platforma bo'yicha ko'p uchraydigan keys. Avval qo'shiling, keyin shablonni tanlang (1–10).",
    prompt: "Yurishni tanlang",
    options: [
      {
        id: "join",
        label: "➊ Qo'shilish (javobdan oldin)",
        say: "Tushunaman, bu haqiqatan ham yoqimsiz — ro'yxatdan o'tasan, kutasan, bitim esa yo'q. Va so'rovlarning o'zidan ko'ra, behuda sarflagan vaqtga achinasan.",
        next: "continue",
      },
      {
        id: "t1",
        label: "1. Aynan shuning uchun",
        say: "Aynan shuning uchun siz uchun pullik tarif bor: unda sun'iy intellekt ishlaydi, u so'rovlarni maqsadliga aylantiradi — u sizga yordam beradi.",
        next: "continue",
      },
      {
        id: "t2",
        label: "2. Biz aynan shunga ixtisoslashganmiz",
        say: "Biz aynan siz maqsadli so'rovlar olishingizga ixtisoslashganmiz — buning uchun pullik tarif bor.",
        next: "continue",
      },
      {
        id: "t3",
        label: "3. E'tirozni savolga aylantirish",
        say: "Siz maqsadli so'rovlar olish uchun nima qilish kerakligini so'ramoqchimidingiz? Buning uchun tarif rejasini ulaymiz. Savolingizga javob berdimmi?",
        next: "continue",
      },
      {
        id: "t4",
        label: "4. Ha, lekin … bu … degani emas",
        say: "Ha, lekin so'rovlar nomaqsadli bo'lgani, maqsadlilari yo'q degani emas — filtrlar va tarifni sozlash kerak.",
        next: "continue",
      },
      {
        id: "t5",
        label: "5. Agar",
        say: "Tushunishimcha, agar so'rovlar maqsadli bo'lsa — masalan, pullik tarifda — bu sizga ma'qul bo'ladimi?",
        next: "continue",
      },
      {
        id: "t7",
        label: "7. Gap u haqida emas, bu haqida",
        say: "Gap hozir so'rov yo'qligida emas, balki ular paydo bo'lishi uchun siz bilan biz nima qila olishimizda.",
        next: "continue",
      },
      {
        id: "t9",
        label: "9. Hikoyalar",
        say: "Atigi bir oy oldin xuddi shunday mijoz bor edi — pullik tarifga o'tdi, yaqinda qo'ng'iroq qildi, juda mamnun.",
        next: "continue",
      },
      {
        id: "t10",
        label: "10. Savol berish",
        say: "Sizningcha, so'rov maqsadli yoki yo'qligi nimaga bog'liq? Va sizningcha, lidlar birinchi navbatda kimga yuboriladi — pullikkami yoki bepulgami?",
        next: "continue",
      },
    ],
  },

  obj_dontknow: {
    id: "obj_dontknow",
    title: "«Biz sizni tanimaymiz»",
    situation: "Yengil e'tiroz — deyarli har qanday shablon bilan ishlanadi. Avval qo'shiling.",
    prompt: "Yurishni tanlang",
    options: [
      {
        id: "join",
        label: "➊ Qo'shilish (javobdan oldin)",
        say: "Bu normal — hamma narsani bilish mumkin emas. Siz bizni hali tanimaslikka to'liq haqlisiz.",
        next: "continue",
      },
      {
        id: "t1",
        label: "1. Aynan shuning uchun",
        say: "Aynan shuning uchun qo'ng'iroq qilyapman — siz biz haqimizda bilishingiz uchun. Hoziroq platforma bo'yicha onlayn-ekskursiya o'tkaza olaman.",
        next: "continue",
      },
      {
        id: "t2",
        label: "2. Biz aynan shunga ixtisoslashganmiz",
        say: "Biz aynan qo'shimcha sotuv kanallari bilan yordam bermoqchi bo'lgan kompaniyalarga ixtisoslashganmiz.",
        next: "continue",
      },
      {
        id: "t3",
        label: "3. E'tirozni savolga aylantirish",
        say: "Siz biz kimligimiz va qanday foyda keltira olishimizni so'ramoqchimidingiz? Hozir aytib beraman. Savolingizga javob berdimmi?",
        next: "continue",
      },
      {
        id: "t4",
        label: "4. Ha, lekin … bu … degani emas",
        say: "Ha, lekin biz haqimizda hali bilmasligingiz, sizga foydali bo'lolmaymiz degani emas.",
        next: "continue",
      },
      {
        id: "t5",
        label: "5. Agar",
        say: "Agar bizni yaxshiroq bilib olsangiz — muloqot va hamkorlikni davom ettiramizmi?",
        next: "continue",
      },
      {
        id: "t6",
        label: "6. Me'yorlarga havola",
        say: "Bu normal — hamma narsani bilish mumkin emas. Aynan shuning uchun kompaniya haqida aytib berish uchun qo'ng'iroq qilyapman.",
        next: "continue",
      },
      {
        id: "t7",
        label: "7. Gap u haqida emas, bu haqida",
        say: "Gap biz haqimizda emas, balki sizga qanday yordam bera olishimizda — qancha yangi mijoz olish va qancha vaqt tejashda.",
        next: "continue",
      },
      {
        id: "t9",
        label: "9. Hikoyalar",
        say: "Oxirgi mijozlardan biri ham biz haqimizda bilmasdi — lekin ishlab, oylik normasini yopgan shartnoma oldi.",
        next: "continue",
      },
      {
        id: "t10",
        label: "10. Savol berish",
        say: "Hozir biz haqimizda qisqacha aytib bersam, qarshi emasmisiz?",
        next: "continue",
      },
    ],
  },

  obj_online: {
    id: "obj_online",
    title: "«Onlayn-platformalar bilan ishlamaymiz / xavfsiz emas»",
    situation:
      "Buning ortida ko'pincha kiberxavfsizlik qo'rquvi turadi. Avval qo'shiling va mutlaqlikni savol bilan tekshiring, keyin javob bering. Agar taqiq xolisona bo'lsa (portlar haqiqatan ham berkitilgan) — bu bizning mijoz emas.",
    prompt: "Yurishni tanlang",
    options: [
      {
        id: "join",
        label: "➊ Qo'shilish (javobdan oldin)",
        say: "Sizni tushunaman — men ham notanish saytlarga ehtiyotkorlik bilan kiraman va tushunarsiz havolalarga o'tmaslikka harakat qilaman.",
        next: "continue",
      },
      {
        id: "absolut",
        label: "Mutlaqlikni savol bilan buzish",
        say: "Umuman, biron havolani ochasizmi, pochta orqali o'tasizmi? Agar hech bo'lmasa ba'zan — demak, gap «hech qachon»da emas, balki manbaga ishonchda.",
        note: "«Doim / hech qachon» bitta qarshi misol bilan buziladi.",
        next: "continue",
      },
      {
        id: "t1",
        label: "1. Aynan shuning uchun",
        say: "Aynan shuning uchun biz kiberxavfsizlikka alohida e'tibor beramiz — siz xotirjam bo'lishingiz uchun. Xavfsizlik sertifikatlari bor, yuborishim mumkin.",
        next: "continue",
      },
      {
        id: "t4",
        label: "4. Ha, lekin … bu … degani emas",
        say: "Ha, lekin sizda havolalarga o'tish taqiqlangani, mijoz izlash kerak emas degani emas — buni har holda qilish kerak.",
        next: "continue",
      },
      {
        id: "t5",
        label: "5. Agar",
        say: "To'g'ri tushunyapmanmi: agar xavfsizlik sertifikatlarini ko'rsatsam, buning bilan ishlashga tayyormisiz?",
        next: "continue",
      },
      {
        id: "t9",
        label: "9. Hikoyalar",
        say: "Ikki oy oldin xuddi shunday taqiqli mijoz bor edi — xavfsizlik xizmati saytlarimizni tekshirdi, ruxsat berdi va yaxshi narsa ekan dedi.",
        next: "continue",
      },
      {
        id: "t10",
        label: "10. Savol berish (sababni bilish)",
        say: "Ruxsat bering, aniqlashtirib olay — bu aynan nima bilan bog'liq? («nega» emas, «nima bilan bog'liq»).",
        note: "Haqiqiy sababni bilib oling va marketingga uzating.",
        next: "continue",
      },
    ],
  },

  obj_notinterested: {
    id: "obj_notinterested",
    title: "«Menga qiziq emas»",
    situation: "Ko'pincha odam shunchaki mohiyat va foydani bilmaydi. Qo'shiling va qiziqishni qaytaring.",
    prompt: "Yurishni tanlang",
    options: [
      {
        id: "join",
        label: "➊ Qo'shilish (javobdan oldin)",
        say: "Tabiiy — har qanday taklif, mohiyatini bilmaguningcha, qiziq bo'lolmaydi. Menga ham aytib berilmaguncha ko'p narsa qiziq emas.",
        next: "continue",
      },
      {
        id: "novalue",
        label: "Ehtimol, qadrini ko'rmayapsiz",
        say: "Ehtimol, ayni damda sizga aynan qanday foyda bera olishimiz ko'rinmayotgandir. Keling, qisqacha ko'rsatay — siz esa qiziqmi yoki yo'qligini hal qilasiz.",
        next: "continue",
      },
      {
        id: "ask",
        label: "Savol berish (sababni bilish)",
        say: "Roziman. Ruxsat bering, aniqlashtiray — qiziq emasligi aynan nima bilan bog'liq? Shunda umuman sizni bezovta qilishning ma'nosi bor-yo'qligini tushunaman.",
        next: "continue",
      },
    ],
  },

  obj_nothing: {
    id: "obj_nothing",
    title: "«Bizga hech narsa kerak emas»",
    situation:
      "Refleks bilan rad etish. Asosiysi — mijoz «to'xtashi»: chekinmang, savol bering va dialogga o'ting.",
    prompt: "Ilashtiruvchi savolni tanlang",
    options: [
      {
        id: "how_find",
        label: "Mijozlarni qanday izlaysiz?",
        say: "Darrov rad etishga shoshilmang. Ayting-chi, iltimos, hozir mijozlarni qanday izlaysiz?",
        next: "continue",
      },
      {
        id: "volume",
        label: "Oyiga qancha hajm?",
        say: "Rad etishga shoshilmang. Ayting-chi, oyiga qancha hajmda sotasiz/sotib olasiz? Sizni umuman bezovta qilishning ma'nosi bor-yo'qligi shunga bog'liq.",
        next: "continue",
      },
      {
        id: "local",
        label: "Bozorni aniqlashtirish",
        say: "Rad etishga shoshilmang. To'g'ri tushunyapmanmi, siz faqat mahalliy bozorda, O'zbekiston bo'yicha ishlaysizmi?",
        next: "continue",
      },
    ],
  },

  obj_otherway: {
    id: "obj_otherway",
    title: "«Mijozlarni boshqa yo'l bilan jalb qilaman»",
    situation:
      "Avval qo'shiling — ularning usulini «yomon emas» deng («yaxshi» emas), keyin afzallikni ko'rsating.",
    prompt: "Variantni tanlang",
    options: [
      {
        id: "join_compare",
        label: "Qo'shilish + solishtirish",
        say: "Bu mijoz jalb qilishning yomon usuli emas. Unga nisbatan biz bilan siz ko'proq iliq, qaynoq va yirik mijozlarni olasiz, ularga kamroq vaqt sarflaysiz. Bu siz uchun qanchalik muhim?",
        note: "«Maqsadli» demang (ularniki ham maqsadli) — «iliqroq / qaynoqroq / yirikroq» deng.",
        next: "continue",
      },
      {
        id: "channels",
        label: "Bitta kanal — kam",
        say: "Mijozlar turli joydan keladi — kimdir tavsiya bilan, kimdir reklamadan, kimdir platformadan. 100 ta mijoz topishning bitta usuli yo'q, bitta mijozni topishning 100 ta usuli bor. Biz — joriy kanalga xalaqit bermaydigan yana bir kanalmiz.",
        next: "continue",
      },
    ],
  },

  obj_later: {
    id: "obj_later",
    title: "«Keyinroq / hozir emas»",
    situation:
      "Ko'pincha bu xushmuomalalik bilan rad etish → demak, qadrni yetkaza olmadingiz. Avval qadrga qayting, keyin — shoshilinchlikka javoblar.",
    prompt: "Variantni tanlang",
    options: [
      {
        id: "value",
        label: "Qadrga qaytish",
        say: "Qarang: yanvarda boshlaymiz — uchta mijoz, fevralda yana, shu tariqa bir yilda 36 ta yangi mijoz. Kechiktirsak — bu 36 tasi shunchaki yo'qoladi. Shuning uchun keling, nima olishingizni ko'rib chiqamiz.",
        next: "continue",
      },
      {
        id: "moreexpensive",
        label: "«Keyin qimmatroq bo'ladi»",
        say: "Keyin faqat qimmatroq bo'ladi — eng foydali shartlar aynan hozir.",
        next: "continue",
      },
      {
        id: "envy",
        label: "«Boshlaganlarga havas qilasiz»",
        say: "Keyinga suradiganlar, keyinchalik hozir boshlaganlarga havas qiladi. Tajribaga ko'ra, oldindan boshlaganlarning hammasi narx va shartlardan juda mamnun.",
        next: "continue",
      },
      {
        id: "moment",
        label: "«Vaziyatni ilg'agan — o'zib ketadi»",
        say: "Vaziyatni ilg'ay oladigan kishi raqobatchilarni ortda qoldiradi. Sizning holatda hozir — start uchun eng foydali payt.",
        next: "continue",
      },
    ],
  },

  obj_callback: {
    id: "obj_callback",
    title: "«O'zim sizga qayta qo'ng'iroq qilaman»",
    situation:
      "Odatda yumshoq rad etish (= «o'ylab ko'raman»). Tashabbusni o'z qo'lingizga oling. Lekin sabab xolisona bo'lsa (masalan, band) — bu normal.",
    prompt: "Variantni tanlang",
    options: [
      {
        id: "policy",
        label: "«Bizda menejer qo'ng'iroq qilishi qabul qilingan»",
        say: "Aslo — bizda menejer mijozga birinchi bo'lib qayta qo'ng'iroq qilishi qabul qilingan, shuning uchun buni men qilaman.",
        next: "continue",
      },
      {
        id: "race",
        label: "«Poyga» (hazil bilan)",
        say: "Keling, poyga qilaylik — kim birinchi terib qoladi 🙂 Lekin aniq yo'qolib qolmaslik uchun, men teray.",
        next: "continue",
      },
      {
        id: "bonus",
        label: "Shoshilinchlik + bonus",
        say: "Siz qayta qo'ng'iroq qilganingizda aksiya tugab, narx oshib qolishi mumkin. Agar hozir qaror qilsangiz — yoqimli bonus beraman. Qanaqaligini bilasizmi? …",
        next: "continue",
      },
    ],
  },

  obj_think: {
    id: "obj_think",
    title: "«O'ylab ko'rishim kerak» (alohida e'tiroz)",
    situation:
      "Odatda hech kim o'ylamoqchi emas. Shablon bilan «nima haqida o'ylaysiz, keling birga» deb javob BERMANG — bu eskirgan. Avval qo'shiling, keyin asl sababni bilib oling.",
    prompt: "Yurishni tanlang",
    options: [
      {
        id: "join",
        label: "Qo'shilish",
        say: "Bilasizmi, o'ylab ko'rsangiz men faqat ma'qullayman — o'ylamasdan biror narsani rasmiylashtirishingizni aslo istamasdim. Shoshilmang.",
        next: "obj_think_2",
      },
    ],
  },
  obj_think_2: {
    id: "obj_think_2",
    title: "«O'ylash» — qanday davom etish",
    situation: "Qo'shilishdan keyin — asl sababni yumshoq aniqlang.",
    prompt: "Davomini tanlang",
    options: [
      {
        id: "boss",
        label: "«Boshliq so'raydi» + shkala",
        say: "Rahbarim hammasi qanday o'tganini so'raydi, men hisobot to'ldiraman. Ayting-chi: 1 dan 10 gacha shkalada, ishni boshlash ehtimoli qancha?",
        next: "continue",
      },
      {
        id: "inprinciple",
        label: "«Umuman, sizga qanday?»",
        say: "Umuman, tizim sizga qanday — shunchaki men tushunishim uchun? (Shunda asl sababni bilasiz: yoqadi, lekin pul yo'q / qarorni u qabul qilmaydi.)",
        note: "Agar «yoqadi, lekin hammasini aytmadingiz» bo'lsa — yana bir bor aytib berishni taklif qiling.",
        next: "continue",
      },
    ],
  },

  obj_discount: {
    id: "obj_discount",
    title: "«Chegirma istayman»",
    situation:
      "Chegirmani sotib olmoqchi bo'lganlar so'raydi (tayyorlik triggeri). Chegirma bilan sotib olgan — usiz ham olardi; sotib olmagan — chegirma uchun emas, boshqa sababdan rad etgan. Muhtojlikni ko'rsatmang.",
    prompt: "Variantni tanlang",
    options: [
      {
        id: "already",
        label: "«Bu allaqachon chegirma bilan»",
        say: "Bunday hurmatli mijozga chegirmasiz taklif qilishga jur'at etmagan bo'lardim — bu allaqachon chegirma bilan.",
        next: "continue",
      },
      {
        id: "onprice",
        label: "«Bundan keyin — faqat narxga»",
        say: "Bundan keyin men faqat narxga qila olaman — lekin buning evaziga sizga kattaroq limit va kengaytirilgan paket beraman.",
        next: "continue",
      },
      {
        id: "addvalue",
        label: "Chegirma o'rniga — qadr qo'shish",
        say: "Chegirma berolmayman, lekin bonus sifatida nimadir qo'shaman. Shunda o'sha pulga ko'proq olasiz.",
        next: "continue",
      },
    ],
  },

  templates: {
    id: "templates",
    title: "10 ta shablon (usul) — ma'lumotnoma",
    situation:
      "Hammasini ishlatish shart emas, lekin bilishingiz kerak. E'tiroz bilan ishlash — ping-pong: u e'tiroz bildirdi — siz javob berdingiz. Avval qo'shilish, keyin usul.",
    prompt: "Usul qanday ishlashini ko'rish",
    options: [
      { id: "p1", label: "1. Aynan shuning uchun", say: "E'tiroz → «Aynan shuning uchun…» va uni foydaga aylantirasiz.", next: "templates" },
      { id: "p2", label: "2. Biz aynan ixtisoslashganmiz", say: "«Biz aynan [e'tiroz] bo'lgan kompaniyalarga ixtisoslashganmiz».", next: "templates" },
      { id: "p3", label: "3. E'tirozni savolga aylantirish", say: "«Siz nega [e'tiroz] deb so'ramoqchimidingiz?» — «Ha» — «Hozir aytib beraman… Savolingizga javob berdimmi?»", next: "templates" },
      { id: "p4", label: "4. Ha, lekin … bu … degani emas", say: "Qo'shilish + «…bu [mijozning salbiy xulosasi] degani emas».", next: "templates" },
      { id: "p5", label: "5. Agar", say: "«To'g'ri tushundimmi, agar [shart] bo'lsa, siz [harakat]ga tayyormisiz?»", next: "templates" },
      { id: "p6", label: "6. Me'yorlarga havola", say: "«Bu normal — [mijoz qilayotgan narsa]».", next: "templates" },
      { id: "p7", label: "7. Gap u haqida emas, bu haqida", say: "«Gap [e'tiroz] haqida emas, [asosiy foyda] haqida».", next: "templates" },
      { id: "p8", label: "8. Yana biror narsa bormi?", say: "BARCHA e'tirozlarni birdaniga yig'ing, keyin qaysi biridan boshlash qulayligini tanlang.", next: "templates" },
      { id: "p9", label: "9. Hikoyalar", say: "«Yaqinda xuddi shunday vaziyatdagi mijoz bor edi…» — muammoning betakrorligini olib tashlaymiz.", next: "templates" },
      { id: "p10", label: "10. Savol berish", say: "«Sizni aynan nima tashvishga solyapti?» / «Nega bunday narxda bizdan sotib olishadi?» / «Sizni nima ishontira olardi?»", next: "templates" },
    ],
  },

  price: {
    id: "price",
    title: "Narx va chegirmalar",
    situation: "Avval qadr — keyin narx. Odamlar qimmatroq to'lashdan afsuslanmaydi; behudaga ortiqcha to'lashdan afsuslanadi.",
    prompt: "Nima kerak?",
    options: [
      {
        id: "name_price",
        label: "Narxni qanday to'g'ri aytish",
        say: "Ketma-ketlik: qadr → narx. Yirik shartnomalarda: qadr → narx → pauza. Yumaloq bo'lmagan raqamlar, 3 variant (vilka). Chegirmadan boshlamang.",
        next: "continue",
      },
      { id: "expensive_ref", label: "«Qimmat»ga javob", next: "obj_expensive" },
      { id: "discount_ref", label: "Chegirma so'rovi", next: "obj_discount" },
    ],
  },

  closing: {
    id: "closing",
    title: "Bitimni yopish",
    situation: "Bitimning 4 sharti: ehtiyoj, byudjet, QQSh, shoshilinchlik manbasi. Hammasini ishlab bo'lgan bo'lsangiz — savolni kechiktirmang.",
    prompt: "Yopish usulini tanlang",
    options: [
      {
        id: "direct",
        label: "To'g'ridan-to'g'ri yopish",
        say: "Hammasi mos ekan — kechiktirmaslikni taklif qilaman. Kirishni rasmiylashtiramiz va siz allaqachon shu hafta so'rovlar ola boshlaysiz. Kelishdikmi?",
        next: "continue",
      },
      {
        id: "scale",
        label: "«Tayyorlik shkalasi» (1–10)",
        say: "1 dan 10 gacha shkalada, boshlashga qanchalik tayyorsiz? [N] dan 10 ga ko'tarish uchun nima kerak? / 6+ bo'lgan ekan — nega hozir boshlamaslik kerak?",
        next: "continue",
      },
      {
        id: "nextsteps",
        label: "Keyingi qadamlar",
        say: "Keyingi qadamlar: men kirishni tayyorlayman, siz ma'lumotlarni yuborasiz, payshanba kuni — qisqa onbording. Mos keladimi?",
        next: "continue",
      },
      {
        id: "stuck",
        label: "Mijoz «osilib qoldi»",
        say: "Muhokama qilganlarimizdan kelib chiqib, biz bilan boshlamasligingizga biron sabab bormi? Sizni nima ishontira olardi?",
        next: "continue",
      },
    ],
  },

  continue: {
    id: "continue",
    title: "Mijoz qanday munosabat bildirdi?",
    situation:
      "Uchta tipik munosabat: (1) «bu haqda o'ylamagandim, haqsiz», (2) «chiroyli, lekin baribir chegirma istayman», (3) rad etish. Keyin nima bo'lishini tanlang.",
    prompt: "Keyin nima?",
    options: [
      { id: "agreed", label: "✓ Mijoz rozi / iliq → yopish", next: "closing" },
      { id: "new_obj", label: "↪ Yangi e'tiroz", next: "objection_type" },
      { id: "think", label: "🤔 «O'ylab ko'raman»", next: "obj_think" },
      { id: "discount", label: "💰 Chegirma so'rayapti", next: "obj_discount" },
      { id: "restart", label: "🔄 Yangi suhbat boshlash", next: "start" },
    ],
  },
};

// «Ambaks» bo'limining o'zbekcha (lotin) varianti. id'lar ambax.ts bilan bir xil.
import type { Tip } from "./tips";

export const AMBAX_CATEGORIES_UZ = [
  "Izlash va ishga olish",
  "Telefon orqali saralash",
  "Suhbat",
  "Motivatsiya",
  "To'lov va reja",
  "Bo'limni boshqarish",
  "Qimmatroq sotish",
] as const;

export const AMBAX_UZ: Tip[] = [
  // ── Izlash va ishga olish ──
  {
    id: "no-ready-seller",
    category: "Izlash va ishga olish",
    title: "«Tayyor» yaxshi sotuvchini izlamang",
    body: "Yaxshi sotuvchilar allaqachon biror joyda ishlaydi — ularga shundayam yaxshi. Bozorga «dasturxon qoldiqlari» tushadi (istisno — firma yopilgan). Eng yaxshi kompaniyalar izlamaydi, sotuvchilarni o'zi tarbiyalaydi. Esda tuting: «o'rgatish» va «ushlab qolish» — ikki xil vazifa.",
  },
  {
    id: "whom-not-what",
    category: "Izlash va ishga olish",
    title: "Muhimi — KIMGA sotgani, NIMANI emas",
    body: "Ideal nomzod — siz sotgan narsani sotgan emas, balki sizga qiziqarli mijozlarga (xuddi shu QQSh ga, xuddi shu segmentga) sotgan kishi. U kirish nuqtalarini, qaror qabul qilish tizimini, sohaning «qush tili»ni biladi. Uning o'tmishdagi mahsuloti siznikidan qancha ko'p farq qilsa — shuncha yaxshi. Aynan sizning sohada tajriba kerak emas: mahsulot ikki haftada o'rganiladi.",
  },
  {
    id: "competence-fields",
    category: "Izlash va ishga olish",
    title: "Sotuvchining 4 ta kompetensiya sohasi",
    body: "(1) Mahsulotni bilish — 2 haftada o'rganiladi, hal qiluvchi emas. (2) Sotuv ko'nikmalari — ehtiyojlarni aniqlash, taqdimot, e'tirozlar, yopish. Ommaviy mayda sotuvlar uchun birinchi ikkitasi yetarli. Murakkab b2b uchun qo'shiladi: (3) loyihalarni boshqarish (loyiha nima, doiralari, homiy ekanini tushunish) va (4) emotsional intellekt (o'z va o'zganing hissiyotlarini boshqarish).",
  },
  {
    id: "project-manager",
    category: "Izlash va ishga olish",
    title: "Murakkab sotuvlar uchun loyiha menejeri kerak",
    body: "Televizor sotuvchisi televizor qanday ishlashini bilmaydi. Murakkab mahsulot uchun o'xshash mijozlar bilan ishlagan loyiha menejerini oling: u uchrashuv, taqdimot o'tkazadi, e'tirozlarni ishlaydi, texnik nuanslarni esa qo'llanma bo'yicha bir-ikki kunda o'rganadi. Uni «loyiha rahbari / ijrochi direktor» deb atang, «operatsionist» emas.",
  },
  {
    id: "three-positions",
    category: "Izlash va ishga olish",
    title: "Vakansiyada — birdaniga uchta lavozim",
    body: "«Sotuv menejeri, katta menejer va sotuv bo'limi rahbari»ni bir vaqtda e'lon qiling. Agar kuchli nomzod kelsa-yu, bo'lim rahbarligiga yetmasa, siz «katta menejer lavozimi bor» deysiz. Shunda uni yo'qotmasdan «pasaytirish»ga joy bo'ladi.",
  },
  {
    id: "no-stolen-base",
    category: "Izlash va ishga olish",
    title: "Begona mijozlar bazasiga ehtiyot bo'ling",
    body: "Oldingi ish joyidan mijozlar bazasini sudrab keladigan nomzod — oldindan sodiq emas: u yerda «kalamushdek bazani olib qochgan» — siz bilan ham xuddi shunday qiladi. Bundan tashqari bu raqobatchi bilan urush. Jozibali (tayyor pul), lekin xavfli. Vaziyatga qarab hal qiling, lekin sodiqlikni unutmang.",
  },

  // ── Telefon orqali saralash ──
  {
    id: "collect-not-give",
    category: "Telefon orqali saralash",
    title: "Ma'lumot bermang, yig'ing",
    body: "Klassik xato — nomzod sizni «suhbatdan o'tkazayotgan» paytda uning savollariga («nima sotish, qancha maosh, dam olish qachon») javob berish. Aksincha: «Albatta, hammasini aytaman. Ruxsat bering, undan oldin sizdan bir narsani aniqlab olay…» — va qarshi savol bering. Maqsadingiz — u haqida ma'lumot yig'ish va kompaniyani sotish, toki u kelishni xohlasin (odamlar «so'nadi» va yetib kelmaydi — darrov chaqiring).",
  },
  {
    id: "salary-question",
    category: "Telefon orqali saralash",
    title: "«Qancha olaman?» degan savolga",
    body: "Raqam aytmang: u yo kichik (ko'nglini qoldiradi), yo katta (qo'rqitadi). Yaxshisi kafolatsiz ishora: «Bugun ofisga keling — o'tgan oyda 7 000$ topgan odamni ko'rsataman». Siz hech narsa va'da qilmaysiz, lekin qiziqish uyg'otasiz.",
  },
  {
    id: "idiot-proof",
    category: "Telefon orqali saralash",
    title: "«Idiot-pruf» savol",
    body: "«Bizdagi ishingizni o'zingiz qanday tasavvur qilasiz?» — buni yangilarga ham, tajribalilarga ham bering. Javobidan deyarli hammasi ayon. NIMA deganiga emas, QANDAY deganiga qarang: ishonch bilan va ravon bo'lsa (mazmunan kam bo'lsa ham) — imkon bering; ming'irlasa va duduqlansa — yo'q.",
  },
  {
    id: "name-sharp-things",
    category: "Telefon orqali saralash",
    title: "«O'tkir» talablarni darrov bildiring",
    body: "Ishda odamlar voz kechadigan narsa bo'lsa, uni birinchi qo'ng'iroqdayoq ayting: «Bizda sovuq qo'ng'iroqlar qilish / komandirovkalarga borish / direktorlar bilan rus tilida muzokara olib borish kerak. Sizningcha, eplaysizmi?». Shunda qo'ng'iroqdan, parvozlardan yoki ommaviylikdan qo'rqadiganlarni saralab tashlaysiz.",
  },

  // ── Suhbat ──
  {
    id: "soar",
    category: "Suhbat",
    title: "SOAR / STAR usuli — haqiqiy tajribani tekshirish",
    body: "Nomzod tajribasi haqida yolg'on gapiryaptimi yo'qmi bilish uchun 4 qadam bo'yicha yuriting. S (Vaziyat): «Vaziyatni tasvirlang — bu qanday ko'rinardi, kim bilan ishladingiz, nima sotdingiz?». O (Maqsad/vazifalar): «Qanday maqsadlar bor edi, sotuv rejasi, KPI bormidi?». A (Harakatlar): «Ularga erishish uchun aniq nima qildingiz?». R (Natija): «Bu nimaga olib keldi?». Eng UMUMIY, «vaziyat» so'zli savoldan boshlang, keyin chuqurlashtiring.",
  },
  {
    id: "body-language",
    category: "Suhbat",
    title: "Tana tiliga e'tibor bering (osilib qolish)",
    body: "Haqiqiy tajribani odam tafsilotlari bilan eslaydi (xuddi muxlis — sevimli jamoasi haqidagi faktlarni). Yolg'on gapirayotgan «osilib qoladi»: tayyor javob bo'lmaganda yuzi 1–2 soniyaga sezilarli o'zgaradi. Shuning uchun «vaziyat» so'zli umumiy savollar va aniqlashtirishlar tayyorlangan yolg'onni ochib beradi.",
  },
  {
    id: "candidate-questions",
    category: "Suhbat",
    title: "Nomzod qanday savollar beradi",
    body: "Biznesga yo'naltirilgan savollar (murabbiy, CRM, mahsulot haqida) — yaxshi belgi. Ko'p ijtimoiy savollar (chekish xonasi, erta ketish, dam olish kunlari) — xavotirli: odam «dam olgani» kelgan. Savollarning umuman yo'qligi ham yomon (tushunmaydi yoki uyaladi). «5 yildan keyin o'zingizni kim deb ko'rasiz»ga ko'pchilikda javob yo'q; kuchli variant — «sizning o'rningizda, siz esa — yuqori lavozimda».",
  },
  {
    id: "who-interviews",
    category: "Suhbat",
    title: "Kim suhbat o'tkazishi kerak",
    body: "Murakkab sotuvlar uchun sotuvchilarni sotuv bo'limi rahbari egasi bilan birga suhbatdan o'tkazadi — kadrlar bo'limi EMAS (HR «jangchi» emas, «diplomat» oladi; bo'lim rahbari o'ziga o'xshashlarni oladi). Yaxshisi ikki kishi va turli psixotipda (emotsional + texnolog) — nomzodni turli burchakdan ko'rish uchun.",
  },
  {
    id: "appearance-setting",
    category: "Suhbat",
    title: "Tashqi ko'rinish va muhit",
    body: "Baholang: qanday kiyingan (uchrashuvga munosabati), kompaniyani o'rganganmi (tafsilotlarni bilmaslik — normal, umuman nima bilan shug'ullanishingizni tushunmaslik — yomon), punktuallik, chekadimi/yo'qmi. O'zingiz esa «kompaniyani soting»: muzokaralar xonasidan «pul hidi» kelishi kerak — qimmat ruchka, ko'z oldida hech qanday tez tayyor lag'mon va arzon mahsulotlar bo'lmasin. Bu ongsiz ravishda ta'sir qiladi, ayniqsa kuchli nomzodni og'dirayotgan bo'lsangiz.",
  },

  // ── Motivatsiya ──
  {
    id: "drivers",
    category: "Motivatsiya",
    title: "6 ta asosiy motivator (Toni Robbins bo'yicha)",
    body: "Odamni nima harakatlantiradi: aniqlik (barqarorlik) ↔ noaniqlik/xilma-xillik; birinchi raqam bo'lish/betakrorlik ↔ sevgi va odamlar bilan aloqa; o'sish (moliyaviy, jismoniy, ma'naviy); dunyoga hissa qo'shish; ijod. Motivatorlar juft-juft qarama-qarshi: aniqlikka intilish qancha kuchli bo'lsa, xavf-xatarga shuncha kam. Pul — mozaikaning faqat bir bo'lagi.",
  },
  {
    id: "motivation-game",
    category: "Motivatsiya",
    title: "«Juft solishtirish» o'yini — motivatorni aniqlash",
    body: "Suhbatda yoki xodim bilan: motivatorlarni juft-juft solishtirasiz («qaysi muhimroq — aniqlikmi yoki o'sishmi?») va DARROV, o'ylamasdan javob berishni so'raysiz (aks holda ijtimoiy ma'qul javob beradi). «Belgi»larni sanab — portretni olasiz. Keyin kompaniyani uning tilida «sotasiz»: «o'sish» uchun — «bizda o'sish mumkin», «aniqlik» uchun — «biz barqaror o'samiz, ishonchlilik».",
  },
  {
    id: "use-strengths",
    category: "Motivatsiya",
    title: "Xodimning kuchli tomonlaridan foydalaning",
    body: "Har bir sotuvchining o'z kuchli va kuchsiz tomoni bor. Yaxshi «gapiradigan», lekin kompyuterda kuchsizni — muzokara/qo'ng'iroqlarga; kamgap, lekin tinib-tinchimasni — so'rovlarni qayta ishlashga. Kuchsizini tortib chiqarishga urinmang — odamga uddasidan chiqadigan ishini bering.",
  },

  // ── To'lov va reja ──
  {
    id: "pay-scheme",
    category: "To'lov va reja",
    title: "To'lov sxemasi: maosh + foiz 50/50",
    body: "Model eng yaxshilarni rag'batlantirib, dangasalarni qo'rqitishi va rejaga bog'langan bo'lishi kerak. Sotuvchining «shartli yillik daromadi» va uning kvotasini (puldagi reja) kiritamiz. Daromadni 50/50 — maosh va o'zgaruvchan qismga bo'lamiz. Misol: kvota 600 000 €, shartli daromad 12 000 €/yil → maosh 500 €/oy + sotuvdan 1% (kvotadan 1% aynan ikkinchi 500 € ni beradi).",
  },
  {
    id: "accelerator",
    category: "To'lov va reja",
    title: "Akselerator — rejani oshirib bajargani uchun «haqiqiy baxt»",
    body: "Rejaning 100% gacha 1% to'laymiz. Keyin progressiyani yoqamiz: 100–140% → +2%, 140–160% → +3% va hokazo. Har bir bosqichda — yana bitta maosh miqdorida bonus (milestone bonus). 160% dan yuqorisida bazaviy stavkaga qaytaramiz (bu haqda oldindan ogohlantiramiz — birinchi yili rejalashtirib xato qilganmiz). «Hech bir kompaniya sotuvchilarga ko'p to'lagani uchun sinmagan — kam to'lagani uchun singan». Bu kadrlar oqovini yo'qotadi: «baxt shu yerda to'planadi».",
  },
  {
    id: "kpi",
    category: "To'lov va reja",
    title: "KPI — ko'pi bilan uchta",
    body: "Sotuvchi faqat «o'zi sotiladigan»ni sotmasligi uchun KPI qo'yamiz (masalan, hajmning 20% — kerakli xizmatga). 3 tadan ko'p emas (yaxshisi 1–2). KPI ni bajarmasangiz — akseleratorsiz quyi stavkada yuring (bu jarima emas, qo'shimcha motivatsiyaning yo'qligi). Uchta KPI bo'lsa, chorakda bittasini bajarmaslikka ruxsat berish mumkin.",
  },
  {
    id: "planning",
    category: "To'lov va reja",
    title: "Reja aynan noaniqlikda kerak",
    body: "«Qancha sotishimizni bilmaymiz» — rejalashtirmaslikka sabab emas: rejalashtirish aynan hech bo'lmasa qandaydir aniqlik olish uchun kerak («ma'lumot yetishmasligi qo'mondonni qarordan ozod qilmaydi»). Motivatsiya cho'qqisi — muvaffaqiyat ehtimoli real tuyulganda: juda baland reja motivatsiyani so'ndiradi, juda past — bo'shashtiradi. Reja «dasturlaydi»: 100 000 qo'ysangiz — 100 000 ni qanday qilishni o'ylashadi.",
  },
  {
    id: "ansoff",
    category: "To'lov va reja",
    title: "Ansoff matritsasi — rejani qanday bo'lish",
    body: "Rejaning «g'ovlagini» bo'laklarga bo'ling (sotuvchilar, mahsulotlar, hududlar, kanallar bo'yicha). Qulay kesim — Ansoff matritsasi: (1) mavjud mijozlarga — mavjud mahsulotlar (fon sotuvlari); (2) mavjudlarga — yangi mahsulotlar (qo'shimcha sotuv; mavjudga sotish 12–16 marta osonroq); (3) yangi mijozlarga — mavjud mahsulotlar; (4) yangilarga — yangi (eng noaniq). Rejalar yig'indisini kutilgandan ~10% balandroq qo'ying (kimdir kasal bo'ladi/ishdan ketadi/mijoz ketadi).",
  },

  // ── Bo'limni boshqarish ──
  {
    id: "three-mgmt-types",
    category: "Bo'limni boshqarish",
    title: "Boshqaruvning 3 turi",
    body: "(1) Yo'riqnoma bo'yicha (MBI) — oddiy ommaviy vazifalar uchun (kassir: «jilmay, aksiya haqida ayt»); chetga chiqishlarda qotib qoladi. (2) Maqsadlar bo'yicha (MBO) — «natija keltir, qanday — o'zing bilasan»; sotuv uchun. (3) Qadriyatlar bo'yicha (MBV) — oilaviy/g'oyaviy biznes, «qanaqa reja, biz rohatlanyapmiz». Xato — natija o'rniga jarayonni nazorat qilish («10 daqiqalik 20 ta qo'ng'iroq» → vaqtni cho'za boshlaydi).",
  },
  {
    id: "mgmt-principles",
    category: "Bo'limni boshqarish",
    title: "Boshqaruvning 6 ta asosiy tamoyili",
    body: "(1) O'lchovsiz boshqaruv yo'q — hammasini sanaymiz (qancha, qaysi sanagacha). (2) Har qanday muammo — odamning emas, tizimning kamchiligi. (3) Qarorlar — «menimcha» emas, ma'lumotlar asosida. (4) Qarorlarning 95% gachasi avtomatik qabul qilinishi kerak: bir marta hal qildik — reglamentni hujjatlashtirdik. (5) Rahbar istisnolar bilan shug'ullanadi. (6) Har qanday tushunarsiz vaziyatda so'rang: «bu foydani oshiradimi / xavfni kamaytiradimi?» — ha/yo'q.",
  },
  {
    id: "pyramid",
    category: "Bo'limni boshqarish",
    title: "Menejment piramidasi — o'zingizni pastdan chiqaring",
    body: "Pastdan yuqoriga: ijro → operativ boshqaruv (nazorat) → taktik → strategiya → qadriyatlar/ma'no. Egasining xatosi — ijro darajasida qotib qolish («o'zim bo'yayman, o'zim qirqaman») — u holda biznes zararli. O'sish uchun o'zingizni quyi qavatlardan asta-sekin chiqaring (istisnolar bo'ladi — masalan, shaxsiy brend).",
  },
  {
    id: "operational-control",
    category: "Bo'limni boshqarish",
    title: "Operativ nazorat: o'lchov → reja → munosabat",
    body: "(1) O'lchov (qanday qo'ng'iroq qiladi — chek-list bo'yicha). (2) Reja bilan solishtirish. (3) Munosabat: rejaga teng — maqtang (darrov maqtang, «yaxshi ishda qo'lga tushganda»); biroz kam — dalda bering, «zo'r ber» deb yordamlashing; ancha kam yoki nol — sababni (aloqa, tizim) topib bartaraf qiling, menejerni chaqiring; ancha ko'p — «vaziyatni ilg'a», hammani jalb qil. Yangini tez-tez nazorat qilamiz (kuniga bir marta → haftada 2 marta → haftada bir marta).",
  },
  {
    id: "smart-goals",
    category: "Bo'limni boshqarish",
    title: "Maqsad qo'yish (SMART+)",
    body: "Maqsad: birinchi shaxsdan, ijobiy ifoda bilan («mijozlarni yo'qotmaslik» emas), va ekologik (oqibatlarni o'ylab — «zo'riqib ketmaymizmi»). Plyus klassika: Aniq, O'lchanadigan, Erishsa bo'ladigan (resurslar bor), Relevant (asosiy maqsadga mos), Vaqtda (deadline'siz maqsad — bu orzu, miya uni abadiy keyinga suradi).",
  },
  {
    id: "grow",
    category: "Bo'limni boshqarish",
    title: "Qaror uchun GROW modeli",
    body: "Qanday qaror qabul qilishni bilmaganingizda: G (Goal) — maqsad qanday (SMART bo'yicha, imkon qadar batafsil)? R (Reality) — hozir qayerdasiz, faktlar va raqamlar? O (Options) — qanday variantlar bor? W (Will) — bulardan nimasini qilasiz. Shu tarzda shaxsiy ham, boshqaruv qarorlari ham qabul qilinadi.",
  },

  // ── Qimmatroq sotish ──
  {
    id: "sell-higher",
    category: "Qimmatroq sotish",
    title: "Qimmatroq sotish = e'tiborni «kimga»ga qaratish",
    body: "«Qanday ishontirish» emas, «kimga sotamiz». KUCHLI tomonlaringiz muhim bo'lgan va kuchsiz tomoningizga (baland narxga) sodiq mijozlarni izlang. Hammada kuchli/kuchsiz tomon bor (McDonald's misoli: tez, standart, arzon — lekin nufuzli emas, foydali emas). Kuchsizlarni tortib chiqarmang, kuchli tomonlarni kuchaytiring (futbol: kimdir kalla zarbida, kimdir texnikada kuchli).",
  },
  {
    id: "segment-top100",
    category: "Qimmatroq sotish",
    title: "Nuqtaviy marketing: top-100 mijoz",
    body: "Qimmat murakkab sotuvlar uchun ommaviy reklama kerak emas — bu mamnuniyat bilan mos keladigan top-100 mijoz ro'yxati kerak. Shuncha to'planmasa — maqsad/segmentni o'zgartiring. Vaqtni sarflaydigan, lekin hech qachon sotib olmaydigan mijozlardan ehtiyot bo'ling. Kirishda saralang (masalan: «sizda sotuv bo'limi to'planganmi?»).",
  },
  {
    id: "woodpecker",
    category: "Qimmatroq sotish",
    title: "«Qizilishton usuli» — top-100 bo'yicha aloqalar seriyasi",
    body: "Yirik mijozlar bo'yicha aloqalar turli kanallar orqali sikl bo'lib boradi: logotipli oddiy pochta xati (ko'p marka yopishtiring — ochilish ehtimoli yuqoriroq) → 3 kundan keyin xuddi shunday → yana bir bor → 3D-xat (konvert ochilishi uchun bo'rtiq narsa soling) → otkritka → e-mail → messenjer → qo'ng'iroq, va aylana bo'yicha. Tog' cho'qqisiga ko'p yo'l bor. Aloqaga konversiya ~50% gacha yetadi.",
  },
  {
    id: "entry-points",
    category: "Qimmatroq sotish",
    title: "Yirik mijozlar — «kirish nuqtalari» va tadbirlar orqali",
    body: "Yirik kompaniyalarda «kirish nuqtasi» bor — qaror qabul qilmaydigan, lekin kerakli odam bilan tanishtiradigan kishi. Yirik mijozlarni qo'ng'iroq bilan emas, forumlar, ko'rgazmalar, biznes-nonushtalar, biznes-klublarda olishadi («aloqalar uchun» borishadi). QQSh bilan intervyu uchun kirish: «Men 100 ta eng yaxshi tadbirkor haqida kitob yozyapman, siz short-listga kirdingiz» — shunday qilib sekretarni chetlab o'tib, suhbatga chiqishadi.",
  },
  {
    id: "site-abcd",
    category: "Qimmatroq sotish",
    title: "Sotuvchi sahifani tekshirish — ABCD",
    body: "Sayt birinchi sahifasida (va istalgan landing'da) 4 ta element bo'lishi kerak: A (Attention) — e'tibor (tanilgan brendlar va katta raqamlar); B (Benefits) — odam nima oladi; C (Credentials) — nega aynan siz; D (Direction) — keyingi qadam (tugma, so'rov, ro'yxatdan o'tish). Birinchi ekranda e'tibor bo'lmasa — «siz meni yo'qotdingiz».",
  },
];

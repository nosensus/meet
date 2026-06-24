// «Maslahatlar» bo'limining o'zbekcha (lotin) varianti. id'lar tips.ts bilan bir xil.
import type { Tip } from "./tips";

export const TIP_CATEGORIES_UZ = [
  "Sotuv psixologiyasi",
  "Qo'ng'iroq taktikasi",
  "Mijoz jalb qilish",
  "Chegirma va narx",
  "Muloqot texnikasi",
  "Yopish",
] as const;

export const TIPS_UZ: Tip[] = [
  // ── Sotuv psixologiyasi ──
  {
    id: "expectations",
    category: "Sotuv psixologiyasi",
    title: "Mijoz kutganlarini boshqaring",
    body: "Baxt = idrok − kutish. Mijoz qancha ko'p kutsa, shuncha kam mamnun bo'ladi. Yorqin kelajak manzarasini chizing, lekin aniq raqamlarni KAFOLATLAMANG («sizda shuncha mijoz bo'ladi»). Yaxshisi boshqalarga havola qiling: «bir mijozda shunday bo'lgan edi». Norozi mijozlar — bu doim yo xohlaganini olmaganlar, yo kutganlari haddan oshib ketganlar.",
  },
  {
    id: "no-need",
    category: "Sotuv psixologiyasi",
    title: "Muhtojlikni ko'rsatmang",
    body: "Sotuvda muhtojlik — har doim yomon. Paradoks: qancha qattiq bossangiz, mijoz shuncha kam sotib olgisi keladi. Bitta mijozga 28 marta qo'ng'iroq qilsangiz, unda siz ochlikdan o'layapsiz degan tuyg'u paydo bo'ladi. Chegarani saqlang: «biz muhtoj emasmiz, biz sotmoqchimiz — bizda boshqa mijozlar ham bor». Tiz cho'kib sotib olishni yolvoradigan kishi xor shartlarda sotadi.",
  },
  {
    id: "patterns",
    category: "Sotuv psixologiyasi",
    title: "Mijozlar patternlar bo'yicha harakat qiladi",
    body: "Odamlar vaqtining katta qismini avtopilotda, 8–9 ta strategiya bo'yicha o'tkazadi. «Menga nimadir sotishyaptimi — qarshilik qilish kerak» — bu sizga shaxsan tegishli emas, balki avtomatik dastur. Buni bilib, birinchi qarshilikni o'z hisobingizga olmang: ehtimol, odamga mahsulotingiz kerakdir, shunchaki pattern ishga tushgan.",
  },
  {
    id: "three-reactions",
    category: "Sotuv psixologiyasi",
    title: "E'tirozga javobning uchta munosabati",
    body: "E'tiroz bilan ishlash — ping-pong. Javobingizdan keyin mijoz uch usuldan biri bilan munosabat bildiradi: (1) «bu haqida o'ylamagan edim, bunda nimadir bor, haqsiz»; (2) «chiroyli javob berdingiz, lekin baribir chegirma istayman»; (3) «yo'qoling». Mijoz — qora quti, munosabatni oldindan aytib bo'lmaydi. Vazifangiz — «100% urish» emas, balki muvaffaqiyat ehtimolini oshirish.",
  },

  // ── Qo'ng'iroq taktikasi ──
  {
    id: "three-touches",
    category: "Qo'ng'iroq taktikasi",
    title: "Uchta aloqa qoidasi",
    body: "Mijozni «bezdirmang». 1–2–3 marta qo'ng'iroq qildingiz → pauza (3 oy) → yana uchta aloqa. Bitta e'tirozni ko'pi bilan uch marta ishlang, keyin — «kuningiz xayrli o'tsin». Ko'r-ko'rona qat'iyat karlikka olib keladi: mijozlar yopishqoq sotuvchilarni e'tiborsiz qoldiradi.",
  },
  {
    id: "service-call",
    category: "Qo'ng'iroq taktikasi",
    title: "«Ovchi» emas, servis xizmati niqobida qo'ng'iroq qiling",
    body: "Allaqachon ro'yxatdan o'tgan / mahsulot qo'shayotganlarga qo'llab-quvvatlash kabi qo'ng'iroq qiling: «Assalomu alaykum, bu qo'llab-quvvatlash xizmati. Ko'ryapman, siz mahsulot qo'shyapsiz — sozlashda yordam kerakmi?». Avval servis aloqasi (yordam), sotuv esa — keyingi aloqada. Birinchi soniyadanoq peshonadan sotmang.",
  },
  {
    id: "department-structure",
    category: "Qo'ng'iroq taktikasi",
    title: "Bo'lim tuzilishi: razvedkachi → ovchi → fermer → servis",
    body: "Ommaviy sotuvda rollarni ajrating. Razvedkachilar bazani «kerak / kerak emas» tamoyili bo'yicha aylanib chiqadi va iliqlarini ovchiga uzatadi. Ovchi bitimni yopadi. Fermer doimiy mijozni yuritadi, muddatini uzaytiradi va qo'shimcha sotadi. Servis xizmati mamnunlikni bilib oladi va g'amxo'rlik niqobida qo'shimcha sotadi («hammasi yoqayotgan ekan — sizda mana buni sotib olish imkoni bor»).",
  },
  {
    id: "objection-vs-excuse",
    category: "Qo'ng'iroq taktikasi",
    title: "Bahonani haqiqiy e'tirozdan farqlang",
    body: "Eng birinchi e'tiroz odatda — pashshani haydagandek qo'l siltash: «e, arzimas, hali ko'rmadim», «bizga kerak emas». Haqiqiy e'tiroz o'ylangan holda yangraydi: «ko'rdim, IT'chilar bo'lmaydi deyishdi». Ohangidan o'qiladi. Sababni tushunish uchun «bu nima bilan bog'liq?» deb so'rang («nega» emas) — va ma'lumotni marketingga uzating.",
  },

  // ── Mijoz jalb qilish ──
  {
    id: "own-event",
    category: "Mijoz jalb qilish",
    title: "O'z tadbiringiz / konferensiya",
    body: "Jalb qilishning eng yaxshi usullaridan biri — AMASR / Alfa-Konfa namunasidagi o'z forumingiz: 4–5 soat chiqishlar (spikerlar, musiqa, keyslar), bloklar orasida — chegirmali taklif. Homiylarni barter asosida jalb qiling (zal, ovoz, tashqi reklama, biznes-markazlar liftlaridagi reklama — chiptalar evaziga). O'z tadbiringizda e'tirozlarni sahnadan o'zingiz aytasiz va o'zingiz ularga javob berasiz.",
  },
  {
    id: "myths",
    category: "Mijoz jalb qilish",
    title: "E'tirozlarni «afsona»ga aylantiring",
    body: "Chiqishda yoki taqdimotda e'tirozlarni e'tiroz demang — ularni afsona deb atang: «Sizning o'rningizda men sotib olmasligimning 9 ta sababi (afsonasi) bor». Va har birini puchga chiqaring. Afsonalarni doskaga yozib, bittalab o'chirib borish mumkin: «Ko'rib turibsiz, afsona qolmadi».",
  },
  {
    id: "referrals",
    category: "Mijoz jalb qilish",
    title: "Tavsiyalar tizimi (referallar)",
    body: "Mijozning uch xil qadri bor: hozir nima sotib olayotgani, nima sotib olishi mumkinligi va boshqalarga ta'siri. Ko'pchilik faqat birinchisini ko'radi. Har biriga (sotib olganga ham, olmaganga ham) referal kod bering: «uchta mijoz olib kelsangiz — yarim yil bepul». Tavsiya bilan kelgan mijozlar tezroq qaror qabul qiladi va savdolashmaydi. Tavsiya «ba'zan bizni maslahat berishadi» emas, tizim bo'lishi kerak.",
  },
  {
    id: "many-channels",
    category: "Mijoz jalb qilish",
    title: "Bitta kanal — kam",
    body: "«100 ta mijoz topishning bitta usuli yo'q — bitta mijozni topishning 100 ta usuli bor». Mijozlar turli joydan keladi: kitob, video, tavsiya, jonli chiqish, maqola. Platforma — bu qolganlarini almashtirmaydigan, balki to'ldiradigan kanallardan biri.",
  },

  // ── Chegirma va narx ──
  {
    id: "no-discounts",
    category: "Chegirma va narx",
    title: "Chegirmani shunchaki bermang",
    body: "Chegirmani sotib olmoqchi bo'lganlar so'raydi — bu tayyorlik triggeri («faqat sotib olmoqchi bo'lganimiz bilan savdolashamiz»). Chegirma bilan sotib olgan — usiz ham olardi; sotib olmagan — chegirma uchun emas, balki qadrini tushunmagani yoki ishonmagani uchun rad etgan. Javob bering: «bu allaqachon chegirma bilan», «bundan keyin faqat narxga qila olaman, lekin kattaroq limit beraman», yoki chegirma o'rniga bonus qo'shing.",
  },
  {
    id: "value-first",
    category: "Chegirma va narx",
    title: "Avval qadr, keyin narx",
    body: "Odamlar qimmatroq to'lashdan afsuslanmaydi — behudaga ortiqcha to'lashdan afsuslanadi. Odam nimaga to'layotganini tushunmasa, har qanday narx baland tuyuladi. Narxni aytish ketma-ketligi: qadr → narx (yirik bitimlarda → pauza). Yumaloq bo'lmagan raqamlardan foydalaning va 3 ta variant (narx vilkasi) taklif qiling. Argumentatsiyani chegirmadan boshlamang.",
  },

  // ── Muloqot texnikasi ──
  {
    id: "stop-words",
    category: "Muloqot texnikasi",
    title: "Stop-so'zlar va «lekin»ni «va»ga almashtirish",
    body: "«Kerak», «qimmat», «bezovta qiladi» so'zlaridan va talaffuzi qiyin tovushlardan qoching. Asosiy qoida: «lekin»ni «va»ga almashtiring. «Qimmat, lekin bizda eng yaxshi servis» emas, balki «…va bizda eng yaxshi servis». «Lekin» salbiyni tasdiqlaydi, «va» iborani ijobiy qiladi.",
  },
  {
    id: "name-and-voice",
    category: "Muloqot texnikasi",
    title: "E'tirozga javob berishda ikki qoida",
    body: "(1) Mijozni ismi bilan chaqiring — bu replikaga samimiylik bag'ishlaydi. (2) Ovozingizni iloji boricha yumshating: «jangchi» sotuvchilar e'tirozda «bosib o'tmoqchi» bo'ladi va jo'shqinlik bilan bosadi. Yordam beradigan usul: qo'lingizni ko'kragingizga qo'ying — ovoz darrov yumshaydi.",
  },
  {
    id: "joining",
    category: "Muloqot texnikasi",
    title: "Avval qo'shilish, keyin javob",
    body: "E'tirozga javob berishdan oldin avval qo'shiling, bahslashmang. Faqat qayta ishlash, qo'shilishsiz — qo'pol eshitiladi; faqat qo'shilish, qayta ishlashsiz — go'yo taslim bo'lgandek. Ikkalasi ham kerak. Misollar: «Men hatto o'ylab ko'rishingizni talab qilaman…», «Bu normal, men ham doim chegirma so'rayman», «Tushunaman, bu yoqimsiz — ro'yxatdan o'tasan, bitim esa yo'q».",
  },
  {
    id: "break-absolutism",
    category: "Muloqot texnikasi",
    title: "Mutlaqlik bitta ibora bilan buziladi",
    body: "«Men doim / hech qachon…»ga qarshi misol bilan javob bering: «Hech bo'lmasa bir marta … bo'lganmi?». «Onlayn-platformalardan foydalanmayman» → «Umuman, biron havola ochasizmi?». «Faqat chegirma bilan sotib olaman» → «Yoqib qolib, lekin chegirma bo'lmagan holat bo'lganmi?». Hech bo'lmasa bir marta bo'lgan bo'lsa — demak «doim» emas, va keyin ishlash mumkin.",
  },

  // ── 4/5-qismdan ──
  {
    id: "daily-drill",
    category: "Muloqot texnikasi",
    title: "Skriptlarni har kuni mashq qiling",
    body: "Shablonlarni bir kunda yodlab bo'lmaydi. Har kuni yarim soat ajrating: qo'ng'iroq yozuvlarini tahlil qiling, 10 ta shablon bo'yicha javoblarni ovoz chiqarib gapiring. 3–4 haftadan keyin bu avtomatizmga aylanadi — «yozuvlarga qaramasdan» javob berasiz.",
  },
  {
    id: "channel-hierarchy",
    category: "Qo'ng'iroq taktikasi",
    title: "Uchrashuv qo'ng'iroqdan kuchli",
    body: "Kanal tana tilini qancha ko'p uzatsa, aloqa shuncha kuchli: shaxsiy uchrashuv > videoaloqa > telefon > yozishma. Tanlov bo'lsa — muhim suhbatni uchrashuvga yoki hech bo'lmasa videoga o'tkazing, hammasini yozishmada yopmang.",
  },
  {
    id: "to-specifics",
    category: "Yopish",
    title: "«Cho'zilishdan» — doim aniqlikka",
    body: "Har qanday kechikish va «o'ylab ko'raman/keyin»ni aniq keyingi qadamga olib chiqing: «Keyingi qadamimiz qanday?», «Qachon davom etamiz?». Suhbatni qayd etilgan harakat va sanasiz tugatmang.",
  },
];

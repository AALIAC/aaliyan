/* ==========================================================================
   M. AALIYAAN PORTFOLIO — script.js (Combined JavaScript)
   ========================================================================== */

const LANGUAGES = [
  { code: "en", label: "English", dir: "ltr" },
  { code: "ur", label: "اردو", dir: "rtl" },
  { code: "ar", label: "العربية", dir: "rtl" }
];

const TRANSLATIONS = {
  en: {
    meta_title: "M. Aaliyaan — Graphic Designer & Video Editor, Lahore",
    nav_about: "About",
    nav_services: "Services",
    nav_logo: "Logo Folio",
    nav_branding: "Branding",
    nav_social: "Social Media",
    nav_packaging: "Packaging",
    nav_print: "Print Media",
    nav_video: "Video Editing",
    nav_contact: "Contact",

    hero_eyebrow: "Service Provider",
    hero_title_line1: "Portfolio",
    hero_name_prefix: "by",
    hero_scroll: "Scroll",

    about_tag: "About me",
    about_heading: "Hello!",
    about_body: "I'm a creative and motivated graphic designer and a video editor with a strong passion for visual storytelling and brand design. I thrive on exploring new challenges and opportunities that push the boundaries of my creativity. Known for my creative flair and ability to deliver impactful outputs, I'm always learning and experimenting with new trends and techniques to sharpen my skills and expand my creative thinking.",
    about_photo_alt: "Portrait placeholder — upload photo",
    about_location: "Based in Lahore, Pakistan",

    services_tag: "What I do",
    services_heading: "Table of Contents",
    service_01_title: "Logo Folio",
    service_01_desc: "Custom marks built around a brand's story.",
    service_02_title: "Branding Design",
    service_02_desc: "Full identity systems, start to finish.",
    service_03_title: "Social Media Post",
    service_03_desc: "Scroll-stopping content for every feed.",
    service_04_title: "Packaging Design",
    service_04_desc: "Shelf-ready designs that sell the product.",
    service_05_title: "Print Media Design",
    service_05_desc: "Brochures, billboards, standees & more.",
    service_06_title: "Video Editing",
    service_06_desc: "Story-first edits that keep people watching.",

    logo_tag: "01 / Logo Folio",
    logo_heading: "Logo Folio",
    logo_caption: "My logo folio highlighting custom logos I designed to align with clients' vision & a little practice work.",
    logo_placeholder_note: "Placeholder mark — real logo file to be uploaded",

    branding_tag: "02 / Branding",
    branding_heading: "Branding",
    branding_caption: "These brand identity design projects involve creating impactful visual identifying marks of their mission & goals.",
    branding_case_label: "Case Study",
    branding_case_name: "Emberloop",
    branding_case_sub: "Sustainable Technology",
    branding_story: "Emberloop is a sustainable technology brand focused on creating innovative, energy-efficient products that merge natural warmth with advanced design. The identity reflects an endless cycle of energy — smart, adaptive, and responsible.",
    branding_features_heading: "Key Features",
    branding_feature_1: "Sustainable Innovation",
    branding_feature_2: "Adaptive Warmth",
    branding_feature_3: "Infinite Energy Cycle",
    branding_feature_4: "Smart Design",
    branding_feature_5: "Nature-Driven Technology",
    branding_feature_6: "Human-Centered Approach",
    branding_feature_7: "Intelligent Functionality",
    branding_feature_8: "Modern Identity",
    branding_palette_heading: "Brand Palette",
    branding_palette_1: "Ember Orange — warmth",
    branding_palette_2: "Graphite Black — strength",
    branding_palette_3: "Silver Gray — precision",
    branding_palette_4: "Off-White — balance",
    branding_type_heading: "Typography",
    branding_type_value: "Poppins Bold",
    branding_wordmark_heading: "Wordmark Logic",
    branding_wordmark_body: "The double \"o\" in “emberloop” is drawn as an infinity symbol — representing a continuous cycle of creativity and innovation: connection, balance, and endless spark.",
    branding_mockups_heading: "Applications",
    branding_mockup_note: "Mockup placeholder — real render to be uploaded",

    social_tag: "03 / Social Media",
    social_heading: "Social Media Post",
    social_caption: "Visual content I crafted for social networks such as Instagram, Facebook and web interfaces.",
    social_placeholder_note: "Post mockup placeholder",

    packaging_tag: "04 / Packaging",
    packaging_heading: "Packaging Design",
    packaging_caption: "Designed innovative and visually appealing product packaging that effectively communicates brand identity and enhances customer engagement.",
    packaging_placeholder_note: "Packaging mockup placeholder",

    print_tag: "05 / Print Media",
    print_heading: "Print Media",
    print_caption: "High-quality print designs I crafted to enhance offline brand presence.",
    print_brochure_heading: "Brochure Design",
    print_billboard_heading: "Billboard Design",
    print_standee_heading: "Standee Design",
    print_billboard_client_1: "Mashaallah Motors — DHA Phase 2, Lahore",
    print_billboard_client_2: "Luxury Homes For Sale — Real Estate",
    print_placeholder_note: "Print mockup placeholder",

    video_tag: "06 / Video Editing",
    video_heading: "Video Editing",
    video_caption: "I craft engaging video edits that tell stories, capture attention, and keep viewers hooked from start to finish.",
    video_coming_soon: "Coming Soon!",

    contact_tag: "Get in touch",
    contact_heading: "Let's Work Together",
    contact_sub: "Thanks for Scrolling!",
    contact_body: "Have a project in mind? Tell me about it — rates are discussed per project depending on scope, and I'm generally available any time.",
    contact_form_name: "Your name",
    contact_form_email: "Your email",
    contact_form_message: "Tell me about your project",
    contact_form_submit: "Send Message",
    contact_form_note: "This form is a front-end demo — connect it to an email service (e.g. Formspree) to receive messages live.",
    contact_direct_heading: "Direct contact",
    contact_email_label: "Email",
    contact_whatsapp_label: "WhatsApp",
    contact_instagram_label: "Instagram",
    footer_rights: "All rights reserved.",
    footer_made: "Designed & built for",

    chatbot_button_label: "Chat with me",
    chatbot_header: "Ask about Aaliyaan",
    chatbot_subheader: "Scripted assistant · usually instant",
    chatbot_placeholder: "Ask about services, process, brands...",
    chatbot_send: "Send",
    chatbot_greeting: "Hey! I'm a scripted assistant that knows Aaliyaan's work. Ask me about his services, process, past brands, or how to reach him.",
    chatbot_fallback: "I don't have a scripted answer for that yet — best to ask Aaliyaan directly on WhatsApp or Instagram, linked in the contact section.",
    chatbot_suggestion_1: "What services does he offer?",
    chatbot_suggestion_2: "Tell me about Emberloop",
    chatbot_suggestion_3: "How do I contact him?",
    chatbot_suggestion_4: "What are his rates?",

    whatsapp_label: "WhatsApp",
    theme_toggle_label: "Toggle theme",
    lang_select_label: "Language"
  },

  ur: {
    meta_title: "ایم عالیان — گرافک ڈیزائنر اور ویڈیو ایڈیٹر، لاہور",
    nav_about: "تعارف",
    nav_services: "خدمات",
    nav_logo: "لوگو فولیو",
    nav_branding: "برانڈنگ",
    nav_social: "سوشل میڈیا",
    nav_packaging: "پیکیجنگ",
    nav_print: "پرنٹ میڈیا",
    nav_video: "ویڈیو ایڈیٹنگ",
    nav_contact: "رابطہ",

    hero_eyebrow: "سروس پرووائیڈر",
    hero_title_line1: "پورٹ فولیو",
    hero_name_prefix: "بذریعہ",
    hero_scroll: "سکرول کریں",

    about_tag: "میرے بارے میں",
    about_heading: "ہیلو!",
    about_body: "میں ایک تخلیقی اور پرجوش گرافک ڈیزائنر اور ویڈیو ایڈیٹر ہوں، جسے بصری کہانی سنانے اور برانڈ ڈیزائن کا گہرا شوق ہے۔ میں نئے چیلنجز اور مواقع تلاش کرنے میں دلچسپی رکھتا ہوں جو میری تخلیقی صلاحیتوں کی حدوں کو آگے بڑھائیں۔ اپنے تخلیقی ذوق اور بامعنی نتائج دینے کی صلاحیت کے لیے جانا جاتا ہوں، اور ہمیشہ نئے رجحانات اور تکنیکوں کو سیکھتا رہتا ہوں۔",
    about_photo_alt: "تصویر کی جگہ — اصل تصویر اپلوڈ کریں",
    about_location: "لاہور، پاکستان میں مقیم",

    services_tag: "میں کیا کرتا ہوں",
    services_heading: "فہرست خدمات",
    service_01_title: "لوگو فولیو",
    service_01_desc: "برانڈ کی کہانی پر مبنی مخصوص نشانات۔",
    service_02_title: "برانڈنگ ڈیزائن",
    service_02_desc: "شروع سے آخر تک مکمل شناختی نظام۔",
    service_03_title: "سوشل میڈیا پوسٹ",
    service_03_desc: "ہر فیڈ کے لیے متوجہ کرنے والا مواد۔",
    service_04_title: "پیکیجنگ ڈیزائن",
    service_04_desc: "ایسے ڈیزائن جو پروڈکٹ کو بیچنے میں مدد دیں۔",
    service_05_title: "پرنٹ میڈیا ڈیزائن",
    service_05_desc: "بروشر، بل بورڈ، سٹینڈی اور مزید۔",
    service_06_title: "ویڈیو ایڈیٹنگ",
    service_06_desc: "ایسی ایڈیٹنگ جو ناظرین کو جوڑے رکھے۔",

    logo_tag: "۰۱ / لوگو فولیو",
    logo_heading: "لوگو فولیو",
    logo_caption: "میرا لوگو فولیو، کلائنٹس کے وژن کے مطابق ڈیزائن کیے گئے مخصوص لوگوز اور کچھ مشقی کام کو اجاگر کرتا ہے۔",
    logo_placeholder_note: "عارضی نشان — اصل لوگو فائل اپلوڈ کی جائے گی",

    branding_tag: "۰۲ / برانڈنگ",
    branding_heading: "برانڈنگ",
    branding_caption: "یہ برانڈ شناختی ڈیزائن پراجیکٹس ان کے مشن اور اہداف کی مؤثر بصری شناخت تخلیق کرتے ہیں۔",
    branding_case_label: "کیس اسٹڈی",
    branding_case_name: "ایمبرلوپ",
    branding_case_sub: "پائیدار ٹیکنالوجی",
    branding_story: "ایمبرلوپ ایک پائیدار ٹیکنالوجی برانڈ ہے جو جدید، توانائی بچانے والی مصنوعات بناتا ہے جو قدرتی گرمجوشی کو جدید ڈیزائن سے جوڑتی ہیں۔ یہ شناخت توانائی کے ایک لامتناہی چکر کی عکاسی کرتی ہے — ہوشیار، موافق اور ذمہ دار۔",
    branding_features_heading: "اہم خصوصیات",
    branding_feature_1: "پائیدار جدت",
    branding_feature_2: "موافق گرمجوشی",
    branding_feature_3: "لامتناہی توانائی کا چکر",
    branding_feature_4: "ہوشیار ڈیزائن",
    branding_feature_5: "فطرت سے متاثر ٹیکنالوجی",
    branding_feature_6: "انسان مرکز انداز",
    branding_feature_7: "ذہین فعالیت",
    branding_feature_8: "جدید شناخت",
    branding_palette_heading: "برانڈ رنگ پیلٹ",
    branding_palette_1: "ایمبر اورنج — گرمجوشی",
    branding_palette_2: "گریفائٹ بلیک — مضبوطی",
    branding_palette_3: "سلور گرے — درستگی",
    branding_palette_4: "آف وائٹ — توازن",
    branding_type_heading: "ٹائپوگرافی",
    branding_type_value: "پوپنز بولڈ",
    branding_wordmark_heading: "ورڈ مارک کی منطق",
    branding_wordmark_body: "“emberloop” میں دوہرا \"o\" لامتناہی علامت کے طور پر بنایا گیا ہے — جو تخلیقیت اور جدت کے مسلسل چکر کی نمائندگی کرتا ہے: تعلق، توازن اور لامتناہی چمک۔",
    branding_mockups_heading: "استعمالات",
    branding_mockup_note: "ماک اپ کی جگہ — اصل تصویر اپلوڈ کی جائے گی",

    social_tag: "۰۳ / سوشل میڈیا",
    social_heading: "سوشل میڈیا پوسٹ",
    social_caption: "انسٹاگرام، فیس بک اور ویب انٹرفیس جیسے سوشل نیٹ ورکس کے لیے تیار کردہ بصری مواد۔",
    social_placeholder_note: "پوسٹ ماک اپ کی جگہ",

    packaging_tag: "۰۴ / پیکیجنگ",
    packaging_heading: "پیکیجنگ ڈیزائن",
    packaging_caption: "ایسی جدید اور پرکشش پروڈکٹ پیکیجنگ جو برانڈ کی شناخت کو مؤثر طریقے سے پیش کرتی ہے۔",
    packaging_placeholder_note: "پیکیجنگ ماک اپ کی جگہ",

    print_tag: "۰۵ / پرنٹ میڈیا",
    print_heading: "پرنٹ میڈیا",
    print_caption: "آف لائن برانڈ موجودگی بڑھانے کے لیے تیار کردہ اعلیٰ معیار کے پرنٹ ڈیزائن۔",
    print_brochure_heading: "بروشر ڈیزائن",
    print_billboard_heading: "بل بورڈ ڈیزائن",
    print_standee_heading: "سٹینڈی ڈیزائن",
    print_billboard_client_1: "ماشاءاللہ موٹرز — ڈی ایچ اے فیز ۲، لاہور",
    print_billboard_client_2: "لگژری گھر برائے فروخت — ریئل اسٹیٹ",
    print_placeholder_note: "پرنٹ ماک اپ کی جگہ",

    video_tag: "۰۶ / ویڈیو ایڈیٹنگ",
    video_heading: "ویڈیو ایڈیٹنگ",
    video_caption: "میں ایسی ویڈیو ایڈیٹنگ تخلیق کرتا ہوں جو کہانی سناتی ہے، توجہ حاصل کرتی ہے اور ناظرین کو شروع سے آخر تک جوڑے رکھتی ہے۔",
    video_coming_soon: "جلد آ رہا ہے!",

    contact_tag: "رابطہ کریں",
    contact_heading: "آئیے مل کر کام کریں",
    contact_sub: "سکرول کرنے کا شکریہ!",
    contact_body: "کوئی پراجیکٹ ذہن میں ہے؟ بتائیں — نرخ کام کی نوعیت کے مطابق طے ہوتے ہیں اور میں عموماً کسی بھی وقت دستیاب ہوں۔",
    contact_form_name: "آپ کا نام",
    contact_form_email: "آپ کا ای میل",
    contact_form_message: "اپنے پراجیکٹ کے بارے میں بتائیں",
    contact_form_submit: "پیغام بھیجیں",
    contact_form_note: "یہ فارم ایک فرنٹ اینڈ ڈیمو ہے — لائیو پیغامات وصول کرنے کے لیے اسے ای میل سروس (مثلاً Formspree) سے جوڑیں۔",
    contact_direct_heading: "براہ راست رابطہ",
    contact_email_label: "ای میل",
    contact_whatsapp_label: "واٹس ایپ",
    contact_instagram_label: "انسٹاگرام",
    footer_rights: "جملہ حقوق محفوظ ہیں۔",
    footer_made: "کے لیے تیار کردہ",

    chatbot_button_label: "مجھ سے بات کریں",
    chatbot_header: "عالیان کے بارے میں پوچھیں",
    chatbot_subheader: "خودکار اسسٹنٹ · عموماً فوری جواب",
    chatbot_placeholder: "خدمات، عمل، برانڈز کے بارے میں پوچھیں...",
    chatbot_send: "بھیجیں",
    chatbot_greeting: "ہیلو! میں ایک خودکار اسسٹنٹ ہوں جو عالیان کے کام کے بارے میں جانتا ہوں۔ مجھ سے اس کی خدمات، عمل، سابقہ برانڈز یا رابطے کے بارے میں پوچھیں۔",
    chatbot_fallback: "اس کا میرے پاس تیار جواب نہیں — بہتر ہے براہ راست واٹس ایپ یا انسٹاگرام پر عالیان سے رابطہ کریں، جو رابطہ سیکشن میں موجود ہیں۔",
    chatbot_suggestion_1: "وہ کون سی خدمات پیش کرتا ہے؟",
    chatbot_suggestion_2: "ایمبرلوپ کے بارے میں بتائیں",
    chatbot_suggestion_3: "میں اس سے کیسے رابطہ کروں؟",
    chatbot_suggestion_4: "اس کے نرخ کیا ہیں؟",

    whatsapp_label: "واٹس ایپ",
    theme_toggle_label: "تھیم تبدیل کریں",
    lang_select_label: "زبان"
  },

  ar: {
    meta_title: "م. عالیان — مصمم جرافيك ومحرر فيديو، لاهور",
    nav_about: "نبذة",
    nav_services: "الخدمات",
    nav_logo: "معرض الشعارات",
    nav_branding: "الهوية التجارية",
    nav_social: "التواصل الاجتماعي",
    nav_packaging: "التغليف",
    nav_print: "الوسائط المطبوعة",
    nav_video: "مونتاج الفيديو",
    nav_contact: "تواصل",

    hero_eyebrow: "مزوّد خدمة",
    hero_title_line1: "ملف الأعمال",
    hero_name_prefix: "بواسطة",
    hero_scroll: "مرر للأسفل",

    about_tag: "نبذة عني",
    about_heading: "مرحباً!",
    about_body: "أنا مصمم جرافيك ومحرر فيديو مبدع ومتحمس، لدي شغف كبير بسرد القصص البصرية وتصميم الهوية التجارية. أزدهر في استكشاف تحديات وفرص جديدة تدفع حدود إبداعي. معروف بحسي الإبداعي وقدرتي على تقديم نتائج مؤثرة، وأتعلم وأجرب دائماً اتجاهات وتقنيات جديدة لصقل مهاراتي.",
    about_photo_alt: "صورة مؤقتة — سيتم رفع الصورة الحقيقية",
    about_location: "مقيم في لاهور، باكستان",

    services_tag: "ماذا أقدّم",
    services_heading: "فهرس المحتويات",
    service_01_title: "معرض الشعارات",
    service_01_desc: "شعارات مخصصة مبنية على قصة العلامة.",
    service_02_title: "تصميم الهوية التجارية",
    service_02_desc: "أنظمة هوية متكاملة من البداية للنهاية.",
    service_03_title: "منشورات التواصل الاجتماعي",
    service_03_desc: "محتوى يوقف المستخدم أثناء التصفح.",
    service_04_title: "تصميم التغليف",
    service_04_desc: "تصاميم جاهزة للرفوف تساعد على البيع.",
    service_05_title: "تصميم الوسائط المطبوعة",
    service_05_desc: "بروشورات، لوحات إعلانية، وأكثر.",
    service_06_title: "مونتاج الفيديو",
    service_06_desc: "مونتاج يروي القصة ويبقي المشاهد متابعاً.",

    logo_tag: "01 / معرض الشعارات",
    logo_heading: "معرض الشعارات",
    logo_caption: "معرض شعاراتي يبرز شعارات مخصصة صممتها لتتوافق مع رؤية العملاء، إضافة إلى بعض أعمال التدريب.",
    logo_placeholder_note: "شعار مؤقت — سيتم رفع الملف الحقيقي",

    branding_tag: "02 / الهوية التجارية",
    branding_heading: "الهوية التجارية",
    branding_caption: "مشاريع تصميم الهوية هذه تصنع علامات بصرية مؤثرة تعبّر عن رسالة العلامة وأهدافها.",
    branding_case_label: "دراسة حالة",
    branding_case_name: "إمبرلوب",
    branding_case_sub: "تقنية مستدامة",
    branding_story: "إمبرلوب علامة تقنية مستدامة تركز على ابتكار منتجات موفرة للطاقة تمزج بين الدفء الطبيعي والتصميم المتقدم. تعكس الهوية دورة لا نهائية من الطاقة — ذكية ومتكيفة ومسؤولة.",
    branding_features_heading: "السمات الأساسية",
    branding_feature_1: "ابتكار مستدام",
    branding_feature_2: "دفء متكيّف",
    branding_feature_3: "دورة طاقة لا نهائية",
    branding_feature_4: "تصميم ذكي",
    branding_feature_5: "تقنية مستوحاة من الطبيعة",
    branding_feature_6: "نهج يركّز على الإنسان",
    branding_feature_7: "وظائف ذكية",
    branding_feature_8: "هوية عصرية",
    branding_palette_heading: "ألوان العلامة",
    branding_palette_1: "برتقالي الجمر — الدفء",
    branding_palette_2: "أسود الغرافيت — القوة",
    branding_palette_3: "رمادي فضي — الدقة",
    branding_palette_4: "أبيض مائل — التوازن",
    branding_type_heading: "الطباعة",
    branding_type_value: "Poppins Bold",
    branding_wordmark_heading: "منطق الشعار الكتابي",
    branding_wordmark_body: "حرفا \"oo\" المزدوجان في “emberloop” رُسما على شكل رمز اللانهاية — يمثلان دورة مستمرة من الإبداع والابتكار: الاتصال، التوازن، والشرارة الدائمة.",
    branding_mockups_heading: "التطبيقات",
    branding_mockup_note: "نموذج مؤقت — سيتم رفع التصميم الحقيقي",

    social_tag: "03 / التواصل الاجتماعي",
    social_heading: "منشورات التواصل الاجتماعي",
    social_caption: "محتوى بصري صممته لمنصات مثل إنستغرام وفيسبوك وواجهات الويب.",
    social_placeholder_note: "نموذج منشور مؤقت",

    packaging_tag: "04 / التغليف",
    packaging_heading: "تصميم التغليف",
    packaging_caption: "تصاميم تغليف مبتكرة وجذابة بصرياً تعبّر بفعالية عن هوية العلامة وتعزز تفاعل العملاء.",
    packaging_placeholder_note: "نموذج تغليف مؤقت",

    print_tag: "05 / الوسائط المطبوعة",
    print_heading: "الوسائط المطبوعة",
    print_caption: "تصاميم مطبوعة عالية الجودة صممتها لتعزيز حضور العلامة خارج الإنترنت.",
    print_brochure_heading: "تصميم البروشور",
    print_billboard_heading: "تصميم اللوحات الإعلانية",
    print_standee_heading: "تصميم الستاندي",
    print_billboard_client_1: "مشاء الله موتورز — الطور 2، لاهور",
    print_billboard_client_2: "منازل فاخرة للبيع — عقارات",
    print_placeholder_note: "نموذج مطبوع مؤقت",

    video_tag: "06 / مونتاج الفيديو",
    video_heading: "مونتاج الفيديو",
    video_caption: "أصنع مونتاج فيديو جذاب يروي القصص، ويلفت الانتباه، ويبقي المشاهدين متابعين من البداية للنهاية.",
    video_coming_soon: "قريباً!",

    contact_tag: "تواصل معي",
    contact_heading: "لنعمل معاً",
    contact_sub: "شكراً على التمرير!",
    contact_body: "لديك مشروع في ذهنك؟ أخبرني عنه — تُناقش الأسعار لكل مشروع حسب حجم العمل، وأنا متاح عموماً في أي وقت.",
    contact_form_name: "اسمك",
    contact_form_email: "بريدك الإلكتروني",
    contact_form_message: "أخبرني عن مشروعك",
    contact_form_submit: "إرسال الرسالة",
    contact_form_note: "هذا النموذج عرض توضيحي أمامي فقط — قم بربطه بخدمة بريد إلكتروني (مثل Formspree) لاستقبال الرسائل فعلياً.",
    contact_direct_heading: "تواصل مباشر",
    contact_email_label: "البريد الإلكتروني",
    contact_whatsapp_label: "واتساب",
    contact_instagram_label: "إنستغرام",
    footer_rights: "جميع الحقوق محفوظة.",
    footer_made: "صُمم لـ",

    chatbot_button_label: "تحدث معي",
    chatbot_header: "اسأل عن عالیان",
    chatbot_subheader: "مساعد مبرمج · إجابة فورية عادةً",
    chatbot_placeholder: "اسأل عن الخدمات، العملية، العلامات...",
    chatbot_send: "إرسال",
    chatbot_greeting: "مرحباً! أنا مساعد مبرمج أعرف أعمال عالیان. اسألني عن خدماته أو أسلوب عمله أو علاماته السابقة أو كيفية التواصل معه.",
    chatbot_fallback: "ليس لدي إجابة مبرمجة لهذا بعد — من الأفضل التواصل مباشرة مع عالیان عبر واتساب أو إنستغرام، الروابط موجودة في قسم التواصل.",
    chatbot_suggestion_1: "ما الخدمات التي يقدمها؟",
    chatbot_suggestion_2: "أخبرني عن إمبرلوب",
    chatbot_suggestion_3: "كيف أتواصل معه؟",
    chatbot_suggestion_4: "ما هي أسعاره؟",

    whatsapp_label: "واتساب",
    theme_toggle_label: "تبديل المظهر",
    lang_select_label: "اللغة"
  }
};

const KNOWLEDGE_BASE = {
  name: "Mohammad Aaliyaan",
  shortName: "Aaliyaan",
  role: "Graphic Designer & Video Editor",
  location: "Lahore, Pakistan",
  instagram: "@aalibaazi",
  instagramUrl: "https://instagram.com/aalibaazi",
  email: "sheikhaaliyaan637@mail.com",
  whatsapp: "923226914114",
  services: [
    "Logo design / logo folio",
    "Full brand identity systems (branding design)",
    "Social media post design (Instagram, Facebook, web)",
    "Packaging design",
    "Print media design — brochures, billboards, standees",
    "Video editing",
    "Basic coding / web design & development"
  ],
  process: "Rates and timelines are discussed directly per project, since they depend on scope and complexity. Aaliyaan is generally reachable any time via WhatsApp, email, or Instagram to start that conversation.",
  rates: "Rates aren't fixed — they depend on the specific work (logo, full brand system, packaging, video, etc.) and are agreed after a quick chat about the project. Reach out on WhatsApp or Instagram for a quote.",
  brands: [
    { name: "Emberloop", note: "Sustainable technology brand — full identity system, the flagship case study on this site." },
    { name: "NovaByte", note: "Logo design." },
    { name: "Aurelia", note: "Logo design." },
    { name: "Echohaus", note: "Logo design." },
    { name: "Veloura", note: "Logo design." },
    { name: "Lumera", note: "Logo design." },
    { name: "MindCrest Academy", note: "Logo design." },
    { name: "Finexis", note: "Logo design." },
    { name: "Verdelife", note: "Logo design." },
    { name: "Ironpulse", note: "Logo design." },
    { name: "Skytrail", note: "Logo design." },
    { name: "Brew District", note: "Logo design." },
    { name: "Shadowcore", note: "Logo design." },
    { name: "Mashaallah Motors", note: "Real billboard client — car repair shop, DHA Phase 2, Lahore." }
  ],
  videoStatus: "The video editing showcase is coming soon — real edits are being finalized and will replace the current teaser."
};

const FAQ_ENTRIES = [
  {
    id: "services",
    keywords: ["service", "services", "offer", "what do you do", "what does he do", "skills", "expertise", "khidmat", "khidmaat"],
    answer: {
      en: `Aaliyaan offers: ${KNOWLEDGE_BASE.services.join(", ")}. Basically, anything you see in this portfolio is something he can do for you.`,
      ur: `عالیان یہ خدمات فراہم کرتا ہے: ${KNOWLEDGE_BASE.services.join("، ")}۔ اس پورٹ فولیو میں جو کچھ بھی دیکھیں، وہ آپ کے لیے کر سکتا ہے۔`,
      ar: `يقدّم عالیان: ${KNOWLEDGE_BASE.services.join("، ")}. بشكل عام، أي شيء تراه في هذا الملف يمكنه تقديمه لك.`
    }
  },
  {
    id: "about",
    keywords: ["who is", "about him", "who are you", "tell me about aaliyaan", "bio", "background"],
    answer: {
      en: `${KNOWLEDGE_BASE.name} is a ${KNOWLEDGE_BASE.role} based in ${KNOWLEDGE_BASE.location}. He's passionate about visual storytelling and brand design, and is always experimenting with new trends and techniques.`,
      ur: `${KNOWLEDGE_BASE.name} ایک ${KNOWLEDGE_BASE.role} ہیں جو ${KNOWLEDGE_BASE.location} میں مقیم ہیں۔ وہ بصری کہانی سنانے اور برانڈ ڈیزائن کے بارے میں پرجوش ہیں۔`,
      ar: `${KNOWLEDGE_BASE.name} هو ${KNOWLEDGE_BASE.role} مقيم في ${KNOWLEDGE_BASE.location}. شغوف بسرد القصص البصرية وتصميم الهوية، ويجرب دائماً اتجاهات وتقنيات جديدة.`
    }
  },
  {
    id: "process",
    keywords: ["process", "how do you work", "workflow", "how does he work", "timeline"],
    answer: {
      en: KNOWLEDGE_BASE.process,
      ur: "نرخ اور اوقات کار ہر پراجیکٹ کے مطابق براہ راست طے کیے جاتے ہیں، کیونکہ یہ کام کی نوعیت پر منحصر ہیں۔ عالیان عموماً کسی بھی وقت واٹس ایپ، ای میل یا انسٹاگرام پر دستیاب ہیں۔",
      ar: "تُناقش الأسعار والجداول الزمنية لكل مشروع مباشرة، لأنها تعتمد على حجم العمل. عالیان متاح عموماً في أي وقت عبر واتساب أو البريد الإلكتروني أو إنستغرام."
    }
  },
  {
    id: "rates",
    keywords: ["rate", "rates", "price", "pricing", "cost", "how much", "budget", "charges", "fee"],
    answer: {
      en: KNOWLEDGE_BASE.rates,
      ur: "نرخ مقرر نہیں ہیں — یہ کام کی نوعیت (لوگو، مکمل برانڈ سسٹم، پیکیجنگ، ویڈیو وغیرہ) پر منحصر ہیں اور مختصر بات چیت کے بعد طے ہوتے ہیں۔ قیمت جاننے کے لیے واٹس ایپ یا انسٹاگرام پر رابطہ کریں۔",
      ar: "لا توجد أسعار ثابتة — تعتمد على نوع العمل (شعار، نظام هوية كامل، تغليف، فيديو...) وتُحدد بعد نقاش سريع. تواصل عبر واتساب أو إنستغرام للحصول على عرض سعر."
    }
  },
  {
    id: "emberloop",
    keywords: ["emberloop", "ember loop", "branding case study", "case study", "brand book"],
    answer: {
      en: "Emberloop is a sustainable technology brand case study on this site — full identity system with an ember-orange & graphite palette, Poppins Bold typography, and a wordmark where the double \"o\" reads as an infinity symbol representing an endless, adaptive energy cycle.",
      ur: "ایمبرلوپ اس ویب سائٹ پر ایک پائیدار ٹیکنالوجی برانڈ کیس اسٹڈی ہے — مکمل شناختی نظام، ایمبر اورنج اور گریفائٹ رنگ پیلٹ، اور ایک ورڈ مارک جس میں دوہرا \"o\" لامتناہیت کی علامت ہے۔",
      ar: "إمبرلوب هي دراسة حالة لعلامة تقنية مستدامة على هذا الموقع — نظام هوية كامل بألوان برتقالي الجمر والغرافيت، وخط Poppins Bold، وشعار كتابي يمثل فيه حرفا \"o\" رمز اللانهاية."
    }
  },
  {
    id: "brands",
    keywords: ["brands", "clients", "logo folio", "worked with", "past work", "portfolio work", "logos"],
    answer: {
      en: `Some of the brands in his logo folio and case studies: ${KNOWLEDGE_BASE.brands.map(b => b.name).join(", ")}.`,
      ur: `ان کے لوگو فولیو اور کیس اسٹڈیز میں شامل کچھ برانڈز: ${KNOWLEDGE_BASE.brands.map(b => b.name).join("، ")}۔`,
      ar: `بعض العلامات في معرض شعاراته ودراسات الحالة: ${KNOWLEDGE_BASE.brands.map(b => b.name).join("، ")}.`
    }
  },
  {
    id: "contact",
    keywords: ["contact", "reach", "email", "whatsapp", "phone", "number", "get in touch", "hire"],
    answer: {
      en: `You can reach Aaliyaan by email at ${KNOWLEDGE_BASE.email}, on WhatsApp, or on Instagram ${KNOWLEDGE_BASE.instagram} — all linked in the contact section below.`,
      ur: `آپ عالیان سے ای میل ${KNOWLEDGE_BASE.email} پر، واٹس ایپ پر، یا انسٹاگرام ${KNOWLEDGE_BASE.instagram} پر رابطہ کر سکتے ہیں — یہ سب نیچے رابطہ سیکشن میں موجود ہیں۔`,
      ar: `يمكنك التواصل مع عالیان عبر البريد الإلكتروني ${KNOWLEDGE_BASE.email}، أو واتساب، أو إنستغرام ${KNOWLEDGE_BASE.instagram} — جميعها في قسم التواصل أدناه.`
    }
  },
  {
    id: "video",
    keywords: ["video", "video editing", "reel", "edit", "editing samples"],
    answer: {
      en: KNOWLEDGE_BASE.videoStatus + " Video editing is one of his core services in the meantime — reach out directly to discuss a project.",
      ur: "ویڈیو ایڈیٹنگ کا شوکیس جلد آ رہا ہے — اصل ایڈٹس تیار کیے جا رہے ہیں۔ اس دوران یہ ان کی بنیادی خدمات میں شامل ہے، پراجیکٹ کے لیے براہ راست رابطہ کریں۔",
      ar: "معرض مونتاج الفيديو قادم قريباً. مونتاج الفيديو من خدماته الأساسية في هذه الأثناء — تواصل مباشرة لمناقشة مشروعك."
    }
  },
  {
    id: "location",
    keywords: ["location", "based", "where is", "city", "lahore", "country"],
    answer: {
      en: `Aaliyaan is based in ${KNOWLEDGE_BASE.location}, and works with clients remotely as well.`,
      ur: `عالیان ${KNOWLEDGE_BASE.location} میں مقیم ہیں، اور ریموٹ کلائنٹس کے ساتھ بھی کام کرتے ہیں۔`,
      ar: `عالیان مقيم في ${KNOWLEDGE_BASE.location}، ويعمل مع العملاء عن بُعد أيضاً.`
    }
  },
  {
    id: "coding",
    keywords: ["coding", "code", "web design", "website", "development", "developer", "programming"],
    answer: {
      en: "Alongside design and video, Aaliyaan also does basic coding and web design/development — this very site is an example of that.",
      ur: "ڈیزائن اور ویڈیو کے ساتھ ساتھ، عالیان بنیادی کوڈنگ اور ویب ڈیزائن/ڈیولپمنٹ بھی کرتے ہیں — یہ ویب سائٹ خود اس کی مثال ہے۔",
      ar: "إلى جانب التصميم والفيديو، يقوم عالیان أيضاً بالبرمجة الأساسية وتصميم/تطوير الويب — هذا الموقع نفسه مثال على ذلك."
    }
  }
];

function scoreEntry(message, entry) {
  const lower = message.toLowerCase();
  let score = 0;
  entry.keywords.forEach(kw => {
    if (lower.includes(kw.toLowerCase())) score += kw.split(" ").length;
  });
  return score;
}

async function getBotReply(message, lang) {
  const activeLang = TRANSLATIONS[lang] ? lang : "en";
  let best = null;
  let bestScore = 0;
  FAQ_ENTRIES.forEach(entry => {
    const s = scoreEntry(message, entry);
    if (s > bestScore) {
      bestScore = s;
      best = entry;
    }
  });
  await new Promise(res => setTimeout(res, 350 + Math.random() * 350));
  if (best && bestScore > 0) {
    return best.answer[activeLang] || best.answer.en;
  }
  return TRANSLATIONS[activeLang].chatbot_fallback;
}

(function () {
  "use strict";

  function initials(name) {
    return name.split(" ").map(w => w[0]).slice(0, 2).join("").toUpperCase();
  }

  function cardVisualHTML(item) {
    if (item.img) {
      return `<img src="${item.img}" alt="${item.name}" loading="lazy">`;
    }
    return `
      <div class="card-mark">${initials(item.name)}</div>
      <div class="card-brand">${item.name}</div>
      <div class="card-note">${item.note || "Placeholder — upload real file"}</div>
    `;
  }

  function buildCard(item, index, opts = {}) {
    const card = document.createElement("div");
    card.className = "card" + (opts.tilt ? " tilt-card" : "") + (opts.sizeClass ? " " + opts.sizeClass : "");
    card.tabIndex = 0;
    card.setAttribute("data-lightbox", "1");
    card.setAttribute("data-title", item.name);
    card.innerHTML = `
      <div class="card-visual ${opts.visualClass || ""}">${cardVisualHTML(item)}</div>
      <div class="card-footer">
        <span class="card-brand-name">${item.name}</span>
        <span class="card-num">${String(index + 1).padStart(2, "0")}</span>
      </div>
    `;
    if (opts.tilt) {
      const visual = card.querySelector(".card-visual");
      card.addEventListener("mousemove", (e) => {
        const r = card.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width - 0.5;
        const py = (e.clientY - r.top) / r.height - 0.5;
        visual.style.transform = `rotateY(${px * 10}deg) rotateX(${-py * 10}deg)`;
      });
      card.addEventListener("mouseleave", () => { visual.style.transform = ""; });
    }
    return card;
  }

  function fillGrid(id, items, opts) {
    const grid = document.getElementById(id);
    if (!grid) return;
    items.forEach((item, i) => grid.appendChild(buildCard(item, i, opts)));
  }

  const LOGOS = [
    { name: "Logo 1", img: "1.png" }, { name: "Logo 2", img: "2.png" },
    { name: "Logo 3", img: "3.png" }, { name: "Logo 4", img: "4.png" },
    { name: "Logo 5", img: "5.png" }, { name: "Logo 6", img: "6.png" },
    { name: "Logo 7", img: "7.png" }, { name: "Logo 8", img: "8.png" },
    { name: "Logo 9", img: "9.png" }, { name: "Logo 10", img: "10.png" },
    { name: "Logo 11", img: "11.png" }, { name: "Logo 12", img: "12.png" }
  ];
  fillGrid("logoGrid", LOGOS, {});

  const SOCIAL = [
    { name: "Social 4", img: "S4.png" }, { name: "Social 1", img: "S1.png" },
    { name: "Social 7", img: "S7.png" }, { name: "Social 3", img: "S3.png" },
    { name: "Social 9", img: "S9.png" }, { name: "Social 2", img: "S2.png" },
    { name: "Social 6", img: "S6.png" }, { name: "Social 8", img: "S8.png" }
  ];
  fillGrid("socialGrid", SOCIAL, {});

  const PACKAGING = [
    { name: "Package 1", img: "P1.png" }, { name: "Package 2", img: "P2.png" },
    { name: "Package 3", img: "P3.png" }, { name: "Package 4", img: "P4.png" },
    { name: "Package 5", img: "P5.png" }, { name: "Package 6", img: "P6.png" },
    { name: "Package 7", img: "P7.png" }
  ];
  fillGrid("packagingGrid", PACKAGING, { tilt: true });

  const BROCHURES = [
    { name: "Brochure 1", img: "B1.png" },
    { name: "Brochure 2", img: "B2.png" },
    { name: "Brochure 3", img: "B3.png" }
  ];
  fillGrid("brochureGrid", BROCHURES, { visualClass: "book-mockup" });

  const BILLBOARDS = [
    { name: "Billboard 1", img: "B4.png" },
    { name: "Billboard 2", img: "B5.png" }
  ];
  fillGrid("billboardGrid", BILLBOARDS, { visualClass: "billboard-mockup" });

  const STANDEES = [
    { name: "Standee 1", img: "B6.png" }, { name: "Standee 2", img: "B7.png" },
    { name: "Standee 3", img: "B8.png" }, { name: "Standee 4", img: "B9.png" }
  ];
  fillGrid("standeeGrid", STANDEES, { visualClass: "standee-mockup" });

  const EMBER_MOCKUPS = [
    "E1.png", "E2.png", "E3.png", "E4.png", "E5.png", "E6.png",
    "E7.png", "E8.png", "E9.png", "E10.png", "E11.png", "E12.png"
  ];
  (function buildEmberMockups() {
    const wrap = document.getElementById("emberloopMockups");
    if (!wrap) return;
    EMBER_MOCKUPS.forEach((imgSrc, i) => {
      const chip = document.createElement("div");
      chip.className = "mockup-chip";
      chip.innerHTML = `<img src="${imgSrc}" alt="Emberloop image ${i + 1}" loading="lazy">`;
      wrap.appendChild(chip);
    });
  })();
})();

(function () {
  "use strict";

  const memoryStore = {};
  const storage = {
    get(key) {
      try { return window.localStorage.getItem(key); }
      catch (e) { return memoryStore[key] ?? null; }
    },
    set(key, value) {
      try { window.localStorage.setItem(key, value); }
      catch (e) { memoryStore[key] = value; }
    }
  };

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const root = document.documentElement;
  const themeToggle = document.getElementById("themeToggle");

  function applyTheme(theme) {
    root.setAttribute("data-theme", theme);
    storage.set("aaliyaan-theme", theme);
    if (themeToggle) themeToggle.setAttribute("aria-pressed", theme === "light" ? "true" : "false");
  }

  function initTheme() {
    const saved = storage.get("aaliyaan-theme");
    applyTheme(saved === "light" ? "light" : "dark");
  }

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const current = root.getAttribute("data-theme");
      applyTheme(current === "dark" ? "light" : "dark");
    });
  }

  const langSelect = document.getElementById("langSelect");

  function applyTranslations(lang) {
    const dict = TRANSLATIONS[lang] || TRANSLATIONS.en;
    const langMeta = LANGUAGES.find(l => l.code === lang) || LANGUAGES[0];

    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      if (dict[key] !== undefined) el.textContent = dict[key];
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
      const key = el.getAttribute("data-i18n-placeholder");
      if (dict[key] !== undefined) el.setAttribute("placeholder", dict[key]);
    });
    document.querySelectorAll("[data-i18n-aria]").forEach(el => {
      const key = el.getAttribute("data-i18n-aria");
      if (dict[key] !== undefined) el.setAttribute("aria-label", dict[key]);
    });

    document.title = dict.meta_title || document.title;
    root.setAttribute("lang", lang);
    root.setAttribute("dir", langMeta.dir);
    document.body.classList.toggle("rtl", langMeta.dir === "rtl");
    storage.set("aaliyaan-lang", lang);
    window.__currentLang = lang;
  }

  function initLang() {
    LANGUAGES.forEach(l => {
      const opt = document.createElement("option");
      opt.value = l.code;
      opt.textContent = l.label;
      langSelect.appendChild(opt);
    });
    const saved = storage.get("aaliyaan-lang");
    const initial = LANGUAGES.some(l => l.code === saved) ? saved : "en";
    langSelect.value = initial;
    applyTranslations(initial);
  }

  if (langSelect) {
    langSelect.addEventListener("change", (e) => applyTranslations(e.target.value));
  }

  const navToggle = document.getElementById("navToggle");
  const navMenu = document.getElementById("navMenu");

  if (navToggle && navMenu) {
    navToggle.addEventListener("click", () => {
      const isOpen = navMenu.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
    });
    navMenu.querySelectorAll("a").forEach(a => {
      a.addEventListener("click", () => {
        navMenu.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  const header = document.getElementById("siteHeader");
  window.addEventListener("scroll", () => {
    if (!header) return;
    header.classList.toggle("is-scrolled", window.scrollY > 12);
  }, { passive: true });

  function playIntro() {
    const intro = document.getElementById("introOverlay");
    if (!intro) return;
    const already = storage.get("aaliyaan-intro-played");
    if (already || prefersReducedMotion) {
      intro.remove();
      return;
    }
    storage.set("aaliyaan-intro-played", "1");
    if (window.gsap) {
      const tl = gsap.timeline({ onComplete: () => intro.remove() });
      tl.to(".intro-name", { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" })
        .to(".intro-line", { scaleX: 1, duration: 0.5, ease: "power2.out" }, "-=0.2")
        .to(intro, { autoAlpha: 0, duration: 0.6, delay: 0.35, ease: "power2.inOut" });
    } else {
      setTimeout(() => intro.remove(), 900);
    }
  }

  function initScrollReveals() {
    if (!window.gsap || !window.ScrollTrigger) return;
    gsap.registerPlugin(ScrollTrigger);

    if (prefersReducedMotion) return;

    gsap.utils.toArray("[data-reveal]").forEach((el) => {
      gsap.fromTo(el,
        { autoAlpha: 0, y: 28 },
        {
          autoAlpha: 1, y: 0, duration: 0.8, ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 85%", once: true }
        }
      );
    });

    gsap.utils.toArray("[data-reveal-group]").forEach((group) => {
      const items = group.querySelectorAll("[data-reveal-item]");
      gsap.fromTo(items,
        { autoAlpha: 0, y: 24 },
        {
          autoAlpha: 1, y: 0, duration: 0.6, ease: "power2.out", stagger: 0.08,
          scrollTrigger: { trigger: group, start: "top 82%", once: true }
        }
      );
    });

    gsap.to(".hero-orb", {
      y: 60, ease: "none",
      scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: 0.6 }
    });
  }

  function initCursor() {
    if (window.matchMedia("(pointer: coarse)").matches || prefersReducedMotion) return;
    const cursor = document.getElementById("cursorDot");
    const ring = document.getElementById("cursorRing");
    if (!cursor || !ring) return;

    let mx = 0, my = 0, rx = 0, ry = 0;
    document.addEventListener("mousemove", (e) => {
      mx = e.clientX; my = e.clientY;
      cursor.style.transform = `translate(${mx}px, ${my}px)`;
    });

    function loop() {
      rx += (mx - rx) * 0.15;
      ry += (my - ry) * 0.15;
      ring.style.transform = `translate(${rx}px, ${ry}px)`;
      requestAnimationFrame(loop);
    }
    loop();

    document.querySelectorAll("a, button, .magnetic, .card").forEach(el => {
      el.addEventListener("mouseenter", () => ring.classList.add("is-active"));
      el.addEventListener("mouseleave", () => ring.classList.remove("is-active"));
    });

    document.body.classList.add("has-custom-cursor");
  }

  function initMagnetic() {
    if (prefersReducedMotion) return;
    document.querySelectorAll(".magnetic").forEach(el => {
      el.addEventListener("mousemove", (e) => {
        const r = el.getBoundingClientRect();
        const x = e.clientX - r.left - r.width / 2;
        const y = e.clientY - r.top - r.height / 2;
        el.style.transform = `translate(${x * 0.25}px, ${y * 0.25}px)`;
      });
      el.addEventListener("mouseleave", () => { el.style.transform = ""; });
    });
  }

  function initLightbox() {
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightboxContent");
    const lightboxCaption = document.getElementById("lightboxCaption");
    const closeBtn = document.getElementById("lightboxClose");
    if (!lightbox) return;

    function open(card) {
      const label = card.getAttribute("data-title") || "";
      lightboxImg.innerHTML = card.querySelector(".card-visual").innerHTML;
      lightboxCaption.textContent = label;
      lightbox.classList.add("is-open");
      lightbox.setAttribute("aria-hidden", "false");
      closeBtn.focus();
      document.body.style.overflow = "hidden";
    }
    function close() {
      lightbox.classList.remove("is-open");
      lightbox.setAttribute("aria-hidden", "true");
      document.body.style.overflow = "";
    }

    document.querySelectorAll(".card[data-lightbox]").forEach(card => {
      card.addEventListener("click", () => open(card));
      card.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") { e.preventDefault(); open(card); }
      });
    });
    closeBtn.addEventListener("click", close);
    lightbox.addEventListener("click", (e) => { if (e.target === lightbox) close(); });
    document.addEventListener("keydown", (e) => { if (e.key === "Escape") close(); });
  }

  function initWhatsapp() {
    const num = KNOWLEDGE_BASE.whatsapp;
    const msg = encodeURIComponent("Hi Aaliyaan! I found your portfolio and I'd like to talk about a project.");
    document.querySelectorAll("[data-whatsapp-link]").forEach(a => {
      a.href = `https://wa.me/${num}?text=${msg}`;
    });
  }

  function initContactForm() {
    const form = document.getElementById("contactForm");
    if (!form) return;
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const status = document.getElementById("contactFormStatus");
      const name = form.querySelector("#cf-name").value.trim();
      if (status) {
        status.textContent = `Thanks${name ? ", " + name : ""} — this demo form isn't wired to a live inbox yet. Please reach out via WhatsApp, email, or Instagram below in the meantime.`;
        status.classList.add("is-visible");
      }
      form.reset();
    });
  }

  function initChatbot() {
    const toggleBtn = document.getElementById("chatToggle");
    const panel = document.getElementById("chatPanel");
    const closeBtn = document.getElementById("chatClose");
    const form = document.getElementById("chatForm");
    const input = document.getElementById("chatInput");
    const log = document.getElementById("chatLog");
    const suggestions = document.querySelectorAll(".chat-suggestion");
    if (!toggleBtn || !panel) return;

    let greeted = false;

    function addMessage(text, from) {
      const bubble = document.createElement("div");
      bubble.className = `chat-bubble chat-bubble--${from}`;
      bubble.textContent = text;
      log.appendChild(bubble);
      log.scrollTop = log.scrollHeight;
    }

    function addTyping() {
      const t = document.createElement("div");
      t.className = "chat-bubble chat-bubble--bot chat-bubble--typing";
      t.id = "chatTypingIndicator";
      t.innerHTML = "<span></span><span></span><span></span>";
      log.appendChild(t);
      log.scrollTop = log.scrollHeight;
    }
    function removeTyping() {
      const t = document.getElementById("chatTypingIndicator");
      if (t) t.remove();
    }

    async function sendMessage(text) {
      if (!text.trim()) return;
      addMessage(text, "user");
      addTyping();
      const lang = window.__currentLang || "en";
      const reply = await getBotReply(text, lang);
      removeTyping();
      addMessage(reply, "bot");
    }

    function openPanel() {
      panel.classList.add("is-open");
      panel.setAttribute("aria-hidden", "false");
      toggleBtn.setAttribute("aria-expanded", "true");
      if (!greeted) {
        greeted = true;
        const lang = window.__currentLang || "en";
        addMessage(TRANSLATIONS[lang].chatbot_greeting, "bot");
      }
      input.focus();
    }
    function closePanel() {
      panel.classList.remove("is-open");
      panel.setAttribute("aria-hidden", "true");
      toggleBtn.setAttribute("aria-expanded", "false");
    }

    toggleBtn.addEventListener("click", () => {
      panel.classList.contains("is-open") ? closePanel() : openPanel();
    });
    closeBtn.addEventListener("click", closePanel);

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const val = input.value;
      input.value = "";
      sendMessage(val);
    });

    suggestions.forEach(btn => {
      btn.addEventListener("click", () => sendMessage(btn.textContent));
    });
  }

  function initFooterYear() {
    const y = document.getElementById("year");
    if (y) y.textContent = new Date().getFullYear();
  }

  document.addEventListener("DOMContentLoaded", () => {
    initTheme();
    initLang();
    initWhatsapp();
    initLightbox();
    initContactForm();
    initChatbot();
    initCursor();
    initMagnetic();
    initFooterYear();
    playIntro();
    requestAnimationFrame(() => setTimeout(initScrollReveals, 50));
  });
})();
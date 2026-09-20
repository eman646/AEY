/* ============================================================
   Aya Ali Mousa — Portfolio scripts
   Three.js hero scene, bilingual system, UI interactions
   ============================================================ */
(function () {
  'use strict';

  document.documentElement.classList.add('js');

  const $ = (sel, ctx) => (ctx || document).querySelector(sel);
  const $$ = (sel, ctx) => Array.from((ctx || document).querySelectorAll(sel));
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)');

  /* ==========================================================
     TRANSLATIONS
     ========================================================== */
  const translations = {
    en: {
      docTitle: "Aya Ali Mousa | Operating Manager Portfolio",
      skipToContent: "Skip to content",
      brandName: "Aya Ali Mousa",
      ariaMenu: "Toggle navigation menu",
      ariaLang: "Switch language",

      navHome: "Home", navAbout: "About", navExperience: "Experience", navEducation: "Education",
      navSkills: "Skills", navTraining: "Training", navActivities: "Activities", navContact: "Contact",

      heroKicker: "Personal Portfolio",
      heroName: "AYA ALI MOUSA",
      heroRole: "Operating Manager",
      heroTagline: "Operations. Technology. Leadership.",
      heroDesc: "Experienced Operating Manager with a proven track record at Three Wire for ATM Services Company, with experience in daily ATM operations, technical team management, performance monitoring, data analysis, process improvement and high-quality service delivery.",
      btnExperience: "View Experience",
      btnSkills: "Explore Skills",
      btnDownload: "Download CV",
      btnContact: "Contact Me",
      scrollHint: "Scroll to Explore",

      aboutKicker: "Profile",
      aboutTitle: "About Me",
      aboutP1: "Experienced Operating Manager with a proven track record at Three Wire for ATM Services Company. Skilled in overseeing daily ATM operations, managing technical teams, and ensuring efficient functionality.",
      aboutP2: "Adept at monitoring performance, analyzing data to enhance operational efficiency, and providing detailed performance reports. Committed to utilizing expertise in process improvement, team leadership, and high-quality service delivery to drive operational excellence and support organizational objectives.",
      aboutHighlight1: "Operations",
      aboutHighlight2: "Leadership",
      aboutHighlight3: "Technology",
      aboutHighlight4: "Data",
      aboutHighlight5: "Engineering",
      aboutLocation: "Luxor, Egypt",

      expKicker: "Career",
      expTitle: "Professional Experience",
      expResponsibilities: "Responsibilities:",
      job1Title: "Operating Manager",
      job1Org: "Three Wire for ATM Services Company",
      job1Period: "2018 – 2025",
      job1R1: "Organizing and overseeing all daily operations related to ATM services.",
      job1R2: "Ensuring smooth and effective operation of ATMs.",
      job1R3: "Troubleshooting technical issues as they arise.",
      job1R4: "Assigning tasks to the team.",
      job1R5: "Ensuring timely and high-quality execution.",
      job2Title: "Environmental Educator",
      job2Org: "Nor El-Islam Association",
      job2Period: "2018",
      job2R1: "Organizing and conducting workshops and lectures to raise awareness about environmental issues and the importance of conservation.",
      job2R2: "Preparing educational materials and tools to enhance environmental awareness.",
      job3Title: "Census Associate",
      job3Org: "Public Mobilization and Statistics Authority",
      job3Period: "2017",
      job3R1: "Assisting in the collection of demographic, economic, and social data from the public.",
      job3R2: "Ensuring accurate and comprehensive data entry during census operations.",
      job3R3: "Organizing and maintaining data records.",
      job3R4: "Ensuring data integrity and confidentiality.",
      job4Title: "Freelance Graphic Designer",
      job4Period: "2016",
      job4R1: "Designing logos.",
      job4R2: "Designing brochures.",
      job4R3: "Designing advertisements.",
      job4R4: "Designing print materials.",
      job4R5: "Using design software such as Adobe Photoshop, Illustrator and InDesign.",
      job5Title: "Computer Coach",
      job5Org: "Fed Initiative by the Institution of Bridging the Digital Divide",
      job5Period: "2015",
      job5R1: "Conducting computer literacy workshops for various groups including beginners and advanced users.",
      job5R2: "Teaching basic to intermediate computer skills.",
      job5R3: "Teaching operating systems, software applications and internet usage.",
      job5R4: "Designing and developing training materials and course content tailored to participants' needs.",

      eduKicker: "Academics",
      eduTitle: "Education",
      eduDegree: "Bachelor's Degree in Communication and Electronics Engineering",
      eduUniversity: "Assiut University",
      eduFaculty: "Faculty of Engineering",
      eduProjectLabel: "Graduation Project:",
      eduProject: "Integrated Network and Jamming System",
      eduGradeLabel: "Grade:",
      eduGrade: "Excellent",

      skillsKicker: "Expertise",
      skillsTitle: "Skills",
      skillsDomainsLabel: "Areas of Strength",
      domain1: "Leadership & Management",
      domain2: "Communication",
      domain3: "Project Management",
      domain4: "Planning",
      domain5: "Data Analysis",
      domain6: "Decision Making",
      domain7: "Teamwork",
      domain8: "Time Management",
      skill1: "Effective communication with teams, clients and suppliers.",
      skill2: "Project management.",
      skill3: "Planning.",
      skill4: "Time organization.",
      skill5: "Strong decision-making.",
      skill6: "Data analysis.",
      skill7: "Teamwork.",
      skill8: "Ability to achieve project goals.",
      skill9: "Ability to work under pressure.",
      skill10: "Ability to meet deadlines.",

      softKicker: "Toolbox",
      softTitle: "Software & Technical Skills",

      trainKicker: "Development",
      trainTitle: "Training & Courses",
      trainSelfStudy: "Self Study",
      trainMore: "View All Training",
      trainLess: "Show Less",
      t2018_1: "First Aid Course",
      t2018_2: "Training on Addiction Prevention and Treatment",
      t2017_1: "Photoshop Training",
      t2017_2: "Training on Gender Issues",
      t2017_3: "Training at Orman Hospital",
      t2017_4: "Training at Y-PEER Egypt",
      t2017_5: "Job Search Training at the Research Club",
      t2017_6: "Census Training with the Central Agency for Public Mobilization and Statistics",
      t2016_1: "Life Skills Training",
      t2016_2: "Local Development Training – Our Future in Our Hands",
      t2016_3: "Home Maintenance Training",
      t2016_4: "Office 2016 Training",
      t2015_1: "ITI Grant in Web Design",
      t2014_1: "Multimedia and Graphic Design Grant",
      t2014_2: "Training at Egytrust Academy – Customer Service",
      t2014_3: "\u201CBe Yourself\u201D Course",
      t2012_1: "ICDL – International Computer Driving License",
      t2012_2: "Training at Telecom Egypt",
      t2011_1: "Training at Telecom Egypt",
      t2010_1: "Training at the Power Station in Luxor",
      tSelf_1: "GSM",
      tSelf_2: "CCNA Courses",

      actKicker: "Community",
      actTitle: "Activities",
      actVolTitle: "Volunteering",
      actVol1: "Resala Association",
      actVol2: "Sabab El-Kher Association",
      actVol3: "Ihsan Generation in Luxor",
      actMemTitle: "Membership",
      actMem1: "Research Club at the International Labour Organization",
      actMem2: "Engineering Syndicate, Luxor Branch",
      actPartTitle: "Participation",
      actPart1: "Zewail City Friends Conference",
      actPart2: "Saedy Geeks Activities",
      actPart3: "Seminars and events organized by civil associations and youth initiatives",
      actPart4: "Educational Workshops",

      langKicker: "Communication",
      langTitle: "Languages",
      langArName: "Arabic",
      langArLevel: "Native",
      langEnName: "English",
      langEnLevel: "Good",

      contactKicker: "Get in Touch",
      contactTitle: "Let's Connect",
      contactSubtitle: "Happy to talk about operations, technology and collaboration.",
      contactName: "Aya Ali Mousa",
      contactRole: "Operating Manager",
      contactLocation: "Luxor, Egypt",
      contactPhoneLabel: "Phone:",
      contactEmailLabel: "Email:",
      formName: "Name",
      formEmail: "Email",
      formSubject: "Subject",
      formMessage: "Message",
      formSend: "Send Message",
      formNote: "This form is an interface preview only — no message is sent. Please reach out directly via the email or phone details above.",
      errName: "Please enter your name.",
      errEmail: "Please enter a valid email address.",
      errSubject: "Please enter a subject.",
      errMessage: "Please enter a message of at least 10 characters.",

      footerName: "Aya Ali Mousa",
      footerRole: "Operating Manager",
      footerTagline: "Designed as a professional personal portfolio.",
      footerLinks: "Quick Links",
      footerRightsName: "Aya Ali Mousa"
    },

    ar: {
      docTitle: "آية علي موسى | بورتفوليو مدير العمليات",
      skipToContent: "تجاوز إلى المحتوى",
      brandName: "آية علي موسى",
      ariaMenu: "فتح/إغلاق قائمة التنقل",
      ariaLang: "تغيير اللغة",

      navHome: "الرئيسية", navAbout: "نبذة عني", navExperience: "الخبرات", navEducation: "التعليم",
      navSkills: "المهارات", navTraining: "الدورات", navActivities: "الأنشطة", navContact: "تواصل معي",

      heroKicker: "ملف تعريفي شخصي",
      heroName: "آية علي موسى",
      heroRole: "مدير عمليات",
      heroTagline: "الإدارة • التقنية • القيادة",
      heroDesc: "مديرة عمليات ذات خبرة في إدارة ومتابعة العمليات اليومية لخدمات أجهزة الصراف الآلي، وإدارة الفرق الفنية، ومتابعة الأداء، وتحليل البيانات، وتحسين كفاءة العمليات وضمان تقديم الخدمات بجودة عالية.",
      btnExperience: "عرض الخبرات",
      btnSkills: "استعراض المهارات",
      btnDownload: "تحميل السيرة الذاتية",
      btnContact: "تواصل معي",
      scrollHint: "مرر لاكتشاف المزيد",

      aboutKicker: "الملف الشخصي",
      aboutTitle: "نبذة عني",
      aboutP1: "مديرة عمليات ذات خبرة وسجل مهني في شركة Three Wire لخدمات أجهزة الصراف الآلي، ولديها خبرة في الإشراف على العمليات اليومية لأجهزة الصراف الآلي وإدارة الفرق الفنية وضمان كفاءة التشغيل.",
      aboutP2: "تمتلك خبرة في متابعة الأداء وتحليل البيانات بهدف تحسين الكفاءة التشغيلية وإعداد تقارير الأداء، بالإضافة إلى مهارات تحسين العمليات وقيادة الفرق وتقديم خدمات عالية الجودة لدعم أهداف المؤسسة.",
      aboutHighlight1: "العمليات",
      aboutHighlight2: "القيادة",
      aboutHighlight3: "التقنية",
      aboutHighlight4: "البيانات",
      aboutHighlight5: "الهندسة",
      aboutLocation: "الأقصر، مصر",

      expKicker: "المسيرة المهنية",
      expTitle: "الخبرات المهنية",
      expResponsibilities: "المهام:",
      job1Title: "مدير عمليات",
      job1Org: "Three Wire for ATM Services Company",
      job1Period: "2018 – 2025",
      job1R1: "تنظيم والإشراف على جميع العمليات اليومية المتعلقة بخدمات أجهزة الصراف الآلي.",
      job1R2: "ضمان التشغيل السلس والفعال لأجهزة ATM.",
      job1R3: "التعامل مع المشكلات الفنية عند حدوثها.",
      job1R4: "توزيع المهام على فريق العمل.",
      job1R5: "متابعة تنفيذ المهام في الوقت المحدد وبجودة عالية.",
      job2Title: "مثقف بيئي",
      job2Org: "Nor El-Islam Association",
      job2Period: "2018",
      job2R1: "تنظيم وتنفيذ ورش العمل والمحاضرات لزيادة الوعي بالقضايا البيئية وأهمية الحفاظ على البيئة.",
      job2R2: "إعداد المواد والأدوات التعليمية لتعزيز الوعي البيئي.",
      job3Title: "باحث تعداد",
      job3Org: "Public Mobilization and Statistics Authority",
      job3Period: "2017",
      job3R1: "المساعدة في جمع البيانات الديموغرافية والاقتصادية والاجتماعية من الجمهور.",
      job3R2: "التأكد من دقة واكتمال إدخال البيانات أثناء عمليات التعداد.",
      job3R3: "تنظيم وحفظ سجلات البيانات.",
      job3R4: "الحفاظ على سلامة البيانات وسريتها.",
      job4Title: "مصمم جرافيك مستقل",
      job4Period: "2016",
      job4R1: "تصميم الشعارات.",
      job4R2: "تصميم البروشورات.",
      job4R3: "تصميم الإعلانات.",
      job4R4: "تصميم المطبوعات.",
      job4R5: "استخدام برامج التصميم مثل Adobe Photoshop وIllustrator وInDesign.",
      job5Title: "مدرب حاسب آلي",
      job5Org: "Fed Initiative by the Institution of Bridging the Digital Divide",
      job5Period: "2015",
      job5R1: "تقديم ورش تدريبية لمحو الأمية الرقمية لمستويات مختلفة.",
      job5R2: "تدريب المبتدئين والمتقدمين على مهارات الحاسب الآلي.",
      job5R3: "التدريب على أنظمة التشغيل والبرامج واستخدام الإنترنت.",
      job5R4: "إعداد وتصميم المواد والمحتوى التدريبي وفق احتياجات المشاركين.",

      eduKicker: "التعليم",
      eduTitle: "التعليم",
      eduDegree: "بكالوريوس هندسة الاتصالات والإلكترونيات",
      eduUniversity: "جامعة أسيوط",
      eduFaculty: "كلية الهندسة",
      eduProjectLabel: "مشروع التخرج:",
      eduProject: "Integrated Network and Jamming System",
      eduGradeLabel: "التقدير:",
      eduGrade: "ممتاز",

      skillsKicker: "المهارات",
      skillsTitle: "المهارات",
      skillsDomainsLabel: "مجالات القوة",
      domain1: "القيادة والإدارة",
      domain2: "التواصل",
      domain3: "إدارة المشاريع",
      domain4: "التخطيط",
      domain5: "تحليل البيانات",
      domain6: "اتخاذ القرار",
      domain7: "العمل الجماعي",
      domain8: "إدارة الوقت",
      skill1: "التواصل الفعال مع فرق العمل والعملاء والموردين.",
      skill2: "إدارة المشاريع.",
      skill3: "التخطيط.",
      skill4: "تنظيم الوقت.",
      skill5: "اتخاذ القرارات.",
      skill6: "تحليل البيانات.",
      skill7: "العمل الجماعي.",
      skill8: "تحقيق أهداف المشاريع.",
      skill9: "العمل تحت الضغط.",
      skill10: "الالتزام بالمواعيد النهائية.",

      softKicker: "الأدوات",
      softTitle: "البرامج والمهارات التقنية",

      trainKicker: "التطوير المهني",
      trainTitle: "الدورات والتدريب",
      trainSelfStudy: "دراسة ذاتية",
      trainMore: "عرض جميع الدورات",
      trainLess: "عرض أقل",
      t2018_1: "دورة الإسعافات الأولية",
      t2018_2: "تدريب على الوقاية من الإدمان وعلاجه",
      t2017_1: "تدريب على برنامج Photoshop",
      t2017_2: "تدريب على قضايا النوع الاجتماعي",
      t2017_3: "تدريب بمستشفى الأورمان",
      t2017_4: "تدريب في Y-PEER مصر",
      t2017_5: "تدريب البحث عن عمل بنادي البحوث",
      t2017_6: "تدريب التعداد مع الجهاز المركزي للتعبئة العامة والإحصاء",
      t2016_1: "تدريب مهارات الحياة",
      t2016_2: "تدريب التنمية المحلية – مستقبلنا بأيدينا",
      t2016_3: "تدريب صيانة المنازل",
      t2016_4: "تدريب على Office 2016",
      t2015_1: "منحة ITI في تصميم الويب",
      t2014_1: "منحة مالتي ميديا وجرافيك ديزاين",
      t2014_2: "تدريب بأكاديمية Egytrust – خدمة العملاء",
      t2014_3: "دورة «كن نفسك»",
      t2012_1: "ICDL – رخصة قيادة الحاسب الآلي الدولية",
      t2012_2: "تدريب في Telecom Egypt",
      t2011_1: "تدريب في Telecom Egypt",
      t2010_1: "تدريب بمحطة الكهرباء في الأقصر",
      tSelf_1: "مقررات GSM",
      tSelf_2: "مقررات CCNA",

      actKicker: "المجتمع",
      actTitle: "الأنشطة",
      actVolTitle: "التطوع",
      actVol1: "جمعية رسالة",
      actVol2: "جمعية سبب الخير",
      actVol3: "جيل إحسان في الأقصر",
      actMemTitle: "العضويات",
      actMem1: "نادي البحوث بمنظمة العمل الدولية",
      actMem2: "نقابة المهندسين – فرع الأقصر",
      actPartTitle: "المشاركات",
      actPart1: "مؤتمر أصدقاء مدينة زويل",
      actPart2: "أنشطة Saedy Geeks",
      actPart3: "ندوات وفعاليات تُنظَّم من قبل الجمعيات الأهلية والمبادرات الشبابية",
      actPart4: "ورش عمل تعليمية",

      langKicker: "التواصل",
      langTitle: "اللغات",
      langArName: "العربية",
      langArLevel: "اللغة الأم",
      langEnName: "الإنجليزية",
      langEnLevel: "جيد",

      contactKicker: "للتواصل",
      contactTitle: "تواصل معي",
      contactSubtitle: "يسعدني الحديث حول العمليات والتقنية وفرص التعاون.",
      contactName: "آية علي موسى",
      contactRole: "مدير عمليات",
      contactLocation: "الأقصر، مصر",
      contactPhoneLabel: "الهاتف:",
      contactEmailLabel: "البريد الإلكتروني:",
      formName: "الاسم",
      formEmail: "البريد الإلكتروني",
      formSubject: "الموضوع",
      formMessage: "الرسالة",
      formSend: "إرسال الرسالة",
      formNote: "هذه الواجهة للمعاينة فقط — لا يتم إرسال أي رسالة. يُرجى التواصل مباشرة عبر البريد الإلكتروني أو الهاتف أعلاه.",
      errName: "يرجى إدخال الاسم.",
      errEmail: "يرجى إدخال بريد إلكتروني صحيح.",
      errSubject: "يرجى إدخال الموضوع.",
      errMessage: "يرجى إدخال رسالة مكونة من 10 أحرف على الأقل.",

      footerName: "آية علي موسى",
      footerRole: "مدير عمليات",
      footerTagline: "موقع تعريفي مهني شخصي.",
      footerLinks: "روابط سريعة",
      footerRightsName: "آية علي موسى"
    }
  };

  const LANG_KEY = 'ayaPortfolioLang';
  let currentLang = 'en';
  let heroAPI = null;
  const formNoteEl = () => $('#formNote');

  /* ==========================================================
     LANGUAGE SYSTEM
     ========================================================== */
  function setLanguage(lang) {
    currentLang = lang;
    const dict = translations[lang];

    document.documentElement.lang = lang;
    document.documentElement.dir = (lang === 'ar') ? 'rtl' : 'ltr';
    document.title = dict.docTitle;

    $$('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (dict[key] != null) el.textContent = dict[key];
    });

    $$('[data-i18n-aria]').forEach((el) => {
      const key = el.getAttribute('data-i18n-aria');
      if (dict[key] != null) el.setAttribute('aria-label', dict[key]);
    });

    $$('.lang-btn').forEach((btn) => {
      const active = btn.getAttribute('data-lang') === lang;
      btn.classList.toggle('active', active);
      btn.setAttribute('aria-pressed', String(active));
    });

    const note = formNoteEl();
    if (note && !note.hidden) note.textContent = dict.formNote;

    try { localStorage.setItem(LANG_KEY, lang); } catch (e) { /* private mode */ }

    if (heroAPI && heroAPI.setDirection) heroAPI.setDirection(document.documentElement.dir);
  }

  function initLanguage() {
    let saved = 'en';
    try {
      const stored = localStorage.getItem(LANG_KEY);
      if (stored === 'ar' || stored === 'en') saved = stored;
    } catch (e) { /* ignore */ }
    setLanguage(saved);

    $$('.lang-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        const lang = btn.getAttribute('data-lang');
        if (lang !== currentLang) setLanguage(lang);
      });
    });
  }

  /* ==========================================================
     MOBILE MENU
     ========================================================== */
  function initMobileMenu() {
    const burger = $('#navBurger');
    const panel = $('#navLinks');
    if (!burger || !panel) return;

    function closeMenu() {
      panel.classList.remove('open');
      burger.classList.remove('open');
      burger.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }

    burger.addEventListener('click', () => {
      const open = panel.classList.toggle('open');
      burger.classList.toggle('open', open);
      burger.setAttribute('aria-expanded', String(open));
      document.body.style.overflow = open ? 'hidden' : '';
    });

    $$('#navLinks a').forEach((link) => link.addEventListener('click', closeMenu));

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && panel.classList.contains('open')) {
        closeMenu();
        burger.focus();
      }
    });

    window.addEventListener('resize', () => {
      if (window.innerWidth > 992) closeMenu();
    });
  }

  /* ==========================================================
     SCROLL REVEAL
     ========================================================== */
  function initScrollReveal() {
    const els = $$('.reveal');
    els.forEach((el) => {
      const d = parseInt(el.getAttribute('data-delay') || '0', 10);
      if (d > 0) el.style.transitionDelay = (d * 90) + 'ms';
    });

    if (!('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('in-view'));
      return;
    }

    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target;
          el.classList.add('in-view');
          el.addEventListener('transitionend', function clearDelay() {
            el.style.transitionDelay = '';
            el.removeEventListener('transitionend', clearDelay);
          });
          io.unobserve(el);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    els.forEach((el) => io.observe(el));
  }

  /* ==========================================================
     SCROLL PROGRESS + HEADER + ACTIVE NAV (one listener)
     ========================================================== */
  function initScrollEffects() {
    const bar = $('#scrollProgress');
    const header = $('#siteHeader');
    const links = $$('.nav-link');
    const sections = links
      .map((a) => document.querySelector(a.getAttribute('href')))
      .filter(Boolean);

    let ticking = false;

    function update() {
      ticking = false;
      const y = window.scrollY || window.pageYOffset;
      const max = document.documentElement.scrollHeight - window.innerHeight;

      if (bar) bar.style.width = (max > 0 ? (y / max) * 100 : 0) + '%';
      if (header) header.classList.toggle('scrolled', y > 30);

      const pos = y + 150;
      let idx = 0;
      for (let i = 0; i < sections.length; i++) {
        if (sections[i].offsetTop <= pos) idx = i;
      }
      if (window.innerHeight + y >= document.documentElement.scrollHeight - 2) {
        idx = sections.length - 1;
      }
      links.forEach((l, i) => l.classList.toggle('active', i === idx));
    }

    function onScroll() {
      if (!ticking) { ticking = true; requestAnimationFrame(update); }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    update();
  }

  /* ==========================================================
     TRAINING EXPAND / COLLAPSE
     ========================================================== */
  function initTrainingToggle() {
    const btn = $('#trainingToggle');
    if (!btn) return;
    const extras = $$('.training-extra');
    extras.forEach((e) => e.setAttribute('aria-hidden', 'true'));

    btn.addEventListener('click', () => {
      const expanded = btn.getAttribute('aria-expanded') === 'true';

      if (!expanded) {
        extras.forEach((e) => {
          e.classList.add('open');
          e.style.maxHeight = e.scrollHeight + 'px';
          e.setAttribute('aria-hidden', 'false');
          e.addEventListener('transitionend', function handler(ev) {
            if (ev.propertyName === 'max-height') {
              e.style.maxHeight = 'none';
              e.removeEventListener('transitionend', handler);
            }
          });
        });
        btn.setAttribute('aria-expanded', 'true');
      } else {
        extras.forEach((e) => {
          e.style.maxHeight = e.scrollHeight + 'px';
          requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              e.classList.remove('open');
              e.style.maxHeight = '0px';
            });
          });
          e.setAttribute('aria-hidden', 'true');
        });
        btn.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* ==========================================================
     3D CARD TILT (subtle, desktop only)
     ========================================================== */
  function initCardTilt() {
    if (prefersReduced.matches) return;
    if (window.matchMedia('(hover: none)').matches) return;

    $$('.tilt').forEach((card) => {
      card.addEventListener('mousemove', (e) => {
        if (window.innerWidth < 992) return;
        const r = card.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width - 0.5;
        const py = (e.clientY - r.top) / r.height - 0.5;
        card.classList.add('is-tilting');
        card.style.transform =
          'perspective(900px) rotateX(' + (-py * 3.5).toFixed(2) + 'deg)' +
          ' rotateY(' + (px * 3.5).toFixed(2) + 'deg) translateY(-2px)';
      });
      card.addEventListener('mouseleave', () => {
        card.classList.remove('is-tilting');
        card.style.transform = '';
      });
    });
  }

  /* ==========================================================
     CONTACT FORM VALIDATION (interface demo — no backend)
     ========================================================== */
  function initContactForm() {
    const form = $('#contactForm');
    if (!form) return;

    const validators = {
      name: (v) => (v.trim().length >= 2 ? null : 'errName'),
      email: (v) => (/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim()) ? null : 'errEmail'),
      subject: (v) => (v.trim().length >= 3 ? null : 'errSubject'),
      message: (v) => (v.trim().length >= 10 ? null : 'errMessage')
    };

    function setError(fieldName, hasError) {
      const input = form.elements[fieldName];
      if (!input) return;
      const wrapper = input.closest('.form-field');
      if (wrapper) wrapper.classList.toggle('error', hasError);
      input.setAttribute('aria-invalid', String(hasError));
    }

    Object.keys(validators).forEach((fieldName) => {
      const input = form.elements[fieldName];
      if (!input) return;
      input.addEventListener('input', () => setError(fieldName, false));
    });

    form.addEventListener('submit', (e) => {
      e.preventDefault();

      let firstInvalid = null;
      Object.keys(validators).forEach((fieldName) => {
        const input = form.elements[fieldName];
        const errKey = validators[fieldName](input.value || '');
        const invalid = !!errKey;
        setError(fieldName, invalid);
        if (invalid && !firstInvalid) firstInvalid = input;
      });

      if (firstInvalid) {
        firstInvalid.focus();
        const note = formNoteEl();
        if (note) { note.hidden = true; note.textContent = ''; }
        return;
      }

      const note = formNoteEl();
      if (note) {
        note.textContent = translations[currentLang].formNote;
        note.hidden = false;
      }
      form.reset();
    });
  }

  /* ==========================================================
     FOOTER YEAR
     ========================================================== */
  function initFooterYear() {
    const el = $('#year');
    if (el) el.textContent = String(new Date().getFullYear());
  }

  /* ==========================================================
     THREE.JS — shared texture helpers
     ========================================================== */
  function makeDotTexture(THREE) {
    const c = document.createElement('canvas');
    c.width = c.height = 64;
    const x = c.getContext('2d');
    const g = x.createRadialGradient(32, 32, 0, 32, 32, 30);
    g.addColorStop(0, 'rgba(255,255,255,1)');
    g.addColorStop(0.4, 'rgba(255,255,255,0.9)');
    g.addColorStop(1, 'rgba(255,255,255,0)');
    x.fillStyle = g;
    x.beginPath();
    x.arc(32, 32, 30, 0, Math.PI * 2);
    x.fill();
    return new THREE.CanvasTexture(c);
  }

  function makeGlowTexture(THREE) {
    const c = document.createElement('canvas');
    c.width = c.height = 256;
    const x = c.getContext('2d');
    const g = x.createRadialGradient(128, 128, 0, 128, 128, 128);
    g.addColorStop(0, 'rgba(130,185,255,0.85)');
    g.addColorStop(0.35, 'rgba(59,130,246,0.32)');
    g.addColorStop(1, 'rgba(59,130,246,0)');
    x.fillStyle = g;
    x.fillRect(0, 0, 256, 256);
    return new THREE.CanvasTexture(c);
  }

  function makeTextSprite(THREE, text) {
    const pad = 44, fs = 54;
    const cv = document.createElement('canvas');
    let ctx = cv.getContext('2d');
    ctx.font = '600 ' + fs + 'px Manrope, Arial, sans-serif';
    const tw = Math.ceil(ctx.measureText(text).width);
    cv.width = tw + pad * 2;
    cv.height = fs + pad * 2;
    ctx = cv.getContext('2d');
    ctx.font = '600 ' + fs + 'px Manrope, Arial, sans-serif';
    ctx.fillStyle = 'rgba(168,203,255,0.95)';
    ctx.shadowColor = 'rgba(59,130,246,0.85)';
    ctx.shadowBlur = 16;
    ctx.textBaseline = 'middle';
    ctx.fillText(text, pad, cv.height / 2);

    const tex = new THREE.CanvasTexture(cv);
    tex.minFilter = THREE.LinearFilter;
    const sprite = new THREE.Sprite(new THREE.SpriteMaterial({
      map: tex, transparent: true, opacity: 0.26, depthWrite: false
    }));
    const s = 0.02;
    sprite.scale.set(cv.width * s, cv.height * s, 1);
    return sprite;
  }

  /* ==========================================================
     THREE.JS — HERO NETWORK SCENE
     ========================================================== */
  function initThreeScene() {
    const wrap = $('#heroCanvasWrap');
    if (!wrap) return;
    if (typeof THREE === 'undefined') { wrap.classList.add('no-webgl'); return; }

    let renderer;
    try {
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
    } catch (err) {
      wrap.classList.add('no-webgl');
      return;
    }

    const reduced = prefersReduced.matches;
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setClearColor(0x000000, 0);
    wrap.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(55, 1, 0.1, 140);
    camera.position.set(0, 0, 22);

    const root = new THREE.Group();   // translates with direction/offset
    scene.add(root);

    const dotTex = makeDotTexture(THREE);
    const glowTex = makeGlowTexture(THREE);

    // Device tiering
    const width0 = wrap.clientWidth || window.innerWidth;
    const tier = width0 < 640 ? 0 : (width0 < 1200 ? 1 : 2);
    const NODE_COUNT = [70, 110, 150][tier];
    const DUST_COUNT = [150, 320, 540][tier];
    const R = 6.4;

    // --- Network sphere nodes ---
    const nodeGeo = new THREE.BufferGeometry();
    {
      const pos = new Float32Array(NODE_COUNT * 3);
      const col = new Float32Array(NODE_COUNT * 3);
      const cBlue = new THREE.Color(0x5da2ff);
      const cCyan = new THREE.Color(0x35dcff);
      const golden = Math.PI * (3 - Math.sqrt(5));
      for (let i = 0; i < NODE_COUNT; i++) {
        const y = 1 - (i / (NODE_COUNT - 1)) * 2;
        const rad = Math.sqrt(Math.max(0, 1 - y * y));
        const th = golden * i;
        pos[i * 3] = Math.cos(th) * rad * R;
        pos[i * 3 + 1] = y * R;
        pos[i * 3 + 2] = Math.sin(th) * rad * R;
        const c = (i % 3 === 0) ? cCyan : cBlue;
        col[i * 3] = c.r; col[i * 3 + 1] = c.g; col[i * 3 + 2] = c.b;
      }
      nodeGeo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
      nodeGeo.setAttribute('color', new THREE.BufferAttribute(col, 3));
    }
    root.add(new THREE.Points(nodeGeo, new THREE.PointsMaterial({
      size: 0.5, map: dotTex, vertexColors: true, transparent: true,
      opacity: 0.95, depthWrite: false, blending: THREE.AdditiveBlending
    })));

    // --- Connections between nearby nodes ---
    {
      const arr = nodeGeo.attributes.position.array;
      const thresh = R * Math.sqrt((4 * Math.PI) / NODE_COUNT) * 1.32;
      const linePos = [];
      for (let i = 0; i < NODE_COUNT; i++) {
        for (let j = i + 1; j < NODE_COUNT; j++) {
          const dx = arr[i * 3] - arr[j * 3];
          const dy = arr[i * 3 + 1] - arr[j * 3 + 1];
          const dz = arr[i * 3 + 2] - arr[j * 3 + 2];
          if (dx * dx + dy * dy + dz * dz < thresh * thresh) {
            linePos.push(arr[i * 3], arr[i * 3 + 1], arr[i * 3 + 2],
                         arr[j * 3], arr[j * 3 + 1], arr[j * 3 + 2]);
          }
        }
      }
      const lg = new THREE.BufferGeometry();
      lg.setAttribute('position', new THREE.Float32BufferAttribute(linePos, 3));
      root.add(new THREE.LineSegments(lg, new THREE.LineBasicMaterial({
        color: 0x3b82f6, transparent: true, opacity: 0.16
      })));
    }

    // --- Inner wireframe core + glow ---
    const ico = new THREE.LineSegments(
      new THREE.WireframeGeometry(new THREE.IcosahedronGeometry(2.7, 1)),
      new THREE.LineBasicMaterial({ color: 0x22d3ee, transparent: true, opacity: 0.15 })
    );
    root.add(ico);

    const glow = new THREE.Sprite(new THREE.SpriteMaterial({
      map: glowTex, color: 0x2e6fe0, transparent: true, opacity: 0.5,
      depthWrite: false, blending: THREE.AdditiveBlending
    }));
    glow.scale.set(13, 13, 1);
    root.add(glow);

    // --- Ambient dust particles ---
    const dust = (() => {
      const pos = new Float32Array(DUST_COUNT * 3);
      for (let i = 0; i < DUST_COUNT; i++) {
        const u = Math.random() * 2 - 1;
        const t2 = Math.random() * Math.PI * 2;
        const s = Math.sqrt(1 - u * u);
        const rr = 16 + Math.random() * 18;
        pos[i * 3] = s * Math.cos(t2) * rr;
        pos[i * 3 + 1] = u * rr;
        pos[i * 3 + 2] = s * Math.sin(t2) * rr;
      }
      const g = new THREE.BufferGeometry();
      g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
      const p = new THREE.Points(g, new THREE.PointsMaterial({
        size: 0.16, map: dotTex, color: 0x8fb4ff, transparent: true,
        opacity: 0.4, depthWrite: false, blending: THREE.AdditiveBlending
      }));
      scene.add(p);
      return p;
    })();

    // --- Floating keyword sprites ---
    const wordSprites = [];
    if (tier >= 1) {
      const defs = [
        { t: 'OPERATIONS',  a: 0.3, r: 11.5, h: 4.2 },
        { t: 'NETWORK',     a: 1.7, r: 12.5, h: -3.4 },
        { t: 'DATA',        a: 2.9, r: 10.8, h: 5.4 },
        { t: 'ATM',         a: 4.1, r: 12.8, h: -4.6 },
        { t: 'ENGINEERING', a: 5.3, r: 11.6, h: 0.8 }
      ];
      defs.forEach((d, i) => {
        const sp = makeTextSprite(THREE, d.t);
        sp.position.set(Math.cos(d.a) * d.r, d.h, Math.sin(d.a) * d.r);
        sp.userData = { baseY: d.h, phase: i * 1.3, speed: 0.5 + (i % 3) * 0.2 };
        root.add(sp);
        wordSprites.push(sp);
      });
    }

    // --- State & layout ---
    let dirSign = 1;
    let targetX = 0;

    function layout() {
      const w = wrap.clientWidth || window.innerWidth;
      const h = wrap.clientHeight || window.innerHeight;
      renderer.setSize(w, h);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();

      const wide = w >= 992;
      const off = wide ? (w > 1250 ? 7.6 : 6.2) : 0;
      targetX = off * dirSign;
      root.scale.setScalar(w < 768 ? 0.8 : (w < 992 ? 0.9 : 1));
      wrap.classList.toggle('is-dim', w < 768);

      if (reduced) {
        root.rotation.y = 0.45;
        root.position.x = targetX;
        camera.lookAt(0, 0, 0);
        renderer.render(scene, camera);
      }
    }

    // Mouse parallax (fine pointers only)
    const mouse = { x: 0, y: 0 };
    if (!reduced && window.matchMedia('(hover: hover)').matches) {
      window.addEventListener('mousemove', (e) => {
        mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
        mouse.y = (e.clientY / window.innerHeight) * 2 - 1;
      }, { passive: true });
    }

    // Pause rendering when hero is offscreen
    let inView = true;
    if ('IntersectionObserver' in window) {
      new IntersectionObserver((entries) => { inView = entries[0].isIntersecting; }, { threshold: 0 })
        .observe(wrap);
    }

    // Animation loop
    const clock = new THREE.Clock();
    function animate() {
      requestAnimationFrame(animate);
      if (!inView) return;
      const t = clock.getElapsedTime();

      root.rotation.y = t * 0.07 + (window.scrollY || 0) * 0.0006;
      ico.rotation.x = t * 0.05;
      ico.rotation.y = -t * 0.07;
      dust.rotation.y = -t * 0.015;
      glow.scale.setScalar(13 + Math.sin(t * 1.3) * 0.7);

      for (let i = 0; i < wordSprites.length; i++) {
        const sp = wordSprites[i];
        sp.position.y = sp.userData.baseY + Math.sin(t * sp.userData.speed + sp.userData.phase) * 0.45;
      }

      root.position.x += (targetX - root.position.x) * 0.05;
      camera.position.x += (mouse.x * 1.4 - camera.position.x) * 0.045;
      camera.position.y += (-mouse.y * 0.9 - camera.position.y) * 0.045;
      camera.lookAt(0, 0, 0);
      renderer.render(scene, camera);
    }

    let resizeTimer = null;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(layout, 150);
    });

    layout();
    if (!reduced) animate();

    heroAPI = {
      setDirection(dir) {
        dirSign = (dir === 'rtl') ? -1 : 1;
        layout();
      }
    };
  }

  /* ==========================================================
     THREE.JS — ABOUT DECORATIVE SCENE
     ========================================================== */
  function initAboutScene() {
    const host = $('.about-visual');
    const canvas = $('#aboutCanvas');
    if (!host || !canvas || typeof THREE === 'undefined') return;

    let renderer;
    try {
      renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true, alpha: true });
    } catch (err) { return; }

    const reduced = prefersReduced.matches;
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
    renderer.setClearColor(0x000000, 0);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 60);
    camera.position.z = 12.5;

    const g = new THREE.Group();
    scene.add(g);

    const geo = new THREE.IcosahedronGeometry(4, 1);
    g.add(new THREE.LineSegments(
      new THREE.WireframeGeometry(geo),
      new THREE.LineBasicMaterial({ color: 0x3b82f6, transparent: true, opacity: 0.3 })
    ));
    g.add(new THREE.Points(geo, new THREE.PointsMaterial({
      color: 0x22d3ee, size: 0.42, map: makeDotTexture(THREE),
      transparent: true, alphaTest: 0.05, depthWrite: false,
      blending: THREE.AdditiveBlending
    })));
    g.add(new THREE.LineSegments(
      new THREE.WireframeGeometry(new THREE.IcosahedronGeometry(2.1, 0)),
      new THREE.LineBasicMaterial({ color: 0x8b5cf6, transparent: true, opacity: 0.25 })
    ));

    let inView = true;
    if ('IntersectionObserver' in window) {
      new IntersectionObserver((entries) => { inView = entries[0].isIntersecting; }, { threshold: 0 })
        .observe(host);
    }

    function renderStatic() {
      g.rotation.set(0.4, 0.7, 0);
      renderer.render(scene, camera);
    }

    function resize() {
      const w = host.clientWidth || 300;
      const h = host.clientHeight || 300;
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      if (reduced) renderStatic();
    }

    const clock = new THREE.Clock();
    function animate() {
      requestAnimationFrame(animate);
      if (!inView) return;
      const t = clock.getElapsedTime();
      g.rotation.y = t * 0.22;
      g.rotation.x = Math.sin(t * 0.2) * 0.3;
      renderer.render(scene, camera);
    }

    let resizeTimer = null;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(resize, 150);
    });

    resize();
    if (!reduced) animate();
  }

  /* ==========================================================
     INIT
     ========================================================== */
  function init() {
    initLanguage();
    initMobileMenu();
    initScrollReveal();
    initScrollEffects();
    initTrainingToggle();
    initCardTilt();
    initContactForm();
    initFooterYear();
    initThreeScene();
    initAboutScene();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
/* ============================================================
   KORTOV GROUP — WEBSITE JAVASCRIPT
   Navigation, scroll animations, smooth interactions,
   bilingual EN / HE with RTL support
   ============================================================ */

'use strict';

// ─── TRANSLATIONS ─────────────────────────────────────────────────
const translations = {
  en: {
    page_title:      'Kortov Group — Recycling & Environmental Industries',

    // Nav
    nav_about:       'About',
    nav_history:     'History',
    nav_companies:   'Companies',
    nav_services:    'Services',
    nav_facilities:  'Facilities',
    nav_strengths:   'Strategy',
    nav_summary:     'Summary',

    // Hero
    hero_badge:          'Est. 1989',
    hero_title_line1:    "Israel's Leader in",
    hero_title_line2:    'Recycling & Environmental',
    hero_title_line3:    'Industries',
    hero_subtitle:       'Four decades of pioneering sustainable waste management, recycling innovation, and environmental project development.',
    hero_cta_story:      'Discover Our Story',
    hero_cta_services:   'Our Services',

    // About
    about_tag:       'Who We Are',
    about_title:     'The Kortov Family Legacy',
    about_desc:      "The Kortov family has been the driving force behind Israel's recycling industry for over 35 years — pioneering new collection methods, forging global partnerships, and developing landmark environmental projects.",
    stat_years:      'Years of Experience',
    stat_employees:  'Employees at Peak',
    stat_municipalities: 'Municipal Governments',
    stat_vehicles:   'Fleet Vehicles',

    // History
    history_tag:     'Our Journey',
    history_title:   'A History of Growth & Innovation',
    history_desc:    "From a small recycling operation to Israel's most recognised environmental industry group.",
    tl1_title: 'Alon Metal — The Beginning',
    tl1_text:  'Founded in the early 1970s, the company became a leading manufacturer of waste containers, vehicles and a wide range of products — marking a new chapter in Israeli environmental management.',
    tl2_title: 'Y.R.A.V — Environmental Industries',
    tl2_text:  'Y.R.A.V becomes the largest waste collection company in Israel, listed on the Israeli Stock Exchange with 12 transfer stations, 1,000 workers and 300 trucks.',
    tl3_title: 'Acquired by Veolia',
    tl3_text:  "Y.R.A.V is sold to Veolia (VIOLA), reflecting the company's scale and strategic value in the Israeli waste management market.",
    tl4_title: 'KMM — Recycling Plants',
    tl4_text:  'Collection and preparation for recycling of many raw materials — including paper, cardboard, plastic and more. Operates 4 processing plants across the country.',
    tl5_title: 'Acquisition of Tal-El',
    tl5_text:  'KMM acquires "Tal-El," expanding its processing capacity and adding key infrastructure in the Nitzanei Oz industrial park.',
    tl6_title: 'Tire Recycling',
    tl6_text:  'The T.M.Z. plant is established in Beersheba, processing and shredding end-of-life tires for a wide range of secondary uses.',
    tl7_title: 'Establishment of Tamir Plant',
    tl7_text:  'An agreement is signed to establish a new packaging sorting plant with Tamir Recycling Corporation. KMM is sold to Generation Capital, serving 550 workers, 150 trucks, and 90 municipalities.',
    tl8_title: 'Cycle — Circular Economy',
    tl8_text:  "Collection operations begin for Cycle, Israel's largest deposit bottle collection company — collecting from thousands of points nationwide, placing return machines in supermarkets and parks across the country, and enabling implementation of the deposit law.",

    // Companies
    companies_tag:   'Companies We Founded',
    companies_title: 'The Kortov Family Portfolio',
    companies_desc:  'A family of companies spanning the full recycling and waste management value chain.',
    kmm_alt:   'KMM Recycling Industries',
    kmm_name:  'KMM Recycling Industries',
    kmm_desc:  "Israel's premier recycling company — serving 90+ municipalities and millions of citizens with a fleet of 150 trucks and 550 dedicated employees.",
    kmm_f1:    '4 sorting plants',
    kmm_f2:    '550 workers',
    kmm_f3:    '150 trucks',
    kmm_f4:    '90+ municipalities',
    cycle_name: 'Cycle Circular Economy',
    cycle_desc: "Israel's largest deposit bottle collection company — building two state-of-the-art counting and sorting plants.",
    cycle_f1:   'Partnered with Coca-Cola',
    cycle_f2:   'Thousands of collection points',
    cycle_f3:   '100 workers',
    cycle_f4:   '50 trucks',
    talel_name: 'Tal-El',
    talel_desc: 'A key processing facility in the Nitzanei Oz industrial park with 15,000 m² dedicated to paper, cardboard and plastic recycling.',
    talel_f1:   '15,000 m² facility',
    talel_f2:   'Paper & cardboard processing',
    talel_f3:   'Plastic recycling',
    talel_f4:   'Nitzanei Oz industrial park',
    tamir_name: 'Partnership with Tamir Corporation',
    tamir_desc: 'A joint venture with Tamir Recycling Corporation establishing a new packaging sorting plant, expanding dry waste processing capacity across Israel.',
    tamir_f1:   'Packaging waste management',
    tamir_f2:   'National sorting capacity',
    tamir_f3:   'Packaging plant partnership',
    tamir_f4:   'Joint venture model',

    // Services
    services_tag:   'Fields We Have Built Over the Years',
    services_title: 'The Israeli Leader in Recycling,\nWaste Treatment & Environmental Projects',
    services_desc:  'A comprehensive portfolio of services spanning every category of dry waste management.',
    svc1_title: 'Paper Recycling & Information Security',
    svc1_text:  'Secure document destruction and full paper recycling services for businesses and institutions.',
    svc2_title: 'Cardboard Recycling',
    svc2_text:  'High-volume cardboard collection and recycling for retail, logistics and industrial clients.',
    svc3_title: 'Newspaper Recycling',
    svc3_text:  'Municipal and commercial newspaper collection, baling and processing for the secondary materials market.',
    svc4_title: 'Plastic Recycling',
    svc4_text:  'Multi-stream plastic sorting and processing, turning waste plastic into valuable raw materials.',
    svc5_title: 'Tire Recycling',
    svc5_text:  'End-of-life tire processing and recycling through our T.M.Z. facility in Beersheba — 10,000 m² of capacity.',
    svc6_title: 'Waste Treatment Transfer Stations',
    svc6_text:  'A nationwide network of transfer stations providing efficient sorting and onward dispatch of all dry waste streams.',
    svc7_title: 'General Paper Collection',
    svc7_text:  'Municipal-scale collection covering towns, cities and regions across Israel — millions of citizens served.',
    svc8_title: 'Packaging Waste Management',
    svc8_text:  'Full packaging waste compliance and management on behalf of Tamir Recycling Corporation.',
    svc9_title: 'Textile Collection',
    svc9_text:  'Nationwide textile collection programs serving residential communities and corporate clients.',

    // Facilities
    fac_tag:   'Plants We Have Built',
    fac_title: "Among Israel's Most Advanced Facilities",
    fac_desc:  'Strategic plants across Israel ensure nationwide coverage and processing excellence.',
    fac1_alt:      'Rishon LeZion facility',
    fac1_badge:    'Main HQ',
    fac1_location: '📍 Rishon LeZion Industrial Park',
    fac1_name:     'Main Plant & Company HQ',
    fac1_desc:     'Our flagship facility housing the company headquarters and primary processing operations for paper, cardboard and plastic recycling.',
    fac2_alt:      'Nitzanei Oz facility',
    fac2_location: '📍 Nitzanei Oz Industrial Park',
    fac2_name:     'Tal-El Processing Plant',
    fac2_desc:     'The Tal-El facility provides dedicated capacity for paper, cardboard and plastic processing, complementing the main plant operations.',
    fac3_alt:      'Beersheba facility',
    fac3_location: '📍 Emek Sara Industrial Park, Beersheba',
    fac3_name:     'T.M.Z. Tire Recycling Ltd.',
    fac3_desc:     'Specialised tire recycling operations serving the southern region, processing end-of-life tires into valuable secondary materials.',
    spec_label:    'processing area',

    // Strengths
    str_tag:   'Why Choose Us',
    str_title: 'Competencies & Strengths',
    str_desc:  'Decades of experience translated into unmatched capabilities across every dimension of recycling and waste management.',
    str1_title: 'End-to-End Solutions',
    str1_text:  'Comprehensive handling of a wide variety of raw materials from collection through processing to market-ready output.',
    str2_title: 'Countrywide Deployment',
    str2_text:  'A national operational footprint enabling services to be delivered to millions of citizens across Israel.',
    str3_title: 'Broad Product Portfolio',
    str3_text:  'All types of dry waste covered — paper, cardboard, plastic, tires, textiles, packaging and more.',
    str4_title: 'Decades of Experience',
    str4_text:  "Personal, hands-on expertise accumulated over 35+ years at the forefront of Israel's recycling industry.",
    str5_title: 'Diverse Customer Base',
    str5_text:  'Serving municipalities, corporations, institutions and individuals across multiple sectors and industries.',
    str6_title: 'Global Connections',
    str6_text:  'Personal connections with numerous plants worldwide for the sale of raw materials to end users across the globe.',

    // Summary
    sum_tag:           'The Kortov Family',
    sum_title:         "Driving Israel's Recycling Industry",
    sum_p1:            'Pioneering R&D of new collection and recycling methods across all material streams',
    sum_p2:            'Continuous follow-up of global developments and changes in the recycling industry',
    sum_p3:            'Personal connections with numerous plants worldwide for the sale of raw materials to end users',
    sum_p4:            'Founders of dozens of innovative environmental projects over three decades',
    sum_p5:            'Employed thousands of people and built enduring relationships with municipalities across Israel',
    sum_img_alt:       'Kortov Group',
    sum_caption_strong:'35+ Years',
    sum_caption_sub:   "Leading Israel's Environmental Future",

    // Contact
    nav_contact:          'Contact',
    contact_tag:          'Get In Touch',
    contact_title:        'Contact Us',
    contact_desc:         "Reach out to our team — we'd love to hear from you.",
    contact_addr_label:   'Address',
    contact_company:      'Kortov Holdings LTD',
    contact_street:       "Altalena 1 St'",
    contact_city:         'Rishon LeZion, Israel',
    contact_postal_label: 'Postal Code:',
    contact_email_label:  'Email',
    contact_phone_label:  'Phone',
    contact_fax_label:    'Fax',

    // Footer
    footer_tagline: "Recycling Israel's Future Since 1989",
    footer_copy:    '© 2025 Kortov Holdings LTD. All rights reserved.',
  },

  he: {
    page_title:      'קורטוב אחזקות בע"מ',

    // Nav
    nav_about:       'אודות',
    nav_history:     'היסטוריה',
    nav_companies:   'חברות',
    nav_services:    'שירותים',
    nav_facilities:  'מתקנים',
    nav_strengths:   'אסטרטגיה',
    nav_summary:     'סיכום',

    // Hero
    hero_badge:        'הוקמה ב 1989',
    hero_title_line1:  'המוביל הישראלי ב',
    hero_title_line2:  'מיחזור ותעשיות סביבה',
    hero_title_line3:  '',
    hero_subtitle:     'ארבעה עשורים של ניהול פסולת בר-קיימא, חדשנות במיחזור ופיתוח פרויקטים סביבתיים מרכזיים.',
    hero_cta_story:    'גלו את הסיפור שלנו',
    hero_cta_services: 'השירותים שלנו',

    // About
    about_tag:       'מי אנחנו',
    about_title:     'מורשת משפחת קורטוב',
    about_desc:      'משפחת קורטוב הייתה הכוח המניע מאחורי תעשיית המיחזור בישראל במשך למעלה מ-35 שנה — פורצת דרך בשיטות איסוף חדשות, יוצרת שותפויות גלובליות ומפתחת פרויקטים סביבתיים מרכזיים.',
    stat_years:      'שנות ניסיון',
    stat_employees:  'עובדים בשיאה',
    stat_municipalities: 'רשויות מקומיות',
    stat_vehicles:   'כלי רכב בצי',

    // History
    history_tag:     'המסע שלנו',
    history_title:   'היסטוריה של צמיחה וחדשנות',
    history_desc:    'מפעילות מיחזור קטנה לקבוצת התעשיות הסביבתיות המובילה והמוכרת ביותר בישראל.',
    tl1_title: 'אלון מתכת — ההתחלה',
    tl1_text:  'הוקמה בתחילת שנות ה 70 והפכה ליצרן מיכלי אשפה, מרכבים ומוצרים רבים. פרק חדש בניהול הסביבתי הישראלי מתחיל.',
    tl2_title: 'י.ר.א.ב — תעשיות סביבה',
    tl2_text:  'י.ר.א.ו הופכת לחברת איסוף הפסולת הגדולה בישראל, רשומה בבורסה לניירות ערך עם 12 תחנות מעבר, 1,000 עובדים -300 משאיות.',
    tl3_title: 'נרכשה על ידי ויוליה',
    tl3_text:  'י.ר.א.ב נמכרת לוויוליה (VIOLA), המשקפת את היקף החברה וערכה האסטרטגי בשוק ניהול הפסולת הישראלי.',
    tl4_title: 'KMM — מפעלי מחזור',
    tl4_text:  'איוסוף והכנה למחזור של חומרי גלם רבים כגון: נייר, קרטון, פלסטיק וכו. מפעילה 4 מפעלי עיבוד ברחבי הארץ.',
    tl5_title: 'רכישת טל-אל',
    tl5_text:  'KMM רוכשת את "טל-אל", מרחיבה את יכולת העיבוד שלה ומוסיפה תשתית מפתח בפארק התעשייה ניצני עוז.',
    tl6_title: 'מיחזור צמיגים',
    tl6_text:  'הקמת מפעל ת.מ.צ בבאר שבע, גריסת צמיגים לשימושים שונים.',
    tl7_title: 'הקמת מפעל תמיר',
    tl7_text:  'נחתם הסכם להקמת מפעל מיון אריזות חדש עם תאגיד תמיר למיחזור. KMM נמכרת לג\'נרשן קפיטל, תוך שירות 550 עובדים, 150 משאיות ו-90 רשויות מקומיות.',
    tl8_title: 'סייקל — כלכלה מעגלית',
    tl8_text:  'תחילת פעלות האיסוף של סייקל, חברת האיסוף הגדולה בישראל לבקבוקי פיקדון, אוספת מאלפי נקודות איסוף ברחבי הארץ, מציבה מתקנים לקבלת החזר הפיקדון בסופרים ופארקים ברחבי הארץ, מאפשרת לקיים את חוק הפיקדון.',

    // Companies
    companies_tag:   'החברות שהקמנו',
    companies_title: 'פרופטפוליו של משפחת קורטוב',
    companies_desc:  'משפחת חברות המשתרעת על כל שרשרת הערך של מיחזור וניהול פסולת.',
    kmm_alt:   'תעשיות מיחזור KMM',
    kmm_name:  'תעשיות מיחזור KMM',
    kmm_desc:  'חברת המיחזור המובילה בישראל — משרתת 90+ רשויות מקומיות ומיליוני אזרחים עם צי של 150 משאיות -550 עובדים מסורים.',
    kmm_f1:    '4 מפעלי מיון',
    kmm_f2:    '550 עובדים',
    kmm_f3:    '150 משאיות',
    kmm_f4:    '90+ רשויות מקומיות',
    cycle_name: 'סייקל — כלכלה מעגלית',
    cycle_desc: 'חברת האיסוף הגדולה בישראל לבקבוקי פיקדון , בונה שני מפעלי ספירה ומיון מתקדמים.',
    cycle_f1:   'שיתוף פעולה עם קוקא-קולה',
    cycle_f2:   'אלפי נקודות איסוף',
    cycle_f3:   '100 עובדים',
    cycle_f4:   '50 משאיות',
    talel_name: 'טל-אל',
    talel_desc: 'מתקן עיבוד מרכזי בפארק התעשייה ניצני עוז עם 15,000 מ"ר המוקדשים למיחזור נייר, קרטון ופלסטיק.',
    talel_f1:   'מתקן 15,000 מ"ר',
    talel_f2:   'עיבוד נייר וקרטון',
    talel_f3:   'מיחזור פלסטיק',
    talel_f4:   'פארק תעשייה ניצני עוז',
    tamir_name: 'שיתוף פעולה  עם תאגי תמיר',
    tamir_desc: 'מיזם משותף עם תאגיד תמיר למיחזור להקמת מפעל מיון אריזות חדש, ומרחיב את יכולת עיבוד פסולת היבשה ברחבי ישראל.',
    tamir_f1:   'ניהול פסולת אריזות',
    tamir_f2:   'יכולת מיון לאומית',
    tamir_f3:   'שותפות מפעל אריזות',
    tamir_f4:   'מודל מיזם משותף',

    // Services
    services_tag:   'תחומים שהקמנו בפעילויות לאורך השנים',
    services_title: 'המוביל הישראלי במיחזור,\nטיפול בפסולת ופרויקטים סביבתיים',
    services_desc:  'תיק שירותים מקיף המשתרע על כל קטגוריה של ניהול פסולת יבשה.',
    svc1_title: 'מיחזור נייר ואבטחת מידע',
    svc1_text:  'שירותי השמדת מסמכים מאובטחת ומיחזור נייר מלא לעסקים ומוסדות.',
    svc2_title: 'מיחזור קרטון',
    svc2_text:  'איסוף ומיחזור קרטון בנפח גבוה ללקוחות קמעונאיים, לוגיסטיים ותעשייתיים.',
    svc3_title: 'מיחזור עיתונים',
    svc3_text:  'איסוף עיתונים עירוני ומסחרי, כבישה ועיבוד לשוק חומרי הגלם המשניים.',
    svc4_title: 'מיחזור פלסטיק',
    svc4_text:  'מיון ועיבוד פלסטיק רב-זרמי, הופך פסולת פלסטיק לחומרי גלם בעלי ערך.',
    svc5_title: 'מיחזור צמיגים',
    svc5_text:  'עיבוד ומיחזור צמיגים בסוף חיים דרך מתקן T.M.Z. שלנו בבאר שבע — קיבולת של 10,000 מ"ר.',
    svc6_title: 'תחנות מעבר לטיפול בפסולת',
    svc6_text:  'רשת ארצית של תחנות מעבר המספקת מיון יעיל ושיגור של כל זרמי פסולת היבשה.',
    svc7_title: 'איסוף נייר כללי',
    svc7_text:  'איסוף בקנה מידה עירוני המכסה ערים ואזורים בכל רחבי ישראל — משרת מיליוני אזרחים.',
    svc8_title: 'ניהול פסולת אריזות',
    svc8_text:  'ציות מלא וניהול פסולת אריזות בשם תאגיד תמיר למיחזור.',
    svc9_title: 'איסוף טקסטיל',
    svc9_text:  'תוכניות איסוף טקסטיל ברחבי הארץ המשרתות קהילות מגורים ולקוחות ארגוניים.',

    // Facilities
    fac_tag:   'המפעלים שהקמנו',
    fac_title: 'מתקנים מהמתקדמים בישראל',
    fac_desc:  'מפעלים אסטרטגיים ברחבי ישראל מבטיחים כיסוי ארצי ומצוינות בעיבוד.',
    fac1_alt:      'מתקן ראשון לציון',
    fac1_badge:    'מטה ראשי',
    fac1_location: '📍 פארק התעשייה ראשון לציון',
    fac1_name:     'המפעל הראשי ומטה החברה',
    fac1_desc:     'המתקן המוביל שלנו המשכן את מטה החברה ופעילות העיבוד הראשית למיחזור נייר, קרטון ופלסטיק.',
    fac2_alt:      'מתקן ניצני עוז',
    fac2_location: '📍 פארק התעשייה ניצני עוז',
    fac2_name:     'מפעל העיבוד טל-אל',
    fac2_desc:     'מתקן טל-אל מספק קיבולת ייעודית לעיבוד נייר, קרטון ופלסטיק, המשלים את פעילות המפעל הראשי.',
    fac3_alt:      'מתקן באר שבע',
    fac3_location: '📍 פארק התעשייה עמק שרה, באר שבע',
    fac3_name:     'ת.מ.צ. מיחזור צמיגים בע"מ',
    fac3_desc:     'פעילות מיחזור צמיגים מתמחה המשרתת את האזור הדרומי, מעבדת צמיגים בסוף חיים לחומרים משניים בעלי ערך.',
    spec_label:    'שטח עיבוד',

    // Strengths
    str_tag:   'למה לבחור בנו',
    str_title: 'כישורים ויתרונות',
    str_desc:  'עשורים של ניסיון שהפכו ליכולות שאין להן תחרות בכל ממד של מיחזור וניהול פסולת.',
    str1_title: 'פתרונות מקצה לקצה',
    str1_text:  'טיפול מקיף במגוון רחב של חומרי גלם מאיסוף דרך עיבוד ועד פלט מוכן לשוק.',
    str2_title: 'פריסה ארצית',
    str2_text:  'טביעת רגל תפעולית לאומית המאפשרת מתן שירותים למיליוני אזרחים ברחבי ישראל.',
    str3_title: 'תיק מוצרים רחב',
    str3_text:  'כל סוגי פסולת היבשה מכוסים — נייר, קרטון, פלסטיק, צמיגים, טקסטיל, אריזות ועוד.',
    str4_title: 'עשורים של ניסיון',
    str4_text:  'מומחיות אישית ומעשית שנצברה במשך 35+ שנה בחזית תעשיית המיחזור בישראל.',
    str5_title: 'בסיס לקוחות מגוון',
    str5_text:  'שירות לרשויות מקומיות, תאגידים, מוסדות ויחידים במגזרים ותעשיות שונות.',
    str6_title: 'קשרים גלובליים',
    str6_text:  'קשרים אישיים עם מפעלים רבים ברחבי העולם למכירת חומרי גלם למשתמשי קצה ברחבי הגלובוס.',

    // Summary
    sum_tag:            'משפחת קורטוב',
    sum_title:          'מניעה את תעשיית המיחזור בישראל',
    sum_p1:             'חלוצות במחקר ופיתוח של שיטות איסוף ומיחזור חדשות בכל זרמי החומרים',
    sum_p2:             'מעקב מתמיד אחר התפתחויות ושינויים גלובליים בתעשיית המיחזור',
    sum_p3:             'קשרים אישיים עם מפעלים רבים ברחבי העולם למכירת חומרי גלם למשתמשי קצה',
    sum_p4:             'מייסדים של עשרות פרויקטים סביבתיים חדשניים לאורך שלושה עשורים',
    sum_p5:             'העסיקו אלפי אנשים ובנו קשרים מתמשכים עם רשויות מקומיות ברחבי ישראל',
    sum_img_alt:        '  קורטוב אחזקות בע"מ',
    sum_caption_strong: '35+ שנה',
    sum_caption_sub:    'מובילים את העתיד הסביבתי של ישראל',

    // Contact
    nav_contact:          'צור קשר',
    contact_tag:          'דברו איתנו',
    contact_title:        'צור קשר',
    contact_desc:         'פנו אלינו — נשמח לשמוע מכם.',
    contact_addr_label:   'כתובת',
    contact_company:      'קורטוב אחזקות בע"מ',
    contact_street:       "רחוב אלטלנה 1",
    contact_city:         'ראשון לציון, ישראל',
    contact_postal_label: 'מיקוד:',
    contact_email_label:  'דוא"ל',
    contact_phone_label:  'טלפון',
    contact_fax_label:    'פקס',

    // Footer
    footer_tagline: 'ממחזרים את עתיד ישראל מאז 1989',
    footer_copy:    '© 2025 קורטוב אחזקות בע"מ. .',
  }
};

// ─── LANGUAGE STATE ───────────────────────────────────────────────
let currentLang = localStorage.getItem('kortov_lang') || 'en';

function applyLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('kortov_lang', lang);

  const t    = translations[lang];
  const html = document.documentElement;
  const isHe = lang === 'he';

  // Set html dir/lang
  html.setAttribute('lang', lang);
  html.setAttribute('dir',  isHe ? 'rtl' : 'ltr');

  // Update page title
  document.title = t['page_title'];

  // Update all [data-i18n] text nodes
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key  = el.getAttribute('data-i18n');
    const text = t[key];
    if (text === undefined) return;
    // Preserve innerHTML structure for elements that contain child spans
    // (e.g. stat-number has a stat-plus child — don't overwrite those)
    if (el.children.length === 0) {
      el.textContent = text;
    } else if (!el.querySelector('.stat-plus')) {
      // Only update elements whose children we own (not stat cards)
      el.textContent = text;
    }
  });

  // Services title has a \n — render as <br>
  const serviceTitle = document.querySelector('[data-i18n="services_title"]');
  if (serviceTitle) {
    serviceTitle.innerHTML = t['services_title'].replace('\n', '<br />');
  }

  // Update all [data-i18n-alt] attributes
  document.querySelectorAll('[data-i18n-alt]').forEach(el => {
    const key = el.getAttribute('data-i18n-alt');
    if (t[key]) el.setAttribute('alt', t[key]);
  });

  // Update lang toggle button active state
  document.getElementById('langEn').classList.toggle('active', lang === 'en');
  document.getElementById('langHe').classList.toggle('active', lang === 'he');

  // Re-run active nav detection
  updateActiveLink();
}

// ─── LANG TOGGLE BUTTON ───────────────────────────────────────────
document.getElementById('langToggle').addEventListener('click', () => {
  applyLanguage(currentLang === 'en' ? 'he' : 'en');
});

// ─── NAVBAR ──────────────────────────────────────────────────────
const navbar    = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('navLinks');

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 60);
  updateActiveLink();
}, { passive: true });

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  navLinks.classList.toggle('open');
  document.body.style.overflow = navLinks.classList.contains('open') ? 'hidden' : '';
});

navLinks.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    navLinks.classList.remove('open');
    document.body.style.overflow = '';
  });
});

document.addEventListener('click', (e) => {
  if (!navbar.contains(e.target)) {
    hamburger.classList.remove('open');
    navLinks.classList.remove('open');
    document.body.style.overflow = '';
  }
});

// ─── ACTIVE NAV LINK ─────────────────────────────────────────────
const sections = document.querySelectorAll('section[id]');
const navItems = document.querySelectorAll('.nav-link');

function updateActiveLink() {
  const scrollPos = window.scrollY + 100;
  sections.forEach(section => {
    const top    = section.offsetTop;
    const bottom = top + section.offsetHeight;
    const id     = section.getAttribute('id');
    const link   = document.querySelector(`.nav-link[href="#${id}"]`);
    if (link) {
      link.classList.toggle('active', scrollPos >= top && scrollPos < bottom);
    }
  });
}

// ─── SCROLL ANIMATIONS ───────────────────────────────────────────
const animatedEls = document.querySelectorAll('.animate-on-scroll');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

animatedEls.forEach(el => observer.observe(el));

// ─── STAT COUNTER ANIMATION ──────────────────────────────────────
const statNumbers = document.querySelectorAll('.stat-number');

const statObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const el      = entry.target;
      const numStr  = el.textContent.replace(/[^\d.]/g, '');
      const target  = parseFloat(numStr);
      const hasPlus = el.querySelector('.stat-plus');
      const plusHTML = hasPlus ? `<span class="stat-plus">${hasPlus.textContent}</span>` : '';
      const duration = 1400;
      const start    = performance.now();

      function tick(now) {
        const elapsed  = now - start;
        const progress = Math.min(elapsed / duration, 1);
        const ease     = 1 - Math.pow(1 - progress, 3);
        const current  = Math.round(ease * target);
        const display  = target >= 1000 ? current.toLocaleString() : current.toString();
        el.innerHTML   = display + plusHTML;
        if (progress < 1) requestAnimationFrame(tick);
      }

      requestAnimationFrame(tick);
      statObserver.unobserve(el);
    }
  });
}, { threshold: 0.5 });

statNumbers.forEach(el => statObserver.observe(el));

// ─── SMOOTH SCROLL ────────────────────────────────────────────────
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const offset = navbar.offsetHeight + 8;
      const top    = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});

// ─── HERO PARALLAX ───────────────────────────────────────────────
const heroBgImg = document.querySelector('.hero-bg-img');
if (heroBgImg) {
  window.addEventListener('scroll', () => {
    if (window.scrollY < window.innerHeight) {
      heroBgImg.style.transform = `scale(1.08) translateY(${window.scrollY * 0.2}px)`;
    }
  }, { passive: true });
}

// ─── INIT ─────────────────────────────────────────────────────────
applyLanguage(currentLang);

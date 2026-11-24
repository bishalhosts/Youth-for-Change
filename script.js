/* ===== CONFIG: replace these values (see README.md) =====
   Values starting with GOOGLE_ or YOUR_ are treated as "not set up yet":
   their buttons show a notice instead of opening a broken link. */
const CONFIG = {
  GOOGLE_REPORT_FORM_URL: "GOOGLE_REPORT_FORM_URL",
  GOOGLE_REPORT_QR_IMAGE: "assets/qr-code.png",
  GOOGLE_HELP_FORM_URL: "GOOGLE_HELP_FORM_URL",
  GOOGLE_VOLUNTEER_FORM_URL: "GOOGLE_VOLUNTEER_FORM_URL",
  GOOGLE_SURVEY_FORM_URL: "GOOGLE_SURVEY_FORM_URL",
  ACTIVITY_SPORTS_URL: "YOUR_SPORTS_REGISTRATION_URL",
  ACTIVITY_CODING_URL: "YOUR_CODING_REGISTRATION_URL",
  ACTIVITY_CULTURE_URL: "YOUR_CULTURE_REGISTRATION_URL",
  CONTACT_EMAIL: "YOUR_EMAIL",
  LOCATION: "YOUR_LOCATION",
  FACEBOOK_URL: "YOUR_FACEBOOK_URL",
  INSTAGRAM_URL: "YOUR_INSTAGRAM_URL"
};

/* ===== Nepali translations (English text lives in index.html) ===== */
const NE = {
  nav_home: "गृहपृष्ठ", nav_awareness: "जनचेतना", nav_report: "चिन्ता जनाउनुहोस्", nav_help: "सहयोग लिनुहोस्",
  nav_activities: "गतिविधि", nav_about: "हाम्रो बारे", nav_contact: "सम्पर्क",
  h_title: "राम्रो भविष्य रोज्नुहोस्।",
  h_sub: "सँगै मिलेर हामी स्वस्थ, सुरक्षित र लागूपदार्थमुक्त समुदाय बनाउन सक्छौँ।",
  get_involved: "सहभागी बनौँ", learn_more: "थप जान्नुहोस्",
  q1: "जोखिमबारे जान्नुहोस्", q2: "आफ्नो चिन्ता जनाउनुहोस्", q3: "गोपनीय रूपमा सहयोग लिनुहोस्", q4: "हाम्रा गतिविधिमा सहभागी हुनुहोस्",
  msg: "हरेक युवा स्वस्थ, सुरक्षित र आशासहित हुर्कन पाउनुपर्छ।",
  aw_h: "लागूपदार्थबारे जनचेतना",
  a1t: "लत भनेको के हो?", a1: "लत एक स्वास्थ्य अवस्था हो, जहाँ हानि भए पनि प्रयोग रोक्न कठिन हुन्छ। यो उपचार गर्न सकिन्छ।",
  a2t: "दुरुपयोगका सामान्य रूप", a2: "सुर्तीजन्य पदार्थ, मदिरा, गाँजा, दुरुपयोग गरिएका औषधि र सुँघ्ने पदार्थ।",
  a3t: "स्वास्थ्यमा जोखिम", a3: "लागूपदार्थले मस्तिष्क, मुटु र मनोदशामा असर गर्न सक्छ र चिन्ता वा निराशा बढाउन सक्छ।",
  a4t: "शिक्षा र परिवारमा असर", a4: "विद्यालय छुट्ने, नतिजा खस्कने र पारिवारिक विश्वास कमजोर हुने जोखिम हुन्छ।",
  a5t: "साथीको दबाब", a5: "“होइन” भन्न मिल्छ। असल साथीले तपाईंको निर्णयको सम्मान गर्छन्।",
  a6t: "सहयोग चाहिएका संकेत", a6: "अचानक मनोदशा परिवर्तन, एक्लिने बानी, नतिजा खस्कने वा रुचि हराउने। कारण धेरै हुन सक्छन्, त्यसैले दोष नलगाई सहानुभूति देखाउनुहोस्।",
  a7t: "रोकथाम कसरी गर्ने?", a7: "स्वस्थ दिनचर्या बनाउनुहोस्, सक्रिय रहनुहोस्, खुलेर कुरा गर्नुहोस् र चाँडै सहयोग माग्नुहोस्।",
  a8t: "अभिभावक र शिक्षकको भूमिका", a8: "निर्णय नगरी सुन्नुहोस्, संलग्न रहनुहोस् र पेशागत सहयोगसँग जोड्नुहोस्।",
  r_h: "चिन्ता जनाउनुहोस्",
  r_p: "सुरक्षित बाह्य गुगल फारम मार्फत लागूपदार्थ दुरुपयोगबारे चिन्ता पठाउन सक्नुहुन्छ। अत्यावश्यक नभए कसैको नाम नलेख्नुहोस्।",
  r_safe: "आफैँ छानबिन वा कसैको सामना नगर्नुहोस्। रिपोर्ट अधिकृत र जिम्मेवार व्यक्तिले हेरी उपयुक्त निकायमा पठाउनेछन्।",
  r_emerg: "यो आपतकालीन सेवा होइन। तत्काल खतरा भए नेपाल प्रहरी 100 मा सम्पर्क गर्नुहोस्।",
  r_conf: "रिपोर्ट सार्वजनिक गरिँदैन। हामी पूर्ण गोपनीयताको प्रतिज्ञा गर्न सक्दैनौँ, त्यसैले आवश्यक जानकारी मात्र दिनुहोस्।",
  r_submit: "रिपोर्ट पठाउनुहोस्", r_scan: "QR कोड स्क्यान गर्नुहोस्",
  g_h: "सहयोग लिनुहोस्",
  g_p: "मूल्यांकन र उपचार योग्य स्वास्थ्य पेशाकर्मीले गर्नुपर्छ। विश्वसनीय सेवाबारे चिकित्सक, विद्यालयका परामर्शदाता वा स्थानीय स्वास्थ्य कार्यालयसँग सोध्नुहोस्।",
  g1t: "परामर्श सहयोग", g1: "तनाव, दबाब वा भावनाबारे भरपर्दो व्यक्ति वा परामर्शदातासँग कुरा गर्नुहोस्।",
  g2t: "मानसिक स्वास्थ्य सेवा", g2: "चिन्ता, निराशा वा निद्रा समस्या भए योग्य मानसिक स्वास्थ्य पेशाकर्मीलाई भेट्नुहोस्।",
  g3t: "उपचार तथा पुनर्स्थापना", g3: "लतको मूल्यांकन र उपचार योग्य पेशाकर्मीले गर्छन्। यहाँ कुनै केन्द्रको सिफारिस गरिएको छैन।",
  g4t: "परिवारलाई सहयोग", g4: "परिवारलाई पनि सहयोग चाहिन्छ। दोष नलगाई सुन्नुहोस् र सँगै सहयोग खोज्नुहोस्।",
  g5t: "आपतकालीन सम्पर्क", g_police: "नेपाल प्रहरी: 100", g_child: "बाल हेल्पलाइन: 1098 (स्थानीय उपलब्धता जाँच गर्नुहोस्)",
  g_who: "सहयोग अनुरोधहरू [जिम्मेवार व्यक्ति वा टोली थप्नुहोस्] ले हेर्नेछन्।", g_btn: "सहयोग अनुरोध गर्नुहोस्",
  ac_h: "युवा गतिविधि",
  ac1t: "खेलकुद प्रतियोगिता", ac1: "टोली भावना, स्वास्थ्य र सकारात्मक मित्रता बढाउनुहोस्।",
  ac2t: "आईटी तथा कोडिङ कार्यशाला", ac2: "उपयोगी डिजिटल सीप सिक्नुहोस् र नयाँ कुरा सिर्जना गर्नुहोस्।",
  ac3t: "सांस्कृतिक तथा सिर्जनात्मक कार्यक्रम", ac3: "सङ्गीत, कला, नाटक र लेखनमार्फत आफूलाई अभिव्यक्त गर्नुहोस्।",
  ac4t: "सामुदायिक स्वयंसेवा", ac4: "समुदायको सेवा गर्दै नेतृत्व सीप विकास गर्नुहोस्।",
  join: "सहभागी हुनुहोस्",
  ab_h: "हाम्रो बारे",
  ab_p: "Youth for Change समुदायका युवालाई सचेत बनाउन, लागूपदार्थको लत रोक्न र सहयोग गर्न सुरु गरिएको सामुदायिक पहल हो। सँगै मिलेर हामी स्वस्थ, सशक्त र लागूपदार्थमुक्त भविष्य बनाउन सक्छौँ।",
  ab1t: "ध्येय", ab1: "युवालाई जानकारी, सहयोग र सकारात्मक अवसरसँग जोड्ने।",
  ab2t: "दृष्टिकोण", ab2: "युवा स्वस्थ, सुरक्षित र आशावादी भएको समुदाय।",
  ab3t: "उद्देश्य", ab3: "जनचेतना बढाउने, गोपनीय सहयोगको पहुँच सहज बनाउने र सकारात्मक गतिविधि सञ्चालन गर्ने।",
  ab4t: "सामुदायिक सहभागिता", ab4: "अभिभावक, शिक्षक, विद्यालय र युवा सबैको सहभागिता स्वागतयोग्य छ।",
  ab_note: "यो स्वतन्त्र सामुदायिक पहल हो। कुनै संस्थासँग आधिकारिक दर्ता वा साझेदारीको दाबी गरिएको छैन।",
  survey: "सामुदायिक सर्वेक्षण भर्नुहोस्",
  c_h: "सम्पर्क", c_email: "इमेल", c_loc: "ठेगाना", c_vol: "स्वयंसेवक जिज्ञासा", c_part: "साझेदारी जिज्ञासा",
  f_text: "स्वस्थ युवा, सशक्त समुदाय।", f_emerg: "आपतकालीन: नेपाल प्रहरी 100 · बाल हेल्पलाइन 1098",
  dev: "विकासकर्ता: Bishal Regmi",
  not_ready: "यो लिङ्क अहिलेसम्म तयार गरिएको छैन।"
};

/* ===== Helpers ===== */
const $ = (s) => document.querySelector(s);
const $$ = (s) => document.querySelectorAll(s);
const isSet = (v) => v && !/^(GOOGLE_|YOUR_)/.test(v);

let toastTimer;
function toast() {
  const t = $("#toast");
  t.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove("show"), 3500);
}

/* ===== Config-driven text and links ===== */
$$("[data-text]").forEach((el) => {
  const v = CONFIG[el.dataset.text];
  if (isSet(v)) el.textContent = v;
});

$$("[data-link]").forEach((a) => {
  const key = a.dataset.link, v = CONFIG[key];
  if (isSet(v)) {
    const mail = key === "CONTACT_EMAIL";
    a.href = mail ? "mailto:" + v : v;
    if (!mail) { a.target = "_blank"; a.rel = "noopener noreferrer"; }
  } else {
    a.href = "#";
    a.addEventListener("click", (e) => { e.preventDefault(); toast(); });
  }
});

$("#qr").src = CONFIG.GOOGLE_REPORT_QR_IMAGE;
$("#year").textContent = new Date().getFullYear();

/* ===== Language switcher ===== */
const items = [...$$("[data-i18n]")];
items.forEach((el) => (el.dataset.en = el.textContent.trim()));

function setLang(lang) {
  document.documentElement.lang = lang;
  items.forEach((el) => (el.textContent = (lang === "ne" && NE[el.dataset.i18n]) || el.dataset.en));
  $$("[data-lang]").forEach((b) => b.setAttribute("aria-pressed", b.dataset.lang === lang));
}
$$("[data-lang]").forEach((b) => b.addEventListener("click", () => setLang(b.dataset.lang)));

/* ===== Mobile menu (smooth scrolling is handled in CSS) ===== */
const menu = $("#menu"), burger = $(".burger");
function toggleMenu(open) {
  menu.classList.toggle("open", open);
  burger.setAttribute("aria-expanded", open);
}
burger.addEventListener("click", () => toggleMenu(!menu.classList.contains("open")));
menu.addEventListener("click", (e) => { if (e.target.closest("a")) toggleMenu(false); });
document.addEventListener("keydown", (e) => { if (e.key === "Escape") toggleMenu(false); });

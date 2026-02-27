import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'en' | 'te' | 'hi' | 'ta' | 'ml' | 'kn';

export const languageNames: Record<Language, string> = {
  en: 'English',
  te: 'తెలుగు',
  hi: 'हिन्दी',
  ta: 'தமிழ்',
  ml: 'മലയാളം',
  kn: 'ಕನ್ನಡ',
};

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Nav
    home: 'Home',
    about: 'About Us',
    products: 'Products',
    donate: 'Donate',
    contact: 'Contact',
    login: 'Login',
    signup: 'Sign Up',
    brochure: 'Brochure',
    
    // Hero
    heroTitle: 'Empowering Farmers Through Smart Agriculture',
    heroSubtitle: 'Connecting donors, businesses, and farmers for a sustainable future. Fresh produce from farm to your table.',
    heroBtn1: 'Support a Farmer',
    heroBtn2: 'Browse Products',
    
    // Features
    featuresTitle: 'How KrishiConnect Works',
    feat1Title: 'Farmers Register',
    feat1Desc: 'Farmers list their crops, needs, and funding requirements on our platform.',
    feat2Title: 'Donors Contribute',
    feat2Desc: 'Business people and individuals fund farming projects and earn rewards.',
    feat3Title: 'Fresh Delivery',
    feat3Desc: 'Customers receive fresh farm products directly with scheduled delivery.',
    feat4Title: 'Smart Farming',
    feat4Desc: 'AI-powered insights help farmers optimize crop yields and reduce waste.',
    
    // Quotes
    quotesTitle: 'Wisdom of the Fields',
    quote1: '"The farmer is the only man in our economy who buys everything at retail, sells everything at wholesale, and pays the freight both ways."',
    quote1Author: '— John F. Kennedy',
    quote2: '"Agriculture is the most healthful, most useful, and most noble employment of man."',
    quote2Author: '— George Washington',
    quote3: '"To forget how to dig the earth and tend the soil is to forget ourselves."',
    quote3Author: '— Mahatma Gandhi',
    
    // Products
    productsTitle: 'Farm Fresh Products',
    productsSubtitle: 'Direct from farmers to your doorstep',
    vegetables: 'Vegetables',
    fruits: 'Fruits',
    grains: 'Grains',
    dairy: 'Dairy',
    buyNow: 'Buy Now',
    addToCart: 'Add to Cart',
    
    // About
    aboutTitle: 'About KrishiConnect',
    aboutDesc: 'We bridge the gap between farmers and the community. Our platform enables direct funding, smart farming technology, and fresh produce delivery — creating a sustainable ecosystem for Indian agriculture.',
    mission: 'Our Mission',
    missionDesc: 'To empower every farmer with technology, funding, and market access.',
    vision: 'Our Vision',
    visionDesc: 'A world where no farmer struggles and every table has fresh, affordable food.',
    
    // Contact
    contactTitle: 'Contact Us',
    contactName: 'Your Name',
    contactEmail: 'Email Address',
    contactMessage: 'Your Message',
    contactSend: 'Send Message',
    
    // Footer
    footerDesc: 'Empowering Indian agriculture through technology and community support.',
    quickLinks: 'Quick Links',
    services: 'Services',
    farmerReg: 'Farmer Registration',
    customerReg: 'Customer Registration',
    donorReg: 'Donor Registration',
    coupons: 'Coupons & Gift Cards',
    delivery: 'Delivery Schedule',
    
    // Voice
    voiceSearch: 'Voice Search',
    listening: 'Listening...',
    
    // Registration
    registerAs: 'Register As',
    farmer: 'Farmer',
    customer: 'Customer',
    donor: 'Donor',
    fullName: 'Full Name',
    phone: 'Phone Number',
    address: 'Address',
    farmSize: 'Farm Size (acres)',
    crops: 'Main Crops',
    submit: 'Submit',
    
    // Visitor
    visitorProfile: 'Visitor Profile',
    totalVisits: 'Total Visits',
    memberSince: 'Member Since',
  },
  te: {
    home: 'హోమ్', about: 'మా గురించి', products: 'ఉత్పత్తులు', donate: 'విరాళం', contact: 'సంప్రదించండి',
    login: 'లాగిన్', signup: 'సైన్ అప్', brochure: 'బ్రోచర్',
    heroTitle: 'స్మార్ట్ వ్యవసాయం ద్వారా రైతులకు శక్తినిస్తోంది',
    heroSubtitle: 'స్థిరమైన భవిష్యత్తు కోసం దాతలు, వ్యాపారులు మరియు రైతులను కలుపుతోంది.',
    heroBtn1: 'రైతుకు మద్దతు ఇవ్వండి', heroBtn2: 'ఉత్పత్తులు చూడండి',
    featuresTitle: 'కృషికనెక్ట్ ఎలా పనిచేస్తుంది',
    feat1Title: 'రైతుల నమోదు', feat1Desc: 'రైతులు తమ పంటలు, అవసరాలు, నిధి అవసరాలను జాబితా చేస్తారు.',
    feat2Title: 'దాతలు సహాయం', feat2Desc: 'వ్యాపారవేత్తలు వ్యవసాయ ప్రాజెక్టులకు నిధులు అందిస్తారు.',
    feat3Title: 'తాజా డెలివరీ', feat3Desc: 'కస్టమర్లు తాజా వ్యవసాయ ఉత్పత్తులను నేరుగా అందుకుంటారు.',
    feat4Title: 'స్మార్ట్ ఫార్మింగ్', feat4Desc: 'AI-ఆధారిత అంతర్దృష్టులు పంట దిగుబడిని ఆప్టిమైజ్ చేయడంలో సహాయపడతాయి.',
    quotesTitle: 'పొలాల జ్ఞానం',
    quote1: '"రైతు మన ఆర్థిక వ్యవస్థలో అన్ని రిటైల్‌లో కొనుగోలు చేసే ఏకైక వ్యక్తి."', quote1Author: '— జాన్ ఎఫ్. కెన్నడీ',
    quote2: '"వ్యవసాయం మనిషి యొక్క అత్యంత ఆరోగ్యకరమైన, ఉపయోగకరమైన ఉపాధి."', quote2Author: '— జార్జ్ వాషింగ్టన్',
    quote3: '"భూమిని తవ్వడం మరచిపోవడం మనల్ని మనం మరచిపోవడం."', quote3Author: '— మహాత్మా గాంధీ',
    productsTitle: 'తాజా వ్యవసాయ ఉత్పత్తులు', productsSubtitle: 'రైతుల నుండి నేరుగా మీ ఇంటికి',
    vegetables: 'కూరగాయలు', fruits: 'పండ్లు', grains: 'ధాన్యాలు', dairy: 'పాల ఉత్పత్తులు',
    buyNow: 'ఇప్పుడు కొనండి', addToCart: 'కార్ట్‌కి జోడించండి',
    aboutTitle: 'కృషికనెక్ట్ గురించి',
    aboutDesc: 'రైతులు మరియు సమాజం మధ్య అంతరాన్ని తగ్గిస్తాము.',
    mission: 'మా లక్ష్యం', missionDesc: 'ప్రతి రైతుకు సాంకేతికత, నిధులు మరియు మార్కెట్ యాక్సెస్ అందించడం.',
    vision: 'మా దృష్టి', visionDesc: 'ఏ రైతు కష్టపడని ప్రపంచం.',
    contactTitle: 'సంప్రదించండి', contactName: 'మీ పేరు', contactEmail: 'ఇమెయిల్',
    contactMessage: 'మీ సందేశం', contactSend: 'సందేశం పంపండి',
    footerDesc: 'సాంకేతికత ద్వారా భారతీయ వ్యవసాయాన్ని శక్తివంతం చేస్తోంది.',
    quickLinks: 'త్వరిత లింక్‌లు', services: 'సేవలు',
    farmerReg: 'రైతు నమోదు', customerReg: 'కస్టమర్ నమోదు', donorReg: 'దాత నమోదు',
    coupons: 'కూపన్లు & గిఫ్ట్ కార్డ్‌లు', delivery: 'డెలివరీ షెడ్యూల్',
    voiceSearch: 'వాయిస్ సెర్చ్', listening: 'వింటోంది...',
    registerAs: 'నమోదు', farmer: 'రైతు', customer: 'కస్టమర్', donor: 'దాత',
    fullName: 'పూర్తి పేరు', phone: 'ఫోన్ నంబర్', address: 'చిరునామా',
    farmSize: 'వ్యవసాయ భూమి (ఎకరాలు)', crops: 'ప్రధాన పంటలు', submit: 'సమర్పించండి',
    visitorProfile: 'సందర్శకుల ప్రొఫైల్', totalVisits: 'మొత్తం సందర్శనలు', memberSince: 'సభ్యుడు నుండి',
  },
  hi: {
    home: 'होम', about: 'हमारे बारे में', products: 'उत्पाद', donate: 'दान करें', contact: 'संपर्क करें',
    login: 'लॉगिन', signup: 'साइन अप', brochure: 'ब्रोशर',
    heroTitle: 'स्मार्ट कृषि के माध्यम से किसानों को सशक्त बनाना',
    heroSubtitle: 'एक स्थायी भविष्य के लिए दानदाताओं, व्यवसायियों और किसानों को जोड़ना।',
    heroBtn1: 'किसान का समर्थन करें', heroBtn2: 'उत्पाद देखें',
    featuresTitle: 'कृषिकनेक्ट कैसे काम करता है',
    feat1Title: 'किसान पंजीकरण', feat1Desc: 'किसान अपनी फसलों, जरूरतों और फंडिंग आवश्यकताओं को सूचीबद्ध करते हैं।',
    feat2Title: 'दानदाता योगदान', feat2Desc: 'व्यवसायी कृषि परियोजनाओं को फंड करते हैं।',
    feat3Title: 'ताज़ा डिलीवरी', feat3Desc: 'ग्राहक सीधे ताज़ा कृषि उत्पाद प्राप्त करते हैं।',
    feat4Title: 'स्मार्ट फार्मिंग', feat4Desc: 'AI-संचालित अंतर्दृष्टि फसल उपज को अनुकूलित करने में मदद करती है।',
    quotesTitle: 'खेतों की बुद्धिमत्ता',
    quote1: '"किसान हमारी अर्थव्यवस्था में एकमात्र व्यक्ति है जो सब कुछ खुदरा में खरीदता है।"', quote1Author: '— जॉन एफ. कैनेडी',
    quote2: '"कृषि मनुष्य का सबसे स्वस्थ, सबसे उपयोगी व्यवसाय है।"', quote2Author: '— जॉर्ज वाशिंगटन',
    quote3: '"भूमि खोदना भूलना खुद को भूलना है।"', quote3Author: '— महात्मा गांधी',
    productsTitle: 'ताज़ा कृषि उत्पाद', productsSubtitle: 'किसानों से सीधे आपके दरवाज़े तक',
    vegetables: 'सब्जियाँ', fruits: 'फल', grains: 'अनाज', dairy: 'डेयरी',
    buyNow: 'अभी खरीदें', addToCart: 'कार्ट में डालें',
    aboutTitle: 'कृषिकनेक्ट के बारे में',
    aboutDesc: 'हम किसानों और समुदाय के बीच की खाई को पाटते हैं।',
    mission: 'हमारा मिशन', missionDesc: 'हर किसान को तकनीक, फंडिंग और बाजार पहुंच प्रदान करना।',
    vision: 'हमारा विज़न', visionDesc: 'एक ऐसी दुनिया जहां कोई किसान संघर्ष न करे।',
    contactTitle: 'संपर्क करें', contactName: 'आपका नाम', contactEmail: 'ईमेल',
    contactMessage: 'आपका संदेश', contactSend: 'संदेश भेजें',
    footerDesc: 'तकनीक के माध्यम से भारतीय कृषि को सशक्त बनाना।',
    quickLinks: 'त्वरित लिंक', services: 'सेवाएं',
    farmerReg: 'किसान पंजीकरण', customerReg: 'ग्राहक पंजीकरण', donorReg: 'दानदाता पंजीकरण',
    coupons: 'कूपन और गिफ्ट कार्ड', delivery: 'डिलीवरी शेड्यूल',
    voiceSearch: 'वॉइस सर्च', listening: 'सुन रहा है...',
    registerAs: 'पंजीकरण', farmer: 'किसान', customer: 'ग्राहक', donor: 'दानदाता',
    fullName: 'पूरा नाम', phone: 'फोन नंबर', address: 'पता',
    farmSize: 'खेत का आकार (एकड़)', crops: 'मुख्य फसलें', submit: 'जमा करें',
    visitorProfile: 'विज़िटर प्रोफ़ाइल', totalVisits: 'कुल विज़िट', memberSince: 'सदस्य तारीख',
  },
  ta: {
    home: 'முகப்பு', about: 'எங்களைப் பற்றி', products: 'பொருட்கள்', donate: 'நன்கொடை', contact: 'தொடர்பு',
    login: 'உள்நுழை', signup: 'பதிவு', brochure: 'கையேடு',
    heroTitle: 'ஸ்மார்ட் வேளாண்மை மூலம் விவசாயிகளை மேம்படுத்துதல்',
    heroSubtitle: 'நிலையான எதிர்காலத்திற்காக நன்கொடையாளர்கள், தொழிலதிபர்கள் மற்றும் விவசாயிகளை இணைத்தல்.',
    heroBtn1: 'விவசாயியை ஆதரிக்கவும்', heroBtn2: 'பொருட்களைப் பாருங்கள்',
    featuresTitle: 'கிருஷிகனெக்ட் எவ்வாறு செயல்படுகிறது',
    feat1Title: 'விவசாயி பதிவு', feat1Desc: 'விவசாயிகள் தங்கள் பயிர்கள் மற்றும் தேவைகளை பட்டியலிடுகிறார்கள்.',
    feat2Title: 'நன்கொடையாளர் பங்களிப்பு', feat2Desc: 'தொழிலதிபர்கள் வேளாண் திட்டங்களுக்கு நிதி அளிக்கின்றனர்.',
    feat3Title: 'புதிய டெலிவரி', feat3Desc: 'வாடிக்கையாளர்கள் நேரடியாக புதிய விளைபொருட்களைப் பெறுகிறார்கள்.',
    feat4Title: 'ஸ்மார்ட் ஃபார்மிங்', feat4Desc: 'AI உதவிகுறிப்புகள் பயிர் விளைச்சலை மேம்படுத்த உதவுகின்றன.',
    quotesTitle: 'வயல்களின் ஞானம்',
    quote1: '"விவசாயி நம் பொருளாதாரத்தில் அனைத்தையும் சில்லறையில் வாங்கும் ஒரே நபர்."', quote1Author: '— ஜான் எஃப். கென்னடி',
    quote2: '"வேளாண்மை மனிதனின் மிகவும் ஆரோக்கியமான தொழில்."', quote2Author: '— ஜார்ஜ் வாஷிங்டன்',
    quote3: '"மண்ணை தோண்டுவதை மறப்பது நம்மை நாமே மறப்பது."', quote3Author: '— மகாத்மா காந்தி',
    productsTitle: 'புதிய விவசாய பொருட்கள்', productsSubtitle: 'விவசாயிகளிடமிருந்து நேரடியாக உங்கள் வீட்டிற்கு',
    vegetables: 'காய்கறிகள்', fruits: 'பழங்கள்', grains: 'தானியங்கள்', dairy: 'பால் பொருட்கள்',
    buyNow: 'இப்போது வாங்கு', addToCart: 'கார்ட்டில் சேர்',
    aboutTitle: 'கிருஷிகனெக்ட் பற்றி',
    aboutDesc: 'விவசாயிகள் மற்றும் சமூகத்திற்கு இடையே உள்ள இடைவெளியை குறைக்கிறோம்.',
    mission: 'எங்கள் நோக்கம்', missionDesc: 'ஒவ்வொரு விவசாயிக்கும் தொழில்நுட்பம் வழங்குதல்.',
    vision: 'எங்கள் பார்வை', visionDesc: 'எந்த விவசாயியும் போராடாத உலகம்.',
    contactTitle: 'தொடர்பு கொள்ளுங்கள்', contactName: 'உங்கள் பெயர்', contactEmail: 'மின்னஞ்சல்',
    contactMessage: 'உங்கள் செய்தி', contactSend: 'செய்தி அனுப்பு',
    footerDesc: 'தொழில்நுட்பத்தின் மூலம் இந்திய வேளாண்மையை மேம்படுத்துதல்.',
    quickLinks: 'விரைவு இணைப்புகள்', services: 'சேவைகள்',
    farmerReg: 'விவசாயி பதிவு', customerReg: 'வாடிக்கையாளர் பதிவு', donorReg: 'நன்கொடையாளர் பதிவு',
    coupons: 'கூப்பன்கள் & பரிசு அட்டைகள்', delivery: 'டெலிவரி அட்டவணை',
    voiceSearch: 'குரல் தேடல்', listening: 'கேட்கிறது...',
    registerAs: 'பதிவு செய்', farmer: 'விவசாயி', customer: 'வாடிக்கையாளர்', donor: 'நன்கொடையாளர்',
    fullName: 'முழு பெயர்', phone: 'தொலைபேசி', address: 'முகவரி',
    farmSize: 'நிலம் (ஏக்கர்)', crops: 'முக்கிய பயிர்கள்', submit: 'சமர்ப்பி',
    visitorProfile: 'பார்வையாளர் சுயவிவரம்', totalVisits: 'மொத்த வருகைகள்', memberSince: 'உறுப்பினர் முதல்',
  },
  ml: {
    home: 'ഹോം', about: 'ഞങ്ങളെ കുറിച്ച്', products: 'ഉൽപ്പന്നങ്ങൾ', donate: 'സംഭാവന', contact: 'ബന്ധപ്പെടുക',
    login: 'ലോഗിൻ', signup: 'സൈൻ അപ്പ്', brochure: 'ബ്രോഷർ',
    heroTitle: 'സ്മാർട്ട് കൃഷിയിലൂടെ കർഷകരെ ശാക്തീകരിക്കുന്നു',
    heroSubtitle: 'സുസ്ഥിര ഭാവിക്കായി ദാതാക്കളെയും വ്യാപാരികളെയും കർഷകരെയും ബന്ധിപ്പിക്കുന്നു.',
    heroBtn1: 'കർഷകനെ പിന്തുണയ്ക്കുക', heroBtn2: 'ഉൽപ്പന്നങ്ങൾ കാണുക',
    featuresTitle: 'കൃഷികണക്ട് എങ്ങനെ പ്രവർത്തിക്കുന്നു',
    feat1Title: 'കർഷക രജിസ്ട്രേഷൻ', feat1Desc: 'കർഷകർ തങ്ങളുടെ വിളകളും ആവശ്യങ്ങളും ലിസ്റ്റ് ചെയ്യുന്നു.',
    feat2Title: 'ദാതാക്കളുടെ സംഭാവന', feat2Desc: 'വ്യാപാരികൾ കാർഷിക പദ്ധതികൾക്ക് ഫണ്ട് ചെയ്യുന്നു.',
    feat3Title: 'പുതിയ ഡെലിവറി', feat3Desc: 'ഉപഭോക്താക്കൾ നേരിട്ട് പുതിയ ഉൽപ്പന്നങ്ങൾ ലഭിക്കുന്നു.',
    feat4Title: 'സ്മാർട്ട് ഫാമിംഗ്', feat4Desc: 'AI ഉൾക്കാഴ്ചകൾ വിള ഉൽപ്പാദനം ഒപ്റ്റിമൈസ് ചെയ്യാൻ സഹായിക്കുന്നു.',
    quotesTitle: 'വയലുകളുടെ ജ്ഞാനം',
    quote1: '"കർഷകൻ നമ്മുടെ സമ്പദ്‌വ്യവസ്ഥയിൽ എല്ലാം ചില്ലറയായി വാങ്ങുന്ന ഏക വ്യക്തിയാണ്."', quote1Author: '— ജോൺ എഫ്. കെന്നഡി',
    quote2: '"കൃഷി മനുഷ്യന്റെ ഏറ്റവും ആരോഗ്യകരമായ തൊഴിലാണ്."', quote2Author: '— ജോർജ്ജ് വാഷിംഗ്ടൺ',
    quote3: '"മണ്ണ് കുഴിക്കാൻ മറക്കുന്നത് നമ്മെ തന്നെ മറക്കുന്നതാണ്."', quote3Author: '— മഹാത്മാ ഗാന്ധി',
    productsTitle: 'പുതിയ കാർഷിക ഉൽപ്പന്നങ്ങൾ', productsSubtitle: 'കർഷകരിൽ നിന്ന് നേരിട്ട് നിങ്ങളുടെ വീട്ടിലേക്ക്',
    vegetables: 'പച്ചക്കറികൾ', fruits: 'പഴങ്ങൾ', grains: 'ധാന്യങ്ങൾ', dairy: 'പാലുൽപ്പന്നങ്ങൾ',
    buyNow: 'ഇപ്പോൾ വാങ്ങുക', addToCart: 'കാർട്ടിൽ ചേർക്കുക',
    aboutTitle: 'കൃഷികണക്ട് കുറിച്ച്',
    aboutDesc: 'കർഷകരും സമൂഹവും തമ്മിലുള്ള വിടവ് കുറയ്ക്കുന്നു.',
    mission: 'ഞങ്ങളുടെ ദൗത്യം', missionDesc: 'എല്ലാ കർഷകർക്കും സാങ്കേതികവിദ്യ നൽകുക.',
    vision: 'ഞങ്ങളുടെ ദർശനം', visionDesc: 'ഒരു കർഷകനും പ്രയാസപ്പെടാത്ത ലോകം.',
    contactTitle: 'ബന്ധപ്പെടുക', contactName: 'നിങ്ങളുടെ പേര്', contactEmail: 'ഇമെയിൽ',
    contactMessage: 'നിങ്ങളുടെ സന്ദേശം', contactSend: 'സന്ദേശം അയയ്ക്കുക',
    footerDesc: 'സാങ്കേതികവിദ്യയിലൂടെ ഇന്ത്യൻ കൃഷി ശാക്തീകരിക്കുന്നു.',
    quickLinks: 'ദ്രുത ലിങ്കുകൾ', services: 'സേവനങ്ങൾ',
    farmerReg: 'കർഷക രജിസ്ട്രേഷൻ', customerReg: 'ഉപഭോക്തൃ രജിസ്ട്രേഷൻ', donorReg: 'ദാതാവ് രജിസ്ട്രേഷൻ',
    coupons: 'കൂപ്പണുകൾ & ഗിഫ്റ്റ് കാർഡുകൾ', delivery: 'ഡെലിവറി ഷെഡ്യൂൾ',
    voiceSearch: 'വോയ്സ് സെർച്ച്', listening: 'കേൾക്കുന്നു...',
    registerAs: 'രജിസ്റ്റർ ചെയ്യുക', farmer: 'കർഷകൻ', customer: 'ഉപഭോക്താവ്', donor: 'ദാതാവ്',
    fullName: 'മുഴുവൻ പേര്', phone: 'ഫോൺ നമ്പർ', address: 'വിലാസം',
    farmSize: 'കൃഷിഭൂമി (ഏക്കർ)', crops: 'പ്രധാന വിളകൾ', submit: 'സമർപ്പിക്കുക',
    visitorProfile: 'സന്ദർശക പ്രൊഫൈൽ', totalVisits: 'ആകെ സന്ദർശനങ്ങൾ', memberSince: 'അംഗം മുതൽ',
  },
  kn: {
    home: 'ಮುಖಪುಟ', about: 'ನಮ್ಮ ಬಗ್ಗೆ', products: 'ಉತ್ಪನ್ನಗಳು', donate: 'ದಾನ', contact: 'ಸಂಪರ್ಕಿಸಿ',
    login: 'ಲಾಗಿನ್', signup: 'ಸೈನ್ ಅಪ್', brochure: 'ಕರಪತ್ರ',
    heroTitle: 'ಸ್ಮಾರ್ಟ್ ಕೃಷಿಯ ಮೂಲಕ ರೈತರನ್ನು ಸಶಕ್ತಗೊಳಿಸುವುದು',
    heroSubtitle: 'ಸುಸ್ಥಿರ ಭವಿಷ್ಯಕ್ಕಾಗಿ ದಾನಿಗಳು, ವ್ಯಾಪಾರಿಗಳು ಮತ್ತು ರೈತರನ್ನು ಸಂಪರ್ಕಿಸುವುದು.',
    heroBtn1: 'ರೈತನನ್ನು ಬೆಂಬಲಿಸಿ', heroBtn2: 'ಉತ್ಪನ್ನಗಳನ್ನು ನೋಡಿ',
    featuresTitle: 'ಕೃಷಿಕನೆಕ್ಟ್ ಹೇಗೆ ಕೆಲಸ ಮಾಡುತ್ತದೆ',
    feat1Title: 'ರೈತ ನೋಂದಣಿ', feat1Desc: 'ರೈತರು ತಮ್ಮ ಬೆಳೆಗಳು ಮತ್ತು ಅಗತ್ಯಗಳನ್ನು ಪಟ್ಟಿ ಮಾಡುತ್ತಾರೆ.',
    feat2Title: 'ದಾನಿಗಳ ಕೊಡುಗೆ', feat2Desc: 'ವ್ಯಾಪಾರಿಗಳು ಕೃಷಿ ಯೋಜನೆಗಳಿಗೆ ಹಣ ನೀಡುತ್ತಾರೆ.',
    feat3Title: 'ತಾಜಾ ಡೆಲಿವರಿ', feat3Desc: 'ಗ್ರಾಹಕರು ನೇರವಾಗಿ ತಾಜಾ ಉತ್ಪನ್ನಗಳನ್ನು ಪಡೆಯುತ್ತಾರೆ.',
    feat4Title: 'ಸ್ಮಾರ್ಟ್ ಫಾರ್ಮಿಂಗ್', feat4Desc: 'AI ಒಳನೋಟಗಳು ಬೆಳೆ ಇಳುವರಿಯನ್ನು ಉತ್ತಮಗೊಳಿಸಲು ಸಹಾಯ ಮಾಡುತ್ತವೆ.',
    quotesTitle: 'ಹೊಲಗಳ ಬುದ್ಧಿವಂತಿಕೆ',
    quote1: '"ರೈತ ನಮ್ಮ ಆರ್ಥಿಕತೆಯಲ್ಲಿ ಎಲ್ಲವನ್ನೂ ಚಿಲ್ಲರೆಯಲ್ಲಿ ಖರೀದಿಸುವ ಏಕೈಕ ವ್ಯಕ್ತಿ."', quote1Author: '— ಜಾನ್ ಎಫ್. ಕೆನಡಿ',
    quote2: '"ಕೃಷಿ ಮನುಷ್ಯನ ಅತ್ಯಂತ ಆರೋಗ್ಯಕರ ಉದ್ಯೋಗ."', quote2Author: '— ಜಾರ್ಜ್ ವಾಷಿಂಗ್ಟನ್',
    quote3: '"ಮಣ್ಣನ್ನು ಅಗೆಯುವುದನ್ನು ಮರೆಯುವುದು ನಮ್ಮನ್ನು ನಾವೇ ಮರೆಯುವುದು."', quote3Author: '— ಮಹಾತ್ಮ ಗಾಂಧಿ',
    productsTitle: 'ತಾಜಾ ಕೃಷಿ ಉತ್ಪನ್ನಗಳು', productsSubtitle: 'ರೈತರಿಂದ ನೇರವಾಗಿ ನಿಮ್ಮ ಮನೆಗೆ',
    vegetables: 'ತರಕಾರಿಗಳು', fruits: 'ಹಣ್ಣುಗಳು', grains: 'ಧಾನ್ಯಗಳು', dairy: 'ಹಾಲಿನ ಉತ್ಪನ್ನಗಳು',
    buyNow: 'ಈಗ ಖರೀದಿಸಿ', addToCart: 'ಕಾರ್ಟ್‌ಗೆ ಸೇರಿಸಿ',
    aboutTitle: 'ಕೃಷಿಕನೆಕ್ಟ್ ಬಗ್ಗೆ',
    aboutDesc: 'ರೈತರು ಮತ್ತು ಸಮುದಾಯದ ನಡುವಿನ ಅಂತರವನ್ನು ಕಡಿಮೆ ಮಾಡುತ್ತೇವೆ.',
    mission: 'ನಮ್ಮ ಧ್ಯೇಯ', missionDesc: 'ಪ್ರತಿ ರೈತನಿಗೆ ತಂತ್ರಜ್ಞಾನ ಒದಗಿಸುವುದು.',
    vision: 'ನಮ್ಮ ದೃಷ್ಟಿ', visionDesc: 'ಯಾವ ರೈತನೂ ಹೆಣಗಾಡದ ಜಗತ್ತು.',
    contactTitle: 'ಸಂಪರ್ಕಿಸಿ', contactName: 'ನಿಮ್ಮ ಹೆಸರು', contactEmail: 'ಇಮೇಲ್',
    contactMessage: 'ನಿಮ್ಮ ಸಂದೇಶ', contactSend: 'ಸಂದೇಶ ಕಳುಹಿಸಿ',
    footerDesc: 'ತಂತ್ರಜ್ಞಾನದ ಮೂಲಕ ಭಾರತೀಯ ಕೃಷಿಯನ್ನು ಸಶಕ್ತಗೊಳಿಸುವುದು.',
    quickLinks: 'ತ್ವರಿತ ಲಿಂಕ್‌ಗಳು', services: 'ಸೇವೆಗಳು',
    farmerReg: 'ರೈತ ನೋಂದಣಿ', customerReg: 'ಗ್ರಾಹಕ ನೋಂದಣಿ', donorReg: 'ದಾನಿ ನೋಂದಣಿ',
    coupons: 'ಕೂಪನ್‌ಗಳು & ಗಿಫ್ಟ್ ಕಾರ್ಡ್‌ಗಳು', delivery: 'ಡೆಲಿವರಿ ವೇಳಾಪಟ್ಟಿ',
    voiceSearch: 'ಧ್ವನಿ ಹುಡುಕಾಟ', listening: 'ಕೇಳುತ್ತಿದೆ...',
    registerAs: 'ನೋಂದಾಯಿಸಿ', farmer: 'ರೈತ', customer: 'ಗ್ರಾಹಕ', donor: 'ದಾನಿ',
    fullName: 'ಪೂರ್ಣ ಹೆಸರು', phone: 'ಫೋನ್ ಸಂಖ್ಯೆ', address: 'ವಿಳಾಸ',
    farmSize: 'ಕೃಷಿ ಭೂಮಿ (ಎಕರೆ)', crops: 'ಮುಖ್ಯ ಬೆಳೆಗಳು', submit: 'ಸಲ್ಲಿಸಿ',
    visitorProfile: 'ಸಂದರ್ಶಕ ಪ್ರೊಫೈಲ್', totalVisits: 'ಒಟ್ಟು ಭೇಟಿಗಳು', memberSince: 'ಸದಸ್ಯ ಇಂದ',
  },
};

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: 'en',
  setLang: () => {},
  t: (key: string) => key,
});

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Language>('en');

  const t = (key: string) => {
    return translations[lang]?.[key] || translations.en[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);

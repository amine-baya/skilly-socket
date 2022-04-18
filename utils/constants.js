// export const baseUrl = 'http://localhost:5087'
export const baseUrl = 'http://65.0.176.119:5087'
export const typesenseUrl = 'http://13.233.137.22:3020/typesense/'
export const baseUrlProfilePic =
  'https://akbh.s3.ap-south-1.amazonaws.com/skillshare/user/profile_img/'

// API's
export const studentRegister = '/student/signup'
export const studentLogin = '/student/login'
export const studentupdateLoginDetails = '/student/update/profile/login-details'
export const tutorRegister = '/tutor/create'
export const tutorLogin = '/tutor/login'
export const getTutorPublicProfile = '/tutor/profile/by-id'
export const getTutorProfile = '/tutor/profile'
export const uploadUserProfilePic = '/tutor/upload/profile-pic'
export const uploadUserBackgroundPic = '/user/update/background-pic'
export const updateBasicDetails = '/tutor/update/basic-details'
export const updateUserProfilePic = '/tutor/update/profile-pic'
export const updateUserDescription = '/user/tutor/profile/update/description'
export const updateUserVideoDesc = '/tutor/update/video-introduction'
export const updateUserAvailability = '/user/tutor/profile/update/availability'
export const updateUserQualification = '/tutor/update/qualifications'
export const updateUserEducation =
  '/user/tutor/profile/update/education-certificate'
export const updateUserCertificate =
  '/user/tutor/profile/update/teaching-certificate'

// bookings
export const newBooking = '/booking/create'

export const ROLE_NAME = {
  TUTOR: 'TUTOR',
  STUDENT: 'STUDENT',
}

export const SUBJECTS = {
  1: 'English',
  2: 'Maths',
  3: 'Hindi',
  4: 'Physics',
}

export const LANGUAGES = [
  { code: 'ab', name: 'Abkhaz', nativeName: 'аҧсуа' },
  { code: 'aa', name: 'Afar', nativeName: 'Afaraf' },
  { code: 'af', name: 'Afrikaans', nativeName: 'Afrikaans' },
  { code: 'ak', name: 'Akan', nativeName: 'Akan' },
  { code: 'sq', name: 'Albanian', nativeName: 'Shqip' },
  { code: 'am', name: 'Amharic', nativeName: 'አማርኛ' },
  { code: 'ar', name: 'Arabic', nativeName: 'العربية' },
  { code: 'an', name: 'Aragonese', nativeName: 'Aragonés' },
  { code: 'hy', name: 'Armenian', nativeName: 'Հայերեն' },
  { code: 'as', name: 'Assamese', nativeName: 'অসমীয়া' },
  { code: 'av', name: 'Avaric', nativeName: 'авар мацӀ, магӀарул мацӀ' },
  { code: 'ae', name: 'Avestan', nativeName: 'avesta' },
  { code: 'ay', name: 'Aymara', nativeName: 'aymar aru' },
  { code: 'az', name: 'Azerbaijani', nativeName: 'azərbaycan dili' },
  { code: 'bm', name: 'Bambara', nativeName: 'bamanankan' },
  { code: 'ba', name: 'Bashkir', nativeName: 'башҡорт теле' },
  { code: 'eu', name: 'Basque', nativeName: 'euskara, euskera' },
  { code: 'be', name: 'Belarusian', nativeName: 'Беларуская' },
  { code: 'bn', name: 'Bengali', nativeName: 'বাংলা' },
  { code: 'bh', name: 'Bihari', nativeName: 'भोजपुरी' },
  { code: 'bi', name: 'Bislama', nativeName: 'Bislama' },
  { code: 'bs', name: 'Bosnian', nativeName: 'bosanski jezik' },
  { code: 'br', name: 'Breton', nativeName: 'brezhoneg' },
  { code: 'bg', name: 'Bulgarian', nativeName: 'български език' },
  { code: 'my', name: 'Burmese', nativeName: 'ဗမာစာ' },
  { code: 'ca', name: 'Catalan; Valencian', nativeName: 'Català' },
  { code: 'ch', name: 'Chamorro', nativeName: 'Chamoru' },
  { code: 'ce', name: 'Chechen', nativeName: 'нохчийн мотт' },
  {
    code: 'ny',
    name: 'Chichewa; Chewa; Nyanja',
    nativeName: 'chiCheŵa, chinyanja',
  },
  { code: 'zh', name: 'Chinese', nativeName: '中文 (Zhōngwén), 汉语, 漢語' },
  { code: 'cv', name: 'Chuvash', nativeName: 'чӑваш чӗлхи' },
  { code: 'kw', name: 'Cornish', nativeName: 'Kernewek' },
  { code: 'co', name: 'Corsican', nativeName: 'corsu, lingua corsa' },
  { code: 'cr', name: 'Cree', nativeName: 'ᓀᐦᐃᔭᐍᐏᐣ' },
  { code: 'hr', name: 'Croatian', nativeName: 'hrvatski' },
  { code: 'cs', name: 'Czech', nativeName: 'česky, čeština' },
  { code: 'da', name: 'Danish', nativeName: 'dansk' },
  { code: 'dv', name: 'Divehi; Dhivehi; Maldivian;', nativeName: 'ދިވެހި' },
  { code: 'nl', name: 'Dutch', nativeName: 'Nederlands, Vlaams' },
  { code: 'en', name: 'English', nativeName: 'English' },
  { code: 'eo', name: 'Esperanto', nativeName: 'Esperanto' },
  { code: 'et', name: 'Estonian', nativeName: 'eesti, eesti keel' },
  { code: 'ee', name: 'Ewe', nativeName: 'Eʋegbe' },
  { code: 'fo', name: 'Faroese', nativeName: 'føroyskt' },
  { code: 'fj', name: 'Fijian', nativeName: 'vosa Vakaviti' },
  { code: 'fi', name: 'Finnish', nativeName: 'suomi, suomen kieli' },
  { code: 'fr', name: 'French', nativeName: 'français, langue française' },
  {
    code: 'ff',
    name: 'Fula; Fulah; Pulaar; Pular',
    nativeName: 'Fulfulde, Pulaar, Pular',
  },
  { code: 'gl', name: 'Galician', nativeName: 'Galego' },
  { code: 'ka', name: 'Georgian', nativeName: 'ქართული' },
  { code: 'de', name: 'German', nativeName: 'Deutsch' },
  { code: 'el', name: 'Greek, Modern', nativeName: 'Ελληνικά' },
  { code: 'gn', name: 'Guaraní', nativeName: 'Avañeẽ' },
  { code: 'gu', name: 'Gujarati', nativeName: 'ગુજરાતી' },
  { code: 'ht', name: 'Haitian; Haitian Creole', nativeName: 'Kreyòl ayisyen' },
  { code: 'ha', name: 'Hausa', nativeName: 'Hausa, هَوُسَ' },
  { code: 'he', name: 'Hebrew (modern)', nativeName: 'עברית' },
  { code: 'hz', name: 'Herero', nativeName: 'Otjiherero' },
  { code: 'hi', name: 'Hindi', nativeName: 'हिन्दी, हिंदी' },
  { code: 'ho', name: 'Hiri Motu', nativeName: 'Hiri Motu' },
  { code: 'hu', name: 'Hungarian', nativeName: 'Magyar' },
  { code: 'ia', name: 'Interlingua', nativeName: 'Interlingua' },
  { code: 'id', name: 'Indonesian', nativeName: 'Bahasa Indonesia' },
  {
    code: 'ie',
    name: 'Interlingue',
    nativeName: 'Originally called Occidental; then Interlingue after WWII',
  },
  { code: 'ga', name: 'Irish', nativeName: 'Gaeilge' },
  { code: 'ig', name: 'Igbo', nativeName: 'Asụsụ Igbo' },
  { code: 'ik', name: 'Inupiaq', nativeName: 'Iñupiaq, Iñupiatun' },
  { code: 'io', name: 'Ido', nativeName: 'Ido' },
  { code: 'is', name: 'Icelandic', nativeName: 'Íslenska' },
  { code: 'it', name: 'Italian', nativeName: 'Italiano' },
  { code: 'iu', name: 'Inuktitut', nativeName: 'ᐃᓄᒃᑎᑐᑦ' },
  { code: 'ja', name: 'Japanese', nativeName: '日本語 (にほんご／にっぽんご)' },
  { code: 'jv', name: 'Javanese', nativeName: 'basa Jawa' },
  {
    code: 'kl',
    name: 'Kalaallisut, Greenlandic',
    nativeName: 'kalaallisut, kalaallit oqaasii',
  },
  { code: 'kn', name: 'Kannada', nativeName: 'ಕನ್ನಡ' },
  { code: 'kr', name: 'Kanuri', nativeName: 'Kanuri' },
  { code: 'ks', name: 'Kashmiri', nativeName: 'कश्मीरी, كشميري‎' },
  { code: 'kk', name: 'Kazakh', nativeName: 'Қазақ тілі' },
  { code: 'km', name: 'Khmer', nativeName: 'ភាសាខ្មែរ' },
  { code: 'ki', name: 'Kikuyu, Gikuyu', nativeName: 'Gĩkũyũ' },
  { code: 'rw', name: 'Kinyarwanda', nativeName: 'Ikinyarwanda' },
  { code: 'ky', name: 'Kirghiz, Kyrgyz', nativeName: 'кыргыз тили' },
  { code: 'kv', name: 'Komi', nativeName: 'коми кыв' },
  { code: 'kg', name: 'Kongo', nativeName: 'KiKongo' },
  {
    code: 'ko',
    name: 'Korean',
    nativeName: '한국어 (韓國語), 조선말 (朝鮮語)',
  },
  { code: 'ku', name: 'Kurdish', nativeName: 'Kurdî, كوردی‎' },
  { code: 'kj', name: 'Kwanyama, Kuanyama', nativeName: 'Kuanyama' },
  { code: 'la', name: 'Latin', nativeName: 'latine, lingua latina' },
  {
    code: 'lb',
    name: 'Luxembourgish, Letzeburgesch',
    nativeName: 'Lëtzebuergesch',
  },
  { code: 'lg', name: 'Luganda', nativeName: 'Luganda' },
  {
    code: 'li',
    name: 'Limburgish, Limburgan, Limburger',
    nativeName: 'Limburgs',
  },
  { code: 'ln', name: 'Lingala', nativeName: 'Lingála' },
  { code: 'lo', name: 'Lao', nativeName: 'ພາສາລາວ' },
  { code: 'lt', name: 'Lithuanian', nativeName: 'lietuvių kalba' },
  { code: 'lu', name: 'Luba-Katanga', nativeName: '' },
  { code: 'lv', name: 'Latvian', nativeName: 'latviešu valoda' },
  { code: 'gv', name: 'Manx', nativeName: 'Gaelg, Gailck' },
  { code: 'mk', name: 'Macedonian', nativeName: 'македонски јазик' },
  { code: 'mg', name: 'Malagasy', nativeName: 'Malagasy fiteny' },
  { code: 'ms', name: 'Malay', nativeName: 'bahasa Melayu, بهاس ملايو‎' },
  { code: 'ml', name: 'Malayalam', nativeName: 'മലയാളം' },
  { code: 'mt', name: 'Maltese', nativeName: 'Malti' },
  { code: 'mi', name: 'Māori', nativeName: 'te reo Māori' },
  { code: 'mr', name: 'Marathi (Marāṭhī)', nativeName: 'मराठी' },
  { code: 'mh', name: 'Marshallese', nativeName: 'Kajin M̧ajeļ' },
  { code: 'mn', name: 'Mongolian', nativeName: 'монгол' },
  { code: 'na', name: 'Nauru', nativeName: 'Ekakairũ Naoero' },
  { code: 'nv', name: 'Navajo, Navaho', nativeName: 'Diné bizaad, Dinékʼehǰí' },
  { code: 'nb', name: 'Norwegian Bokmål', nativeName: 'Norsk bokmål' },
  { code: 'nd', name: 'North Ndebele', nativeName: 'isiNdebele' },
  { code: 'ne', name: 'Nepali', nativeName: 'नेपाली' },
  { code: 'ng', name: 'Ndonga', nativeName: 'Owambo' },
  { code: 'nn', name: 'Norwegian Nynorsk', nativeName: 'Norsk nynorsk' },
  { code: 'no', name: 'Norwegian', nativeName: 'Norsk' },
  { code: 'ii', name: 'Nuosu', nativeName: 'ꆈꌠ꒿ Nuosuhxop' },
  { code: 'nr', name: 'South Ndebele', nativeName: 'isiNdebele' },
  { code: 'oc', name: 'Occitan', nativeName: 'Occitan' },
  { code: 'oj', name: 'Ojibwe, Ojibwa', nativeName: 'ᐊᓂᔑᓈᐯᒧᐎᓐ' },
  {
    code: 'cu',
    name: 'Old Church Slavonic, Church Slavic, Church Slavonic, Old Bulgarian, Old Slavonic',
    nativeName: 'ѩзыкъ словѣньскъ',
  },
  { code: 'om', name: 'Oromo', nativeName: 'Afaan Oromoo' },
  { code: 'or', name: 'Oriya', nativeName: 'ଓଡ଼ିଆ' },
  { code: 'os', name: 'Ossetian, Ossetic', nativeName: 'ирон æвзаг' },
  { code: 'pa', name: 'Panjabi, Punjabi', nativeName: 'ਪੰਜਾਬੀ, پنجابی‎' },
  { code: 'pi', name: 'Pāli', nativeName: 'पाऴि' },
  { code: 'fa', name: 'Persian', nativeName: 'فارسی' },
  { code: 'pl', name: 'Polish', nativeName: 'polski' },
  { code: 'ps', name: 'Pashto, Pushto', nativeName: 'پښتو' },
  { code: 'pt', name: 'Portuguese', nativeName: 'Português' },
  { code: 'qu', name: 'Quechua', nativeName: 'Runa Simi, Kichwa' },
  { code: 'rm', name: 'Romansh', nativeName: 'rumantsch grischun' },
  { code: 'rn', name: 'Kirundi', nativeName: 'kiRundi' },
  { code: 'ro', name: 'Romanian, Moldavian, Moldovan', nativeName: 'română' },
  { code: 'ru', name: 'Russian', nativeName: 'русский язык' },
  { code: 'sa', name: 'Sanskrit (Saṁskṛta)', nativeName: 'संस्कृतम्' },
  { code: 'sc', name: 'Sardinian', nativeName: 'sardu' },
  { code: 'sd', name: 'Sindhi', nativeName: 'सिन्धी, سنڌي، سندھی‎' },
  { code: 'se', name: 'Northern Sami', nativeName: 'Davvisámegiella' },
  { code: 'sm', name: 'Samoan', nativeName: 'gagana faa Samoa' },
  { code: 'sg', name: 'Sango', nativeName: 'yângâ tî sängö' },
  { code: 'sr', name: 'Serbian', nativeName: 'српски језик' },
  { code: 'gd', name: 'Scottish Gaelic; Gaelic', nativeName: 'Gàidhlig' },
  { code: 'sn', name: 'Shona', nativeName: 'chiShona' },
  { code: 'si', name: 'Sinhala, Sinhalese', nativeName: 'සිංහල' },
  { code: 'sk', name: 'Slovak', nativeName: 'slovenčina' },
  { code: 'sl', name: 'Slovene', nativeName: 'slovenščina' },
  { code: 'so', name: 'Somali', nativeName: 'Soomaaliga, af Soomaali' },
  { code: 'st', name: 'Southern Sotho', nativeName: 'Sesotho' },
  { code: 'es', name: 'Spanish; Castilian', nativeName: 'español, castellano' },
  { code: 'su', name: 'Sundanese', nativeName: 'Basa Sunda' },
  { code: 'sw', name: 'Swahili', nativeName: 'Kiswahili' },
  { code: 'ss', name: 'Swati', nativeName: 'SiSwati' },
  { code: 'sv', name: 'Swedish', nativeName: 'svenska' },
  { code: 'ta', name: 'Tamil', nativeName: 'தமிழ்' },
  { code: 'te', name: 'Telugu', nativeName: 'తెలుగు' },
  { code: 'tg', name: 'Tajik', nativeName: 'тоҷикӣ, toğikī, تاجیکی‎' },
  { code: 'th', name: 'Thai', nativeName: 'ไทย' },
  { code: 'ti', name: 'Tigrinya', nativeName: 'ትግርኛ' },
  {
    code: 'bo',
    name: 'Tibetan Standard, Tibetan, Central',
    nativeName: 'བོད་ཡིག',
  },
  { code: 'tk', name: 'Turkmen', nativeName: 'Türkmen, Түркмен' },
  { code: 'tl', name: 'Tagalog', nativeName: 'Wikang Tagalog, ᜏᜒᜃᜅ᜔ ᜆᜄᜎᜓᜄ᜔' },
  { code: 'tn', name: 'Tswana', nativeName: 'Setswana' },
  { code: 'to', name: 'Tonga (Tonga Islands)', nativeName: 'faka Tonga' },
  { code: 'tr', name: 'Turkish', nativeName: 'Türkçe' },
  { code: 'ts', name: 'Tsonga', nativeName: 'Xitsonga' },
  { code: 'tt', name: 'Tatar', nativeName: 'татарча, tatarça, تاتارچا‎' },
  { code: 'tw', name: 'Twi', nativeName: 'Twi' },
  { code: 'ty', name: 'Tahitian', nativeName: 'Reo Tahiti' },
  { code: 'ug', name: 'Uighur, Uyghur', nativeName: 'Uyƣurqə, ئۇيغۇرچە‎' },
  { code: 'uk', name: 'Ukrainian', nativeName: 'українська' },
  { code: 'ur', name: 'Urdu', nativeName: 'اردو' },
  { code: 'uz', name: 'Uzbek', nativeName: 'zbek, Ўзбек, أۇزبېك‎' },
  { code: 've', name: 'Venda', nativeName: 'Tshivenḓa' },
  { code: 'vi', name: 'Vietnamese', nativeName: 'Tiếng Việt' },
  { code: 'vo', name: 'Volapük', nativeName: 'Volapük' },
  { code: 'wa', name: 'Walloon', nativeName: 'Walon' },
  { code: 'cy', name: 'Welsh', nativeName: 'Cymraeg' },
  { code: 'wo', name: 'Wolof', nativeName: 'Wollof' },
  { code: 'fy', name: 'Western Frisian', nativeName: 'Frysk' },
  { code: 'xh', name: 'Xhosa', nativeName: 'isiXhosa' },
  { code: 'yi', name: 'Yiddish', nativeName: 'ייִדיש' },
  { code: 'yo', name: 'Yoruba', nativeName: 'Yorùbá' },
  { code: 'za', name: 'Zhuang, Chuang', nativeName: 'Saɯ cueŋƅ, Saw cuengh' },
]

export const languageDictionary = {
  ab: {
    name: 'Abkhaz',
    nativeName: 'аҧсуа',
  },
  aa: {
    name: 'Afar',
    nativeName: 'Afaraf',
  },
  af: {
    name: 'Afrikaans',
    nativeName: 'Afrikaans',
  },
  ak: {
    name: 'Akan',
    nativeName: 'Akan',
  },
  sq: {
    name: 'Albanian',
    nativeName: 'Shqip',
  },
  am: {
    name: 'Amharic',
    nativeName: 'አማርኛ',
  },
  ar: {
    name: 'Arabic',
    nativeName: 'العربية',
  },
  an: {
    name: 'Aragonese',
    nativeName: 'Aragonés',
  },
  hy: {
    name: 'Armenian',
    nativeName: 'Հայերեն',
  },
  as: {
    name: 'Assamese',
    nativeName: 'অসমীয়া',
  },
  av: {
    name: 'Avaric',
    nativeName: 'авар мацӀ, магӀарул мацӀ',
  },
  ae: {
    name: 'Avestan',
    nativeName: 'avesta',
  },
  ay: {
    name: 'Aymara',
    nativeName: 'aymar aru',
  },
  az: {
    name: 'Azerbaijani',
    nativeName: 'azərbaycan dili',
  },
  bm: {
    name: 'Bambara',
    nativeName: 'bamanankan',
  },
  ba: {
    name: 'Bashkir',
    nativeName: 'башҡорт теле',
  },
  eu: {
    name: 'Basque',
    nativeName: 'euskara, euskera',
  },
  be: {
    name: 'Belarusian',
    nativeName: 'Беларуская',
  },
  bn: {
    name: 'Bengali',
    nativeName: 'বাংলা',
  },
  bh: {
    name: 'Bihari',
    nativeName: 'भोजपुरी',
  },
  bi: {
    name: 'Bislama',
    nativeName: 'Bislama',
  },
  bs: {
    name: 'Bosnian',
    nativeName: 'bosanski jezik',
  },
  br: {
    name: 'Breton',
    nativeName: 'brezhoneg',
  },
  bg: {
    name: 'Bulgarian',
    nativeName: 'български език',
  },
  my: {
    name: 'Burmese',
    nativeName: 'ဗမာစာ',
  },
  ca: {
    name: 'Catalan; Valencian',
    nativeName: 'Català',
  },
  ch: {
    name: 'Chamorro',
    nativeName: 'Chamoru',
  },
  ce: {
    name: 'Chechen',
    nativeName: 'нохчийн мотт',
  },
  ny: {
    name: 'Chichewa; Chewa; Nyanja',
    nativeName: 'chiCheŵa, chinyanja',
  },
  zh: {
    name: 'Chinese',
    nativeName: '中文 (Zhōngwén), 汉语, 漢語',
  },
  cv: {
    name: 'Chuvash',
    nativeName: 'чӑваш чӗлхи',
  },
  kw: {
    name: 'Cornish',
    nativeName: 'Kernewek',
  },
  co: {
    name: 'Corsican',
    nativeName: 'corsu, lingua corsa',
  },
  cr: {
    name: 'Cree',
    nativeName: 'ᓀᐦᐃᔭᐍᐏᐣ',
  },
  hr: {
    name: 'Croatian',
    nativeName: 'hrvatski',
  },
  cs: {
    name: 'Czech',
    nativeName: 'česky, čeština',
  },
  da: {
    name: 'Danish',
    nativeName: 'dansk',
  },
  dv: {
    name: 'Divehi; Dhivehi; Maldivian;',
    nativeName: 'ދިވެހި',
  },
  nl: {
    name: 'Dutch',
    nativeName: 'Nederlands, Vlaams',
  },
  en: {
    name: 'English',
    nativeName: 'English',
  },
  eo: {
    name: 'Esperanto',
    nativeName: 'Esperanto',
  },
  et: {
    name: 'Estonian',
    nativeName: 'eesti, eesti keel',
  },
  ee: {
    name: 'Ewe',
    nativeName: 'Eʋegbe',
  },
  fo: {
    name: 'Faroese',
    nativeName: 'føroyskt',
  },
  fj: {
    name: 'Fijian',
    nativeName: 'vosa Vakaviti',
  },
  fi: {
    name: 'Finnish',
    nativeName: 'suomi, suomen kieli',
  },
  fr: {
    name: 'French',
    nativeName: 'français, langue française',
  },
  ff: {
    name: 'Fula; Fulah; Pulaar; Pular',
    nativeName: 'Fulfulde, Pulaar, Pular',
  },
  gl: {
    name: 'Galician',
    nativeName: 'Galego',
  },
  ka: {
    name: 'Georgian',
    nativeName: 'ქართული',
  },
  de: {
    name: 'German',
    nativeName: 'Deutsch',
  },
  el: {
    name: 'Greek, Modern',
    nativeName: 'Ελληνικά',
  },
  gn: {
    name: 'Guaraní',
    nativeName: 'Avañeẽ',
  },
  gu: {
    name: 'Gujarati',
    nativeName: 'ગુજરાતી',
  },
  ht: {
    name: 'Haitian; Haitian Creole',
    nativeName: 'Kreyòl ayisyen',
  },
  ha: {
    name: 'Hausa',
    nativeName: 'Hausa, هَوُسَ',
  },
  he: {
    name: 'Hebrew',
    nativeName: 'עברית',
  },
  iw: {
    name: 'Hebrew',
    nativeName: 'עברית',
  },
  hz: {
    name: 'Herero',
    nativeName: 'Otjiherero',
  },
  hi: {
    name: 'Hindi',
    nativeName: 'हिन्दी, हिंदी',
  },
  ho: {
    name: 'Hiri Motu',
    nativeName: 'Hiri Motu',
  },
  hu: {
    name: 'Hungarian',
    nativeName: 'Magyar',
  },
  ia: {
    name: 'Interlingua',
    nativeName: 'Interlingua',
  },
  id: {
    name: 'Indonesian',
    nativeName: 'Bahasa Indonesia',
  },
  ie: {
    name: 'Interlingue',
    nativeName: 'Originally called Occidental; then Interlingue after WWII',
  },
  ga: {
    name: 'Irish',
    nativeName: 'Gaeilge',
  },
  ig: {
    name: 'Igbo',
    nativeName: 'Asụsụ Igbo',
  },
  ik: {
    name: 'Inupiaq',
    nativeName: 'Iñupiaq, Iñupiatun',
  },
  io: {
    name: 'Ido',
    nativeName: 'Ido',
  },
  is: {
    name: 'Icelandic',
    nativeName: 'Íslenska',
  },
  it: {
    name: 'Italian',
    nativeName: 'Italiano',
  },
  iu: {
    name: 'Inuktitut',
    nativeName: 'ᐃᓄᒃᑎᑐᑦ',
  },
  ja: {
    name: 'Japanese',
    nativeName: '日本語 (にほんご／にっぽんご)',
  },
  jv: {
    name: 'Javanese',
    nativeName: 'basa Jawa',
  },
  kl: {
    name: 'Kalaallisut, Greenlandic',
    nativeName: 'kalaallisut, kalaallit oqaasii',
  },
  kn: {
    name: 'Kannada',
    nativeName: 'ಕನ್ನಡ',
  },
  kr: {
    name: 'Kanuri',
    nativeName: 'Kanuri',
  },
  ks: {
    name: 'Kashmiri',
    nativeName: 'कश्मीरी, كشميري‎',
  },
  kk: {
    name: 'Kazakh',
    nativeName: 'Қазақ тілі',
  },
  km: {
    name: 'Khmer',
    nativeName: 'ភាសាខ្មែរ',
  },
  ki: {
    name: 'Kikuyu, Gikuyu',
    nativeName: 'Gĩkũyũ',
  },
  rw: {
    name: 'Kinyarwanda',
    nativeName: 'Ikinyarwanda',
  },
  ky: {
    name: 'Kirghiz, Kyrgyz',
    nativeName: 'кыргыз тили',
  },
  kv: {
    name: 'Komi',
    nativeName: 'коми кыв',
  },
  kg: {
    name: 'Kongo',
    nativeName: 'KiKongo',
  },
  ko: {
    name: 'Korean',
    nativeName: '한국어 (韓國語), 조선말 (朝鮮語)',
  },
  ku: {
    name: 'Kurdish',
    nativeName: 'Kurdî, كوردی‎',
  },
  kj: {
    name: 'Kwanyama, Kuanyama',
    nativeName: 'Kuanyama',
  },
  la: {
    name: 'Latin',
    nativeName: 'latine, lingua latina',
  },
  lb: {
    name: 'Luxembourgish, Letzeburgesch',
    nativeName: 'Lëtzebuergesch',
  },
  lg: {
    name: 'Luganda',
    nativeName: 'Luganda',
  },
  li: {
    name: 'Limburgish, Limburgan, Limburger',
    nativeName: 'Limburgs',
  },
  ln: {
    name: 'Lingala',
    nativeName: 'Lingála',
  },
  lo: {
    name: 'Lao',
    nativeName: 'ພາສາລາວ',
  },
  lt: {
    name: 'Lithuanian',
    nativeName: 'lietuvių kalba',
  },
  lu: {
    name: 'Luba-Katanga',
    nativeName: '',
  },
  lv: {
    name: 'Latvian',
    nativeName: 'latviešu valoda',
  },
  gv: {
    name: 'Manx',
    nativeName: 'Gaelg, Gailck',
  },
  mk: {
    name: 'Macedonian',
    nativeName: 'македонски јазик',
  },
  mg: {
    name: 'Malagasy',
    nativeName: 'Malagasy fiteny',
  },
  ms: {
    name: 'Malay',
    nativeName: 'bahasa Melayu, بهاس ملايو‎',
  },
  ml: {
    name: 'Malayalam',
    nativeName: 'മലയാളം',
  },
  mt: {
    name: 'Maltese',
    nativeName: 'Malti',
  },
  mi: {
    name: 'Māori',
    nativeName: 'te reo Māori',
  },
  mr: {
    name: 'Marathi (Marāṭhī)',
    nativeName: 'मराठी',
  },
  mh: {
    name: 'Marshallese',
    nativeName: 'Kajin M̧ajeļ',
  },
  mn: {
    name: 'Mongolian',
    nativeName: 'монгол',
  },
  na: {
    name: 'Nauru',
    nativeName: 'Ekakairũ Naoero',
  },
  nv: {
    name: 'Navajo, Navaho',
    nativeName: 'Diné bizaad, Dinékʼehǰí',
  },
  nb: {
    name: 'Norwegian Bokmål',
    nativeName: 'Norsk bokmål',
  },
  nd: {
    name: 'North Ndebele',
    nativeName: 'isiNdebele',
  },
  ne: {
    name: 'Nepali',
    nativeName: 'नेपाली',
  },
  ng: {
    name: 'Ndonga',
    nativeName: 'Owambo',
  },
  nn: {
    name: 'Norwegian Nynorsk',
    nativeName: 'Norsk nynorsk',
  },
  no: {
    name: 'Norwegian',
    nativeName: 'Norsk',
  },
  ii: {
    name: 'Nuosu',
    nativeName: 'ꆈꌠ꒿ Nuosuhxop',
  },
  nr: {
    name: 'South Ndebele',
    nativeName: 'isiNdebele',
  },
  oc: {
    name: 'Occitan',
    nativeName: 'Occitan',
  },
  oj: {
    name: 'Ojibwe, Ojibwa',
    nativeName: 'ᐊᓂᔑᓈᐯᒧᐎᓐ',
  },
  cu: {
    name: 'Old Church Slavonic, Church Slavic, Church Slavonic, Old Bulgarian, Old Slavonic',
    nativeName: 'ѩзыкъ словѣньскъ',
  },
  om: {
    name: 'Oromo',
    nativeName: 'Afaan Oromoo',
  },
  or: {
    name: 'Oriya',
    nativeName: 'ଓଡ଼ିଆ',
  },
  os: {
    name: 'Ossetian, Ossetic',
    nativeName: 'ирон æвзаг',
  },
  pa: {
    name: 'Panjabi, Punjabi',
    nativeName: 'ਪੰਜਾਬੀ, پنجابی‎',
  },
  pi: {
    name: 'Pāli',
    nativeName: 'पाऴि',
  },
  fa: {
    name: 'Persian',
    nativeName: 'فارسی',
  },
  pl: {
    name: 'Polish',
    nativeName: 'polski',
  },
  ps: {
    name: 'Pashto, Pushto',
    nativeName: 'پښتو',
  },
  pt: {
    name: 'Portuguese',
    nativeName: 'Português',
  },
  qu: {
    name: 'Quechua',
    nativeName: 'Runa Simi, Kichwa',
  },
  rm: {
    name: 'Romansh',
    nativeName: 'rumantsch grischun',
  },
  rn: {
    name: 'Kirundi',
    nativeName: 'kiRundi',
  },
  ro: {
    name: 'Romanian, Moldavian, Moldovan',
    nativeName: 'română',
  },
  ru: {
    name: 'Russian',
    nativeName: 'русский язык',
  },
  sa: {
    name: 'Sanskrit (Saṁskṛta)',
    nativeName: 'संस्कृतम्',
  },
  sc: {
    name: 'Sardinian',
    nativeName: 'sardu',
  },
  sd: {
    name: 'Sindhi',
    nativeName: 'सिन्धी, سنڌي، سندھی‎',
  },
  se: {
    name: 'Northern Sami',
    nativeName: 'Davvisámegiella',
  },
  sm: {
    name: 'Samoan',
    nativeName: 'gagana faa Samoa',
  },
  sg: {
    name: 'Sango',
    nativeName: 'yângâ tî sängö',
  },
  sr: {
    name: 'Serbian',
    nativeName: 'српски језик',
  },
  gd: {
    name: 'Scottish Gaelic; Gaelic',
    nativeName: 'Gàidhlig',
  },
  sn: {
    name: 'Shona',
    nativeName: 'chiShona',
  },
  si: {
    name: 'Sinhala, Sinhalese',
    nativeName: 'සිංහල',
  },
  sk: {
    name: 'Slovak',
    nativeName: 'slovenčina',
  },
  sl: {
    name: 'Slovene',
    nativeName: 'slovenščina',
  },
  so: {
    name: 'Somali',
    nativeName: 'Soomaaliga, af Soomaali',
  },
  st: {
    name: 'Southern Sotho',
    nativeName: 'Sesotho',
  },
  es: {
    name: 'Spanish; Castilian',
    nativeName: 'español, castellano',
  },
  su: {
    name: 'Sundanese',
    nativeName: 'Basa Sunda',
  },
  sw: {
    name: 'Swahili',
    nativeName: 'Kiswahili',
  },
  ss: {
    name: 'Swati',
    nativeName: 'SiSwati',
  },
  sv: {
    name: 'Swedish',
    nativeName: 'svenska',
  },
  ta: {
    name: 'Tamil',
    nativeName: 'தமிழ்',
  },
  te: {
    name: 'Telugu',
    nativeName: 'తెలుగు',
  },
  tg: {
    name: 'Tajik',
    nativeName: 'тоҷикӣ, toğikī, تاجیکی‎',
  },
  th: {
    name: 'Thai',
    nativeName: 'ไทย',
  },
  ti: {
    name: 'Tigrinya',
    nativeName: 'ትግርኛ',
  },
  bo: {
    name: 'Tibetan Standard, Tibetan, Central',
    nativeName: 'བོད་ཡིག',
  },
  tk: {
    name: 'Turkmen',
    nativeName: 'Türkmen, Түркмен',
  },
  tl: {
    name: 'Tagalog',
    nativeName: 'Wikang Tagalog, ᜏᜒᜃᜅ᜔ ᜆᜄᜎᜓᜄ᜔',
  },
  tn: {
    name: 'Tswana',
    nativeName: 'Setswana',
  },
  to: {
    name: 'Tonga (Tonga Islands)',
    nativeName: 'faka Tonga',
  },
  tr: {
    name: 'Turkish',
    nativeName: 'Türkçe',
  },
  ts: {
    name: 'Tsonga',
    nativeName: 'Xitsonga',
  },
  tt: {
    name: 'Tatar',
    nativeName: 'татарча, tatarça, تاتارچا‎',
  },
  tw: {
    name: 'Twi',
    nativeName: 'Twi',
  },
  ty: {
    name: 'Tahitian',
    nativeName: 'Reo Tahiti',
  },
  ug: {
    name: 'Uighur, Uyghur',
    nativeName: 'Uyƣurqə, ئۇيغۇرچە‎',
  },
  uk: {
    name: 'Ukrainian',
    nativeName: 'українська',
  },
  ur: {
    name: 'Urdu',
    nativeName: 'اردو',
  },
  uz: {
    name: 'Uzbek',
    nativeName: 'zbek, Ўзбек, أۇزبېك‎',
  },
  ve: {
    name: 'Venda',
    nativeName: 'Tshivenḓa',
  },
  vi: {
    name: 'Vietnamese',
    nativeName: 'Tiếng Việt',
  },
  vo: {
    name: 'Volapük',
    nativeName: 'Volapük',
  },
  wa: {
    name: 'Walloon',
    nativeName: 'Walon',
  },
  cy: {
    name: 'Welsh',
    nativeName: 'Cymraeg',
  },
  wo: {
    name: 'Wolof',
    nativeName: 'Wollof',
  },
  fy: {
    name: 'Western Frisian',
    nativeName: 'Frysk',
  },
  xh: {
    name: 'Xhosa',
    nativeName: 'isiXhosa',
  },
  yi: {
    name: 'Yiddish',
    nativeName: 'ייִדיש',
  },
  yo: {
    name: 'Yoruba',
    nativeName: 'Yorùbá',
  },
  za: {
    name: 'Zhuang, Chuang',
    nativeName: 'Saɯ cueŋƅ, Saw cuengh',
  },
}

export const countryList = [
  {
    name: 'Ascension Island',
    code: 'AC',
    emoji: '🇦🇨',
    unicode: 'U+1F1E6 U+1F1E8',
    image:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AC.svg',
  },
  {
    name: 'Andorra',
    code: 'AD',
    emoji: '🇦🇩',
    unicode: 'U+1F1E6 U+1F1E9',
    image:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AD.svg',
  },
  {
    name: 'United Arab Emirates',
    code: 'AE',
    emoji: '🇦🇪',
    unicode: 'U+1F1E6 U+1F1EA',
    image:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AE.svg',
  },
  {
    name: 'Afghanistan',
    code: 'AF',
    emoji: '🇦🇫',
    unicode: 'U+1F1E6 U+1F1EB',
    image:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AF.svg',
  },
  {
    name: 'Antigua & Barbuda',
    code: 'AG',
    emoji: '🇦🇬',
    unicode: 'U+1F1E6 U+1F1EC',
    image:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AG.svg',
  },
  {
    name: 'Anguilla',
    code: 'AI',
    emoji: '🇦🇮',
    unicode: 'U+1F1E6 U+1F1EE',
    image:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AI.svg',
  },
  {
    name: 'Albania',
    code: 'AL',
    emoji: '🇦🇱',
    unicode: 'U+1F1E6 U+1F1F1',
    image:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AL.svg',
  },
  {
    name: 'Armenia',
    code: 'AM',
    emoji: '🇦🇲',
    unicode: 'U+1F1E6 U+1F1F2',
    image:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AM.svg',
  },
  {
    name: 'Angola',
    code: 'AO',
    emoji: '🇦🇴',
    unicode: 'U+1F1E6 U+1F1F4',
    image:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AO.svg',
  },
  {
    name: 'Antarctica',
    code: 'AQ',
    emoji: '🇦🇶',
    unicode: 'U+1F1E6 U+1F1F6',
    image:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AQ.svg',
  },
  {
    name: 'Argentina',
    code: 'AR',
    emoji: '🇦🇷',
    unicode: 'U+1F1E6 U+1F1F7',
    image:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AR.svg',
  },
  {
    name: 'American Samoa',
    code: 'AS',
    emoji: '🇦🇸',
    unicode: 'U+1F1E6 U+1F1F8',
    image:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AS.svg',
  },
  {
    name: 'Austria',
    code: 'AT',
    emoji: '🇦🇹',
    unicode: 'U+1F1E6 U+1F1F9',
    image:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AT.svg',
  },
  {
    name: 'Australia',
    code: 'AU',
    emoji: '🇦🇺',
    unicode: 'U+1F1E6 U+1F1FA',
    image:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AU.svg',
  },
  {
    name: 'Aruba',
    code: 'AW',
    emoji: '🇦🇼',
    unicode: 'U+1F1E6 U+1F1FC',
    image:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AW.svg',
  },
  {
    name: 'Åland Islands',
    code: 'AX',
    emoji: '🇦🇽',
    unicode: 'U+1F1E6 U+1F1FD',
    image:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AX.svg',
  },
  {
    name: 'Azerbaijan',
    code: 'AZ',
    emoji: '🇦🇿',
    unicode: 'U+1F1E6 U+1F1FF',
    image:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AZ.svg',
  },
  {
    name: 'Bosnia & Herzegovina',
    code: 'BA',
    emoji: '🇧🇦',
    unicode: 'U+1F1E7 U+1F1E6',
    image:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BA.svg',
  },
  {
    name: 'Barbados',
    code: 'BB',
    emoji: '🇧🇧',
    unicode: 'U+1F1E7 U+1F1E7',
    image:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BB.svg',
  },
  {
    name: 'Bangladesh',
    code: 'BD',
    emoji: '🇧🇩',
    unicode: 'U+1F1E7 U+1F1E9',
    image:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BD.svg',
  },
  {
    name: 'Belgium',
    code: 'BE',
    emoji: '🇧🇪',
    unicode: 'U+1F1E7 U+1F1EA',
    image:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BE.svg',
  },
  {
    name: 'Burkina Faso',
    code: 'BF',
    emoji: '🇧🇫',
    unicode: 'U+1F1E7 U+1F1EB',
    image:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BF.svg',
  },
  {
    name: 'Bulgaria',
    code: 'BG',
    emoji: '🇧🇬',
    unicode: 'U+1F1E7 U+1F1EC',
    image:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BG.svg',
  },
  {
    name: 'Bahrain',
    code: 'BH',
    emoji: '🇧🇭',
    unicode: 'U+1F1E7 U+1F1ED',
    image:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BH.svg',
  },
  {
    name: 'Burundi',
    code: 'BI',
    emoji: '🇧🇮',
    unicode: 'U+1F1E7 U+1F1EE',
    image:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BI.svg',
  },
  {
    name: 'Benin',
    code: 'BJ',
    emoji: '🇧🇯',
    unicode: 'U+1F1E7 U+1F1EF',
    image:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BJ.svg',
  },
  {
    name: 'St. Barthélemy',
    code: 'BL',
    emoji: '🇧🇱',
    unicode: 'U+1F1E7 U+1F1F1',
    image:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BL.svg',
  },
  {
    name: 'Bermuda',
    code: 'BM',
    emoji: '🇧🇲',
    unicode: 'U+1F1E7 U+1F1F2',
    image:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BM.svg',
  },
  {
    name: 'Brunei',
    code: 'BN',
    emoji: '🇧🇳',
    unicode: 'U+1F1E7 U+1F1F3',
    image:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BN.svg',
  },
  {
    name: 'Bolivia',
    code: 'BO',
    emoji: '🇧🇴',
    unicode: 'U+1F1E7 U+1F1F4',
    image:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BO.svg',
  },
  {
    name: 'Caribbean Netherlands',
    code: 'BQ',
    emoji: '🇧🇶',
    unicode: 'U+1F1E7 U+1F1F6',
    image:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BQ.svg',
  },
  {
    name: 'Brazil',
    code: 'BR',
    emoji: '🇧🇷',
    unicode: 'U+1F1E7 U+1F1F7',
    image:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BR.svg',
  },
  {
    name: 'Bahamas',
    code: 'BS',
    emoji: '🇧🇸',
    unicode: 'U+1F1E7 U+1F1F8',
    image:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BS.svg',
  },
  {
    name: 'Bhutan',
    code: 'BT',
    emoji: '🇧🇹',
    unicode: 'U+1F1E7 U+1F1F9',
    image:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BT.svg',
  },
  {
    name: 'Bouvet Island',
    code: 'BV',
    emoji: '🇧🇻',
    unicode: 'U+1F1E7 U+1F1FB',
    image:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BV.svg',
  },
  {
    name: 'Botswana',
    code: 'BW',
    emoji: '🇧🇼',
    unicode: 'U+1F1E7 U+1F1FC',
    image:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BW.svg',
  },
  {
    name: 'Belarus',
    code: 'BY',
    emoji: '🇧🇾',
    unicode: 'U+1F1E7 U+1F1FE',
    image:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BY.svg',
  },
  {
    name: 'Belize',
    code: 'BZ',
    emoji: '🇧🇿',
    unicode: 'U+1F1E7 U+1F1FF',
    image:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BZ.svg',
  },
  {
    name: 'Canada',
    code: 'CA',
    emoji: '🇨🇦',
    unicode: 'U+1F1E8 U+1F1E6',
    image:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CA.svg',
  },
  {
    name: 'Cocos (Keeling) Islands',
    code: 'CC',
    emoji: '🇨🇨',
    unicode: 'U+1F1E8 U+1F1E8',
    image:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CC.svg',
  },
  {
    name: 'Congo - Kinshasa',
    code: 'CD',
    emoji: '🇨🇩',
    unicode: 'U+1F1E8 U+1F1E9',
    image:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CD.svg',
  },
  {
    name: 'Central African Republic',
    code: 'CF',
    emoji: '🇨🇫',
    unicode: 'U+1F1E8 U+1F1EB',
    image:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CF.svg',
  },
  {
    name: 'Congo - Brazzaville',
    code: 'CG',
    emoji: '🇨🇬',
    unicode: 'U+1F1E8 U+1F1EC',
    image:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CG.svg',
  },
  {
    name: 'Switzerland',
    code: 'CH',
    emoji: '🇨🇭',
    unicode: 'U+1F1E8 U+1F1ED',
    image:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CH.svg',
  },
  {
    name: 'Côte d’Ivoire',
    code: 'CI',
    emoji: '🇨🇮',
    unicode: 'U+1F1E8 U+1F1EE',
    image:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CI.svg',
  },
  {
    name: 'Cook Islands',
    code: 'CK',
    emoji: '🇨🇰',
    unicode: 'U+1F1E8 U+1F1F0',
    image:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CK.svg',
  },
  {
    name: 'Chile',
    code: 'CL',
    emoji: '🇨🇱',
    unicode: 'U+1F1E8 U+1F1F1',
    image:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CL.svg',
  },
  {
    name: 'Cameroon',
    code: 'CM',
    emoji: '🇨🇲',
    unicode: 'U+1F1E8 U+1F1F2',
    image:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CM.svg',
  },
  {
    name: 'China',
    code: 'CN',
    emoji: '🇨🇳',
    unicode: 'U+1F1E8 U+1F1F3',
    image:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CN.svg',
  },
  {
    name: 'Colombia',
    code: 'CO',
    emoji: '🇨🇴',
    unicode: 'U+1F1E8 U+1F1F4',
    image:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CO.svg',
  },
  {
    name: 'Clipperton Island',
    code: 'CP',
    emoji: '🇨🇵',
    unicode: 'U+1F1E8 U+1F1F5',
    image:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CP.svg',
  },
  {
    name: 'Costa Rica',
    code: 'CR',
    emoji: '🇨🇷',
    unicode: 'U+1F1E8 U+1F1F7',
    image:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CR.svg',
  },
  {
    name: 'Cuba',
    code: 'CU',
    emoji: '🇨🇺',
    unicode: 'U+1F1E8 U+1F1FA',
    image:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CU.svg',
  },
  {
    name: 'Cape Verde',
    code: 'CV',
    emoji: '🇨🇻',
    unicode: 'U+1F1E8 U+1F1FB',
    image:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CV.svg',
  },
  {
    name: 'Curaçao',
    code: 'CW',
    emoji: '🇨🇼',
    unicode: 'U+1F1E8 U+1F1FC',
    image:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CW.svg',
  },
  {
    name: 'Christmas Island',
    code: 'CX',
    emoji: '🇨🇽',
    unicode: 'U+1F1E8 U+1F1FD',
    image:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CX.svg',
  },
  {
    name: 'Cyprus',
    code: 'CY',
    emoji: '🇨🇾',
    unicode: 'U+1F1E8 U+1F1FE',
    image:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CY.svg',
  },
  {
    name: 'Czechia',
    code: 'CZ',
    emoji: '🇨🇿',
    unicode: 'U+1F1E8 U+1F1FF',
    image:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CZ.svg',
  },
  {
    name: 'Germany',
    code: 'DE',
    emoji: '🇩🇪',
    unicode: 'U+1F1E9 U+1F1EA',
    image:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/DE.svg',
  },
  {
    name: 'Diego Garcia',
    code: 'DG',
    emoji: '🇩🇬',
    unicode: 'U+1F1E9 U+1F1EC',
    image:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/DG.svg',
  },
  {
    name: 'Djibouti',
    code: 'DJ',
    emoji: '🇩🇯',
    unicode: 'U+1F1E9 U+1F1EF',
    image:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/DJ.svg',
  },
  {
    name: 'Denmark',
    code: 'DK',
    emoji: '🇩🇰',
    unicode: 'U+1F1E9 U+1F1F0',
    image:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/DK.svg',
  },
  {
    name: 'Dominica',
    code: 'DM',
    emoji: '🇩🇲',
    unicode: 'U+1F1E9 U+1F1F2',
    image:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/DM.svg',
  },
  {
    name: 'Dominican Republic',
    code: 'DO',
    emoji: '🇩🇴',
    unicode: 'U+1F1E9 U+1F1F4',
    image:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/DO.svg',
  },
  {
    name: 'Algeria',
    code: 'DZ',
    emoji: '🇩🇿',
    unicode: 'U+1F1E9 U+1F1FF',
    image:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/DZ.svg',
  },
  {
    name: 'Ceuta & Melilla',
    code: 'EA',
    emoji: '🇪🇦',
    unicode: 'U+1F1EA U+1F1E6',
    image:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/EA.svg',
  },
  {
    name: 'Ecuador',
    code: 'EC',
    emoji: '🇪🇨',
    unicode: 'U+1F1EA U+1F1E8',
    image:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/EC.svg',
  },
  {
    name: 'Estonia',
    code: 'EE',
    emoji: '🇪🇪',
    unicode: 'U+1F1EA U+1F1EA',
    image:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/EE.svg',
  },
  {
    name: 'Egypt',
    code: 'EG',
    emoji: '🇪🇬',
    unicode: 'U+1F1EA U+1F1EC',
    image:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/EG.svg',
  },
  {
    name: 'Western Sahara',
    code: 'EH',
    emoji: '🇪🇭',
    unicode: 'U+1F1EA U+1F1ED',
    image:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/EH.svg',
  },
  {
    name: 'Eritrea',
    code: 'ER',
    emoji: '🇪🇷',
    unicode: 'U+1F1EA U+1F1F7',
    image:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/ER.svg',
  },
  {
    name: 'Spain',
    code: 'ES',
    emoji: '🇪🇸',
    unicode: 'U+1F1EA U+1F1F8',
    image:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/ES.svg',
  },
  {
    name: 'Ethiopia',
    code: 'ET',
    emoji: '🇪🇹',
    unicode: 'U+1F1EA U+1F1F9',
    image:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/ET.svg',
  },
  {
    name: 'European Union',
    code: 'EU',
    emoji: '🇪🇺',
    unicode: 'U+1F1EA U+1F1FA',
    image:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/EU.svg',
  },
  {
    name: 'Finland',
    code: 'FI',
    emoji: '🇫🇮',
    unicode: 'U+1F1EB U+1F1EE',
    image:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/FI.svg',
  },
  {
    name: 'Fiji',
    code: 'FJ',
    emoji: '🇫🇯',
    unicode: 'U+1F1EB U+1F1EF',
    image:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/FJ.svg',
  },
  {
    name: 'Falkland Islands',
    code: 'FK',
    emoji: '🇫🇰',
    unicode: 'U+1F1EB U+1F1F0',
    image:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/FK.svg',
  },
  {
    name: 'Micronesia',
    code: 'FM',
    emoji: '🇫🇲',
    unicode: 'U+1F1EB U+1F1F2',
    image:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/FM.svg',
  },
  {
    name: 'Faroe Islands',
    code: 'FO',
    emoji: '🇫🇴',
    unicode: 'U+1F1EB U+1F1F4',
    image:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/FO.svg',
  },
  {
    name: 'France',
    code: 'FR',
    emoji: '🇫🇷',
    unicode: 'U+1F1EB U+1F1F7',
    image:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/FR.svg',
  },
  {
    name: 'Gabon',
    code: 'GA',
    emoji: '🇬🇦',
    unicode: 'U+1F1EC U+1F1E6',
    image:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GA.svg',
  },
  {
    name: 'United Kingdom',
    code: 'GB',
    emoji: '🇬🇧',
    unicode: 'U+1F1EC U+1F1E7',
    image:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GB.svg',
  },
  {
    name: 'Grenada',
    code: 'GD',
    emoji: '🇬🇩',
    unicode: 'U+1F1EC U+1F1E9',
    image:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GD.svg',
  },
  {
    name: 'Georgia',
    code: 'GE',
    emoji: '🇬🇪',
    unicode: 'U+1F1EC U+1F1EA',
    image:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GE.svg',
  },
  {
    name: 'French Guiana',
    code: 'GF',
    emoji: '🇬🇫',
    unicode: 'U+1F1EC U+1F1EB',
    image:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GF.svg',
  },
  {
    name: 'Guernsey',
    code: 'GG',
    emoji: '🇬🇬',
    unicode: 'U+1F1EC U+1F1EC',
    image:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GG.svg',
  },
  {
    name: 'Ghana',
    code: 'GH',
    emoji: '🇬🇭',
    unicode: 'U+1F1EC U+1F1ED',
    image:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GH.svg',
  },
  {
    name: 'Gibraltar',
    code: 'GI',
    emoji: '🇬🇮',
    unicode: 'U+1F1EC U+1F1EE',
    image:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GI.svg',
  },
  {
    name: 'Greenland',
    code: 'GL',
    emoji: '🇬🇱',
    unicode: 'U+1F1EC U+1F1F1',
    image:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GL.svg',
  },
  {
    name: 'Gambia',
    code: 'GM',
    emoji: '🇬🇲',
    unicode: 'U+1F1EC U+1F1F2',
    image:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GM.svg',
  },
  {
    name: 'Guinea',
    code: 'GN',
    emoji: '🇬🇳',
    unicode: 'U+1F1EC U+1F1F3',
    image:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GN.svg',
  },
  {
    name: 'Guadeloupe',
    code: 'GP',
    emoji: '🇬🇵',
    unicode: 'U+1F1EC U+1F1F5',
    image:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GP.svg',
  },
  {
    name: 'Equatorial Guinea',
    code: 'GQ',
    emoji: '🇬🇶',
    unicode: 'U+1F1EC U+1F1F6',
    image:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GQ.svg',
  },
  {
    name: 'Greece',
    code: 'GR',
    emoji: '🇬🇷',
    unicode: 'U+1F1EC U+1F1F7',
    image:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GR.svg',
  },
  {
    name: 'South Georgia & South Sandwich Islands',
    code: 'GS',
    emoji: '🇬🇸',
    unicode: 'U+1F1EC U+1F1F8',
    image:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GS.svg',
  },
  {
    name: 'Guatemala',
    code: 'GT',
    emoji: '🇬🇹',
    unicode: 'U+1F1EC U+1F1F9',
    image:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GT.svg',
  },
  {
    name: 'Guam',
    code: 'GU',
    emoji: '🇬🇺',
    unicode: 'U+1F1EC U+1F1FA',
    image:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GU.svg',
  },
  {
    name: 'Guinea-Bissau',
    code: 'GW',
    emoji: '🇬🇼',
    unicode: 'U+1F1EC U+1F1FC',
    image:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GW.svg',
  },
  {
    name: 'Guyana',
    code: 'GY',
    emoji: '🇬🇾',
    unicode: 'U+1F1EC U+1F1FE',
    image:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GY.svg',
  },
  {
    name: 'Hong Kong SAR China',
    code: 'HK',
    emoji: '🇭🇰',
    unicode: 'U+1F1ED U+1F1F0',
    image:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/HK.svg',
  },
  {
    name: 'Heard & McDonald Islands',
    code: 'HM',
    emoji: '🇭🇲',
    unicode: 'U+1F1ED U+1F1F2',
    image:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/HM.svg',
  },
  {
    name: 'Honduras',
    code: 'HN',
    emoji: '🇭🇳',
    unicode: 'U+1F1ED U+1F1F3',
    image:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/HN.svg',
  },
  {
    name: 'Croatia',
    code: 'HR',
    emoji: '🇭🇷',
    unicode: 'U+1F1ED U+1F1F7',
    image:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/HR.svg',
  },
  {
    name: 'Haiti',
    code: 'HT',
    emoji: '🇭🇹',
    unicode: 'U+1F1ED U+1F1F9',
    image:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/HT.svg',
  },
  {
    name: 'Hungary',
    code: 'HU',
    emoji: '🇭🇺',
    unicode: 'U+1F1ED U+1F1FA',
    image:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/HU.svg',
  },
  {
    name: 'Canary Islands',
    code: 'IC',
    emoji: '🇮🇨',
    unicode: 'U+1F1EE U+1F1E8',
    image:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/IC.svg',
  },
  {
    name: 'Indonesia',
    code: 'ID',
    emoji: '🇮🇩',
    unicode: 'U+1F1EE U+1F1E9',
    image:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/ID.svg',
  },
  {
    name: 'Ireland',
    code: 'IE',
    emoji: '🇮🇪',
    unicode: 'U+1F1EE U+1F1EA',
    image:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/IE.svg',
  },
  {
    name: 'Israel',
    code: 'IL',
    emoji: '🇮🇱',
    unicode: 'U+1F1EE U+1F1F1',
    image:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/IL.svg',
  },
  {
    name: 'Isle of Man',
    code: 'IM',
    emoji: '🇮🇲',
    unicode: 'U+1F1EE U+1F1F2',
    image:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/IM.svg',
  },
  {
    name: 'India',
    code: 'IN',
    emoji: '🇮🇳',
    unicode: 'U+1F1EE U+1F1F3',
    image:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/IN.svg',
  },
  {
    name: 'British Indian Ocean Territory',
    code: 'IO',
    emoji: '🇮🇴',
    unicode: 'U+1F1EE U+1F1F4',
    image:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/IO.svg',
  },
  {
    name: 'Iraq',
    code: 'IQ',
    emoji: '🇮🇶',
    unicode: 'U+1F1EE U+1F1F6',
    image:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/IQ.svg',
  },
  {
    name: 'Iran',
    code: 'IR',
    emoji: '🇮🇷',
    unicode: 'U+1F1EE U+1F1F7',
    image:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/IR.svg',
  },
  {
    name: 'Iceland',
    code: 'IS',
    emoji: '🇮🇸',
    unicode: 'U+1F1EE U+1F1F8',
    image:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/IS.svg',
  },
  {
    name: 'Italy',
    code: 'IT',
    emoji: '🇮🇹',
    unicode: 'U+1F1EE U+1F1F9',
    image:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/IT.svg',
  },
  {
    name: 'Jersey',
    code: 'JE',
    emoji: '🇯🇪',
    unicode: 'U+1F1EF U+1F1EA',
    image:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/JE.svg',
  },
  {
    name: 'Jamaica',
    code: 'JM',
    emoji: '🇯🇲',
    unicode: 'U+1F1EF U+1F1F2',
    image:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/JM.svg',
  },
  {
    name: 'Jordan',
    code: 'JO',
    emoji: '🇯🇴',
    unicode: 'U+1F1EF U+1F1F4',
    image:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/JO.svg',
  },
  {
    name: 'Japan',
    code: 'JP',
    emoji: '🇯🇵',
    unicode: 'U+1F1EF U+1F1F5',
    image:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/JP.svg',
  },
  {
    name: 'Kenya',
    code: 'KE',
    emoji: '🇰🇪',
    unicode: 'U+1F1F0 U+1F1EA',
    image:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/KE.svg',
  },
  {
    name: 'Kyrgyzstan',
    code: 'KG',
    emoji: '🇰🇬',
    unicode: 'U+1F1F0 U+1F1EC',
    image:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/KG.svg',
  },
  {
    name: 'Cambodia',
    code: 'KH',
    emoji: '🇰🇭',
    unicode: 'U+1F1F0 U+1F1ED',
    image:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/KH.svg',
  },
  {
    name: 'Kiribati',
    code: 'KI',
    emoji: '🇰🇮',
    unicode: 'U+1F1F0 U+1F1EE',
    image:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/KI.svg',
  },
  {
    name: 'Comoros',
    code: 'KM',
    emoji: '🇰🇲',
    unicode: 'U+1F1F0 U+1F1F2',
    image:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/KM.svg',
  },
  {
    name: 'St. Kitts & Nevis',
    code: 'KN',
    emoji: '🇰🇳',
    unicode: 'U+1F1F0 U+1F1F3',
    image:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/KN.svg',
  },
  {
    name: 'North Korea',
    code: 'KP',
    emoji: '🇰🇵',
    unicode: 'U+1F1F0 U+1F1F5',
    image:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/KP.svg',
  },
  {
    name: 'South Korea',
    code: 'KR',
    emoji: '🇰🇷',
    unicode: 'U+1F1F0 U+1F1F7',
    image:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/KR.svg',
  },
  {
    name: 'Kuwait',
    code: 'KW',
    emoji: '🇰🇼',
    unicode: 'U+1F1F0 U+1F1FC',
    image:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/KW.svg',
  },
  {
    name: 'Cayman Islands',
    code: 'KY',
    emoji: '🇰🇾',
    unicode: 'U+1F1F0 U+1F1FE',
    image:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/KY.svg',
  },
  {
    name: 'Kazakhstan',
    code: 'KZ',
    emoji: '🇰🇿',
    unicode: 'U+1F1F0 U+1F1FF',
    image:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/KZ.svg',
  },
  {
    name: 'Laos',
    code: 'LA',
    emoji: '🇱🇦',
    unicode: 'U+1F1F1 U+1F1E6',
    image:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/LA.svg',
  },
  {
    name: 'Lebanon',
    code: 'LB',
    emoji: '🇱🇧',
    unicode: 'U+1F1F1 U+1F1E7',
    image:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/LB.svg',
  },
  {
    name: 'St. Lucia',
    code: 'LC',
    emoji: '🇱🇨',
    unicode: 'U+1F1F1 U+1F1E8',
    image:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/LC.svg',
  },
  {
    name: 'Liechtenstein',
    code: 'LI',
    emoji: '🇱🇮',
    unicode: 'U+1F1F1 U+1F1EE',
    image:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/LI.svg',
  },
  {
    name: 'Sri Lanka',
    code: 'LK',
    emoji: '🇱🇰',
    unicode: 'U+1F1F1 U+1F1F0',
    image:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/LK.svg',
  },
  {
    name: 'Liberia',
    code: 'LR',
    emoji: '🇱🇷',
    unicode: 'U+1F1F1 U+1F1F7',
    image:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/LR.svg',
  },
  {
    name: 'Lesotho',
    code: 'LS',
    emoji: '🇱🇸',
    unicode: 'U+1F1F1 U+1F1F8',
    image:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/LS.svg',
  },
  {
    name: 'Lithuania',
    code: 'LT',
    emoji: '🇱🇹',
    unicode: 'U+1F1F1 U+1F1F9',
    image:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/LT.svg',
  },
  {
    name: 'Luxembourg',
    code: 'LU',
    emoji: '🇱🇺',
    unicode: 'U+1F1F1 U+1F1FA',
    image:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/LU.svg',
  },
  {
    name: 'Latvia',
    code: 'LV',
    emoji: '🇱🇻',
    unicode: 'U+1F1F1 U+1F1FB',
    image:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/LV.svg',
  },
  {
    name: 'Libya',
    code: 'LY',
    emoji: '🇱🇾',
    unicode: 'U+1F1F1 U+1F1FE',
    image:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/LY.svg',
  },
  {
    name: 'Morocco',
    code: 'MA',
    emoji: '🇲🇦',
    unicode: 'U+1F1F2 U+1F1E6',
    image:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MA.svg',
  },
  {
    name: 'Monaco',
    code: 'MC',
    emoji: '🇲🇨',
    unicode: 'U+1F1F2 U+1F1E8',
    image:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MC.svg',
  },
  {
    name: 'Moldova',
    code: 'MD',
    emoji: '🇲🇩',
    unicode: 'U+1F1F2 U+1F1E9',
    image:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MD.svg',
  },
  {
    name: 'Montenegro',
    code: 'ME',
    emoji: '🇲🇪',
    unicode: 'U+1F1F2 U+1F1EA',
    image:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/ME.svg',
  },
  {
    name: 'St. Martin',
    code: 'MF',
    emoji: '🇲🇫',
    unicode: 'U+1F1F2 U+1F1EB',
    image:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MF.svg',
  },
  {
    name: 'Madagascar',
    code: 'MG',
    emoji: '🇲🇬',
    unicode: 'U+1F1F2 U+1F1EC',
    image:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MG.svg',
  },
  {
    name: 'Marshall Islands',
    code: 'MH',
    emoji: '🇲🇭',
    unicode: 'U+1F1F2 U+1F1ED',
    image:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MH.svg',
  },
  {
    name: 'North Macedonia',
    code: 'MK',
    emoji: '🇲🇰',
    unicode: 'U+1F1F2 U+1F1F0',
    image:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MK.svg',
  },
  {
    name: 'Mali',
    code: 'ML',
    emoji: '🇲🇱',
    unicode: 'U+1F1F2 U+1F1F1',
    image:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/ML.svg',
  },
  {
    name: 'Myanmar (Burma)',
    code: 'MM',
    emoji: '🇲🇲',
    unicode: 'U+1F1F2 U+1F1F2',
    image:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MM.svg',
  },
  {
    name: 'Mongolia',
    code: 'MN',
    emoji: '🇲🇳',
    unicode: 'U+1F1F2 U+1F1F3',
    image:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MN.svg',
  },
  {
    name: 'Macao SAR China',
    code: 'MO',
    emoji: '🇲🇴',
    unicode: 'U+1F1F2 U+1F1F4',
    image:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MO.svg',
  },
  {
    name: 'Northern Mariana Islands',
    code: 'MP',
    emoji: '🇲🇵',
    unicode: 'U+1F1F2 U+1F1F5',
    image:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MP.svg',
  },
  {
    name: 'Martinique',
    code: 'MQ',
    emoji: '🇲🇶',
    unicode: 'U+1F1F2 U+1F1F6',
    image:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MQ.svg',
  },
  {
    name: 'Mauritania',
    code: 'MR',
    emoji: '🇲🇷',
    unicode: 'U+1F1F2 U+1F1F7',
    image:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MR.svg',
  },
  {
    name: 'Montserrat',
    code: 'MS',
    emoji: '🇲🇸',
    unicode: 'U+1F1F2 U+1F1F8',
    image:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MS.svg',
  },
  {
    name: 'Malta',
    code: 'MT',
    emoji: '🇲🇹',
    unicode: 'U+1F1F2 U+1F1F9',
    image:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MT.svg',
  },
  {
    name: 'Mauritius',
    code: 'MU',
    emoji: '🇲🇺',
    unicode: 'U+1F1F2 U+1F1FA',
    image:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MU.svg',
  },
  {
    name: 'Maldives',
    code: 'MV',
    emoji: '🇲🇻',
    unicode: 'U+1F1F2 U+1F1FB',
    image:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MV.svg',
  },
  {
    name: 'Malawi',
    code: 'MW',
    emoji: '🇲🇼',
    unicode: 'U+1F1F2 U+1F1FC',
    image:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MW.svg',
  },
  {
    name: 'Mexico',
    code: 'MX',
    emoji: '🇲🇽',
    unicode: 'U+1F1F2 U+1F1FD',
    image:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MX.svg',
  },
  {
    name: 'Malaysia',
    code: 'MY',
    emoji: '🇲🇾',
    unicode: 'U+1F1F2 U+1F1FE',
    image:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MY.svg',
  },
  {
    name: 'Mozambique',
    code: 'MZ',
    emoji: '🇲🇿',
    unicode: 'U+1F1F2 U+1F1FF',
    image:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MZ.svg',
  },
  {
    name: 'Namibia',
    code: 'NA',
    emoji: '🇳🇦',
    unicode: 'U+1F1F3 U+1F1E6',
    image:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/NA.svg',
  },
  {
    name: 'New Caledonia',
    code: 'NC',
    emoji: '🇳🇨',
    unicode: 'U+1F1F3 U+1F1E8',
    image:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/NC.svg',
  },
  {
    name: 'Niger',
    code: 'NE',
    emoji: '🇳🇪',
    unicode: 'U+1F1F3 U+1F1EA',
    image:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/NE.svg',
  },
  {
    name: 'Norfolk Island',
    code: 'NF',
    emoji: '🇳🇫',
    unicode: 'U+1F1F3 U+1F1EB',
    image:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/NF.svg',
  },
  {
    name: 'Nigeria',
    code: 'NG',
    emoji: '🇳🇬',
    unicode: 'U+1F1F3 U+1F1EC',
    image:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/NG.svg',
  },
  {
    name: 'Nicaragua',
    code: 'NI',
    emoji: '🇳🇮',
    unicode: 'U+1F1F3 U+1F1EE',
    image:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/NI.svg',
  },
  {
    name: 'Netherlands',
    code: 'NL',
    emoji: '🇳🇱',
    unicode: 'U+1F1F3 U+1F1F1',
    image:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/NL.svg',
  },
  {
    name: 'Norway',
    code: 'NO',
    emoji: '🇳🇴',
    unicode: 'U+1F1F3 U+1F1F4',
    image:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/NO.svg',
  },
  {
    name: 'Nepal',
    code: 'NP',
    emoji: '🇳🇵',
    unicode: 'U+1F1F3 U+1F1F5',
    image:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/NP.svg',
  },
  {
    name: 'Nauru',
    code: 'NR',
    emoji: '🇳🇷',
    unicode: 'U+1F1F3 U+1F1F7',
    image:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/NR.svg',
  },
  {
    name: 'Niue',
    code: 'NU',
    emoji: '🇳🇺',
    unicode: 'U+1F1F3 U+1F1FA',
    image:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/NU.svg',
  },
  {
    name: 'New Zealand',
    code: 'NZ',
    emoji: '🇳🇿',
    unicode: 'U+1F1F3 U+1F1FF',
    image:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/NZ.svg',
  },
  {
    name: 'Oman',
    code: 'OM',
    emoji: '🇴🇲',
    unicode: 'U+1F1F4 U+1F1F2',
    image:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/OM.svg',
  },
  {
    name: 'Panama',
    code: 'PA',
    emoji: '🇵🇦',
    unicode: 'U+1F1F5 U+1F1E6',
    image:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PA.svg',
  },
  {
    name: 'Peru',
    code: 'PE',
    emoji: '🇵🇪',
    unicode: 'U+1F1F5 U+1F1EA',
    image:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PE.svg',
  },
  {
    name: 'French Polynesia',
    code: 'PF',
    emoji: '🇵🇫',
    unicode: 'U+1F1F5 U+1F1EB',
    image:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PF.svg',
  },
  {
    name: 'Papua New Guinea',
    code: 'PG',
    emoji: '🇵🇬',
    unicode: 'U+1F1F5 U+1F1EC',
    image:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PG.svg',
  },
  {
    name: 'Philippines',
    code: 'PH',
    emoji: '🇵🇭',
    unicode: 'U+1F1F5 U+1F1ED',
    image:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PH.svg',
  },
  {
    name: 'Pakistan',
    code: 'PK',
    emoji: '🇵🇰',
    unicode: 'U+1F1F5 U+1F1F0',
    image:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PK.svg',
  },
  {
    name: 'Poland',
    code: 'PL',
    emoji: '🇵🇱',
    unicode: 'U+1F1F5 U+1F1F1',
    image:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PL.svg',
  },
  {
    name: 'St. Pierre & Miquelon',
    code: 'PM',
    emoji: '🇵🇲',
    unicode: 'U+1F1F5 U+1F1F2',
    image:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PM.svg',
  },
  {
    name: 'Pitcairn Islands',
    code: 'PN',
    emoji: '🇵🇳',
    unicode: 'U+1F1F5 U+1F1F3',
    image:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PN.svg',
  },
  {
    name: 'Puerto Rico',
    code: 'PR',
    emoji: '🇵🇷',
    unicode: 'U+1F1F5 U+1F1F7',
    image:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PR.svg',
  },
  {
    name: 'Palestinian Territories',
    code: 'PS',
    emoji: '🇵🇸',
    unicode: 'U+1F1F5 U+1F1F8',
    image:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PS.svg',
  },
  {
    name: 'Portugal',
    code: 'PT',
    emoji: '🇵🇹',
    unicode: 'U+1F1F5 U+1F1F9',
    image:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PT.svg',
  },
  {
    name: 'Palau',
    code: 'PW',
    emoji: '🇵🇼',
    unicode: 'U+1F1F5 U+1F1FC',
    image:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PW.svg',
  },
  {
    name: 'Paraguay',
    code: 'PY',
    emoji: '🇵🇾',
    unicode: 'U+1F1F5 U+1F1FE',
    image:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PY.svg',
  },
  {
    name: 'Qatar',
    code: 'QA',
    emoji: '🇶🇦',
    unicode: 'U+1F1F6 U+1F1E6',
    image:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/QA.svg',
  },
  {
    name: 'Réunion',
    code: 'RE',
    emoji: '🇷🇪',
    unicode: 'U+1F1F7 U+1F1EA',
    image:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/RE.svg',
  },
  {
    name: 'Romania',
    code: 'RO',
    emoji: '🇷🇴',
    unicode: 'U+1F1F7 U+1F1F4',
    image:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/RO.svg',
  },
  {
    name: 'Serbia',
    code: 'RS',
    emoji: '🇷🇸',
    unicode: 'U+1F1F7 U+1F1F8',
    image:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/RS.svg',
  },
  {
    name: 'Russia',
    code: 'RU',
    emoji: '🇷🇺',
    unicode: 'U+1F1F7 U+1F1FA',
    image:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/RU.svg',
  },
  {
    name: 'Rwanda',
    code: 'RW',
    emoji: '🇷🇼',
    unicode: 'U+1F1F7 U+1F1FC',
    image:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/RW.svg',
  },
  {
    name: 'Saudi Arabia',
    code: 'SA',
    emoji: '🇸🇦',
    unicode: 'U+1F1F8 U+1F1E6',
    image:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SA.svg',
  },
  {
    name: 'Solomon Islands',
    code: 'SB',
    emoji: '🇸🇧',
    unicode: 'U+1F1F8 U+1F1E7',
    image:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SB.svg',
  },
  {
    name: 'Seychelles',
    code: 'SC',
    emoji: '🇸🇨',
    unicode: 'U+1F1F8 U+1F1E8',
    image:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SC.svg',
  },
  {
    name: 'Sudan',
    code: 'SD',
    emoji: '🇸🇩',
    unicode: 'U+1F1F8 U+1F1E9',
    image:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SD.svg',
  },
  {
    name: 'Sweden',
    code: 'SE',
    emoji: '🇸🇪',
    unicode: 'U+1F1F8 U+1F1EA',
    image:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SE.svg',
  },
  {
    name: 'Singapore',
    code: 'SG',
    emoji: '🇸🇬',
    unicode: 'U+1F1F8 U+1F1EC',
    image:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SG.svg',
  },
  {
    name: 'St. Helena',
    code: 'SH',
    emoji: '🇸🇭',
    unicode: 'U+1F1F8 U+1F1ED',
    image:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SH.svg',
  },
  {
    name: 'Slovenia',
    code: 'SI',
    emoji: '🇸🇮',
    unicode: 'U+1F1F8 U+1F1EE',
    image:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SI.svg',
  },
  {
    name: 'Svalbard & Jan Mayen',
    code: 'SJ',
    emoji: '🇸🇯',
    unicode: 'U+1F1F8 U+1F1EF',
    image:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SJ.svg',
  },
  {
    name: 'Slovakia',
    code: 'SK',
    emoji: '🇸🇰',
    unicode: 'U+1F1F8 U+1F1F0',
    image:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SK.svg',
  },
  {
    name: 'Sierra Leone',
    code: 'SL',
    emoji: '🇸🇱',
    unicode: 'U+1F1F8 U+1F1F1',
    image:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SL.svg',
  },
  {
    name: 'San Marino',
    code: 'SM',
    emoji: '🇸🇲',
    unicode: 'U+1F1F8 U+1F1F2',
    image:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SM.svg',
  },
  {
    name: 'Senegal',
    code: 'SN',
    emoji: '🇸🇳',
    unicode: 'U+1F1F8 U+1F1F3',
    image:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SN.svg',
  },
  {
    name: 'Somalia',
    code: 'SO',
    emoji: '🇸🇴',
    unicode: 'U+1F1F8 U+1F1F4',
    image:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SO.svg',
  },
  {
    name: 'Suriname',
    code: 'SR',
    emoji: '🇸🇷',
    unicode: 'U+1F1F8 U+1F1F7',
    image:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SR.svg',
  },
  {
    name: 'South Sudan',
    code: 'SS',
    emoji: '🇸🇸',
    unicode: 'U+1F1F8 U+1F1F8',
    image:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SS.svg',
  },
  {
    name: 'São Tomé & Príncipe',
    code: 'ST',
    emoji: '🇸🇹',
    unicode: 'U+1F1F8 U+1F1F9',
    image:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/ST.svg',
  },
  {
    name: 'El Salvador',
    code: 'SV',
    emoji: '🇸🇻',
    unicode: 'U+1F1F8 U+1F1FB',
    image:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SV.svg',
  },
  {
    name: 'Sint Maarten',
    code: 'SX',
    emoji: '🇸🇽',
    unicode: 'U+1F1F8 U+1F1FD',
    image:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SX.svg',
  },
  {
    name: 'Syria',
    code: 'SY',
    emoji: '🇸🇾',
    unicode: 'U+1F1F8 U+1F1FE',
    image:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SY.svg',
  },
  {
    name: 'Eswatini',
    code: 'SZ',
    emoji: '🇸🇿',
    unicode: 'U+1F1F8 U+1F1FF',
    image:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SZ.svg',
  },
  {
    name: 'Tristan da Cunha',
    code: 'TA',
    emoji: '🇹🇦',
    unicode: 'U+1F1F9 U+1F1E6',
    image:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TA.svg',
  },
  {
    name: 'Turks & Caicos Islands',
    code: 'TC',
    emoji: '🇹🇨',
    unicode: 'U+1F1F9 U+1F1E8',
    image:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TC.svg',
  },
  {
    name: 'Chad',
    code: 'TD',
    emoji: '🇹🇩',
    unicode: 'U+1F1F9 U+1F1E9',
    image:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TD.svg',
  },
  {
    name: 'French Southern Territories',
    code: 'TF',
    emoji: '🇹🇫',
    unicode: 'U+1F1F9 U+1F1EB',
    image:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TF.svg',
  },
  {
    name: 'Togo',
    code: 'TG',
    emoji: '🇹🇬',
    unicode: 'U+1F1F9 U+1F1EC',
    image:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TG.svg',
  },
  {
    name: 'Thailand',
    code: 'TH',
    emoji: '🇹🇭',
    unicode: 'U+1F1F9 U+1F1ED',
    image:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TH.svg',
  },
  {
    name: 'Tajikistan',
    code: 'TJ',
    emoji: '🇹🇯',
    unicode: 'U+1F1F9 U+1F1EF',
    image:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TJ.svg',
  },
  {
    name: 'Tokelau',
    code: 'TK',
    emoji: '🇹🇰',
    unicode: 'U+1F1F9 U+1F1F0',
    image:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TK.svg',
  },
  {
    name: 'Timor-Leste',
    code: 'TL',
    emoji: '🇹🇱',
    unicode: 'U+1F1F9 U+1F1F1',
    image:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TL.svg',
  },
  {
    name: 'Turkmenistan',
    code: 'TM',
    emoji: '🇹🇲',
    unicode: 'U+1F1F9 U+1F1F2',
    image:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TM.svg',
  },
  {
    name: 'Tunisia',
    code: 'TN',
    emoji: '🇹🇳',
    unicode: 'U+1F1F9 U+1F1F3',
    image:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TN.svg',
  },
  {
    name: 'Tonga',
    code: 'TO',
    emoji: '🇹🇴',
    unicode: 'U+1F1F9 U+1F1F4',
    image:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TO.svg',
  },
  {
    name: 'Turkey',
    code: 'TR',
    emoji: '🇹🇷',
    unicode: 'U+1F1F9 U+1F1F7',
    image:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TR.svg',
  },
  {
    name: 'Trinidad & Tobago',
    code: 'TT',
    emoji: '🇹🇹',
    unicode: 'U+1F1F9 U+1F1F9',
    image:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TT.svg',
  },
  {
    name: 'Tuvalu',
    code: 'TV',
    emoji: '🇹🇻',
    unicode: 'U+1F1F9 U+1F1FB',
    image:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TV.svg',
  },
  {
    name: 'Taiwan',
    code: 'TW',
    emoji: '🇹🇼',
    unicode: 'U+1F1F9 U+1F1FC',
    image:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TW.svg',
  },
  {
    name: 'Tanzania',
    code: 'TZ',
    emoji: '🇹🇿',
    unicode: 'U+1F1F9 U+1F1FF',
    image:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TZ.svg',
  },
  {
    name: 'Ukraine',
    code: 'UA',
    emoji: '🇺🇦',
    unicode: 'U+1F1FA U+1F1E6',
    image:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/UA.svg',
  },
  {
    name: 'Uganda',
    code: 'UG',
    emoji: '🇺🇬',
    unicode: 'U+1F1FA U+1F1EC',
    image:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/UG.svg',
  },
  {
    name: 'U.S. Outlying Islands',
    code: 'UM',
    emoji: '🇺🇲',
    unicode: 'U+1F1FA U+1F1F2',
    image:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/UM.svg',
  },
  {
    name: 'United Nations',
    code: 'UN',
    emoji: '🇺🇳',
    unicode: 'U+1F1FA U+1F1F3',
    image:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/UN.svg',
  },
  {
    name: 'United States',
    code: 'US',
    emoji: '🇺🇸',
    unicode: 'U+1F1FA U+1F1F8',
    image:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/US.svg',
  },
  {
    name: 'Uruguay',
    code: 'UY',
    emoji: '🇺🇾',
    unicode: 'U+1F1FA U+1F1FE',
    image:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/UY.svg',
  },
  {
    name: 'Uzbekistan',
    code: 'UZ',
    emoji: '🇺🇿',
    unicode: 'U+1F1FA U+1F1FF',
    image:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/UZ.svg',
  },
  {
    name: 'Vatican City',
    code: 'VA',
    emoji: '🇻🇦',
    unicode: 'U+1F1FB U+1F1E6',
    image:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/VA.svg',
  },
  {
    name: 'St. Vincent & Grenadines',
    code: 'VC',
    emoji: '🇻🇨',
    unicode: 'U+1F1FB U+1F1E8',
    image:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/VC.svg',
  },
  {
    name: 'Venezuela',
    code: 'VE',
    emoji: '🇻🇪',
    unicode: 'U+1F1FB U+1F1EA',
    image:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/VE.svg',
  },
  {
    name: 'British Virgin Islands',
    code: 'VG',
    emoji: '🇻🇬',
    unicode: 'U+1F1FB U+1F1EC',
    image:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/VG.svg',
  },
  {
    name: 'U.S. Virgin Islands',
    code: 'VI',
    emoji: '🇻🇮',
    unicode: 'U+1F1FB U+1F1EE',
    image:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/VI.svg',
  },
  {
    name: 'Vietnam',
    code: 'VN',
    emoji: '🇻🇳',
    unicode: 'U+1F1FB U+1F1F3',
    image:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/VN.svg',
  },
  {
    name: 'Vanuatu',
    code: 'VU',
    emoji: '🇻🇺',
    unicode: 'U+1F1FB U+1F1FA',
    image:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/VU.svg',
  },
  {
    name: 'Wallis & Futuna',
    code: 'WF',
    emoji: '🇼🇫',
    unicode: 'U+1F1FC U+1F1EB',
    image:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/WF.svg',
  },
  {
    name: 'Samoa',
    code: 'WS',
    emoji: '🇼🇸',
    unicode: 'U+1F1FC U+1F1F8',
    image:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/WS.svg',
  },
  {
    name: 'Kosovo',
    code: 'XK',
    emoji: '🇽🇰',
    unicode: 'U+1F1FD U+1F1F0',
    image:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/XK.svg',
  },
  {
    name: 'Yemen',
    code: 'YE',
    emoji: '🇾🇪',
    unicode: 'U+1F1FE U+1F1EA',
    image:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/YE.svg',
  },
  {
    name: 'Mayotte',
    code: 'YT',
    emoji: '🇾🇹',
    unicode: 'U+1F1FE U+1F1F9',
    image:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/YT.svg',
  },
  {
    name: 'South Africa',
    code: 'ZA',
    emoji: '🇿🇦',
    unicode: 'U+1F1FF U+1F1E6',
    image:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/ZA.svg',
  },
  {
    name: 'Zambia',
    code: 'ZM',
    emoji: '🇿🇲',
    unicode: 'U+1F1FF U+1F1F2',
    image:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/ZM.svg',
  },
  {
    name: 'Zimbabwe',
    code: 'ZW',
    emoji: '🇿🇼',
    unicode: 'U+1F1FF U+1F1FC',
    image:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/ZW.svg',
  },
  {
    name: 'England',
    code: 'ENGLAND',
    emoji: '🏴󠁧󠁢󠁥󠁮󠁧󠁿',
    unicode: 'U+1F3F4 U+E0067 U+E0062 U+E0065 U+E006E U+E0067 U+E007F',
    image:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/ENGLAND.svg',
  },
  {
    name: 'Scotland',
    code: 'SCOTLAND',
    emoji: '🏴󠁧󠁢󠁳󠁣󠁴󠁿',
    unicode: 'U+1F3F4 U+E0067 U+E0062 U+E0073 U+E0063 U+E0074 U+E007F',
    image:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SCOTLAND.svg',
  },
  {
    name: 'Wales',
    code: 'WALES',
    emoji: '🏴󠁧󠁢󠁷󠁬󠁳󠁿',
    unicode: 'U+1F3F4 U+E0067 U+E0062 U+E0077 U+E006C U+E0073 U+E007F',
    image:
      'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/WALES.svg',
  },
]

export const LanguageLevel = [
  'Native / Bilingual Proficiency',
  'Limited Working Proficiency',
  'Full Professional Proficiency',
]

export const timeList = [
  {
    time: '00:00',
  },
  {
    time: '00:30',
  },
  {
    time: '01:00',
  },
  {
    time: '01:30',
  },
  {
    time: '02:00',
  },
  {
    time: '02:30',
  },
  {
    time: '03:00',
  },
  {
    time: '03:30',
  },
  {
    time: '04:00',
  },
  {
    time: '04:30',
  },
  {
    time: '05:00',
  },
  {
    time: '05:30',
  },
  {
    time: '06:00',
  },
  {
    time: '06:30',
  },
  {
    time: '07:00',
  },
  {
    time: '07:30',
  },
  {
    time: '08:00',
  },
  {
    time: '08:30',
  },
  {
    time: '09:00',
  },
  {
    time: '09:30',
  },
  {
    time: '10:00',
  },
  {
    time: '10:30',
  },
  {
    time: '11:00',
  },
  {
    time: '11:30',
  },
  {
    time: '12:00',
  },
  {
    time: '12:30',
  },
  {
    time: '13:00',
  },
  {
    time: '13:30',
  },
  {
    time: '14:00',
  },
  {
    time: '14:30',
  },
  {
    time: '15:00',
  },
  {
    time: '15:30',
  },
  {
    time: '16:00',
  },
  {
    time: '16:30',
  },
  {
    time: '17:00',
  },
  {
    time: '17:30',
  },
  {
    time: '18:00',
  },
  {
    time: '18:30',
  },
  {
    time: '19:00',
  },
  {
    time: '19:30',
  },
  {
    time: '20:00',
  },
  {
    time: '20:30',
  },
  {
    time: '21:00',
  },
  {
    time: '21:30',
  },
  {
    time: '22:00',
  },
  {
    time: '22:30',
  },
  {
    time: '23:00',
  },
  {
    time: '23:30',
  },
]

export const timezoneList = [
  'Africa/Abidjan',
  'Africa/Accra',
  'Africa/Addis_Ababa',
  'Africa/Algiers',
  'Africa/Asmara',
  'Africa/Asmera',
  'Africa/Bamako',
  'Africa/Bangui',
  'Africa/Banjul',
  'Africa/Bissau',
  'Africa/Blantyre',
  'Africa/Brazzaville',
  'Africa/Bujumbura',
  'Africa/Cairo',
  'Africa/Casablanca',
  'Africa/Ceuta',
  'Africa/Conakry',
  'Africa/Dakar',
  'Africa/Dar_es_Salaam',
  'Africa/Djibouti',
  'Africa/Douala',
  'Africa/El_Aaiun',
  'Africa/Freetown',
  'Africa/Gaborone',
  'Africa/Harare',
  'Africa/Johannesburg',
  'Africa/Juba',
  'Africa/Kampala',
  'Africa/Khartoum',
  'Africa/Kigali',
  'Africa/Kinshasa',
  'Africa/Lagos',
  'Africa/Libreville',
  'Africa/Lome',
  'Africa/Luanda',
  'Africa/Lubumbashi',
  'Africa/Lusaka',
  'Africa/Malabo',
  'Africa/Maputo',
  'Africa/Maseru',
  'Africa/Mbabane',
  'Africa/Mogadishu',
  'Africa/Monrovia',
  'Africa/Nairobi',
  'Africa/Ndjamena',
  'Africa/Niamey',
  'Africa/Nouakchott',
  'Africa/Ouagadougou',
  'Africa/Porto-Novo',
  'Africa/Sao_Tome',
  'Africa/Timbuktu',
  'Africa/Tripoli',
  'Africa/Tunis',
  'Africa/Windhoek',
  'America/Adak',
  'America/Anchorage',
  'America/Anguilla',
  'America/Antigua',
  'America/Araguaina',
  'America/Argentina/Buenos_Aires',
  'America/Argentina/Catamarca',
  'America/Argentina/ComodRivadavia',
  'America/Argentina/Cordoba',
  'America/Argentina/Jujuy',
  'America/Argentina/La_Rioja',
  'America/Argentina/Mendoza',
  'America/Argentina/Rio_Gallegos',
  'America/Argentina/Salta',
  'America/Argentina/San_Juan',
  'America/Argentina/San_Luis',
  'America/Argentina/Tucuman',
  'America/Argentina/Ushuaia',
  'America/Aruba',
  'America/Asuncion',
  'America/Atikokan',
  'America/Atka',
  'America/Bahia',
  'America/Bahia_Banderas',
  'America/Barbados',
  'America/Belem',
  'America/Belize',
  'America/Blanc-Sablon',
  'America/Boa_Vista',
  'America/Bogota',
  'America/Boise',
  'America/Buenos_Aires',
  'America/Cambridge_Bay',
  'America/Campo_Grande',
  'America/Cancun',
  'America/Caracas',
  'America/Catamarca',
  'America/Cayenne',
  'America/Cayman',
  'America/Chicago',
  'America/Chihuahua',
  'America/Coral_Harbour',
  'America/Cordoba',
  'America/Costa_Rica',
  'America/Creston',
  'America/Cuiaba',
  'America/Curacao',
  'America/Danmarkshavn',
  'America/Dawson',
  'America/Dawson_Creek',
  'America/Denver',
  'America/Detroit',
  'America/Dominica',
  'America/Edmonton',
  'America/Eirunepe',
  'America/El_Salvador',
  'America/Ensenada',
  'America/Fort_Nelson',
  'America/Fort_Wayne',
  'America/Fortaleza',
  'America/Glace_Bay',
  'America/Godthab',
  'America/Goose_Bay',
  'America/Grand_Turk',
  'America/Grenada',
  'America/Guadeloupe',
  'America/Guatemala',
  'America/Guayaquil',
  'America/Guyana',
  'America/Halifax',
  'America/Havana',
  'America/Hermosillo',
  'America/Indiana/Indianapolis',
  'America/Indiana/Knox',
  'America/Indiana/Marengo',
  'America/Indiana/Petersburg',
  'America/Indiana/Tell_City',
  'America/Indiana/Vevay',
  'America/Indiana/Vincennes',
  'America/Indiana/Winamac',
  'America/Indianapolis',
  'America/Inuvik',
  'America/Iqaluit',
  'America/Jamaica',
  'America/Jujuy',
  'America/Juneau',
  'America/Kentucky/Louisville',
  'America/Kentucky/Monticello',
  'America/Knox_IN',
  'America/Kralendijk',
  'America/La_Paz',
  'America/Lima',
  'America/Los_Angeles',
  'America/Louisville',
  'America/Lower_Princes',
  'America/Maceio',
  'America/Managua',
  'America/Manaus',
  'America/Marigot',
  'America/Martinique',
  'America/Matamoros',
  'America/Mazatlan',
  'America/Mendoza',
  'America/Menominee',
  'America/Merida',
  'America/Metlakatla',
  'America/Mexico_City',
  'America/Miquelon',
  'America/Moncton',
  'America/Monterrey',
  'America/Montevideo',
  'America/Montreal',
  'America/Montserrat',
  'America/Nassau',
  'America/New_York',
  'America/Nipigon',
  'America/Nome',
  'America/Noronha',
  'America/North_Dakota/Beulah',
  'America/North_Dakota/Center',
  'America/North_Dakota/New_Salem',
  'America/Ojinaga',
  'America/Panama',
  'America/Pangnirtung',
  'America/Paramaribo',
  'America/Phoenix',
  'America/Port-au-Prince',
  'America/Port_of_Spain',
  'America/Porto_Acre',
  'America/Porto_Velho',
  'America/Puerto_Rico',
  'America/Punta_Arenas',
  'America/Rainy_River',
  'America/Rankin_Inlet',
  'America/Recife',
  'America/Regina',
  'America/Resolute',
  'America/Rio_Branco',
  'America/Rosario',
  'America/Santa_Isabel',
  'America/Santarem',
  'America/Santiago',
  'America/Santo_Domingo',
  'America/Sao_Paulo',
  'America/Scoresbysund',
  'America/Shiprock',
  'America/Sitka',
  'America/St_Barthelemy',
  'America/St_Johns',
  'America/St_Kitts',
  'America/St_Lucia',
  'America/St_Thomas',
  'America/St_Vincent',
  'America/Swift_Current',
  'America/Tegucigalpa',
  'America/Thule',
  'America/Thunder_Bay',
  'America/Tijuana',
  'America/Toronto',
  'America/Tortola',
  'America/Vancouver',
  'America/Virgin',
  'America/Whitehorse',
  'America/Winnipeg',
  'America/Yakutat',
  'America/Yellowknife',
  'Antarctica/Casey',
  'Antarctica/Davis',
  'Antarctica/DumontDUrville',
  'Antarctica/Macquarie',
  'Antarctica/Mawson',
  'Antarctica/McMurdo',
  'Antarctica/Palmer',
  'Antarctica/Rothera',
  'Antarctica/South_Pole',
  'Antarctica/Syowa',
  'Antarctica/Troll',
  'Antarctica/Vostok',
  'Arctic/Longyearbyen',
  'Asia/Aden',
  'Asia/Almaty',
  'Asia/Amman',
  'Asia/Anadyr',
  'Asia/Aqtau',
  'Asia/Aqtobe',
  'Asia/Ashgabat',
  'Asia/Ashkhabad',
  'Asia/Atyrau',
  'Asia/Baghdad',
  'Asia/Bahrain',
  'Asia/Baku',
  'Asia/Bangkok',
  'Asia/Barnaul',
  'Asia/Beirut',
  'Asia/Bishkek',
  'Asia/Brunei',
  'Asia/Calcutta',
  'Asia/Chita',
  'Asia/Choibalsan',
  'Asia/Chongqing',
  'Asia/Chungking',
  'Asia/Colombo',
  'Asia/Dacca',
  'Asia/Damascus',
  'Asia/Dhaka',
  'Asia/Dili',
  'Asia/Dubai',
  'Asia/Dushanbe',
  'Asia/Famagusta',
  'Asia/Gaza',
  'Asia/Harbin',
  'Asia/Hebron',
  'Asia/Ho_Chi_Minh',
  'Asia/Hong_Kong',
  'Asia/Hovd',
  'Asia/Irkutsk',
  'Asia/Istanbul',
  'Asia/Jakarta',
  'Asia/Jayapura',
  'Asia/Jerusalem',
  'Asia/Kabul',
  'Asia/Kamchatka',
  'Asia/Karachi',
  'Asia/Kashgar',
  'Asia/Kathmandu',
  'Asia/Katmandu',
  'Asia/Khandyga',
  'Asia/Kolkata',
  'Asia/Krasnoyarsk',
  'Asia/Kuala_Lumpur',
  'Asia/Kuching',
  'Asia/Kuwait',
  'Asia/Macao',
  'Asia/Macau',
  'Asia/Magadan',
  'Asia/Makassar',
  'Asia/Manila',
  'Asia/Muscat',
  'Asia/Nicosia',
  'Asia/Novokuznetsk',
  'Asia/Novosibirsk',
  'Asia/Omsk',
  'Asia/Oral',
  'Asia/Phnom_Penh',
  'Asia/Pontianak',
  'Asia/Pyongyang',
  'Asia/Qatar',
  'Asia/Qyzylorda',
  'Asia/Rangoon',
  'Asia/Riyadh',
  'Asia/Saigon',
  'Asia/Sakhalin',
  'Asia/Samarkand',
  'Asia/Seoul',
  'Asia/Shanghai',
  'Asia/Singapore',
  'Asia/Srednekolymsk',
  'Asia/Taipei',
  'Asia/Tashkent',
  'Asia/Tbilisi',
  'Asia/Tehran',
  'Asia/Tel_Aviv',
  'Asia/Thimbu',
  'Asia/Thimphu',
  'Asia/Tokyo',
  'Asia/Tomsk',
  'Asia/Ujung_Pandang',
  'Asia/Ulaanbaatar',
  'Asia/Ulan_Bator',
  'Asia/Urumqi',
  'Asia/Ust-Nera',
  'Asia/Vientiane',
  'Asia/Vladivostok',
  'Asia/Yakutsk',
  'Asia/Yangon',
  'Asia/Yekaterinburg',
  'Asia/Yerevan',
  'Atlantic/Azores',
  'Atlantic/Bermuda',
  'Atlantic/Canary',
  'Atlantic/Cape_Verde',
  'Atlantic/Faeroe',
  'Atlantic/Faroe',
  'Atlantic/Jan_Mayen',
  'Atlantic/Madeira',
  'Atlantic/Reykjavik',
  'Atlantic/South_Georgia',
  'Atlantic/St_Helena',
  'Atlantic/Stanley',
  'Australia/ACT',
  'Australia/Adelaide',
  'Australia/Brisbane',
  'Australia/Broken_Hill',
  'Australia/Canberra',
  'Australia/Currie',
  'Australia/Darwin',
  'Australia/Eucla',
  'Australia/Hobart',
  'Australia/LHI',
  'Australia/Lindeman',
  'Australia/Lord_Howe',
  'Australia/Melbourne',
  'Australia/NSW',
  'Australia/North',
  'Australia/Perth',
  'Australia/Queensland',
  'Australia/South',
  'Australia/Sydney',
  'Australia/Tasmania',
  'Australia/Victoria',
  'Australia/West',
  'Australia/Yancowinna',
  'Brazil/Acre',
  'Brazil/DeNoronha',
  'Brazil/East',
  'Brazil/West',
  'CET',
  'CST6CDT',
  'Canada/Atlantic',
  'Canada/Central',
  'Canada/Eastern',
  'Canada/Mountain',
  'Canada/Newfoundland',
  'Canada/Pacific',
  'Canada/Saskatchewan',
  'Canada/Yukon',
  'Chile/Continental',
  'Chile/EasterIsland',
  'Cuba',
  'EET',
  'EST',
  'EST5EDT',
  'Egypt',
  'Eire',
  'Etc/GMT',
  'Etc/GMT+0',
  'Etc/GMT+1',
  'Etc/GMT+10',
  'Etc/GMT+11',
  'Etc/GMT+12',
  'Etc/GMT+2',
  'Etc/GMT+3',
  'Etc/GMT+4',
  'Etc/GMT+5',
  'Etc/GMT+6',
  'Etc/GMT+7',
  'Etc/GMT+8',
  'Etc/GMT+9',
  'Etc/GMT-0',
  'Etc/GMT-1',
  'Etc/GMT-10',
  'Etc/GMT-11',
  'Etc/GMT-12',
  'Etc/GMT-13',
  'Etc/GMT-14',
  'Etc/GMT-2',
  'Etc/GMT-3',
  'Etc/GMT-4',
  'Etc/GMT-5',
  'Etc/GMT-6',
  'Etc/GMT-7',
  'Etc/GMT-8',
  'Etc/GMT-9',
  'Etc/GMT0',
  'Etc/Greenwich',
  'Etc/UCT',
  'Etc/UTC',
  'Etc/Universal',
  'Etc/Zulu',
  'Europe/Amsterdam',
  'Europe/Andorra',
  'Europe/Astrakhan',
  'Europe/Athens',
  'Europe/Belfast',
  'Europe/Belgrade',
  'Europe/Berlin',
  'Europe/Bratislava',
  'Europe/Brussels',
  'Europe/Bucharest',
  'Europe/Budapest',
  'Europe/Busingen',
  'Europe/Chisinau',
  'Europe/Copenhagen',
  'Europe/Dublin',
  'Europe/Gibraltar',
  'Europe/Guernsey',
  'Europe/Helsinki',
  'Europe/Isle_of_Man',
  'Europe/Istanbul',
  'Europe/Jersey',
  'Europe/Kaliningrad',
  'Europe/Kiev',
  'Europe/Kirov',
  'Europe/Lisbon',
  'Europe/Ljubljana',
  'Europe/London',
  'Europe/Luxembourg',
  'Europe/Madrid',
  'Europe/Malta',
  'Europe/Mariehamn',
  'Europe/Minsk',
  'Europe/Monaco',
  'Europe/Moscow',
  'Europe/Nicosia',
  'Europe/Oslo',
  'Europe/Paris',
  'Europe/Podgorica',
  'Europe/Prague',
  'Europe/Riga',
  'Europe/Rome',
  'Europe/Samara',
  'Europe/San_Marino',
  'Europe/Sarajevo',
  'Europe/Saratov',
  'Europe/Simferopol',
  'Europe/Skopje',
  'Europe/Sofia',
  'Europe/Stockholm',
  'Europe/Tallinn',
  'Europe/Tirane',
  'Europe/Tiraspol',
  'Europe/Ulyanovsk',
  'Europe/Uzhgorod',
  'Europe/Vaduz',
  'Europe/Vatican',
  'Europe/Vienna',
  'Europe/Vilnius',
  'Europe/Volgograd',
  'Europe/Warsaw',
  'Europe/Zagreb',
  'Europe/Zaporozhye',
  'Europe/Zurich',
  'GB',
  'GB-Eire',
  'GMT',
  'GMT+0',
  'GMT-0',
  'GMT0',
  'Greenwich',
  'HST',
  'Hongkong',
  'Iceland',
  'Indian/Antananarivo',
  'Indian/Chagos',
  'Indian/Christmas',
  'Indian/Cocos',
  'Indian/Comoro',
  'Indian/Kerguelen',
  'Indian/Mahe',
  'Indian/Maldives',
  'Indian/Mauritius',
  'Indian/Mayotte',
  'Indian/Reunion',
  'Iran',
  'Israel',
  'Jamaica',
  'Japan',
  'Kwajalein',
  'Libya',
  'MET',
  'MST',
  'MST7MDT',
  'Mexico/BajaNorte',
  'Mexico/BajaSur',
  'Mexico/General',
  'NZ',
  'NZ-CHAT',
  'Navajo',
  'PRC',
  'PST8PDT',
  'Pacific/Apia',
  'Pacific/Auckland',
  'Pacific/Bougainville',
  'Pacific/Chatham',
  'Pacific/Chuuk',
  'Pacific/Easter',
  'Pacific/Efate',
  'Pacific/Enderbury',
  'Pacific/Fakaofo',
  'Pacific/Fiji',
  'Pacific/Funafuti',
  'Pacific/Galapagos',
  'Pacific/Gambier',
  'Pacific/Guadalcanal',
  'Pacific/Guam',
  'Pacific/Honolulu',
  'Pacific/Johnston',
  'Pacific/Kiritimati',
  'Pacific/Kosrae',
  'Pacific/Kwajalein',
  'Pacific/Majuro',
  'Pacific/Marquesas',
  'Pacific/Midway',
  'Pacific/Nauru',
  'Pacific/Niue',
  'Pacific/Norfolk',
  'Pacific/Noumea',
  'Pacific/Pago_Pago',
  'Pacific/Palau',
  'Pacific/Pitcairn',
  'Pacific/Pohnpei',
  'Pacific/Ponape',
  'Pacific/Port_Moresby',
  'Pacific/Rarotonga',
  'Pacific/Saipan',
  'Pacific/Samoa',
  'Pacific/Tahiti',
  'Pacific/Tarawa',
  'Pacific/Tongatapu',
  'Pacific/Truk',
  'Pacific/Wake',
  'Pacific/Wallis',
  'Pacific/Yap',
  'Poland',
  'Portugal',
  'ROC',
  'ROK',
  'Singapore',
  'Turkey',
  'UCT',
  'US/Alaska',
  'US/Aleutian',
  'US/Arizona',
  'US/Central',
  'US/East-Indiana',
  'US/Eastern',
  'US/Hawaii',
  'US/Indiana-Starke',
  'US/Michigan',
  'US/Mountain',
  'US/Pacific',
  'US/Pacific-New',
  'US/Samoa',
  'UTC',
  'Universal',
  'W-SU',
  'WET',
  'Zulu',
]

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-local-search-form',
  templateUrl: './local-search-form.component.html',
  styleUrls: ['./local-search-form.component.scss']
})
export class LocalSearchFormComponent implements OnInit {
  searchEngine = 'google';
  selectedCountry = 'US';
  selectedLangauge = 'en';

  countries = {
    AF: {
      domain: 'www.google.com.af',
      ext: 'af',
      iso2: 'AF',
      iso3: 'AFG',
      country: 'Afghanistan',
      languages: {
        fa: 'Persian',
        ps: 'Pashto, Pushto',
      },
    },
    DZ: {
      domain: 'www.google.dz',
      ext: 'dz',
      iso2: 'DZ',
      iso3: 'DZA',
      country: 'Algeria',
      languages: {
        fr: 'French',
        ar: 'Arabic',
      },
    },
    AS: {
      domain: 'www.google.as',
      ext: 'as',
      iso2: 'AS',
      iso3: 'ASM',
      country: 'American Samoa',
      languages: {
        en: 'English',
      },
    },
    AD: {
      domain: 'www.google.ad',
      ext: 'ad',
      iso2: 'AD',
      iso3: 'AND',
      country: 'Andorra',
      languages: {
        ca: 'Catalan; Valencian',
      },
    },
    AO: {
      domain: 'www.google.co.ao',
      ext: 'ao',
      iso2: 'AO',
      iso3: 'AGO',
      country: 'Angola',
      languages: {
        pt: 'PT - Portuguese',
        kg: 'Kongo',
      },
    },
    AI: {
      domain: 'www.google.com.ai',
      ext: 'ai',
      iso2: 'AI',
      iso3: 'AIA',
      country: 'Anguilla',
      languages: {
        en: 'English',
      },
    },
    AG: {
      domain: 'www.google.com.ag',
      ext: 'ag',
      iso2: 'AG',
      iso3: 'ATG',
      country: 'Antigua and Barbuda',
      languages: {
        en: 'English',
      },
    },
    AR: {
      domain: 'www.google.com.ar',
      ext: 'ar',
      iso2: 'AR',
      iso3: 'ARG',
      country: 'Argentina',
      languages: {
        es: '419 - Espa\u00f1ol (Latinoam\u00e9rica)',
      },
    },
    AM: {
      domain: 'www.google.am',
      ext: 'am',
      iso2: 'AM',
      iso3: 'ARM',
      country: 'Armenia',
      languages: {
        hy: 'Armenian',
        ru: 'Russian',
      },
    },
    AU: {
      domain: 'www.google.com.au',
      ext: 'au',
      iso2: 'AU',
      iso3: 'AUS',
      country: 'Australia',
      languages: {
        en: 'English',
      },
    },
    AT: {
      domain: 'www.google.at',
      ext: 'at',
      iso2: 'AT',
      iso3: 'AUT',
      country: 'Austria',
      languages: {
        de: 'German',
      },
    },
    AZ: {
      domain: 'www.google.az',
      ext: 'az',
      iso2: 'AZ',
      iso3: 'AZE',
      country: 'Azerbaijan',
      languages: {
        az: 'Azerbaijani',
        ru: 'Russian',
      },
    },
    BS: {
      domain: 'www.google.bs',
      ext: 'bs',
      iso2: 'BS',
      iso3: 'BHS',
      country: 'Bahamas',
      languages: {
        en: 'English',
      },
    },
    BH: {
      domain: 'www.google.com.bh',
      ext: 'bh',
      iso2: 'BH',
      iso3: 'BHR',
      country: 'Bahrain',
      languages: {
        ar: 'Arabic',
      },
    },
    BD: {
      domain: 'www.google.com.bd',
      ext: 'bd',
      iso2: 'BD',
      iso3: 'BGD',
      country: 'Bangladesh',
      languages: {
        bn: 'Bengali',
      },
    },
    BY: {
      domain: 'www.google.by',
      ext: 'by',
      iso2: 'BY',
      iso3: 'BLR',
      country: 'Belarus',
      languages: {
        be: 'Belarusian',
        ru: 'Russian',
      },
    },
    BE: {
      domain: 'www.google.be',
      ext: 'be',
      iso2: 'BE',
      iso3: 'BEL',
      country: 'Belgium',
      languages: {
        nl: 'Dutch',
        fr: 'French',
        de: 'German',
      },
    },
    BZ: {
      domain: 'www.google.com.bz',
      ext: 'bz',
      iso2: 'BZ',
      iso3: 'BLZ',
      country: 'Belize',
      languages: {
        es: '419 - Espa\u00f1ol (Latinoam\u00e9rica)',
        en: 'English',
      },
    },
    BJ: {
      domain: 'www.google.bj',
      ext: 'bj',
      iso2: 'BJ',
      iso3: 'BEN',
      country: 'Benin',
      languages: {
        fr: 'French',
        yo: 'Yoruba',
      },
    },
    BO: {
      domain: 'www.google.com.bo',
      ext: 'bo',
      iso2: 'BO',
      iso3: 'BOL',
      country: 'Bolivia',
      languages: {
        es: '419 - Espa\u00f1ol (Latinoam\u00e9rica)',
        qu: 'Quechua',
      },
    },
    BA: {
      domain: 'www.google.ba',
      ext: 'ba',
      iso2: 'BA',
      iso3: 'BIH',
      country: 'Bosnia and Herzegovina',
      languages: {
        bs: 'Bosnian',
        sr: 'Serbian',
        hr: 'Croatian',
      },
    },
    BW: {
      domain: 'www.google.co.bw',
      ext: 'bw',
      iso2: 'BW',
      iso3: 'BWA',
      country: 'Botswana',
      languages: {
        tn: 'Tswana',
      },
    },
    BR: {
      domain: 'www.google.com.br',
      ext: 'br',
      iso2: 'BR',
      iso3: 'BRA',
      country: 'Brazil',
      languages: {
        pt: 'BR - Portuguese (Brasil)',
      },
    },
    BN: {
      domain: 'www.google.com.bn',
      ext: 'bn',
      iso2: 'BN',
      iso3: 'BRN',
      country: 'Brunei Darussalam',
      languages: {
        ms: 'Malay',
        zh: 'cn - Chinese (Simplified Han)',
      },
    },
    BG: {
      domain: 'www.google.bg',
      ext: 'bg',
      iso2: 'BG',
      iso3: 'BGR',
      country: 'Bulgaria',
      languages: {
        bg: 'Bulgarian',
      },
    },
    BF: {
      domain: 'www.google.bf',
      ext: 'bf',
      iso2: 'BF',
      iso3: 'BFA',
      country: 'Burkina Faso',
      languages: {
        fr: 'French',
      },
    },
    BI: {
      domain: 'www.google.bi',
      ext: 'bi',
      iso2: 'BI',
      iso3: 'BDI',
      country: 'Burundi',
      languages: {
        fr: 'French',
        sw: 'Swahili',
        rn: 'Kirundi',
      },
    },
    KH: {
      domain: 'www.google.com.kh',
      ext: 'kh',
      iso2: 'KH',
      iso3: 'KHM',
      country: 'Cambodia',
      languages: {
        km: 'Khmer',
      },
    },
    CM: {
      domain: 'www.google.cm',
      ext: 'cm',
      iso2: 'CM',
      iso3: 'CMR',
      country: 'Cameroon',
      languages: {
        fr: 'French',
      },
    },
    CA: {
      domain: 'www.google.ca',
      ext: 'ca',
      iso2: 'CA',
      iso3: 'CAN',
      country: 'Canada',
      languages: {
        en: 'English',
        fr: 'French',
      },
    },
    CV: {
      domain: 'www.google.cv',
      ext: 'cv',
      iso2: 'CV',
      iso3: 'CPV',
      country: 'Cape Verde',
      languages: {
        pt: 'PT - Portuguese',
      },
    },
    CF: {
      domain: 'www.google.cf',
      ext: 'cf',
      iso2: 'CF',
      iso3: 'CAF',
      country: 'Central African Republic',
      languages: {
        fr: 'French',
      },
    },
    TD: {
      domain: 'www.google.td',
      ext: 'td',
      iso2: 'TD',
      iso3: 'TCD',
      country: 'Chad',
      languages: {
        fr: 'French',
        ar: 'Arabic',
      },
    },
    CL: {
      domain: 'www.google.cl',
      ext: 'cl',
      iso2: 'CL',
      iso3: 'CHL',
      country: 'Chile',
      languages: {
        es: '419 - Espa\u00f1ol (Latinoam\u00e9rica)',
      },
    },
    CN: {
      domain: 'www.google.cn',
      ext: 'cn',
      iso2: 'CN',
      iso3: 'CHN',
      country: 'China',
      languages: {
        zh: 'CN - Chinese (Simplified Han)',
      },
    },
    CO: {
      domain: 'www.google.com.co',
      ext: 'co',
      iso2: 'CO',
      iso3: 'COL',
      country: 'Colombia',
      languages: {
        es: '419 - Espa\u00f1ol (Latinoam\u00e9rica)',
      },
    },
    CG: {
      domain: 'www.google.cg',
      ext: 'cg',
      iso2: 'CG',
      iso3: 'COG',
      country: 'Congo',
      languages: {
        fr: 'French',
        in: 'Lingala',
        kg: 'Kongo',
      },
    },
    CD: {
      domain: 'www.google.cd',
      ext: 'cd',
      iso2: 'CD',
      iso3: 'COD',
      country: 'Congo, The Democratic Republic of the',
      languages: {
        fr: 'French',
        sw: 'Swahili',
        in: 'Lingala',
        ach: 'Alur',
        lua: 'Tshiluba',
        kg: 'Kongo',
      },
    },
    CK: {
      domain: 'www.google.co.ck',
      ext: 'ck',
      iso2: 'CK',
      iso3: 'COK',
      country: 'Cook Islands',
      languages: {
        en: 'English',
      },
    },
    CR: {
      domain: 'www.google.co.cr',
      ext: 'cr',
      iso2: 'CR',
      iso3: 'CRI',
      country: 'Costa Rica',
      languages: {
        es: '419 - Espa\u00f1ol (Latinoam\u00e9rica)',
      },
    },
    CI: {
      domain: 'www.google.ci',
      ext: 'ci',
      iso2: 'CI',
      iso3: 'CIV',
      country: "Cote d'Ivoire",
      languages: {
        fr: 'French',
      },
    },
    HR: {
      domain: 'www.google.hr',
      ext: 'hr',
      iso2: 'HR',
      iso3: 'HRV',
      country: 'Croatia',
      languages: {
        hr: 'Croatian',
      },
    },
    CU: {
      domain: 'www.google.com.cu',
      ext: 'cu',
      iso2: 'CU',
      iso3: 'CUB',
      country: 'Cuba',
      languages: {
        es: '419 - Espa\u00f1ol (Latinoam\u00e9rica)',
      },
    },
    CY: {
      domain: 'www.google.com.cy',
      ext: 'cy',
      iso2: 'CY',
      iso3: 'CYP',
      country: 'Cyprus',
      languages: {
        en: 'English',
        el: 'Greek, Modern',
        tr: 'Turkish',
      },
    },
    CZ: {
      domain: 'www.google.cz',
      ext: 'cz',
      iso2: 'CZ',
      iso3: 'CZE',
      country: 'Czech Republic',
      languages: {
        cs: 'Czech',
      },
    },
    DK: {
      domain: 'www.google.dk',
      ext: 'dk',
      iso2: 'DK',
      iso3: 'DNK',
      country: 'Denmark',
      languages: {
        da: 'Danish',
        fo: 'Faroese',
      },
    },
    DJ: {
      domain: 'www.google.dj',
      ext: 'dj',
      iso2: 'DJ',
      iso3: 'DJI',
      country: 'Djibouti',
      languages: {
        fr: 'French',
        ar: 'Arabic',
        so: 'Somali',
      },
    },
    DM: {
      domain: 'www.google.dm',
      ext: 'dm',
      iso2: 'DM',
      iso3: 'DMA',
      country: 'Dominica',
      languages: {
        en: 'English',
      },
    },
    DO: {
      domain: 'www.google.com.do',
      ext: 'do',
      iso2: 'DO',
      iso3: 'DOM',
      country: 'Dominican Republic',
      languages: {
        es: '419 - Espa\u00f1ol (Latinoam\u00e9rica)',
      },
    },
    EC: {
      domain: 'www.google.com.ec',
      ext: 'ec',
      iso2: 'EC',
      iso3: 'ECU',
      country: 'Ecuador',
      languages: {
        es: '419 - Espa\u00f1ol (Latinoam\u00e9rica)',
      },
    },
    EG: {
      domain: 'www.google.com.eg',
      ext: 'eg',
      iso2: 'EG',
      iso3: 'EGY',
      country: 'Egypt',
      languages: {
        ar: 'Arabic',
      },
    },
    SV: {
      domain: 'www.google.com.sv',
      ext: 'sv',
      iso2: 'SV',
      iso3: 'SLV',
      country: 'El Salvador',
      languages: {
        es: '419 - Espa\u00f1ol (Latinoam\u00e9rica)',
      },
    },
    EE: {
      domain: 'www.google.ee',
      ext: 'ee',
      iso2: 'EE',
      iso3: 'EST',
      country: 'Estonia',
      languages: {
        et: 'Estonian',
        ru: 'Russian',
      },
    },
    ET: {
      domain: 'www.google.com.et',
      ext: 'et',
      iso2: 'ET',
      iso3: 'ETH',
      country: 'Ethiopia',
      languages: {
        am: 'Amharic',
        ti: 'Tigrinya',
        so: 'Somali',
        om: 'Oromo',
      },
    },
    FJ: {
      domain: 'www.google.com.fj',
      ext: 'fj',
      iso2: 'FJ',
      iso3: 'FJI',
      country: 'Fiji',
      languages: {
        en: 'English',
      },
    },
    FI: {
      domain: 'www.google.fi',
      ext: 'fi',
      iso2: 'FI',
      iso3: 'FIN',
      country: 'Finland',
      languages: {
        fi: 'Finnish',
        sv: 'Swedish',
      },
    },
    FR: {
      domain: 'www.google.fr',
      ext: 'fr',
      iso2: 'FR',
      iso3: 'FRA',
      country: 'France',
      languages: {
        fr: 'French',
      },
    },
    GA: {
      domain: 'www.google.ga',
      ext: 'ga',
      iso2: 'GA',
      iso3: 'GAB',
      country: 'Gabon',
      languages: {
        fr: 'French',
      },
    },
    GM: {
      domain: 'www.google.gm',
      ext: 'gm',
      iso2: 'GM',
      iso3: 'GMB',
      country: 'Gambia',
      languages: {
        en: 'English',
        wo: 'Wolof',
      },
    },
    GE: {
      domain: 'www.google.ge',
      ext: 'ge',
      iso2: 'GE',
      iso3: 'GEO',
      country: 'Georgia',
      languages: {
        ka: 'Georgian',
      },
    },
    DE: {
      domain: 'www.google.de',
      ext: 'de',
      iso2: 'DE',
      iso3: 'DEU',
      country: 'Germany',
      languages: {
        de: 'German',
      },
    },
    GH: {
      domain: 'www.google.com.gh',
      ext: 'gh',
      iso2: 'GH',
      iso3: 'GHA',
      country: 'Ghana',
      languages: {
        en: 'English',
        ha: 'Hausa',
        ak: 'Akan',
        ee: 'Ewe',
        gaa: 'Ga',
      },
    },
    GI: {
      domain: 'www.google.com.gi',
      ext: 'gi',
      iso2: 'GI',
      iso3: 'GIB',
      country: 'Gibraltar',
      languages: {
        en: 'English',
        es: 'Spanish; Castilian',
        it: 'Italian',
        pt: 'PT - Portuguese',
      },
    },
    GR: {
      domain: 'www.google.gr',
      ext: 'gr',
      iso2: 'GR',
      iso3: 'GRC',
      country: 'Greece',
      languages: {
        el: 'Greek, Modern',
      },
    },
    GL: {
      domain: 'www.google.gl',
      ext: 'gl',
      iso2: 'GL',
      iso3: 'GRL',
      country: 'Greenland',
      languages: {
        da: 'Danish',
      },
    },
    GP: {
      domain: 'www.google.gp',
      ext: 'gp',
      iso2: 'GP',
      iso3: 'GLP',
      country: 'Guadeloupe',
      languages: {
        fr: 'French',
      },
    },
    GT: {
      domain: 'www.google.com.gt',
      ext: 'gt',
      iso2: 'GT',
      iso3: 'GTM',
      country: 'Guatemala',
      languages: {
        es: '419 - Espa\u00f1ol (Latinoam\u00e9rica)',
      },
    },
    GG: {
      domain: 'www.google.gg',
      ext: 'gg',
      iso2: 'GG',
      iso3: 'GGY',
      country: 'Guernsey',
      languages: {
        en: 'English',
        fr: 'French',
      },
    },
    GY: {
      domain: 'www.google.gy',
      ext: 'gy',
      iso2: 'GY',
      iso3: 'GUY',
      country: 'Guyana',
      languages: {
        en: 'English',
      },
    },
    HT: {
      domain: 'www.google.ht',
      ext: 'ht',
      iso2: 'HT',
      iso3: 'HTI',
      country: 'Haiti',
      languages: {
        fr: 'French',
        ht: 'Haitian; Haitian Creole or Krey\u00f2l Ayisyen',
      },
    },
    HN: {
      domain: 'www.google.hn',
      ext: 'hn',
      iso2: 'HN',
      iso3: 'HND',
      country: 'Honduras',
      languages: {
        es: '419 - Espa\u00f1ol (Latinoam\u00e9rica)',
      },
    },
    HK: {
      domain: 'www.google.com.hk',
      ext: 'hk',
      iso2: 'HK',
      iso3: 'HKG',
      country: 'Hong Kong',
      languages: {
        zh: 'TW - Chinese (Traditional Han)',
      },
    },
    HU: {
      domain: 'www.google.hu',
      ext: 'hu',
      iso2: 'HU',
      iso3: 'HUN',
      country: 'Hungary',
      languages: {
        hu: 'Hungarian',
      },
    },
    IS: {
      domain: 'www.google.is',
      ext: 'is',
      iso2: 'IS',
      iso3: 'ISL',
      country: 'Iceland',
      languages: {
        is: 'Icelandic',
      },
    },
    IN: {
      domain: 'www.google.co.in',
      ext: 'in',
      iso2: 'IN',
      iso3: 'IND',
      country: 'India',
      languages: {
        en: 'English',
        hi: 'Hindi',
        bn: 'Bengali',
        te: 'Telugu',
        mr: 'Marathi (Mar\u0101\u1e6dh\u012b)',
        ta: 'Tamil',
        gu: 'Gujarati',
        kn: 'Kannada',
        ml: 'Malayalam',
      },
    },
    ID: {
      domain: 'www.google.co.id',
      ext: 'id',
      iso2: 'ID',
      iso3: 'IDN',
      country: 'Indonesia',
      languages: {
        id: 'Indonesian',
        jw: 'Basa Jawa',
      },
    },
    IQ: {
      domain: 'www.google.iq',
      ext: 'iq',
      iso2: 'IQ',
      iso3: 'IRQ',
      country: 'Iraq',
      languages: {
        ckb: 'Kurdish',
        ar: 'Arabic',
      },
    },
    IE: {
      domain: 'www.google.ie',
      ext: 'ie',
      iso2: 'IE',
      iso3: 'IRL',
      country: 'Ireland',
      languages: {
        en: 'English',
        ga: 'Irish',
      },
    },
    IM: {
      domain: 'www.google.im',
      ext: 'im',
      iso2: 'IM',
      iso3: 'IMN',
      country: 'Isle of Man',
      languages: {
        en: 'English',
      },
    },
    IL: {
      domain: 'www.google.co.il',
      ext: 'il',
      iso2: 'IL',
      iso3: 'ISR',
      country: 'Israel',
      languages: {
        ar: 'Arabic',
        iw: 'Hebrew',
      },
    },
    IT: {
      domain: 'www.google.it',
      ext: 'it',
      iso2: 'IT',
      iso3: 'ITA',
      country: 'Italy',
      languages: {
        it: 'Italian',
      },
    },
    JM: {
      domain: 'www.google.com.jm',
      ext: 'jM',
      iso2: 'JM',
      iso3: 'JAM',
      country: 'Jamaica',
      languages: {
        en: 'English',
      },
    },
    JP: {
      domain: 'www.google.co.jp',
      ext: 'jp',
      iso2: 'JP',
      iso3: 'JPN',
      country: 'Japan',
      languages: {
        ja: 'Japanese',
      },
    },
    JE: {
      domain: 'www.google.je',
      ext: 'je',
      iso2: 'JE',
      iso3: 'JEY',
      country: 'Jersey',
      languages: {
        fr: 'French',
        en: 'English',
      },
    },
    JO: {
      domain: 'www.google.jo',
      ext: 'jo',
      iso2: 'JO',
      iso3: 'JOR',
      country: 'Jordan',
      languages: {
        ar: 'Arabic',
      },
    },
    KZ: {
      domain: 'www.google.kz',
      ext: 'kz',
      iso2: 'KZ',
      iso3: 'KAZ',
      country: 'Kazakhstan',
      languages: {
        kk: 'Kazakh',
        ru: 'Russian',
      },
    },
    KE: {
      domain: 'www.google.co.ke',
      ext: 'ke',
      iso2: 'KE',
      iso3: 'KEN',
      country: 'Kenya',
      languages: {
        sw: 'Swahili',
      },
    },
    KI: {
      domain: 'www.google.ki',
      ext: 'ki',
      iso2: 'KI',
      iso3: 'KIR',
      country: 'Kiribati',
      languages: {
        en: 'English',
      },
    },
    KR: {
      domain: 'www.google.co.kr',
      ext: 'kr',
      iso2: 'KR',
      iso3: 'KOR',
      country: 'Korea, Republic of',
      languages: {
        ko: 'Korean',
      },
    },
    KW: {
      domain: 'www.google.com.kw',
      ext: 'kw',
      iso2: 'KW',
      iso3: 'KWT',
      country: 'Kuwait',
      languages: {
        ar: 'Arabic',
      },
    },
    KG: {
      domain: 'www.google.kg',
      ext: 'kg',
      iso2: 'KG',
      iso3: 'KGZ',
      country: 'Kyrgyzstan',
      languages: {
        ky: 'Kyrgyz',
        ru: 'Russian',
      },
    },
    LA: {
      domain: 'www.google.la',
      ext: 'la',
      iso2: 'LA',
      iso3: 'LAO',
      country: "Lao People's Democratic Republic",
      languages: {
        lo: 'Lao',
      },
    },
    LV: {
      domain: 'www.google.lv',
      ext: 'lv',
      iso2: 'LV',
      iso3: 'LVA',
      country: 'Latvia',
      languages: {
        lv: 'Latvian',
        lt: 'Lithuanian',
        ru: 'Russian',
      },
    },
    LB: {
      domain: 'www.google.com.lb',
      ext: 'lb',
      iso2: 'LB',
      iso3: 'LBN',
      country: 'Lebanon',
      languages: {
        ar: 'Arabic',
        fr: 'French',
        hy: 'Armenian',
      },
    },
    LS: {
      domain: 'www.google.co.ls',
      ext: 'ls',
      iso2: 'LS',
      iso3: 'LSO',
      country: 'Lesotho',
      languages: {
        st: 'Southern Sotho',
        en: 'English',
      },
    },
    LY: {
      domain: 'www.google.com.ly',
      ext: 'ly',
      iso2: 'LY',
      iso3: 'LBY',
      country: 'Libya',
      languages: {
        ar: 'Arabic',
        it: 'Italian',
      },
    },
    LI: {
      domain: 'www.google.li',
      ext: 'li',
      iso2: 'LI',
      iso3: 'LIE',
      country: 'Liechtenstein',
      languages: {
        de: 'German',
      },
    },
    LT: {
      domain: 'www.google.lt',
      ext: 'lt',
      iso2: 'LT',
      iso3: 'LTU',
      country: 'Lithuania',
      languages: {
        lt: 'Lithuanian',
      },
    },
    LU: {
      domain: 'www.google.lu',
      ext: 'lu',
      iso2: 'LU',
      iso3: 'LUX',
      country: 'Luxembourg',
      languages: {
        de: 'German',
        fr: 'French',
      },
    },
    MK: {
      domain: 'www.google.mk',
      ext: 'mk',
      iso2: 'MK',
      iso3: 'MKD',
      country: 'Macedonia, The Former Yugoslav Republic of',
      languages: {
        mk: 'Macedonian',
      },
    },
    MG: {
      domain: 'www.google.mg',
      ext: 'mg',
      iso2: 'MG',
      iso3: 'MDG',
      country: 'Madagascar',
      languages: {
        mg: 'Malagasy',
        fr: 'French',
      },
    },
    MW: {
      domain: 'www.google.mw',
      ext: 'mw',
      iso2: 'MW',
      iso3: 'MWI',
      country: 'Malawi',
      languages: {
        ny: 'Chichewa; Chewa; Nyanja',
      },
    },
    MY: {
      domain: 'www.google.com.my',
      ext: 'my',
      iso2: 'MY',
      iso3: 'MYS',
      country: 'Malaysia',
      languages: {
        ms: 'Malay',
      },
    },
    MV: {
      domain: 'www.google.mv',
      ext: 'mv',
      iso2: 'MV',
      iso3: 'MDV',
      country: 'Maldives',
      languages: {
        en: 'English',
      },
    },
    ML: {
      domain: 'www.google.ml',
      ext: 'ml',
      iso2: 'ML',
      iso3: 'MLI',
      country: 'Mali',
      languages: {
        fr: 'French',
      },
    },
    MT: {
      domain: 'www.google.com.mt',
      ext: 'mt',
      iso2: 'MT',
      iso3: 'MLT',
      country: 'Malta',
      languages: {
        mt: 'Maltese',
      },
    },
    MU: {
      domain: 'www.google.mu',
      ext: 'mu',
      iso2: 'MU',
      iso3: 'MUS',
      country: 'Mauritius',
      languages: {
        en: 'English',
        fr: 'French',
        mfe: 'Kreol morisien',
      },
    },
    MX: {
      domain: 'www.google.com.mx',
      ext: 'mx',
      iso2: 'MX',
      iso3: 'MEX',
      country: 'Mexico',
      languages: {
        es: '419 - Espa\u00f1ol (Latinoam\u00e9rica)',
      },
    },
    FM: {
      domain: 'www.google.fm',
      ext: 'f',
      iso2: 'FM',
      iso3: 'FSM',
      country: 'Micronesia',
      languages: {
        en: 'English',
      },
    },
    MD: {
      domain: 'www.google.md',
      ext: 'md',
      iso2: 'MD',
      iso3: 'MDA',
      country: 'Moldova, Republic of',
      languages: {
        mo: 'Moldovan',
        ru: 'Russian',
      },
    },
    MN: {
      domain: 'www.google.mn',
      ext: 'mn',
      iso2: 'MN',
      iso3: 'MNG',
      country: 'Mongolia',
      languages: {
        mn: 'Mongolian',
      },
    },
    ME: {
      domain: 'www.google.me',
      ext: 'me',
      iso2: 'ME',
      iso3: 'MNE',
      country: 'Montenegro',
      languages: {
        sr: 'Serbian',
        bs: 'Bosnian',
      },
    },
    MS: {
      domain: 'www.google.ms',
      ext: 'ms',
      iso2: 'MS',
      iso3: 'MSR',
      country: 'Montserrat',
      languages: {
        en: 'English',
      },
    },
    MA: {
      domain: 'www.google.co.ma',
      ext: 'ma',
      iso2: 'MA',
      iso3: 'MAR',
      country: 'Morocco',
      languages: {
        fr: 'French',
        ar: 'Arabic',
      },
    },
    MZ: {
      domain: 'www.google.co.mz',
      ext: 'mz',
      iso2: 'MZ',
      iso3: 'MOZ',
      country: 'Mozambique',
      languages: {
        pt: 'PT - Portuguese',
        sw: 'Swahili or Kiswahilior Kiswahili',
        ny: 'Chichewa; Chewa; Nyanja;Chinyanja',
        sn: 'Shona',
      },
    },
    NA: {
      domain: 'www.google.com.na',
      ext: 'na',
      iso2: 'NA',
      iso3: 'NAM',
      country: 'Namibia',
      languages: {
        en: 'English',
        af: 'Afrikaans',
        de: 'German',
      },
    },
    NR: {
      domain: 'www.google.nr',
      ext: 'nr',
      iso2: 'NR',
      iso3: 'NRU',
      country: 'Nauru',
      languages: {
        en: 'English',
      },
    },
    NP: {
      domain: 'www.google.com.np',
      ext: 'np',
      iso2: 'NP',
      iso3: 'NPL',
      country: 'Nepal',
      languages: {
        ne: 'Nepali',
      },
    },
    NL: {
      domain: 'www.google.nl',
      ext: 'nl',
      iso2: 'NL',
      iso3: 'NLD',
      country: 'Netherlands',
      languages: {
        nl: 'Dutch',
        en: 'English',
      },
    },
    NZ: {
      domain: 'www.google.co.nz',
      ext: 'nz',
      iso2: 'NZ',
      iso3: 'NZL',
      country: 'New Zealand',
      languages: {
        en: 'English',
        mi: 'M\u0101ori',
      },
    },
    NI: {
      domain: 'www.google.com.ni',
      ext: 'ni',
      iso2: 'NI',
      iso3: 'NIC',
      country: 'Nicaragua',
      languages: {
        es: '419 - Espa\u00f1ol (Latinoam\u00e9rica)',
      },
    },
    NE: {
      domain: 'www.google.ne',
      ext: 'ne',
      iso2: 'NE',
      iso3: 'NER',
      country: 'Niger',
      languages: {
        fr: 'French',
        ha: 'Hausa',
      },
    },
    NG: {
      domain: 'www.google.com.ng',
      ext: 'ng',
      iso2: 'NG',
      iso3: 'NGA',
      country: 'Nigeria',
      languages: {
        en: 'English',
        ha: 'Hausa',
        ig: 'Igbo',
        yo: 'Yoruba',
        pcm: 'Pidgin',
      },
    },
    NU: {
      domain: 'www.google.nu',
      ext: 'nu',
      iso2: 'NU',
      iso3: 'NIU',
      country: 'Niue',
      languages: {
        en: 'English',
      },
    },
    NF: {
      domain: 'www.google.com.nf',
      ext: 'nf',
      iso2: 'NF',
      iso3: 'NFK',
      country: 'Norfolk Island',
      languages: {
        en: 'English',
      },
    },
    NO: {
      domain: 'www.google.no',
      ext: 'no',
      iso2: 'NO',
      iso3: 'NOR',
      country: 'Norway',
      languages: {
        no: 'Norwegian',
        nn: 'Norwegian Nynorsk',
      },
    },
    OM: {
      domain: 'www.google.com.om',
      ext: 'om',
      iso2: 'OM',
      iso3: 'OMN',
      country: 'Oman',
      languages: {
        ar: 'Arabic',
      },
    },
    PK: {
      domain: 'www.google.com.pk',
      ext: 'pk',
      iso2: 'PK',
      iso3: 'PAK',
      country: 'Pakistan',
      languages: {
        en: 'English',
        ur: 'Urdu',
      },
    },
    PS: {
      domain: 'www.google.ps',
      ext: 'ps',
      iso2: 'PS',
      iso3: 'PSE',
      country: 'Palestinian Territory, Occupied',
      languages: {
        ar: 'Arabic',
      },
    },
    PA: {
      domain: 'www.google.com.pa',
      ext: 'pa',
      iso2: 'PA',
      iso3: 'PAN',
      country: 'Panama',
      languages: {
        es: '419 - Espa\u00f1ol (Latinoam\u00e9rica)',
      },
    },
    PY: {
      domain: 'www.google.com.py',
      ext: 'py',
      iso2: 'PY',
      iso3: 'PRY',
      country: 'Paraguay',
      languages: {
        es: '419 - Espa\u00f1ol (Latinoam\u00e9rica)',
      },
    },
    PE: {
      domain: 'www.google.com.pe',
      ext: 'pe',
      iso2: 'PE',
      iso3: 'PER',
      country: 'Peru',
      languages: {
        es: '419 - Espa\u00f1ol (Latinoam\u00e9rica)',
        qu: 'Quechua',
      },
    },
    PH: {
      domain: 'www.google.com.ph',
      ext: 'ph',
      iso2: 'PH',
      iso3: 'PHL',
      country: 'Philippines',
      languages: {
        tl: 'Tagalog',
      },
    },
    PN: {
      domain: 'www.google.pn',
      ext: 'pn',
      iso2: 'PN',
      iso3: 'PCN',
      country: 'Pitcairn',
      languages: {
        en: 'English',
      },
    },
    PL: {
      domain: 'www.google.pl',
      ext: 'pl',
      iso2: 'PL',
      iso3: 'POL',
      country: 'Poland',
      languages: {
        pl: 'Polish',
      },
    },
    PT: {
      domain: 'www.google.pt',
      ext: 'pt',
      iso2: 'PT',
      iso3: 'PRT',
      country: 'Portugal',
      languages: {
        pt: 'PT - Portuguese',
      },
    },
    PR: {
      domain: 'www.google.com.pr',
      ext: 'pr',
      iso2: 'PR',
      iso3: 'PRI',
      country: 'Puerto Rico',
      languages: {
        es: '419 - Espa\u00f1ol (Latinoam\u00e9rica)',
      },
    },
    QA: {
      domain: 'www.google.com.qa',
      ext: 'qa',
      iso2: 'QA',
      iso3: 'QAT',
      country: 'Qatar',
      languages: {
        ar: 'Arabic',
      },
    },
    RO: {
      domain: 'www.google.ro',
      ext: 'ro',
      iso2: 'RO',
      iso3: 'ROU',
      country: 'Romania',
      languages: {
        ro: 'Romanian, Moldavian, Moldovan',
        hu: 'Hungarian',
        de: 'German',
      },
    },
    RU: {
      domain: 'www.google.ru',
      ext: 'ru',
      iso2: 'RU',
      iso3: 'RUS',
      country: 'Russia',
      languages: {
        ru: 'Russian',
      },
    },
    RW: {
      domain: 'www.google.rw',
      ext: 'rw',
      iso2: 'RW',
      iso3: 'RWA',
      country: 'Rwanda',
      languages: {
        en: 'English',
        fr: 'French',
        sw: 'Swahili',
        rw: 'Kinyarwanda',
      },
    },
    SH: {
      domain: 'www.google.sh',
      ext: 'sh',
      iso2: 'SH',
      iso3: 'SHN',
      country: 'Saint Helena',
      languages: {
        en: 'English',
      },
    },
    VC: {
      domain: 'www.google.com.vc',
      ext: 'vc',
      iso2: 'VC',
      iso3: 'VCT',
      country: 'Saint Vincent and the Grenadines',
      languages: {
        en: 'English',
      },
    },
    WS: {
      domain: 'www.google.ws',
      ext: 'ws',
      iso2: 'WS',
      iso3: 'WSM',
      country: 'Samoa',
      languages: {
        en: 'English',
      },
    },
    SM: {
      domain: 'www.google.sm',
      ext: 'sm',
      iso2: 'SM',
      iso3: 'SMR',
      country: 'San Marino',
      languages: {
        it: 'Italian',
      },
    },
    ST: {
      domain: 'www.google.st',
      ext: 'st',
      iso2: 'ST',
      iso3: 'STP',
      country: 'Sao Tome and Principe',
      languages: {
        pt: 'PT - Portuguese',
      },
    },
    SA: {
      domain: 'www.google.com.sa',
      ext: 'sa',
      iso2: 'SA',
      iso3: 'SAU',
      country: 'Saudi Arabia',
      languages: {
        ar: 'Arabic',
      },
    },
    SN: {
      domain: 'www.google.sn',
      ext: 'sn',
      iso2: 'SN',
      iso3: 'SEN',
      country: 'Senegal',
      languages: {
        fr: 'French',
        wo: 'Wolof',
      },
    },
    RS: {
      domain: 'www.google.rs',
      ext: 'rs',
      iso2: 'RS',
      iso3: 'SRB',
      country: 'Serbia',
      languages: {
        sr: 'Serbian',
      },
    },
    SC: {
      domain: 'www.google.sc',
      ext: 'sc',
      iso2: 'SC',
      iso3: 'SYC',
      country: 'Seychelles',
      languages: {
        crs: 'Kreol Seselwa\u00a0',
        fr: 'French',
        en: 'English',
      },
    },
    SL: {
      domain: 'www.google.com.sl',
      ext: 'sl',
      iso2: 'SL',
      iso3: 'SLE',
      country: 'Sierra Leone',
      languages: {
        en: 'English',
        kri: 'Krio',
      },
    },
    SG: {
      domain: 'www.google.com.sg',
      ext: 'sg',
      iso2: 'SG',
      iso3: 'SGP',
      country: 'Singapore',
      languages: {
        en: 'English',
        zh: 'cn - Chinese (Simplified Han)',
        ms: 'Malay',
        ta: 'Tamil',
      },
    },
    SK: {
      domain: 'www.google.sk',
      ext: 'sk',
      iso2: 'SK',
      iso3: 'SVK',
      country: 'Slovakia',
      languages: {
        sk: 'Slovak',
      },
    },
    SI: {
      domain: 'www.google.si',
      ext: 'si',
      iso2: 'SI',
      iso3: 'SVN',
      country: 'Slovenia',
      languages: {
        sl: 'Slovene',
      },
    },
    SB: {
      domain: 'www.google.com.sb',
      ext: 'sb',
      iso2: 'SB',
      iso3: 'SLB',
      country: 'Solomon Islands',
      languages: {
        en: 'English',
      },
    },
    SO: {
      domain: 'www.google.so',
      ext: 'so',
      iso2: 'SO',
      iso3: 'SOM',
      country: 'Somalia',
      languages: {
        so: 'Somali',
        ar: 'Arabic',
      },
    },
    ZA: {
      domain: 'www.google.co.za',
      ext: 'za',
      iso2: 'ZA',
      iso3: 'ZAF',
      country: 'South Africa',
      languages: {
        af: 'Afrikaans',
        st: 'Southern Sotho or Sesotho',
        zu: 'Zulu or IsiZulu',
        xh: 'Xhosa or IsiXhosa',
        tn: 'Tswana or Setswana',
        nso: 'Northern Sotho',
        en: 'English',
      },
    },
    ES: {
      domain: 'www.google.es',
      ext: 'es',
      iso2: 'ES',
      iso3: 'ESP',
      country: 'Spain',
      languages: {
        es: 'Spanish; Castilian',
        ca: 'Catalan; Valencian',
        gl: 'Galician',
        eu: 'Basque',
      },
    },
    LK: {
      domain: 'www.google.lk',
      ext: 'lk',
      iso2: 'LK',
      iso3: 'LKA',
      country: 'Sri Lanka',
      languages: {
        en: 'English',
        si: 'Sinhala, Sinhalese',
        ta: 'Tamil',
      },
    },
    SE: {
      domain: 'www.google.se',
      ext: 'se',
      iso2: 'SE',
      iso3: 'SWE',
      country: 'Sweden',
      languages: {
        sv: 'Swedish',
      },
    },
    CH: {
      domain: 'www.google.ch',
      ext: 'ch',
      iso2: 'CH',
      iso3: 'CHE',
      country: 'Switzerland',
      languages: {
        de: 'German',
        fr: 'French',
        it: 'Italian',
        rm: 'Romansh',
      },
    },
    TW: {
      domain: 'www.google.com.tw',
      ext: 'tw',
      iso2: 'TW',
      iso3: 'TWN',
      country: 'Taiwan, Province of China',
      languages: {
        zh: 'Chinese',
      },
    },
    TJ: {
      domain: 'www.google.com.tj',
      ext: 'tj',
      iso2: 'TJ',
      iso3: 'TJK',
      country: 'Tajikistan',
      languages: {
        tg: 'Tajik',
        ru: 'Russian',
      },
    },
    TZ: {
      domain: 'www.google.co.tz',
      ext: 'tz',
      iso2: 'TZ',
      iso3: 'TZA',
      country: 'Tanzania, United Republic of',
      languages: {
        sw: 'Swahili or Kiswahilior Kiswahili',
      },
    },
    TH: {
      domain: 'www.google.co.th',
      ext: 'th',
      iso2: 'TH',
      iso3: 'THA',
      country: 'Thailand',
      languages: {
        th: 'Thai',
      },
    },
    TL: {
      domain: 'www.google.tl',
      ext: 'tl',
      iso2: 'TL',
      iso3: 'TLS',
      country: 'Timor-Leste',
      languages: {
        pt: 'PT - Portuguese',
      },
    },
    TG: {
      domain: 'www.google.tg',
      ext: 'tg',
      iso2: 'TG',
      iso3: 'TGO',
      country: 'Togo',
      languages: {
        fr: 'French',
        ee: 'Ewe',
      },
    },
    TK: {
      domain: 'www.google.tk',
      ext: 'tk',
      iso2: 'TK',
      iso3: 'TKL',
      country: 'Tokelau',
      languages: {
        en: 'English',
      },
    },
    TO: {
      domain: 'www.google.to',
      ext: 'to',
      iso2: 'TO',
      iso3: 'TON',
      country: 'Tonga',
      languages: {
        en: 'English',
        to: 'Tonga (Tonga Islands)',
      },
    },
    TT: {
      domain: 'www.google.tt',
      ext: 'tt',
      iso2: 'TT',
      iso3: 'TTO',
      country: 'Trinidad and Tobago',
      languages: {
        en: 'English',
        hi: 'Hindi',
        fr: 'French',
        es: '419 - Espa\u00f1ol (Latinoam\u00e9rica)',
        zh: 'tw - Chinese (Traditional Han)',
      },
    },
    TN: {
      domain: 'www.google.tn',
      ext: 'tn',
      iso2: 'TN',
      iso3: 'TUN',
      country: 'Tunisia',
      languages: {
        ar: 'Arabic',
        fr: 'French',
      },
    },
    TR: {
      domain: 'www.google.com.tr',
      ext: 'tr',
      iso2: 'TR',
      iso3: 'TUR',
      country: 'Turkey',
      languages: {
        tr: 'Turkish',
      },
    },
    TM: {
      domain: 'www.google.tm',
      ext: 'tm',
      iso2: 'TM',
      iso3: 'TKM',
      country: 'Turkmenistan',
      languages: {
        tk: 'Turkmen',
        ru: 'Russian',
        uz: 'Uzbek',
      },
    },
    UG: {
      domain: 'www.google.co.ug',
      ext: 'ug',
      iso2: 'UG',
      iso3: 'UGA',
      country: 'Uganda',
      languages: {
        lg: 'Ganda',
        sw: 'Swahili',
        rw: 'Kinyarwanda',
        ach: 'Luo',
        nym: 'Runyakitara',
      },
    },
    UA: {
      domain: 'www.google.com.ua',
      ext: 'ua',
      iso2: 'UA',
      iso3: 'UKR',
      country: 'Ukraine',
      languages: {
        uk: 'Ukrainian',
        ru: 'Russian',
      },
    },
    AE: {
      domain: 'www.google.ae',
      ext: 'ae',
      iso2: 'AE',
      iso3: 'ARE',
      country: 'United Arab Emirates',
      languages: {
        ar: 'Arabic',
        fa: 'Persian',
        hi: 'Hindi',
        ur: 'Urdu',
      },
    },
    GB: {
      domain: 'www.google.co.uk',
      ext: 'uk',
      iso2: 'GB',
      iso3: 'GBR',
      country: 'United Kingdom',
      languages: {
        en: 'English',
      },
    },
    US: {
      domain: 'www.google.com',
      ext: 'com',
      iso2: 'US',
      iso3: 'USA',
      country: 'United States',
      languages: {
        en: 'English',
      },
    },
    UY: {
      domain: 'www.google.com.uy',
      ext: 'uy',
      iso2: 'UY',
      iso3: 'URY',
      country: 'Uruguay',
      languages: {
        es: '419 - Espa\u00f1ol (Latinoam\u00e9rica)',
      },
    },
    UZ: {
      domain: 'www.google.co.uz',
      ext: 'uz',
      iso2: 'UZ',
      iso3: 'UZB',
      country: 'Uzbekistan',
      languages: {
        uz: 'Uzbek',
        ru: 'Russian',
      },
    },
    VU: {
      domain: 'www.google.vu',
      ext: 'vu',
      iso2: 'VU',
      iso3: 'VUT',
      country: 'Vanuatu',
      languages: {
        en: 'English',
        fr: 'French',
      },
    },
    VE: {
      domain: 'www.google.co.ve',
      ext: 've',
      iso2: 'VE',
      iso3: 'VEN',
      country: 'Venezuela, Bolivarian Republic of',
      languages: {
        es: '419 - Espa\u00f1ol (Latinoam\u00e9rica)',
      },
    },
    VN: {
      domain: 'www.google.com.vn',
      ext: 'vn',
      iso2: 'VN',
      iso3: 'VNM',
      country: 'Viet Nam',
      languages: {
        vi: 'Vietnamese',
        fr: 'French',
        zh: 'TW - Chinese (Traditional Han)',
      },
    },
    VG: {
      domain: 'www.google.vg',
      ext: 'vg',
      iso2: 'VG',
      iso3: 'VGB',
      country: 'Virgin Islands, British',
      languages: {
        en: 'English',
      },
    },
    VI: {
      domain: 'www.google.co.vi',
      ext: 'vi',
      iso2: 'VI',
      iso3: 'VIR',
      country: 'Virgin Islands, U.S.',
      languages: {
        en: 'English',
      },
    },
    ZM: {
      domain: 'www.google.co.zm',
      ext: 'zm',
      iso2: 'ZM',
      iso3: 'ZMB',
      country: 'Zambia',
      languages: {
        en: 'English',
        ny: 'Chichewa; Chewa; Nyanja',
        bem: 'IciBemba',
        tum: 'Chitumbuka-Chisenga',
        loz: 'Silozi',
      },
    },
    ZW: {
      domain: 'www.google.co.zw',
      ext: 'zw',
      iso2: 'ZW',
      iso3: 'ZWE',
      country: 'Zimbabwe',
      languages: {
        en: 'English',
        sn: 'Shona',
        zu: 'Zulu',
        ny: 'Chichewa; Chewa; Nyanja',
        tn: 'Tswana',
      },
    },
  }

  constructor() { }

  ngOnInit(): void {
  }

  isFocused(el) {
    return document.activeElement === el || el.value;
  }

  setFocus(el) {
    el.focus();
  }

  onBlur() {}

  onCountryChange(value) {
    this.selectedCountry = value;
    this.selectedLangauge = Object.keys(this.getSelectedCountryLangauges())[0];
  }

  getSelectedCountryLangauges() {
    return this.countries[this.selectedCountry].languages;
  }
}
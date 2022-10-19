/*
  Authors : bunchdevelopers (Rahul Jograna)
  Website : https://bunchdevelopers.com/
  App Name : ionic6Template Pack
  This App Template Source code is licensed as per the
  terms found in the Website https://bunchdevelopers.com/license
  Copyright and Good Faith Purchasers © 2021-present bunchdevelopers.
*/
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  public countries = [
    {
      isChecked: false,
      country_code: 'AF',
      country_name: 'Afghanistan',
      dialling_code: '93'
    },
    {
      isChecked: false,
      country_code: 'AL',
      country_name: 'Albania',
      dialling_code: '355'
    },
    {
      isChecked: false,
      country_code: 'DZ',
      country_name: 'Algeria',
      dialling_code: '213'
    },
    {
      isChecked: false,
      country_code: 'AS',
      country_name: 'American Samoa',
      dialling_code: '1'
    },
    {
      isChecked: false,
      country_code: 'AD',
      country_name: 'Andorra',
      dialling_code: '376'
    },
    {
      isChecked: false,
      country_code: 'AO',
      country_name: 'Angola',
      dialling_code: '244'
    },
    {
      isChecked: false,
      country_code: 'AI',
      country_name: 'Anguilla',
      dialling_code: '1'
    },
    {
      isChecked: false,
      country_code: 'AG',
      country_name: 'Antigua',
      dialling_code: '1'
    },
    {
      isChecked: false,
      country_code: 'AR',
      country_name: 'Argentina',
      dialling_code: '54'
    },
    {
      isChecked: false,
      country_code: 'AM',
      country_name: 'Armenia',
      dialling_code: '374'
    },
    {
      isChecked: false,
      country_code: 'AW',
      country_name: 'Aruba',
      dialling_code: '297'
    },
    {
      isChecked: false,
      country_code: 'AU',
      country_name: 'Australia',
      dialling_code: '61'
    },
    {
      isChecked: false,
      country_code: 'AI',
      country_name: 'Austria',
      dialling_code: '43'
    },
    {
      isChecked: false,
      country_code: 'AZ',
      country_name: 'Azerbaijan',
      dialling_code: '994'
    },
    {
      isChecked: false,
      country_code: 'BH',
      country_name: 'Bahrain',
      dialling_code: '973'
    },
    {
      isChecked: false,
      country_code: 'BD',
      country_name: 'Bangladesh',
      dialling_code: '880'
    },
    {
      isChecked: false,
      country_code: 'BB',
      country_name: 'Barbados',
      dialling_code: '1'
    },
    {
      isChecked: false,
      country_code: 'BY',
      country_name: 'Belarus',
      dialling_code: '375'
    },
    {
      isChecked: false,
      country_code: 'BE',
      country_name: 'Belgium',
      dialling_code: '32'
    },
    {
      isChecked: false,
      country_code: 'BZ',
      country_name: 'Belize',
      dialling_code: '501'
    },
    {
      isChecked: false,
      country_code: 'BJ',
      country_name: 'Benin',
      dialling_code: '229'
    },
    {
      isChecked: false,
      country_code: 'BM',
      country_name: 'Bermuda',
      dialling_code: '1'
    },
    {
      isChecked: false,
      country_code: 'BT',
      country_name: 'Bhutan',
      dialling_code: '975'
    },
    {
      isChecked: false,
      country_code: 'BO',
      country_name: 'Bolivia',
      dialling_code: '591'
    },
    {
      isChecked: false,
      country_code: 'BA',
      country_name: 'Bosnia and Herzegovina',
      dialling_code: '387'
    },
    {
      isChecked: false,
      country_code: 'BW',
      country_name: 'Botswana',
      dialling_code: '267'
    },
    {
      isChecked: false,
      country_code: 'BR',
      country_name: 'Brazil',
      dialling_code: '55'
    },
    {
      isChecked: false,
      country_code: 'IO',
      country_name: 'British Indian Ocean Territory',
      dialling_code: '246'
    },
    {
      isChecked: false,
      country_code: 'VG',
      country_name: 'British Virgin Islands',
      dialling_code: '1'
    },
    {
      isChecked: false,
      country_code: 'BN',
      country_name: 'Brunei',
      dialling_code: '673'
    },
    {
      isChecked: false,
      country_code: 'BG',
      country_name: 'Bulgaria',
      dialling_code: '359'
    },
    {
      isChecked: false,
      country_code: 'BF',
      country_name: 'Burkina Faso',
      dialling_code: '226'
    },
    {
      isChecked: false,
      country_code: 'MM',
      country_name: 'Burma Myanmar',
      dialling_code: '95'
    },
    {
      isChecked: false,
      country_code: 'BI',
      country_name: 'Burundi',
      dialling_code: '257'
    },
    {
      isChecked: false,
      country_code: 'KH',
      country_name: 'Cambodia',
      dialling_code: '855'
    },
    {
      isChecked: false,
      country_code: 'CM',
      country_name: 'Cameroon',
      dialling_code: '237'
    },
    {
      isChecked: false,
      country_code: 'CA',
      country_name: 'Canada',
      dialling_code: '1'
    },
    {
      isChecked: false,
      country_code: 'CV',
      country_name: 'Cape Verde',
      dialling_code: '238'
    },
    {
      isChecked: false,
      country_code: 'KY',
      country_name: 'Cayman Islands',
      dialling_code: '1'
    },
    {
      isChecked: false,
      country_code: 'CF',
      country_name: 'Central African Republic',
      dialling_code: '236'
    },
    {
      isChecked: false,
      country_code: 'ID',
      country_name: 'Chad',
      dialling_code: '235'
    },
    {
      isChecked: false,
      country_code: 'CL',
      country_name: 'Chile',
      dialling_code: '56'
    },
    {
      isChecked: false,
      country_code: 'CN',
      country_name: 'China',
      dialling_code: '86'
    },
    {
      isChecked: false,
      country_code: 'CO',
      country_name: 'Colombia',
      dialling_code: '57'
    },
    {
      isChecked: false,
      country_code: 'KM',
      country_name: 'Comoros',
      dialling_code: '269'
    },
    {
      isChecked: false,
      country_code: 'CK',
      country_name: 'Cook Islands',
      dialling_code: '682'
    },
    {
      isChecked: false,
      country_code: 'CR',
      country_name: 'Costa Rica',
      dialling_code: '506'
    },
    {
      isChecked: false,
      country_code: 'CI',
      country_name: `Côte d'Ivoire`,
      dialling_code: '225'
    },
    {
      isChecked: false,
      country_code: 'HR',
      country_name: 'Croatia',
      dialling_code: '385'
    },
    {
      isChecked: false,
      country_code: 'CU',
      country_name: 'Cuba',
      dialling_code: '53'
    },
    {
      isChecked: false,
      country_code: 'CY',
      country_name: 'Cyprus',
      dialling_code: '357'
    },
    {
      isChecked: false,
      country_code: 'CZ',
      country_name: 'Czech Republic',
      dialling_code: '420'
    },
    {
      isChecked: false,
      country_code: 'CD',
      country_name: 'Democratic Republic of Congo',
      dialling_code: '243'
    },
    {
      isChecked: false,
      country_code: 'DK',
      country_name: 'Denmark',
      dialling_code: '45'
    },
    {
      isChecked: false,
      country_code: 'DJ',
      country_name: 'Djibouti',
      dialling_code: '253'
    },
    {
      isChecked: false,
      country_code: 'DM',
      country_name: 'Dominica',
      dialling_code: '1'
    },
    {
      isChecked: false,
      country_code: 'DO',
      country_name: 'Dominican Republic',
      dialling_code: '1'
    },
    {
      isChecked: false,
      country_code: 'EC',
      country_name: 'Ecuador',
      dialling_code: '593'
    },
    {
      isChecked: false,
      country_code: 'EG',
      country_name: 'Egypt',
      dialling_code: '20'
    },
    {
      isChecked: false,
      country_code: 'SV',
      country_name: 'El Salvador',
      dialling_code: '503'
    },
    {
      isChecked: false,
      country_code: 'GQ',
      country_name: 'Equatorial Guinea',
      dialling_code: '240'
    },
    {
      isChecked: false,
      country_code: 'ER',
      country_name: 'Eritrea',
      dialling_code: '291'
    },
    {
      isChecked: false,
      country_code: 'EE',
      country_name: 'Estonia',
      dialling_code: '372'
    },
    {
      isChecked: false,
      country_code: 'ET',
      country_name: 'Ethiopia',
      dialling_code: '251'
    },
    {
      isChecked: false,
      country_code: 'FK',
      country_name: 'Falkland Islands',
      dialling_code: '500'
    },
    {
      isChecked: false,
      country_code: 'FO',
      country_name: 'Faroe Islands',
      dialling_code: '298'
    },
    {
      isChecked: false,
      country_code: 'FM',
      country_name: 'Federated States of Micronesia',
      dialling_code: '691'
    },
    {
      isChecked: false,
      country_code: 'FJ',
      country_name: 'Fiji',
      dialling_code: '679'
    },
    {
      isChecked: false,
      country_code: 'FI',
      country_name: 'Finland',
      dialling_code: '358'
    },
    {
      isChecked: false,
      country_code: 'FR',
      country_name: 'France',
      dialling_code: '33'
    },
    {
      isChecked: false,
      country_code: 'GF',
      country_name: 'French Guiana',
      dialling_code: '594'
    },
    {
      isChecked: false,
      country_code: 'PF',
      country_name: 'French Polynesia',
      dialling_code: '689'
    },
    {
      isChecked: false,
      country_code: 'GA',
      country_name: 'Gabon',
      dialling_code: '241'
    },
    {
      isChecked: false,
      country_code: 'GE',
      country_name: 'Georgia',
      dialling_code: '995'
    },
    {
      isChecked: false,
      country_code: 'DE',
      country_name: 'Germany',
      dialling_code: '49'
    },
    {
      isChecked: false,
      country_code: 'GH',
      country_name: 'Ghana',
      dialling_code: '233'
    },
    {
      isChecked: false,
      country_code: 'GI',
      country_name: 'Gibraltar',
      dialling_code: '350'
    },
    {
      isChecked: false,
      country_code: 'GR',
      country_name: 'Greece',
      dialling_code: '30'
    },
    {
      isChecked: false,
      country_code: 'GL',
      country_name: 'Greenland',
      dialling_code: '299'
    },
    {
      isChecked: false,
      country_code: 'GD',
      country_name: 'Grenada',
      dialling_code: '1'
    },
    {
      isChecked: false,
      country_code: 'GP',
      country_name: 'Guadeloupe',
      dialling_code: '590'
    },
    {
      isChecked: false,
      country_code: 'GU',
      country_name: 'Guam',
      dialling_code: '1'
    },
    {
      isChecked: false,
      country_code: 'GT',
      country_name: 'Guatemala',
      dialling_code: '502'
    },
    {
      isChecked: false,
      country_code: 'GN',
      country_name: 'Guinea',
      dialling_code: '224'
    },
    {
      isChecked: false,
      country_code: 'GW',
      country_name: 'Guinea-Bissau',
      dialling_code: '245'
    },
    {
      isChecked: false,
      country_code: 'GY',
      country_name: 'Guyana',
      dialling_code: '592'
    },
    {
      isChecked: false,
      country_code: 'HT',
      country_name: 'Haiti',
      dialling_code: '509'
    },
    {
      isChecked: false,
      country_code: 'HN',
      country_name: 'Honduras',
      dialling_code: '504'
    },
    {
      isChecked: false,
      country_code: 'HK',
      country_name: 'Hong Kong',
      dialling_code: '852'
    },
    {
      isChecked: false,
      country_code: 'HU',
      country_name: 'Hungary',
      dialling_code: '36'
    },
    {
      isChecked: false,
      country_code: 'IS',
      country_name: 'Iceland',
      dialling_code: '354'
    },
    {
      isChecked: false,
      country_code: 'IN',
      country_name: 'India',
      dialling_code: '91'
    },
    {
      isChecked: false,
      country_code: 'ID',
      country_name: 'Indonesia',
      dialling_code: '62'
    },
    {
      isChecked: false,
      country_code: 'IR',
      country_name: 'Iran',
      dialling_code: '98'
    },
    {
      isChecked: false,
      country_code: 'IQ',
      country_name: 'Iraq',
      dialling_code: '964'
    },
    {
      isChecked: false,
      country_code: 'IE',
      country_name: 'Ireland',
      dialling_code: '353'
    },
    {
      isChecked: false,
      country_code: 'IL',
      country_name: 'Israel',
      dialling_code: '972'
    },
    {
      isChecked: false,
      country_code: 'IT',
      country_name: 'Italy',
      dialling_code: '39'
    },
    {
      isChecked: false,
      country_code: 'JM',
      country_name: 'Jamaica',
      dialling_code: '1'
    },
    {
      isChecked: false,
      country_code: 'JP',
      country_name: 'Japan',
      dialling_code: '81'
    },
    {
      isChecked: false,
      country_code: 'JO',
      country_name: 'Jordan',
      dialling_code: '962'
    },
    {
      isChecked: false,
      country_code: 'KZ',
      country_name: 'Kazakhstan',
      dialling_code: '7'
    },
    {
      isChecked: false,
      country_code: 'KE',
      country_name: 'Kenya',
      dialling_code: '254'
    },
    {
      isChecked: false,
      country_code: 'KI',
      country_name: 'Kiribati',
      dialling_code: '686'
    },
    {
      isChecked: false,
      country_code: 'XK',
      country_name: 'Kosovo',
      dialling_code: '381'
    },
    {
      isChecked: false,
      country_code: 'KW',
      country_name: 'Kuwait',
      dialling_code: '965'
    },
    {
      isChecked: false,
      country_code: 'KG',
      country_name: 'Kyrgyzstan',
      dialling_code: '996'
    },
    {
      isChecked: false,
      country_code: 'LA',
      country_name: 'Laos',
      dialling_code: '856'
    },
    {
      isChecked: false,
      country_code: 'LV',
      country_name: 'Latvia',
      dialling_code: '371'
    },
    {
      isChecked: false,
      country_code: 'LB',
      country_name: 'Lebanon',
      dialling_code: '961'
    },
    {
      isChecked: false,
      country_code: 'LS',
      country_name: 'Lesotho',
      dialling_code: '266'
    },
    {
      isChecked: false,
      country_code: 'LR',
      country_name: 'Liberia',
      dialling_code: '231'
    },
    {
      isChecked: false,
      country_code: 'LY',
      country_name: 'Libya',
      dialling_code: '218'
    },
    {
      isChecked: false,
      country_code: 'LI',
      country_name: 'Liechtenstein',
      dialling_code: '423'
    },
    {
      isChecked: false,
      country_code: 'LT',
      country_name: 'Lithuania',
      dialling_code: '370'
    },
    {
      isChecked: false,
      country_code: 'LU',
      country_name: 'Luxembourg',
      dialling_code: '352'
    },
    {
      isChecked: false,
      country_code: 'MO',
      country_name: 'Macau',
      dialling_code: '853'
    },
    {
      isChecked: false,
      country_code: 'MK',
      country_name: 'Macedonia',
      dialling_code: '389'
    },
    {
      isChecked: false,
      country_code: 'MG',
      country_name: 'Madagascar',
      dialling_code: '261'
    },
    {
      isChecked: false,
      country_code: 'MW',
      country_name: 'Malawi',
      dialling_code: '265'
    },
    {
      isChecked: false,
      country_code: 'MY',
      country_name: 'Malaysia',
      dialling_code: '60'
    },
    {
      isChecked: false,
      country_code: 'MV',
      country_name: 'Maldives',
      dialling_code: '960'
    },
    {
      isChecked: false,
      country_code: 'ML',
      country_name: 'Mali',
      dialling_code: '223'
    },
    {
      isChecked: false,
      country_code: 'MT',
      country_name: 'Malta',
      dialling_code: '356'
    },
    {
      isChecked: false,
      country_code: 'MH',
      country_name: 'Marshall Islands',
      dialling_code: '692'
    },
    {
      isChecked: false,
      country_code: 'MQ',
      country_name: 'Martinique',
      dialling_code: '596'
    },
    {
      isChecked: false,
      country_code: 'MR',
      country_name: 'Mauritania',
      dialling_code: '222'
    },
    {
      isChecked: false,
      country_code: 'MU',
      country_name: 'Mauritius',
      dialling_code: '230'
    },
    {
      isChecked: false,
      country_code: 'YT',
      country_name: 'Mayotte',
      dialling_code: '262'
    },
    {
      isChecked: false,
      country_code: 'MX',
      country_name: 'Mexico',
      dialling_code: '52'
    },
    {
      isChecked: false,
      country_code: 'MD',
      country_name: 'Moldova',
      dialling_code: '373'
    },
    {
      isChecked: false,
      country_code: 'MC',
      country_name: 'Monaco',
      dialling_code: '377'
    },
    {
      isChecked: false,
      country_code: 'MN',
      country_name: 'Mongolia',
      dialling_code: '976'
    },
    {
      isChecked: false,
      country_code: 'ME',
      country_name: 'Montenegro',
      dialling_code: '382'
    },
    {
      isChecked: false,
      country_code: 'MS',
      country_name: 'Montserrat',
      dialling_code: '1'
    },
    {
      isChecked: false,
      country_code: 'MA',
      country_name: 'Morocco',
      dialling_code: '212'
    },
    {
      isChecked: false,
      country_code: 'MZ',
      country_name: 'Mozambique',
      dialling_code: '258'
    },
    {
      isChecked: false,
      country_code: 'NA',
      country_name: 'Namibia',
      dialling_code: '264'
    },
    {
      isChecked: false,
      country_code: 'NR',
      country_name: 'Nauru',
      dialling_code: '674'
    },
    {
      isChecked: false,
      country_code: 'NP',
      country_name: 'Nepal',
      dialling_code: '977'
    },
    {
      isChecked: false,
      country_code: 'NL',
      country_name: 'Netherlands',
      dialling_code: '31'
    },
    {
      isChecked: false,
      country_code: 'AN',
      country_name: 'Netherlands Antilles',
      dialling_code: '599'
    },
    {
      isChecked: false,
      country_code: 'NC',
      country_name: 'New Caledonia',
      dialling_code: '687'
    },
    {
      isChecked: false,
      country_code: 'NZ',
      country_name: 'New Zealand',
      dialling_code: '64'
    },
    {
      isChecked: false,
      country_code: 'NI',
      country_name: 'Nicaragua',
      dialling_code: '505'
    },
    {
      isChecked: false,
      country_code: 'NE',
      country_name: 'Niger',
      dialling_code: '227'
    },
    {
      isChecked: false,
      country_code: 'NG',
      country_name: 'Nigeria',
      dialling_code: '234'
    },
    {
      isChecked: false,
      country_code: 'NU',
      country_name: 'Niue',
      dialling_code: '683'
    },
    {
      isChecked: false,
      country_code: 'NF',
      country_name: 'Norfolk Island',
      dialling_code: '672'
    },
    {
      isChecked: false,
      country_code: 'KP',
      country_name: 'North Korea',
      dialling_code: '850'
    },
    {
      isChecked: false,
      country_code: 'MP',
      country_name: 'Northern Mariana Islands',
      dialling_code: '1'
    },
    {
      isChecked: false,
      country_code: 'NO',
      country_name: 'Norway',
      dialling_code: '47'
    },
    {
      isChecked: false,
      country_code: 'OM',
      country_name: 'Oman',
      dialling_code: '968'
    },
    {
      isChecked: false,
      country_code: 'PK',
      country_name: 'Pakistan',
      dialling_code: '92'
    },
    {
      isChecked: false,
      country_code: 'PW',
      country_name: 'Palau',
      dialling_code: '680'
    },
    {
      isChecked: false,
      country_code: 'PS',
      country_name: 'Palestine',
      dialling_code: '970'
    },
    {
      isChecked: false,
      country_code: 'PA',
      country_name: 'Panama',
      dialling_code: '507'
    },
    {
      isChecked: false,
      country_code: 'PG',
      country_name: 'Papua New Guinea',
      dialling_code: '675'
    },
    {
      isChecked: false,
      country_code: 'PY',
      country_name: 'Paraguay',
      dialling_code: '595'
    },
    {
      isChecked: false,
      country_code: 'PE',
      country_name: 'Peru',
      dialling_code: '51'
    },
    {
      isChecked: false,
      country_code: 'PH',
      country_name: 'Philippines',
      dialling_code: '63'
    },
    {
      isChecked: false,
      country_code: 'PL',
      country_name: 'Poland',
      dialling_code: '48'
    },
    {
      isChecked: false,
      country_code: 'PT',
      country_name: 'Portugal',
      dialling_code: '351'
    },
    {
      isChecked: false,
      country_code: 'PR',
      country_name: 'Puerto Rico',
      dialling_code: '1'
    },
    {
      isChecked: false,
      country_code: 'QA',
      country_name: 'Qatar',
      dialling_code: '974'
    },
    {
      isChecked: false,
      country_code: 'CG',
      country_name: 'Republic of the Congo',
      dialling_code: '242'
    },
    {
      isChecked: false,
      country_code: 'RE',
      country_name: 'Réunion',
      dialling_code: '262'
    },
    {
      isChecked: false,
      country_code: 'RO',
      country_name: 'Romania',
      dialling_code: '40'
    },
    {
      isChecked: false,
      country_code: 'RU',
      country_name: 'Russia',
      dialling_code: '7'
    },
    {
      isChecked: false,
      country_code: 'RW',
      country_name: 'Rwanda',
      dialling_code: '250'
    },
    {
      isChecked: false,
      country_code: 'BL',
      country_name: 'Saint Barthélemy',
      dialling_code: '590'
    },
    {
      isChecked: false,
      country_code: 'SH',
      country_name: 'Saint Helena',
      dialling_code: '290'
    },
    {
      isChecked: false,
      country_code: 'KN',
      country_name: 'Saint Kitts and Nevis',
      dialling_code: '1'
    },
    {
      isChecked: false,
      country_code: 'MF',
      country_name: 'Saint Martin',
      dialling_code: '590'
    },
    {
      isChecked: false,
      country_code: 'PM',
      country_name: 'Saint Pierre and Miquelon',
      dialling_code: '508'
    },
    {
      isChecked: false,
      country_code: 'VC',
      country_name: 'Saint Vincent and the Grenadines',
      dialling_code: '1'
    },
    {
      isChecked: false,
      country_code: 'WS',
      country_name: 'Samoa',
      dialling_code: '685'
    },
    {
      isChecked: false,
      country_code: 'SM',
      country_name: 'San Marino',
      dialling_code: '378'
    },
    {
      isChecked: false,
      country_code: 'ST',
      country_name: 'São Tomé and Príncipe',
      dialling_code: '239'
    },
    {
      isChecked: false,
      country_code: 'SA',
      country_name: 'Saudi Arabia',
      dialling_code: '966'
    },
    {
      isChecked: false,
      country_code: 'SN',
      country_name: 'Senegal',
      dialling_code: '221'
    },
    {
      isChecked: false,
      country_code: 'RS',
      country_name: 'Serbia',
      dialling_code: '381'
    },
    {
      isChecked: false,
      country_code: 'SC',
      country_name: 'Seychelles',
      dialling_code: '248'
    },
    {
      isChecked: false,
      country_code: 'SL',
      country_name: 'Sierra Leone',
      dialling_code: '232'
    },
    {
      isChecked: false,
      country_code: 'SG',
      country_name: 'Singapore',
      dialling_code: '65'
    },
    {
      isChecked: false,
      country_code: 'SK',
      country_name: 'Slovakia',
      dialling_code: '421'
    },
    {
      isChecked: false,
      country_code: 'SI',
      country_name: 'Slovenia',
      dialling_code: '386'
    },
    {
      isChecked: false,
      country_code: 'SB',
      country_name: 'Solomon Islands',
      dialling_code: '677'
    },
    {
      isChecked: false,
      country_code: 'SO',
      country_name: 'Somalia',
      dialling_code: '252'
    },
    {
      isChecked: false,
      country_code: 'ZA',
      country_name: 'South Africa',
      dialling_code: '27'
    },
    {
      isChecked: false,
      country_code: 'KR',
      country_name: 'South Korea',
      dialling_code: '82'
    },
    {
      isChecked: false,
      country_code: 'ES',
      country_name: 'Spain',
      dialling_code: '34'
    },
    {
      isChecked: false,
      country_code: 'LK',
      country_name: 'Sri Lanka',
      dialling_code: '94'
    },
    {
      isChecked: false,
      country_code: 'LC',
      country_name: 'St. Lucia',
      dialling_code: '1'
    },
    {
      isChecked: false,
      country_code: 'SD',
      country_name: 'Sudan',
      dialling_code: '249'
    },
    {
      isChecked: false,
      country_code: 'SR',
      country_name: 'Suriname',
      dialling_code: '597'
    },
    {
      isChecked: false,
      country_code: 'SZ',
      country_name: 'Swaziland',
      dialling_code: '268'
    },
    {
      isChecked: false,
      country_code: 'SE',
      country_name: 'Sweden',
      dialling_code: '46'
    },
    {
      isChecked: false,
      country_code: 'CH',
      country_name: 'Switzerland',
      dialling_code: '41'
    },
    {
      isChecked: false,
      country_code: 'SY',
      country_name: 'Syria',
      dialling_code: '963'
    },
    {
      isChecked: false,
      country_code: 'TW',
      country_name: 'Taiwan',
      dialling_code: '886'
    },
    {
      isChecked: false,
      country_code: 'TJ',
      country_name: 'Tajikistan',
      dialling_code: '992'
    },
    {
      isChecked: false,
      country_code: 'TZ',
      country_name: 'Tanzania',
      dialling_code: '255'
    },
    {
      isChecked: false,
      country_code: 'TH',
      country_name: 'Thailand',
      dialling_code: '66'
    },
    {
      isChecked: false,
      country_code: 'BS',
      country_name: 'The Bahamas',
      dialling_code: '1'
    },
    {
      isChecked: false,
      country_code: 'GM',
      country_name: 'The Gambia',
      dialling_code: '220'
    },
    {
      isChecked: false,
      country_code: 'TL',
      country_name: 'Timor-Leste',
      dialling_code: '670'
    },
    {
      isChecked: false,
      country_code: 'TG',
      country_name: 'Togo',
      dialling_code: '228'
    },
    {
      isChecked: false,
      country_code: 'TK',
      country_name: 'Tokelau',
      dialling_code: '690'
    },
    {
      isChecked: false,
      country_code: 'TO',
      country_name: 'Tonga',
      dialling_code: '676'
    },
    {
      isChecked: false,
      country_code: 'TT',
      country_name: 'Trinidad and Tobago',
      dialling_code: '1'
    },
    {
      isChecked: false,
      country_code: 'TN',
      country_name: 'Tunisia',
      dialling_code: '216'
    },
    {
      isChecked: false,
      country_code: 'TR',
      country_name: 'Turkey',
      dialling_code: '90'
    },
    {
      isChecked: false,
      country_code: 'TM',
      country_name: 'Turkmenistan',
      dialling_code: '993'
    },
    {
      isChecked: false,
      country_code: 'TC',
      country_name: 'Turks and Caicos Islands',
      dialling_code: '1'
    },
    {
      isChecked: false,
      country_code: 'TV',
      country_name: 'Tuvalu',
      dialling_code: '688'
    },
    {
      isChecked: false,
      country_code: 'UG',
      country_name: 'Uganda',
      dialling_code: '256'
    },
    {
      isChecked: false,
      country_code: 'UA',
      country_name: 'Ukraine',
      dialling_code: '380'
    },
    {
      isChecked: false,
      country_code: 'AE',
      country_name: 'United Arab Emirates',
      dialling_code: '971'
    },
    {
      isChecked: false,
      country_code: 'GB',
      country_name: 'United Kingdom',
      dialling_code: '44'
    },
    {
      isChecked: false,
      country_code: 'US',
      country_name: 'United States',
      dialling_code: '1'
    },
    {
      isChecked: false,
      country_code: 'UY',
      country_name: 'Uruguay',
      dialling_code: '598'
    },
    {
      isChecked: false,
      country_code: 'VI',
      country_name: 'US Virgin Islands',
      dialling_code: '1'
    },
    {
      isChecked: false,
      country_code: 'UZ',
      country_name: 'Uzbekistan',
      dialling_code: '998'
    },
    {
      isChecked: false,
      country_code: 'VU',
      country_name: 'Vanuatu',
      dialling_code: '678'
    },
    {
      isChecked: false,
      country_code: 'VA',
      country_name: 'Vatican City',
      dialling_code: '39'
    },
    {
      isChecked: false,
      country_code: 'VE',
      country_name: 'Venezuela',
      dialling_code: '58'
    },
    {
      isChecked: false,
      country_code: 'VN',
      country_name: 'Vietnam',
      dialling_code: '84'
    },
    {
      isChecked: false,
      country_code: 'WF',
      country_name: 'Wallis and Futuna',
      dialling_code: '681'
    },
    {
      isChecked: false,
      country_code: 'YE',
      country_name: 'Yemen',
      dialling_code: '967'
    },
    {
      isChecked: false,
      country_code: 'ZM',
      country_name: 'Zambia',
      dialling_code: '260'
    },
    {
      isChecked: false,
      country_code: 'ZW',
      country_name: 'Zimbabwe',
      dialling_code: '263'
    }
  ];
  constructor() { }
}

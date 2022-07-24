///1. set up our http request
let xhr = new XMLHttpRequest(); //created XMLHttpRequest

//2.open the request
xhr.open('GET', "https://restcountries.com/v3.1/all")

//set up listener to process the complete request

xhr.onload = function() {
  ///get the data from the server
    if (xhr.status>=200&& xhr.status<300){
      //only if request is ok and received the data
        let data = JSON.parse(this.response);
        console.log(data);
        for (let i=0; i<data.length; i++) {
            console.log(`
            Name : ${data[i].name.official}
            Region : ${data[i].region}
            Subregion : ${data[i].subregion}
            Population: ${data[i].population}
            `);


    }}else{
      ///run if the request is not successful
      console.log("Error");
    }
  }

    ///send the request
xhr.send();

///////////////////////////////////////////////////////////////////////////////

/////////Expected output
/*
            Name : Guam
            Region : Oceania
            Subregion : Micronesia
            Population: 168783

script.js:16
            Name : People's Republic of Bangladesh
            Region : Asia
            Subregion : Southern Asia
            Population: 164689383

script.js:16
            Name : Cook Islands
            Region : Oceania
            Subregion : Polynesia
            Population: 18100

script.js:16
            Name : Federal Democratic Republic of Nepal
            Region : Asia
            Subregion : Southern Asia
            Population: 29136808

script.js:16
            Name : Principality of Monaco
            Region : Europe
            Subregion : Western Europe
            Population: 39244

script.js:16
            Name : Republic of Turkey
            Region : Asia
            Subregion : Western Asia
            Population: 84339067

script.js:16
            Name : Collectivity of Saint Barthélemy
            Region : Americas
            Subregion : Caribbean
            Population: 4255

script.js:16
            Name : Jamaica
            Region : Americas
            Subregion : Caribbean
            Population: 2961161

script.js:16
            Name : Principality of Andorra
            Region : Europe
            Subregion : Southern Europe
            Population: 77265

script.js:16
            Name : State of Libya
            Region : Africa
            Subregion : Northern Africa
            Population: 6871287

script.js:16
            Name : Bailiwick of Jersey
            Region : Europe
            Subregion : Northern Europe
            Population: 100800

script.js:16
            Name : Republic of Malta
            Region : Europe
            Subregion : Southern Europe
            Population: 525285

script.js:16
            Name : Plurinational State of Bolivia
            Region : Americas
            Subregion : South America
            Population: 11673029

script.js:16
            Name : Republic of Mauritius
            Region : Africa
            Subregion : Eastern Africa
            Population: 1265740

script.js:16
            Name : Commonwealth of Puerto Rico
            Region : Americas
            Subregion : Caribbean
            Population: 3194034

script.js:16
            Name : French Republic
            Region : Europe
            Subregion : Western Europe
            Population: 67391582

script.js:16
            Name : Grand Duchy of Luxembourg
            Region : Europe
            Subregion : Western Europe
            Population: 632275

script.js:16
            Name : Republic of Kosovo
            Region : Europe
            Subregion : Southeast Europe
            Population: 1775378

script.js:16
            Name : Republic of Madagascar
            Region : Africa
            Subregion : Eastern Africa
            Population: 27691019

script.js:16
            Name : Islamic Republic of Pakistan
            Region : Asia
            Subregion : Southern Asia
            Population: 220892331

script.js:16
            Name : Republic of Malawi
            Region : Africa
            Subregion : Eastern Africa
            Population: 19129955

script.js:16
            Name : Republic of Slovenia
            Region : Europe
            Subregion : Central Europe
            Population: 2100126

script.js:16
            Name : Kingdom of Eswatini
            Region : Africa
            Subregion : Southern Africa
            Population: 1160164

script.js:16
            Name : United States of America
            Region : Americas
            Subregion : North America
            Population: 329484123

script.js:16
            Name : Independent and Sovereign Republic of Kiribati
            Region : Oceania
            Subregion : Micronesia
            Population: 119446

script.js:16
            Name : Republic of Azerbaijan
            Region : Asia
            Subregion : Western Asia
            Population: 10110116

script.js:16
            Name : Republic of Zambia
            Region : Africa
            Subregion : Eastern Africa
            Population: 18383956

script.js:16
            Name : Republic of Kenya
            Region : Africa
            Subregion : Eastern Africa
            Population: 53771300

script.js:16
            Name : State of Kuwait
            Region : Asia
            Subregion : Western Asia
            Population: 4270563

script.js:16
            Name : Republic of Kazakhstan
            Region : Asia
            Subregion : Central Asia
            Population: 18754440

script.js:16
            Name : Republic of Latvia
            Region : Europe
            Subregion : Northern Europe
            Population: 1901548

script.js:16
            Name : Republic of Sierra Leone
            Region : Africa
            Subregion : Western Africa
            Population: 7976985

script.js:16
            Name : Federation of Saint Christopher and Nevis
            Region : Americas
            Subregion : Caribbean
            Population: 53192

script.js:16
            Name : Belize
            Region : Americas
            Subregion : Central America
            Population: 397621

script.js:16
            Name : Martinique
            Region : Americas
            Subregion : Caribbean
            Population: 378243

script.js:16
            Name : Romania
            Region : Europe
            Subregion : Southeast Europe
            Population: 19286123

script.js:16
            Name : Virgin Islands
            Region : Americas
            Subregion : Caribbean
            Population: 30237

script.js:16
            Name : New Zealand
            Region : Oceania
            Subregion : Australia and New Zealand
            Population: 5084300

script.js:16
            Name : Federative Republic of Brazil
            Region : Americas
            Subregion : South America
            Population: 212559409

script.js:16
            Name : Central African Republic
            Region : Africa
            Subregion : Middle Africa
            Population: 4829764

script.js:16
            Name : Republic of the Marshall Islands
            Region : Oceania
            Subregion : Micronesia
            Population: 59194

script.js:16
            Name : Territory of the French Southern and Antarctic Lands
            Region : Antarctic
            Subregion : undefined
            Population: 400

script.js:16
            Name : Territory of the Wallis and Futuna Islands
            Region : Oceania
            Subregion : Polynesia
            Population: 11750

script.js:16
            Name : Russian Federation
            Region : Europe
            Subregion : Eastern Europe
            Population: 144104080

script.js:16
            Name : Republic of Panama
            Region : Americas
            Subregion : Central America
            Population: 4314768

script.js:16
            Name : Nation of Brunei, Abode of Peace
            Region : Asia
            Subregion : South-Eastern Asia
            Population: 437483

script.js:16
            Name : Gibraltar
            Region : Europe
            Subregion : Southern Europe
            Population: 33691

script.js:16
            Name : Malaysia
            Region : Asia
            Subregion : South-Eastern Asia
            Population: 32365998

script.js:16
            Name : Republic of Ecuador
            Region : Americas
            Subregion : South America
            Population: 17643060

script.js:16
            Name : Kingdom of Morocco
            Region : Africa
            Subregion : Northern Africa
            Population: 36910558

script.js:16
            Name : Saint Vincent and the Grenadines
            Region : Americas
            Subregion : Caribbean
            Population: 110947

script.js:16
            Name : Republic of Cuba
            Region : Americas
            Subregion : Caribbean
            Population: 11326616

script.js:16
            Name : Principality of Liechtenstein
            Region : Europe
            Subregion : Western Europe
            Population: 38137

script.js:16
            Name : Commonwealth of the Bahamas
            Region : Americas
            Subregion : Caribbean
            Population: 393248

script.js:16
            Name : Canada
            Region : Americas
            Subregion : North America
            Population: 38005238

script.js:16
            Name : Republic of Fiji
            Region : Oceania
            Subregion : Melanesia
            Population: 896444

script.js:16
            Name : Kingdom of Saudi Arabia
            Region : Asia
            Subregion : Western Asia
            Population: 34813867

script.js:16
            Name : Cayman Islands
            Region : Americas
            Subregion : Caribbean
            Population: 65720

script.js:16
            Name : Republic of Lithuania
            Region : Europe
            Subregion : Northern Europe
            Population: 2794700

script.js:16
            Name : Bonaire, Sint Eustatius and Saba
            Region : Americas
            Subregion : Caribbean
            Population: 25987

script.js:16
            Name : Republic of Ireland
            Region : Europe
            Subregion : Northern Europe
            Population: 4994724

script.js:16
            Name : Republic of Chile
            Region : Americas
            Subregion : South America
            Population: 19116209

script.js:16
            Name : Turkmenistan
            Region : Asia
            Subregion : Central Asia
            Population: 6031187

script.js:16
            Name : Republic of the Union of Myanmar
            Region : Asia
            Subregion : South-Eastern Asia
            Population: 54409794

script.js:16
            Name : Republic of Yemen
            Region : Asia
            Subregion : Western Asia
            Population: 29825968

script.js:16
            Name : Saint Helena, Ascension and Tristan da Cunha
            Region : Africa
            Subregion : Western Africa
            Population: 53192

script.js:16
            Name : Democratic Republic of São Tomé and Príncipe
            Region : Africa
            Subregion : Middle Africa
            Population: 219161

script.js:16
            Name : Republic of Guatemala
            Region : Americas
            Subregion : Central America
            Population: 16858333

script.js:16
            Name : Republic of Singapore
            Region : Asia
            Subregion : South-Eastern Asia
            Population: 5685807

script.js:16
            Name : Bolivarian Republic of Venezuela
            Region : Americas
            Subregion : South America
            Population: 28435943

script.js:16
            Name : Union of the Comoros
            Region : Africa
            Subregion : Eastern Africa
            Population: 869595

script.js:16
            Name : Sahrawi Arab Democratic Republic
            Region : Africa
            Subregion : Northern Africa
            Population: 510713

script.js:16
            Name : Republic of Namibia
            Region : Africa
            Subregion : Southern Africa
            Population: 2540916

script.js:16
            Name : Democratic Republic of Timor-Leste
            Region : Asia
            Subregion : South-Eastern Asia
            Population: 1318442

script.js:16
            Name : Bosnia and Herzegovina
            Region : Europe
            Subregion : Southeast Europe
            Population: 3280815

script.js:16
            Name : Republic of Cabo Verde
            Region : Africa
            Subregion : Western Africa
            Population: 555988

script.js:16
            Name : Hong Kong Special Administrative Region of the People's Republic of China
            Region : Asia
            Subregion : Eastern Asia
            Population: 7500700

script.js:16
            Name : Republic of Moldova
            Region : Europe
            Subregion : Eastern Europe
            Population: 2617820

script.js:16
            Name : Republic of the Philippines
            Region : Asia
            Subregion : South-Eastern Asia
            Population: 109581085

script.js:16
            Name : Guadeloupe
            Region : Americas
            Subregion : Caribbean
            Population: 400132

script.js:16
            Name : Republic of Zimbabwe
            Region : Africa
            Subregion : Southern Africa
            Population: 14862927

script.js:16
            Name : Grenada
            Region : Americas
            Subregion : Caribbean
            Population: 112519

script.js:16
            Name : Isle of Man
            Region : Europe
            Subregion : Northern Europe
            Population: 85032

script.js:16
            Name : United Republic of Tanzania
            Region : Africa
            Subregion : Eastern Africa
            Population: 59734213

script.js:16
            Name : Republic of Seychelles
            Region : Africa
            Subregion : Eastern Africa
            Population: 98462

script.js:16
            Name : Kingdom of the Netherlands
            Region : Europe
            Subregion : Western Europe
            Population: 16655799

script.js:16
            Name : Republic of Paraguay
            Region : Americas
            Subregion : South America
            Population: 7132530

script.js:16
            Name : Republic of San Marino
            Region : Europe
            Subregion : Southern Europe
            Population: 33938

script.js:16
            Name : Republic of Bulgaria
            Region : Europe
            Subregion : Southeast Europe
            Population: 6927288

script.js:16
            Name : Virgin Islands of the United States
            Region : Americas
            Subregion : Caribbean
            Population: 106290

script.js:16
            Name : Tunisian Republic
            Region : Africa
            Subregion : Northern Africa
            Population: 11818618

script.js:16
            Name : Iceland
            Region : Europe
            Subregion : Northern Europe
            Population: 366425

script.js:16
            Name : Democratic Republic of the Congo
            Region : Africa
            Subregion : Middle Africa
            Population: 108407721

script.js:16
            Name : Aruba
            Region : Americas
            Subregion : Caribbean
            Population: 106766

script.js:16
            Name : Republic of Indonesia
            Region : Asia
            Subregion : South-Eastern Asia
            Population: 273523621

script.js:16
            Name : Republic of El Salvador
            Region : Americas
            Subregion : Central America
            Population: 6486201

script.js:16
            Name : Slovak Republic
            Region : Europe
            Subregion : Central Europe
            Population: 5458827

script.js:16
            Name : Kingdom of Sweden
            Region : Europe
            Subregion : Northern Europe
            Population: 10353442

script.js:16
            Name : Lao People's Democratic Republic
            Region : Asia
            Subregion : South-Eastern Asia
            Population: 7275556

script.js:16
            Name : Republic of the Gambia
            Region : Africa
            Subregion : Western Africa
            Population: 2416664

script.js:16
            Name : State of Israel
            Region : Asia
            Subregion : Western Asia
            Population: 9216900

script.js:16
            Name : Svalbard og Jan Mayen
            Region : Europe
            Subregion : Northern Europe
            Population: 2562

script.js:16
            Name : Montenegro
            Region : Europe
            Subregion : Southeast Europe
            Population: 621718

script.js:16
            Name : Federal Republic of Somalia
            Region : Africa
            Subregion : Eastern Africa
            Population: 15893219

script.js:16
            Name : Réunion Island
            Region : Africa
            Subregion : Eastern Africa
            Population: 840974

script.js:16
            Name : Democratic Socialist Republic of Sri Lanka
            Region : Asia
            Subregion : Southern Asia
            Population: 21919000

script.js:16
            Name : Federal Republic of Germany
            Region : Europe
            Subregion : Western Europe
            Population: 83240525

script.js:16
            Name : Republic of Serbia
            Region : Europe
            Subregion : Southeast Europe
            Population: 6908224

script.js:16
            Name : Macao Special Administrative Region of the People's Republic of China
            Region : Asia
            Subregion : Eastern Asia
            Population: 649342

script.js:16
            Name : Co-operative Republic of Guyana
            Region : Americas
            Subregion : South America
            Population: 786559

script.js:16
            Name : Republic of Suriname
            Region : Americas
            Subregion : South America
            Population: 586634

script.js:16
            Name : Kingdom of Lesotho
            Region : Africa
            Subregion : Southern Africa
            Population: 2142252

script.js:16
            Name : Faroe Islands
            Region : Europe
            Subregion : Northern Europe
            Population: 48865

script.js:16
            Name : Republic of Honduras
            Region : Americas
            Subregion : Central America
            Population: 9904608

script.js:16
            Name : State of Palestine
            Region : Asia
            Subregion : Western Asia
            Population: 4803269

script.js:16
            Name : Independent State of Papua New Guinea
            Region : Oceania
            Subregion : Melanesia
            Population: 8947027

script.js:16
            Name : Arab Republic of Egypt
            Region : Africa
            Subregion : Northern Africa
            Population: 102334403

script.js:16
            Name : Kingdom of Spain
            Region : Europe
            Subregion : Southern Europe
            Population: 47351567

script.js:16
            Name : State of Eritrea
            Region : Africa
            Subregion : Eastern Africa
            Population: 5352000

script.js:16
            Name : Republic of Mozambique
            Region : Africa
            Subregion : Eastern Africa
            Population: 31255435

script.js:16
            Name : Democratic People's Republic of Korea
            Region : Asia
            Subregion : Eastern Asia
            Population: 25778815

script.js:16
            Name : Republic of Senegal
            Region : Africa
            Subregion : Western Africa
            Population: 16743930

script.js:16
            Name : Niue
            Region : Oceania
            Subregion : Polynesia
            Population: 1470

script.js:16
            Name : Federated States of Micronesia
            Region : Oceania
            Subregion : Micronesia
            Population: 115021

script.js:16
            Name : Kingdom of Cambodia
            Region : Asia
            Subregion : South-Eastern Asia
            Population: 16718971

script.js:16
            Name : Republic of Djibouti
            Region : Africa
            Subregion : Eastern Africa
            Population: 988002

script.js:16
            Name : Republic of Ghana
            Region : Africa
            Subregion : Western Africa
            Population: 31072945

script.js:16
            Name : Bouvet Island
            Region : Antarctic
            Subregion : undefined
            Population: 0

script.js:16
            Name : Republic of Belarus
            Region : Europe
            Subregion : Eastern Europe
            Population: 9398861

script.js:16
            Name : Republic of Benin
            Region : Africa
            Subregion : Western Africa
            Population: 12123198

script.js:16
            Name : Territory of the Cocos (Keeling) Islands
            Region : Oceania
            Subregion : Australia and New Zealand
            Population: 544

script.js:16
            Name : United Kingdom of Great Britain and Northern Ireland
            Region : Europe
            Subregion : Northern Europe
            Population: 67215293

script.js:16
            Name : Åland Islands
            Region : Europe
            Subregion : Northern Europe
            Population: 29458

script.js:16
            Name : Burkina Faso
            Region : Africa
            Subregion : Western Africa
            Population: 20903278

script.js:16
            Name : Solomon Islands
            Region : Oceania
            Subregion : Melanesia
            Population: 686878

script.js:16
            Name : Falkland Islands
            Region : Americas
            Subregion : South America
            Population: 2563

script.js:16
            Name : Bailiwick of Guernsey
            Region : Europe
            Subregion : Northern Europe
            Population: 62999

script.js:16
            Name : Republic of Costa Rica
            Region : Americas
            Subregion : Central America
            Population: 5094114

script.js:16
            Name : Republic of Albania
            Region : Europe
            Subregion : Southeast Europe
            Population: 2837743

script.js:16
            Name : Territory of Christmas Island
            Region : Oceania
            Subregion : Australia and New Zealand
            Population: 2072

script.js:16
            Name : Hellenic Republic
            Region : Europe
            Subregion : Southern Europe
            Population: 10715549

script.js:16
            Name : Ukraine
            Region : Europe
            Subregion : Eastern Europe
            Population: 44134693

script.js:16
            Name : Greenland
            Region : Americas
            Subregion : North America
            Population: 56367

script.js:16
            Name : Republic of North Macedonia
            Region : Europe
            Subregion : Southeast Europe
            Population: 2077132

script.js:16
            Name : Republic of Côte d'Ivoire
            Region : Africa
            Subregion : Western Africa
            Population: 26378275

script.js:16
            Name : Syrian Arab Republic
            Region : Asia
            Subregion : Western Asia
            Population: 17500657

script.js:16
            Name : Czech Republic
            Region : Europe
            Subregion : Central Europe
            Population: 10698896

script.js:16
            Name : Republic of Botswana
            Region : Africa
            Subregion : Southern Africa
            Population: 2351625

script.js:16
            Name : American Samoa
            Region : Oceania
            Subregion : Polynesia
            Population: 55197

script.js:16
            Name : United Mexican States
            Region : Americas
            Subregion : North America
            Population: 128932753

script.js:16
            Name : Republic of Austria
            Region : Europe
            Subregion : Central Europe
            Population: 8917205

script.js:16
            Name : Bermuda
            Region : Americas
            Subregion : North America
            Population: 63903

script.js:16
            Name : Kingdom of Bahrain
            Region : Asia
            Subregion : Western Asia
            Population: 1701583

script.js:16
            Name : Republic of Nauru
            Region : Oceania
            Subregion : Micronesia
            Population: 10834

script.js:16
            Name : Republic of Niger
            Region : Africa
            Subregion : Western Africa
            Population: 24206636

script.js:16
            Name : Republic of Angola
            Region : Africa
            Subregion : Middle Africa
            Population: 32866268

script.js:16
            Name : Antigua and Barbuda
            Region : Americas
            Subregion : Caribbean
            Population: 97928

script.js:16
            Name : Montserrat
            Region : Americas
            Subregion : Caribbean
            Population: 4922

script.js:16
            Name : Republic of Korea
            Region : Asia
            Subregion : Eastern Asia
            Population: 51780579

script.js:16
            Name : Republic of China (Taiwan)
            Region : Asia
            Subregion : Eastern Asia
            Population: 23503349

script.js:16
            Name : Barbados
            Region : Americas
            Subregion : Caribbean
            Population: 287371

script.js:16
            Name : Country of Curaçao
            Region : Americas
            Subregion : Caribbean
            Population: 155014

script.js:16
            Name : Republic of the Maldives
            Region : Asia
            Subregion : Southern Asia
            Population: 540542

script.js:16
            Name : Heard Island and McDonald Islands
            Region : Antarctic
            Subregion : undefined
            Population: 0

script.js:16
            Name : Commonwealth of Dominica
            Region : Americas
            Subregion : Caribbean
            Population: 71991

script.js:16
            Name : Islamic Republic of Mauritania
            Region : Africa
            Subregion : Western Africa
            Population: 4649660

script.js:16
            Name : Georgia
            Region : Asia
            Subregion : Western Asia
            Population: 3714000

script.js:16
            Name : Republic of Guinea
            Region : Africa
            Subregion : Western Africa
            Population: 13132792

script.js:16
            Name : Republic of Liberia
            Region : Africa
            Subregion : Western Africa
            Population: 5057677

script.js:16
            Name : Republic of Guinea-Bissau
            Region : Africa
            Subregion : Western Africa
            Population: 1967998

script.js:16
            Name : Swiss Confederation
            Region : Europe
            Subregion : Western Europe
            Population: 8654622

script.js:16
            Name : Republic of Cyprus
            Region : Europe
            Subregion : Southern Europe
            Population: 1207361

script.js:16
            Name : British Indian Ocean Territory
            Region : Africa
            Subregion : Eastern Africa
            Population: 3000

script.js:16
            Name : Republic of Finland
            Region : Europe
            Subregion : Northern Europe
            Population: 5530719

script.js:16
            Name : Kingdom of Belgium
            Region : Europe
            Subregion : Western Europe
            Population: 11555997

script.js:16
            Name : United Arab Emirates
            Region : Asia
            Subregion : Western Asia
            Population: 9890400

script.js:16
            Name : Republic of Mali
            Region : Africa
            Subregion : Western Africa
            Population: 20250834

script.js:16
            Name : Republic of Chad
            Region : Africa
            Subregion : Middle Africa
            Population: 16425859

script.js:16
            Name : Republic of Equatorial Guinea
            Region : Africa
            Subregion : Middle Africa
            Population: 1402985

script.js:16
            Name : Vatican City State
            Region : Europe
            Subregion : Southern Europe
            Population: 451

script.js:16
            Name : Republic of Iraq
            Region : Asia
            Subregion : Western Asia
            Population: 40222503

script.js:16
            Name : Tokelau
            Region : Oceania
            Subregion : Polynesia
            Population: 1411

script.js:16
            Name : Kingdom of Tonga
            Region : Oceania
            Subregion : Polynesia
            Population: 105697

script.js:16
            Name : Commonwealth of the Northern Mariana Islands
            Region : Oceania
            Subregion : Micronesia
            Population: 57557

script.js:16
            Name : State of Qatar
            Region : Asia
            Subregion : Western Asia
            Population: 2881060

script.js:16
            Name : Oriental Republic of Uruguay
            Region : Americas
            Subregion : South America
            Population: 3473727

script.js:16
            Name : Republic of India
            Region : Asia
            Subregion : Southern Asia
            Population: 1380004385

script.js:16
            Name : Territory of Norfolk Island
            Region : Oceania
            Subregion : Australia and New Zealand
            Population: 2302

script.js:16
            Name : Sultanate of Oman
            Region : Asia
            Subregion : Western Asia
            Population: 5106622

script.js:16
            Name : Republic of Colombia
            Region : Americas
            Subregion : South America
            Population: 50882884

script.js:16
            Name : Republic of Cameroon
            Region : Africa
            Subregion : Middle Africa
            Population: 26545864

script.js:16
            Name : Federal Democratic Republic of Ethiopia
            Region : Africa
            Subregion : Eastern Africa
            Population: 114963583

script.js:16
            Name : Republic of the Sudan
            Region : Africa
            Subregion : Northern Africa
            Population: 43849269

script.js:16
            Name : Gabonese Republic
            Region : Africa
            Subregion : Middle Africa
            Population: 2225728

script.js:16
            Name : Argentine Republic
            Region : Americas
            Subregion : South America
            Population: 45376763

script.js:16
            Name : Japan
            Region : Asia
            Subregion : Eastern Asia
            Population: 125836021

script.js:16
            Name : Hungary
            Region : Europe
            Subregion : Central Europe
            Population: 9749763

script.js:16
            Name : Republic of Croatia
            Region : Europe
            Subregion : Southeast Europe
            Population: 4047200

script.js:16
            Name : Kyrgyz Republic
            Region : Asia
            Subregion : Central Asia
            Population: 6591600

script.js:16
            Name : Portuguese Republic
            Region : Europe
            Subregion : Southern Europe
            Population: 10305564

script.js:16
            Name : Socialist Republic of Vietnam
            Region : Asia
            Subregion : South-Eastern Asia
            Population: 97338583

script.js:16
            Name : Kingdom of Norway
            Region : Europe
            Subregion : Northern Europe
            Population: 5379475

script.js:16
            Name : Italian Republic
            Region : Europe
            Subregion : Southern Europe
            Population: 59554023

script.js:16
            Name : Sint Maarten
            Region : Americas
            Subregion : Caribbean
            Population: 40812

script.js:16
            Name : Saint Martin
            Region : Americas
            Subregion : Caribbean
            Population: 38659

script.js:16
            Name : Hashemite Kingdom of Jordan
            Region : Asia
            Subregion : Western Asia
            Population: 10203140

script.js:16
            Name : French Polynesia
            Region : Oceania
            Subregion : Polynesia
            Population: 280904

script.js:16
            Name : Republic of Rwanda
            Region : Africa
            Subregion : Eastern Africa
            Population: 12952209

script.js:16
            Name : Kingdom of Thailand
            Region : Asia
            Subregion : South-Eastern Asia
            Population: 69799978

script.js:16
            Name : Kingdom of Denmark
            Region : Europe
            Subregion : Northern Europe
            Population: 5831404

script.js:16
            Name : Tuvalu
            Region : Oceania
            Subregion : Polynesia
            Population: 11792

script.js:16
            Name : Pitcairn Group of Islands
            Region : Oceania
            Subregion : Polynesia
            Population: 56

script.js:16
            Name : Republic of Uganda
            Region : Africa
            Subregion : Eastern Africa
            Population: 45741000

script.js:16
            Name : Togolese Republic
            Region : Africa
            Subregion : Western Africa
            Population: 8278737

script.js:16
            Name : Republic of Tajikistan
            Region : Asia
            Subregion : Central Asia
            Population: 9537642

script.js:16
            Name : Guiana
            Region : Americas
            Subregion : South America
            Population: 254541

script.js:16
            Name : Saint Lucia
            Region : Americas
            Subregion : Caribbean
            Population: 183629

script.js:16
            Name : Republic of South Africa
            Region : Africa
            Subregion : Southern Africa
            Population: 59308690

script.js:16
            Name : Republic of Armenia
            Region : Asia
            Subregion : Western Asia
            Population: 2963234

script.js:16
            Name : Federal Republic of Nigeria
            Region : Africa
            Subregion : Western Africa
            Population: 206139587

script.js:16
            Name : Republic of South Sudan
            Region : Africa
            Subregion : Middle Africa
            Population: 11193729

script.js:16
            Name : Islamic Republic of Afghanistan
            Region : Asia
            Subregion : Southern Asia
            Population: 40218234

script.js:16
            Name : Republic of Poland
            Region : Europe
            Subregion : Central Europe
            Population: 37950802

script.js:16
            Name : Antarctica
            Region : Antarctic
            Subregion : undefined
            Population: 1000

script.js:16
            Name : Lebanese Republic
            Region : Asia
            Subregion : Western Asia
            Population: 6825442

script.js:16
            Name : Republic of Palau
            Region : Oceania
            Subregion : Micronesia
            Population: 18092

script.js:16
            Name : New Caledonia
            Region : Oceania
            Subregion : Melanesia
            Population: 271960

script.js:16
            Name : Republic of Burundi
            Region : Africa
            Subregion : Eastern Africa
            Population: 11890781

script.js:16
            Name : People's Democratic Republic of Algeria
            Region : Africa
            Subregion : Northern Africa
            Population: 44700000

script.js:16
            Name : United States Minor Outlying Islands
            Region : Americas
            Subregion : North America
            Population: 300

script.js:16
            Name : Republic of Peru
            Region : Americas
            Subregion : South America
            Population: 32971846

script.js:16
            Name : Republic of Estonia
            Region : Europe
            Subregion : Northern Europe
            Population: 1331057

script.js:16
            Name : South Georgia and the South Sandwich Islands
            Region : Antarctic
            Subregion : undefined
            Population: 30

script.js:16
            Name : Republic of Vanuatu
            Region : Oceania
            Subregion : Melanesia
            Population: 307150

script.js:16
            Name : Islamic Republic of Iran
            Region : Asia
            Subregion : Southern Asia
            Population: 83992953

script.js:16
            Name : People's Republic of China
            Region : Asia
            Subregion : Eastern Asia
            Population: 1402112000

script.js:16
            Name : Republic of the Congo
            Region : Africa
            Subregion : Middle Africa
            Population: 5657000

script.js:16
            Name : Commonwealth of Australia
            Region : Oceania
            Subregion : Australia and New Zealand
            Population: 25687041

script.js:16
            Name : Turks and Caicos Islands
            Region : Americas
            Subregion : Caribbean
            Population: 38718

script.js:16
            Name : Republic of Trinidad and Tobago
            Region : Americas
            Subregion : Caribbean
            Population: 1399491

script.js:16
            Name : Anguilla
            Region : Americas
            Subregion : Caribbean
            Population: 13452

script.js:16
            Name : Republic of Haiti
            Region : Americas
            Subregion : Caribbean
            Population: 11402533

script.js:16
            Name : Republic of Uzbekistan
            Region : Asia
            Subregion : Central Asia
            Population: 34232050

script.js:16
            Name : Dominican Republic
            Region : Americas
            Subregion : Caribbean
            Population: 10847904

script.js:16
            Name : Department of Mayotte
            Region : Africa
            Subregion : Eastern Africa
            Population: 226915

script.js:16
            Name : Mongolia
            Region : Asia
            Subregion : Eastern Asia
            Population: 3278292

script.js:16
            Name : Saint Pierre and Miquelon
            Region : Americas
            Subregion : North America
            Population: 6069

script.js:16
            Name : Independent State of Samoa
            Region : Oceania
            Subregion : Polynesia
            Population: 198410

script.js:16
            Name : Republic of Nicaragua
            Region : Americas
            Subregion : Central America
            Population: 6624554

script.js:16
            Name : Kingdom of Bhutan
            Region : Asia
            Subregion : Southern Asia
            Population: 771612
          */

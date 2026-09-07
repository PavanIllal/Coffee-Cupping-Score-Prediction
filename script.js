/* ============================================
   Cupping Lab — script.js
   Populates the form, talks to the FastAPI
   /predict endpoint, and animates the result.
   ============================================ */

/* ---- Category values, pulled from the trained
        preprocessor's OneHotEncoder so every
        option here is one the model recognizes ---- */
const CATEGORIES = {
  "Country_of_Origin": [
    "Brazil",
    "Burundi",
    "China",
    "Colombia",
    "Costa Rica",
    "Cote d?Ivoire",
    "Ecuador",
    "El Salvador",
    "Ethiopia",
    "Guatemala",
    "Haiti",
    "Honduras",
    "India",
    "Indonesia",
    "Japan",
    "Kenya",
    "Laos",
    "Malawi",
    "Mauritius",
    "Mexico",
    "Myanmar",
    "Nicaragua",
    "Panama",
    "Papua New Guinea",
    "Peru",
    "Philippines",
    "Rwanda",
    "Taiwan",
    "Tanzania, United Republic Of",
    "Thailand",
    "Uganda",
    "United States",
    "United States (Hawaii)",
    "United States (Puerto Rico)",
    "Vietnam",
    "Zambia",
    "Unknown"
  ],
  "Region": [
    "52 narino (exact location: mattituy; municipal region: florida code 381",
    "acatenango",
    "aceh",
    "aceh gayo",
    "aceh tengah",
    "ada okinawa japan",
    "addis ababa",
    "adolfo lopez mateos",
    "aldea xeucalvitz, ixil region, quiche department",
    "alta paulista (sao paulo)",
    "altotonga",
    "amatenango de la frontera",
    "antigua",
    "antioquia",
    "apaneca",
    "aricha",
    "arusha",
    "arusha meru",
    "asia pacific",
    "ataco, apaneca - ilamatepec mountain range",
    "atitlan",
    "atoyac de alvarez",
    "baihe dist., tainan city 臺南市白河區",
    "bali",
    "bener meriah",
    "benguet, mountain province",
    "berastagi",
    "blend",
    "blida,kercha,guji,oromia",
    "bondowoso",
    "boquete",
    "brazil matas de minas",
    "brunca",
    "bukidnon, mindanao, philppines",
    "bulambuli eastern region",
    "cacahuatique",
    "cajamarca",
    "calnali, hidalgo",
    "campos altos - cerrado",
    "canoas",
    "carmo de minas",
    "cauca",
    "central america",
    "central kenya",
    "central region",
    "central valley",
    "cerrado",
    "cerrado - monte carmelo - minas gerais",
    "chamarel (south west)",
    "changhua baguashan 彰化市八卦山",
    "chapadão de ferro (cerrado mineiro)",
    "chapulhuacan, hidalgo",
    "chiang rai",
    "chiang rai thailand",
    "chiangrai",
    "chiapas",
    "chiapas, jaltenango",
    "chiayi alishan 嘉義縣阿里山鄉",
    "chiayi fanlu嘉義縣番路鄉",
    "chickmangalore",
    "chilón",
    "chocaman, veracruz",
    "chuva, san marcos",
    "cnra station of divo",
    "coatepec",
    "coatepec, coatepec",
    "cofradia de suchitlan",
    "colima",
    "comayagua",
    "comayagua, honduras",
    "cordoba",
    "corillera administrative",
    "coscomatepec",
    "costa rica",
    "cuarenteño",
    "cundinamarca",
    "dala",
    "davao city, region 11",
    "dehong prefecture",
    "department d'artibonite , haiti",
    "department of ahuachapan, municipality of apanecallamatepec mountain",
    "dipilto, nueva segovia",
    "doe kwin, pyin oo lwin",
    "doi chaang village, chiang rai, thialand",
    "dolok sanggul",
    "don duong",
    "dondon, haiti",
    "dongshan dist., tainan city 台南市東山區",
    "dongshan dist., tainan city 臺南市東山區",
    "east java",
    "eastern",
    "eastern highlands province",
    "eastern uganda",
    "eje cafetero",
    "el balsamo, quezaltepec",
    "el desmoronado, talpan de allende jalisco",
    "el paraíso",
    "el progreso",
    "el remudadero",
    "el tumbador, san marcos",
    "escuitla",
    "ethiopia, sidamo",
    "fln mirador",
    "fortín de las flores",
    "gedio",
    "gicumbi",
    "grama valley",
    "guatemala",
    "guayata",
    "guinope el paraíso",
    "guji-hambela",
    "haiti",
    "high mogiana",
    "huanuco",
    "huautla de jimenez",
    "huazalingo, hidalgo",
    "huehuetenango",
    "huila",
    "huila supremo",
    "hustusco",
    "ijen",
    "ikand village",
    "iliatenco, guerrero",
    "ilomba vilage, mbozi",
    "indonesia",
    "intibuca",
    "iwala village, mbeya rural",
    "ixhuatlan del cafe",
    "jalapa",
    "jaltenango",
    "jaltocan, hidalgo",
    "jinotega",
    "juchique de ferrer",
    "juquila",
    "kakoma",
    "kapchorwa",
    "kapchorwa eastern",
    "karatu arusha",
    "karatu ngorogoro",
    "karatu northern",
    "kasese",
    "kasese, mt. rwenzori",
    "kayanza",
    "kefa zone, gimbo distict, at a place called woka araba, south west ethiopia.",
    "kelem welega",
    "kenya",
    "kiambu",
    "kilimanjaro",
    "kirinyaga",
    "kona",
    "la concordia",
    "la concordia, chiapas",
    "la cumbre",
    "la plata",
    "la reforma, san marcos",
    "la yerba",
    "la yerbabuena",
    "lao p.d.r.",
    "leye, alishan township, chiayi county",
    "leye, alishan township, chiayi county 嘉義阿里山樂野村",
    "limu",
    "lington nihuta",
    "lintong",
    "los angeles",
    "mahuixtlan",
    "mantiqueira de minas",
    "manyara, karatu",
    "manzanillo",
    "marcala",
    "marmelade",
    "matagalpa",
    "matas de minas        ",
    "mbale",
    "mbeya",
    "mbinga",
    "menglian",
    "meru",
    "meru county",
    "mexico",
    "minas gerais, br",
    "mkuu rombo",
    "mmm",
    "mogiana",
    "monte carmelo",
    "moshi",
    "motozintla",
    "motozintla, chiapas",
    "mountain ali, taiwan",
    "mountains of minas gerais",
    "mt elgon",
    "mt. rwenzori",
    "mubuyu estate",
    "mumirwa",
    "muranga",
    "mzuzu",
    "nantou",
    "nanxi dist., tainan city 臺南市楠西區",
    "naranjo",
    "nariño",
    "natou county",
    "nayarit",
    "new taipei zhonghe 新北市中和區",
    "ngorogoro",
    "nkure- meru",
    "norte",
    "northern",
    "nueva segovia",
    "nuevo oriente",
    "nyeri",
    "oaxaca",
    "occidental",
    "occidente",
    "ocosingo",
    "ocotepeque",
    "ohuapan, tlaltetela",
    "oldeani , mongola",
    "orient",
    "oriente",
    "oromia",
    "oromiya",
    "paksong,laos",
    "pasto",
    "penachi, cecanor",
    "pereira",
    "peru",
    "petatlan",
    "phahi",
    "pitalito",
    "pluma hidalogo, oaxaca",
    "pochutla",
    "progreso santa rosa teocelo",
    "province of manabi, ecuador",
    "puno",
    "pyin oo lwin",
    "pyinoolwin",
    "quetzaltenango",
    "ruvuma",
    "ruvuma, mbinga",
    "sacatepequez, guatemala",
    "sacún palma, municipio de chilón, chiapas",
    "san bartolo tutotepec",
    "san fernando",
    "san ignacio",
    "san isidro",
    "san lucas toliman, solola",
    "san marcos",
    "san miguel del puerto",
    "san pedro cotzilnam",
    "san rafael",
    "san ramon",
    "santa ana",
    "santa catarina juquila",
    "santa maria sitepec",
    "santa rosa",
    "santander",
    "santo domingo cacalotepec",
    "santo reyes nopala",
    "sapan toraja",
    "shizingo village",
    "sidamo",
    "sierra alta mixe y zapoteca",
    "sierra fraylesca, chiapas",
    "sierra madre occidental",
    "sierra norte yajalon, chiapas",
    "sierra, chiapas",
    "siguatepeque, comayagua",
    "siltepec el triunfo",
    "siltepec el triunfo, chiapas, mexico",
    "sipi, mt elgon",
    "snnp/kaffa zone,gimbowereda",
    "snnprg; kafa; telo woreda; shada kebele",
    "solola",
    "south huila",
    "south of minas",
    "southern- zomba",
    "sul de minas",
    "sul de minas - carmo de minas",
    "sulawesi",
    "sumatra brastagi",
    "taichung taiping 台中市太平區",
    "taichung xinshe 台中市新社區",
    "taiwan",
    "taiwu township , pingtung county 屏東縣泰武鄉",
    "talpa de allende",
    "tapachula",
    "tarrazu",
    "temanggung, indonesia",
    "temaxcalapa",
    "tenango de doria, hidalgo",
    "tepetzingo",
    "tepictla",
    "test",
    "thailand",
    "thiotte, haiti",
    "tlacuilotepec",
    "tlanchinol, hidalgo",
    "tlatlauquitepec",
    "tolima",
    "totutla",
    "tres rios",
    "turrialba",
    "tuxtla gutierrez",
    "vale da grama",
    "valle central",
    "veracruz",
    "vietnam",
    "vietnam cau dat",
    "vietnam tutra",
    "villa talea de castro",
    "west and central valley",
    "west nile",
    "west valley",
    "western region",
    "xalapa",
    "xicotepec de juarez",
    "xishuangbanna prefecture",
    "xochitonalco, huautla        ",
    "yajalon",
    "yauco region",
    "yauk sauk, shan state",
    "yecuatla",
    "yirgacheffe",
    "yunlin gukeng he bao 雲林縣古坑鄉荷苞村",
    "yunlin 雲林縣石壁",
    "yunnan",
    "ywar ngan",
    "ywar ngan township",
    "zapotitlan de mendez",
    "zaragoza itundujia",
    "zentla",
    "zihuatanejo de azueta",
    "南投國姓",
    "古坑鄉荷包村尖山坑60號",
    "台中和平區",
    "台中新社",
    "台南市東山區 (dongshan dist., tainan city)",
    "台南市東山區( dongshan dist., tainan city)",
    "台東太麻里",
    "台灣",
    "嘉義阿里山",
    "國姓鄉 guoshing township",
    "苗栗三灣",
    "苗栗泰安",
    "Unknown"
  ],
  "In_Country_Partner": [
    "Africa Fine Coffee Association",
    "Almacafé",
    "AMECAFE",
    "Asociacion Nacional Del Café",
    "Asociación de Cafés Especiales de Nicaragua",
    "Asociación Mexicana De Cafés y Cafeterías De Especialidad A.C.",
    "Blossom Valley International",
    "Blossom Valley International\n",
    "Brazil Specialty Coffee Association",
    "Central De Organizaciones Productoras De Café y Cacao Del Perú - Central Café & Cacao",
    "Centro Agroecológico del Café A.C.",
    "Coffee Quality Institute",
    "Ethiopia Commodity Exchange",
    "Instituto Hondureño del Café",
    "Kenya Coffee Traders Association",
    "METAD Agricultural Development plc",
    "NUCOFFEE",
    "Salvadoran Coffee Council",
    "Specialty Coffee Ass",
    "Specialty Coffee Association",
    "Specialty Coffee Association of Costa Rica",
    "Specialty Coffee Association of Indonesia",
    "Specialty Coffee Institute of Asia",
    "Tanzanian Coffee Board",
    "Torch Coffee Lab Yunnan",
    "Uganda Coffee Development Authority",
    "Yunnan Coffee Exchange"
  ],
  "Variety": [
    "Arusha",
    "Blue Mountain",
    "Bourbon",
    "Catimor",
    "Catuai",
    "Caturra",
    "Ethiopian Heirlooms",
    "Ethiopian Yirgacheffe",
    "Gesha",
    "Hawaiian Kona",
    "Java",
    "Mandheling",
    "Marigojipe",
    "Moka Peaberry",
    "Mundo Novo",
    "Pacamara",
    "Pacas",
    "Pache Comun",
    "Peaberry",
    "Ruiru 11",
    "SL14",
    "SL28",
    "SL34",
    "Sulawesi",
    "Sumatra",
    "Sumatra Lintong",
    "Typica",
    "Yellow Bourbon",
    "Unknown",
    "Other"
  ],
  "Processing_Method": [
    "Natural / Dry",
    "Pulped natural / honey",
    "Semi-washed / Semi-pulped",
    "Washed / Wet",
    "Unknown",
    "Other"
  ],
  "Color": [
    "Blue-Green",
    "Bluish-Green",
    "Green",
    "Unknown"
  ],
  "Certification_Body": [
    "Africa Fine Coffee Association",
    "Almacafé",
    "AMECAFE",
    "Asociacion Nacional Del Café",
    "Asociación de Cafés Especiales de Nicaragua",
    "Asociación Mexicana De Cafés y Cafeterías De Especialidad A.C.",
    "Blossom Valley International",
    "Blossom Valley International\n",
    "Brazil Specialty Coffee Association",
    "Central De Organizaciones Productoras De Café y Cacao Del Perú - Central Café & Cacao",
    "Centro Agroecológico del Café A.C.",
    "Coffee Quality Institute",
    "Ethiopia Commodity Exchange",
    "Instituto Hondureño del Café",
    "Kenya Coffee Traders Association",
    "METAD Agricultural Development plc",
    "NUCOFFEE",
    "Salvadoran Coffee Council",
    "Specialty Coffee Association",
    "Specialty Coffee Association of Costa Rica",
    "Specialty Coffee Association of Indonesia",
    "Specialty Coffee Institute of Asia",
    "Tanzanian Coffee Board",
    "Torch Coffee Lab Yunnan",
    "Uganda Coffee Development Authority",
    "Yunnan Coffee Exchange"
  ],
  "unit_of_measurement": [
    "ft",
    "m"
  ]
};

/* Human-friendly labels for a couple of select fields
   where the raw value would read awkwardly */
const LABEL_OVERRIDES = {
  unit_of_measurement: { ft: 'Feet (ft)', m: 'Meters (m)' }
};

const SELECT_FIELDS = [
  'Country_of_Origin', 'In_Country_Partner', 'Variety',
  'Processing_Method', 'Color', 'Certification_Body', 'unit_of_measurement'
];

// Region has 344 real values in the training data — far too many for a
// dropdown, so it's a searchable text input backed by a <datalist> instead.
const DATALIST_FIELDS = ['Region'];

function populateSelects(){
  SELECT_FIELDS.forEach((id) => {
    const el = document.getElementById(id);
    if (!el) return;
    const values = CATEGORIES[id] || [];
    el.innerHTML = '';
    const placeholder = document.createElement('option');
    placeholder.value = '';
    placeholder.textContent = 'Select…';
    placeholder.disabled = true;
    placeholder.selected = true;
    el.appendChild(placeholder);

    values.forEach((val) => {
      const opt = document.createElement('option');
      opt.value = val;
      const overrides = LABEL_OVERRIDES[id];
      opt.textContent = overrides && overrides[val] ? overrides[val] : val;
      el.appendChild(opt);
    });
  });

  DATALIST_FIELDS.forEach((id) => {
    const list = document.getElementById(`${id}Options`) || document.getElementById('regionOptions');
    if (!list) return;
    const values = CATEGORIES[id] || [];
    list.innerHTML = '';
    values.forEach((val) => {
      const opt = document.createElement('option');
      opt.value = val;
      list.appendChild(opt);
    });
  });
}

/* ---- A representative, high-scoring sample lot,
        useful for a first test run ---- */
const SAMPLE_LOT = {
  Country_of_Origin: 'Ethiopia',
  Region: 'yirgacheffe',
  Variety: 'Ethiopian Yirgacheffe',
  Number_of_Bags: 300,
  Harvest_Year: 2017,
  In_Country_Partner: 'METAD Agricultural Development plc',
  Processing_Method: 'Washed / Wet',
  Color: 'Green',
  Moisture: 11.0,
  Category_One_Defects: 0,
  Category_Two_Defects: 1,
  Quakers: 0,
  Certification_Body: 'METAD Agricultural Development plc',
  unit_of_measurement: 'm',
  altitude_mean_meters: 2100,
  altitude_range: 150
};

function fillSample(){
  Object.entries(SAMPLE_LOT).forEach(([id, val]) => {
    const el = document.getElementById(id);
    if (el) el.value = val;
  });
}

/* ============================================
   Gauge: maps a 0–100 score onto a 180° arc
   ============================================ */
const GAUGE_MIN = 60;   // where the visible arc starts
const GAUGE_MAX = 100;  // where the visible arc ends
const ARC_LENGTH = 302; // matches the path's stroke-dasharray

function bandForScore(score){
  if (score >= 90) return { name: 'Outstanding', className: 'band-outstanding', color: '#E7BE78' };
  if (score >= 85) return { name: 'Excellent', className: 'band-excellent', color: '#CE9A4A' };
  if (score >= 80) return { name: 'Very good — specialty grade', className: 'band-verygood', color: '#7E9A6D' };
  return { name: 'Below specialty threshold', className: 'band-below', color: '#B5654E' };
}

function renderGauge(score){
  const clamped = Math.max(GAUGE_MIN, Math.min(GAUGE_MAX, score));
  const fraction = (clamped - GAUGE_MIN) / (GAUGE_MAX - GAUGE_MIN);

  const fillEl = document.getElementById('gaugeFill');
  const needleEl = document.getElementById('gaugeNeedle');
  const band = bandForScore(score);

  const offset = ARC_LENGTH - (fraction * ARC_LENGTH);
  fillEl.style.strokeDashoffset = String(offset);
  fillEl.style.stroke = band.color;

  const angle = -90 + (fraction * 180); // -90deg (left) to +90deg (right)
  needleEl.style.transform = `rotate(${angle}deg)`;

  document.getElementById('scoreNumber').textContent = score.toFixed(2);
  document.getElementById('scoreBand').textContent = band.name;
}

/* ============================================
   Form → API payload
   ============================================ */
function collectPayload(){
  const val = (id) => document.getElementById(id).value;
  const num = (id) => parseFloat(document.getElementById(id).value);
  const int = (id) => parseInt(document.getElementById(id).value, 10);

  return {
    Country_of_Origin: val('Country_of_Origin'),
    Region: val('Region'),
    Number_of_Bags: int('Number_of_Bags'),
    In_Country_Partner: val('In_Country_Partner'),
    Harvest_Year: num('Harvest_Year'),
    Variety: val('Variety'),
    Processing_Method: val('Processing_Method'),
    Moisture: num('Moisture'),
    Category_One_Defects: int('Category_One_Defects'),
    Quakers: int('Quakers'),
    Color: val('Color'),
    Category_Two_Defects: int('Category_Two_Defects'),
    Certification_Body: val('Certification_Body'),
    unit_of_measurement: val('unit_of_measurement'),
    altitude_mean_meters: num('altitude_mean_meters'),
    altitude_range: num('altitude_range')
  };
}

function getApiBase(){
  const raw = document.getElementById('apiBase').value.trim();
  return raw.endsWith('/') ? raw.slice(0, -1) : raw;
}

/* ============================================
   UI state helpers
   ============================================ */
function showState(state){
  document.getElementById('resultIdle').hidden = state !== 'idle';
  document.getElementById('resultLive').hidden = state !== 'live';
  document.getElementById('resultLoading').hidden = state !== 'loading';
}

function setError(message){
  const el = document.getElementById('formError');
  if (!message){
    el.hidden = true;
    el.textContent = '';
    return;
  }
  el.hidden = false;
  el.textContent = message;
}

/* ============================================
   Submit handler
   ============================================ */
async function handlePredict(evt){
  evt.preventDefault();
  setError('');

  const form = document.getElementById('cupForm');
  if (!form.checkValidity()){
    form.reportValidity();
    return;
  }

  const submitBtn = document.getElementById('submitBtn');
  submitBtn.disabled = true;
  showState('loading');

  const apiBase = getApiBase();
  const payload = collectPayload();

  try{
    const res = await fetch(`${apiBase}/predict`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    if (!res.ok){
      const text = await res.text().catch(() => '');
      throw new Error(`API responded with ${res.status}. ${text}`.trim());
    }

    const data = await res.json();
    const score = data.predicted_total_cup_points;

    if (typeof score !== 'number' || Number.isNaN(score)){
      throw new Error('The API response did not include a numeric score.');
    }

    showState('live');
    renderGauge(score);

  }catch(err){
    showState('idle');
    setError(
      `Couldn't reach the prediction API — ${err.message || err}. ` +
      `Check the API base URL in the Connection section and make sure the ` +
      `FastAPI server is running with CORS enabled.`
    );
  }finally{
    submitBtn.disabled = false;
  }
}

/* ============================================
   Connection test
   ============================================ */
async function testConnection(){
  const statusEl = document.getElementById('connStatus');
  const apiBase = getApiBase();
  statusEl.className = 'conn-status';
  statusEl.textContent = 'Checking…';

  try{
    const res = await fetch(`${apiBase}/`);
    if (!res.ok) throw new Error(`Status ${res.status}`);
    const data = await res.json();
    statusEl.className = 'conn-status ok';
    statusEl.textContent = `Connected — "${data.message || 'API is running'}"`;
  }catch(err){
    statusEl.className = 'conn-status fail';
    statusEl.textContent = `Couldn't connect (${err.message || err}). Is the API running, and is CORS enabled?`;
  }
}

/* ============================================
   Init
   ============================================ */
document.addEventListener('DOMContentLoaded', () => {
  populateSelects();

  const savedApiBase = localStorage.getItem('cuppingLabApiBase');
  if (savedApiBase) document.getElementById('apiBase').value = savedApiBase;

  document.getElementById('apiBase').addEventListener('change', (e) => {
    localStorage.setItem('cuppingLabApiBase', e.target.value.trim());
  });

  document.getElementById('cupForm').addEventListener('submit', handlePredict);
  document.getElementById('fillSample').addEventListener('click', fillSample);
  document.getElementById('checkConn').addEventListener('click', testConnection);
});

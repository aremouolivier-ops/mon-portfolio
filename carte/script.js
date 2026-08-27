// ===========================
// Création de la carte
// ===========================

const map = L.map("map").setView([9.3376,2.6303],16);


// ===========================
// Fond OpenStreetMap
// ===========================

L.tileLayer(

'https://tile.openstreetmap.org/{z}/{x}/{y}.png',

{

maxZoom:19,

attribution:"© OpenStreetMap"

}

).addTo(map);


// ===========================
// Notre couche GeoJSON
// ===========================

const arbresIcon = L.icon({
    iconUrl: 'images/arbres.png',

    iconSize: [32, 32],

    iconAnchor: [16, 32],

    popupAnchor: [0, -32]
});

const batimentIcon = L.icon({
    iconUrl: 'images/batiment.png',
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32]
});

const forageIcon = L.icon({
    iconUrl: 'images/forage.png',
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32]
});



// 1
const arbres = {"type":"FeatureCollection","name":"Arbres","features":[{"type":"Feature","properties":{"REMARKS":"ARB-001"},"geometry":{"type":"Point","coordinates":[2.705413333,9.308366667,378.8]}},{"type":"Feature","properties":{"REMARKS":"ARB-002"},"geometry":{"type":"Point","coordinates":[2.706863333,9.309251667,375.9]}},{"type":"Feature","properties":{"REMARKS":"ARB-003"},"geometry":{"type":"Point","coordinates":[2.707263333,9.309973333,373.0]}},{"type":"Feature","properties":{"REMARKS":"ARB-004"},"geometry":{"type":"Point","coordinates":[2.71,9.312068333,370.4]}},{"type":"Feature","properties":{"REMARKS":"ARB-005"},"geometry":{"type":"Point","coordinates":[2.705483333,9.307511667,385.5]}},{"type":"Feature","properties":{"REMARKS":"ARB-0XX"},"geometry":{"type":"Point","coordinates":[2.705916667,9.308081667,379.8]}},{"type":"Feature","properties":{"REMARKS":"ARB-007"},"geometry":{"type":"Point","coordinates":[2.708045,9.309766667,373.1]}},{"type":"Feature","properties":{"REMARKS":"ARB-008"},"geometry":{"type":"Point","coordinates":[2.708001667,9.30989,367.5]}},{"type":"Feature","properties":{"REMARKS":"ARB-009"},"geometry":{"type":"Point","coordinates":[2.709613333,9.311128333,373.2]}},{"type":"Feature","properties":{"REMARKS":"ARB-010"},"geometry":{"type":"Point","coordinates":[2.709931667,9.311308333,371.3]}},{"type":"Feature","properties":{"REMARKS":"ARB-011"},"geometry":{"type":"Point","coordinates":[2.70683,9.307508333,373.8]}},{"type":"Feature","properties":{"REMARKS":"ARB-011"},"geometry":{"type":"Point","coordinates":[2.707683333,9.308263333,371.6]}},{"type":"Feature","properties":{"REMARKS":"ARB-012"},"geometry":{"type":"Point","coordinates":[2.709746667,9.309781667,366.9]}},{"type":"Feature","properties":{"REMARKS":"ARB-013"},"geometry":{"type":"Point","coordinates":[2.711043333,9.310706667,368.0]}},{"type":"Feature","properties":{"REMARKS":"ARB-014"},"geometry":{"type":"Point","coordinates":[2.711343333,9.311238333,365.7]}},{"type":"Feature","properties":{"REMARKS":"ARB-015"},"geometry":{"type":"Point","coordinates":[2.711501667,9.311163333,366.3]}},{"type":"Feature","properties":{"REMARKS":"ARB-014"},"geometry":{"type":"Point","coordinates":[2.705353333,9.311443333,377.1]}},{"type":"Feature","properties":{"REMARKS":"ARB-015"},"geometry":{"type":"Point","coordinates":[2.70485,9.311083333,379.6]}},{"type":"Feature","properties":{"REMARKS":"ARB-016"},"geometry":{"type":"Point","coordinates":[2.704216667,9.311181667,381.1]}},{"type":"Feature","properties":{"REMARKS":"ARB-017"},"geometry":{"type":"Point","coordinates":[2.703775,9.310936667,382.9]}},{"type":"Feature","properties":{"REMARKS":"ARB-18"},"geometry":{"type":"Point","coordinates":[2.703608333,9.308775,378.3]}},{"type":"Feature","properties":{"REMARKS":"ARB-019"},"geometry":{"type":"Point","coordinates":[2.703685,9.308711667,380.4]}},{"type":"Feature","properties":{"REMARKS":"ARB-020"},"geometry":{"type":"Point","coordinates":[2.706691667,9.313335,364.7]}},{"type":"Feature","properties":{"REMARKS":"ARB-021"},"geometry":{"type":"Point","coordinates":[2.70751,9.313298333,366.4]}},{"type":"Feature","properties":{"REMARKS":"ARB-022"},"geometry":{"type":"Point","coordinates":[2.710178333,9.312021667,366.2]}},{"type":"Feature","properties":{"REMARKS":"ARB-20"},"geometry":{"type":"Point","coordinates":[2.706453333,9.309236667,372.1]}},{"type":"Feature","properties":{"REMARKS":""},"geometry":{"type":"Point","coordinates":[2.706453333,9.309236667,372.1]}},{"type":"Feature","properties":{"REMARKS":"ARB-021"},"geometry":{"type":"Point","coordinates":[2.706896667,9.309725,373.2]}},{"type":"Feature","properties":{"REMARKS":""},"geometry":{"type":"Point","coordinates":[2.706896667,9.309725,373.2]}},{"type":"Feature","properties":{"REMARKS":"ARB-021"},"geometry":{"type":"Point","coordinates":[2.702565,9.309463333,379.8]}},{"type":"Feature","properties":{"REMARKS":"ARB-002"},"geometry":{"type":"Point","coordinates":[2.702893333,9.310576667,376.1]}},{"type":"Feature","properties":{"REMARKS":"ARB-023"},"geometry":{"type":"Point","coordinates":[2.699503333,9.31165,379.4]}},{"type":"Feature","properties":{"REMARKS":"ARB-024"},"geometry":{"type":"Point","coordinates":[2.701218333,9.313121667,379.7]}},{"type":"Feature","properties":{"REMARKS":"ARB-25"},"geometry":{"type":"Point","coordinates":[2.70492,9.312705,373.7]}},{"type":"Feature","properties":{"REMARKS":"ARB-026"},"geometry":{"type":"Point","coordinates":[2.70501,9.313376667,374.2]}},{"type":"Feature","properties":{"REMARKS":"ARB-027"},"geometry":{"type":"Point","coordinates":[2.704908333,9.313338333,374.6]}},{"type":"Feature","properties":{"REMARKS":"ARB-028"},"geometry":{"type":"Point","coordinates":[2.704821667,9.313288333,371.7]}},{"type":"Feature","properties":{"REMARKS":"ARB-029"},"geometry":{"type":"Point","coordinates":[2.703411667,9.313961667,374.9]}},{"type":"Feature","properties":{"REMARKS":"ARB-030"},"geometry":{"type":"Point","coordinates":[2.70435,9.314163333,374.2]}},{"type":"Feature","properties":{"REMARKS":"ARB-031"},"geometry":{"type":"Point","coordinates":[2.7027,9.31452,375.9]}},{"type":"Feature","properties":{"REMARKS":"ARB-032"},"geometry":{"type":"Point","coordinates":[2.702583333,9.314596667,371.9]}},{"type":"Feature","properties":{"REMARKS":"ARB-033"},"geometry":{"type":"Point","coordinates":[2.7026,9.314258333,376.2]}},{"type":"Feature","properties":{"REMARKS":"ARB-034"},"geometry":{"type":"Point","coordinates":[2.702243333,9.314678333,377.2]}},{"type":"Feature","properties":{"REMARKS":"ARB-035"},"geometry":{"type":"Point","coordinates":[2.701748333,9.31479,373.4]}},{"type":"Feature","properties":{"REMARKS":"ARB-036"},"geometry":{"type":"Point","coordinates":[2.701656667,9.314646667,373.9]}},{"type":"Feature","properties":{"REMARKS":"ARB-037"},"geometry":{"type":"Point","coordinates":[2.701168333,9.314901667,372.9]}},{"type":"Feature","properties":{"REMARKS":"ARB-038"},"geometry":{"type":"Point","coordinates":[2.700978333,9.314856667,372.2]}},{"type":"Feature","properties":{"REMARKS":"ARB-039"},"geometry":{"type":"Point","coordinates":[2.700721667,9.314638333,373.1]}},{"type":"Feature","properties":{"REMARKS":"ARB-040"},"geometry":{"type":"Point","coordinates":[2.700458333,9.315066667,371.4]}},{"type":"Feature","properties":{"REMARKS":"ARB-041"},"geometry":{"type":"Point","coordinates":[2.700286667,9.314993333,374.4]}},{"type":"Feature","properties":{"REMARKS":"B"},"geometry":{"type":"Point","coordinates":[2.697608333,9.312581667,371.5]}},{"type":"Feature","properties":{"REMARKS":"B"},"geometry":{"type":"Point","coordinates":[2.697738333,9.312486667,372.1]}},{"type":"Feature","properties":{"REMARKS":"B"},"geometry":{"type":"Point","coordinates":[2.697923333,9.312376667,371.9]}},{"type":"Feature","properties":{"REMARKS":"B\n"},"geometry":{"type":"Point","coordinates":[2.698046667,9.312295,376.2]}},{"type":"Feature","properties":{"REMARKS":"b"},"geometry":{"type":"Point","coordinates":[2.698373333,9.31207,376.1]}},{"type":"Feature","properties":{"REMARKS":"b"},"geometry":{"type":"Point","coordinates":[2.698461667,9.31201,377.5]}},{"type":"Feature","properties":{"REMARKS":"b"},"geometry":{"type":"Point","coordinates":[2.69853,9.311965,377.5]}},{"type":"Feature","properties":{"REMARKS":"n"},"geometry":{"type":"Point","coordinates":[2.698601667,9.31192,377.4]}},{"type":"Feature","properties":{"REMARKS":"b"},"geometry":{"type":"Point","coordinates":[2.698681667,9.311876667,377.3]}},{"type":"Feature","properties":{"REMARKS":"b"},"geometry":{"type":"Point","coordinates":[2.698703333,9.31185,378.4]}},{"type":"Feature","properties":{"REMARKS":"b"},"geometry":{"type":"Point","coordinates":[2.698853333,9.311775,378.8]}},{"type":"Feature","properties":{"REMARKS":"b"},"geometry":{"type":"Point","coordinates":[2.698906667,9.311741667,379.8]}},{"type":"Feature","properties":{"REMARKS":"b"},"geometry":{"type":"Point","coordinates":[2.698986667,9.311673333,376.5]}},{"type":"Feature","properties":{"REMARKS":"b"},"geometry":{"type":"Point","coordinates":[2.69913,9.311575,374.5]}},{"type":"Feature","properties":{"REMARKS":"n"},"geometry":{"type":"Point","coordinates":[2.699203333,9.311521667,373.7]}},{"type":"Feature","properties":{"REMARKS":"b"},"geometry":{"type":"Point","coordinates":[2.699298333,9.311465,374.0]}},{"type":"Feature","properties":{"REMARKS":"h"},"geometry":{"type":"Point","coordinates":[2.69937,9.311421667,376.1]}},{"type":"Feature","properties":{"REMARKS":"b"},"geometry":{"type":"Point","coordinates":[2.69943,9.311375,376.4]}},{"type":"Feature","properties":{"REMARKS":"b"},"geometry":{"type":"Point","coordinates":[2.699948333,9.311055,377.9]}},{"type":"Feature","properties":{"REMARKS":"b"},"geometry":{"type":"Point","coordinates":[2.700361667,9.310793333,376.7]}},{"type":"Feature","properties":{"REMARKS":"b"},"geometry":{"type":"Point","coordinates":[2.700395,9.310776667,375.5]}},{"type":"Feature","properties":{"REMARKS":"b"},"geometry":{"type":"Point","coordinates":[2.700508333,9.310688333,373.4]}},{"type":"Feature","properties":{"REMARKS":"b"},"geometry":{"type":"Point","coordinates":[2.700593333,9.310631667,372.4]}},{"type":"Feature","properties":{"REMARKS":"b"},"geometry":{"type":"Point","coordinates":[2.700651667,9.310603333,373.5]}},{"type":"Feature","properties":{"REMARKS":"b"},"geometry":{"type":"Point","coordinates":[2.700843333,9.310476667,377.2]}},{"type":"Feature","properties":{"REMARKS":"b"},"geometry":{"type":"Point","coordinates":[2.70093,9.310448333,378.8]}},{"type":"Feature","properties":{"REMARKS":"b"},"geometry":{"type":"Point","coordinates":[2.701021667,9.310365,378.2]}},{"type":"Feature","properties":{"REMARKS":"c"},"geometry":{"type":"Point","coordinates":[2.701093333,9.310301667,377.5]}},{"type":"Feature","properties":{"REMARKS":"b"},"geometry":{"type":"Point","coordinates":[2.702065,9.309675,377.7]}},{"type":"Feature","properties":{"REMARKS":"b"},"geometry":{"type":"Point","coordinates":[2.70212,9.309615,377.6]}},{"type":"Feature","properties":{"REMARKS":"b"},"geometry":{"type":"Point","coordinates":[2.702216667,9.309555,379.9]}},{"type":"Feature","properties":{"REMARKS":"n"},"geometry":{"type":"Point","coordinates":[2.70229,9.309516667,381.5]}},{"type":"Feature","properties":{"REMARKS":"n"},"geometry":{"type":"Point","coordinates":[2.702381667,9.30945,378.1]}},{"type":"Feature","properties":{"REMARKS":"ARB-39"},"geometry":{"type":"Point","coordinates":[2.708223333,9.308726667,379.4]}},{"type":"Feature","properties":{"REMARKS":"ARB-040"},"geometry":{"type":"Point","coordinates":[2.708503333,9.309018333,374.0]}},{"type":"Feature","properties":{"REMARKS":"ARB-041"},"geometry":{"type":"Point","coordinates":[2.70909,9.30872,372.7]}},{"type":"Feature","properties":{"REMARKS":"ARB-042"},"geometry":{"type":"Point","coordinates":[2.709291667,9.308348333,377.3]}},{"type":"Feature","properties":{"REMARKS":"ARB-043"},"geometry":{"type":"Point","coordinates":[2.709683333,9.308441667,374.0]}},{"type":"Feature","properties":{"REMARKS":"ARB-044"},"geometry":{"type":"Point","coordinates":[2.709858333,9.308571667,373.8]}},{"type":"Feature","properties":{"REMARKS":"ARB-045\n"},"geometry":{"type":"Point","coordinates":[2.71069,9.30838,373.3]}},{"type":"Feature","properties":{"REMARKS":"ARB-0046"},"geometry":{"type":"Point","coordinates":[2.710775,9.308578333,376.4]}},{"type":"Feature","properties":{"REMARKS":"ARB-047"},"geometry":{"type":"Point","coordinates":[2.71099,9.308661667,375.8]}},{"type":"Feature","properties":{"REMARKS":"ARB-048"},"geometry":{"type":"Point","coordinates":[2.711281667,9.309036667,376.6]}},{"type":"Feature","properties":{"REMARKS":"ARB-049"},"geometry":{"type":"Point","coordinates":[2.711415,9.309568333,370.2]}},{"type":"Feature","properties":{"REMARKS":"ARB-050"},"geometry":{"type":"Point","coordinates":[2.711383333,9.309391667,372.5]}},{"type":"Feature","properties":{"REMARKS":"ARB-051"},"geometry":{"type":"Point","coordinates":[2.711068333,9.309538333,372.2]}},{"type":"Feature","properties":{"REMARKS":"ARB-052"},"geometry":{"type":"Point","coordinates":[2.710753333,9.309855,372.7]}},{"type":"Feature","properties":{"REMARKS":"ARB-052"},"geometry":{"type":"Point","coordinates":[2.702416667,9.313741667,372.2]}},{"type":"Feature","properties":{"REMARKS":"ARB-053"},"geometry":{"type":"Point","coordinates":[2.702406667,9.3137,371.0]}},{"type":"Feature","properties":{"REMARKS":"ARB-054"},"geometry":{"type":"Point","coordinates":[2.702545,9.313741667,371.0]}},{"type":"Feature","properties":{"REMARKS":"ARB-055"},"geometry":{"type":"Point","coordinates":[2.706713333,9.314191667,368.5]}},{"type":"Feature","properties":{"REMARKS":"ARB-056"},"geometry":{"type":"Point","coordinates":[2.706943333,9.314471667,370.6]}},{"type":"Feature","properties":{"REMARKS":"ARB-056"},"geometry":{"type":"Point","coordinates":[2.707395,9.315375,370.5]}},{"type":"Feature","properties":{"REMARKS":"ARB-057"},"geometry":{"type":"Point","coordinates":[2.709428333,9.316193333,369.6]}},{"type":"Feature","properties":{"REMARKS":"PAR-002"},"geometry":{"type":"Point","coordinates":[2.707133333,9.314846667,365.9]}},{"type":"Feature","properties":{"REMARKS":"ARB-059"},"geometry":{"type":"Point","coordinates":[2.706781667,9.314858333,369.6]}},{"type":"Feature","properties":{"REMARKS":"ARB-060"},"geometry":{"type":"Point","coordinates":[2.705301667,9.316568333,366.0]}},{"type":"Feature","properties":{"REMARKS":"ARB-062"},"geometry":{"type":"Point","coordinates":[2.703651667,9.316805,367.0]}}]}
L.geoJSON(arbres, {

    pointToLayer: function(feature, latlng){

        return L.marker(latlng, {
            icon: arbresIcon
        });

    }

}).addTo(map);

const batiment = {"type":"FeatureCollection","name":"bâtiment ","features":[{"type":"Feature","properties":{"REMARKS":"BAT-001"},"geometry":{"type":"Point","coordinates":[2.70494,9.307678333,384.7]}},{"type":"Feature","properties":{"REMARKS":"BAT -002"},"geometry":{"type":"Point","coordinates":[2.705105,9.30788,377.2]}},{"type":"Feature","properties":{"REMARKS":"BAT-003"},"geometry":{"type":"Point","coordinates":[2.705425,9.308196667,377.3]}},{"type":"Feature","properties":{"REMARKS":"BAT-004"},"geometry":{"type":"Point","coordinates":[2.7056,9.308316667,376.7]}},{"type":"Feature","properties":{"REMARKS":"BAT-005"},"geometry":{"type":"Point","coordinates":[2.705785,9.308481667,379.4]}},{"type":"Feature","properties":{"REMARKS":"BAT-006"},"geometry":{"type":"Point","coordinates":[2.705936667,9.308606667,376.9]}},{"type":"Feature","properties":{"REMARKS":"BAT-007"},"geometry":{"type":"Point","coordinates":[2.706121667,9.308773333,375.7]}},{"type":"Feature","properties":{"REMARKS":"BAT-008"},"geometry":{"type":"Point","coordinates":[2.706275,9.308905,377.4]}},{"type":"Feature","properties":{"REMARKS":"BAT-009"},"geometry":{"type":"Point","coordinates":[2.706491667,9.309021667,377.2]}},{"type":"Feature","properties":{"REMARKS":"BAT-010"},"geometry":{"type":"Point","coordinates":[2.706645,9.309211667,374.3]}},{"type":"Feature","properties":{"REMARKS":"BAT-011"},"geometry":{"type":"Point","coordinates":[2.706828333,9.309286667,375.5]}},{"type":"Feature","properties":{"REMARKS":"BAT-012"},"geometry":{"type":"Point","coordinates":[2.706983333,9.309486667,370.1]}},{"type":"Feature","properties":{"REMARKS":"BAT-013"},"geometry":{"type":"Point","coordinates":[2.707123333,9.309651667,375.1]}},{"type":"Feature","properties":{"REMARKS":"BAT-014"},"geometry":{"type":"Point","coordinates":[2.707311667,9.309788333,371.7]}},{"type":"Feature","properties":{"REMARKS":"BAT-015"},"geometry":{"type":"Point","coordinates":[2.707523333,9.309931667,374.2]}},{"type":"Feature","properties":{"REMARKS":"BAT-016"},"geometry":{"type":"Point","coordinates":[2.707671667,9.31006,371.6]}},{"type":"Feature","properties":{"REMARKS":"BAT-017"},"geometry":{"type":"Point","coordinates":[2.707818333,9.310196667,371.2]}},{"type":"Feature","properties":{"REMARKS":"BAT-018"},"geometry":{"type":"Point","coordinates":[2.708008333,9.310365,370.4]}},{"type":"Feature","properties":{"REMARKS":"BAT-019"},"geometry":{"type":"Point","coordinates":[2.7082,9.310506667,369.6]}},{"type":"Feature","properties":{"REMARKS":"BAT-020"},"geometry":{"type":"Point","coordinates":[2.708353333,9.310651667,371.3]}},{"type":"Feature","properties":{"REMARKS":"BAT-021"},"geometry":{"type":"Point","coordinates":[2.708531667,9.310806667,369.9]}},{"type":"Feature","properties":{"REMARKS":"BAT-022"},"geometry":{"type":"Point","coordinates":[2.708741667,9.310931667,373.3]}},{"type":"Feature","properties":{"REMARKS":"BAT-023"},"geometry":{"type":"Point","coordinates":[2.708878333,9.311095,371.3]}},{"type":"Feature","properties":{"REMARKS":"BAT-024"},"geometry":{"type":"Point","coordinates":[2.709096667,9.311191667,372.7]}},{"type":"Feature","properties":{"REMARKS":"BAT-025"},"geometry":{"type":"Point","coordinates":[2.709216667,9.311395,368.7]}},{"type":"Feature","properties":{"REMARKS":"BAT-026"},"geometry":{"type":"Point","coordinates":[2.7094,9.311533333,369.7]}},{"type":"Feature","properties":{"REMARKS":"BAT-027"},"geometry":{"type":"Point","coordinates":[2.70953,9.311681667,369.0]}},{"type":"Feature","properties":{"REMARKS":"BAT-028"},"geometry":{"type":"Point","coordinates":[2.709758333,9.311785,371.2]}},{"type":"Feature","properties":{"REMARKS":"BAT-029"},"geometry":{"type":"Point","coordinates":[2.70993,9.311921667,367.1]}},{"type":"Feature","properties":{"REMARKS":"BAT-030"},"geometry":{"type":"Point","coordinates":[2.710091667,9.31208,372.0]}},{"type":"Feature","properties":{"REMARKS":"BAT-032"},"geometry":{"type":"Point","coordinates":[2.710201667,9.312313333,368.2]}},{"type":"Feature","properties":{"REMARKS":"BAT-033"},"geometry":{"type":"Point","coordinates":[2.710306667,9.312286667,368.3]}},{"type":"Feature","properties":{"REMARKS":"BAT-034"},"geometry":{"type":"Point","coordinates":[2.71045,9.3124,366.8]}},{"type":"Feature","properties":{"REMARKS":"BAT-035"},"geometry":{"type":"Point","coordinates":[2.710626667,9.312541667,368.3]}},{"type":"Feature","properties":{"REMARKS":"BAT-036"},"geometry":{"type":"Point","coordinates":[2.710451667,9.312151667,371.2]}},{"type":"Feature","properties":{"REMARKS":"BAT-038"},"geometry":{"type":"Point","coordinates":[2.705406667,9.30756,383.3]}},{"type":"Feature","properties":{"REMARKS":"BAT-039"},"geometry":{"type":"Point","coordinates":[2.705551667,9.307668333,380.9]}},{"type":"Feature","properties":{"REMARKS":"BAT-040"},"geometry":{"type":"Point","coordinates":[2.70574,9.307836667,379.2]}},{"type":"Feature","properties":{"REMARKS":"BAT-041"},"geometry":{"type":"Point","coordinates":[2.705913333,9.308011667,379.7]}},{"type":"Feature","properties":{"REMARKS":"BAT-042"},"geometry":{"type":"Point","coordinates":[2.706073333,9.308143333,378.0]}},{"type":"Feature","properties":{"REMARKS":"BAT-043"},"geometry":{"type":"Point","coordinates":[2.706246667,9.308301667,376.2]}},{"type":"Feature","properties":{"REMARKS":"BAT-044"},"geometry":{"type":"Point","coordinates":[2.706428333,9.308456667,373.6]}},{"type":"Feature","properties":{"REMARKS":"BAT-045"},"geometry":{"type":"Point","coordinates":[2.706613333,9.308598333,373.6]}},{"type":"Feature","properties":{"REMARKS":"BAT-046"},"geometry":{"type":"Point","coordinates":[2.706776667,9.308738333,374.7]}},{"type":"Feature","properties":{"REMARKS":"BAT-047"},"geometry":{"type":"Point","coordinates":[2.706928333,9.308885,375.6]}},{"type":"Feature","properties":{"REMARKS":"BAT-049"},"geometry":{"type":"Point","coordinates":[2.707076667,9.309018333,374.1]}},{"type":"Feature","properties":{"REMARKS":"BAT-050"},"geometry":{"type":"Point","coordinates":[2.707258333,9.309166667,374.3]}},{"type":"Feature","properties":{"REMARKS":"BAT-051"},"geometry":{"type":"Point","coordinates":[2.707435,9.309336667,373.3]}},{"type":"Feature","properties":{"REMARKS":"BAT-052"},"geometry":{"type":"Point","coordinates":[2.707611667,9.309478333,373.2]}},{"type":"Feature","properties":{"REMARKS":"BAT-053"},"geometry":{"type":"Point","coordinates":[2.707731667,9.309606667,373.4]}},{"type":"Feature","properties":{"REMARKS":"BAT-054"},"geometry":{"type":"Point","coordinates":[2.708108333,9.309901667,367.6]}},{"type":"Feature","properties":{"REMARKS":"BAT-055"},"geometry":{"type":"Point","coordinates":[2.70829,9.310075,375.2]}},{"type":"Feature","properties":{"REMARKS":"BAT-056"},"geometry":{"type":"Point","coordinates":[2.708478333,9.310218333,369.6]}},{"type":"Feature","properties":{"REMARKS":"BAT-057"},"geometry":{"type":"Point","coordinates":[2.708641667,9.310351667,372.8]}},{"type":"Feature","properties":{"REMARKS":"BAT-058"},"geometry":{"type":"Point","coordinates":[2.708805,9.310523333,374.2]}},{"type":"Feature","properties":{"REMARKS":"BAT-059"},"geometry":{"type":"Point","coordinates":[2.708981667,9.310631667,372.1]}},{"type":"Feature","properties":{"REMARKS":"BAT-060"},"geometry":{"type":"Point","coordinates":[2.709156667,9.310806667,373.1]}},{"type":"Feature","properties":{"REMARKS":"BAT-061"},"geometry":{"type":"Point","coordinates":[2.709323333,9.310963333,370.3]}},{"type":"Feature","properties":{"REMARKS":"BAT-063"},"geometry":{"type":"Point","coordinates":[2.709695,9.311248333,374.8]}},{"type":"Feature","properties":{"REMARKS":"BAT-064"},"geometry":{"type":"Point","coordinates":[2.709833333,9.311405,371.4]}},{"type":"Feature","properties":{"REMARKS":"BAT-065"},"geometry":{"type":"Point","coordinates":[2.710023333,9.311535,368.9]}},{"type":"Feature","properties":{"REMARKS":"BAT-069"},"geometry":{"type":"Point","coordinates":[2.710208333,9.31173,365.8]}},{"type":"Feature","properties":{"REMARKS":"BAT-070"},"geometry":{"type":"Point","coordinates":[2.710301667,9.311636667,373.0]}},{"type":"Feature","properties":{"REMARKS":"BAT-071"},"geometry":{"type":"Point","coordinates":[2.710344943,9.311822701,367.514]}},{"type":"Feature","properties":{"REMARKS":"BAT-0072"},"geometry":{"type":"Point","coordinates":[2.71040625,9.311957396,367.96]}},{"type":"Feature","properties":{"REMARKS":"BAT-073"},"geometry":{"type":"Point","coordinates":[2.710488679,9.311946289,369.053]}},{"type":"Feature","properties":{"REMARKS":"BAT-074"},"geometry":{"type":"Point","coordinates":[2.710648725,9.3121475,367.921]}},{"type":"Feature","properties":{"REMARKS":"BAT-075"},"geometry":{"type":"Point","coordinates":[2.710870789,9.312263333,369.921]}},{"type":"Feature","properties":{"REMARKS":"BAT-076"},"geometry":{"type":"Point","coordinates":[2.706378333,9.30723,382.0]}},{"type":"Feature","properties":{"REMARKS":"BAT-077"},"geometry":{"type":"Point","coordinates":[2.706536667,9.307321667,378.0]}},{"type":"Feature","properties":{"REMARKS":"BAT-078"},"geometry":{"type":"Point","coordinates":[2.706711667,9.307416667,378.9]}},{"type":"Feature","properties":{"REMARKS":"BAT-079"},"geometry":{"type":"Point","coordinates":[2.706888333,9.307543333,375.5]}},{"type":"Feature","properties":{"REMARKS":"BAT-080"},"geometry":{"type":"Point","coordinates":[2.707028333,9.307735,378.9]}},{"type":"Feature","properties":{"REMARKS":"BAT-081"},"geometry":{"type":"Point","coordinates":[2.707228333,9.307861667,371.8]}},{"type":"Feature","properties":{"REMARKS":"BAT-082"},"geometry":{"type":"Point","coordinates":[2.707411667,9.308003333,376.3]}},{"type":"Feature","properties":{"REMARKS":"BAT-083"},"geometry":{"type":"Point","coordinates":[2.707581667,9.30815,375.5]}},{"type":"Feature","properties":{"REMARKS":"BAT-084"},"geometry":{"type":"Point","coordinates":[2.707738333,9.308305,373.2]}},{"type":"Feature","properties":{"REMARKS":"BAT-085"},"geometry":{"type":"Point","coordinates":[2.707911667,9.308478333,377.9]}},{"type":"Feature","properties":{"REMARKS":"BAT-086"},"geometry":{"type":"Point","coordinates":[2.708143333,9.308516667,369.2]}},{"type":"Feature","properties":{"REMARKS":"BAT-087"},"geometry":{"type":"Point","coordinates":[2.708338333,9.308668333,367.7]}},{"type":"Feature","properties":{"REMARKS":"BAT-088"},"geometry":{"type":"Point","coordinates":[2.708466667,9.308825,369.3]}},{"type":"Feature","properties":{"REMARKS":"BAT-089"},"geometry":{"type":"Point","coordinates":[2.708641667,9.308961667,368.3]}},{"type":"Feature","properties":{"REMARKS":"BAT-090"},"geometry":{"type":"Point","coordinates":[2.708828333,9.309093333,369.9]}},{"type":"Feature","properties":{"REMARKS":"BAT-090"},"geometry":{"type":"Point","coordinates":[2.709008333,9.30925,367.8]}},{"type":"Feature","properties":{"REMARKS":"BAT-091"},"geometry":{"type":"Point","coordinates":[2.709166667,9.309396667,367.2]}},{"type":"Feature","properties":{"REMARKS":"BAT-092"},"geometry":{"type":"Point","coordinates":[2.709335,9.309555,366.9]}},{"type":"Feature","properties":{"REMARKS":"BAT-093"},"geometry":{"type":"Point","coordinates":[2.70951,9.309691667,359.6]}},{"type":"Feature","properties":{"REMARKS":"le BAT-094"},"geometry":{"type":"Point","coordinates":[2.709698333,9.30984,365.2]}},{"type":"Feature","properties":{"REMARKS":"BAT-095"},"geometry":{"type":"Point","coordinates":[2.709845,9.309981667,365.7]}},{"type":"Feature","properties":{"REMARKS":"BAT-096"},"geometry":{"type":"Point","coordinates":[2.710196667,9.310288333,369.0]}},{"type":"Feature","properties":{"REMARKS":"BAT-097"},"geometry":{"type":"Point","coordinates":[2.71037,9.31039,373.7]}},{"type":"Feature","properties":{"REMARKS":"BAT-098"},"geometry":{"type":"Point","coordinates":[2.71053,9.310561667,369.7]}},{"type":"Feature","properties":{"REMARKS":"BAT-099"},"geometry":{"type":"Point","coordinates":[2.71085,9.310881667,368.9]}},{"type":"Feature","properties":{"REMARKS":"BAT-100"},"geometry":{"type":"Point","coordinates":[2.711056667,9.310993333,370.8]}},{"type":"Feature","properties":{"REMARKS":"BAT-101"},"geometry":{"type":"Point","coordinates":[2.711223333,9.311168333,363.5]}},{"type":"Feature","properties":{"REMARKS":"BAT-102"},"geometry":{"type":"Point","coordinates":[2.711378333,9.311308333,367.1]}},{"type":"Feature","properties":{"REMARKS":"BAT-103"},"geometry":{"type":"Point","coordinates":[2.711571667,9.31145,364.3]}},{"type":"Feature","properties":{"REMARKS":"BAT-104"},"geometry":{"type":"Point","coordinates":[2.711733333,9.3116,367.0]}},{"type":"Feature","properties":{"REMARKS":"BAT-105"},"geometry":{"type":"Point","coordinates":[2.711905,9.311741667,364.0]}},{"type":"Feature","properties":{"REMARKS":"BAT-106"},"geometry":{"type":"Point","coordinates":[2.712071667,9.311875,364.6]}}]}
L.geoJSON(batiment, {

    pointToLayer: function(feature, latlng){

        return L.marker(latlng, {
            icon: batimentIcon
        });
    }

}).addTo(map);

const forage = {"type":"FeatureCollection","name":"forages ","features":[{"type":"Feature","properties":{"REMARKS":"FOR-001"},"geometry":{"type":"Point","coordinates":[2.706163333,9.309046667,376.9]}},{"type":"Feature","properties":{"REMARKS":"FOR-002"},"geometry":{"type":"Point","coordinates":[2.710005,9.312333333,368.7]}},{"type":"Feature","properties":{"REMARKS":"FOR-003"},"geometry":{"type":"Point","coordinates":[2.705926667,9.307926667,380.4]}},{"type":"Feature","properties":{"REMARKS":"FOR-004"},"geometry":{"type":"Point","coordinates":[2.709455,9.31103,368.4]}},{"type":"Feature","properties":{"REMARKS":"BAT-062"},"geometry":{"type":"Point","coordinates":[2.709478333,9.311095,367.1]}},{"type":"Feature","properties":{"REMARKS":"FOR-004"},"geometry":{"type":"Point","coordinates":[2.708946667,9.312896667,365.6]}}]}
L.geoJSON(forage, {

    pointToLayer: function(feature, latlng){
        return L.marker(latlng, {
            icon: forageIcon
        });
    }
}).addTo(map);


const parcelleAgricoleIcon = L.icon({
    iconUrl: "images/parcelle-agricole.png",
    iconSize: [45, 55],
    iconAnchor: [22, 55],
    popupAnchor: [0, -55]
});

// Données
const parcellesAgricoles0  =  {"type":"FeatureCollection","name":"Les domaines agricoles ","features":[{"type":"Feature","properties":{"NAME":"Zone A","AREA":33937.1127660647,"PERIMETER":845.0031065243867,"REMARKS":"PAR-001"},"geometry":{"type":"Polygon","coordinates":[[[2.703781667,9.30915,382.7],[2.702921667,9.309763333,380.3],[2.703223333,9.310126667,382.3],[2.704548333,9.312075,377.5],[2.704548333,9.312075,377.5],[2.705323333,9.311501667,374.7],[2.705323333,9.311501667,374.7],[2.703781667,9.30915,382.7]]]}},{"type":"Feature","properties":{"NAME":"Zone A-0","AREA":157108.2825992384,"PERIMETER":2260.1445788057495,"REMARKS":"PAR-002"},"geometry":{"type":"Polygon","coordinates":[[[2.703513333,9.308733333,379.0],[2.703816667,9.309166667,379.5],[2.705351667,9.311503333,379.4],[2.704563333,9.312078333,376.7],[2.705565,9.313596667,368.7],[2.707573333,9.313313333,364.9],[2.708345,9.312778333,371.0],[2.708951667,9.312028333,367.5],[2.708611667,9.311688333,364.4],[2.708358333,9.311995,363.9],[2.707703333,9.311426667,368.0],[2.707693333,9.311291667,365.7],[2.70833,9.31078,370.0],[2.707748333,9.310346667,369.2],[2.707581667,9.310505,367.2],[2.707191667,9.31026,371.8],[2.706961667,9.310033333,369.6],[2.706798333,9.310173333,371.2],[2.706898333,9.310361667,370.0],[2.706348333,9.310613333,371.9],[2.706186667,9.310393333,373.2],[2.705641667,9.309741667,374.0],[2.705381667,9.309268333,378.1],[2.705385,9.309265,378.2],[2.7049,9.308655,379.4],[2.705161667,9.308315,379.2],[2.70484,9.307886667,378.0],[2.703513333,9.308733333,379.0]]]}},{"type":"Feature","properties":{"NAME":"Zone A-1","AREA":4967.422186169773,"PERIMETER":298.9131207299387,"REMARKS":"PAR-003"},"geometry":{"type":"Polygon","coordinates":[[[2.705213333,9.308296667,376.5],[2.704923333,9.308638333,378.5],[2.705606667,9.309235,376.2],[2.705896667,9.308881667,376.6],[2.705213333,9.308296667,376.5]]]}},{"type":"Feature","properties":{"NAME":"ZoneA-2","AREA":2859.706389769446,"PERIMETER":221.48874362444417,"REMARKS":"PAR-004"},"geometry":{"type":"Polygon","coordinates":[[[2.705616667,9.309243333,376.0],[2.705598333,9.309238333,376.1],[2.705546667,9.309281667,374.1],[2.705828333,9.309561667,373.6],[2.706275,9.309143333,373.0],[2.705901667,9.308883333,376.4],[2.705616667,9.309243333,376.0]]]}},{"type":"Feature","properties":{"NAME":"ZoneA-3","AREA":11161.932262629736,"PERIMETER":434.852002297224,"REMARKS":"PAR-005"},"geometry":{"type":"Polygon","coordinates":[[[2.706306667,9.309118333,376.2],[2.706471667,9.309355,371.9],[2.706533333,9.309261667,374.7],[2.706683333,9.309395,375.8],[2.70665,9.309463333,373.4],[2.706985,9.309928333,373.3],[2.706428333,9.310413333,372.6],[2.706328333,9.310328333,372.9],[2.706188333,9.310301667,373.9],[2.705896667,9.310025,375.4],[2.70565,9.309756667,375.4],[2.706306667,9.309118333,376.2]]]}},{"type":"Feature","properties":{"NAME":"Zone A-4","AREA":3934.6126251854002,"PERIMETER":306.5251098221989,"REMARKS":"PAR-FOR-006"},"geometry":{"type":"Polygon","coordinates":[[[2.709086667,9.312093333,363.6],[2.709086667,9.312093333,363.6],[2.708661667,9.312543333,365.3],[2.708908333,9.312748333,364.0],[2.709145,9.312513333,362.5],[2.709495,9.312806667,364.4],[2.709676667,9.312618333,362.1],[2.709086667,9.312093333,363.6]]]}},{"type":"Feature","properties":{"NAME":"Zone A-5","AREA":1939.6854778559064,"PERIMETER":181.50965415706685,"REMARKS":"PAR-007"},"geometry":{"type":"Polygon","coordinates":[[[2.708906667,9.31275,366.8],[2.708905,9.31275,366.8],[2.709336667,9.31307,363.1],[2.709503333,9.31282,362.9],[2.709145,9.312513333,362.4],[2.708906667,9.31275,366.8]]]}},{"type":"Feature","properties":{"NAME":"Zone A-6","AREA":2435.2718504704535,"PERIMETER":197.88376898003366,"REMARKS":"PAR-FOR-008"},"geometry":{"type":"Polygon","coordinates":[[[2.7097,9.312626667,362.1],[2.710001667,9.312296667,357.2],[2.7096,9.312005,364.5],[2.709363333,9.312336667,362.0],[2.7097,9.312626667,362.1]]]}},{"type":"Feature","properties":{"NAME":"Zone A-7","AREA":2325.2158446721733,"PERIMETER":193.0023210737559,"REMARKS":"PAR-009"},"geometry":{"type":"Polygon","coordinates":[[[2.709351667,9.312316667,363.7],[2.709006667,9.312038333,366.2],[2.709305,9.311706667,365.1],[2.709628333,9.311963333,366.5],[2.709351667,9.312316667,363.7]]]}},{"type":"Feature","properties":{"NAME":"Zone A-8","AREA":2636.913316335529,"PERIMETER":206.22925518803163,"REMARKS":"PAR-010"},"geometry":{"type":"Polygon","coordinates":[[[2.70899,9.312035,367.1],[2.709295,9.311695,364.9],[2.708903333,9.311386667,367.5],[2.708623333,9.311678333,364.3],[2.70899,9.312035,367.1]]]}},{"type":"Feature","properties":{"NAME":"Zone A-11","AREA":2184.3251264691353,"PERIMETER":238.4426456737009,"REMARKS":"PAR-011"},"geometry":{"type":"Polygon","coordinates":[[[2.708876667,9.311368333,368.5],[2.708311667,9.310818333,368.8],[2.707985,9.311136667,367.4],[2.708876667,9.311368333,368.5]]]}}]}

const Parcelleagricole1 =   {"type":"FeatureCollection","name":"domaines Agricole","features":[{"type":"Feature","properties":{"NAME":"Zone D-0","AREA":143602.78801992163,"PERIMETER":1553.1412245358945,"REMARKS":"PAR-001"},"geometry":{"type":"Polygon","coordinates":[[[2.705798333,9.314151667,368.6],[2.706621667,9.314128333,372.5],[2.707278333,9.314095,368.9],[2.707343333,9.314908333,367.6],[2.707453333,9.315355,369.0],[2.707736667,9.316958333,368.2],[2.707431667,9.316956667,367.9],[2.706765,9.316891667,366.2],[2.70659,9.316861667,366.1],[2.706143333,9.317006667,364.6],[2.704928333,9.317333333,364.9],[2.704291667,9.31753,368.8],[2.703961667,9.31756,366.0],[2.703931667,9.317406667,367.6],[2.703341667,9.315965,370.3],[2.703166667,9.31557,370.9],[2.702991667,9.314775,373.4],[2.705798333,9.314151667,368.6]]]}},{"type":"Feature","properties":{"NAME":"Zone D-1","AREA":90706.44719200884,"PERIMETER":1549.1178039197878,"REMARKS":"PAR-002"},"geometry":{"type":"Polygon","coordinates":[[[2.707321667,9.314106667,367.0],[2.70737,9.314725,368.8],[2.70737,9.314881667,368.0],[2.707571667,9.315735,366.5],[2.707758333,9.316951667,366.3],[2.708338333,9.317061667,367.2],[2.708861667,9.317031667,366.2],[2.708763333,9.316686667,368.6],[2.709356667,9.3163,369.8],[2.70944,9.316241667,370.3],[2.71009,9.315806667,365.8],[2.7096,9.315648333,367.2],[2.709401667,9.315251667,366.7],[2.709458333,9.315003333,366.2],[2.710128333,9.314913333,361.9],[2.711093333,9.314771667,359.3],[2.711081667,9.314585,365.1],[2.711066667,9.314256667,362.4],[2.711056667,9.314011667,359.7],[2.710945,9.31385,358.4],[2.710945,9.31385,358.4],[2.710748333,9.313881667,361.3],[2.710431667,9.313556667,362.1],[2.710321667,9.313408333,366.5],[2.709968333,9.313508333,365.1],[2.710076667,9.313748333,365.3],[2.70948,9.313978333,366.1],[2.708485,9.313973333,366.4],[2.70798,9.314123333,365.9],[2.707455,9.314121667,364.1],[2.707321667,9.314106667,367.0]]]}},{"type":"Feature","properties":{"NAME":"Zone D-2","AREA":129068.63428284228,"PERIMETER":1424.8418085299688,"REMARKS":"PAR-003"},"geometry":{"type":"Polygon","coordinates":[[[2.70392,9.317568333,367.4],[2.703861667,9.31741,365.9],[2.703471667,9.316465,366.8],[2.703371667,9.31613,371.8],[2.70294,9.314751667,372.5],[2.701486667,9.314928333,373.5],[2.699365,9.31594,367.8],[2.701246667,9.318606667,362.6],[2.70392,9.317568333,367.4]]]}}]}

const domaines_Agricole4 =  {"type":"FeatureCollection","name":"Domaine agricole ","features":[{"type":"Feature","properties":{"NAME":"Zone C-0","AREA":35490.78051640093,"PERIMETER":918.2714738709835,"REMARKS":"PAR -001"},"geometry":{"type":"Polygon","coordinates":[[[2.705545,9.307596667,382.5],[2.706291667,9.307061667,384.4],[2.706958333,9.307665,381.5],[2.707261667,9.307908333,378.1],[2.708158333,9.30867,379.9],[2.70869,9.309151667,374.2],[2.708055,9.30979,367.4],[2.705545,9.307596667,382.5]]]}},{"type":"Feature","properties":{"NAME":"Zone C-1","AREA":78439.44276793115,"PERIMETER":1473.5112021451318,"REMARKS":"PAR -002"},"geometry":{"type":"Polygon","coordinates":[[[2.70628,9.306935,381.0],[2.707061667,9.307561667,377.4],[2.707268333,9.307755,380.8],[2.70873,9.309003333,373.5],[2.709851667,9.308031667,375.6],[2.710228333,9.308633333,376.1],[2.710793333,9.308311667,375.0],[2.71034,9.307686667,373.2],[2.710163333,9.307466667,377.3],[2.709701667,9.306756667,379.0],[2.709593333,9.306658333,380.0],[2.70881,9.30716,378.1],[2.708496667,9.306723333,376.6],[2.708285,9.306413333,376.3],[2.708653333,9.306103333,372.5],[2.708401667,9.305686667,375.2],[2.70628,9.306935,381.0]]]}},{"type":"Feature","properties":{"NAME":"Zone C-2","AREA":48382.05013706535,"PERIMETER":947.1619260190117,"REMARKS":"PAR -003"},"geometry":{"type":"Polygon","coordinates":[[[2.708736667,9.309013333,375.0],[2.70983,9.308063333,373.1],[2.710235,9.308663333,374.0],[2.7108,9.308323333,377.9],[2.711171667,9.308835,373.5],[2.711478333,9.309273333,377.3],[2.711806667,9.309805,369.9],[2.710818333,9.310666667,370.3],[2.708736667,9.309013333,375.0]]]}},{"type":"Feature","properties":{"NAME":"Zone C-3","AREA":2103.847061164677,"PERIMETER":194.1191245874746,"REMARKS":"PAR -004"},"geometry":{"type":"Polygon","coordinates":[[[2.708691667,9.309166667,372.1],[2.708298333,9.309585,368.7],[2.708511667,9.309755,374.1],[2.708951667,9.309373333,373.5],[2.708691667,9.309166667,372.1]]]}},{"type":"Feature","properties":{"NAME":"Zone C-4","AREA":11232.46325199306,"PERIMETER":716.4293090275521,"REMARKS":"PAR -005"},"geometry":{"type":"Polygon","coordinates":[[[2.71077,9.311,367.2],[2.710153333,9.311641667,368.2],[2.709786667,9.311315,368.4],[2.709946667,9.311096667,368.3],[2.709398333,9.31063,370.6],[2.709225,9.310828333,369.4],[2.70833,9.309986667,370.5],[2.71077,9.311,367.2]]]}},{"type":"Feature","properties":{"NAME":"Zone C-5","AREA":4298.811298318207,"PERIMETER":264.8755871900124,"REMARKS":"PAR -006"},"geometry":{"type":"Polygon","coordinates":[[[2.709588333,9.311533333,368.7],[2.709891667,9.311105,368.8],[2.70939,9.310668333,370.5],[2.709068333,9.311081667,367.1],[2.709588333,9.311533333,368.7]]]}}]}

const domaines_Agricole3 =  {"type":"FeatureCollection","name":"Domaines agricoles ","features":[{"type":"Feature","properties":{"NAME":"Zone B-0","AREA":35854.99369193241,"PERIMETER":915.315679306563,"REMARKS":"PAR-001"},"geometry":{"type":"Polygon","coordinates":[[[2.702636667,9.309471667,384.6],[2.702891667,9.309795,377.7],[2.70319,9.310235,376.1],[2.700425,9.311998333,377.1],[2.699963333,9.31126,381.8],[2.702636667,9.309471667,384.6]]]}},{"type":"Feature","properties":{"NAME":"Zone B-1","AREA":83251.48844739422,"PERIMETER":1234.406772942259,"REMARKS":"PAR-002"},"geometry":{"type":"Polygon","coordinates":[[[2.7032,9.310266667,376.9],[2.700438333,9.312026667,379.2],[2.70142,9.313563333,378.4],[2.701613333,9.313418333,376.7],[2.702651667,9.312765,377.3],[2.70287,9.313158333,374.6],[2.704498333,9.312086667,375.6],[2.7032,9.310266667,376.9]]]}},{"type":"Feature","properties":{"NAME":"Zone B-2","AREA":133996.1782066375,"PERIMETER":1518.575835671823,"REMARKS":"PAR-003"},"geometry":{"type":"Polygon","coordinates":[[[2.699831667,9.311166667,374.9],[2.702111667,9.31485,376.6],[2.701315,9.314926667,378.0],[2.70014,9.315353333,375.8],[2.69933,9.31577,367.6],[2.697408333,9.312721667,371.7],[2.699831667,9.311166667,374.9]]]}},{"type":"Feature","properties":{"NAME":"Zone B-3","AREA":36758.783370412886,"PERIMETER":916.1640356649284,"REMARKS":"PAR-004"},"geometry":{"type":"Polygon","coordinates":[[[2.701445,9.313596667,380.1],[2.701648333,9.313446667,377.9],[2.702645,9.312816667,377.5],[2.702868333,9.313198333,376.0],[2.703421667,9.314096667,372.2],[2.704258333,9.313708333,370.9],[2.70454,9.314143333,369.3],[2.703398333,9.314651667,370.0],[2.70216,9.31485,374.4],[2.701445,9.313596667,380.1]]]}},{"type":"Feature","properties":{"NAME":"Zone B-4","AREA":29587.959354683757,"PERIMETER":709.2665248418017,"REMARKS":"PAR-005"},"geometry":{"type":"Polygon","coordinates":[[[2.702896667,9.313163333,375.5],[2.704511667,9.312105,375.6],[2.705308333,9.313256667,370.1],[2.703451667,9.314083333,370.6],[2.702896667,9.313163333,375.5]]]}}]}

const domaines_forestiers = {"type":"FeatureCollection","name":"Domaines forestiers ","features":[{"type":"Feature","properties":{"NAME":"Zone F-0","AREA":143602.78801992163,"PERIMETER":1553.1412245358945,"REMARKS":"PAR-001"},"geometry":{"type":"Polygon","coordinates":[[[2.705798333,9.314151667,368.6],[2.706621667,9.314128333,372.5],[2.707278333,9.314095,368.9],[2.707343333,9.314908333,367.6],[2.707453333,9.315355,369.0],[2.707736667,9.316958333,368.2],[2.707431667,9.316956667,367.9],[2.706765,9.316891667,366.2],[2.70659,9.316861667,366.1],[2.706143333,9.317006667,364.6],[2.704928333,9.317333333,364.9],[2.704291667,9.31753,368.8],[2.703961667,9.31756,366.0],[2.703931667,9.317406667,367.6],[2.703341667,9.315965,370.3],[2.703166667,9.31557,370.9],[2.702991667,9.314775,373.4],[2.705798333,9.314151667,368.6]]]}}]}// 


// Style
const styleParcelleAgricole = {
    color: "green",
    weight: 2,
    fillColor: "grey",
    fillOpacity: 0.5
};
function creerFicheParcelle(feature) {

    const nom = feature.properties.NAME || "Non renseigné";
    const code = feature.properties.REMARKS || "Non renseigné";

    return `
        <div class="fiche-parcelle">

            <h2>🌾 ${nom}</h2>

            <p class="code-parcelle">
                Code : <strong>${code}</strong>
            </p>

            <hr>

            <h3>📍 IDENTIFICATION</h3>

            <p><strong>Nom :</strong> ${nom}</p>
            <p><strong>Code :</strong> ${code}</p>
            <p><strong>Statut :</strong> Parcelle active</p>
            <p><strong>Superficie :</strong> ${feature.properties.AREA?.toFixed(0) || "Non renseignée"} m²</p>


            <h3>🌱 PRODUCTION</h3>

            <p><strong>Culture actuelle :</strong> À renseigner</p>
            <p><strong>Spéculation précédente :</strong> À renseigner</p>
            <p><strong>Campagnes précédentes :</strong> À renseigner</p>
            <p><strong>Stade de développement :</strong> À renseigner</p>


            <h3>🌿 SOL</h3>

            <p><strong>Type de sol :</strong> À analyser</p>
            <p><strong>Texture :</strong> À analyser</p>
            <p><strong>Porosité :</strong> À analyser</p>
            <p><strong>Humidité du sol :</strong> À analyser</p>
            <p><strong>Capacité de rétention d'eau :</strong> À analyser</p>
            <p><strong>Santé du sol :</strong> À analyser</p>
            <p><strong>Fertilité :</strong> À analyser</p>


            <h3>💧 EAU</h3>

            <p><strong>Besoin en eau :</strong> À analyser</p>
            <p><strong>Stress hydrique :</strong> À analyser</p>
            <p><strong>Irrigation :</strong> À renseigner</p>


            <h3>🌿 ADVENTICES</h3>

            <p><strong>Présence :</strong> À observer</p>
            <p><strong>Types rencontrés :</strong> À identifier</p>
            <p><strong>Espèces dominantes :</strong> À identifier</p>
            <p><strong>Niveau d'infestation :</strong> À analyser</p>


            <h3>🐛 RAVAGEURS</h3>

            <p><strong>Présence :</strong> À observer</p>
            <p><strong>Type :</strong> À identifier</p>
            <p><strong>Niveau d'infestation :</strong> À analyser</p>


            <h3>🦠 MALADIES</h3>

            <p><strong>Présence :</strong> À observer</p>
            <p><strong>Type :</strong> À identifier</p>
            <p><strong>Niveau de risque :</strong> À analyser</p>


            <h3>🚁 ANALYSE DRONE</h3>

            <p><strong>Vigueur végétative :</strong> À analyser</p>
            <p><strong>NDVI :</strong> À analyser</p>
            <p><strong>NDRE :</strong> À analyser</p>
            <p><strong>Couverture végétale :</strong> À analyser</p>
            <p><strong>Zones stressées :</strong> À détecter</p>
            <p><strong>Anomalies :</strong> À détecter</p>


            <h3>📊 PERFORMANCE</h3>

            <p><strong>Rendement estimé :</strong> À calculer</p>
            <p><strong>Rendement précédent :</strong> À renseigner</p>
            <p><strong>Productivité :</strong> À analyser</p>


            <h3>🧠 AIDE À LA DÉCISION</h3>

            <p><strong>Alertes :</strong> Aucune donnée disponible</p>
            <p><strong>Recommandation :</strong> Analyse de terrain nécessaire</p>

        </div>
    `;
}
function afficherParcelle(couche) {

    return L.geoJSON(couche, {

        style: styleParcelleAgricole,

        onEachFeature: function(feature, layer) {

            // Création de la fiche de la parcelle
            const fiche = creerFicheParcelle(feature);


            // Lorsque l'utilisateur clique sur la parcelle
            layer.bindPopup(fiche, {
                maxWidth: 450,
                minWidth: 300
            });


            // Calcul du centre de la parcelle
            const centre = layer.getBounds().getCenter();


            // Ajout de l'icône agricole
            L.marker(centre, {
                icon: parcelleAgricoleIcon
            })
            .bindPopup(fiche, {
                maxWidth: 450,
                minWidth: 300
            })
            .addTo(map);

        }

    }).addTo(map);
}

// Affichage des différentes couches agricoles

afficherParcelle(parcellesAgricoles0);

afficherParcelle(Parcelleagricole1);

afficherParcelle(domaines_Agricole4);

afficherParcelle(domaines_Agricole3);


function creerFicheParcelle(feature) {

    const nom =
        feature.properties.NAME || "Parcelle non renseignée";

    const surface =
        feature.properties.AREA
        ? (feature.properties.AREA / 10000).toFixed(2)
        : "Non disponible";

    const remarque =
        feature.properties.REMARKS || "Non renseignée";


    return `

        <div class="fiche-parcelle">

            <h2>🌱 Analyse de la parcelle</h2>


            <!-- =========================
                 IDENTIFICATION
            ========================== -->

            <div class="section-parcelle">

                <h3>📍 Identification et localisation</h3>

                <p><strong>Nom de la parcelle :</strong> ${nom}</p>

                <p><strong>Référence / Code :</strong> ${remarque}</p>

                <p><strong>Superficie :</strong> ${surface} ha</p>

                <p><strong>Statut :</strong> Parcelle active</p>

                <p><strong>Position géographique :</strong> À renseigner</p>

                <p><strong>Coordonnées GPS :</strong> À renseigner</p>

                <p><strong>Altitude :</strong> À analyser</p>

                <p><strong>Zone administrative :</strong> À renseigner</p>

                <p><strong>Accessibilité :</strong> À évaluer</p>

                <p><strong>Distance par rapport aux infrastructures :</strong> À analyser</p>

            </div>


            <hr>


            <!-- =========================
                 HISTORIQUE
            ========================== -->

            <div class="section-parcelle">

                <h3>📜 Historique agricole</h3>

                <p><strong>Culture actuelle :</strong> À renseigner</p>

                <p><strong>Spéculation précédente :</strong> À renseigner</p>

                <p><strong>Campagne précédente :</strong> À renseigner</p>

                <p><strong>Historique des cultures :</strong> À renseigner</p>

                <p><strong>Historique des rotations :</strong> À renseigner</p>

                <p><strong>Anciennes associations culturales :</strong> À renseigner</p>

                <p><strong>Anciennes fertilisations :</strong> À renseigner</p>

                <p><strong>Produits phytosanitaires utilisés :</strong> À renseigner</p>

                <p><strong>Rendements précédents :</strong> À renseigner</p>

                <p><strong>Problèmes agricoles récurrents :</strong> À identifier</p>

                <p><strong>Années de mise en culture :</strong> À renseigner</p>

                <p><strong>Périodes de jachère :</strong> À renseigner</p>

            </div>


            <hr>


            <!-- =========================
                 SOL
            ========================== -->

            <div class="section-parcelle">

                <h3>🌍 Caractéristiques physiques du sol</h3>

                <p><strong>Type de sol :</strong> À analyser</p>

                <p><strong>Texture :</strong> À analyser</p>

                <p><strong>Structure :</strong> À analyser</p>

                <p><strong>Profondeur du sol :</strong> À analyser</p>

                <p><strong>Porosité :</strong> À analyser</p>

                <p><strong>Compaction :</strong> À analyser</p>

                <p><strong>Densité apparente :</strong> À analyser</p>

                <p><strong>Perméabilité :</strong> À analyser</p>

                <p><strong>Infiltration de l'eau :</strong> À analyser</p>

                <p><strong>Capacité de rétention d'eau :</strong> À analyser</p>

                <p><strong>Humidité actuelle :</strong> À analyser</p>

                <p><strong>Drainage :</strong> À analyser</p>

                <p><strong>Présence de pierres :</strong> À observer</p>

                <p><strong>Hydromorphie :</strong> À analyser</p>

                <p><strong>État de surface du sol :</strong> À observer</p>

                <p><strong>Croûte de battance :</strong> À observer</p>

            </div>


            <hr>


            <!-- =========================
                 FERTILITE
            ========================== -->

            <div class="section-parcelle">

                <h3>🧪 Fertilité et santé du sol</h3>

                <p><strong>pH :</strong> À analyser</p>

                <p><strong>Matière organique :</strong> À analyser</p>

                <p><strong>Carbone organique :</strong> À analyser</p>

                <p><strong>Azote total :</strong> À analyser</p>

                <p><strong>Phosphore disponible :</strong> À analyser</p>

                <p><strong>Potassium disponible :</strong> À analyser</p>

                <p><strong>Calcium :</strong> À analyser</p>

                <p><strong>Magnésium :</strong> À analyser</p>

                <p><strong>Soufre :</strong> À analyser</p>

                <p><strong>Oligoéléments :</strong> À analyser</p>

                <p><strong>Capacité d'échange cationique :</strong> À analyser</p>

                <p><strong>Saturation en bases :</strong> À analyser</p>

                <p><strong>Salinité :</strong> À analyser</p>

                <p><strong>Acidité du sol :</strong> À analyser</p>

                <p><strong>Activité biologique :</strong> À analyser</p>

                <p><strong>Activité microbienne :</strong> À analyser</p>

                <p><strong>Présence de vers de terre :</strong> À observer</p>

                <p><strong>Indice global de santé du sol :</strong> À calculer</p>

                <p><strong>Niveau global de fertilité :</strong> À calculer</p>

            </div>


            <hr>


            <!-- =========================
                 TOPOGRAPHIE
            ========================== -->

            <div class="section-parcelle">

                <h3>⛰️ Relief et topographie</h3>

                <p><strong>Altitude :</strong> À analyser</p>

                <p><strong>Pente moyenne :</strong> À analyser</p>

                <p><strong>Pente maximale :</strong> À analyser</p>

                <p><strong>Orientation de la pente :</strong> À analyser</p>

                <p><strong>Zones basses :</strong> À détecter</p>

                <p><strong>Zones élevées :</strong> À détecter</p>

                <p><strong>Dépressions :</strong> À détecter</p>

                <p><strong>Zones d'accumulation d'eau :</strong> À détecter</p>

                <p><strong>Risque de ruissellement :</strong> À analyser</p>

                <p><strong>Risque d'érosion :</strong> À analyser</p>

                <p><strong>Zones érodées :</strong> À cartographier</p>

                <p><strong>Ravines / rigoles :</strong> À détecter</p>

            </div>


            <hr>


            <!-- =========================
                 EAU
            ========================== -->

            <div class="section-parcelle">

                <h3>💧 Ressources et gestion de l'eau</h3>

                <p><strong>Disponibilité en eau :</strong> À analyser</p>

                <p><strong>Humidité du sol :</strong> À analyser</p>

                <p><strong>Stress hydrique :</strong> À détecter</p>

                <p><strong>Besoin estimé en eau :</strong> À calculer</p>

                <p><strong>Source d'eau disponible :</strong> À renseigner</p>

                <p><strong>Distance au point d'eau :</strong> À analyser</p>

                <p><strong>Possibilité d'irrigation :</strong> À évaluer</p>

                <p><strong>Type d'irrigation recommandé :</strong> À déterminer</p>

                <p><strong>Risque d'inondation :</strong> À analyser</p>

                <p><strong>Risque d'engorgement :</strong> À analyser</p>

                <p><strong>Capacité de drainage :</strong> À analyser</p>

            </div>


            <hr>


            <!-- =========================
                 CLIMAT
            ========================== -->

            <div class="section-parcelle">

                <h3>☀️ Conditions climatiques</h3>

                <p><strong>Pluviométrie estimée :</strong> À renseigner</p>

                <p><strong>Répartition des pluies :</strong> À analyser</p>

                <p><strong>Température moyenne :</strong> À analyser</p>

                <p><strong>Température minimale :</strong> À analyser</p>

                <p><strong>Température maximale :</strong> À analyser</p>

                <p><strong>Humidité atmosphérique :</strong> À analyser</p>

                <p><strong>Vent dominant :</strong> À analyser</p>

                <p><strong>Vitesse du vent :</strong> À analyser</p>

                <p><strong>Ensoleillement :</strong> À analyser</p>

                <p><strong>Zones ombragées :</strong> À détecter</p>

                <p><strong>Risque climatique :</strong> À analyser</p>

            </div>


            <hr>


            <!-- =========================
                 VEGETATION
            ========================== -->

            <div class="section-parcelle">

                <h3>🌱 État de la végétation et des cultures</h3>

                <p><strong>Culture principale :</strong> À renseigner</p>

                <p><strong>Cultures associées :</strong> À renseigner</p>

                <p><strong>Stade phénologique :</strong> À observer</p>

                <p><strong>Densité des plantes :</strong> À analyser</p>

                <p><strong>Taux de levée :</strong> À analyser</p>

                <p><strong>Uniformité de croissance :</strong> À analyser</p>

                <p><strong>Vigueur végétative :</strong> À analyser</p>

                <p><strong>Couverture végétale :</strong> À analyser</p>

                <p><strong>Biomasse estimée :</strong> À calculer</p>

                <p><strong>Zones de faible croissance :</strong> À détecter</p>

                <p><strong>Zones de forte croissance :</strong> À détecter</p>

                <p><strong>Homogénéité de la parcelle :</strong> À analyser</p>

            </div>


            <hr>


            <!-- =========================
                 ADVENTICES
            ========================== -->

            <div class="section-parcelle">

                <h3>🌿 Adventices</h3>

                <p><strong>Présence d'adventices :</strong> À observer</p>

                <p><strong>Espèces rencontrées :</strong> À identifier</p>

                <p><strong>Espèces dominantes :</strong> À identifier</p>

                <p><strong>Densité des adventices :</strong> À analyser</p>

                <p><strong>Niveau d'infestation :</strong> À analyser</p>

                <p><strong>Répartition spatiale :</strong> À cartographier</p>

                <p><strong>Zones fortement infestées :</strong> À détecter</p>

                <p><strong>Risque de propagation :</strong> À analyser</p>

                <p><strong>Méthode de gestion recommandée :</strong> À déterminer</p>

            </div>


            <hr>


            <!-- =========================
                 RAVAGEURS
            ========================== -->

            <div class="section-parcelle">

                <h3>🐛 Ravageurs</h3>

                <p><strong>Présence :</strong> À observer</p>

                <p><strong>Type de ravageur :</strong> À identifier</p>

                <p><strong>Espèces dominantes :</strong> À identifier</p>

                <p><strong>Niveau d'infestation :</strong> À analyser</p>

                <p><strong>Zones touchées :</strong> À cartographier</p>

                <p><strong>Stade de développement :</strong> À identifier</p>

                <p><strong>Niveau de risque :</strong> À calculer</p>

                <p><strong>Seuil d'intervention :</strong> À déterminer</p>

                <p><strong>Présence d'auxiliaires :</strong> À observer</p>

                <p><strong>Stratégie de gestion :</strong> À recommander</p>

            </div>


            <hr>


            <!-- =========================
                 MALADIES
            ========================== -->

            <div class="section-parcelle">

                <h3>🦠 Maladies végétales</h3>

                <p><strong>Présence :</strong> À observer</p>

                <p><strong>Type de maladie :</strong> À identifier</p>

                <p><strong>Symptômes observés :</strong> À renseigner</p>

                <p><strong>Organes touchés :</strong> À identifier</p>

                <p><strong>Niveau d'incidence :</strong> À analyser</p>

                <p><strong>Niveau de sévérité :</strong> À analyser</p>

                <p><strong>Zones affectées :</strong> À cartographier</p>

                <p><strong>Risque de propagation :</strong> À analyser</p>

                <p><strong>Niveau d'alerte :</strong> À calculer</p>

                <p><strong>Stratégie de gestion :</strong> À recommander</p>

            </div>


            <hr>


            <!-- =========================
                 DRONE
            ========================== -->

            <div class="section-parcelle">

                <h3>🚁 Analyse par drone et télédétection</h3>

                <p><strong>Indice NDVI :</strong> À calculer</p>

                <p><strong>Indice NDRE :</strong> À calculer</p>

                <p><strong>Indice GNDVI :</strong> À calculer</p>

                <p><strong>Indice SAVI :</strong> À calculer</p>

                <p><strong>Indice NDWI :</strong> À calculer</p>

                <p><strong>Indice de stress hydrique :</strong> À analyser</p>

                <p><strong>Vigueur végétative :</strong> À analyser</p>

                <p><strong>Chlorophylle estimée :</strong> À analyser</p>

                <p><strong>Variabilité intra-parcellaire :</strong> À analyser</p>

                <p><strong>Zones stressées :</strong> À détecter</p>

                <p><strong>Zones à forte vigueur :</strong> À détecter</p>

                <p><strong>Anomalies spectrales :</strong> À détecter</p>

                <p><strong>Zones à inspecter :</strong> À identifier</p>

                <p><strong>Orthomosaïque disponible :</strong> Oui / Non</p>

                <p><strong>Modèle numérique de terrain :</strong> À générer</p>

                <p><strong>Modèle de surface :</strong> À générer</p>

                <p><strong>Carte de variabilité :</strong> À générer</p>

            </div>


            <hr>


            <!-- =========================
                 BIODIVERSITE
            ========================== -->

            <div class="section-parcelle">

                <h3>🦋 Biodiversité et environnement</h3>

                <p><strong>Présence d'arbres :</strong> À cartographier</p>

                <p><strong>Espèces arborées :</strong> À identifier</p>

                <p><strong>Densité des arbres :</strong> À analyser</p>

                <p><strong>Haies végétales :</strong> À identifier</p>

                <p><strong>Plantes fleuries :</strong> À identifier</p>

                <p><strong>Pollinisateurs observés :</strong> À observer</p>

                <p><strong>Auxiliaires naturels :</strong> À observer</p>

                <p><strong>Zones écologiques sensibles :</strong> À identifier</p>

                <p><strong>Couloirs de biodiversité :</strong> À identifier</p>

                <p><strong>Potentiel agroécologique :</strong> À analyser</p>

                <p><strong>Potentiel agroforestier :</strong> À analyser</p>

            </div>


            <hr>


            <!-- =========================
                 INFRASTRUCTURES
            ========================== -->

            <div class="section-parcelle">

                <h3>🏗️ Infrastructures et équipements</h3>

                <p><strong>Bâtiments :</strong> À cartographier</p>

                <p><strong>Magasins :</strong> À cartographier</p>

                <p><strong>Garages :</strong> À cartographier</p>

                <p><strong>Routes et pistes :</strong> À cartographier</p>

                <p><strong>Points d'eau :</strong> À cartographier</p>

                <p><strong>Système d'irrigation :</strong> À renseigner</p>

                <p><strong>Zones de stockage :</strong> À identifier</p>

                <p><strong>Accès aux machines :</strong> À évaluer</p>

                <p><strong>Accessibilité générale :</strong> À analyser</p>

            </div>


            <hr>


            <!-- =========================
                 ECONOMIE
            ========================== -->

            <div class="section-parcelle">

                <h3>💰 Performance économique</h3>

                <p><strong>Coût estimatif de production :</strong> À calculer</p>

                <p><strong>Besoin en main-d'œuvre :</strong> À estimer</p>

                <p><strong>Besoin en intrants :</strong> À estimer</p>

                <p><strong>Potentiel de rendement :</strong> À calculer</p>

                <p><strong>Rendement historique :</strong> À renseigner</p>

                <p><strong>Valeur potentielle de la production :</strong> À calculer</p>

                <p><strong>Rentabilité estimée :</strong> À calculer</p>

                <p><strong>Niveau de risque économique :</strong> À analyser</p>

            </div>


            <hr>


            <!-- =========================
                 ANALYSE GLOBALE
            ========================== -->

            <div class="section-parcelle">

                <h3>🧠 Analyse et aide à la décision</h3>

                <p><strong>État général de la parcelle :</strong> À analyser</p>

                <p><strong>Indice global de productivité :</strong> À calculer</p>

                <p><strong>Indice de santé du sol :</strong> À calculer</p>

                <p><strong>Indice de risque agricole :</strong> À calculer</p>

                <p><strong>Indice de disponibilité hydrique :</strong> À calculer</p>

                <p><strong>Indice de pression phytosanitaire :</strong> À calculer</p>

                <p><strong>Indice de biodiversité :</strong> À calculer</p>

                <p><strong>Potentiel agricole :</strong> À analyser</p>

                <p><strong>Potentiel agroécologique :</strong> À analyser</p>

                <p><strong>Potentiel agroforestier :</strong> À analyser</p>

                <p><strong>Compatibilité avec les systèmes de production :</strong> À calculer</p>

                <p><strong>Principales contraintes :</strong> À identifier</p>

                <p><strong>Principales opportunités :</strong> À identifier</p>

                <p><strong>Priorités d'intervention :</strong> À déterminer</p>

                <p><strong>Niveau d'urgence :</strong> À calculer</p>

                <p><strong>Recommandation finale :</strong> En attente de l'analyse</p>

            </div>


            <hr>


            <!-- =========================
                 SYSTEME DE PRODUCTION
            ========================== -->

            <h3>⚙️ Choisir un système de production</h3>

            <select
                id="systeme-${remarque}"
                class="select-systeme">

                <option value="">
                    -- Choisir un système --
                </option>

                <option value="intensif">
                    🌱 Agriculture intensive
                </option>

                <option value="agroecologie">
                    🌿 Agroécologie
                </option>

                <option value="agroforesterie">
                    🌳 Agroforesterie
                </option>

                <option value="polyculture">
                    🌾 Polyculture / association
                </option>

                <option value="fleurs">
                    🌸 Agriculture + plantes fleuries
                </option>

            </select>


            <button
                class="btn-analyser"
                onclick="lancerSimulation('${remarque}')">

                🔎 Analyser ce système

            </button>


            <div
                id="resultat-${remarque}"
                class="resultat-simulation">

            </div>


        </div>
    `;
}

// ==========================================
// GUIDE D'UTILISATION DE LA CARTE
// ==========================================



function lancerSimulation(idParcelle) {

    const select = document.getElementById(`systeme-${idParcelle}`);

    const resultat = document.getElementById(`resultat-${idParcelle}`);

    const systeme = select.value;


    if (!systeme) {

        resultat.innerHTML = `
            <p class="message-erreur">
                ⚠️ Veuillez choisir un système de production.
            </p>
        `;

        return;
    }


    let titre = "";
    let compatibilite = "";
    let description = "";


    if (systeme === "intensif") {

        titre = "🌱 Agriculture intensive";

        compatibilite = "72 %";

        description =
            "Système orienté vers la maximisation du rendement et l'optimisation des facteurs de production.";
    }


    else if (systeme === "agroecologie") {

        titre = "🌿 Agroécologie";

        compatibilite = "91 %";

        description =
            "Système privilégiant la diversification, la protection du sol, la biodiversité et la gestion durable des ressources.";
    }


    else if (systeme === "agroforesterie") {

        titre = "🌳 Agroforesterie";

        compatibilite = "87 %";

        description =
            "Système associant arbres et productions agricoles sur une même unité spatiale.";
    }


    else if (systeme === "polyculture") {

        titre = "🌾 Polyculture / association";

        compatibilite = "84 %";

        description =
            "Système basé sur la diversification et l'association de plusieurs cultures.";
    }


    else if (systeme === "fleurs") {

        titre = "🌸 Agriculture + plantes fleuries";

        compatibilite = "76 %";

        description =
            "Système intégrant des plantes fleuries afin de favoriser la biodiversité fonctionnelle.";
    }


    resultat.innerHTML = `

        <div class="resultat-systeme">

            <h4>${titre}</h4>

            <p>${description}</p>

            <p>
                <strong>Compatibilité simulée :</strong>
                ${compatibilite}
            </p>


            <hr>


            <h4>📋 Planification de la campagne</h4>

            <button
                class="btn-planifier"
                onclick="afficherPlanning('${idParcelle}', '${systeme}')">

                📅 Générer le plan de campagne

            </button>


            <div
                id="planning-${idParcelle}"
                class="planning-campagne">

            </div>

        </div>

    `;
}

function genererCalendrier(idParcelle, systeme) {

    const calendrier =
        document.getElementById(`calendrier-${idParcelle}`);


    calendrier.innerHTML = `

        <h3>🗓️ Calendrier prévisionnel</h3>

        <table class="table-calendrier">

            <thead>

                <tr>

                    <th>Période</th>

                    <th>Opération</th>

                    <th>Objectif</th>

                </tr>

            </thead>


            <tbody>

                <tr>
                    <td>Semaine 1</td>
                    <td>Diagnostic</td>
                    <td>Évaluer l'état initial de la parcelle</td>
                </tr>

                <tr>
                    <td>Semaine 1–2</td>
                    <td>Préparation</td>
                    <td>Préparer le terrain</td>
                </tr>

                <tr>
                    <td>Semaine 2</td>
                    <td>Semis / plantation</td>
                    <td>Installer la culture</td>
                </tr>

                <tr>
                    <td>Semaine 3–4</td>
                    <td>Contrôle de la levée</td>
                    <td>Vérifier l'installation des cultures</td>
                </tr>

                <tr>
                    <td>Semaine 4–6</td>
                    <td>Entretien</td>
                    <td>Maîtriser les adventices et suivre la croissance</td>
                </tr>

                <tr>
                    <td>Semaine 6–8</td>
                    <td>Fertilisation</td>
                    <td>Répondre aux besoins nutritionnels</td>
                </tr>

                <tr>
                    <td>Semaine 8–12</td>
                    <td>Surveillance phytosanitaire</td>
                    <td>Détecter les ravageurs et maladies</td>
                </tr>

                <tr>
                    <td>Semaine 12–16</td>
                    <td>Suivi de maturité</td>
                    <td>Déterminer le moment optimal de récolte</td>
                </tr>

                <tr>
                    <td>Semaine 16+</td>
                    <td>Récolte</td>
                    <td>Récolter et évaluer la production</td>
                </tr>

            </tbody>

        </table>


        <div class="fin-campagne">

            <strong>🎯 Objectif final :</strong>

            produire selon le système choisi
            tout en optimisant les ressources disponibles.

        </div>

    `;
}

function simulerArbres() {

    alert(
        "Simulation agroforestière : génération des emplacements d'arbres..."
    );

}

function afficherPlanning(idParcelle, systeme) {

    const planning = document.getElementById(`planning-${idParcelle}`);

    if (!planning) {
        console.error("Zone de planification introuvable :", idParcelle);
        return;
    }

    planning.innerHTML = afficherPlanCampagne(systeme);
}
function genererPlanCampagne(systeme) {

    let plan = {
        preparation: [],
        semences: [],
        implantation: [],
        fertilisation: [],
        irrigation: [],
        association: [],
        protection: [],
        entretien: [],
        suivi: [],
        rotation: [],
        recolte: [],
        postRecolte: []
    };


    // =====================================================
    // 1. AGRICULTURE INTENSIVE
    // =====================================================

    if (systeme === "intensif") {

        plan.preparation = [
            "Analyse préalable du sol",
            "Préparation mécanique de la parcelle",
            "Nivellement si nécessaire",
            "Préparation des lignes de plantation"
        ];

        plan.semences = [
            "Sélection de semences certifiées",
            "Choix d'une variété à potentiel de rendement élevé",
            "Vérification de la qualité germinative",
            "Détermination de la densité de plantation"
        ];

        plan.implantation = [
            "Préparation des poquets ou lignes",
            "Respect des distances de plantation",
            "Semis ou plantation",
            "Contrôle de la levée"
        ];

        plan.fertilisation = [
            "Détermination des besoins selon l'analyse du sol",
            "Application de la fertilisation de fond",
            "Apports complémentaires selon le stade de développement",
            "Suivi de la réponse de la culture"
        ];

        plan.irrigation = [
            "Évaluation des besoins hydriques",
            "Programmation des irrigations",
            "Surveillance de l'humidité du sol",
            "Adaptation des apports aux conditions climatiques"
        ];

        plan.association = [
            "Monoculture privilégiée",
            "Association possible uniquement si compatible avec l'objectif de production"
        ];

        plan.protection = [
            "Surveillance régulière des ravageurs",
            "Surveillance des maladies",
            "Identification précoce des foyers",
            "Intervention phytosanitaire ciblée lorsque nécessaire"
        ];

        plan.entretien = [
            "Désherbage",
            "Entretien des lignes de culture",
            "Surveillance de la croissance",
            "Gestion de l'irrigation",
            "Suivi phytosanitaire"
        ];

        plan.suivi = [
            "Suivi de la vigueur végétative",
            "Observation des anomalies",
            "Suivi de la croissance",
            "Évaluation progressive du potentiel de rendement"
        ];

        plan.rotation = [
            "Définition d'une rotation adaptée",
            "Éviter la répétition excessive d'une même culture",
            "Prendre en compte les besoins nutritifs des cultures"
        ];

        plan.recolte = [
            "Détermination du stade optimal de récolte",
            "Organisation de la main-d'œuvre",
            "Récolte",
            "Mesure du rendement"
        ];

        plan.postRecolte = [
            "Évaluation du rendement obtenu",
            "Analyse des performances de la campagne",
            "Enregistrement des données pour la campagne suivante"
        ];
    }


    // =====================================================
    // 2. AGROÉCOLOGIE
    // =====================================================

    else if (systeme === "agroecologie") {

        plan.preparation = [
            "Diagnostic de l'état initial du sol",
            "Préservation de la structure du sol",
            "Réduction du travail du sol lorsque possible",
            "Mise en place éventuelle d'un paillage"
        ];

        plan.semences = [
            "Sélection d'espèces adaptées au contexte local",
            "Choix de variétés adaptées aux conditions pédoclimatiques",
            "Diversification des espèces",
            "Privilégier des semences de qualité"
        ];

        plan.implantation = [
            "Organisation spatiale des cultures",
            "Définition des associations culturales",
            "Implantation des cultures principales",
            "Introduction éventuelle de légumineuses"
        ];

        plan.fertilisation = [
            "Évaluation de la fertilité du sol",
            "Valorisation de la matière organique",
            "Utilisation de compost ou fumure organique",
            "Apports complémentaires selon les besoins",
            "Suivi de l'évolution de la fertilité"
        ];

        plan.irrigation = [
            "Évaluation des besoins hydriques",
            "Préservation de l'humidité du sol",
            "Paillage pour limiter les pertes en eau",
            "Irrigation raisonnée lorsque nécessaire"
        ];

        plan.association = [
            "Association de cultures complémentaires",
            "Introduction de légumineuses",
            "Diversification des espèces",
            "Association de cultures à cycles différents"
        ];

        plan.protection = [
            "Surveillance régulière des ravageurs",
            "Favoriser les auxiliaires de culture",
            "Maintenir une biodiversité fonctionnelle",
            "Prévention agronomique",
            "Utilisation de méthodes biologiques lorsque possible",
            "Traitement uniquement lorsque nécessaire"
        ];

        plan.entretien = [
            "Gestion des adventices",
            "Paillage",
            "Gestion de l'humidité",
            "Entretien des cultures associées",
            "Surveillance de la biodiversité"
        ];

        plan.suivi = [
            "Suivi de la vigueur des cultures",
            "Observation de la biodiversité",
            "Suivi de la couverture du sol",
            "Observation de l'état sanitaire",
            "Évaluation de la santé du sol"
        ];

        plan.rotation = [
            "Rotation entre différentes familles botaniques",
            "Introduction régulière de légumineuses",
            "Alternance entre cultures exigeantes et améliorantes",
            "Éviter la répétition d'une même culture"
        ];

        plan.recolte = [
            "Détermination du stade optimal de récolte",
            "Récolte progressive selon la maturité",
            "Préservation de la qualité des produits",
            "Évaluation du rendement"
        ];

        plan.postRecolte = [
            "Évaluation de l'état du sol après récolte",
            "Gestion des résidus de culture",
            "Préparation de la prochaine rotation",
            "Enregistrement des résultats de la campagne"
        ];
    }


    // =====================================================
    // 3. AGROFORESTERIE
    // =====================================================

    else if (systeme === "agroforesterie") {

        plan.preparation = [
            "Analyse du sol",
            "Analyse de la topographie",
            "Identification des zones favorables à l'installation des arbres",
            "Définition des couloirs de plantation"
        ];

        plan.semences = [
            "Choix des cultures agricoles",
            "Sélection des espèces ligneuses adaptées",
            "Choix d'espèces compatibles avec les cultures",
            "Sélection de plants de qualité"
        ];

        plan.implantation = [
            "Définition des emplacements des arbres",
            "Respect des distances entre les arbres",
            "Organisation des bandes ou lignes arborées",
            "Installation des cultures agricoles"
        ];

        plan.fertilisation = [
            "Analyse des besoins nutritifs",
            "Valorisation de la matière organique",
            "Fertilisation adaptée aux cultures",
            "Prise en compte de la concurrence arbre-culture"
        ];

        plan.irrigation = [
            "Évaluation des besoins hydriques",
            "Gestion différenciée selon les zones",
            "Surveillance de l'humidité du sol"
        ];

        plan.association = [
            "Association arbres-cultures",
            "Choix d'espèces complémentaires",
            "Organisation spatiale des différentes composantes"
        ];

        plan.protection = [
            "Surveillance des cultures",
            "Surveillance des jeunes plants",
            "Protection contre les ravageurs",
            "Gestion intégrée des problèmes phytosanitaires"
        ];

        plan.entretien = [
            "Désherbage",
            "Entretien des arbres",
            "Taille lorsque nécessaire",
            "Remplacement des plants morts",
            "Gestion de la concurrence entre arbres et cultures"
        ];

        plan.suivi = [
            "Suivi de la croissance des cultures",
            "Suivi de la croissance des arbres",
            "Évaluation de la couverture végétale",
            "Surveillance de l'état du sol"
        ];

        plan.rotation = [
            "Rotation des cultures agricoles",
            "Maintien des composantes pérennes",
            "Adaptation des cultures aux zones arborées"
        ];

        plan.recolte = [
            "Récolte des cultures agricoles",
            "Organisation des différentes périodes de récolte",
            "Suivi des productions issues des arbres",
            "Évaluation globale du système"
        ];

        plan.postRecolte = [
            "Évaluation des rendements",
            "Évaluation de la croissance des arbres",
            "Analyse de l'évolution du sol",
            "Préparation de la campagne suivante"
        ];
    }


    // =====================================================
    // 4. POLYCULTURE / ASSOCIATION
    // =====================================================

    else if (systeme === "polyculture") {

        plan.preparation = [
            "Analyse du sol",
            "Délimitation des zones de production",
            "Organisation spatiale des cultures"
        ];

        plan.semences = [
            "Sélection de plusieurs cultures complémentaires",
            "Choix de variétés adaptées",
            "Détermination des densités"
        ];

        plan.implantation = [
            "Définition des associations",
            "Organisation des lignes ou bandes",
            "Semis ou plantation selon les cycles"
        ];

        plan.fertilisation = [
            "Évaluation des besoins de chaque culture",
            "Fertilisation adaptée",
            "Valorisation de la matière organique"
        ];

        plan.irrigation = [
            "Évaluation des besoins hydriques de chaque culture",
            "Gestion différenciée de l'irrigation"
        ];

        plan.association = [
            "Association de cultures complémentaires",
            "Association de cultures à cycles différents",
            "Association de cultures à systèmes racinaires différents"
        ];

        plan.protection = [
            "Surveillance des différentes cultures",
            "Détection des ravageurs",
            "Détection des maladies",
            "Intervention ciblée"
        ];

        plan.entretien = [
            "Désherbage",
            "Entretien des différentes cultures",
            "Suivi de la croissance",
            "Gestion de l'irrigation"
        ];

        plan.suivi = [
            "Suivi de chaque culture",
            "Évaluation de la compétition entre espèces",
            "Suivi de la vigueur végétative"
        ];

        plan.rotation = [
            "Rotation des cultures",
            "Alternance entre cultures exigeantes et améliorantes",
            "Diversification des familles botaniques"
        ];

        plan.recolte = [
            "Planification des différentes périodes de récolte",
            "Organisation de la main-d'œuvre",
            "Évaluation des rendements par culture"
        ];

        plan.postRecolte = [
            "Évaluation de chaque production",
            "Analyse des performances",
            "Préparation de la campagne suivante"
        ];
    }


    // =====================================================
    // 5. AGRICULTURE + PLANTES FLEURIES
    // =====================================================

    else if (systeme === "fleurs") {

        plan.preparation = [
            "Analyse du sol",
            "Identification des zones adaptées aux plantes fleuries",
            "Organisation spatiale de la parcelle"
        ];

        plan.semences = [
            "Choix des cultures principales",
            "Sélection de plantes fleuries adaptées",
            "Choix d'espèces favorables aux pollinisateurs"
        ];

        plan.implantation = [
            "Implantation des cultures",
            "Création de bandes fleuries",
            "Organisation des zones fleuries autour ou dans la parcelle"
        ];

        plan.fertilisation = [
            "Évaluation des besoins nutritifs",
            "Fertilisation adaptée aux cultures",
            "Gestion raisonnée des apports"
        ];

        plan.irrigation = [
            "Évaluation des besoins hydriques",
            "Irrigation adaptée aux cultures",
            "Surveillance de l'humidité"
        ];

        plan.association = [
            "Association cultures-plantes fleuries",
            "Création de bandes fleuries",
            "Favoriser les pollinisateurs",
            "Favoriser les auxiliaires"
        ];

        plan.protection = [
            "Surveillance des ravageurs",
            "Observation des auxiliaires",
            "Protection intégrée des cultures",
            "Intervention ciblée lorsque nécessaire"
        ];

        plan.entretien = [
            "Gestion des adventices",
            "Entretien des bandes fleuries",
            "Suivi de la floraison",
            "Entretien des cultures principales"
        ];

        plan.suivi = [
            "Suivi de la floraison",
            "Observation des pollinisateurs",
            "Observation des auxiliaires",
            "Suivi de la santé des cultures"
        ];

        plan.rotation = [
            "Rotation des cultures principales",
            "Maintien des bandes fleuries",
            "Diversification des espèces"
        ];

        plan.recolte = [
            "Récolte des cultures principales",
            "Respect du stade optimal",
            "Évaluation du rendement"
        ];

        plan.postRecolte = [
            "Évaluation de la campagne",
            "Évaluation de la biodiversité fonctionnelle",
            "Préparation de la campagne suivante"
        ];
    }

    return plan;
}
function afficherPlanCampagne(systeme) {

    const plan = genererPlanCampagne(systeme);

    return `
        <div class="plan-campagne">

            <h3>📅 Plan de campagne agricole</h3>

            <p>
                <strong>Système de production :</strong>
                ${systeme}
            </p>

            <div class="etape-campagne">
                <h4>1️⃣ Préparation de la parcelle</h4>
                ${creerListe(plan.preparation)}
            </div>

            <div class="etape-campagne">
                <h4>2️⃣ Semences et choix variétal</h4>
                ${creerListe(plan.semences)}
            </div>

            <div class="etape-campagne">
                <h4>3️⃣ Implantation</h4>
                ${creerListe(plan.implantation)}
            </div>

            <div class="etape-campagne">
                <h4>4️⃣ Fertilisation</h4>
                ${creerListe(plan.fertilisation)}
            </div>

            <div class="etape-campagne">
                <h4>5️⃣ Gestion de l'eau</h4>
                ${creerListe(plan.irrigation)}
            </div>

            <div class="etape-campagne">
                <h4>6️⃣ Association des cultures</h4>
                ${creerListe(plan.association)}
            </div>

            <div class="etape-campagne">
                <h4>7️⃣ Protection phytosanitaire</h4>
                ${creerListe(plan.protection)}
            </div>

            <div class="etape-campagne">
                <h4>8️⃣ Entretien</h4>
                ${creerListe(plan.entretien)}
            </div>

            <div class="etape-campagne">
                <h4>9️⃣ Suivi agronomique</h4>
                ${creerListe(plan.suivi)}
            </div>

            <div class="etape-campagne">
                <h4>🔄 Rotation culturale</h4>
                ${creerListe(plan.rotation)}
            </div>

            <div class="etape-campagne">
                <h4>🌾 Récolte</h4>
                ${creerListe(plan.recolte)}
            </div>

            <div class="etape-campagne">
                <h4>📊 Évaluation post-récolte</h4>
                ${creerListe(plan.postRecolte)}
            </div>

            <div class="fin-campagne">

                <strong>🎯 Objectif final :</strong>

                planifier la campagne selon le système
                de production sélectionné et les caractéristiques
                de la parcelle.

            </div>

        </div>
    `;
}
function creerListe(elements) {

    return `
        <ul>
            ${elements.map(element => `<li>${element}</li>`).join("")}
        </ul>
    `;
}

// 4
const panneaux =
{"type":"FeatureCollection","name":"Les panneaux ","features":[{"type":"Feature","properties":{"REMARKS":"PAN-001"},"geometry":{"type":"Point","coordinates":[2.709988333,9.312083333,370.2]}}]}
L.geoJSON(panneaux).addTo(map);
L.geoJSON(panneaux, {

    pointToLayer: function(feature, latlng) { 
        return L.circleMarker(latlng, {
            radius: 9,            // Taille du cercle
            color: "black",     // Contour rouge foncé
            weight: 2,            // Épaisseur du contour
            fillColor: "black", // Rouge clair
            fillOpacity: 1      // Remplissage presque opaque
        });
    }
}).addTo(map);

// 6
const erosion =
{"type":"FeatureCollection","name":"Erosion ","features":[{"type":"Feature","properties":{"REMARKS":"E-001"},"geometry":{"type":"Point","coordinates":[2.705855,9.316801667,363.6]}},{"type":"Feature","properties":{"REMARKS":"E-002"},"geometry":{"type":"Point","coordinates":[2.705358333,9.316616667,364.3]}}]}
L.geoJSON(erosion).addTo(map);
L.geoJSON(erosion, {
    pointToLayer: function(feature, latlng) {
        return L.circleMarker(latlng, {
            radius: 9,            // Taille du cercle
            color: "orange",     // Contour rouge foncé
            weight: 2,            // Épaisseur du contour
            fillColor: "orange", // Rouge clair
            fillOpacity: 1      // Remplissage presque opaque
        });
    }
}).addTo(map);

const autres_infrastructure =
{"type":"FeatureCollection","name":"Autres infrastructure ","features":[{"type":"Feature","properties":{"REMARKS":"AUT-001"},"geometry":{"type":"Point","coordinates":[2.70734,9.30998,375.3]}},{"type":"Feature","properties":{"REMARKS":"AUT-002"},"geometry":{"type":"Point","coordinates":[2.710143333,9.312241667,371.1]}},{"type":"Feature","properties":{"REMARKS":"AUT-003"},"geometry":{"type":"Point","coordinates":[2.710073333,9.312376667,365.4]}},{"type":"Feature","properties":{"REMARKS":"AUT-004"},"geometry":{"type":"Point","coordinates":[2.709938333,9.312403333,369.4]}},{"type":"Feature","properties":{"REMARKS":"AUT-004"},"geometry":{"type":"Point","coordinates":[2.705546667,9.3076,382.9]}},{"type":"Feature","properties":{"REMARKS":"AUT-005"},"geometry":{"type":"Point","coordinates":[2.705858333,9.307886667,378.3]}},{"type":"Feature","properties":{"REMARKS":"AUT-006"},"geometry":{"type":"Point","coordinates":[2.706201667,9.30817,375.3]}},{"type":"Feature","properties":{"REMARKS":"AUT-007"},"geometry":{"type":"Point","coordinates":[2.706545,9.308478333,376.4]}},{"type":"Feature","properties":{"REMARKS":"AUT-008"},"geometry":{"type":"Point","coordinates":[2.70769,9.309705,373.6]}},{"type":"Feature","properties":{"REMARKS":"AUT-009"},"geometry":{"type":"Point","coordinates":[2.707891667,9.309663333,372.4]}},{"type":"Feature","properties":{"REMARKS":"AUT-010"},"geometry":{"type":"Point","coordinates":[2.708236667,9.309956667,373.8]}},{"type":"Feature","properties":{"REMARKS":"AUT-011"},"geometry":{"type":"Point","coordinates":[2.708565,9.31026,372.2]}},{"type":"Feature","properties":{"REMARKS":"AUT-012"},"geometry":{"type":"Point","coordinates":[2.708953333,9.31058,369.9]}},{"type":"Feature","properties":{"REMARKS":"AUT-013"},"geometry":{"type":"Point","coordinates":[2.710441667,9.31168,370.2]}},{"type":"Feature","properties":{"REMARKS":"AUT-014"},"geometry":{"type":"Point","coordinates":[2.710310769,9.311713333,367.138]}},{"type":"Feature","properties":{"REMARKS":"AUT-015"},"geometry":{"type":"Point","coordinates":[2.706716667,9.307311667,379.5]}},{"type":"Feature","properties":{"REMARKS":"AUT-016"},"geometry":{"type":"Point","coordinates":[2.707066667,9.307546667,377.2]}},{"type":"Feature","properties":{"REMARKS":"AUT-017"},"geometry":{"type":"Point","coordinates":[2.708076667,9.308418333,372.7]}},{"type":"Feature","properties":{"REMARKS":"AUT-018"},"geometry":{"type":"Point","coordinates":[2.708436667,9.308703333,370.2]}},{"type":"Feature","properties":{"REMARKS":"AUT-019"},"geometry":{"type":"Point","coordinates":[2.708786667,9.308993333,369.5]}},{"type":"Feature","properties":{"REMARKS":"AUT-020"},"geometry":{"type":"Point","coordinates":[2.709123333,9.309278333,365.4]}},{"type":"Feature","properties":{"REMARKS":"AUT-021"},"geometry":{"type":"Point","coordinates":[2.709465,9.309576667,366.9]}},{"type":"Feature","properties":{"REMARKS":"AUT-022"},"geometry":{"type":"Point","coordinates":[2.710153333,9.310156667,371.5]}},{"type":"Feature","properties":{"REMARKS":"AUT-023"},"geometry":{"type":"Point","coordinates":[2.71083,9.310736667,365.7]}},{"type":"Feature","properties":{"REMARKS":"AUT-024"},"geometry":{"type":"Point","coordinates":[2.711173333,9.311065,369.2]}},{"type":"Feature","properties":{"REMARKS":"AUT-025"},"geometry":{"type":"Point","coordinates":[2.7115,9.31136,366.8]}},{"type":"Feature","properties":{"REMARKS":"AUT-026"},"geometry":{"type":"Point","coordinates":[2.711845,9.31166,364.7]}},{"type":"Feature","properties":{"REMARKS":"AUT-100,"},"geometry":{"type":"Point","coordinates":[2.704668333,9.31028,378.6]}}]}
L.geoJSON(autres_infrastructure).addTo(map);
L.geoJSON(autres_infrastructure, {
    pointToLayer: function(feature, latlng) {
        return L.circleMarker(latlng, {
            radius: 15,            // Taille du cercle
            color: "red",     // Contour rouge foncé
            weight: 2,            // Épaisseur du contour
            fillColor: "red", // Rouge clair
            fillOpacity: 0.7     // Remplissage presque opaque
        });
    }
}).addTo(map);
// 11
// ============================================
// CENTRAGE AUTOMATIQUE SUR LA ZONE D'ÉTUDE
// ============================================

window.addEventListener('load', function () {

    setTimeout(function () {

        map.invalidateSize();

        map.setView(
            [9.311731, 2.705436],
            16,
            {
                animate: true,
                duration: 1.5
            }
        );

    }, 500);

});// ==========================================
// GUIDE D'UTILISATION DE LA CARTE
// ==========================================

const boutonGuide = document.getElementById("btn-guide");
const guideUtilisation = document.getElementById("guide-utilisation");
const fermerGuide = document.getElementById("fermer-guide");


// Ouvrir / fermer le guide avec le bouton principal
boutonGuide.addEventListener("click", function () {

    guideUtilisation.classList.toggle("guide-cache");

});


// Fermer le guide avec la croix
fermerGuide.addEventListener("click", function () {

    guideUtilisation.classList.add("guide-cache");

});

window.addEventListener("resize", function () {

    setTimeout(function () {

        map.invalidateSize();

    }, 200);

});
// GPS查询：http://www.gpsspg.com/maps.htm
// value:地图上标记点大小
// geoCoord:经纬度
// description:描述文字

var data = [
  {name: 'Vancouver', value: 80, geoCoord:[49.248948,-122.984835]},
  {name: 'Victoria', value: 30, geoCoord:[48.459142,-123.377190]},
  {name: 'Whistler', value: 30, geoCoord:[50.1149639,-122.9508361]},
  {name: 'Seattle', value: 30, geoCoord:[47.4502499,-122.3110052]},
  {name: 'San Francisco', value: 30, geoCoord:[37.775669, -122.425756]},
  {name: 'San Jose', value: 80, geoCoord:[37.3706254,-121.9693781]},
  {name: 'Edmonton', value: 30, geoCoord:[53.5555501,-113.7741344]},
  {name: 'Calgary', value: 30, geoCoord:[51.012782,-114.3543435]},
  {name: 'Banff', value: 30, geoCoord:[51.1769288,-115.603409]},
  {name: 'Yellowknife', value: 30, geoCoord:[62.4747917,-114.5490774]},
  {name: 'Yellowstone', value: 30, geoCoord:[44.585403,-111.0745316]},
  {name: 'Grand Teton', value: 30, geoCoord:[43.8078298,-110.9687097]},
  {name: 'Jackson', value: 30, geoCoord:[43.9474617,-111.847299]},
  {name: 'Battle Mountain', value: 30, geoCoord:[40.6415287,-116.9583886]},
  {name: 'Monument Valley', value: 30, geoCoord:[37.0394888,-110.3043999]},
  {name: 'Arches National Park', value: 30, geoCoord:[38.7320365,-109.8658403]},
  {name: 'Canyonlands National Park', value: 30, geoCoord:[38.0338918,-109.8792066]},
  {name: 'Monticello', value: 30, geoCoord:[37.8718721,-109.3527191]},
  {name: 'Park City', value: 30, geoCoord:[40.648271,-111.5700022]},
  {name: 'Grand Canyon National Park', value: 30, geoCoord:[36.0922145,-113.4036333]},
  {name: 'Antelope Canyon', value: 30, geoCoord:[37.1813592,-111.5061984]},
  {name: 'Zion National Park', value: 30, geoCoord:[37.3223079,-113.3234347]},
  {name: 'Las Vegas', value: 30, geoCoord:[36.1252285,-115.4552005]},
  {name: 'Toronto', value: 30, geoCoord:[43.6565353,-79.601044]},
  {name: 'Niagara Falls', value: 30, geoCoord:[43.0538471,-79.2281211]},
  {name: 'Ottawa', value: 30, geoCoord:[45.248786,-76.3607231]},
  {name: 'Montreal', value: 30, geoCoord:[45.5576996,-74.01049]},
  {name: 'Quebec City', value: 30, geoCoord:[46.856283,-71.4817783]},
  {name: 'Washington D.C', value: 30, geoCoord:[38.8935128,-77.1546633]},
  {name: 'Baltimore', value: 30, geoCoord:[39.2846225,-76.7605731]},
  {name: 'Philadelphia', value: 30, geoCoord:[40.0024137,-75.25812]},
  {name: 'New York City', value: 30, geoCoord:[40.6971494,-74.2598773]},
  {name: 'New Haven', value: 30, geoCoord:[41.3163244,-72.9245318]},
  {name: 'Boston', value: 80, geoCoord:[42.3770029,-71.1188488]},
  {name: 'Campton', value: 30, geoCoord:[43.2639819,-72.3797895]},
  {name: 'Hanover', value: 30, geoCoord:[43.7044406,-72.2908822]},
  {name: 'Killington', value: 30, geoCoord:[43.6100105,-72.8270975]},
  {name: 'Ninghai', value: 80, geoCoord:[29.3059037,121.2093836]},
  {name: 'Ningbo', value: 30, geoCoord:[29.8694844,121.2917571]},
  {name: 'Hangzhou', value: 80, geoCoord:[30.2610923,119.8916871]},
  {name: 'Shanghai', value: 30, geoCoord:[31.2231336,120.9162442]},
  {name: 'Yiwu', value: 30, geoCoord:[28.1607576,118.5442575]},
  {name: 'Wenzhou', value: 30, geoCoord:[27.9910687,120.5436151]},
  {name: 'Guangzhou', value: 30, geoCoord:[23.1246074,112.6673171]},
  {name: 'Dongguan', value: 30, geoCoord:[22.9759527,113.5141198]},
  {name: 'Shenzhen', value: 30, geoCoord:[22.5549176,113.7736717]},
  {name: 'Beijing', value: 30, geoCoord:[39.9385466,116.1172621]},
  {name: 'Qingdao', value: 30, geoCoord:[36.1357443,120.0846381]},
  {name: 'Dalian', value: 30, geoCoord:[38.929772,121.4706687]},
  {name: 'Harbin', value: 30, geoCoord:[45.7571444,126.5119354]},
  {name: 'Changchun', value: 30, geoCoord:[43.8870112,124.7328186]},
  {name: 'Suzhou', value: 30, geoCoord:[31.3280438,120.3640999]},
  {name: 'Huangshan', value: 30, geoCoord:[29.7106276,118.2453797]},
  {name: 'Wuhan', value: 30, geoCoord:[30.567816,114.0201815]},
  {name: 'Chongqing', value: 30, geoCoord:[29.3690665,105.8289709]},
  {name: 'Chengdu', value: 30, geoCoord:[30.658228,103.7953434]},
  {name: 'Garze', value: 30, geoCoord:[30.0326052,101.8425622]},
  {name: 'Nyingchi', value: 30, geoCoord:[29.092086,93.2150552]},
  {name: 'Lhasa', value: 30, geoCoord:[29.648742,91.005236]},
  {name: 'Xigaze', value: 30, geoCoord:[29.4891731,84.0016179]},
  {name: 'Mt. Everest', value: 30, geoCoord:[28.032789,86.8463642]},
  {name: 'Shannan', value: 30, geoCoord:[29.2288914,90.571449]},
  {name: 'Baotou', value: 30, geoCoord:[40.6631563,109.7163278]},
  {name: 'Hohhot', value: 30, geoCoord:[40.8169192,111.507786]},
  {name: 'Ordos', value: 30, geoCoord:[39.7926504,110.2289259]},
  {name: 'Xinzhou', value: 30, geoCoord:[39.1772678,111.0888229]},
  {name: 'Osaka', value: 30, geoCoord:[34.678395,135.4601303]},
  {name: 'Kobe', value: 30, geoCoord:[34.69428,135.1206591]},
  {name: 'Nara', value: 30, geoCoord:[34.6868987,135.7913403]},
  {name: 'Kyoto', value: 30, geoCoord:[35.0060799,135.6909091]},
  {name: 'Shizuoka', value: 30, geoCoord:[35.2707143,137.7988763]},
  {name: 'Mt. Fuji', value: 30, geoCoord:[35.2575267,138.5556233]},
  {name: 'Fuji', value: 30, geoCoord:[35.2345351,138.544637]},
  {name: 'Tokyo', value: 30, geoCoord:[35.6691074,139.6012929]},
  {name: 'Denver', value: 30, geoCoord:[39.7230173,-104.9211162]},
  {name: 'Keystone', value: 30, geoCoord:[39.5945376,-106.0082193]},
  {name: 'Vail', value: 30, geoCoord:[39.6335721,-106.4303005]},
  {name: 'Denver', value: 30, geoCoord:[39.7230173,-104.9211162]},
  {name: 'Crater Lake', value: 30, geoCoord:[42.9395274,-122.1690505]},
  {name: 'Lassen', value: 30, geoCoord:[40.4880912,-121.5136848]},
  {name: 'Yosemite', value: 30, geoCoord:[38.1340257,-121.2071737]},
  {name: 'Sequoia & Kings Canyon', value: 30, geoCoord:[36.2243655,-118.9706718]},
  {name: 'Los Angeles', value: 30, geoCoord:[34.0207305,-118.6919319]},
  {name: 'Death Valley', value: 30, geoCoord:[36.0042653,-117.7557335]},
  {name: 'Heavenly', value: 30, geoCoord:[38.9548829,-119.9445025]},
  {name: 'Northstar', value: 30, geoCoord:[39.3686596,-120.0926999]},
  {name: 'Hanover', value: 30, geoCoord:[43.7148757,-72.2608704]},
  {name: 'Monterey', value: 30, geoCoord:[36.6110194,-121.9375397]},
  {name: 'Bend', value: 30, geoCoord:[44.0529423,-121.3141206]},
  {name: 'Eugene', value: 30, geoCoord:[44.0608266,-123.2626372]},
  {name: 'Thor\'s Well', value: 30, geoCoord:[44.280321,-124.1219795]},
  {name: 'Portland', value: 30, geoCoord:[45.5428679,-122.7944135]},
  {name: 'Olympia', value: 30, geoCoord:[47.0394291,-122.9639091]},
  {name: 'Mt. Rainier', value: 30, geoCoord:[46.8776988,-121.9151305]},
  {name: 'Olympic National Park', value: 30, geoCoord:[47.8020865,-123.9919725]},
  {name: 'Burney Falls', value: 30, geoCoord:[40.2073282,-123.4431574]},
  {name: 'Medford', value: 30, geoCoord:[42.3436931,-122.9141657]},
  {name: 'Sandy', value: 30, geoCoord:[40.5725138,-111.9192509]},
  {name: 'Alta', value: 30, geoCoord:[40.5791012,-111.6411057]},
  {name: 'Beaver Creek', value: 30, geoCoord:[39.4551515,-108.454904]},
  {name: 'Rocky Monutain National Park', value: 30, geoCoord:[39.7363538,-106.2666799]},
  {name: 'Aspen', value: 30, geoCoord:[39.2037178,-106.8963939]},
  {name: 'Snowmass', value: 30, geoCoord:[39.2003808,-106.9320996]},
  {name: 'Grand Sand Dunes', value: 30, geoCoord:[37.4478072,-105.9770429]},
  {name: 'Taos', value: 30, geoCoord:[36.3892718,-105.6161783]},
  {name: 'Driggs', value: 30, geoCoord:[43.7303171,-111.1389889]},
  {name: 'Grand Targhee', value: 30, geoCoord:[43.7468334,-111.0201163]},
  {name: 'Boise', value: 30, geoCoord:[43.6009692,-116.3739848]},
  {name: 'Sun Valley', value: 30, geoCoord:[43.6725532,-114.4695591]},
  {name: 'Big Sky', value: 30, geoCoord:[45.3087968,-111.4008747]},
  {name: 'Phoenix', value: 30, geoCoord:[33.6052953,-112.6855567]},
  {name: 'Colorado Springs', value: 30, geoCoord:[38.8758843,-105.0385582]},
  {name: 'Alamosa', value: 30, geoCoord:[37.467509,-105.9167972]},
  {name: 'Salida', value: 30, geoCoord:[38.5328861,-106.0209687]},
  {name: 'Great Salt Lake State Park', value: 30, geoCoord:[40.7252807,-112.2291503]},
  {name: 'San Simeon', value: 30, geoCoord:[35.6470857,-121.1965157]},
  {name: 'Stockton', value: 30, geoCoord:[37.973211,-121.4419653]},
  {name: 'Sacramento', value: 30, geoCoord:[37.7587162,-121.756082]},
];

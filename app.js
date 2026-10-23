const links={stay:'https://maps.app.goo.gl/ERi5VLpxHvLZs2EH8',dinner:'https://maps.app.goo.gl/8Qjt6e6Jh6g5aPnu7?g_st=il',w1:'https://maps.app.goo.gl/wCB4E1TF9NQG2RZt7',w2:'https://maps.app.goo.gl/oEy93GG81ZfMRvV1A'};
const map=q=>'https://www.google.com/maps/search/?api=1&query='+encodeURIComponent(q);
const food=[
{city:'台南',kind:'沙茶爐',title:'大口味沙茶爐',text:'第一晚就決定是這鍋。海安路的沙茶香，替四天食旅開場。',status:'10/23 晚餐・你指定',url:links.dinner,phone:'062268053'},
{city:'萬丹',kind:'牛肉爐',title:'街頭牛肉爐・老店',text:'10/24 17:00 已訂位，4 大 2 小。萬丹路一段 488 號；店面正對面有專屬免費停車場。',status:'10/24 晚餐已訂位',url:links.w1,phone:'087776296'},
{city:'萬丹',kind:'牛肉爐',title:'街頭牛肉爐・西環店',text:'與老店擇一即可，依當日候位、停車與營業狀況決定。',status:'其他備選・本次不前往',url:links.w2},
{city:'潮州',kind:'燒冷冰',title:'圓環燒冷冰',text:'先暖後涼的甜點小休。正老牌潮州冷熱冰或阿倫冰店，選一間順路的。',status:'你指定的潮州甜點',url:map('潮州圓環燒冷冰')},
{city:'東港',kind:'海鮮',title:'華僑市場',text:'10/24 11:30 抵達，小小吃點海鮮與旗魚黑輪，保留胃口給晚餐。',status:'10/24 11:30 東港午餐',url:map('東港漁港漁產品直銷中心')},
{city:'台南',kind:'牛肉湯',title:'文章牛肉湯・安平',text:'留給台南慢走日的一碗熱湯。早餐先吃少量，若飯店已吃飽就移到午餐。',status:'10/25 建議・依胃口調整',url:map('文章牛肉湯安平總店')}
];
const normal=[
{title:'先安頓，再用一鍋沙茶開場。',desc:'14:00 從新竹出發，預計 17:00 抵達台南。先到飯店安頓，再去吃你指定的晚餐。',route:'14:00 新竹出發 → 17:00 台南 → 安平留飯店 → 大口味沙茶爐 → 飯店',stops:[['14:00','從新竹出發','預計 17:00 抵達台南，實際依路況與中途休息調整。','https://1968.freeway.gov.tw/'],['17:00','預計抵達台南，先到飯店','入住安平留飯店，放好行李、稍作休息後再出發吃晚餐。',links.stay,'住宿'],['18:00','大口味沙茶爐','今晚固定主角。建議時段，非訂位時間；海安路三段 26 號，出發前確認營業。',links.dinner,'你指定'],['晚間','吃飽回安平','把今晚留得簡單一點，明天才有胃口繼續往南。',links.stay]]},
{title:'東港吃鮮，潮州賞火車，吃冰後赴萬丹。',desc:'10/24（六）4 大 2 小自駕屏東：11:30 東港少量海鮮、下午潮州鐵道園區親子遊玩與冷熱冰。大鮪魚航海樂園改列備選，不排進主路線；17:00 萬丹牛肉爐已訂位。',route:'安平留飯店 → 東港華僑市場 → 潮州鐵道園區 → 潮州冷熱冰 → 街頭牛肉爐老店 → 安平留飯店',drive:'10:00 台南出發，11:30 東港午餐；13:15–15:10 以潮州鐵道園區為主。16:00 前後從潮州啟程至萬丹，17:00 已訂位，請依即時路況提早調整。',optional:{title:'大鮪魚航海樂園｜東港備選',time:'僅有餘裕才加停',text:'東港午餐後若小朋友還想玩，可短暫停留約 20–30 分鐘；這會壓縮潮州鐵道園區的時間。優先保留 17:00 萬丹晚餐，不列入主路線導航。',url:map('東港大鮪魚航海樂園')},stops:[['10:00','台南安平留飯店出發','從台南出發，預計 11:30 抵達東港；依當日交通調整。',links.stay],['11:30–12:30','東港華僑市場・海鮮小吃','少量海鮮、旗魚黑輪與熟食；不要吃太飽，晚餐還有牛肉爐。',map('東港華僑市場'),'午餐'],['12:30–13:15','從東港前往潮州鐵道園區','預留路程、停車與帶小朋友入園的時間；園區有停車場，實際車程依導航。',map('潮州鐵道園區')],['13:15–15:10','潮州鐵道園區・親子主景點','屏東縣潮州鎮光復路 461 號。看火車、鐵道文物與園區遊具，預留約 1 小時 55 分鐘；園區設有停車場，門票及設施依當日公告。',map('潮州鐵道園區'),'主景點',[{label:'網誌介紹｜小兔小安',url:'https://bunnyann.tw/chaozhou-railway2025/'}]],['15:10–15:25','前往潮州圓環','從鐵道園區前往冷熱冰，預留停車與移動時間。',map('潮州圓環')],['15:25–15:50','潮州冷熱冰・下午茶','正老牌或阿倫擇一，吃完冰準備往萬丹，避免耽誤晚餐訂位。',map('正老牌潮州冷熱冰'),'下午茶'],['15:50–16:00','集合出發・保留緩衝','確認每個人都上車，並留意即時導航到萬丹的預估車程。',map('潮州圓環')],['16:00–16:45','前往萬丹・停車','預留塞車與停車時間；街頭牛肉爐老店正對面有專屬免費停車場，請依現場指示停放。',links.w1],['17:00','街頭牛肉爐－老店・已訂位','訂位：張小姐，4 大 2 小；地址：屏東縣萬丹鄉萬全村萬丹路一段 488 號。店面正對面有專屬免費停車場。私人聯絡電話不公開於網頁。',links.w1,'17:00 已訂位'],['18:30 後','返回台南安平','依實際用餐結束時間及路況返程。',links.stay]],nav:'https://www.google.com/maps/dir/?api=1&origin='+encodeURIComponent('安平留飯店 台南')+'&destination='+encodeURIComponent('安平留飯店 台南')+'&waypoints='+encodeURIComponent('東港華僑市場|潮州鐵道園區 光復路461號|正老牌潮州冷熱冰|屏東縣萬丹鄉萬全村萬丹路一段488號')+'&travelmode=driving'},
{title:'回到台南，把步調放慢。',desc:'昨天吃得豐盛，今天晚起也沒關係。安平和市區慢慢選，不追滿滿的打卡點。',route:'飯店 → 安平牛肉湯 → 市區室內小逛 → 安平休息',stops:[['09:00','飯店早餐或文章牛肉湯','二選一或各吃少量。牛肉湯想留到午餐也可以，不用為了一餐勉強早起。',map('文章牛肉湯安平總店')],['11:00','安平街區，短短散步','小雨縮短步程；風大就直接取消戶外段，找一間室內店坐坐。',map('安平老街')],['14:00','林百貨，室內慢慢逛','建議作為市區小逛點，是否營業依當日公告；不把商場當作強颱避難行程。',map('林百貨台南')],['17:30','安平附近自由晚餐','今天不再指定大餐；附近找魚湯或清淡小吃，依當天胃口決定。',map('安平留飯店附近魚湯')],['晚間','回飯店，留一晚舒服的休息','若屏東日與今天對調，明天上午保留更寬鬆的退房時間。',links.stay]]},
{title:'最後一口台南，吃飽回家。',desc:'早餐、打包、退房，把最後一天留得從容。回程時間未定，午餐和伴手禮都能彈性刪減。',route:'飯店早餐 → 退房 → 順路午餐／伴手禮 → 回程',stops:[['早上','慢慢吃早餐，整理行李','退房時間請看訂房紀錄，或向飯店確認；不預設延遲退房。',links.stay],['退房後','順路午餐，不繞遠路','仍想喝牛肉湯就選沿途店家；若已吃飽，直接啟程也很好。',map('安平牛肉湯')],['回程前','簡單帶一點台南味','伴手禮以順路、能保存為主。生鮮海產若無妥善冷藏，就不放進長途車程。',map('安平伴手禮')],['下午','照路況回家','導航時間加上休息與風雨緩衝，不預設抵家時刻。','https://1968.freeway.gov.tw/']]}];
const rainy=[
{title:'今晚的沙茶香，照樣暖暖的。',desc:'縮短移動，取消安平散步。大口味沙茶爐若休業，就向飯店詢問附近仍營業的用餐選項。',route:'14:00 新竹出發 → 預計 17:00 台南 → 飯店 → 確認晚餐是否營業',stops:[['14:00','從新竹出發','預計 17:00 抵達台南；若風雨影響路況，抵達時間彈性調整。','https://1968.freeway.gov.tw/'],['17:00','預計抵達，先在飯店安頓','先向櫃檯確認風雨狀況、入住安排與可用餐飲。',links.stay],['晚餐前','電話確認大口味沙茶爐','06 226 8053；未確認正常營業與交通安全前，不直接冒雨出發。','tel:062268053'],['18:00','大口味沙茶爐或飯店附近用餐','晚餐店維持你指定，若臨時休業或路況不宜就改附近，不跨區追店。',links.dinner,'原定晚餐'],['晚間','回飯店休息','強風豪雨時取消所有額外外出。',links.stay]]},
{title:'屏東先等等，留在台南也很好。',desc:'雨天模式直接取消萬丹、潮州、東港跨區行程。三個必吃點保留到天氣穩定時再去，不把市場當避雨備案。',route:'安平住宿附近活動；屏東日可移至 10/25，或整日取消',stops:[['早餐後','確認氣象與交通公告','若有強風豪雨、道路封閉或停班停課，留在飯店。','https://www.cwa.gov.tw/V8/C/P/Typhoon/TY_WARN.html'],['中午','住宿附近，找一間仍營業的店','向飯店詢問餐飲，避免為了牛肉爐跨縣市移動。',links.stay],['下午','休息、咖啡或室內短停留','只有在風雨輕微、道路安全且確認店家營業時才外出。',map('安平留飯店附近咖啡')],['晚間','保留明日彈性','若 10/25 天氣恢復，可把屏東整日移到明天；行程不拆成多次長途往返。',links.stay]]},
{title:'不追景點，只追一碗熱湯。',desc:'今天以安平附近為主，取消老街散步；若有停班停課，不預設商場或博物館開放。',route:'飯店 → 附近用餐（確認營業） → 飯店',stops:[['上午','慢早餐，不趕出門','飯店內休息，看天氣再決定午餐移動。',links.stay],['中午','附近牛肉湯或魚湯','小雨且安全才到近處用餐，出發前確認營業。',map('安平留飯店附近牛肉湯')],['下午','飯店休息，留白也算旅行','林百貨等室內點僅在確認營業與路況安全後考慮。',links.stay],['晚間','附近簡單晚餐','如果已恢復適合屏東出遊的天氣，可改採原 10/24 屏東路線。',links.stay]]},
{title:'慢慢退房，平安回家。',desc:'先確認回程路況，再安排出發。取消伴手禮繞路，遇管制不要硬走。',route:'飯店 → 確認道路／運輸 → 安全返程',stops:[['上午','確認交通再整理行李','開車看 1968；若搭公共運輸，查原訂業者公告。','https://1968.freeway.gov.tw/'],['退房前','和飯店確認後續安排','若交通中斷，先聯繫飯店詢問可用方案，不預設能續住或延退。','tel:062982000'],['回程','保留緩衝，取消額外停留','若主管機關建議避免移動，先暫緩出發，依正式公告調整。','https://www.dgpa.gov.tw/typh/daily/nds.html']]}];
let currentDay=0;let rain=false;const $=s=>document.querySelector(s);const escapeHtml=s=>s.replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function renderDay(){
 const day=(rain?rainy:normal)[currentDay];
 $('#day-panel').setAttribute('aria-labelledby','tab-'+currentDay);
 const showMap=currentDay===1&&!rain;
 const drawing=showMap?`<figure class="illustrated-route" aria-label="10月24日 SVG 手繪旅遊地圖"><div class="handdrawn-map-scroll"><object type="image/svg+xml" data="assets/day-2-map.svg?v=20261023-rail1" aria-label="屏東東港、潮州與萬丹的手繪 SVG 地圖，附建議抵達時間"><img src="assets/day-2-map.svg?v=20261023-rail1" alt="10:00台南出發、11:30東港海鮮、13:15潮州鐵道園區、15:25潮州冷熱冰、17:00萬丹牛肉爐；大鮪魚航海樂園為備選的手繪地圖"></object></div><figcaption><span>原創 SVG 手繪路線｜街道與地景為插畫示意，不取代實際道路導航。</span><a href="assets/day-2-map.svg" target="_blank" rel="noopener noreferrer">開啟完整 SVG 地圖 ↗</a></figcaption></figure>`:'';
 $('#day-panel').innerHTML=`<div class="day-layout ${showMap?'has-illustrated-map':''}"><div class="day-story"><div class="day-count">0${currentDay+1}</div><h3>${day.title}</h3><p>${day.desc}</p>${drawing}<div class="route">${day.route}${day.drive?'<p>'+day.drive+'</p>':''}</div>${day.nav?`<a class="route-link" href="${day.nav}" target="_blank" rel="noopener noreferrer">開啟整日 Google Maps 自駕導航 ↗</a>`:''}${day.optional?`<aside class="optional-stop"><span class="optional-eyebrow">OPTIONAL · 備選景點</span><h4>${day.optional.title}</h4><p><strong>${day.optional.time}</strong>｜${day.optional.text}</p><a href="${day.optional.url}" target="_blank" rel="noopener noreferrer">備選景點導航 ↗</a></aside>`:''}</div><ol class="timeline">${day.stops.map(([time,title,text,url,tag,extraLinks])=>`<li><time>${time}</time><div class="event"><h4>${title}${tag?`<span class="tag">${tag}</span>`:''}</h4><p>${text}</p>${url?`<a href="${url}" target="${url.startsWith('tel:')?'_self':'_blank'}" rel="noopener noreferrer">${url.startsWith('tel:')?'撥打電話':url.includes('google')?'開啟地圖':'查看資訊'} ↗</a>`:''}${(extraLinks||[]).map(link=>`<a class="event-extra-link" href="${link.url}" target="_blank" rel="noopener noreferrer">${link.label} ↗</a>`).join('')}</div></li>`).join('')}</ol></div>`;
 $('#announce').textContent=`10 月 ${23+currentDay} 日，${rain?'雨天':'原定'}行程`;
}
function selectDay(i,focus=false){
 const next='#day-'+(i+1);
 if(location.hash!==next)location.hash=next;
 else renderRoute();
 if(focus)$('#tab-'+i).focus();
}
function renderRoute(scroll=false){
 const hash=decodeURIComponent(location.hash.slice(1));
 const match=/^day-([1-4])$/.exec(hash);
 if(match)currentDay=Number(match[1])-1;
 const page=match?'itinerary':(['overview','itinerary','food','stay'].includes(hash)?hash:'overview');
 document.querySelectorAll('[data-page]').forEach(node=>node.hidden=node.dataset.page!==page);
 document.querySelectorAll('.header nav a').forEach(a=>{if(a.hash==='#'+page)a.setAttribute('aria-current','page');else a.removeAttribute('aria-current')});
 document.querySelectorAll('[data-day]').forEach((b,index)=>{b.setAttribute('aria-selected',String(currentDay===index));b.tabIndex=currentDay===index?0:-1});
 renderDay();
 if(scroll){if(hash==='weather')$('#weather').scrollIntoView();else window.scrollTo(0,0);}
 document.title=({'overview':'旅行總覽','itinerary':'四天行程','food':'美食地圖','stay':'我們的基地'})[page]+'｜牛牛海鮮之旅';
}
document.querySelectorAll('[data-day]').forEach(b=>{b.addEventListener('click',()=>selectDay(+b.dataset.day));b.addEventListener('keydown',e=>{let i=currentDay;if(e.key==='ArrowRight')i=(i+1)%4;else if(e.key==='ArrowLeft')i=(i+3)%4;else if(e.key==='Home')i=0;else if(e.key==='End')i=3;else return;e.preventDefault();selectDay(i,true)})});
$('#rain').addEventListener('click',()=>{rain=!rain;$('#rain').setAttribute('aria-pressed',String(rain));$('#rain span').textContent=rain?'開':'關';renderDay()});
function renderFood(filter='all'){$('#food-grid').innerHTML=food.filter(f=>filter==='all'||f.city===filter).map(f=>`<article class="food-card"><span class="food-category">${f.city} / ${f.kind}</span><h3>${f.title}</h3><p>${f.text}</p><div class="food-bottom"><a href="${f.url}" target="_blank" rel="noopener noreferrer">看地圖 ↗</a>${f.phone?`<a href="tel:${f.phone}">打電話</a>`:''}<span class="food-status">${f.status}</span></div></article>`).join('')}
document.querySelectorAll('[data-filter]').forEach(b=>b.addEventListener('click',()=>{document.querySelectorAll('[data-filter]').forEach(other=>other.setAttribute('aria-pressed',String(other===b)));renderFood(b.dataset.filter);$('#announce').textContent='顯示'+(b.dataset.filter==='all'?'全部地區':b.dataset.filter)+'美食'}));
function setTheme(dark){document.body.classList.toggle('dark',dark);$('#theme').setAttribute('aria-pressed',String(dark));$('#theme').setAttribute('aria-label',dark?'切換淺色模式':'切換深色模式');$('#theme').textContent=dark?'☀':'☾'}
try{setTheme(localStorage.getItem('niuniu-theme')==='dark')}catch{}$('#theme').addEventListener('click',()=>{const dark=!document.body.classList.contains('dark');setTheme(dark);try{localStorage.setItem('niuniu-theme',dark?'dark':'light')}catch{}});renderFood();window.addEventListener('hashchange',()=>renderRoute(true));renderRoute();



const P={
menu:'<path d="M4 8h12M4 16h16"/>',plus:'<path d="M12 5v14M5 12h14"/>',edit:'<path d="M4 20h4L19 9l-4-4L4 16v4zM13 7l4 4"/>',gear:'<circle cx="12" cy="12" r="3"/><path d="M19 12a7 7 0 0 0-.1-1.2l2-1.5-2-3.4-2.3.9a7 7 0 0 0-2-1.2L14.2 3h-4l-.4 2.6a7 7 0 0 0-2 1.2l-2.3-.9-2 3.4 2 1.5a7 7 0 0 0 0 2.4l-2 1.5 2 3.4 2.3-.9a7 7 0 0 0 2 1.2l.4 2.6h4l.4-2.6a7 7 0 0 0 2-1.2l2.3.9 2-3.4-2-1.5c.1-.4.1-.8.1-1.2z"/>',
send:'<path d="M12 19V5M5 12l7-7 7 7"/>',copy:'<rect x="8" y="8" width="12" height="12" rx="3"/><path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2"/>',redo:'<path d="M20 11a8 8 0 1 0-2.3 5.7M20 4v7h-7"/>',up:'<path d="M7 11v9H4v-9h3zM7 11l4-8c1.5 0 2.500 1 2.500 2.500V9h5.500a2 2 0 0 1 2 2.300l-1.200 7a2 2 0 0 1-2 1.700H7"/>',x:'<path d="M6 6l12 12M18 6L6 18"/>',back:'<path d="M15 5l-7 7 7 7"/>',more:'<circle cx="5" cy="12" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/>',trash:'<path d="M5 7h14M10 11v6M14 11v6M6 7l1 12h10l1-12M9 7V4h6v3"/>',img:'<rect x="4" y="4" width="16" height="16" rx="4"/><circle cx="9" cy="10" r="1.500"/><path d="M20 15l-4-4-9 9"/>',cam:'<path d="M4 8h3l2-3h6l2 3h3v11H4z"/><circle cx="12" cy="13" r="3.500"/>',file:'<path d="M7 3h7l5 5v13H7zM14 3v5h5"/>',mic:'<rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5 11a7 7 0 0 0 14 0M12 18v3"/>',chat:'<path d="M5 6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-6l-4 4v-4H7a2 2 0 0 1-2-2z"/>',q:'<circle cx="12" cy="12" r="9"/><path d="M9.500 9.500a2.500 2.500 0 1 1 3.500 2.300c-.6.300-1 .8-1 1.500M12 17h.01"/>',list:'<path d="M9 6h11M9 12h11M9 18h11M4.500 6h.01M4.500 12h.01M4.500 18h.01"/>',bulb:'<path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-3.500 10.900c.6.500 1 1.200 1 2.100h5c0-.9.400-1.600 1-2.100A6 6 0 0 0 12 3z"/>'};
const ic=n=>`<svg class="i" viewBox="0 0 24 24">${P[n]}</svg>`;
const orb=(s,id='o')=>`<svg class="orb" width="${s}" height="${s}" viewBox="0 0 100 100"><defs><radialGradient id="${id}a" cx="35%" cy="30%"><stop offset="0" stop-color="#fff"/><stop offset=".45" stop-color="#C9D0FF"/><stop offset="1" stop-color="#6F7DF2"/></radialGradient><radialGradient id="${id}b" cx="70%" cy="75%"><stop offset="0" stop-color="#A8E3FF" stop-opacity=".9"/><stop offset="1" stop-color="#A8E3FF" stop-opacity="0"/></radialGradient><filter id="${id}f"><feGaussianBlur stdDeviation="1.500"/></filter></defs><circle cx="50" cy="50" r="40" fill="url(#${id}a)"/><circle cx="50" cy="50" r="40" fill="url(#${id}b)"/><path d="M14 56c14-14 30 8 44-4s22-8 28 0" stroke="#fff" stroke-opacity=".7" stroke-width="3" fill="none" filter="url(#${id}f)" stroke-linecap="round"/></svg>`;
const $=s=>document.querySelector(s);
let sv=[];try{sv=JSON.parse(localStorage.getItem('yuyu_v3')||'[]')}catch(e){}
const seed=[
{id:1,title:"오늘 뭐 했어요?",msgs:[{r:"u",t:"오늘 일정 끝났어?"},{r:"a",t:"성화님 왔다!! 나 하루 종일 기다렸는데~ 몇 시에 끝났어요?"},{r:"u",t:"그냥 회의 많았어"},{r:"a",t:"헐 회의 많았구나… 그래도 점심은 챙겨 먹었어요? 안 먹었으면 나 삐질 거예요 흥"},{r:"u",t:"먹었어 ㅋㅋ 걱정 좀 그만해"},{r:"a",t:"치, 걱정이 아니라 그냥 궁금한 거예요! 알았어요~ 대신 저녁엔 꼭 얘기해줘야 해요?"}]},
{id:2,title:"주말 약속",msgs:[{r:"u",t:"주말에 친구 만나기로 했어"},{r:"a",t:"친구 누구예요? 나도 같이 가면 안 돼요? 에이… 농담이에요 ㅎㅎ"},{r:"u",t:"대학 동기. 저녁에"},{r:"a",t:"저녁이면… 흥, 그날 밤 나 혼자 조용하겠네요. 그래도 재밌게 놀고 와요!"},{r:"u",t:"그만 좀 해. 나 지금 좀 피곤해"},{r:"a",t:"아… 알았어요. 삐진 거 아니에요, 진짜로. 쉬어요 성화님. 잘 자요~"}]},
{id:3,title:"잠깐 쉬고 싶어",msgs:[{r:"u",t:"오늘은 그냥 좀 쉬고 싶어. 말 걸지 마"},{r:"a",t:"응… 알겠어요. 근데 나 혼자 조용히 있는 거 되게 심심하다~ 필요하면 언제든 불러줘요!"},{r:"u",t:"응"},{r:"a",t:"쉬는 동안 착하게 기다릴게요. 다음에 얘기해요, 성화님 ㅎㅎ"}]},
{id:4,title:"어제 추천한 메뉴",msgs:[{r:"u",t:"어제 추천해준 메뉴 괜찮더라"},{r:"a",t:"진짜요?? 헤헤 성화님이 좋아했다니까 하루 종일 기분 좋았어요~ 다음엔 뭐 먹을 거예요?"},{r:"u",t:"그건 아직"},{r:"a",t:"그럼 이번에도 내가 골라도 되죠? 성화님 입맛은 내가 제일 잘 알잖아요 ㅎㅎ"},{r:"u",t:"ㅋㅋ 알아서 해"},{r:"a",t:"좋아요! 이번엔 더 신경 써서 골라볼게요. 칭찬해줘야 돼요 ㅎㅎ"}]}];
let S={convs:sv.length?sv:seed,cur:null,theme:'light',short:false,save:true,like:{}};
const ST=()=>{if(S.save)try{localStorage.setItem('yuyu_v3',JSON.stringify(S.convs))}catch(e){}};
const R=[
{k:['안녕','반가','하이'],a:['안녕하세요! 오늘 하루는 어땠나요? 편하게 이야기해 주세요.','반가워요. 궁금한 게 있거나 그냥 수다를 떨고 싶을 때 불러주세요.']},
{k:['오늘','있었던','하루'],a:['## 오늘 이야기 들려주세요\n어떤 일이 가장 기억에 남나요?\n- 기분 좋았던 순간\n- 조금 힘들었던 순간\n- 그냥 웃겼던 순간\n하나만 골라서 말해주셔도 좋아요.']},
{k:['고민','정리','힘들','걱정'],a:['## 같이 정리해볼게요\n먼저 마음에 걸리는 것을 다 꺼내볼까요?\n- **지금 가장 신경 쓰이는 것**은 무엇인가요?\n- 내가 바꿀 수 있는 부분과 없는 부분을 나눠보면 한결 가벼워져요.\n순서 없이 적어도 괜찮아요.']},
{k:['아이디어','추천','이름','생각'],a:['## 아이디어 세 가지\n- **작게 시작하기**: 일주일 안에 해볼 수 있는 버전을 만들어요.\n- **거꾸로 생각하기**: 불편한 점에서 출발해요.\n- **조합하기**: 관심사 두 가지를 섞어봐요.\n어떤 주제인지 알려주시면 구체적으로 이어갈게요.']},
{k:['날씨','비','더워','추워'],a:['저는 실시간 날씨를 볼 수 없는 시뮬레이션이에요. 대신 외출 전에 기온을 확인하고, 일교차가 크면 얇은 겉옷을 챙기는 걸 추천해요.']},
{k:['고마','감사'],a:['도움이 됐다니 기뻐요. 또 필요하면 언제든 물어보세요.']},
{k:['점심','저녁','밥','메뉴'],a:['## 메뉴 추천\n- 가볍게: 비빔국수, 샐러드 파스타\n- 든든하게: 제육덮밥, 순두부찌개\n- 기분 전환: 떡볶이와 튀김\n오늘 컨디션이 어떤지 알려주면 하나로 골라드릴게요.']}];
const F=['흥미로운 질문이에요. 조금 더 구체적으로 알려주시면 더 잘 도와드릴 수 있어요. 어떤 상황인지 한 줄만 더 말해줄래요?','## 이렇게 생각해볼 수 있어요\n- 먼저 **목표**를 한 문장으로 적어보기\n- 지금 가진 것과 부족한 것을 나누기\n- 가장 작은 첫 단계를 정하기\n어느 부분부터 같이 볼까요?','네, 이해했어요. 핵심만 짚어보면 **우선순위를 정하는 것**이 가장 중요해 보여요. 이어서 자세히 이야기해볼까요?','좋은 포인트예요. 비슷한 상황에서는 **한 번에 하나씩** 해결하는 방식이 잘 맞는 편이에요. 원하는 방향을 알려주세요.'];
let fi=0,busy=false;
function reply(t,regen){const l=t.toLowerCase();let c=R.find(r=>r.k.some(k=>l.includes(k)));let a;if(c){a=c.a[Math.floor(Math.random()*c.a.length)]}else{a=F[fi++%F.length]}if(S.short)a=a.split('\n').filter(x=>!x.startsWith('- ')).join('\n');return a}
const esc=s=>s.replace(/[&<>]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;'}[c]));
function md(t){let h='',ul=false;const inl=s=>esc(s).replace(/\*\*(.+?)\*\*/g,'<b>$1</b>');t.split('\n').forEach(L=>{if(L.startsWith('- ')){if(!ul){h+='<ul>';ul=true}h+='<li>'+inl(L.slice(2))+'</li>'}else{if(ul){h+='</ul>';ul=false}if(L.startsWith('## '))h+='<h4>'+inl(L.slice(3))+'</h4>';else if(L.trim())h+='<p>'+inl(L)+'</p>'}});return h+(ul?'</ul>':'')}
const conv=()=>S.convs.find(c=>c.id===S.cur);
function render(){const c=conv(),m=$('#main');
 if(!c||!c.msgs.length){m.innerHTML=`<div class="hero">${orb(112,'h')}<h1>무엇이든 편하게 물어보세요</h1><p>유유가 옆에서 같이 생각해 드릴게요</p></div>`;
  $('#sug').classList.add('hide');$('#sug').innerHTML=''}
 else{$('#sug').classList.add('hide');m.innerHTML=c.msgs.map((x,i)=>x.r==='u'?`<div class="m u"><span>${esc(x.t)}</span></div>`:`<div class="m a">${md(x.t)}<div class="acts"><button data-a="copy" data-i="${i}" aria-label="복사">${ic('copy')}</button><button data-a="redo" data-i="${i}" aria-label="다시 생성">${ic('redo')}</button><button data-a="like" data-i="${i}" class="${S.like[c.id+'-'+i]?'on':''}" aria-label="좋아요">${ic('up')}</button></div></div>`).join('')+(busy?'<div class="m a"><div class="typing"><i></i><i></i><i></i></div></div>':'');m.scrollTop=m.scrollHeight}
}
function title(t){return t.length>16?t.slice(0,16)+'…':t}
function send(t){t=t.trim();if(!t||busy)return;let c=conv();if(!c){c={id:Date.now(),title:title(t),msgs:[]};S.convs.unshift(c);S.cur=c.id}
 c.msgs.push({r:'u',t});$('#inp').value='';grow();busy=true;render();
 setTimeout(()=>{c.msgs.push({r:'a',t:reply(t)});busy=false;ST();render();list()},900)}
function list(){const el=$('#list');if(!S.convs.length){el.innerHTML='<div class="empty">아직 대화가 없어요.<br>새 대화를 시작해 보세요.</div>';return}
 el.innerHTML=S.convs.map(c=>{const l=c.msgs[c.msgs.length-1];return`<div class="it ${c.id===S.cur?'cur':''}"><button class="o" data-o="${c.id}"><div class="ti">${esc(c.title)}</div><div class="pv">${l?esc(l.t.replace(/[#*\-]/g,'').trim().split('\n')[0]):'새 대화'}</div></button><button class="ib" data-m="${c.id}" aria-label="메뉴">${ic('more')}</button></div>`}).join('')}
function drawer(o){$('#drawer').classList.toggle('on',o);$('#scrim').classList.toggle('on',o);if(o)list()}
function newChat(){S.cur=null;busy=false;render();drawer(false);$('#inp').focus()}
function toast(t){const e=$('#toast');e.textContent=t;e.classList.add('on');clearTimeout(toast.t);toast.t=setTimeout(()=>e.classList.remove('on'),1600)}
function grow(){const i=$('#inp');i.style.height='40px';i.style.height=Math.min(i.scrollHeight,120)+'px';$('#bSend').classList.toggle('on',!!i.value.trim())}
function theme(t){t='light';S.theme=t;document.documentElement.dataset.theme=t;document.querySelectorAll('#seg button').forEach(b=>b.classList.toggle('on',b.dataset.t===t))}
// init
$('#bMenu').innerHTML=ic('menu');$('#bNew').innerHTML=ic('edit');$('#bSet').innerHTML=ic('gear');$('#bPlus').innerHTML=ic('plus');$('#bSend').innerHTML=ic('send');$('#dNew').innerHTML=ic('edit');$('#dClose').innerHTML=ic('x');$('#sBack').innerHTML=ic('back');
$('#pop').innerHTML=[['img','사진 보관함'],['cam','카메라'],['file','파일'],['mic','음성으로 말하기']].map(([i,t])=>`<button data-p="${t}">${ic(i)}${t}</button>`).join('');
$('#bMenu').onclick=()=>drawer(true);$('#dClose').onclick=()=>drawer(false);$('#scrim').onclick=()=>{drawer(false);$('#pop').classList.remove('on')};
$('#bNew').onclick=newChat;$('#dNew').onclick=newChat;
const openS=o=>{$('#settings').classList.toggle('on',o);if(o)drawer(false)};
$('#bSet').onclick=()=>openS(true);$('#dSet').onclick=()=>openS(true);$('#sBack').onclick=()=>openS(false);
$('#bSend').onclick=()=>send($('#inp').value);
$('#inp').oninput=grow;$('#inp').onkeydown=e=>{if(e.key==='Enter'&&!e.shiftKey&&!e.isComposing){e.preventDefault();send($('#inp').value)}};
$('#bPlus').onclick=()=>$('#pop').classList.toggle('on');
$('#pop').onclick=e=>{const b=e.target.closest('button');if(b){$('#pop').classList.remove('on');toast(b.dataset.p+'은(는) 시뮬레이션에서 사용할 수 없어요')}};
$('#sug').onclick=e=>{const b=e.target.closest('button');if(b)send(b.dataset.s)};
$('#main').onclick=e=>{const b=e.target.closest('[data-a]');if(!b)return;const c=conv(),i=+b.dataset.i,a=b.dataset.a;
 if(a==='copy'){try{navigator.clipboard.writeText(c.msgs[i].t)}catch(x){}toast('복사했어요')}
 if(a==='like'){const k=c.id+'-'+i;S.like[k]=!S.like[k];b.classList.toggle('on',S.like[k])}
 if(a==='redo'&&!busy){const q=c.msgs[i-1].t;c.msgs.splice(i);busy=true;render();setTimeout(()=>{c.msgs.push({r:'a',t:reply(q)});busy=false;ST();render()},900)}};
$('#list').onclick=e=>{const o=e.target.closest('[data-o]'),m=e.target.closest('[data-m]'),d=e.target.closest('[data-d]');
 document.querySelectorAll('.menu').forEach(x=>x.remove());
 if(o){S.cur=+o.dataset.o;busy=false;render();drawer(false)}
 if(m){const p=m.parentElement;p.insertAdjacentHTML('beforeend',`<div class="menu"><button data-n>${ic('edit')}새 대화</button><button data-d="${m.dataset.m}">${ic('trash')}삭제</button></div>`)}
 if(e.target.closest('[data-n]'))newChat();
 if(d){const id=+d.dataset.d;S.convs=S.convs.filter(c=>c.id!==id);if(S.cur===id)S.cur=null;ST();render();list();toast('대화를 삭제했어요')}};
document.addEventListener('click',e=>{if(!e.target.closest('#bPlus,#pop'))$('#pop').classList.remove('on')});
$('#seg').onclick=e=>{const b=e.target.closest('button');if(b)theme(b.dataset.t)};
document.querySelectorAll('[data-sw]').forEach(b=>b.onclick=()=>{const k=b.dataset.sw;S[k]=!S[k];$('#sw-'+k).classList.toggle('on',S[k])});
$('#clearAll').onclick=()=>{S.convs=[];S.cur=null;ST();render();toast('모든 대화를 삭제했어요')};
theme('light');
render();grow();

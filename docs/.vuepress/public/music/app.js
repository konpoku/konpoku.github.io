(() => {
  'use strict';
  const script = document.currentScript;
  const root = new URL(script.dataset.root, location.href);
  const $ = (s) => document.querySelector(s);
  const $$ = (s) => [...document.querySelectorAll(s)];
  const safe = (text) => String(text).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  let saved = [];
  try { saved = JSON.parse(localStorage.getItem('soundquest-bookmarks') || '[]'); if (!Array.isArray(saved)) saved = []; } catch {}
  const toast = (message) => { $('#toast').textContent = message; $('#toast').classList.add('show'); setTimeout(() => $('#toast').classList.remove('show'), 2200); };
  const drawer = $('.drawer');
  let lastMenuFocus;
  const closeMenu = () => { document.body.classList.remove('menu-open'); drawer.inert = true; lastMenuFocus?.focus(); };
  $('[data-open-menu]').addEventListener('click', () => { lastMenuFocus = document.activeElement; drawer.inert = false; document.body.classList.add('menu-open'); $('.drawer-close').focus(); });
  $$('[data-close-menu]').forEach(el => el.addEventListener('click', closeMenu));
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeMenu(); if(e.key === 'Tab' && document.body.classList.contains('menu-open')) { const els=[...drawer.querySelectorAll('a,button')]; if(e.shiftKey && document.activeElement===els[0]) {e.preventDefault();els.at(-1).focus();} else if(!e.shiftKey && document.activeElement===els.at(-1)){e.preventDefault();els[0].focus();} } });
  const dialog = $('.search-dialog'), input = $('#site-search'), results = $('#search-results');
  let searchData;
  async function loadSearch() { if(!searchData){const response=await fetch(new URL('search.json',root));if(!response.ok)throw Error('search');searchData=await response.json();} return searchData; }
  $('[data-open-search]').addEventListener('click', async () => { dialog.showModal(); input.focus(); try { await loadSearch(); } catch { results.textContent='搜索索引加载失败，请刷新后重试。'; } });
  dialog.addEventListener('click', e => { if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close();} });
  let sequence = 0;
  input.addEventListener('input', async () => { const seq=++sequence; const q=input.value.trim().toLocaleLowerCase(); if(!q){results.replaceChildren();$('.search-hint').textContent='输入文章标题或正文关键词';return;} try {const data=await loadSearch();if(seq!==sequence)return; const words=q.split(/\s+/); const found=data.filter(a=>words.every(w=>(a.title+a.chapter+a.text).toLocaleLowerCase().includes(w))).sort((a,b)=>Number(b.title.toLocaleLowerCase().includes(q))-Number(a.title.toLocaleLowerCase().includes(q)));$('.search-hint').textContent=`找到 ${found.length} 篇相关文章`;results.innerHTML=found.slice(0,40).map(a=>`<a class="search-result" href="${safe(new URL(a.path,root).href)}"><small>${safe(a.chapter)}</small>${safe(a.title)}<p>${safe(a.excerpt)}</p></a>`).join('')||'<p>没有找到相关文章，请尝试其他关键词。</p>';}catch{results.textContent='搜索索引加载失败，请刷新后重试。'} });
  const bookmark = $('[data-bookmark]');
  function updateBookmark(){if(bookmark){const active=saved.includes(bookmark.dataset.bookmark);bookmark.setAttribute('aria-pressed',String(active));bookmark.innerHTML=`<i class="fa" aria-hidden="true">${active?'&#xf02e;':'&#xf097;'}</i> ${active?'已收藏':'收藏'}`;}}
  if(bookmark){updateBookmark();bookmark.addEventListener('click',()=>{const slug=bookmark.dataset.bookmark;saved=saved.includes(slug)?saved.filter(s=>s!==slug):[...saved,slug];try{localStorage.setItem('soundquest-bookmarks',JSON.stringify(saved));}catch{toast('浏览器无法保存收藏');return;}updateBookmark();toast(saved.includes(slug)?'已加入收藏':'已取消收藏');});}
  if(document.body.classList.contains('bookmarks-page')){let count=0;$$('[data-article]').forEach(el=>{if(saved.includes(el.dataset.article)){el.classList.add('saved');count++;}});$('.bookmark-empty').hidden=count>0;}
  const filter=$('#list-filter');if(filter){const apply=()=>{const q=filter.value.trim().toLocaleLowerCase();let count=0;$$('[data-article]').forEach(el=>{el.hidden=!el.dataset.keywords.toLocaleLowerCase().includes(q);if(!el.hidden)count++;});$('.no-results').hidden=count>0;};filter.addEventListener('input',apply);filter.value=new URLSearchParams(location.search).get('q')||'';apply();}
  const share=$('[data-share]');if(share)share.addEventListener('click',async()=>{try{await navigator.clipboard.writeText(location.href);toast('文章链接已复制');}catch{toast('文章链接：'+location.href);}});
  const backTop=$('.back-top');window.addEventListener('scroll',()=>backTop.classList.toggle('show',scrollY>500),{passive:true});backTop.addEventListener('click',()=>scrollTo({top:0,behavior:'smooth'}));
  // Play one example at a time so comparisons are easy to hear.
  document.addEventListener('play',e=>{if(e.target.tagName==='AUDIO')$$('audio').forEach(a=>{if(a!==e.target)a.pause();});},true);
})();
(() => {
  const terms=[...document.querySelectorAll('.term,.footnote')];
  if(!terms.length)return;
  const tip=document.createElement('div');tip.id='term-tooltip';tip.setAttribute('role','tooltip');tip.hidden=true;document.body.append(tip);
  let active=null;
  const close=()=>{if(active){active.removeAttribute('aria-describedby');active.setAttribute('aria-expanded','false');}active=null;tip.hidden=true;};
  const show=(el)=>{if(active&&active!==el)close();active=el;tip.textContent=el.dataset.definition||el.title;tip.hidden=false;el.setAttribute('aria-describedby',tip.id);el.setAttribute('aria-expanded','true');const r=el.getBoundingClientRect();if(innerWidth>690){tip.style.left=Math.max(12,Math.min(innerWidth-tip.offsetWidth-12,r.left))+'px';tip.style.top=(r.bottom+tip.offsetHeight+20>innerHeight?Math.max(12,r.top-tip.offsetHeight-12):r.bottom+12)+'px';}};
  terms.forEach(el=>{el.addEventListener('pointerenter',e=>{if(e.pointerType!=='touch')show(el);});el.addEventListener('pointerleave',close);el.addEventListener('focus',()=>{if(el.matches(':focus-visible'))show(el);});el.addEventListener('blur',close);el.addEventListener('click',e=>{e.stopPropagation();show(el);});});
  document.addEventListener('click',e=>{if(!tip.contains(e.target))close();});document.addEventListener('keydown',e=>{if(e.key==='Escape')close();});window.addEventListener('scroll',close,{passive:true});
})();

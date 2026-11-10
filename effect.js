document.querySelectorAll('.vx').forEach(el=>{
  const d=el.dataset,list=v=>(v||'').split(',').map(s=>s.trim()).filter(Boolean);
  if(d.radius)el.style.borderRadius=d.radius+'px';
  const src=((innerWidth<768&&d.imagesMobile)||d.images||'').trim();
  const go=urls=>{const imgs=urls.map((u,i)=>{const x=document.createElement('img');x.src=u;x.alt='';if(!i)x.className='on';el.append(x);return x});
    let n=0;if(imgs.length>1)setInterval(()=>{imgs[n].className='';n=(n+1)%imgs.length;imgs[n].className='on'},parseFloat(d.flash)||300)};
  if(src.startsWith('/'))fetch(src+'?format=json').then(r=>r.json()).then(j=>go((j.items||[]).filter(i=>i.assetUrl).map(i=>i.assetUrl+'?format=1500w'))).catch(()=>{});
  else go(list(src));
});

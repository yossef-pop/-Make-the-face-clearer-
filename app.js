
// Previous version JavaScript content
const data = {/* your previous JSON data */};
Object.keys(data).forEach(k=>{ if(data[k].copyFrom){ data[k] = JSON.parse(JSON.stringify(data[data[k].copyFrom])); } });
const card = document.getElementById('card');
const titleEl = document.getElementById('cardTitle');
const causeEl = document.getElementById('cardCause');
const tipsEl = document.getElementById('cardTips');
const productsEl = document.getElementById('cardProducts');
const closeBtn = document.getElementById('closeBtn');
document.querySelectorAll('.region').forEach(el=>{ el.addEventListener('click', ()=>{ openCardFor(el.id); }); });
closeBtn.addEventListener('click', closeCard);
function openCardFor(id){ const info = data[id]; if(!info) return; titleEl.textContent = info.title||id; causeEl.textContent=info.cause||""; tipsEl.innerHTML=''; (info.tips||[]).forEach(t=>{ const li=document.createElement('li'); li.textContent=t; tipsEl.appendChild(li); }); productsEl.innerHTML=''; (info.products||[]).forEach(p=>{ const div=document.createElement('div'); div.className='product'; const meta=document.createElement('div'); meta.className='meta'; const a=document.createElement('a'); a.href=p.href; a.target='_blank'; a.rel='noopener noreferrer'; a.textContent=p.name; const small=document.createElement('small'); small.textContent=p.desc||''; meta.appendChild(a); meta.appendChild(small); div.appendChild(meta); productsEl.appendChild(div); }); card.classList.remove('hidden'); card.setAttribute('aria-hidden','false'); card.scrollIntoView({behavior:'smooth',block:'center'}); }
function closeCard(){ card.classList.add('hidden'); card.setAttribute('aria-hidden','true'); }

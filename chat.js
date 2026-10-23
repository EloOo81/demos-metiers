const KB=AI.kb.map(function(x){return [new RegExp(x[0]),x[1]]});
const log=document.getElementById('log'),qr=document.getElementById('qr'),inp=document.getElementById('q');
function say(t,w){const d=document.createElement('div');d.className='m '+w;d.textContent=t;log.appendChild(d);log.scrollTop=log.scrollHeight}
function chips(a){qr.innerHTML='';a.forEach(function(c){const b=document.createElement('button');b.type='button';b.textContent=c;b.onclick=function(){ask(c)};qr.appendChild(b)})}
async function ask(q){if(!q.trim())return;say(q,'u');qr.innerHTML='';inp.value='';
 if(CONFIG.AI_ENDPOINT){try{const r=await fetch(CONFIG.AI_ENDPOINT+'/chat',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({message:q,trade:AI.trade})});const j=await r.json();say(j.reply,'b');chips(AI.chips);return}catch(e){}}
 setTimeout(function(){const l=q.toLowerCase();const k=KB.find(function(x){return x[0].test(l)});say(k?k[1]:"Bonne question. Je suis en mode démonstration : je réponds sur les prix, délais, urgences et zones. Pour un cas précis, laissez vos coordonnées plus bas et on vous rappelle.",'b');chips(AI.chips)},450)}
document.getElementById('qf').addEventListener('submit',function(e){e.preventDefault();ask(inp.value)});
document.getElementById('f').addEventListener('submit',function(e){e.preventDefault();var b='Nom : '+n.value+'\nTéléphone : '+t.value+'\n\n'+m.value;document.getElementById('ok').style.display='block';location.href='mailto:'+CONFIG.LEAD_EMAIL+'?subject='+encodeURIComponent('Demande de devis')+'&body='+encodeURIComponent(b)});
say(AI.hello,'b');chips(AI.chips);

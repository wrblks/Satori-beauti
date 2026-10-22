const config = window.SATORI_CONFIG || {};
const menu = document.querySelector('.menu');
menu.addEventListener('click', () => { const open = menu.getAttribute('aria-expanded') !== 'true'; menu.setAttribute('aria-expanded', String(open)); document.querySelector('nav').classList.toggle('open', open); });
document.querySelectorAll('nav a').forEach(a => a.addEventListener('click', () => { menu.setAttribute('aria-expanded','false'); document.querySelector('nav').classList.remove('open'); }));
document.addEventListener('keydown', e => { if(e.key==='Escape'){menu.setAttribute('aria-expanded','false');document.querySelector('nav').classList.remove('open');}});
const training = [
 ['Roczna szkoła medycyny estetycznej','cert-01.jpg'],['Zabiegi kosmetologiczne dermabrazji','cert-07.jpg'],['Teoria medycyny estetycznej i kosmetologii','cert-08.jpg'],['Urządzenia kosmetyczne i medyczne','cert-09.jpg'],['Toksyna botulinowa typu A','cert-02.jpg'],['Lips Master','cert-03.jpg'],['Biznes i prawo w branży beauty','cert-04.jpg'],['Zabiegi autologiczne','cert-05.jpg'],['Biostymulatory tkankowe','cert-06.jpg'],['Wypełniacze HA Masterclass','cert-10.jpg'],['Mezoterapia i lipoterapia','cert-11.jpg'],['Nici liftingujące PDO','cert-12.jpg'],['Wypełniacze HA — kwas hialuronowy usieciowany','cert-14.jpg'],['Świadectwo — wykaz zajęć i oceny','cert-13.jpg']
];
const dialog = document.querySelector('#cert-dialog');

const certGrid = document.querySelector('#cert-grid');
const groups = [
 {title:'Pielęgnacja i podstawy',note:'Skóra, teoria i technologie',icon:'leaf',items:[1,2,3]},
 {title:'Techniki estetyczne',note:'Specjalistyczne obszary edukacji',icon:'spark',items:[4,5,7,8,9,10,11,12]},
 {title:'Praktyka gabinetu',note:'Organizacja i odpowiedzialność',icon:'book',items:[6]}
];
const icons = {
 leaf:'<path d="M27 5C12 5 5 12 6 23c11 2 21-5 21-18Z"/><path d="M5 28 21 12M12 21v-8M12 21h8"/>',
 spark:'<path d="m16 3 3.5 9.5L29 16l-9.5 3.5L16 29l-3.5-9.5L3 16l9.5-3.5Z"/>',
 book:'<path d="M16 8C11 5 6 5 3 6v20c4-1 9-1 13 2 4-3 9-3 13-2V6c-3-1-8-1-13 2Z"/><path d="M16 8v20"/>'
};
function makeIcon(name){const span=document.createElement('span');span.className='training-icon';span.setAttribute('aria-hidden','true');span.innerHTML='<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round">'+icons[name]+'</svg>';return span;}
function documentLink(index,label){const [title,file]=training[index];const a=document.createElement('a');a.href='assets/'+file;a.className='document-link';a.textContent=label||'Zobacz certyfikat';a.setAttribute('aria-label',(label||'Zobacz certyfikat')+': '+title);const arrow=document.createElement('span');arrow.textContent='↗';arrow.setAttribute('aria-hidden','true');a.append(arrow);a.addEventListener('click',e=>{e.preventDefault();openCert(title,file,a)});return a;}
const featured=document.createElement('article');featured.className='education-feature';
const seal=document.createElement('div');seal.className='education-seal';seal.setAttribute('aria-hidden','true');seal.innerHTML='<span>SATORI</span><b>✧</b><span>EDUKACJA</span>';
const featureCopy=document.createElement('div');featureCopy.className='education-feature-copy';
featureCopy.innerHTML='<p class="eyebrow">FUNDAMENT EDUKACJI</p><h3>Roczna szkoła<br>medycyny estetycznej</h3><p>JS Medical Solutions <span aria-hidden="true">·</span> Sandra Wróblewska</p>';
const featureLinks=document.createElement('div');featureLinks.className='feature-links';featureLinks.append(documentLink(0),documentLink(13,'Zobacz wykaz zajęć'));featureCopy.append(featureLinks);featured.append(seal,featureCopy);certGrid.before(featured);
groups.forEach((group,index)=>{
 const section=document.createElement('details');section.className='training-group training-accordion';
 const top=document.createElement('summary');top.className='training-group-heading';top.append(makeIcon(group.icon));
 const copy=document.createElement('span');copy.className='training-summary-copy';
 const heading=document.createElement('span');heading.className='training-summary-title';heading.textContent=group.title;
 const note=document.createElement('span');note.className='training-summary-note';note.textContent=group.note;
 copy.append(heading,note);top.append(copy);
 const count=document.createElement('span');count.className='training-count';count.textContent=group.items.length+' '+(group.items.length===1?'szkolenie':group.items.length<5?'szkolenia':'szkoleń');top.append(count);
 section.append(top);const cards=document.createElement('div');cards.className='training-panel';
 group.items.forEach(i=>{const article=document.createElement('article');article.className='training-card';const h=document.createElement('h4');h.textContent=training[i][0];const issuer=document.createElement('p');issuer.textContent='JS Medical Solutions';article.append(h,issuer,documentLink(i));cards.append(article)});
 section.append(cards);certGrid.append(section);
});
let certificateOpener=null;
function openCert(title,file,opener){certificateOpener=opener;dialog.querySelector('img').src='assets/'+file;dialog.querySelector('img').alt='Oryginalny dokument — '+title;dialog.querySelector('#cert-title').textContent=title;dialog.querySelector('.original-link').href='assets/'+file;dialog.showModal();}
dialog.addEventListener('close',()=>{if(certificateOpener)certificateOpener.focus()});
dialog.querySelector('.close').addEventListener('click',()=>dialog.close());dialog.addEventListener('click',e=>{if(e.target===dialog)dialog.close()});
document.querySelectorAll('[data-topic]').forEach(a=>a.addEventListener('click',()=>{document.querySelector('[name=topic]').value=a.dataset.topic}));
const details=document.querySelector('#contact-details');
if(config.email || config.phone || config.address){details.replaceChildren();for(const [key,prefix] of [['email','mailto:'],['phone','tel:'],['address','']]){if(!config[key])continue;const p=document.createElement('p');const el=document.createElement(prefix?'a':'span');el.textContent=config[key];if(prefix)el.href=prefix+config[key];p.append(el);details.append(p);}}
if(config.bookingUrl && /^https:\/\//.test(config.bookingUrl)){const a=document.createElement('a');a.href=config.bookingUrl;a.textContent='Sprawdź terminy ↗';details.append(a);}
const form=document.querySelector('#contact-form');
if(config.email){form.querySelector('button').innerHTML='Otwórz wiadomość e-mail <span>↗</span>';document.querySelector('#form-mode').textContent='Formularz otworzy Twój program pocztowy z przygotowaną wiadomością. Wyślesz ją samodzielnie po sprawdzeniu treści.';}
form.addEventListener('submit',e=>{e.preventDefault();if(!form.reportValidity())return;const data=new FormData(form);const body=`Dzień dobry,\n\n${data.get('message')}\n\nImię: ${data.get('name')}\nE-mail do odpowiedzi: ${data.get('email')}\nTemat: ${data.get('topic')}`;document.querySelector('#draft').value=body;document.querySelector('#draft-label').hidden=false;if(config.email){window.location.href='mailto:'+config.email+'?subject='+encodeURIComponent('Satori Beauti — '+data.get('topic'))+'&body='+encodeURIComponent(body);document.querySelector('#form-status').textContent='Przygotowano wiadomość. Jeśli program pocztowy się nie otworzył, skopiuj poniższą treść. Wiadomość nie została wysłana przez stronę.';}else{document.querySelector('#form-status').textContent='Treść jest gotowa do skopiowania. Nic nie zostało wysłane. Kontakt z gabinetem nie jest jeszcze uruchomiony.';}document.querySelector('#draft').focus();});
document.querySelector('#year').textContent=new Date().getFullYear();

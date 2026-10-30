(function(){
  var PHOTOS={'expert-talk-2026':[
'images/expert-talk-2026/photo-01.jpg',
'images/expert-talk-2026/photo-02.jpg',
'images/expert-talk-2026/photo-03.jpg',
'images/expert-talk-2026/photo-04.jpg',
'images/expert-talk-2026/photo-05.jpg',
'images/expert-talk-2026/photo-06.jpg',
'images/expert-talk-2026/photo-07.jpg',
'images/expert-talk-2026/photo-08.jpg',
'images/expert-talk-2026/photo-09.jpg',
'images/expert-talk-2026/photo-10.jpg',
'images/expert-talk-2026/photo-11.jpg'
]};
  var EVENTS = {
    'expert-talk-2026': {
      chip:'Expert talk', when:'25 August 2026',
      title:'Mechanical Engineering Expert Talk 2026',
      org:'Organized by the Alumni Cell, MITS Gwalior · Part of the First Year Induction Program',
      desc:'The Mechanical Engineering Expert Talk 2026 introduced first-year students to the scope of a mechanical engineering career. Dr. Anand Parey stressed core fundamentals, CAD, manufacturing skills, Industry 4.0 technologies and soft skills, and encouraged a \u201cLearn \u2192 Build \u2192 Launch\u201d mindset.',
      spk:[['Dr. Anand Parey','Guest speaker']],
      themes:['Career scope','Core fundamentals','CAD','Manufacturing skills','Industry 4.0','Soft skills','M.Tech','GATE','Ph.D.','MBA']
    },
    'stellar-talk-2025': {
      chip:'Alumni talk', when:'15 October 2025',
      title:'Stellar Talk',
      org:'Organized by the Department of Mechanical Engineering, MITS Gwalior',
      desc:'Stellar Talks offered career guidance through alumni interaction. ISRO Scientist Rishabh Gupta shared his journey, challenges and achievements, stressing dedication, technical competence and lifelong learning.',
      spk:[['Rishabh Gupta','Scientist, ISRO']],
      themes:['Core mechanical careers','Internships','Industrial exposure','Skill enhancement','Higher education','GATE',"ISRO's selection process"]
    },
    'maargdarshan-2025': {
      chip:'Mentorship', when:'23 January 2025',
      title:'Maargdarshan',
      org:'Alumni mentorship session',
      desc:'Maargdarshan was an alumni mentorship session guiding students toward academic excellence and professional success. The speakers gave students practical guidance, motivation and clarity about post-graduation opportunities.',
      spk:[['Anil Kumar Choudhary','M.Tech, IISc Bengaluru \u2014 stressed research orientation, analytical thinking and continuous learning'],
           ['Kusum Sahu','VECV, Bhopal \u2014 emphasized professionalism, technical competence and adaptability']],
      themes:['Research orientation','Analytical thinking','Continuous learning','Professionalism','Technical competence','Adaptability','Post-graduation opportunities']
    }
  };
  var ov = document.getElementById('evOverlay'), lastFocus = null;
  function esc(s){ var d=document.createElement('div'); d.textContent=s; return d.innerHTML; }
  var curId=null, curIdx=0;
  function showPhoto(){
    var list=PHOTOS[curId]||[], w=document.getElementById('evPhoto');
    if(!list.length){ w.classList.remove('has'); return; }
    w.classList.add('has');
    curIdx=(curIdx+list.length)%list.length;
    var im=document.getElementById('evImg'); im.src=list[curIdx]; im.alt=EVENTS[curId].title+' \u2014 photo '+(curIdx+1);
    document.getElementById('evCount').textContent=(curIdx+1)+' / '+list.length;
    var multi=list.length>1;
    document.getElementById('evPrev').style.display=multi?'':'none';
    document.getElementById('evNext').style.display=multi?'':'none';
  }
  function openEvent(id, idx){
    var e = EVENTS[id]; if(!e) return;
    curId=id; curIdx=idx||0; showPhoto();
    lastFocus = document.activeElement;
    document.getElementById('evChip').textContent = e.chip;
    document.getElementById('evWhen').textContent = e.when;
    document.getElementById('evTitle').textContent = e.title;
    document.getElementById('evOrg').textContent = e.org;
    document.getElementById('evDesc').textContent = e.desc;
    document.getElementById('evSpkHead').textContent = e.spk.length > 1 ? 'Speakers' : 'Speaker';
    document.getElementById('evSpk').innerHTML = e.spk.map(function(s){ return '<li>'+esc(s[0])+'<small>'+esc(s[1])+'</small></li>'; }).join('');
    document.getElementById('evThemes').innerHTML = e.themes.map(function(t){ return '<span>'+esc(t)+'</span>'; }).join('');
    ov.classList.add('show'); ov.setAttribute('aria-hidden','false');
    document.getElementById('evClose').focus();
  }
  function closeEvent(){
    ov.classList.remove('show'); ov.setAttribute('aria-hidden','true');
    if(lastFocus && lastFocus.focus) lastFocus.focus();
  }
  document.addEventListener('click', function(e){
    var t = e.target.closest('[data-open-event]');
    if(t){ var ph=t.getAttribute('data-photo'); openEvent(t.getAttribute('data-open-event'), ph===null?0:parseInt(ph,10)); return; }
    var c = e.target.closest('.ev-card[data-event]');
    if(c){ openEvent(c.getAttribute('data-event')); }
  });
  document.getElementById('evClose').addEventListener('click', closeEvent);
  document.getElementById('evPrev').addEventListener('click', function(){ curIdx--; showPhoto(); });
  document.getElementById('evNext').addEventListener('click', function(){ curIdx++; showPhoto(); });
  document.querySelectorAll('button.gph[data-photo]').forEach(function(b){
    var l=PHOTOS[b.getAttribute('data-open-event')]; var n=parseInt(b.getAttribute('data-photo'),10);
    if(l&&l[n]) b.style.backgroundImage='url('+l[n]+')';
  });
  ov.addEventListener('click', function(e){ if(e.target === ov) closeEvent(); });
  document.addEventListener('keydown', function(e){ if(!ov.classList.contains('show')) return;
    if(e.key === 'Escape') closeEvent();
    else if(e.key === 'ArrowLeft'){ curIdx--; showPhoto(); }
    else if(e.key === 'ArrowRight'){ curIdx++; showPhoto(); }
  });
})();

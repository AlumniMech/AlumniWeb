  function setPage(name){
    document.querySelectorAll('.page').forEach(function(p){ p.classList.toggle('active', p.dataset.page === name); });
    document.querySelectorAll('#tabs button').forEach(function(b){ b.classList.toggle('active', b.dataset.page === name); });
    document.getElementById('tabs').classList.remove('open');
    window.scrollTo({top:0, behavior:'instant'});
  }
  document.getElementById('tabs').addEventListener('click', function(e){
    var btn = e.target.closest('button[data-page]');
    if(!btn) return;
    setPage(btn.dataset.page);
  });
  document.getElementById('hamburger').addEventListener('click', function(){
    document.getElementById('tabs').classList.toggle('open');
  });

  // Mock-site notice
  var overlay = document.getElementById('mockOverlay');
  function closeMockNotice(){ overlay.classList.remove('show'); }
  window.addEventListener('load', function(){ overlay.classList.add('show'); });
  document.getElementById('mockDismiss').addEventListener('click', closeMockNotice);
  overlay.addEventListener('click', function(e){ if(e.target === overlay) closeMockNotice(); });
  document.addEventListener('keydown', function(e){ if(e.key === 'Escape') closeMockNotice(); });

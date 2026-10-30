(function(){
  document.querySelectorAll('.photo img').forEach(function(img){
    function hide(){ img.style.display='none'; }
    if (img.complete && img.naturalWidth === 0) hide();
    img.addEventListener('error', hide);
  });
  var yr = document.getElementById('yr'); if (yr) yr.textContent = new Date().getFullYear();
  var root = document.documentElement, tbtn = document.getElementById('theme-btn');
  function current(){ var t = root.getAttribute('data-theme'); if (t) return t; return window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'; }
  function label(){ tbtn.setAttribute('aria-label', current() === 'light' ? 'Switch to dark mode' : 'Switch to light mode'); }
  if (tbtn) {
    label();
    tbtn.addEventListener('click', function(){
      var next = current() === 'light' ? 'dark' : 'light';
      root.setAttribute('data-theme', next);
      try { localStorage.setItem('engymo-theme', next); } catch (e) {}
      label();
    });
  }
  var mbtn = document.getElementById('menu-btn'), menu = document.getElementById('mobile-menu'), micon = document.getElementById('menu-icon');
  if (mbtn && menu) {
    var setMenu = function(open){
      menu.hidden = !open;
      mbtn.setAttribute('aria-expanded', open ? 'true' : 'false');
      mbtn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
      micon.setAttribute('d', open ? 'M6 6l12 12M18 6L6 18' : 'M4 7h16M4 12h16M4 17h10');
    };
    mbtn.addEventListener('click', function(){ setMenu(menu.hidden); });
    menu.addEventListener('click', function(e){ if (e.target.closest('a')) setMenu(false); });
    document.addEventListener('keydown', function(e){ if (e.key === 'Escape' && !menu.hidden) { setMenu(false); mbtn.focus(); } });
  }
  var bar = document.querySelector('.mobile-cta');
  if (bar && 'IntersectionObserver' in window) {
    var seen = {};
    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(en){ seen[en.target.id] = en.isIntersecting; });
      var away = !!seen['hero-ctas'];
      bar.classList.toggle('is-away', away);
      var wa = document.getElementById('wa-float'); if (wa) wa.classList.toggle('low', away);
    }, {threshold: 0});
    var h = document.getElementById('hero-ctas'); if (h) io.observe(h);
  }
})();

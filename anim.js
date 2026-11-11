// Animaciones de la web (motion graphics): entrada escalonada, aparición al hacer scroll, contadores,
// inclinación 3D de tarjetas con el ratón y parallax suave del hero. ?t=ms congela en ese instante (vista previa).
(function(){
  var T=new URLSearchParams(location.search).get('t');
  var reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
  var els=[].slice.call(document.querySelectorAll('.w > *, .w .datos > div, .pol, .w a.card, .w .item'));
  var vh=innerHeight;
  els.forEach(function(e,i){e.classList.add('ent');
    var top=e.getBoundingClientRect().top;
    if(T!==null||top<vh){e.style.animationDelay=(Math.min(i,8)*90)+'ms'}else{e.style.animationPlayState='paused';e.dataset.espera=1}});
  if('IntersectionObserver' in window){var io=new IntersectionObserver(function(es){es.forEach(function(x){if(x.isIntersecting){x.target.style.animationPlayState='running';io.unobserve(x.target)}})},{rootMargin:'0px 0px -8% 0px'});
    els.forEach(function(e){if(e.dataset.espera)io.observe(e)})}
  else els.forEach(function(e){e.style.animationPlayState='running'});

  // Modo grabación: reloj REC y cabezal de la línea de tiempo
  var reloj=document.getElementById('reloj'),lin=document.querySelector('.linea');
  function hms(ms){var s=Math.floor(ms/1000);return '00:'+String(Math.floor(s/60)).padStart(2,'0')+':'+String(s%60).padStart(2,'0')}
  function cabezal(p){if(lin)lin.style.setProperty('--p',Math.min(Math.max(p,0),1))}
  function cuenta(p){document.querySelectorAll('[data-n]').forEach(function(b){
    var n=parseFloat(b.dataset.n),d=b.dataset.d||0,v=n*(1-Math.pow(1-Math.min(Math.max(p,0),1),3));
    b.textContent=(b.dataset.pre||'')+v.toFixed(d).replace('.',',')+(b.dataset.suf||'')})}
  if(T!==null){var t=+T;document.getAnimations().forEach(function(a){a.pause();a.currentTime=t});cuenta((t-500)/1200);if(reloj)reloj.textContent=hms(t);cabezal(.08+t/12000);return}
  if(reloj){var r0=performance.now();setInterval(function(){reloj.textContent=hms(performance.now()-r0)},250)}
  cabezal(.08);addEventListener('scroll',function(){cabezal(.08+scrollY/Math.max(1,document.body.scrollHeight-innerHeight)*.9)},{passive:true});
  var t0=performance.now();(function f(){var p=(performance.now()-t0-500)/1200;cuenta(p);if(p<1)requestAnimationFrame(f)})();
  if(reduce)return;
  // Inclinación 3D de tarjetas (solo con ratón)
  if(matchMedia('(hover: hover)').matches){
    document.querySelectorAll('a.card').forEach(function(c){
      c.addEventListener('mousemove',function(e){var r=c.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;
        c.style.transform='perspective(700px) rotateY('+(x*8)+'deg) rotateX('+(-y*8)+'deg) translateY(-3px)'});
      c.addEventListener('mouseleave',function(){c.style.transform=''})})}
  // Parallax suave del hero
  var est=document.querySelectorAll('.hero .estrella'),hero=document.querySelector('.hero');
  if(hero)addEventListener('scroll',function(){var y=scrollY;if(y>innerHeight)return;
    est.forEach(function(s,i){s.style.translate='0 '+(y*(i?-.15:.25))+'px'});
    hero.style.setProperty('--py',(y*.12)+'px')},{passive:true});
})();

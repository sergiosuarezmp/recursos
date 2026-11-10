// Animaciones de la web: entrada escalonada, contadores y latido. ?t=ms congela en ese instante (para grabar la vista previa).
(function(){
  var T=new URLSearchParams(location.search).get('t');
  var els=document.querySelectorAll('.w > *, .w .datos > div');
  els.forEach(function(e,i){e.classList.add('ent');e.style.animationDelay=(i*90)+'ms'});
  function cuenta(p){document.querySelectorAll('[data-n]').forEach(function(b){
    var n=parseFloat(b.dataset.n),d=b.dataset.d||0,v=n*(1-Math.pow(1-Math.min(p,1),3));
    b.textContent=(b.dataset.pre||'')+v.toFixed(d).replace('.',',')+(b.dataset.suf||'')})}
  if(T!==null){var t=+T;document.getAnimations().forEach(function(a){a.pause();a.currentTime=t});cuenta((t-500)/1200);return}
  var t0=performance.now();(function f(){var p=(performance.now()-t0-500)/1200;cuenta(p);if(p<1)requestAnimationFrame(f)})();
})();

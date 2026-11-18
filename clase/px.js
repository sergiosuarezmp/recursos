/* Píxel de Meta (Web Sergio) con consentimiento de cookies (RGPD). 💻 Capi · Mac */
(function(){
var ID="1769613007449775",K="cookies-ok";
function carga(){if(window.fbq)return;!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init',ID);fbq('track','PageView');(window._pxq||[]).forEach(function(a){fbq.apply(null,a)});window._pxq=[]}
window.px=function(){var a=[].slice.call(arguments);if(window.fbq)fbq.apply(null,a);else{window._pxq=window._pxq||[];window._pxq.push(a)}};
var v=null;try{v=localStorage.getItem(K)}catch(e){}
if(v==="1"){carga();return}if(v==="0")return;
var d=document.createElement("div");d.style.cssText="position:fixed;left:12px;right:12px;bottom:12px;z-index:9999;background:#2C2F14;color:#fff;border-radius:14px;padding:14px 16px;font:14px/1.4 -apple-system,Arial,sans-serif;box-shadow:0 8px 30px rgba(0,0,0,.3);max-width:560px;margin:0 auto";
d.innerHTML='Uso cookies para medir mis anuncios. ¿Las aceptas? <span style="display:inline-flex;gap:8px;margin-left:6px"><button id="ck-si" style="background:#C8D27E;color:#2C2F14;border:0;border-radius:8px;padding:6px 12px;font-weight:700;cursor:pointer">Aceptar</button><button id="ck-no" style="background:transparent;color:#fff;border:1px solid #fff;border-radius:8px;padding:6px 12px;cursor:pointer">Rechazar</button></span>';
function fin(x){try{localStorage.setItem(K,x)}catch(e){}d.remove();if(x==="1")carga()}
document.addEventListener("DOMContentLoaded",function(){document.body.appendChild(d);d.querySelector("#ck-si").onclick=function(){fin("1")};d.querySelector("#ck-no").onclick=function(){fin("0")}});
})();

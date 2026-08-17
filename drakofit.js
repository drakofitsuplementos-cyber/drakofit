/* ============================================================
   DRAKOFIT · BUNDLE COMPLETO (se carga con 1 línea en el pie)
   Incluye: barra Dónde estamos/Instagram, efecto scroll, solicitar
   stock, carrito, despacho, cuotas, envío progresivo, confianza,
   barra fija, voucher, cronómetro y reseñas. WhatsApp 11 7638-7287.
   ============================================================ */
(function(){var __c="\n    #barra-extra-nova {\n      display: flex !important;\n      align-items: stretch;\n      background: #141414;\n      border-bottom: 2px solid #d4af37;\n      font-family: 'Oswald','Arial Narrow',sans-serif;\n      text-transform: uppercase;\n      letter-spacing: .06em;\n      font-size: 13px;\n      font-weight: 600;\n      width: 100%;\n    }\n\n    #barra-extra-nova a {\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      gap: 9px;\n      padding: 11px 16px;\n      flex: 1;\n      text-decoration: none;\n      color: #e8e8e8;\n      border-right: 1px solid rgba(212,175,55,.2);\n      transition: color .2s ease, background-color .2s ease;\n    }\n\n    #barra-extra-nova a:last-child { border-right: none; }\n    #barra-extra-nova a:hover { color: #d4af37; background: rgba(212,175,55,.06); }\n\n    #barra-extra-nova svg { width: 20px; height: 20px; flex: 0 0 auto; }\n\n    @media (max-width: 680px) {\n      #barra-extra-nova { font-size: 11px; letter-spacing: .03em; }\n      #barra-extra-nova a { padding: 9px 10px; gap: 6px; }\n      #barra-extra-nova svg { width: 17px; height: 17px; }\n    }\n  \n\n#cartel-envio-gratis {\n  background-color: #1f6f3f; color: #fff; padding: 12px 18px; border-radius: 8px;\n  margin: 12px 0; font-size: 14px; font-weight: bold; text-align: center; display: none;\n}\n#cartel-descuento {\n  background-color: #2d7a3a; color: #fff; padding: 14px 18px; border-radius: 8px;\n  margin: 12px 0; font-size: 14px; text-align: center; display: none;\n}\n#cartel-descuento .precio-final { font-size: 22px; font-weight: bold; }\n\n/* Despacho dentro del carrito */\n#nf-cart-despacho {\n  border: 1px solid #d4af37; background: rgba(212,175,55,.10); color: #e8e8e8;\n  border-radius: 8px; margin: 12px 0; padding: 10px 14px;\n  font-family: 'Oswald','Arial Narrow',sans-serif; text-align: center; font-size: 13px; display: none;\n}\n#nf-cart-despacho.nf-finde { border-color: #800020; background: rgba(128,0,32,.12); }\n#nf-cart-despacho .nf-hoy { color: #36d36a; font-weight: 700; text-transform: uppercase; }\n#nf-cart-despacho .nf-prep { color: #d4af37; font-weight: 700; text-transform: uppercase; }\n#nf-cart-despacho .nf-envio { color: #36d36a; font-weight: 700; text-transform: uppercase; }\n#nf-cart-despacho .nf-manana { color: #d4af37; font-weight: 700; text-transform: uppercase; }\n#nf-cart-despacho .nf-reloj { display: inline-flex; align-items: center; gap: 5px; margin-top: 6px; justify-content: center; }\n#nf-cart-despacho .nf-cap {\n  font-family: 'Oswald', monospace; background: #d4af37; color: #141414; font-weight: 700;\n  font-size: 15px; padding: 3px 7px; border-radius: 5px; min-width: 26px; text-align: center; display: inline-block;\n}\n#nf-cart-despacho .nf-sep { color: #d4af37; font-weight: 700; font-size: 15px; }\n#nf-cart-despacho .nf-blink { animation: nfcblink 1s steps(2,start) infinite; }\n@keyframes nfcblink { 50%{opacity:.4} }\n\n/* Pago Nube: total tachado gris + precio verde + label dorado */\n.js-cart-total.nf-total-tachado {\n  text-decoration: line-through !important; color: #9a9a9a !important; opacity: .7 !important; font-size: 16px !important;\n}\n.js-payment-discount-price-cart.nf-pn-precio {\n  color: #36d36a !important; font-weight: 800 !important; font-size: 22px !important;\n}\n.js-payment-discount-name-cart.nf-pn-label { color: #d4af37 !important; font-weight: 700 !important; }\n\n\n#nf-despacho-bar {\n  width: 100%;\n  background: #141414;\n  color: #f2f2f2;\n  font-family: 'Oswald','Arial Narrow',sans-serif;\n  text-align: center;\n  padding: 10px 14px;\n  border-bottom: 2px solid #d4af37;\n  display: none;\n  box-sizing: border-box;\n}\n#nf-despacho-bar .nf-wrap {\n  display: inline-flex; align-items: center; justify-content: center;\n  gap: 14px; flex-wrap: wrap; max-width: 1100px;\n}\n#nf-despacho-bar .nf-txt {\n  text-transform: uppercase; letter-spacing: .06em; font-size: 14px;\n  display: inline-flex; align-items: center; gap: 8px; line-height: 1.35;\n}\n#nf-despacho-bar .nf-ico { color: #d4af37; font-size: 20px; line-height: 1; }\n#nf-despacho-bar .nf-hoy { color: #36d36a; font-weight: 700; }\n#nf-despacho-bar .nf-manana { color: #d4af37; font-weight: 700; }\n#nf-despacho-bar .nf-reloj { display: inline-flex; align-items: center; gap: 6px; }\n#nf-despacho-bar .nf-cap {\n  font-family: 'Oswald', monospace; background: #d4af37; color: #141414;\n  font-weight: 700; font-size: 16px; padding: 4px 8px; border-radius: 6px;\n  min-width: 28px; text-align: center; display: inline-block;\n}\n#nf-despacho-bar .nf-sep { color: #d4af37; font-weight: 700; font-size: 16px; }\n#nf-despacho-bar.nf-finde { border-bottom-color: #800020; }\n#nf-despacho-bar .nf-pulse { animation: nfpulse 1.6s ease-in-out infinite; display:inline-block; }\n#nf-despacho-bar .nf-blink { animation: nfblink 1s steps(2,start) infinite; }\n@keyframes nfpulse { 0%,100%{transform:scale(1);opacity:1} 50%{transform:scale(1.18);opacity:.7} }\n@keyframes nfblink { 50%{opacity:.4} }\n@media (max-width:680px){\n  #nf-despacho-bar { padding: 8px 12px; }\n  #nf-despacho-bar .nf-wrap { gap: 8px; }\n  #nf-despacho-bar .nf-txt { font-size: 12px; letter-spacing: .03em; display: block; }\n  #nf-despacho-bar .nf-ico { font-size: 16px; vertical-align: -2px; margin-right: 4px; }\n  #nf-despacho-bar .nf-cap, #nf-despacho-bar .nf-sep { font-size: 14px; }\n  #nf-despacho-bar .nf-cap { min-width: 24px; padding: 3px 6px; }\n}\n\n\n#nf-cuotas{\n  display:none; margin:12px 0; padding:13px 16px; border-radius:10px;\n  background:linear-gradient(135deg, rgba(128,0,32,.40) 0%, rgba(20,20,20,.92) 60%);\n  border:1px solid #d4af37; box-shadow:0 0 16px rgba(212,175,55,.14);\n  font-family:'Oswald','Arial Narrow',sans-serif;\n}\n#nf-cuotas .nfc-row{ display:flex; align-items:center; justify-content:center; gap:13px; flex-wrap:wrap; }\n#nf-cuotas .nfc-ico{ width:32px; height:32px; flex:0 0 auto; }\n#nf-cuotas .nfc-txt{ text-align:left; line-height:1.15; }\n#nf-cuotas .nfc-label{\n  font-size:12px; letter-spacing:.07em; text-transform:uppercase; color:#e8e8e8; margin-bottom:2px;\n}\n#nf-cuotas .nfc-label b{ color:#d4af37; font-weight:700; }\n#nf-cuotas .nfc-badge{\n  display:inline-block; font-size:10px; letter-spacing:.05em; text-transform:uppercase; font-weight:700;\n  color:#06331b; background:#36d36a; border-radius:5px; padding:2px 7px; margin-left:5px; vertical-align:middle;\n}\n#nf-cuotas .nfc-monto{ font-size:23px; font-weight:700; color:#d4af37; line-height:1; }\n#nf-cuotas .nfc-monto span{ font-size:13px; color:#c0c0c0; font-weight:600; }\n\n\n#cartel-envio-gratis{ display:none !important; } /* oculta el cartel est\u00e1tico viejo */\n\n#nf-envio-prog{\n  display:none; margin:12px 0; padding:12px 15px; border-radius:10px;\n  background:#141414; border:1px solid #d4af37;\n  font-family:'Oswald','Arial Narrow',sans-serif;\n}\n#nf-envio-prog.nf-ok{ border-color:#36d36a; background:rgba(54,211,106,.10); }\n#nf-envio-prog .nfe-txt{\n  font-size:13px; letter-spacing:.03em; text-transform:uppercase;\n  color:#e8e8e8; text-align:center; margin-bottom:8px;\n}\n#nf-envio-prog .nfe-txt b{ color:#d4af37; }\n#nf-envio-prog.nf-ok .nfe-txt{ color:#36d36a; font-weight:700; }\n#nf-envio-prog .nfe-track{ height:9px; border-radius:6px; background:rgba(255,255,255,.08); overflow:hidden; }\n#nf-envio-prog .nfe-fill{ height:100%; width:0; border-radius:6px;\n  background:linear-gradient(90deg,#800020,#d4af37); transition:width .4s ease; }\n#nf-envio-prog.nf-ok .nfe-fill{ background:linear-gradient(90deg,#1f6f3f,#36d36a); }\n\n\n#nf-trust{\n  display:none; margin:12px 0; padding:11px 14px; border-radius:10px;\n  background:linear-gradient(135deg, rgba(128,0,32,.30) 0%, rgba(20,20,20,.92) 60%);\n  border:1px solid rgba(212,175,55,.4);\n  font-family:'Oswald','Arial Narrow',sans-serif;\n}\n#nf-trust ul{ list-style:none; margin:0; padding:0; display:flex; flex-wrap:wrap; gap:8px 16px; justify-content:center; }\n#nf-trust li{ display:flex; align-items:center; gap:6px; font-size:12px; letter-spacing:.03em; text-transform:uppercase; color:#e8e8e8; }\n#nf-trust li svg{ width:15px; height:15px; flex:0 0 auto; }\n\n\n#nf-sticky{\n  position:fixed; left:0; right:0; bottom:0; z-index:99990;\n  display:none; align-items:center; gap:10px;\n  background:#141414; border-top:2px solid #d4af37;\n  padding:9px 12px; padding-right:74px;   /* deja lugar al bot\u00f3n flotante de WhatsApp */\n  box-shadow:0 -6px 20px rgba(0,0,0,.55);\n  font-family:'Oswald','Arial Narrow',sans-serif; box-sizing:border-box;\n}\n#nf-sticky .nfs-info{ flex:1 1 auto; min-width:0; line-height:1.12; }\n#nf-sticky .nfs-lbl{ font-size:10px; letter-spacing:.07em; text-transform:uppercase; color:#c0c0c0; }\n#nf-sticky .nfs-price{ font-size:19px; font-weight:700; color:#d4af37; }\n#nf-sticky .nfs-old{ font-size:12px; color:#8a8a8a; text-decoration:line-through; margin-left:6px; font-weight:400; }\n#nf-sticky .nfs-btn{\n  flex:0 0 auto; border:none; cursor:pointer;\n  background:#C9A227; color:#fff;\n  font-family:'Oswald','Arial Narrow',sans-serif; font-weight:700;\n  text-transform:uppercase; letter-spacing:.04em; font-size:14px;\n  padding:12px 18px; border-radius:8px;\n}\n#nf-sticky.nfs-nostock{ border-top-color:#36d36a; }\n#nf-sticky.nfs-nostock .nfs-btn{ background:#25D366; border:2px solid #d4af37; }\n#nf-sticky.nfs-nostock .nfs-lbl{ color:#36d36a; font-weight:700; }\n@media (min-width:769px){ #nf-sticky{ display:none !important; } }\n\n\n#drk-trust2{max-width:1080px;margin:26px auto;padding:0 12px;box-sizing:border-box;}\n#drk-trust2 .drk-track{display:grid;grid-template-columns:repeat(4,1fr);gap:16px;}\n#drk-trust2 .card{position:relative;overflow:hidden;background:linear-gradient(180deg,#161313,#0f0f0f);border:1px solid rgba(212,175,55,.35);border-radius:16px;padding:26px 18px;text-align:center;display:flex;flex-direction:column;align-items:center;transition:transform .25s ease,box-shadow .25s ease,border-color .25s ease;}\n#drk-trust2 .card:hover{transform:translateY(-4px);border-color:rgba(212,175,55,.75);box-shadow:0 10px 28px rgba(0,0,0,.5);}\n#drk-trust2 .ico{width:60px;height:60px;border-radius:50%;margin:0 auto 14px;display:flex;align-items:center;justify-content:center;box-shadow:0 0 18px rgba(0,0,0,.4);flex:0 0 auto;}\n#drk-trust2 .ico svg{width:29px;height:29px;}\n#drk-trust2 .ico.g{background:radial-gradient(circle at 32% 30%,#2f7d4f,#1c5233);}\n#drk-trust2 .ico.gold{background:radial-gradient(circle at 32% 30%,#f6dd86,#b8901f);}\n#drk-trust2 .ico.b{background:radial-gradient(circle at 32% 30%,#a3324f,#5c0d23);}\n#drk-trust2 .txt{min-width:0;}\n#drk-trust2 .t{font-family:'Oswald','Arial Narrow',sans-serif;text-transform:uppercase;letter-spacing:.03em;font-weight:700;font-size:18px;color:#fff;margin:0 0 3px;line-height:1.1;}\n#drk-trust2 .t b{color:#d4af37;}\n#drk-trust2 .s{color:#b9b9b9;font-size:12.5px;text-transform:uppercase;letter-spacing:.04em;line-height:1.2;}\n#drk-trust2 .card.shine{border-color:rgba(212,175,55,.7);box-shadow:0 0 22px rgba(212,175,55,.15);}\n#drk-trust2 .card.shine::after{content:\"\";position:absolute;top:0;left:-60%;width:45%;height:100%;background:linear-gradient(100deg,transparent 0%,rgba(255,255,255,.14) 50%,transparent 100%);transform:skewX(-18deg);animation:drkShine 3.4s ease-in-out infinite;}\n@keyframes drkShine{0%{left:-60%}55%,100%{left:130%}}\n#drk-trust2 .drk-dup{display:none;}\n@media(max-width:720px){\n  #drk-trust2{overflow:hidden;padding:0;}\n  #drk-trust2 .drk-track{display:flex;grid-template-columns:none;gap:12px;width:max-content;animation:drkMarquee 26s linear infinite;}\n  #drk-trust2:hover .drk-track{animation-play-state:paused;}\n  #drk-trust2 .card{width:210px;flex:0 0 auto;padding:20px 16px;}\n  #drk-trust2 .ico{width:52px;height:52px;}\n  #drk-trust2 .ico svg{width:25px;height:25px;}\n  #drk-trust2 .drk-dup{display:flex;}\n}\n@keyframes drkMarquee{from{transform:translateX(0)}to{transform:translateX(-50%)}}\n@media(prefers-reduced-motion:reduce){#drk-trust2 .drk-track{animation:none!important;} #drk-trust2 .card.shine::after{animation:none;}}\n\n\n.drk-rev-mini{ display:flex; align-items:center; gap:5px; margin:7px 0 2px; text-decoration:none; }\n.drk-rev-mini .drk-stars{ display:inline-flex; gap:1px; }\n.drk-rev-mini .drk-stars svg{ width:13px; height:13px; }\n.drk-rev-mini .p{ font-family:'Oswald','Arial Narrow',sans-serif; font-weight:700; color:#d4af37; font-size:12px; }\n.drk-rev-mini .c{ color:#9a9a9a; font-size:11px; }\n.drk-rev-sum{ display:inline-flex; align-items:center; gap:9px; cursor:pointer; margin:2px 0 14px; text-decoration:none; }\n.drk-stars{ display:inline-flex; gap:2px; vertical-align:middle; }\n.drk-stars svg{ width:17px; height:17px; }\n.drk-rev-sum .prom{ font-family:'Oswald','Arial Narrow',sans-serif; font-weight:700; color:#d4af37; font-size:16px; }\n.drk-rev-sum .cnt{ color:#b9b9b9; font-size:13px; text-decoration:underline; }\n.drk-rev{ margin:26px 0; padding:24px; border-radius:14px; background:linear-gradient(180deg,#161313,#111); border:1px solid rgba(212,175,55,.2); font-family:-apple-system,'Segoe UI',Roboto,sans-serif; }\n.drk-rev__summary{ display:flex; gap:26px; align-items:center; flex-wrap:wrap; margin-bottom:18px; }\n.drk-rev__score{ text-align:center; }\n.drk-rev__num{ font-family:'Oswald','Arial Narrow',sans-serif; font-size:52px; font-weight:700; color:#d4af37; line-height:1; }\n.drk-rev__sub{ font-size:11px; color:#b9b9b9; text-transform:uppercase; letter-spacing:.05em; margin-top:5px; }\n.drk-rev__bars{ flex:1; min-width:220px; }\n.drk-rev__bar{ display:flex; align-items:center; gap:9px; margin:3px 0; }\n.drk-rev__bar .lvl{ color:#b9b9b9; font-size:12px; width:10px; font-family:'Oswald','Arial Narrow',sans-serif; }\n.drk-rev__bar .track{ flex:1; height:7px; border-radius:5px; background:rgba(255,255,255,.08); overflow:hidden; }\n.drk-rev__bar .fill{ display:block; height:100%; background:#d4af37; border-radius:5px; }\n.drk-rev__bar .pct{ color:#8a8a8a; font-size:11px; width:34px; text-align:right; }\n.drk-rev__toggle{ display:block; width:100%; margin:6px 0 0; cursor:pointer; background:transparent; border:1px solid #d4af37; color:#d4af37; font-family:'Oswald','Arial Narrow',sans-serif; text-transform:uppercase; letter-spacing:.05em; font-weight:700; font-size:14px; padding:11px; border-radius:9px; transition:background .2s ease; }\n.drk-rev__toggle:hover{ background:rgba(212,175,55,.1); }\n.drk-rev__list{ display:none; margin-top:16px; grid-template-columns:1fr 1fr; gap:12px; }\n.drk-rev.drk-open .drk-rev__list{ display:grid; }\n.drk-rev__card{ padding:14px 16px; border-radius:11px; background:#141414; border:1px solid rgba(212,175,55,.18); }\n.drk-rev__who{ font-family:'Oswald','Arial Narrow',sans-serif; font-weight:600; letter-spacing:.03em; color:#fff; font-size:15px; display:inline-flex; align-items:center; gap:8px; }\n.drk-rev__ver{ font-size:9px; text-transform:uppercase; letter-spacing:.05em; color:#06331b; background:#36d36a; border-radius:4px; padding:2px 6px; font-weight:700; }\n.drk-rev__meta{ display:flex; align-items:center; gap:8px; margin:6px 0; }\n.drk-stars.sm svg{ width:14px; height:14px; }\n.drk-rev__date{ color:#8a8a8a; font-size:11px; }\n.drk-rev__txt{ color:#d8d8d8; font-size:14px; line-height:1.5; margin:0; }\n@media(max-width:600px){ .drk-rev__list{ grid-template-columns:1fr; } }\n";try{var s=document.createElement('style');s.appendChild(document.createTextNode(__c));(document.head||document.documentElement).appendChild(s);}catch(e){}})();
(function(){var __h="<div id=\"barra-extra-nova\" style=\"display:none;\">\n\n  \n\n  <a href=\"https://maps.google.com/?q=Jose+Bonifacio+256,+Caballito,+Buenos+Aires,+Argentina\" target=\"_blank\" rel=\"noopener\">\n    <svg viewBox=\"0 0 24 24\"><defs><clipPath id=\"pinClip\"><path d=\"M12 2C7.9 2 4.5 5.4 4.5 9.5c0 5 7.5 12.5 7.5 12.5s7.5-7.5 7.5-12.5C19.5 5.4 16.1 2 12 2z\"/></clipPath></defs><g clip-path=\"url(#pinClip)\"><rect x=\"0\" y=\"0\" width=\"12\" height=\"10\" fill=\"#EA4335\"/><rect x=\"12\" y=\"0\" width=\"12\" height=\"10\" fill=\"#4285F4\"/><rect x=\"0\" y=\"10\" width=\"10\" height=\"14\" fill=\"#FBBC04\"/><rect x=\"10\" y=\"10\" width=\"14\" height=\"14\" fill=\"#34A853\"/><polygon points=\"24,7 24,24 6,24\" fill=\"#34A853\"/></g><circle cx=\"12\" cy=\"9.3\" r=\"3\" fill=\"#fff\"/></svg>\n    D\u00f3nde estamos\n  </a>\n\n  <a href=\"https://www.instagram.com/drakofitsuplementos\" target=\"_blank\" rel=\"noopener\">\n    <svg viewBox=\"0 0 24 24\"><defs><radialGradient id=\"igGrad\" cx=\"30%\" cy=\"107%\" r=\"150%\"><stop offset=\"0%\" stop-color=\"#fdf497\"/><stop offset=\"5%\" stop-color=\"#fdf497\"/><stop offset=\"45%\" stop-color=\"#fd5949\"/><stop offset=\"60%\" stop-color=\"#d6249f\"/><stop offset=\"90%\" stop-color=\"#285AEB\"/></radialGradient></defs><rect x=\"2\" y=\"2\" width=\"20\" height=\"20\" rx=\"6\" fill=\"url(#igGrad)\"/><rect x=\"5.2\" y=\"5.2\" width=\"13.6\" height=\"13.6\" rx=\"4.4\" fill=\"none\" stroke=\"#fff\" stroke-width=\"2\"/><circle cx=\"12\" cy=\"12\" r=\"3.4\" fill=\"none\" stroke=\"#fff\" stroke-width=\"2\"/><circle cx=\"16.6\" cy=\"7.4\" r=\"1.15\" fill=\"#fff\"/></svg>\n    Instagram\n  </a>\n\n</div>\n\n\n\n\n\n\n<div id=\"cartel-envio-gratis\">\u2705 \u00a1Env\u00edo gratis desbloqueado! (compras desde $120.000)</div>\n\n<div id=\"cartel-descuento\">\n  \u2705 Pagando con Transferencia o Efectivo obten\u00e9s un <strong>15% OFF</strong><br>\n  <span style=\"font-size: 13px;\">En el paso de pago tu precio final ser\u00e1 </span>\n  <span class=\"precio-final\" id=\"precio-con-descuento\"></span>\n</div>\n\n<div id=\"nf-cart-despacho\"></div>\n\n\n\n\n\n\n<div id=\"nf-despacho-bar\"></div>";function inj(){try{var d=document.createElement('div');d.innerHTML=__h;while(d.firstChild){document.body.appendChild(d.firstChild);}}catch(e){}}if(document.body){inj();}else{document.addEventListener('DOMContentLoaded',inj);}})();

window.DRK_WSP = "5491176387287";

window.addEventListener("scroll", function () {
  if (window.scrollY > 50) {
    document.body.classList.add("scrolled");
  } else {
    document.body.classList.remove("scrolled");
  }
});


document.addEventListener("DOMContentLoaded", function () {

  /* ========= OBTENER SABOR REAL ========= */
  function obtenerSaborActual() {
    var sabor = "No especificado";

    var selectVariante = document.querySelector(
      'select[name="variant"], select.js-variant-select, select[data-variant-id]'
    );
    if (selectVariante && selectVariante.selectedIndex >= 0) {
      var texto = selectVariante.options[selectVariante.selectedIndex].text.trim();
      if (texto) return texto;
    }

    var varianteActiva = document.querySelector(
      ".js-insta-variant.active, .js-insta-variant.selected, .variant-option.active, .variant-option.selected"
    );
    if (varianteActiva) {
      return (
        varianteActiva.dataset.option ||
        varianteActiva.dataset.value ||
        varianteActiva.innerText.trim()
      );
    }

    return sabor;
  }

  /* ========= BOTON FICHA PRODUCTO ========= */
  function actualizarBotonProducto() {
    var botonAdd = document.querySelector("input.js-addtocart, button.js-addtocart");
    if (botonAdd && botonAdd.closest("#quickshop-form")) botonAdd = null; // dejar el quickshop a su propio script
    if (!botonAdd) return;

    botonAdd.style.backgroundColor = "#C9A227";
    botonAdd.style.borderColor = "#C9A227";
    botonAdd.style.color = "#fff";

    var esSinStock = botonAdd.classList.contains("nostock") || botonAdd.disabled;
    var botonConsulta = document.querySelector(".btn-consultar-stock");

    var producto =
      (document.querySelector("h1") && document.querySelector("h1").innerText.trim()) || "Producto";

    if (esSinStock) {
      botonAdd.style.display = "none";

      if (!botonConsulta) {
        botonConsulta = document.createElement("a");
        botonConsulta.className = "btn btn-consultar-stock btn-block mb-4";
        botonConsulta.innerHTML = '<svg viewBox="0 0 24 24" fill="#fff" style="width:19px;height:19px;flex:0 0 auto;"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.004c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm0 18.15h-.003a8.23 8.23 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.21 8.21 0 0 1-1.26-4.38c0-4.54 3.7-8.23 8.24-8.23a8.2 8.2 0 0 1 5.82 2.41 8.19 8.19 0 0 1 2.41 5.83c0 4.54-3.7 8.23-8.23 8.23zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.25-.64.81-.79.98-.14.16-.29.18-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.13-.14.17-.25.25-.41.08-.16.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.42-.14 0-.31-.02-.47-.02-.16 0-.43.06-.65.31-.22.25-.85.83-.85 2.03 0 1.19.87 2.35.99 2.51.12.16 1.71 2.61 4.15 3.66.58.25 1.03.4 1.38.51.58.18 1.11.16 1.53.1.47-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.06-.11-.22-.17-.47-.29z"/></svg> Solicitar stock';
        botonConsulta.href = "#";

        /* ===== VISUAL DEL BOTON (solo estetica) ===== */
        botonConsulta.style.backgroundColor = "#25D366";
        botonConsulta.style.color = "#ffffff";
        botonConsulta.style.fontFamily = "'Oswald','Arial Narrow',sans-serif";
        botonConsulta.style.fontWeight = "700";
        botonConsulta.style.textTransform = "uppercase";
        botonConsulta.style.letterSpacing = ".05em";
        botonConsulta.style.fontSize = "15px";
        botonConsulta.style.padding = "14px";
        botonConsulta.style.textAlign = "center";
        botonConsulta.style.display = "flex";
        botonConsulta.style.alignItems = "center";
        botonConsulta.style.justifyContent = "center";
        botonConsulta.style.gap = "8px";
        botonConsulta.style.border = "2px solid #d4af37";
        botonConsulta.style.borderRadius = "8px";
        botonConsulta.style.textDecoration = "none";
        botonConsulta.style.marginBottom = "8px";
        botonConsulta.style.boxShadow = "0 0 12px rgba(37,211,102,.45)";

        botonConsulta.addEventListener("click", function (e) {
          e.preventDefault();

          var sabor = obtenerSaborActual();

          var mensaje =
            "Hola! Queria consultar stock del producto:\n\n" +
            producto +
            "\nSabor: " +
            sabor;

          window.location.href =
            "https://wa.me/" + (window.DRK_WSP || "5491176387287") + "?text=" +
              encodeURIComponent(mensaje);
        });

        botonAdd.parentNode.insertBefore(botonConsulta, botonAdd);
      }

      /* ===== CARTELITO EXPLICATIVO (solo si esta sin stock) ===== */
      if (botonConsulta && !document.getElementById("nf-solicitar-info")) {
        var info = document.createElement("div");
        info.id = "nf-solicitar-info";
        info.style.border = "1px solid #800020";
        info.style.background = "rgba(128,0,32,.12)";
        info.style.borderRadius = "8px";
        info.style.padding = "12px 14px";
        info.style.marginBottom = "16px";
        info.style.fontSize = "13px";
        info.style.lineHeight = "1.5";
        info.style.color = "#e8e8e8";
        info.innerHTML =
          '<strong style="color:#d4af37;">&iquest;Sin stock? Lo conseguimos para vos.</strong><br>' +
          'Toc&aacute; <strong>&ldquo;Solicitar stock&rdquo;</strong> y coordinamos por WhatsApp: lo traemos, ' +
          'lo damos de alta y te avisamos apenas est&eacute; disponible.';
        botonConsulta.parentNode.insertBefore(info, botonConsulta.nextSibling);
      }

    } else {
      if (botonConsulta) botonConsulta.remove();
      var infoViejo = document.getElementById("nf-solicitar-info");
      if (infoViejo) infoViejo.remove();
      botonAdd.style.display = "";
    }
  }

  /* ========= EVENTOS VARIANTES ========= */
  document.addEventListener("change", function (e) {
    if (
      e.target.matches(
        'select[name="variant"], select.js-variant-select, select[data-variant-id]'
      )
    ) {
      setTimeout(actualizarBotonProducto, 100);
    }
  });

  document.addEventListener("click", function (e) {
    if (e.target.closest(".js-insta-variant, .variant-option")) {
      setTimeout(actualizarBotonProducto, 100);
    }
  });

  /* ===== correr al cargar + reintentos cortos (sin loops infinitos) ===== */
  actualizarBotonProducto();
  [150, 400, 800, 1500, 2500].forEach(function (t) {
    setTimeout(actualizarBotonProducto, t);
  });
  setInterval(actualizarBotonProducto, 1000);
});


document.addEventListener("DOMContentLoaded", function () {

  function actualizarCartelListado() {

    var labels = document.querySelectorAll(".js-stock-label, .item-stock");

    labels.forEach(function(label) {

      var texto = label.innerText.trim().toLowerCase();

      if (texto === "sin stock" || texto === "agotado") {
        label.style.display = "none";   /* cartelito oculto: dejamos solo el boton de abajo */
      }
    });
  }

  /* correr al cargar + al scrollear + reintentos + intervalo.
     Es idempotente (dataset.consultarActivo), así que no reprocesa. */
  actualizarCartelListado();
  document.addEventListener("scroll", actualizarCartelListado);
  [150, 400, 800, 1500, 2500].forEach(function (t) {
    setTimeout(actualizarCartelListado, t);
  });
  setInterval(actualizarCartelListado, 1000);
});


(function() {
  function moverBarra() {
    var barra = document.getElementById("barra-extra-nova");
    if (!barra) return;

    var header = document.querySelector("header, .site-header, .js-header, .header");

    if (header && header.parentNode) {
      header.parentNode.insertBefore(barra, header.nextSibling);
      barra.style.display = "flex";
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", moverBarra);
  } else {
    moverBarra();
  }
})();


(function () {
  var PISO_ENVIO = 120000;
  var HORA_PEDIDO = 11;
  var HORA_REPARTO = 14;
  var HORA_CIERRE = 21;
  var yaCartel = false, yaDespacho = false;

  function num(txt){ var l=(txt||'').replace(/[^\d.,]/g,'').replace(/\./g,'').replace(',','.'); var n=parseFloat(l); return (!isNaN(n)&&n>0)?n:null; }
  function fmt(n){ return '$'+n.toLocaleString('es-AR',{minimumFractionDigits:2,maximumFractionDigits:2}); }
  function ahoraAR(){ return new Date(new Date().toLocaleString('en-US',{timeZone:'America/Argentina/Buenos_Aires'})); }
  function dd(n){ return (n<10?'0':'')+n; }

  function getSubtotal(){
    var el = document.querySelector('.js-cart-subtotal-price, .js-subtotal-price');
    return el ? num(el.innerText) : null;
  }
  function getTransfer(){
    var el = document.querySelector('.js-payment-discount-price-cart');
    if (el){
      var n2 = num(el.innerText);
      if (n2) return n2;
      var raw = el.getAttribute('data-priceraw-without-shipping') || el.getAttribute('data-priceraw');
      if (raw){ var n = parseFloat(raw); if(!isNaN(n)&&n>0) return n/100; }
    }
    return null;
  }

  function insertarCartel(){
    if (yaCartel) return;
    var cD=document.getElementById('cartel-descuento'), cE=document.getElementById('cartel-envio-gratis');
    if(!cD||!cE) return;
    var ref = document.querySelector('.js-subtotal-price, .js-cart-subtotal-price, .js-cart-total-container');
    if (ref){
      var cont = ref.closest('.js-cart-summary, [class*="cart-summary"], [class*="cart-resume"]') || ref.parentNode;
      if (cont && cont.parentNode){
        cont.parentNode.insertBefore(cD, cont);
        cont.parentNode.insertBefore(cE, cD);
        yaCartel = true;
      }
    }
  }
  function actualizarCartel(){
    var cD=document.getElementById('cartel-descuento'), cE=document.getElementById('cartel-envio-gratis');
    var pe=document.getElementById('precio-con-descuento');
    if(!cD||!pe) return;
    var sub=getSubtotal(), tr=getTransfer();
    if(tr){ pe.innerText=fmt(tr); cD.style.display='block'; } else { cD.style.display='none'; }
    if(cE) cE.style.display=(sub && sub>=PISO_ENVIO)?'block':'none';
  }

  function renderDespacho(bar){
    var a=ahoraAR(), dia=a.getDay(), hora=a.getHours(), min=a.getMinutes(), seg=a.getSeconds();
    var esFinde=(dia===0||dia===6);
    bar.classList.remove('nf-finde');

    if(!esFinde && hora < HORA_PEDIDO){
      var rest=((HORA_PEDIDO-hora)*3600)-(min*60)-seg;
      var h=Math.floor(rest/3600), m=Math.floor((rest%3600)/60), s=rest%60;
      return '&#9201; Ped&iacute; antes de las ' + HORA_PEDIDO + ':00 y <span class="nf-hoy">lo despachamos hoy</span>' +
        '<span class="nf-reloj"><span class="nf-cap">'+dd(h)+'</span><span class="nf-sep">:</span>'+
        '<span class="nf-cap">'+dd(m)+'</span><span class="nf-sep">:</span>'+
        '<span class="nf-cap nf-blink">'+dd(s)+'</span></span>';
    }
    if(!esFinde && hora >= HORA_PEDIDO && hora < HORA_REPARTO){
      return '&#128230; <span class="nf-prep">Estamos preparando los despachos de hoy</span> &middot; las entregas salen desde las 14:00';
    }
    if(!esFinde && hora >= HORA_REPARTO && hora < HORA_CIERRE){
      return '&#128676; <span class="nf-envio">Estamos entregando en AMBA</span> &middot; hoy hasta las 21:00';
    }
    bar.classList.add('nf-finde');
    var prox;
    if(dia===5 && hora>=HORA_PEDIDO) prox='el <span class="nf-manana">lunes</span>';
    else if(dia===6) prox='el <span class="nf-manana">lunes</span>';
    else if(dia===0) prox='el <span class="nf-manana">lunes</span>';
    else prox='<span class="nf-manana">ma&ntilde;ana</span>';
    return '&#128230; Despachamos tu pedido ' + prox + ' &middot; ped&iacute; antes de las 11:00';
  }
  function insertarDespacho(){
    if(yaDespacho) return;
    var bar=document.getElementById('nf-cart-despacho');
    if(!bar) return;
    var ref=document.querySelector('.js-cart-total-container');
    if(ref && ref.parentNode){
      ref.parentNode.insertBefore(bar, ref);
      bar.style.display='block';
      yaDespacho=true;
    }
  }
  function actualizarDespacho(){
    var bar=document.getElementById('nf-cart-despacho');
    if(bar && bar.style.display!=='none') bar.innerHTML=renderDespacho(bar);
  }

  function destacarPagoNube(){
    var total=document.querySelector('.js-cart-total');
    if(total) total.classList.add('nf-total-tachado');
    var precio=document.querySelector('.js-payment-discount-price-cart');
    if(precio) precio.classList.add('nf-pn-precio');
    var label=document.querySelector('.js-payment-discount-name-cart');
    if(label) label.classList.add('nf-pn-label');
  }

  function tick(){
    insertarCartel(); actualizarCartel();
    insertarDespacho(); actualizarDespacho();
    destacarPagoNube();
  }
  document.addEventListener('DOMContentLoaded', tick);
  setInterval(tick, 1000);
})();


(function () {
  var HORA_PEDIDO = 11;
  var HORA_REPARTO = 14;
  var HORA_CIERRE = 21;
  var yaInsertadaDespacho = false;

  function ahoraArgentina() {
    var str = new Date().toLocaleString('en-US', { timeZone: 'America/Argentina/Buenos_Aires' });
    return new Date(str);
  }
  function dd(n) { return (n < 10 ? '0' : '') + n; }

  function render() {
    var bar = document.getElementById('nf-despacho-bar');
    if (!bar) return '';
    var ahora = ahoraArgentina();
    var dia = ahora.getDay(), hora = ahora.getHours(), min = ahora.getMinutes(), seg = ahora.getSeconds();
    var esFinde = (dia === 0 || dia === 6);
    bar.classList.remove('nf-finde');

    if (!esFinde && hora < HORA_PEDIDO) {
      var rest = ((HORA_PEDIDO - hora) * 3600) - (min * 60) - seg;
      var h = Math.floor(rest / 3600), m = Math.floor((rest % 3600) / 60), s = rest % 60;
      return '<span class="nf-wrap">' +
        '<span class="nf-txt"><span class="nf-ico nf-pulse">&#9201;</span> Ped&iacute; antes de las ' + HORA_PEDIDO + ':00 y <span class="nf-hoy">despachamos HOY</span></span>' +
        '<span class="nf-reloj">' +
          '<span class="nf-cap">' + dd(h) + '</span><span class="nf-sep">:</span>' +
          '<span class="nf-cap">' + dd(m) + '</span><span class="nf-sep">:</span>' +
          '<span class="nf-cap nf-blink">' + dd(s) + '</span>' +
        '</span>' +
      '</span>';
    }
    if (!esFinde && hora >= HORA_PEDIDO && hora < HORA_REPARTO) {
      return '<span class="nf-wrap"><span class="nf-txt"><span class="nf-ico">&#128230;</span> <span class="nf-manana">Preparando los despachos de hoy</span> &middot; salen desde las 14:00</span></span>';
    }
    if (!esFinde && hora >= HORA_REPARTO && hora < HORA_CIERRE) {
      return '<span class="nf-wrap"><span class="nf-txt"><span class="nf-ico">&#128676;</span> <span class="nf-hoy">Entregando en AMBA</span> &middot; hoy hasta las 21:00</span></span>';
    }

    bar.classList.add('nf-finde');
    var proximo;
    if (dia === 5 && hora >= HORA_PEDIDO) proximo = 'el <span class="nf-manana">lunes</span>';
    else if (dia === 6) proximo = 'el <span class="nf-manana">lunes</span>';
    else if (dia === 0) proximo = 'el <span class="nf-manana">lunes</span>';
    else proximo = '<span class="nf-manana">ma&ntilde;ana</span>';
    return '<span class="nf-wrap"><span class="nf-txt"><span class="nf-ico">&#128230;</span> Despachamos tu pedido ' + proximo +
           ' &middot; ped&iacute; antes de las 11:00</span></span>';
  }

  function insertarBarra() {
    if (yaInsertadaDespacho) return;
    var bar = document.getElementById('nf-despacho-bar');
    if (!bar) return;
    var header = document.querySelector('header, .site-header, .js-header, .header');
    if (header && header.parentNode) {
      header.parentNode.insertBefore(bar, header);
      bar.style.display = 'block';
      yaInsertadaDespacho = true;
    }
  }

  function actualizar() {
    var bar = document.getElementById('nf-despacho-bar');
    if (bar) bar.innerHTML = render();
    var fichas = document.querySelectorAll('.nf-despacho-ficha');
    for (var i = 0; i < fichas.length; i++) fichas[i].innerHTML = render();
  }

  function tick() { insertarBarra(); actualizar(); }

  document.addEventListener('DOMContentLoaded', tick);
  setInterval(tick, 1000);
})();


(function () {
  var WSP = window.DRK_WSP || "5491176387287";

  function saborActualQS(scope) {
    var sel = scope.querySelector('.js-insta-variant.selected');
    if (sel) return (sel.getAttribute('data-option') || sel.innerText || 'No especificado').trim();
    return 'No especificado';
  }
  function nombreQS(scope) {
    var n = scope.querySelector('.js-item-name');
    return n ? n.innerText.trim() : 'Producto';
  }

  function actualizarQuickshop() {
    var form = document.getElementById('quickshop-form');
    if (!form) return;                          // no hay quickshop abierto
    var scope = form.closest('.js-item-variants') || form.parentNode;

    var btn = form.querySelector('input.js-addtocart, button.js-addtocart');
    if (!btn) return;

    var sinStock = (function(){
      var sel = scope.querySelector('.js-insta-variant.selected');
      if (sel && sel.classList.contains('btn-variant-no-stock')) return true;
      var cont = scope.querySelector('[data-variants]') || document.querySelector('#quickshop-modal [data-variants]');
      var vs = null; if (cont){ try{ vs = JSON.parse(cont.getAttribute('data-variants')); }catch(e){} }
      if (vs && vs.length){
        var opt = sel ? (sel.getAttribute('data-option')||'').trim() : null;
        if (opt){ for (var i=0;i<vs.length;i++){ if ((vs[i].option0||'')===opt) return vs[i].available===false; } }
        else { if (vs.length===1) return vs[0].available===false; var todas=true; for (var j=0;j<vs.length;j++){ if (vs[j].available!==false){ todas=false; break; } } if (todas) return true; }
      }
      if (btn.disabled || btn.classList.contains('nostock')) return true;
      var ph = form.querySelector('.js-addtocart-placeholder'); if (ph){ var st=getComputedStyle(ph); if (st.display!=='none' && ph.offsetParent!==null) return true; }
      return false;
    })();
    var yaExiste = form.querySelector('.btn-solicitar-qs');

    if (sinStock) {
      btn.style.display = 'none';
      var ph = form.querySelector('.js-addtocart-placeholder');
      if (ph) ph.style.display = 'none';

      if (!yaExiste) {
        var a = document.createElement('a');
        a.className = 'btn btn-solicitar-qs';
        a.href = '#';
        a.innerHTML = '<svg viewBox="0 0 24 24" fill="#fff" style="width:19px;height:19px;flex:0 0 auto;"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.004c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm0 18.15h-.003a8.23 8.23 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.21 8.21 0 0 1-1.26-4.38c0-4.54 3.7-8.23 8.24-8.23a8.2 8.2 0 0 1 5.82 2.41 8.19 8.19 0 0 1 2.41 5.83c0 4.54-3.7 8.23-8.23 8.23zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.25-.64.81-.79.98-.14.16-.29.18-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.13-.14.17-.25.25-.41.08-.16.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.42-.14 0-.31-.02-.47-.02-.16 0-.43.06-.65.31-.22.25-.85.83-.85 2.03 0 1.19.87 2.35.99 2.51.12.16 1.71 2.61 4.15 3.66.58.25 1.03.4 1.38.51.58.18 1.11.16 1.53.1.47-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.06-.11-.22-.17-.47-.29z"/></svg> Solicitar stock';
        a.style.backgroundColor = '#25D366';
        a.style.color = '#ffffff';
        a.style.fontFamily = "'Oswald','Arial Narrow',sans-serif";
        a.style.fontWeight = '700';
        a.style.textTransform = 'uppercase';
        a.style.letterSpacing = '.05em';
        a.style.fontSize = '15px';
        a.style.padding = '14px';
        a.style.width = '100%';
        a.style.textAlign = 'center';
        a.style.display = 'flex';
        a.style.alignItems = 'center';
        a.style.justifyContent = 'center';
        a.style.gap = '8px';
        a.style.border = '2px solid #d4af37';
        a.style.borderRadius = '8px';
        a.style.textDecoration = 'none';
        a.style.boxShadow = '0 0 12px rgba(37,211,102,.45)';

        a.addEventListener('click', function (e) {
          e.preventDefault();
          var msg = "Hola! Queria consultar stock del producto:\n\n" +
                    nombreQS(scope) + "\nSabor: " + saborActualQS(scope);
          window.location.href = "https://wa.me/" + WSP + "?text=" + encodeURIComponent(msg);
        });

        btn.parentNode.insertBefore(a, btn);
      }
    } else {
      if (yaExiste) yaExiste.remove();
      btn.style.display = '';
    }
  }

  document.addEventListener('DOMContentLoaded', actualizarQuickshop);

  /* respuesta inmediata al cambiar de sabor (evento, no loop) */
  document.addEventListener('click', function (e) {
    if (e.target.closest('.js-insta-variant')) {
      setTimeout(actualizarQuickshop, 120);
      setTimeout(actualizarQuickshop, 400);
    }
  });

  setInterval(actualizarQuickshop, 800);
})();


(function () {
  var CUOTAS = 2;   // <-- cuotas sin interés a mostrar
  var yaCuotas = false;

  function num(txt){ var l=(txt||'').replace(/[^\d.,]/g,'').replace(/\./g,'').replace(',','.'); var n=parseFloat(l); return (!isNaN(n)&&n>0)?n:null; }
  function fmt(n){ return '$'+n.toLocaleString('es-AR',{minimumFractionDigits:2,maximumFractionDigits:2}); }

  /* total de TARJETA (el monto tachado): las cuotas se calculan sobre ese valor */
  function getTotalTarjeta(){
    var el = document.querySelector('.js-cart-total');
    return el ? num(el.innerText) : null;
  }

  function insertar(){
    if (yaCuotas) return;
    if (document.getElementById('nf-cuotas')) { yaCuotas = true; return; }
    var ref = document.querySelector('.js-cart-total-container');
    if (ref && ref.parentNode){
      var d = document.createElement('div');
      d.id = 'nf-cuotas';
      ref.parentNode.insertBefore(d, ref);
      yaCuotas = true;
    }
  }

  function actualizar(){
    var d = document.getElementById('nf-cuotas');
    if (!d) return;
    var total = getTotalTarjeta();
    if (total){
      var cuota = total / CUOTAS;
      d.innerHTML =
        '<div class="nfc-row">' +
          '<svg class="nfc-ico" viewBox="0 0 24 24" fill="none" stroke="#d4af37" stroke-width="2" stroke-linejoin="round">' +
            '<rect x="2" y="5" width="20" height="14" rx="2.5"/><path d="M2 9.5h20"/><path d="M5.5 14.5h4.5"/>' +
          '</svg>' +
          '<div class="nfc-txt">' +
            '<div class="nfc-label">Pag&aacute; en <b>' + CUOTAS + ' cuotas</b>' +
              '<span class="nfc-badge">Sin inter&eacute;s</span></div>' +
            '<div class="nfc-monto">' + fmt(cuota) + ' <span>c/u</span></div>' +
          '</div>' +
        '</div>';
      d.style.display = 'block';
    } else {
      d.style.display = 'none';
    }
  }

  function tick(){ insertar(); actualizar(); }
  document.addEventListener('DOMContentLoaded', tick);
  setInterval(tick, 1000);
})();


(function(){
  var PISO_PAIS = 120000;   // envío gratis a todo el país (config nativa)
  var PISO_CABA = 70000;    // envío gratis CABA sobre subtotal de lista/tarjeta (config nativa)
  var yaProg = false;

  function num(txt){ var l=(txt||'').replace(/[^\d.,]/g,'').replace(/\./g,'').replace(',','.'); var n=parseFloat(l); return (!isNaN(n)&&n>0)?n:null; }
  function fmt(n){ return '$'+n.toLocaleString('es-AR',{minimumFractionDigits:2,maximumFractionDigits:2}); }
  function getSub(){ var el=document.querySelector('.js-cart-subtotal-price, .js-subtotal-price'); return el?num(el.innerText):null; }
  /* detecta si la opción de envío elegida es CABA (mismo criterio que el voucher) */
  function esCABA(){
    var sel=document.querySelector('input.js-shipping-method:checked')||document.querySelector('input.js-shipping-method');
    if(!sel) return null;                       // todavía no cotizó -> null
    var li=sel.closest('.js-shipping-list-item')||sel.closest('li'); if(!li) return false;
    var n=li.querySelector('[data-component="option.name"]');
    return n ? /CABA/i.test(n.innerText) : false;
  }

  function insertar(){
    if(yaProg) return;
    if(document.getElementById('nf-envio-prog')){ yaProg=true; return; }
    var ref=document.querySelector('.js-subtotal-price, .js-cart-subtotal-price, .js-cart-total-container');
    if(ref){
      var cont=ref.closest('.js-cart-summary, [class*="cart-summary"], [class*="cart-resume"]')||ref.parentNode;
      if(cont && cont.parentNode){
        var d=document.createElement('div'); d.id='nf-envio-prog';
        d.innerHTML='<div class="nfe-txt"></div><div class="nfe-track"><div class="nfe-fill"></div></div>';
        cont.parentNode.insertBefore(d, cont);
        yaProg=true;
      }
    }
  }
  function actualizar(){
    var d=document.getElementById('nf-envio-prog'); if(!d) return;
    var sub=getSub();
    if(sub===null){ d.style.display='none'; return; }
    /* elegir piso según zona: si eligió CABA -> 70.000; si no (interior o sin cotizar) -> 120.000 */
    var caba=esCABA();
    var PISO = (caba===true) ? PISO_CABA : PISO_PAIS;
    var zona = (caba===true) ? ' en CABA' : '';
    var txt=d.querySelector('.nfe-txt'), fill=d.querySelector('.nfe-fill');
    var pct=Math.min(100, (sub/PISO)*100);
    fill.style.width=pct+'%';
    if(sub>=PISO){
      d.classList.add('nf-ok');
      txt.innerHTML='&#127881; &iexcl;Ten&eacute;s env&iacute;o GRATIS'+zona+'!';
    } else {
      d.classList.remove('nf-ok');
      txt.innerHTML='Te faltan <b>'+fmt(PISO-sub)+'</b> para env&iacute;o <b>GRATIS'+zona+'</b>'+(caba===true?' &#128690;':'');
    }
    d.style.display='block';
  }
  function tick(){ insertar(); actualizar(); }
  document.addEventListener('DOMContentLoaded', tick);
  setInterval(tick, 1000);
})();


(function(){
  /* ►► Editá acá tus diferenciales (que sean 100% verdaderos) */
  var ITEMS = [
    "Productos 100% originales",
    "Dep\u00f3sito propio en Caballito",
    "Env\u00edo propio en CABA",
    "Atenci\u00f3n real por WhatsApp"
  ];
  var yaTrust=false;
  var CHK='<svg viewBox="0 0 24 24" fill="none" stroke="#36d36a" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg>';

  function insertar(){
    if(yaTrust) return;
    if(document.getElementById('nf-trust')){ yaTrust=true; return; }
    var ref=document.querySelector('.js-cart-total-container');
    if(ref && ref.parentNode){
      var d=document.createElement('div'); d.id='nf-trust';
      var html='<ul>';
      for(var i=0;i<ITEMS.length;i++){ html+='<li>'+CHK+ITEMS[i]+'</li>'; }
      html+='</ul>';
      d.innerHTML=html;
      ref.parentNode.insertBefore(d, ref.nextSibling);
      d.style.display='block';
      yaTrust=true;
    }
  }
  document.addEventListener('DOMContentLoaded', insertar);
  setInterval(insertar, 1000);
})();


(function(){
  var WSP = window.DRK_WSP || "5491176387287";
  var bar = null;

  function q(s){ return document.querySelector(s); }
  function t(el){ return el ? el.innerText.trim() : ''; }
  function realBtn(){
    var b = q('input.js-addtocart[data-store="product-buy-button"]');
    if (b && b.closest('#quickshop-form')) return null;   // nunca el del quickshop
    return b;
  }
  function esFicha(){
    // solo es ficha de producto si estan el titulo Y el boton de compra reales
    return !!(q('h1.js-product-name') && realBtn());
  }
  function carritoAbierto(){
    var m = document.getElementById('modal-cart');
    return !!(m && m.classList.contains('modal-show'));
  }
  function btnSolicitarReal(){
    // el boton verde "Solicitar stock" que inserta tu otro script en la ficha
    var b = q('.btn-consultar-stock');
    return (b && b.offsetParent !== null) ? b : null;
  }
  function sabor(){
    var s = q('.js-insta-variant.selected');
    return s ? (s.getAttribute('data-option') || s.innerText || '').trim() : '';
  }

  function crear(){
    if (bar) return;
    if (!esFicha()) return;                  // solo en la ficha de producto
    bar = document.createElement('div');
    bar.id = 'nf-sticky';
    bar.innerHTML =
      '<div class="nfs-info">' +
        '<div class="nfs-lbl">Transferencia</div>' +
        '<div><span class="nfs-price"></span><span class="nfs-old"></span></div>' +
      '</div>' +
      '<button class="nfs-btn" type="button">Agregar</button>';
    document.body.appendChild(bar);

    bar.querySelector('.nfs-btn').addEventListener('click', function(){
      var rb = realBtn();
      var sinStock = rb && (rb.classList.contains('nostock') || rb.disabled);
      if (sinStock){
        var prod = t(q('h1.js-product-name')) || 'Producto';
        var msg = "Hola! Queria consultar stock del producto:\n\n" + prod +
                  "\nSabor: " + (sabor() || 'No especificado');
        window.location.href = "https://wa.me/" + WSP + "?text=" + encodeURIComponent(msg);
      } else if (rb){
        rb.click();
      }
    });
  }

  function refrescar(){
    if (!esFicha()){ if (bar) bar.style.display='none'; return; }  // fuera de la ficha: no mostrar
    if (!bar){ crear(); if (!bar) return; }
    var rb = realBtn();
    if (!rb){ bar.style.display='none'; return; }

    var lbl = bar.querySelector('.nfs-lbl');
    var price = bar.querySelector('.nfs-price');
    var old = bar.querySelector('.nfs-old');
    var btn = bar.querySelector('.nfs-btn');

    var sinStock = rb.classList.contains('nostock') || rb.disabled;

    if (sinStock){
      bar.classList.add('nfs-nostock');
      lbl.style.display=''; lbl.innerText='¿Sin stock? Te lo conseguimos';
      price.style.display='none'; old.style.display='none';
      btn.innerText='Solicitar stock';
    } else {
      bar.classList.remove('nfs-nostock');
      lbl.style.display=''; lbl.innerText='Transferencia';
      price.style.display='';
      var tr = t(q('.js-payment-discount-price-product'));
      var lista = t(q('.js-price-display'));
      if (tr){                 // ya cargó el de transferencia
        lbl.innerText='Transferencia';
        price.innerText = tr;
        if (lista && lista !== tr){ old.innerText = lista; old.style.display=''; }
        else { old.style.display='none'; }
      } else {                 // todavía no cargó: muestro el de lista mientras tanto
        lbl.innerText='Precio';
        price.innerText = lista || '';
        old.style.display='none';
      }
      btn.innerText='Agregar';
    }

    /* BUG 2: si el carrito lateral está abierto, ocultar la barra */
    if (carritoAbierto()){ bar.style.display='none'; return; }

    /* mostrar SOLO cuando el botón de acción real está fuera de pantalla.
       BUG 3: si está sin stock, el botón real está oculto -> me fijo en el
       botón verde "Solicitar stock" que sí se ve. */
    var target = rb;
    if (sinStock){
      var verde = btnSolicitarReal();
      if (verde) target = verde;
    }
    var visibleReal = false;
    if (target && target.offsetParent !== null){
      var r = target.getBoundingClientRect();
      visibleReal = (r.top < window.innerHeight && r.bottom > 0);
    }
    bar.style.display = visibleReal ? 'none' : 'flex';
  }

  document.addEventListener('DOMContentLoaded', refrescar);
  window.addEventListener('scroll', refrescar, {passive:true});
  window.addEventListener('resize', refrescar);
  setInterval(refrescar, 1000);
})();


(function(){
  var TARJETAS=[
    {c:'g',   st:'#fff',    shine:false, t:'Env\u00edos en 24hs',      s:'En CABA con moto propia',
      ico:'<path d="M3 7h11v8H3z"/><path d="M14 10h4l3 3v2h-7z"/><circle cx="7" cy="17" r="1.7"/><circle cx="17.5" cy="17" r="1.7"/>'},
    {c:'gold',st:'#141414', shine:true,  t:'Compra <b>100% Segura</b>', s:'Pago protegido',
      ico:'<rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/>'},
    {c:'b',   st:'#fff',    shine:false, t:'Hasta 2 cuotas',           s:'Sin inter\u00e9s',
      ico:'<rect x="2" y="5" width="20" height="14" rx="2.5"/><path d="M2 9.5h20"/><path d="M5.5 14.5h4.5"/>'},
    {c:'gold',st:'#141414', shine:false, t:'Productos originales',     s:'100% garantizados',
      ico:'<path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6z"/><path d="M9 12l2 2 4-4"/>'}
  ];
  function card(c,dup){
    return '<div class="card'+(c.shine?' shine':'')+(dup?' drk-dup':'')+'"><div class="ico '+c.c+'">'+
      '<svg viewBox="0 0 24 24" fill="none" stroke="'+c.st+'" stroke-width="2" stroke-linejoin="round">'+c.ico+'</svg></div>'+
      '<div class="txt"><div class="t">'+c.t+'</div><div class="s">'+c.s+'</div></div></div>';
  }
  function insertar(){
    if(document.getElementById('drk-trust2')) return;
    var ref=document.querySelector('.js-section-products-featured, .section-featured-home');
    if(!ref||!ref.parentNode) return;
    var h='';
    for(var i=0;i<TARJETAS.length;i++) h+=card(TARJETAS[i],false);   // set original (compu + celular)
    for(var j=0;j<TARJETAS.length;j++) h+=card(TARJETAS[j],true);    // copia (solo celular, para loop continuo)
    var cont=document.createElement('div'); cont.id='drk-trust2';
    cont.innerHTML='<div class="drk-track">'+h+'</div>';
    ref.parentNode.insertBefore(cont, ref);
  }
  document.addEventListener('DOMContentLoaded', insertar);
  setInterval(insertar, 1000);
})();


(function(){
  var CORTE = 11;
  var IC = {
    bag:'<svg viewBox="0 0 24 24"><path d="M6 8h12l-1 12H7z"/><path d="M9 8V6a3 3 0 0 1 6 0v2"/></svg>',
    moto:'<svg viewBox="0 0 24 24"><circle cx="6" cy="17" r="2.4"/><circle cx="18" cy="17" r="2.4"/><path d="M8.4 17h7.2l2.4-5h-4l-2-3H8"/></svg>',
    pin:'<svg viewBox="0 0 24 24"><path d="M12 21s-7-6.5-7-11a7 7 0 0 1 14 0c0 4.5-7 11-7 11z"/><circle cx="12" cy="10" r="2.4"/></svg>',
    motoH:'<svg viewBox="0 0 24 24" fill="none" stroke="#36d36a" stroke-width="2" stroke-linejoin="round"><circle cx="6" cy="17" r="2.4"/><circle cx="18" cy="17" r="2.4"/><path d="M8.4 17h7.2l2.4-5h-4l-2-3H8"/></svg>',
    truck:'<svg viewBox="0 0 24 24" fill="none" stroke="#36d36a" stroke-width="2" stroke-linejoin="round"><path d="M3 7h11v8H3z"/><path d="M14 10h4l3 3v2h-7z"/><circle cx="7" cy="17" r="1.6"/><circle cx="17.5" cy="17" r="1.6"/></svg>',
    card:'<svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linejoin="round"><rect x="2" y="5" width="20" height="14" rx="2.5"/><path d="M2 9.5h20"/></svg>'
  };
  function render(el, html){ if(el.getAttribute('data-sig')!==html){ el.setAttribute('data-sig',html); el.innerHTML=html; } }
  function ahoraAR(){ return new Date(new Date().toLocaleString('en-US',{timeZone:'America/Argentina/Buenos_Aires'})); }
  function despachoTxt(){
    var a=ahoraAR(), d=a.getDay(), h=a.getHours();
    if(d===0||d===6) return 'El lunes';
    if(d===5 && h>=CORTE) return 'El lunes';
    if(h<CORTE) return 'Hoy';
    return 'Ma\u00f1ana';
  }
  function caba(){ var t=despachoTxt(); return { despacho:t, entrega:t, hoy:(t==='Hoy') }; }
  function paso(ico,t,d,hoy){ return '<div class="drk-vs__step'+(hoy?' hoy':'')+'"><div class="drk-vs__ic">'+ico+'</div><div class="drk-vs__t">'+t+'</div><div class="drk-vs__d">'+d+'</div></div>'; }
  function voucherHTML(head,despacho,entrega,hoy,foot){
    return '<div class="drk-vch__h">'+head+'</div><div class="drk-vs"><div class="drk-vs__line"></div>'+
      paso(IC.bag,'Compra','Hoy',false)+paso(IC.moto,'Despacho',despacho,false)+paso(IC.pin,'Entrega',entrega,hoy)+
      '</div><div class="drk-vch__foot">'+foot+'</div>';
  }
  function envioSel(){
    var sel=document.querySelector('input.js-shipping-method:checked')||document.querySelector('input.js-shipping-method');
    if(!sel) return null;
    var li=sel.closest('.js-shipping-list-item')||sel.closest('li'); if(!li) return null;
    var n=li.querySelector('[data-component="option.name"]'), f=li.querySelector('[data-component="option.date"]');
    return { name:(n?n.innerText:'').trim(), date:(f?f.innerText:'').trim() };
  }
  function rango(txt){ var m=(txt||'').match(/\d{2}\/\d{2}/g); if(!m) return (txt||'').replace(/^Llega\s*/i,'')||'A coordinar'; return m.length>=2?(m[0]+' al '+m[m.length-1]):m[0]; }
  function nombreCorto(n){ return (n||'').split(' - ')[0].split('(')[0].trim()||'Correo Argentino'; }

  function tickCarrito(){
    var ref=document.querySelector('.js-cart-total-container'), cont=document.getElementById('drk-vch-cart'), opt=envioSel();
    if(!ref||!opt){ if(cont) cont.remove(); return; }
    if(!cont){ cont=document.createElement('div'); cont.id='drk-vch-cart'; cont.className='drk-vch'; ref.parentNode.insertBefore(cont,ref); }
    if(/CABA/i.test(opt.name)){
      var f=caba();
      render(cont, voucherHTML(IC.motoH+' Env\u00edo en moto propia \u00b7 CABA',f.despacho,f.entrega,f.hoy,'Ped\u00ed antes de las <b>11:00</b> (d\u00edas h\u00e1biles) y te llega <b>el mismo d\u00eda</b>'));
    } else {
      render(cont, voucherHTML(IC.truck+' '+nombreCorto(opt.name),despachoTxt(),rango(opt.date),false,'Entrega estimada por el correo seg\u00fan tu c\u00f3digo postal'));
    }
  }

  /* ===== FICHA ===== */
  function transferFicha(){ var all=document.querySelectorAll('.js-payment-discount-price-product-container'),r=null; all.forEach(function(el){ if(!el.closest('.js-item-product')) r=el; }); return r; }
  function precioLista(){
    var el=document.getElementById('price_display')||document.querySelector('.js-price-container .js-price-display');
    if(!el) return null;
    var raw=el.getAttribute('data-product-price');
    if(raw && !isNaN(parseInt(raw,10))) return parseInt(raw,10)/100;
    var t=(el.textContent||'').replace(/[^\d,]/g,'').replace(/\./g,'').replace(',','.');
    var n=parseFloat(t); return isNaN(n)?null:n;
  }
  function fmt(n){ return '$'+n.toLocaleString('es-AR',{minimumFractionDigits:2,maximumFractionDigits:2}); }
  function cuotasHTML(){
    var p=precioLista(); if(!p) return '';
    return IC.card+'<span>Hasta <b>2 cuotas</b> de <b>'+fmt(p/2)+'</b> c/u <span class="si">Sin inter\u00e9s</span></span>';
  }
  function tickFicha(){
    if(!document.querySelector('h1.js-product-name')) return;
    var box=transferFicha()||document.querySelector('.js-price-container');
    if(!box||!box.parentNode) return;

    /* cuotas (discreto) */
    var cuo=document.getElementById('drk-cuo-ficha'), ch=cuotasHTML();
    if(ch){
      if(!cuo){ cuo=document.createElement('div'); cuo.id='drk-cuo-ficha'; cuo.className='drk-cuo'; box.parentNode.insertBefore(cuo, box.nextSibling); }
      render(cuo, ch);
    } else if(cuo){ cuo.parentNode.removeChild(cuo); cuo=null; }

    /* voucher (despues de cuotas, o de la caja) */
    var f=caba();
    var head=IC.motoH+' \u00bfSos de CABA? Te llega '+(f.hoy?'HOY':'r\u00e1pido')+' en moto';
    var foot='Ped\u00ed antes de las <b>11:00</b> (d\u00edas h\u00e1biles) y te llega <b>el mismo d\u00eda</b>';
    var vch=document.getElementById('drk-vch-ficha');
    if(!vch){ vch=document.createElement('div'); vch.id='drk-vch-ficha'; vch.className='drk-vch drk-vch--ficha'; var after=cuo||box; after.parentNode.insertBefore(vch, after.nextSibling); }
    render(vch, voucherHTML(head,f.despacho,f.entrega,f.hoy,foot));
  }

  function tick(){ tickCarrito(); tickFicha(); }
  document.addEventListener('DOMContentLoaded', tick);
  setInterval(tick, 1000);
})();

/* (cronómetro viejo por producto REMOVIDO — reemplazado por el voucher promo) */



(function(){
  /* ►►►► PEGÁ ACÁ TU URL (la "raw" de GitHub, termina en /resenas.json) ◄◄◄◄ */
  var URL_JSON = "https://raw.githubusercontent.com/drakofitsuplementos-cyber/drakofit/refs/heads/main/resenas.json";

  var RESENAS = null;

  try {
    fetch(URL_JSON, {cache:"no-store"})
      .then(function(r){ return r.json(); })
      .then(function(d){ RESENAS = d; })
      .catch(function(){ /* si falla, simplemente no muestra reseñas */ });
  } catch(e){}

  function slugFrom(u){ var m=(u||'').match(/\/productos\/([^\/?#]+)/); return m?m[1]:null; }
  function get(s){ return (RESENAS && s && RESENAS[s]) ? RESENAS[s] : null; }
  function promTxt(p){ return (''+p).replace('.',','); }
  function starsSVG(val){
    var f='<svg viewBox="0 0 24 24" fill="#d4af37"><path d="M12 2l3 6.9 7.5.6-5.7 4.9 1.8 7.3L12 17.8 5.1 21.7l1.8-7.3L1.2 9.5 8.7 8.9z"/></svg>';
    var e='<svg viewBox="0 0 24 24" fill="none" stroke="#6a5a1e" stroke-width="1.6"><path d="M12 2l3 6.9 7.5.6-5.7 4.9 1.8 7.3L12 17.8 5.1 21.7l1.8-7.3L1.2 9.5 8.7 8.9z"/></svg>';
    var o=''; for(var i=1;i<=5;i++){ o += (i<=Math.round(val)?f:e); } return o;
  }

  function procesarNombres(){
    var names=document.querySelectorAll('.js-item-name[data-store]');
    for(var i=0;i<names.length;i++){
      var el=names[i]; if(el.dataset.drkDone) continue;
      var card=el.closest('.js-item-product, .js-item-container, .item, li');
      var link=(card?card.querySelector('a[href*="/productos/"]'):null) || el.closest('a[href*="/productos/"]');
      var d=link?get(slugFrom(link.getAttribute('href'))):null;
      if(!d){ if(RESENAS) el.dataset.drkDone='skip'; continue; }
      el.dataset.drkDone='1';
      var mini=document.createElement('div'); mini.className='drk-rev-mini';
      mini.innerHTML='<span class="drk-stars">'+starsSVG(d.prom)+'</span><span class="p">'+promTxt(d.prom)+'</span><span class="c">('+d.cnt+')</span>';
      el.parentNode.insertBefore(mini, el.nextSibling);
    }
  }

  function procesarFicha(){
    var h1=document.querySelector('h1.js-product-name'); if(!h1) return;
    var d=get(slugFrom(location.pathname)); if(!d) return;

    if(!document.getElementById('drk-rev-sum')){
      var a=document.createElement('a'); a.id='drk-rev-sum'; a.className='drk-rev-sum'; a.href='#';
      a.innerHTML='<span class="drk-stars">'+starsSVG(d.prom)+'</span><span class="prom">'+promTxt(d.prom)+'</span><span class="cnt">'+d.cnt+' rese\u00f1as</span>';
      a.addEventListener('click',function(e){e.preventDefault();var s=document.getElementById('drk-rev');if(s)s.scrollIntoView({behavior:'smooth'});});
      h1.parentNode.insertBefore(a,h1.nextSibling);
    }

    if(!document.getElementById('drk-rev')){
      var anchor=document.querySelector('.js-product-description, [data-store="product-description"], .product-description');
      if(!anchor){ var rb=document.querySelector('input.js-addtocart[data-store="product-buy-button"]'); anchor=rb?rb.closest('form.js-product-form,.js-product-container,.product-detail'):null; }
      if(!anchor||!anchor.parentNode) return;

      var bars='';
      for(var lvl=5; lvl>=1; lvl--){
        var c=d.dist[5-lvl]; var pct=d.cnt?Math.round((c/d.cnt)*100):0;
        bars+='<div class="drk-rev__bar"><span class="lvl">'+lvl+'</span><span class="track"><span class="fill" style="width:'+pct+'%"></span></span><span class="pct">'+pct+'%</span></div>';
      }
      var cards='';
      for(var i=0;i<d.reviews.length;i++){
        var r=d.reviews[i];
        cards+='<div class="drk-rev__card"><span class="drk-rev__who">'+r.n+' <span class="drk-rev__ver">Verificada</span></span>'+
               '<div class="drk-rev__meta"><span class="drk-stars sm">'+starsSVG(r.s)+'</span><span class="drk-rev__date">'+r.d+'</span></div>'+
               (r.t?'<p class="drk-rev__txt">'+r.t+'</p>':'')+'</div>';
      }
      var sec=document.createElement('div'); sec.id='drk-rev'; sec.className='drk-rev';
      sec.innerHTML=
        '<div class="drk-rev__summary"><div class="drk-rev__score"><div class="drk-rev__num">'+promTxt(d.prom)+'</div>'+
          '<div class="drk-stars">'+starsSVG(d.prom)+'</div><div class="drk-rev__sub">'+d.cnt+' rese\u00f1as verificadas</div></div>'+
          '<div class="drk-rev__bars">'+bars+'</div></div>'+
        '<button type="button" class="drk-rev__toggle">Ver opiniones</button>'+
        '<div class="drk-rev__list">'+cards+'</div>';
      anchor.parentNode.insertBefore(sec, anchor.nextSibling);
      var tgl=sec.querySelector('.drk-rev__toggle');
      tgl.addEventListener('click',function(){ var o=sec.classList.toggle('drk-open'); tgl.innerText=o?'Ocultar opiniones':'Ver opiniones'; });
    }
  }

  function tick(){ if(!RESENAS) return; procesarNombres(); procesarFicha(); }
  setInterval(tick, 1000);
})();

/* ============================================================
   LISTADO · botón "Solicitar stock" dentro del marco (donde iría "Comprar")
   Se inserta justo debajo de las cuotas/precio, centrado y con ancho
   de botón (no barra). Abre WhatsApp con el producto. Solo si TODAS
   las variantes están sin stock; se quita solo si vuelve el stock.
   ============================================================ */
(function(){
  var WSP = window.DRK_WSP || "5491176387287";
  var WA = '<svg viewBox="0 0 24 24" fill="#fff" style="width:17px;height:17px;flex:0 0 auto;"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.004c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm0 18.15h-.003a8.23 8.23 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.21 8.21 0 0 1-1.26-4.38c0-4.54 3.7-8.23 8.24-8.23a8.2 8.2 0 0 1 5.82 2.41 8.19 8.19 0 0 1 2.41 5.83c0 4.54-3.7 8.23-8.23 8.23zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.25-.64.81-.79.98-.14.16-.29.18-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.13-.14.17-.25.25-.41.08-.16.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.42-.14 0-.31-.02-.47-.02-.16 0-.43.06-.65.31-.22.25-.85.83-.85 2.03 0 1.19.87 2.35.99 2.51.12.16 1.71 2.61 4.15 3.66.58.25 1.03.4 1.38.51.58.18 1.11.16 1.53.1.47-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.06-.11-.22-.17-.47-.29z"/></svg>';

  function todasSinStock(cont){
    var vs=null; try{ vs=JSON.parse(cont.getAttribute('data-variants')); }catch(e){ return false; }
    if(!vs||!vs.length) return false;
    for(var i=0;i<vs.length;i++){ if(vs[i].available!==false) return false; }
    return true;
  }
  function nombreCard(card){
    var n=card.querySelector('.js-item-name');
    if(n && n.innerText.trim()) return n.innerText.trim();
    var l=card.querySelector('a[href*="/productos/"]');
    return l ? ((l.getAttribute('title')||l.innerText||'Producto').trim()) : 'Producto';
  }
  function tickCards(){
    var conts=document.querySelectorAll('.js-quickshop-container[data-variants]');
    for(var i=0;i<conts.length;i++){
      var cont=conts[i];
      if(cont.closest('#quickshop-modal')) continue;                 // solo tarjetas del listado
      var card=cont.closest('.js-item-product'); if(!card) continue;
      var yaHay=card.querySelector('.drk-stock-listado');
      if(todasSinStock(cont)){
        if(yaHay) continue;
        /* ancla: debajo de las cuotas / precio, dentro del marco */
        var ancla=card.querySelector('.js-max-installments-container')
               || card.querySelector('.item-price-container')
               || card.querySelector('.js-payment-discount-price-product-container');
        var b=document.createElement('div');
        b.className='drk-stock-listado';
        b.setAttribute('role','button'); b.setAttribute('tabindex','0');
        b.innerHTML='Solicitar stock';
        b.style.cssText='display:flex;align-items:center;justify-content:center;gap:6px;white-space:nowrap;width:fit-content;max-width:calc(100% - 8px);margin:12px auto 6px;padding:9px 16px;background:#25D366;color:#fff;font-family:\'Oswald\',\'Arial Narrow\',sans-serif;font-weight:700;text-transform:uppercase;letter-spacing:.03em;font-size:13px;line-height:1;border:1.5px solid #d4af37;border-radius:8px;text-decoration:none;box-shadow:0 0 10px rgba(37,211,102,.35);cursor:pointer;overflow:hidden;';
        (function(tarjeta){
          b.addEventListener('click', function(e){
            e.preventDefault(); e.stopPropagation();
            var msg="Hola! Queria solicitar stock del producto:\n\n"+nombreCard(tarjeta);
            window.location.href="https://wa.me/"+WSP+"?text="+encodeURIComponent(msg);
          });
        })(card);
        if(ancla && ancla.parentNode){ ancla.parentNode.insertBefore(b, ancla.nextSibling); }
        else { var desc=card.querySelector('.js-item-description'); if(desc){ desc.appendChild(b); } }
      } else {
        if(yaHay) yaHay.parentNode.removeChild(yaHay);
      }
    }
  }
  document.addEventListener('DOMContentLoaded', tickCards);
  setInterval(tickCards, 1000);
})();

/* ============================================================
   DESPACHO BAR · más grande + FIXED arriba (robusto ante overflow)
   Usa position:fixed y empuja el body/header con padding-top para
   que no tape el contenido. No depende del overflow de ningún padre.
   ============================================================ */
(function(){
  try{
    var c='#nf-despacho-bar{padding:14px 16px !important;position:fixed !important;top:0 !important;left:0 !important;right:0 !important;width:100% !important;z-index:100000 !important;margin:0 !important;}'+
      '#nf-despacho-bar .nf-txt{font-size:16px !important;}'+
      '#nf-despacho-bar .nf-ico{font-size:23px !important;}'+
      '#nf-despacho-bar .nf-cap,#nf-despacho-bar .nf-sep{font-size:18px !important;}'+
      '@media(max-width:680px){#nf-despacho-bar .nf-txt{font-size:13.5px !important;}#nf-despacho-bar .nf-ico{font-size:19px !important;}}';
    var s=document.createElement('style');s.appendChild(document.createTextNode(c));(document.head||document.documentElement).appendChild(s);
  }catch(e){}
  function sync(){
    var bar=document.getElementById('nf-despacho-bar');
    var head=document.querySelector('header.js-head-main, header.head-main, header');
    if(!bar) return;
    if(getComputedStyle(bar).display==='none'){
      document.body.style.removeProperty('padding-top');
      if(head) head.style.removeProperty('top');
      return;
    }
    var h=bar.offsetHeight||0;
    /* empuja todo hacia abajo la altura de la barra fija */
    document.body.style.setProperty('padding-top', h+'px', 'important');
    /* el header sticky del tema queda justo debajo de la barra */
    if(head) head.style.setProperty('top', h+'px', 'important');
  }
  window.addEventListener('resize', sync);
  window.addEventListener('load', sync);
  document.addEventListener('DOMContentLoaded', sync);
  setInterval(sync, 800);
})();

/* ============================================================
   OPINIONES DE CLIENTES · carrusel al final del home
   Lee resenas.json (GitHub), junta las reseñas con texto de todos
   los productos, calcula promedio global y arma un carrusel que se
   mueve solo. Solo en la home. setInterval para colocarlo.
   ============================================================ */
(function(){
  var URL="https://raw.githubusercontent.com/drakofitsuplementos-cyber/drakofit/refs/heads/main/resenas.json";
  var CSS=".drk-op{padding:34px 0 30px;background:linear-gradient(180deg,#0d0d0d,#0b0b0b);overflow:hidden;}"+
    ".drk-op__h{text-align:center;margin-bottom:22px;padding:0 16px;}"+
    ".drk-op__h .t{font-family:'Oswald','Arial Narrow',sans-serif;text-transform:uppercase;letter-spacing:.05em;font-weight:700;font-size:26px;color:#fff;margin:0;}"+
    ".drk-op__badge{display:inline-flex;align-items:center;gap:10px;margin-top:12px;background:#141414;border:1px solid rgba(212,175,55,.4);border-radius:40px;padding:8px 18px;}"+
    ".drk-op__badge .num{font-family:'Oswald','Arial Narrow',sans-serif;font-weight:700;font-size:24px;color:#d4af37;line-height:1;}"+
    ".drk-op__badge .st{color:#d4af37;font-size:16px;letter-spacing:1px;}"+
    ".drk-op__badge .cnt{color:#b9b9b9;font-size:12px;border-left:1px solid rgba(255,255,255,.15);padding-left:10px;}"+
    ".drk-op__mask{overflow:hidden;position:relative;}"+
    ".drk-op__track{display:flex;gap:16px;width:max-content;padding:6px 16px;animation:drkOpM 45s linear infinite;}"+
    ".drk-op__mask:hover .drk-op__track{animation-play-state:paused;}"+
    "@keyframes drkOpM{from{transform:translateX(0)}to{transform:translateX(-50%)}}"+
    ".op-card{flex:0 0 auto;width:290px;background:linear-gradient(180deg,#181818,#111);border:1px solid rgba(255,255,255,.08);border-radius:16px;padding:18px;box-shadow:0 6px 18px rgba(0,0,0,.35);box-sizing:border-box;}"+
    ".op-card__top{display:flex;align-items:center;gap:11px;margin-bottom:10px;}"+
    ".op-card__av{width:42px;height:42px;border-radius:50%;flex:0 0 auto;display:flex;align-items:center;justify-content:center;font-family:'Oswald','Arial Narrow',sans-serif;font-weight:700;font-size:17px;color:#141414;background:linear-gradient(135deg,#f6dd86,#c9a227);}"+
    ".op-card__who{min-width:0;}"+
    ".op-card__nm{font-weight:600;color:#fff;font-size:14.5px;display:flex;align-items:center;gap:6px;flex-wrap:wrap;}"+
    ".op-card__ver{display:inline-flex;align-items:center;gap:3px;color:#36d36a;font-size:10px;font-weight:700;text-transform:uppercase;}"+
    ".op-card__ver svg{width:11px;height:11px;}"+
    ".op-card__date{color:#8a8a8a;font-size:11px;margin-top:1px;}"+
    ".op-card__stars{color:#f5b840;font-size:14px;letter-spacing:1px;margin-bottom:7px;}"+
    ".op-card__txt{color:#d8d8d8;font-size:13px;line-height:1.5;margin:0;}"+
    ".op-card__q{color:rgba(212,175,55,.3);font-size:30px;font-family:Georgia,serif;line-height:0;margin-left:-2px;}"+
    ".drk-op__foot{text-align:center;color:#7a7a7a;font-size:11px;margin-top:20px;display:flex;align-items:center;justify-content:center;gap:6px;}"+
    ".drk-op__foot svg{width:13px;height:13px;}";
  try{var s=document.createElement('style');s.appendChild(document.createTextNode(CSS));(document.head||document.documentElement).appendChild(s);}catch(e){}

  function esHome(){ return location.pathname==='/' || location.pathname===''; }
  function stars(n){var o="";for(var i=0;i<5;i++)o+=(i<n?'\u2605':'\u2606');return o;}
  var CK='<svg viewBox="0 0 24 24" fill="none" stroke="#36d36a" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg>';
  var puesto=false;

  function colocar(revs, prom, total){
    if(puesto || !esHome()) return;
    var cont=document.querySelector('.js-home-sections-container') || document.querySelector('footer');
    if(!cont) return;
    var sec=document.createElement('div'); sec.className='drk-op'; sec.id='drk-opiniones';
    var cards=revs.map(function(r){
      return '<div class="op-card"><div class="op-card__top"><div class="op-card__av">'+(r.n||'?').charAt(0)+'</div>'+
        '<div class="op-card__who"><div class="op-card__nm">'+(r.n||'')+' <span class="op-card__ver">'+CK+'Verificada</span></div>'+
        '<div class="op-card__date">'+(r.d||'')+'</div></div></div>'+
        '<div class="op-card__stars">'+stars(r.s||5)+'</div>'+
        '<p class="op-card__txt"><span class="op-card__q">\u201C</span>'+(r.t||'')+'</p></div>';
    }).join('');
    sec.innerHTML='<div class="drk-op__h"><h2 class="t">Opiniones de nuestros clientes</h2>'+
      '<div class="drk-op__badge"><span class="num">'+prom+'</span><span class="st">\u2605\u2605\u2605\u2605\u2605</span><span class="cnt">'+total+' opiniones</span></div></div>'+
      '<div class="drk-op__mask"><div class="drk-op__track">'+cards+cards+'</div></div>'+
      '<div class="drk-op__foot">'+CK+' Todas las opiniones son de compras verificadas</div>';
    if(cont.tagName==='FOOTER'){ cont.parentNode.insertBefore(sec, cont); } else { cont.appendChild(sec); }
    puesto=true;
  }

  function init(){
    if(!esHome()) return;
    fetch(URL).then(function(r){return r.json();}).then(function(d){
      var revs=[], total=0, suma=0;
      for(var slug in d){ if(!d.hasOwnProperty(slug)) continue;
        var info=d[slug]; total+=(info.cnt||0); suma+=(info.prom||0)*(info.cnt||0);
        (info.reviews||[]).forEach(function(r){ if(r.t) revs.push(r); });
      }
      /* mezclar un poco para variedad */
      revs.sort(function(){return Math.random()-0.5;});
      revs=revs.slice(0,20);
      var prom=total? (suma/total).toFixed(1).replace('.',',') : '5,0';
      var iv=setInterval(function(){ colocar(revs, prom, total); if(puesto) clearInterval(iv); }, 700);
    }).catch(function(){});
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded', init); else init();
})();

/* ============================================================
   VOUCHER PROMO · DRAKO360 (10% OFF) hasta domingo 23/08 23:59
   Se ancla a la sección .js-section-products-best-seller (estable,
   no se descoloca al reordenar). 3 estados: normal / últimas 6h / desaparece.
   Editar acá: FIN (fecha), CODE (código), OFF (texto descuento).
   ============================================================ */
(function(){
  var FIN  = new Date('2026-08-23T23:59:59-03:00').getTime();  // fin real (ART)
  var CODE = 'DRAKO360';
  var OFF  = '10% OFF';
  var URG_H = 6;   // horas antes del fin -> modo "¡Últimas horas!"
  var ANCLA = '.js-section-products-best-seller, [data-store="home-products-best-seller"]';

  var CSS=".drk-promo{position:relative;overflow:hidden;border-radius:14px;margin:0 0 16px;background:linear-gradient(135deg,#4a0014 0%,#20060c 55%,#0d0d0d 100%);border:1.5px solid #d4af37;box-shadow:0 8px 26px rgba(128,0,32,.3);}"+
    ".drk-promo.urgente{border-color:#ff3b5c;box-shadow:0 8px 26px rgba(255,59,92,.32);background:linear-gradient(135deg,#4a0012 0%,#1e0407 55%,#0d0d0d 100%);}"+
    ".drk-promo::before{content:'';position:absolute;inset:0;background:radial-gradient(circle at 15% 20%,rgba(212,175,55,.14),transparent 45%),radial-gradient(circle at 85% 80%,rgba(128,0,32,.35),transparent 55%);pointer-events:none;}"+
    ".drk-promo__top{height:3px;background:linear-gradient(90deg,transparent,#d4af37,transparent);}"+
    ".drk-promo.urgente .drk-promo__top{background:linear-gradient(90deg,transparent,#ff3b5c,transparent);}"+
    ".drk-promo__in{position:relative;padding:18px 20px;text-align:center;}"+
    ".drk-promo__tag{display:inline-flex;align-items:center;gap:7px;color:#f6dd86;font-family:'Oswald','Arial Narrow',sans-serif;font-weight:700;text-transform:uppercase;letter-spacing:.1em;font-size:11px;margin-bottom:10px;}"+
    ".drk-promo.urgente .drk-promo__tag{color:#ff8fa1;}"+
    ".drk-promo__dot{width:6px;height:6px;border-radius:50%;background:#f6dd86;animation:drkPromoPulse 1.2s infinite;}"+
    ".drk-promo.urgente .drk-promo__dot{background:#ff3b5c;animation-duration:.6s;}"+
    "@keyframes drkPromoPulse{0%,100%{opacity:1}50%{opacity:.25}}"+
    ".drk-promo__h{font-family:'Oswald','Arial Narrow',sans-serif;text-transform:uppercase;font-weight:700;line-height:1;font-size:30px;margin:0 0 14px;background:linear-gradient(180deg,#fff 40%,#f6dd86);-webkit-background-clip:text;background-clip:text;color:transparent;}"+
    ".drk-promo__h b{background:linear-gradient(180deg,#f6dd86,#d4af37);-webkit-background-clip:text;background-clip:text;color:transparent;}"+
    ".drk-promo.urgente .drk-promo__h b{background:linear-gradient(180deg,#ff8fa1,#ff3b5c);-webkit-background-clip:text;background-clip:text;color:transparent;}"+
    ".drk-promo__tmr{display:inline-flex;gap:8px;align-items:flex-start;margin-bottom:14px;}"+
    ".drk-promo__u{display:flex;flex-direction:column;align-items:center;gap:5px;}"+
    ".drk-promo__n{font-family:'Oswald','Arial Narrow',sans-serif;font-weight:700;font-size:28px;color:#141414;background:linear-gradient(180deg,#f6dd86,#d4af37);border-radius:9px;padding:8px 11px;min-width:48px;line-height:1;box-shadow:0 3px 10px rgba(0,0,0,.45),inset 0 1px 0 rgba(255,255,255,.5);font-variant-numeric:tabular-nums;}"+
    ".drk-promo.urgente .drk-promo__n{background:linear-gradient(180deg,#ff7a90,#ff3b5c);color:#fff;}"+
    ".drk-promo__l{font-size:9px;text-transform:uppercase;letter-spacing:.1em;color:#c9a86a;}"+
    ".drk-promo.urgente .drk-promo__l{color:#ff9fb0;}"+
    ".drk-promo__s{font-family:'Oswald','Arial Narrow',sans-serif;font-weight:700;font-size:26px;color:#d4af37;margin-top:7px;}"+
    ".drk-promo.urgente .drk-promo__s{color:#ff3b5c;}"+
    ".drk-promo__code{display:inline-flex;border-radius:10px;overflow:hidden;border:2px dashed #d4af37;box-shadow:0 0 0 4px rgba(212,175,55,.08);}"+
    ".drk-promo.urgente .drk-promo__code{border-color:#ff3b5c;box-shadow:0 0 0 4px rgba(255,59,92,.1);}"+
    ".drk-promo__lbl{background:rgba(212,175,55,.12);color:#e8dcae;font-size:10px;text-transform:uppercase;letter-spacing:.06em;padding:10px 12px;font-family:'Oswald','Arial Narrow',sans-serif;display:flex;align-items:center;}"+
    ".drk-promo__val{background:linear-gradient(180deg,#f6dd86,#d4af37);color:#141414;font-family:'Oswald','Arial Narrow',sans-serif;font-weight:700;font-size:19px;letter-spacing:.14em;padding:10px 18px;}"+
    ".drk-promo.urgente .drk-promo__val{background:linear-gradient(180deg,#ff7a90,#ff3b5c);color:#fff;}"+
    /* union: voucher pegado al titulo Week off */
    ".drk-promo{border-radius:14px 14px 0 0 !important;border-bottom:none !important;margin-bottom:0 !important;}"+
    /* titulo nativo Week off: centrado, mismo marco, integrado */
    ".js-section-products-best-seller .js-products-best-seller-title{position:relative;font-family:'Oswald','Arial Narrow',sans-serif !important;color:#fff !important;font-size:24px !important;text-transform:uppercase !important;font-weight:700 !important;letter-spacing:.04em !important;text-align:center !important;background:linear-gradient(180deg,#20060c,#0d0d0d) !important;border:1.5px solid #d4af37 !important;border-top:none !important;border-radius:0 0 14px 14px !important;padding:13px 18px !important;margin:0 0 14px !important;}"+
    ".js-section-products-best-seller .js-products-best-seller-title::before,.js-section-products-best-seller .js-products-best-seller-title::after{content:'';display:inline-block;width:26px;height:2px;background:linear-gradient(90deg,transparent,#d4af37);vertical-align:middle;margin:0 12px 4px;}"+
    ".js-section-products-best-seller .js-products-best-seller-title::after{background:linear-gradient(90deg,#d4af37,transparent);}";
  try{var st=document.createElement('style');st.appendChild(document.createTextNode(CSS));(document.head||document.documentElement).appendChild(st);}catch(e){}

  function z(n){return(n<10?'0':'')+n;}
  function build(){
    if(document.getElementById('drk-promo')) return true;
    var sec=document.querySelector(ANCLA); if(!sec) return false;
    var d=document.createElement('div'); d.id='drk-promo'; d.className='drk-promo';
    d.innerHTML='<div class="drk-promo__top"></div><div class="drk-promo__in">'+
      '<span class="drk-promo__tag"><span class="drk-promo__dot"></span> <span class="drk-promo__tagtxt">Oferta por tiempo limitado</span></span>'+
      '<div class="drk-promo__h">Hasta <b>'+OFF+'</b></div>'+
      '<div class="drk-promo__tmr">'+
        '<span class="drk-promo__u"><span class="drk-promo__n" data-u="d">00</span><span class="drk-promo__l">D\u00edas</span></span><span class="drk-promo__s">:</span>'+
        '<span class="drk-promo__u"><span class="drk-promo__n" data-u="h">00</span><span class="drk-promo__l">Horas</span></span><span class="drk-promo__s">:</span>'+
        '<span class="drk-promo__u"><span class="drk-promo__n" data-u="m">00</span><span class="drk-promo__l">Min</span></span><span class="drk-promo__s">:</span>'+
        '<span class="drk-promo__u"><span class="drk-promo__n" data-u="sc">00</span><span class="drk-promo__l">Seg</span></span>'+
      '</div>'+
      '<div><span class="drk-promo__code"><span class="drk-promo__lbl">Us\u00e1 el c\u00f3digo</span><span class="drk-promo__val">'+CODE+'</span></span></div>'+
      '</div>';
    sec.insertBefore(d, sec.firstChild);
    return true;
  }
  function tick(){
    var r=FIN-Date.now(), d=document.getElementById('drk-promo');
    if(r<=0){ if(d&&d.parentNode) d.parentNode.removeChild(d); return; }   // terminó -> desaparece
    if(!d){ if(!build()) return; d=document.getElementById('drk-promo'); }
    var s=Math.floor(r/1000);
    d.querySelector('[data-u="d"]').textContent=z(Math.floor(s/86400));
    d.querySelector('[data-u="h"]').textContent=z(Math.floor(s%86400/3600));
    d.querySelector('[data-u="m"]').textContent=z(Math.floor(s%3600/60));
    d.querySelector('[data-u="sc"]').textContent=z(s%60);
    var urg = r <= URG_H*3600*1000;
    d.classList.toggle('urgente', urg);
    d.querySelector('.drk-promo__tagtxt').textContent = urg ? '\u00a1\u00daltimas horas!' : 'Oferta limitada';
  }
  document.addEventListener('DOMContentLoaded', tick);
  setInterval(tick, 1000);
})();

/* ============================================================
   SELLO DE OFERTA (bandera bordó) · SOLO en los 10 productos de
   la promo · en la tarjeta del LISTADO (sobre la imagen, arriba izq).
   Contador sincronizado al mismo FIN del voucher (domingo 23).
   Desaparece solo al terminar. NO toca otros productos.
   ============================================================ */
(function(){
  var FIN = new Date('2026-08-23T23:59:59-03:00').getTime();
  var OFF = '-10%';
  var PROMO = {
    "ena-100-whey-2lbs-1dm3m":1,
    "star-nutrition-colageno-hidrolizado-limon-210g-1vcqh":1,
    "star-nutrition-just-plant-2lb-f5qjc":1,
    "star-nutrition-citrato-de-magnesio-60-caps":1,
    "gold-collagen-hidrolized-ahte-bvit-c-200grs-9we7l":1,
    "ena-electrolitos-caja-15-sobres":1,
    "ena-d3-k2-60-caps":1,
    "ena-melena-de-leon-60-caps":1,
    "star-nutrition-carnitina-liquida-500ml-fw63j":1,
    "star-nutrition-collagen-sport-naranja-360g-bgrxs":1
  };
  var CSS=".drk-of{display:inline-flex;align-items:center;gap:7px;position:relative;background:linear-gradient(180deg,#a3122f,#7a0020);color:#fff;font-family:'Oswald','Arial Narrow',sans-serif;font-weight:700;padding:7px 14px 7px 12px;box-shadow:0 4px 12px rgba(0,0,0,.45);border-top:1px solid rgba(246,221,134,.6);border-bottom:1px solid rgba(0,0,0,.3);z-index:6;}"+
    ".drk-of::after{content:'';position:absolute;right:-11px;top:0;bottom:0;width:11px;background:linear-gradient(180deg,#a3122f,#7a0020);clip-path:polygon(0 0,100% 50%,0 100%);}"+
    ".drk-of__off{color:#f6dd86;font-size:14px;letter-spacing:.03em;text-shadow:0 1px 0 rgba(0,0,0,.3);}"+
    ".drk-of__di{width:1px;height:15px;background:rgba(246,221,134,.4);}"+
    ".drk-of__t{display:inline-flex;align-items:center;gap:5px;font-size:13px;}"+
    ".drk-of__t svg{width:13px;height:13px;stroke:#f6dd86;fill:none;}"+
    ".drk-of__n{color:#fff;font-variant-numeric:tabular-nums;}"+
    ".drk-of-wrap{position:absolute;left:0;top:12px;z-index:6;}"+
    ".js-item-image-padding,.item-image{position:relative;}";
  try{var s=document.createElement('style');s.appendChild(document.createTextNode(CSS));(document.head||document.documentElement).appendChild(s);}catch(e){}

  var RELOJ='<svg viewBox="0 0 24 24" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="13" r="8"/><path d="M12 9v4l2 2M9 2h6"/></svg>';
  function z(n){return(n<10?'0':'')+n;}
  function slugFrom(u){ var m=(u||'').match(/\/productos\/([^\/?#]+)/); return m?m[1]:null; }
  function txtTiempo(){
    var r=FIN-Date.now(); if(r<=0) return null;
    var s=Math.floor(r/1000), d=Math.floor(s/86400), h=Math.floor(s%86400/3600), m=Math.floor(s%3600/60), sc=s%60;
    return (d>0?d+'d ':'')+z(h)+':'+z(m)+':'+z(sc);
  }
  function tick(){
    var t=txtTiempo();
    var cards=document.querySelectorAll('.js-item-product');
    for(var i=0;i<cards.length;i++){
      var card=cards[i];
      var link=card.querySelector('a[href*="/productos/"]');
      var slug=link?slugFrom(link.getAttribute('href')):null;
      var wrap=card.querySelector('.drk-of-wrap');
      if(!slug || !PROMO[slug] || !t){ if(wrap) wrap.parentNode.removeChild(wrap); continue; }
      var img=card.querySelector('.js-item-image-padding')||card.querySelector('.item-image');
      if(!img) continue;
      if(!wrap){
        wrap=document.createElement('div'); wrap.className='drk-of-wrap';
        wrap.innerHTML='<span class="drk-of"><span class="drk-of__off">'+OFF+'</span><span class="drk-of__di"></span><span class="drk-of__t">'+RELOJ+'<span class="drk-of__n"></span></span></span>';
        img.appendChild(wrap);
      }
      var n=wrap.querySelector('.drk-of__n'); if(n) n.textContent=t;
    }
  }
  document.addEventListener('DOMContentLoaded', tick);
  setInterval(tick, 1000);
})();

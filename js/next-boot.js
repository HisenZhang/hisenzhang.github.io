NexT.boot={},NexT.boot.registerEvents=function(){NexT.utils.registerScrollPercent(),NexT.utils.registerCanIUseTag(),document.querySelector(".site-nav-toggle .toggle").addEventListener("click",e=>{e.currentTarget.classList.toggle("toggle-close");const t=document.querySelector(".site-nav");if(t){var i=document.body.classList.contains("site-nav-on"),e=NexT.utils.getComputedStyle(t);t.style.height=i?e:0;const o=()=>document.body.classList.toggle("site-nav-on"),a=()=>{t.style.overflow="hidden"},n=()=>{t.style.overflow="",t.style.height=""};window.anime(Object.assign({targets:t,duration:200,height:i?[e,0]:[0,e],easing:"linear"},i?{begin:a,complete:()=>{n(),o()}}:{begin:()=>{a(),o()},complete:n}))}});document.querySelectorAll(".sidebar-nav li").forEach((o,a)=>{o.addEventListener("click",()=>{if(!o.matches(".sidebar-toc-active .sidebar-nav-toc, .sidebar-overview-active .sidebar-nav-overview")){const e=document.querySelector(".sidebar-inner"),t=document.querySelectorAll(".sidebar-panel"),i=["sidebar-toc-active","sidebar-overview-active"];window.anime({duration:200,targets:t[1-a],easing:"linear",opacity:0,translateY:[0,-20],complete:()=>{e.classList.replace(i[1-a],i[a]),window.anime({duration:200,targets:t[a],easing:"linear",opacity:[0,1],translateY:[-20,0]})}})}})}),window.addEventListener("resize",NexT.utils.initSidebarDimension),window.addEventListener("hashchange",()=>{const e=location.hash;if(""!==e&&!e.match(/%\S{2}/)){const t=document.querySelector(`.tabs ul.nav-tabs li a[href="${e}"]`);t&&t.click()}})},NexT.boot.refresh=function(){CONFIG.prism&&window.Prism.highlightAll(),CONFIG.fancybox&&NexT.utils.wrapImageWithFancyBox(),CONFIG.mediumzoom&&window.mediumZoom(".post-body :not(a) > img, .post-body > img",{background:"var(--content-bg-color)"}),CONFIG.lazyload&&window.lozad(".post-body img").observe(),CONFIG.pangu&&window.pangu.spacingPage(),CONFIG.exturl&&NexT.utils.registerExtURL(),NexT.utils.registerCopyCode(),NexT.utils.registerTabsTag(),NexT.utils.registerActiveMenuItem(),NexT.utils.registerLangSelect(),NexT.utils.registerSidebarTOC(),NexT.utils.wrapTableWithBox(),NexT.utils.registerVideoIframe()},NexT.boot.motion=function(){CONFIG.motion.enable&&NexT.motion.integrator.add(NexT.motion.middleWares.header).add(NexT.motion.middleWares.postList).add(NexT.motion.middleWares.sidebar).add(NexT.motion.middleWares.footer).bootstrap(),NexT.utils.updateSidebarPosition()},document.addEventListener("DOMContentLoaded",()=>{NexT.boot.registerEvents(),NexT.boot.refresh(),NexT.boot.motion()});
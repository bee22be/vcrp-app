function c(t){return new Promise(i=>{const e=document.querySelector(".originDialog"),n=document.querySelector(".originDialogMessage"),o=document.querySelector(".originDialogOk"),r=document.querySelector(".originDialogCancel");n.textContent=t,e.showModal(),o.onclick=()=>{e.close(),i(!0)},r.onclick=()=>{e.close(),i(!1)},e.addEventListener("close",()=>{o.onclick=null,r.onclick=null},{once:!0})})}(function(){const t=document.createElement("link").relList;if(!(t&&t.supports&&t.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0})}function i(e){if(e.ep)return;e.ep=!0;const n=function(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}(e);fetch(e.href,n)}})();export{c as o};

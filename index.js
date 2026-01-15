import{a as d,S as f,i as a}from"./assets/vendor-DvfmeZXB.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const p="https://pixabay.com/api/",m="54179353-52b74677f97422d49d8297fd1";async function g(o){return(await d.get(p,{params:{key:m,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}const c=document.querySelector(".gallery"),y=new f(".gallery a",{captionsData:"alt",captionDelay:250});function h(o){const r=o.map(({webformatURL:i,largeImageURL:n,tags:e,likes:t,views:s,comments:l,downloads:u})=>`
    <li class=gallery-item>
    <a href="${n}">
        <img src="${i}" alt="${e}" />
    </a>
    <div class=gallery-info>
        <p><b>Likes:</b> ${t}</p>
        <p><b>Views:</b> ${s}</p>
        <p><b>Comments:</b> ${l}</p>
        <p><b>Downloads:</b> ${u}</p>
    </div>
    </li>`).join("");c.insertAdjacentHTML("beforeend",r),y.refresh()}function b(){c.innerHTML=""}function L(){document.querySelector(".loader").classList.remove("is-hidden")}function S(){document.querySelector(".loader").classList.add("is-hidden")}const q=document.querySelector(".form");q.addEventListener("submit",w);function w(o){o.preventDefault();const r=o.currentTarget.elements["search-text"].value.trim();if(!r){a.warning({message:"Please enter a search query",position:"topRight"});return}b(),L(),g(r).then(i=>{if(i.hits.length===0){a.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}h(i.hits),o.target.reset()}).catch(()=>{a.error({message:"Something went wrong. Please try again later",position:"topRight"})}).finally(()=>{S()})}
//# sourceMappingURL=index.js.map

import{a,S as c,i as l}from"./assets/vendor-C0nyh4Ze.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();function d(s){const r="52265753-7181a70cf6dcebc2c39de477c",o="/api/";return a.defaults.baseURL="https://pixabay.com",a.get(o,{params:{key:r,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(i=>(console.log(i.data.hits),i.data.hits)).catch(i=>[])}function u(s){const r=document.querySelector(".gallery");r.innerHTML="";const o=s.map(e=>`<li class="gallery-item">
         <div><a href="${e.largeImageURL}">
         <img class="gallery-img" src="${e.previewURL}" alt="${e.tags}" />
         </a>
         <div class="img-info">
          <div class="info-block">
            <p>
             Likes
            </p>
            <p>
              ${e.likes}
             </p>
          </div>
          <div class="info-block">
            <p>
              Views</p>
            <p>
              ${e.views}
            </p>
          </div>
          <div class="info-block">
            <p>
              Comments
            </p>
            <p>
              ${e.comments}
            </p>
          </div>
          <div class="info-block">
            <p>
              Downloads
            </p>
            <p>
              ${e.downloads}
            </p>
          </div>
        </div>
      </div>
      </li>`).join("");r.insertAdjacentHTML("beforeend",o),new c(".gallery a",{}).refresh()}function f(){document.getElementById("loader").classList.remove("hidden")}function p(){document.getElementById("loader").classList.add("hidden")}document.querySelector("button");document.querySelector("input");const m=document.querySelector("form");m.addEventListener("submit",s=>{s.preventDefault();const r=s.currentTarget.elements["search-text"].value.trim();f(),d(r).then(o=>{if(o.length===0)return l.show({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",color:"red"});u(o)}).finally(()=>{p()})});
//# sourceMappingURL=index.js.map

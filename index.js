import{i as n,S as u}from"./assets/vendor-5ObWk2rO.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const f="43820023-fa202629be5215ad836dbfc98",p="https://pixabay.com/api/",m=(s="cat")=>{const o=new URLSearchParams({key:f,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${p}?${o}`).then(t=>{if(!t.ok)throw new Error(t.statusText);return t.json()})},y=s=>s.map(({webformatURL:o,largeImageURL:t,tags:i,likes:e,view:r,comments:l,downloads:h})=>`<li class="gallery-item">
                       <a class="gallery-link js-gallery-link" href="${t}">
                         <img src="${o}" alt="${i}" title="${i}">
                      </a>

                      <div class="image-details">
                         <ul class="details-title">
                             <li class="details-title-det">
                                  <h3 class="title-info">Likes</h3>
                                  <p class="paragraph-info">${e}</p>
                                </li>
                                <li class="details-title-det">
                                 <h3 class="title-info">Views</h3>
                                 <p class="paragraph-info">${r}</p>
                               </li>  
                             <li class="details-title-det">
                                 <h3 class="title-info">Comments</h3>
                                 <p class="paragraph-info">${l}</p>
                             </li>  
                              <li class="details-title-det">
                                  <h3 class="title-info">Downloads</h3>
                                  <p class="paragraph-info">${h}</p>
                              </li>
                 
                            </ul>
                      </div>
                  </li>`).join(""),g=document.querySelector(".js-search-form"),a=document.querySelector(".gallery"),d=document.querySelector(".loader");let c;function L(s){s.preventDefault();const o=s.target.elements.searchKeyword.value.trim();if(o===""){a.innerHTML="",s.target.reset(),n.show({message:"Input field cannot be empty",position:"topRight",timeout:2e3,color:"red"});return}a.innerHTML="",d.classList.remove("is-hidden"),m(o).then(t=>{if(console.log("Received data:",t),t.hits.length===0||!t.hits){n.show({message:"Sorry, there are no images for this query",position:"topRight",timeout:2e3,color:"red"}),a.innerHTML="";return}a.innerHTML=y(t.hits),c&&c.destroy(),c=new u(".js-gallery a",{captionDelay:250})}).catch(t=>{console.error("Error fetching photos:",t),n.show({message:"An error occurred while fetching photos",position:"topRight",timeout:2e3,color:"red"})}).finally(()=>{s.target.reset(),d.classList.add("is-hidden")})}g.addEventListener("submit",L);
//# sourceMappingURL=index.js.map

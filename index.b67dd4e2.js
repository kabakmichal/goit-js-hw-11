const e=document.querySelector(".search_input"),n=document.querySelector(".search_btn"),a=document.querySelector(".gallery");let o=1;const t=async()=>{const n=`https://pixabay.com/api/?key=29544011-a26ad759f9849933fa3601a5e&q=${e.value.trim()}&image_type=photo&orientation=horizontal&safesearch=true&page=${o}&per_page=40`,a=await fetch(`${n}`),t=await a.json(),s=[];return t.hits.forEach((async e=>{s.push(e)})),console.log(Array.isArray(s)),console.log(s),s},s=e=>{const n=e.map((e=>`<div class="photo-card">\n  <img src="${e.webformatURL}" alt="${e.tags}" loading="lazy" />\n  <div class="info">\n    <p class="info-item">\n      <b>Likes</b> ${e.likes}\n    </p>\n    <p class="info-item">\n      <b>Views</b> ${e.views}\n    </p>\n    <p class="info-item">\n      <b>Comments</b> ${e.comments}\n    </p>\n    <p class="info-item">\n      <b>Downloads</b> ${e.downloads}\n    </p>\n  </div>\n</div>`)).join("");a.innerHTML=n};t().then((e=>{s(e),o+=1})).catch((e=>console.log(e))),n.addEventListener("click",(async e=>{e.preventDefault();try{const e=await t();s(e)}catch(e){console.log(e.message)}}));
//# sourceMappingURL=index.b67dd4e2.js.map

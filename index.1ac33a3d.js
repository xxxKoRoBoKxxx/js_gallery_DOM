var e=document.querySelector("#largeImg");document.querySelector("#thumbs").addEventListener("click",function(t){if(t instanceof Event){t.preventDefault();var r=t.target;r.matches(".list-item__link")?e.setAttribute("src",r.href):r.matches(".gallery__thumb")&&e.setAttribute("src",r.parentElement.href)}});
//# sourceMappingURL=index.1ac33a3d.js.map

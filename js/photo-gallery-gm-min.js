!function a(l,s,o){function r(e,t){if(!s[e]){if(!l[e]){var i="function"==typeof require&&require;if(!t&&i)return i(e,!0);if(d)return d(e,!0);var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}var c=s[e]={exports:{}};l[e][0].call(c.exports,function(t){return r(l[e][1][t]||t)},c,c.exports,a,l,s,o)}return s[e].exports}for(var d="function"==typeof require&&require,t=0;t<o.length;t++)r(o[t]);return r}({1:[function(t,e,i){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(t){var c=document.querySelector("[data-gallery='".concat(t,"']"));if(c){var e=function(t){var e=t.target,i=e.parentElement,n=window.pageYOffset;d.style.position="relative",d.style.overflow="hidden",r.forEach(function(t){t.classList.remove("active")}),i.classList.add("active"),i.style.top="".concat(n,"px"),i.style.width="".concat(window.innerWidth,"px"),i.style.maxWidth="unset",i.style.maxHeight="unset",e.classList.add("active"),f.classList.add("active"),p.classList.add("active"),u.classList.add("active"),a(),o()},a=function(){setTimeout(function(){i.forEach(function(t){var e=u.clientWidth,i=u.clientHeight,n=p.clientHeight,c=t.offsetTop,a=t.offsetLeft,l=f.clientHeight;t.parentElement.className.includes("active")&&(f.style.top="calc(".concat(pageYOffset,"px + ").concat(c,"px - (").concat(l,"px + 30px))"),f.style.left="calc(".concat(window.innerWidth,"px - (").concat(a,"px))"),u.style.left="calc(".concat(window.innerWidth,"px - (").concat(a,"px + ").concat(t.clientWidth,"px  + ").concat(e,"px + 10px)"),u.style.top="calc((".concat(pageYOffset,"px + ").concat(c,"px) + (").concat(t.clientHeight,"px / 2 - ").concat(i,"px / 2))"),p.style.left="calc(".concat(window.innerWidth,"px - ").concat(a,"px + 10px "),p.style.top="calc((".concat(pageYOffset,"px + ").concat(c,"px) + (").concat(t.clientHeight,"px / 2 - ").concat(n,"px / 2))"))})})},l=function(t){t.classList.remove("active"),t.firstElementChild.classList.remove("active"),t.firstElementChild.style.maxWidth="",t.firstElementChild.style.maxHeight="",t.firstElementChild.style.objectFit="",t.style.width="",t.style.top="",t.style.maxWidth="",t.style.maxHeight="",t.firstElementChild.style.width="",t.firstElementChild.style.height=""},s=function(){i.forEach(function(t){window.pageYOffset;t.parentElement.className.includes("active")&&(t.style.maxWidth="calc(100vw - 100px)",t.style.maxHeight="calc((".concat(window.innerHeight,"px - 150px)"),t.style.objectFit="unset")})},o=function(){(r[r.length-1].nextElementSibling===f||p||u)&&r[r.length-1].className.includes("active")?p.setAttribute("disabled",""):p.removeAttribute("disabled"),null===r[0].previousElementSibling&&r[0].className.includes("active")?u.setAttribute("disabled",""):u.removeAttribute("disabled")},r=c.querySelectorAll("div"),i=c.querySelectorAll("img"),d=document.querySelector("body"),f=document.createElement("button");f.innerHTML="X",c.appendChild(f);var p=document.createElement("button"),u=document.createElement("button");p.innerHTML=">",u.innerHTML="<",c.appendChild(p),c.appendChild(u),i.forEach(function(t){t.addEventListener("click",e),t.addEventListener("click",s),t.addEventListener("click",a)}),window.addEventListener("resize",a),f.addEventListener("click",function(){var t=c.querySelector("div.active");f.classList.remove("active"),u.classList.remove("active"),p.classList.remove("active"),f.style.top="",u.style.top="",p.style.top="",f.style.left="",u.style.left="",p.style.left="",d.style.overflow="auto",d.style.position="",p.removeAttribute("disabled"),l(t)}),window.addEventListener("resize",function(){r.forEach(function(t){t.className.includes("active")&&(t.style.top="".concat(pageYOffset,"px"),t.style.width="".concat(window.innerWidth,"px"))})}),p.addEventListener("click",function(){var t=window.pageYOffset,e=c.querySelector("div.active"),i=e.nextElementSibling;i.classList.add("active"),i.style.top="".concat(t,"px"),i.style.width="".concat(window.innerWidth,"px"),i.style.maxWidth="unset",i.style.maxHeight="unset";var n=i.firstElementChild;n.classList.add("active"),s(),a(),l(e),o()}),u.addEventListener("click",function(){var t=window.pageYOffset,e=c.querySelector("div.active"),i=e.previousElementSibling;i.classList.add("active"),i.style.top="".concat(t,"px"),i.style.width="".concat(window.innerWidth,"px"),i.style.maxWidth="unset",i.style.maxHeight="unset";var n=i.firstElementChild;n.classList.add("active"),s(),a(),l(e),o()})}}},{}]},{},[1]);
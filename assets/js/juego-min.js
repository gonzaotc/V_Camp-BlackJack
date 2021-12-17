const miModulo=(()=>{"use strict";const e=["C","D","H","S"],t=["J","Q","K","A"];let s,a=[],n=[],r=100;const l=document.querySelector("#btnPedir"),c=document.querySelector("#btnDetener"),d=document.querySelector("#btnNuevo"),o=document.querySelector("#btnReiniciar"),i=document.querySelectorAll(".player__divCartas"),u=document.querySelectorAll("small"),m=document.querySelector("#fichas"),p=document.querySelector(".message"),b=document.querySelector("#fichas__input"),h=document.querySelector("#player__apostado__fichas"),f=document.querySelector("#errorOutput"),g=()=>(s=b.value)<=0?v("Las fichas a jugar deben ser un número positivo."):s>0&&s>r?v("No podés jugar más fichas de las que tenés, timbero."):(d.disabled=!0,o.disabled=!0,b.value=null,S(r-s),L(s),n=T(),y(),l.disabled=!1,void(c.disabled=!1)),y=()=>{a=[];for(let e=0;e<2;e++)a.push(0),u[e].innerText=0,k(i[e]);q("")},k=e=>{for(;e.children.length>0;)e.removeChild(e.firstChild)},v=e=>{f.innerText=e,setTimeout(()=>{f.innerText=""},1500)},q=e=>{p.innerHTML=e},S=e=>{r=e,m.innerText=e},L=e=>{h.innerText=e,h.parentElement.classList.remove("hide")},T=()=>{n=[];for(let t=2;t<=10;t++)for(let s of e)n.push(t+s);for(let s of t)for(let t of e)n.push(s+t);return _.shuffle(n)},E=()=>{if(0===n.length)throw"No hay cartas en el deck";return n.shift()},x=(e,t)=>(a[t]=a[t]+(e=>{const t=e.substring(0,e.length-1);return isNaN(t)?"A"===t?11:10:+t})(e),u[t].innerText=a[t],a[t]),N=(e,t)=>{const s=document.createElement("img");s.src=`../images/cartas/${e}.png`,s.classList.add("carta"),i[t].append(s)},A=()=>{const[e,t]=a;setTimeout(()=>{e>21?q("Perdiste, te pasaste."):t>21?21===e?(S(r+5*s),q(`<span class="black">¡</span><span class="yellow">Black Jack ${e}</span><span class="black">!</span>, ganaste x5 `)):(S(r+2*s),q("Ganaste!, el casino se pasó.")):t===e?(S(r+1*s),q("Empate, recuperas la apuesta.")):q("Gano el casino."),h.parentElement.classList.add("hide"),d.disabled=!1,o.disabled=!1},1e3)},C=e=>{let t=0;do{const e=E();t=x(e,a.length-1),N(e,a.length-1)}while(t<e&&e<=21);A()};return l.addEventListener("click",()=>{const e=E(),t=x(e,0);N(e,0),t>21?(l.disabled=!0,c.disabled=!0,C(t)):21===t&&(l.disabled=!0,c.disabled=!0,C(t))}),c.addEventListener("click",()=>{l.disabled=!0,c.disabled=!0,C(a[0])}),d.addEventListener("click",()=>{g()}),o.addEventListener("click",()=>{S(100),y(),N("grey_back",0),N("grey_back",0),N("red_back",a.length-1),N("red_back",a.length-1)}),{nuevoJuego:g}})();
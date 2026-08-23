const screens = [...document.querySelectorAll('.screen')];
const nav = [...document.querySelectorAll('[data-go]')];
function goTo(name){screens.forEach(s=>s.classList.toggle('active',s.dataset.screen===name));nav.forEach(n=>n.classList.toggle('active',n.dataset.go===name));window.scrollTo({top:0,behavior:'smooth'});}
nav.forEach(item=>item.addEventListener('click',()=>goTo(item.dataset.go)));
const selects=['protein','carb','vegetables','fat'];
const total=document.querySelector('#mealTotal');
function updateTotal(){const base=[280,220,80,120];const values=selects.map((id,index)=>document.querySelector(`#${id}`).selectedIndex===2&&index<3?[130,230,0][index]:document.querySelector(`#${id}`).selectedIndex===1?[210,160,55,90][index]:base[index]);total.textContent=`${values.reduce((a,b)=>a+b,0)} kcal`;}
selects.forEach(id=>document.querySelector(`#${id}`).addEventListener('change',updateTotal));
document.querySelector('#saveMeal').addEventListener('click',()=>{document.querySelector('#savedMessage').hidden=false;});


const bodyPage = document.body.dataset.page;
document.querySelectorAll('.nav-links a[data-page]').forEach(link=>{
  if(link.dataset.page === bodyPage) link.classList.add('active');
});
const menuButton=document.querySelector('.menu-button');
const nav=document.querySelector('.nav-links');
menuButton?.addEventListener('click',()=>{
  const open=nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded',String(open));
});
document.querySelectorAll('.nav-links a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting)entry.target.classList.add('visible')}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());
const back=document.querySelector('.back-top');
window.addEventListener('scroll',()=>back?.classList.toggle('show',window.scrollY>500));
back?.addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));
const filters=document.querySelectorAll('.filter');
const cards=document.querySelectorAll('.project-library [data-category]');
filters.forEach(button=>button.addEventListener('click',()=>{
  filters.forEach(b=>b.classList.remove('active'));button.classList.add('active');
  const selected=button.dataset.filter;
  cards.forEach(card=>{
    const categories=card.dataset.category.split(' ');
    card.classList.toggle('hidden',selected!=='all'&&!categories.includes(selected));
  });
}));

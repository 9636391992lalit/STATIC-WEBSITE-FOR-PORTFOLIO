document.addEventListener('DOMContentLoaded',()=>{
  // year
  document.getElementById('year').textContent=new Date().getFullYear();

  // nav toggle
  const navToggle=document.getElementById('nav-toggle');
  const siteNav=document.getElementById('site-nav');
  navToggle.addEventListener('click',()=>{
    const shown = siteNav.style.display === 'block';
    siteNav.style.display = shown ? 'none' : 'block';
  });

  // project modal
  const modal=document.getElementById('modal');
  const modalTitle=document.getElementById('modal-title');
  const modalDesc=document.getElementById('modal-desc');
  const modalClose=document.getElementById('modal-close');
  document.querySelectorAll('.project-btn').forEach(btn=>{
    btn.addEventListener('click',()=>{
      modalTitle.textContent=btn.dataset.title;
      modalDesc.textContent=btn.dataset.desc;
      modal.setAttribute('aria-hidden','false');
    });
  });
  modalClose.addEventListener('click',()=>modal.setAttribute('aria-hidden','true'));
  modal.addEventListener('click',(e)=>{ if(e.target===modal) modal.setAttribute('aria-hidden','true'); });

  // contact form (placeholder)
  const form=document.getElementById('contact-form');
  form.addEventListener('submit',(e)=>{
    e.preventDefault();
    alert('Thanks — message simulated (no backend).');
    form.reset();
  });
});

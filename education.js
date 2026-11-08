const viewer=document.querySelector('.photo-viewer');
let photoTrigger;
document.querySelectorAll('[data-photo]').forEach(link=>link.addEventListener('click',event=>{
  if(event.ctrlKey||event.metaKey||event.shiftKey||event.altKey)return;
  event.preventDefault(); photoTrigger=link;
  const original=link.querySelector('img');
  viewer.querySelector('img').src=link.href;
  viewer.querySelector('img').alt=original.alt;
  viewer.querySelector('p').textContent=link.closest('figure').querySelector('figcaption').textContent;
  viewer.showModal();
}));
viewer.querySelector('button').addEventListener('click',()=>viewer.close());
viewer.addEventListener('click',event=>{if(event.target===viewer){const r=viewer.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)viewer.close();}});
viewer.addEventListener('close',()=>photoTrigger?.focus());

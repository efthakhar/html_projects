
 let aqs = Array.prototype.slice.call(document.querySelectorAll('.faq-item__qbox'),0);
 let aas = Array.prototype.slice.call(document.querySelectorAll('.faq-item__ansbox'),0);
 aqs.forEach( aq => {
      aq.addEventListener('click',(e)=>{  
        aqs.forEach((aq)=>{
           aq.lastElementChild.style.transform = 'rotate(0deg)'; 
           aq.style.backgroundColor = '';         
        })
        aas.forEach((aa)=>{
            aa.style.display = 'none';           
        })
       aq.nextElementSibling.style.display = 'block';
       aq.style.backgroundColor = 'rgba(212, 36, 36, 0.986)';
       aq.lastElementChild.style.transform = 'rotate(180deg)';
    
      })
  });







 let fbtns = document.getElementsByClassName('course-item-nav');
 let fitems = document.getElementsByClassName('course-item');

 document.querySelector('.course-items-navs').firstElementChild.classList.add('activenav')




 for(i = 0; i< fbtns.length;i++){

    
    let fbtn = fbtns[i];

   fbtns[i].addEventListener('click',(e)=>{


    
     

       let filterdata = e.target.getAttribute('data-filter');

       for(x = 0; x < fitems.length; x++){

        let targetdata = fitems[x].getAttribute('data-target');

    

        if(targetdata.includes(filterdata)){
           fitems[x].classList.add('display');
           fitems[x].classList.remove('hide');
         
           
            for(z=0;z<fbtns.length;z++){
                fbtns[z].classList.remove('activenav')
            }
            fbtn.classList.add('activenav');
         
           
         
        }else{
            fitems[x].classList.add('hide');
            fitems[x].classList.remove('display');
           
         
          
        }

       }

   })
 }
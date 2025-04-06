 window.addEventListener('scroll',function(){
            const navbar=document.getElementById('navbar');
            const links=this.document.querySelectorAll('#navbar a');
            if(window.scrollY>50){
                navbar.classList.add('scrolled');
                links.forEach(link =>{
                    link.style.color='#043604';
                });
            }else{
                navbar.classList.remove('scrolled'); 
                links.forEach(link =>{
                    link.style.color='white';
                }); 
            }
        });


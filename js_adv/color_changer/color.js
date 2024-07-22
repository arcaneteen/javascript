const button=document.querySelectorAll('.button');

const body=document.querySelector('body');

button.forEach((button)=>{
    // console.log(button.id);
    //const e= button.id
    button.addEventListener('click',(e)=>{
        console.log(e)
        console.log(e.target)//kis target se yeh element aya-span
        switch(e.target.id){
            case 'plum':
                
            body.style.backgroundColor=e.target.id;
                break;
            case 'grey':
                
            body.style.backgroundColor=e.target.id;
                break;
            case 'blue':
                
            body.style.backgroundColor=e.target.id;
                break;
            case 'pink':
                
            body.style.backgroundColor=e.target.id;
                break;
            case 'lavender':
                
            body.style.backgroundColor=e.target.id;
                break;
        }
    })
});
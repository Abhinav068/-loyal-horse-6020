let ele=document.querySelectorAll('.left')
console.log(ele);

ele.forEach(el=>{
    el.addEventListener('click',(event)=>{
        console.log(event);
    })
})
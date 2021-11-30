let input=document.querySelector('#input');
let btn=document.querySelector('#btn');
let list=document.querySelector('#list');

let lists=document.querySelector('#lists');
let el=document.querySelector('#li');
var arr1=[];

btn.addEventListener('click', ()=>{
    let input=document.querySelector('#input');

    if (input.value==="") {
        alert('What do you want to do?');
    } else {
            function myFunction() {
            arr1.sort(function(a, b){return a-b});
            let txt='<li><button class="btn btn-dark m-2">' + arr1  + '</button></li>';
            document.getElementById("demo").innerHTML = txt;
        };
        
        arr1.push(input.value);
        let li=document.createElement('li');
        let txt='<li><button class="btn btn-dark m-2">' + input.value  + '</button></li>';
        li.innerHTML=txt;
        myFunction();
        list.insertBefore(li, list.childNodes[0]);
        input.value='';
        return txt;
    }
})
const title = document.querySelector('h1')
let names = ['Hi 👋','I am Duy','Tớ tên Duy']
let index = 0;

setInterval(() =>{
    if(index > names.length - 1){
        index = 0;
    }
    title.textContent = names[index]
    index ++;
},4000)
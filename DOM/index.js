// get btn 

// get element by id --> return the first element with the id
// get element by class --> return array of elements with the class

let btn = document.getElementsByClassName('btn');
console.log('btn---->', btn);


console.log('btn[0]---->', btn[0]);

for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', function () {
        alert('hello');
        btn[i].style.backgroundColor = 'red';
        let newElement = document.createElement('p');
        newElement.innerHTML = 'hello';
        document.body.appendChild(newElement);
    })
}


let minus = document.getElementsByClassName('minus');
let plus = document.getElementsByClassName('plus');
let counter = document.getElementsByClassName('counter');

console.log('minus---->', minus);
console.log('plus---->', plus);
console.log('counter---->', counter);

for (let i = 0; i < minus.length; i++) {
    minus[i].addEventListener('click', function () {
        if (counter[i].innerHTML > 0) { counter[i].innerHTML--; }

    })
}

for (let i = 0; i < plus.length; i++) {
    plus[i].addEventListener('click', function () {
        counter[i].innerHTML++;
        localStorage.setItem('counter', counter[i].innerHTML);
    })
}
document.write(localStorage.getItem('counter'));
// on load page 
// change style 
// change content
// add new element


// btn[0].onClick=function(){
//     alert('hello');
// }
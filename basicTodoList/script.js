
let inputElem = document.querySelector('input');
let btn = document.querySelector('button');
let list = document.querySelector('.todo-list .list')



console.log(inputElem, btn);
const addTodo = () => {
    if(inputElem.value === ''){
        return;
    }
    let li = document.createElement('li');
    let para = document.createElement('p');
    let button = document.createElement('button');
    button.classList = 'del';
    button.textContent = 'delete';
    console.log(button);
    
    para.innerHTML = inputElem.value;
    li.append(para);
    li.append(button);
    list.append(li);
    inputElem.value = '';
}


btn.addEventListener('click', () => {
    addTodo();
})

list.addEventListener('click', (e) => {
     if (e.target.classList.contains('del')) {
        e.target.parentElement.remove();
        console.log(list);        
    }
})

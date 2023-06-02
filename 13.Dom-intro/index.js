function addTodo() {
    ul = document.getElementById("ul");
    inp = document.getElementById("inp")
    li = document.createElement('li');
    li.textContent = inp.value;
    cross = document.createElement('button');
    cross.textContent = 'X';
    cross.addEventListener('click', function handleClick(event) {
        event.srcElement.parentElement.remove();
    });
    li.appendChild(cross);
    ul.appendChild(li);
    inp.value = '';
}
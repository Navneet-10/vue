// getting the button element 
const buttonEl = document.querySelector('button');

// getting the input element
const inputEl = document.querySelector('input');

// getting the unordered list element which we intend to modify later
const listEl = document.querySelector('ul');

//function to modify the ul and add li with the input text content
function addGoal() {
    const enteredValue = inputEl.value;
    const listItemEl = document.createElement('li');
    listItemEl.textContent = enteredValue;
    listEl.appendChild(listItemEl);
    inputEl.value='';
}

buttonEl.addEventListener('click', addGoal);
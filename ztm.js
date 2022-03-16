let button = document.getElementById('enter');
let input = document.getElementById('userinput');
let ul = document.querySelector('ul');

// DRY = Don't Repeat Yourself
const inputLength = (() =>{
  return input.value.length;
});

const createListElement = (() =>{
  let li = document.createElement('li');
  li.append(document.createTextNode(input.value));
  ul.append(li);
  input.value = '';
});

const addListAfterClick = (() =>{
  if(inputLength() > 0){
    createListElement();
  }
});
const addListAfterPressEnter = (e =>{
  if(inputLength() > 0 && e.keyCode === 13){
    createListElement();
  }
})

button.addEventListener('click',addListAfterClick );

input.addEventListener('keypress', addListAfterPressEnter);
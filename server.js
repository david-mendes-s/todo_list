const addItem = (item) => { 
    const createItem = document.createElement('li');
    const createContainer = document.createElement('div');

    const textItem = document.createElement('p')
    const createChecked = document.createElement('div');

    const createDelete =  document.createElement('button');

    textItem.textContent = item;
    createDelete.textContent = "🗑️";

    createChecked.classList.add("todo__list__checked");
    createItem.classList.add("todo__list__item");
    createContainer.classList.add("todo__list__group");
    
    const list = document.querySelector(".todo__list_content");
    
    list.appendChild(createItem);
    
    createItem.appendChild(createContainer);
    createContainer.appendChild(createChecked);
    createContainer.appendChild(textItem);
    createItem.appendChild(createDelete);

    createChecked.addEventListener('click', () => handleChecked(createChecked, textItem));
    
    createDelete.addEventListener('click', () => handleDeleteItem(createItem));
    
}

const handleChecked = (item, textItem) => {
    if(!item.classList.contains('completed')){
        item.classList.add("completed");
        item.classList.remove("todo__list__checked");
        textItem.classList.add("active__text");
    }else {
        item.classList.remove("completed");
        item.classList.add("todo__list__checked");
        textItem.classList.remove("active__text");
    }
}

const handleDeleteItem = (item) => {
    item.remove();
}

const handleCurrentDate = () => {
    const currentDate = new Date();

    const date = `${currentDate.getDate()}/${currentDate.getMonth()+1}/${currentDate.getFullYear()}`;

    const dateValue = document.querySelector(".todo__day__extension");
    const weekDay = document.querySelector(".todo__day__week");

    dateValue.textContent = date;

   
    switch (currentDate.getDay()) {
        case 0:
        weekDay.textContent = 'Domingo';
        break;
        case 1:
        weekDay.textContent = 'Segunda-feira';
        break;
        case 2:
        weekDay.textContent = 'Terça-feira';
        break;
        case 3:
        weekDay.textContent = 'Quarta-feira';
        break;
        case 4:
        weekDay.textContent = 'Quinta-feira';
        break;
        case 5:
        weekDay.textContent = 'Sexta-feira';
        break;
        case 6:
        weekDay.textContent = 'Sábado';
        break;
        default:
        weekDay.textContent = 'Dia da semana inválido';
        break;
    }
  
}



const handleInputValue = () => {
    const valueInput = document.querySelector(".todo__addItem__input");
    const textValue = valueInput.value;

   if(textValue === ""){
    alert("campo vazio!")
   }else{
    addItem(textValue);
    valueInput.value = "";
   }

}

const handleSubmitValue = document.querySelector(".todo__addItem__button");
handleSubmitValue.addEventListener('click', () => handleInputValue());

document.addEventListener('DOMContentLoaded', () => {
    handleCurrentDate();
});
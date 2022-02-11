let myLibrary = [];
const cardContainer = document.querySelector('div.cardContainer');
const Book = function(title, author, pages, read, dataValue) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.dataValue = `-1`;
    const display = function() {
        const card = document.createElement('div');
        card.classList.add('bookCard');
        card.setAttribute('id', `null`);
        cardContainer.appendChild(card);
        const title = document.createElement('div');
        title.textContent = `${this.title}`;
        title.classList.add('cardTitle');
        card.appendChild(title);
        const author = document.createElement('div');
        author.textContent = `${this.author}`;
        author.classList.add('cardAuthor');
        card.appendChild(author);
        const pages = document.createElement('div');
        pages.textContent = `${this.pages} pages`;
        pages.classList.add('cardPages');
        card.appendChild(pages);
        const readLabel = document.createElement('label');
        readLabel.setAttribute('for', 'read');
        readLabel.classList.add('toggle');
        if (this.read == 'Read') {
            readLabel.classList.add('active');
        }
        readLabel.textContent = `${this.read}`;
        card.appendChild(readLabel);
        const removeContainer = document.createElement('div');
        removeContainer.classList.add('removeContainer')
        card.appendChild(removeContainer);
        const remove = document.createElement('button');
        remove.classList.add('remove');
        remove.textContent = `Delete`;
        removeContainer.appendChild(remove);
        const number = document.createElement('div');
        number.classList.add('number');
        removeContainer.appendChild(number);
    }
    const updateRead = function() {
        const getCard = document.getElementById(`${this.dataValue}`);
        const getLabel = getCard.querySelector('label');
        if (this.read == 'Unread') {
            this.read = 'Read';
            getLabel.classList.add('active');
        }
        else {
            this.read = 'Unread';
            getLabel.classList.remove('active');
        }
        getLabel.textContent = `${this.read}`;
        return console.log(`${this.read}`);
    }
    const deleteCard = function() {
        const cardContainer = document.querySelector(`div.cardContainer`);
        console.log(this.dataValue);
        const libCard = document.getElementById(`${this.dataValue}`);
        cardContainer.removeChild(libCard);
    }
    const addToLibrary = function() {
        myLibrary.push(this);
    }
    return {title, author, pages, read, dataValue, updateRead, deleteCard, display, addToLibrary};
}
let book1 = new Book('A Very Punchable Face', 'Colin Jost', 346, 'Read');
let book2 = new Book('Emperor of All Maladies', 'Siddhartha Mukherjee', 608, 'Unread');
let book3 = new Book('Zero Fail', 'Carol Leonig', 561, 'Read');
book1.addToLibrary();
book2.addToLibrary();
book3.addToLibrary();
const displayLibrary = () => {
    for (i=0; i<myLibrary.length; i++) {
        myLibrary[i].display();
        let dataAttribute = document.querySelector('div.bookCard#null');
        dataAttribute.setAttribute('id', `${i}`);
        myLibrary[i].dataValue = (i);
    }
}
const updateLibrary = (input) => {
    for (i=0; i<myLibrary.length; i++) {
        if (input == i) {
            if (myLibrary.length == 1) {
                myLibrary = [];
            }
            else {
            myLibrary.splice(i, 1);
            }
        }
    }
}
const updateNumber = function() {
    const cardNumber = Array.from(cardContainer.querySelectorAll('div.number'));
    let dataAttribute = Array.from(cardContainer.querySelectorAll('div.bookCard'));
    for (i=0; i<myLibrary.length; i++) {
        myLibrary[i].dataValue = i;
        dataAttribute[i].setAttribute('id', `${i}`);
        cardNumber[i].textContent = `#${i + 1}`;
    }
}
const listener = function() {
    const deleteButton = Array.from(document.querySelectorAll('button.remove'));
    deleteButton.forEach(function(part, index) {
        deleteButton[index].addEventListener('click', (e) => {
            let x = e.target.parentNode.parentNode;
            runItBack(x.id);
        }) 
    })
    const readLabel = Array.from(document.querySelectorAll('label.toggle'));
    readLabel.forEach(function(part, index) {
        readLabel[index].addEventListener('click', (e) => {
            let x = e.target.parentNode;
            myLibrary[x.id].updateRead();
        })
    })
}
// modal listeners / functions
const modalListener = () => {
    const modal = document.querySelector('div.addmodal');
    const addButton = document.querySelector('button.add');
    addButton.addEventListener('click', e => {
        modal.style.display = "block";
    })
    const closeBtn = document.querySelector('span.close');
    closeBtn.addEventListener('click', e => {
        modal.style.display = "none";
        clearForm();
    })
    const resetBtn = document.querySelector('input.reset');
    resetBtn.addEventListener('click', e => {
        clearForm();
    })
    const userInput = document.querySelectorAll('input.form');
    const clearForm = () => {
        userInput.forEach(form => form.value = ``);
    }
    const inLibrary = function(input) {
        console.log(input);
        let check = myLibrary.find(book => book.title == input.title);
        console.log(check);
        if (check == undefined) {
            input.addToLibrary();
            console.log(myLibrary);
        } else {
            alert(`no bueno`);
        }
    }
    let inputValues = [];
    const concatForm = () => {
        userInput.forEach(function(part, index) {
            inputValues.push(`${userInput[index].value}`);
        })
            console.log(inputValues);
    }
    const submitBtn = document.querySelector('input.submit');
    submitBtn.addEventListener('click', e => {
        concatForm();
        const newBook = new Book(inputValues[0], inputValues[1], inputValues[2], inputValues[3]);
        console.log(inLibrary(newBook));
        modal.style.display = "none";
        // displayLibrary();
        clearForm();
        inputValues = [];
    })
}
// const inLibrary = function(input) {
//     let x = 0;
//     for (i=0; i<library.length; i++) {
//       if (library[i].title === input.title) {
//           x++;
//     return alert(`That book is already in the library!`);
//     }}
//     if (x == 0) {
//     bookAdd(input);
//     console.log(`book add`);
//     }
// }
// const submitBtn = document.querySelector('input.submit');
// submitBtn.addEventListener('click', e => {
//     concatForm();
//     const newTitle = new book(inputValues[0], inputValues[1], inputValues[2], inputValues[3], inputValues[4],);
//     inLibrary(newTitle);
//     modal.style.display = "none";
//     display();
//     clearForm();
//     inputValues = [];
// })
// const resetBtn = document.querySelector('input.reset');
// resetBtn.addEventListener('click', e => {
//     clearForm();
// })
// const userInput = document.querySelectorAll('input.form');
// const clearForm = function() {
//     userInput.forEach(function(part, index) {
//     userInput[index].value = '';
//     })
// }
// let inputValues = [];
// const concatForm = function() {
//     userInput.forEach(function(part, index) {
//     inputValues.push(`${userInput[index].value}`);
//     })
// }
const runItBack = function(input) {
    myLibrary[input].deleteCard();
    updateLibrary(input);
    updateNumber();
}
displayLibrary();
listener();
modalListener();
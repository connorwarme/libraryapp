let library = [];
const book = function(title, author, genre, pages, year) {
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.pages = pages;
    this.year = year;
}
const bookAdd = function(input) {
    library.push(input);
}
let label = document.querySelectorAll('label.toggle');
const mainbody = document.querySelector('div.main');
const cardContainer = document.querySelector('div.cardContainer');
const display = function() {
    clearCards();
    for (i=0; i<library.length; i++) {
    const card = document.createElement('div');
    card.classList.add('libcard')
    card.setAttribute('id', `${i}`);
    cardContainer.appendChild(card);
    const title = document.createElement('div');
    title.textContent = `${library[i].title}`;
    title.classList.add('cardTitle');
    card.appendChild(title);
    const author = document.createElement('div');
    author.textContent = `${library[i].author}`;
    author.classList.add('cardAuthor');
    card.appendChild(author);
    const genre = document.createElement('div');
    genre.textContent = `${library[i].genre}`;
    genre.classList.add('cardGenre');
    card.appendChild(genre);
    const pages = document.createElement('div');
    pages.textContent = `${library[i].pages} pages`;
    pages.classList.add('cardPages');
    card.appendChild(pages);
    const year = document.createElement('div');
    year.textContent = `${library[i].year}`;
    year.classList.add('cardYear');
    card.appendChild(year);
    const read = document.createElement('input');
    read.classList.add('read');
    read.setAttribute('type', 'checkbox');
    read.setAttribute('id', 'unread');
    read.setAttribute('name', `read`)
    card.appendChild(read);
    const readLabel = document.createElement('label');
    readLabel.setAttribute('for', 'read');
    readLabel.classList.add('toggle');
    readLabel.textContent = `Unread`;
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
    number.textContent = `#${i + 1}`;
    removeContainer.appendChild(number);
    }
    listener();
    label = document.querySelectorAll('label.toggle');
}
const book1 = new book("The Outlaw Ocean", "Ian Urbina", "Investigative Journalism", 560, 2019);
const book2 = new book("Black Mass", "Dick Lehr", "Investigative Journalism", 448, 2012);
library = [book1, book2];
const modal = document.querySelector('div.addmodal');
const addButton = document.querySelector('button.add');
addButton.addEventListener('click', e => {
    modal.style.display = "block";
})
let libcards;
const listener = function() {
const removeButton = Array.from(document.querySelectorAll('button.remove'));
removeButton.forEach(function(part, index) {
    removeButton[index].addEventListener('click', e => {
        for (i=0; i<library.length; i++) {
            libcards = Array.from(document.querySelectorAll('div.libcard'));
        if (index == libcards[i].id) {
            cardContainer.removeChild(libcards[i]);
            if (libcards.length == 1) {
            library = [];
            } else {
            library.splice((index), 1);
            }
        };
    }})
})
}
const clearCards = function() {
    libcards = Array.from(document.querySelectorAll('div.libcard'));
    libcards.forEach(element => {
        cardContainer.removeChild(element);
    })
}
//read/unread toggle
const readButton = Array.from(document.querySelectorAll('input.read'));
console.log(readButton);
readButton.forEach(function(part, index) {
    readButton[index].addEventListener('click', e => {
        console.log(e.target);
        readButton[index].classList.toggle('unread');
        if (readButton[index].classList.value == "read unread") {
            readButton[index].setAttribute('value', 'Unread');
        } else {
            readButton[index].setAttribute('value', 'Read');
        };
    })
})
//check for book in library
// const inLibrary = function(input) {
//     for (i=0; i<library.length; i++) {
//        if (library[i].title === input) {
//     return console.log('clear');
//        } else {
//            console.log('no bueno');
//        }}
// }
const checkBook = library.some(e => {
    e === library.title
})
// event listeners for modal
const closeBtn = document.querySelector('span.close');
closeBtn.addEventListener('click', e => {
    modal.style.display = "none";
    clearForm();
})
const submitBtn = document.querySelector('input.submit');
submitBtn.addEventListener('click', e => {
    concatForm();
    const newTitle = new book(inputValues[0], inputValues[1], inputValues[2], inputValues[3], inputValues[4],);
    bookAdd(newTitle);
    modal.style.display = "none";
    display();
    clearForm();
    inputValues = [];
})
const resetBtn = document.querySelector('input.reset');
resetBtn.addEventListener('click', e => {
    clearForm();
})
const userInput = document.querySelectorAll('input.form');
const clearForm = function() {
    userInput.forEach(function(part, index) {
    userInput[index].value = '';
    })
}
let inputValues = [];
const concatForm = function() {
    userInput.forEach(function(part, index) {
    inputValues.push(`${userInput[index].value}`);
    })
}
//read button
const boom = function() {
label.forEach(function(part, index) {
    label[index].addEventListener('click', e => {
       label[index].classList.toggle('active');
       if (label[index].className == `toggle active`) {
       label[index].textContent = `Read`;
       } else {
        label[index].textContent = `Unread`;
       }
    })
})
}
//stats box
const stats = document.querySelector('div.statsContainer');
const totalBooks = document.createElement('div');
totalBooks.classList.add('tally');
totalBooks.textContent = `Total Books: ${library.length}`;
stats.appendChild(totalBooks);
let pageTotal = 0;
// for (i=0; i<library.length; i++) {
//     pageTotal += library[i].pages;
// }
const totalPages = document.createElement('div');
totalPages.classList.add('tally');
totalPages.textContent = `Total Pages: ${pageTotal}`;
stats.appendChild(totalPages);
const updateStats = function() {
    pageTotal = 0;
    console.log(pageTotal);
    for (i=0; i<library.length; i++) {
        pageTotal += Number(library[i].pages);
    }
    totalPages.textContent = `Total Pages: ${pageTotal}`;
    totalBooks.textContent = `Total Books: ${library.length}`;
}
let readTotal = 0;
const getReadTotal = function() {
    for (i=0; i<library.length; i++) {
        if (label[i].className == `toggle active`) {
            readTotal += Number(library[i].pages)
        }
    }
    totalRead.textContent = `Total Read: ${readTotal}`;
} 
const totalRead = document.createElement('div');
totalRead.classList.add('tally');
totalRead.textContent = `Total Read: ${readTotal}`;
stats.appendChild(totalRead);
display();
listener();
boom();
// console.log(library.some(checkBook));
//issues:

//ideas:
//check for book in library already
//footer. 
//save data (to cloud? login feature needed?)
//"share my library" feature
//sort feature
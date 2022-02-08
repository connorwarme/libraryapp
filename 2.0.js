let myLibrary = [];
const cardContainer = document.querySelector('div.cardContainer');
const Book = function(title, author, pages, read, dataValue) {
    this.title = title;
    this.author = author;
    // this.genre = genre;
    this.pages = pages;
    this.read = read;
    this.dataValue = `-1`;
    // const addToLibrary = (book) => {
    // book.prototype = Object.create(Book.prototype);
    // myLibrary.push(book)};
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
        // const genre = document.createElement('div');
        // genre.textContent = `${this.genre}`;
        // genre.classList.add('cardGenre');
        // card.appendChild(genre);
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
        // number.textContent = `#${i + 1}`;
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
        // const getButton = getCard.querySelector('button.remove');
    }
    return {title, author, genre, pages, read, dataValue, updateRead, deleteCard, display};
}
// create book prototype
Object.prototype.addToLibrary = function() {
    myLibrary.push(this);
}
// Object.prototype.display = function() {
    // const card = document.createElement('div');
    // card.classList.add('bookCard');
    // // card.setAttribute('id', `${i}`);
    // cardContainer.appendChild(card);
    // const title = document.createElement('div');
    // title.textContent = `${this.title}`;
    // title.classList.add('cardTitle');
    // card.appendChild(title);
    // const author = document.createElement('div');
    // author.textContent = `${this.author}`;
    // author.classList.add('cardAuthor');
    // card.appendChild(author);
    // // const genre = document.createElement('div');
    // // genre.textContent = `${this.genre}`;
    // // genre.classList.add('cardGenre');
    // // card.appendChild(genre);
    // const pages = document.createElement('div');
    // pages.textContent = `${this.pages} pages`;
    // pages.classList.add('cardPages');
    // card.appendChild(pages);
    // const readLabel = document.createElement('label');
    // readLabel.setAttribute('for', 'read');
    // readLabel.classList.add('toggle');
    // readLabel.textContent = `${this.read}`;
    // card.appendChild(readLabel);
    // const removeContainer = document.createElement('div');
    // removeContainer.classList.add('removeContainer')
    // card.appendChild(removeContainer);
    // const remove = document.createElement('button');
    // remove.classList.add('remove');
    // remove.textContent = `Delete`;
    // removeContainer.appendChild(remove);
    // const number = document.createElement('div');
    // number.classList.add('number');
    // // number.textContent = `#${i + 1}`;
    // removeContainer.appendChild(number);
    // }

let book1 = new Book('A Very Punchable Face', 'Colin Jost', 346, 'Read');
let book2 = new Book('Emperor of All Maladies', 'Siddhartha Mukherjee', 608, 'Unread');
book1.addToLibrary();
book2.addToLibrary();
// book1.display();
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
                console.log('bingo');
                myLibrary = [];
            }
            else {
            myLibrary.splice(i, 1);
            console.log(myLibrary);
            }
        }
    }
}
const updateNumber = function() {
    const cardNumber = Array.from(cardContainer.querySelectorAll('div.number'));
    console.log(cardNumber);
    for (i=0; i<myLibrary.length; i++) {
        myLibrary[i].dataValue = i;
        cardNumber[i].textContent = `#${i + 1}`;
    }
    for (i=0; i<cardNumber.length; i++) {
        console.log(cardNumber[i]);
    }
}
// const findCard =  myLibrary.filter(x => x == this.dataValue);

// loop thru array & display

// const cardContainer = document.querySelector('div.cardContainer');
// const displayLibrary = () => {
//     for (i=0; i<myLibrary.length; i++) {
//     const card = document.createElement('div');
//     card.classList.add('bookCard');
//     card.setAttribute('id', `${i}`);
//     cardContainer.appendChild(card);
//     const title = document.createElement('div');
//     title.textContent = `${myLibrary[i].title}`;
//     title.classList.add('cardTitle');
//     card.appendChild(title);
//     const author = document.createElement('div');
//     author.textContent = `${myLibrary[i].author}`;
//     author.classList.add('cardAuthor');
//     card.appendChild(author);
//     const genre = document.createElement('div');
//     genre.textContent = `${myLibrary[i].genre}`;
//     genre.classList.add('cardGenre');
//     card.appendChild(genre);
//     const pages = document.createElement('div');
//     pages.textContent = `${myLibrary[i].pages} pages`;
//     pages.classList.add('cardPages');
//     card.appendChild(pages);
//     const year = document.createElement('div');
//     year.textContent = `${myLibrary[i].year}`;
//     year.classList.add('cardYear');
//     card.appendChild(year);
//     const read = document.createElement('input');
//     read.classList.add('read');
//     read.setAttribute('type', 'checkbox');
//     read.setAttribute('id', 'unread');
//     read.setAttribute('name', `read`)
//     card.appendChild(read);
    // const readLabel = document.createElement('label');
    // readLabel.setAttribute('for', 'read');
    // readLabel.classList.add('toggle');
    // readLabel.textContent = `Unread`;
    // card.appendChild(readLabel);
    // const removeContainer = document.createElement('div');
    // removeContainer.classList.add('removeContainer')
    // card.appendChild(removeContainer);
    // const remove = document.createElement('button');
    // remove.classList.add('remove');
    // remove.textContent = `Delete`;
    // removeContainer.appendChild(remove);
    // const number = document.createElement('div');
    // number.classList.add('number');
    // number.textContent = `#${i + 1}`;
    // removeContainer.appendChild(number);
//     }
// }
displayLibrary();
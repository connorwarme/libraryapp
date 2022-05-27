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
    }
    const deleteCard = function() {
        const cardContainer = document.querySelector(`div.cardContainer`);
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
const deleteFn = function(input) {
    myLibrary[input].deleteCard();
    updateLibrary(input);
    updateNumber();
    updateStats();
}
const listener = function() {
    const deleteButton = Array.from(document.querySelectorAll('button.remove'));
    deleteButton.forEach(function(part, index) {
        deleteButton[index].addEventListener('click', (e) => {
            let x = e.target.parentNode.parentNode;
            deleteFn(x.id);
            updateStats();
        })
    })
    const readLabel = Array.from(document.querySelectorAll('label.toggle'));
    readLabel.forEach(function(part, index) {
        readLabel[index].addEventListener('click', (e) => {
            let x = e.target.parentNode;
            myLibrary[x.id].updateRead();
            updateStats();
        })
    })
}
const individualCardListener = function(input) {
    console.log(input);
    const card = document.getElementById(`${input}`);
    const deleteButton = card.querySelector('button.remove');
    deleteButton.addEventListener('click', (e) => {
        let x = e.target.parentNode.parentNode;
        deleteFn(x.id);
        updateStats();
    })
    const readLabel = card.querySelector('label.toggle');
    readLabel.addEventListener('click', (e) => {
        let x = e.target.parentNode;
        myLibrary[x.id].updateRead();
        updateStats();
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
            input.display();
            updateNumber();
            individualCardListener(`${myLibrary.length-1}`);
            console.log(myLibrary);
        } else {
            alert(`This book is already in the library!`);
        }
    }
    let inputValues = [];
    const concatForm = () => {
        userInput.forEach(function(part, index) {
            inputValues.push(`${userInput[index].value}`);
        })
            console.log(inputValues);
    }
    const addReadStatus = () => {
        const select = document.querySelector('select');
        inputValues.push(`${select.value}`);
    }
    const submitBtn = document.querySelector('input.submit');
    submitBtn.addEventListener('click', e => {
        concatForm();
        addReadStatus();
        const newBook = new Book(inputValues[0], inputValues[1], inputValues[2], inputValues[3]);
        inLibrary(newBook);
        updateStats();
        modal.style.display = "none";
        clearForm();
        inputValues = [];
    })
}
// stats box
const stats = document.querySelector('div.statsContainer');
const totalBooks = document.createElement('div');
totalBooks.classList.add('tally');
totalBooks.textContent = `Total Books: ${myLibrary.length}`;
stats.appendChild(totalBooks);
const booksRead = document.createElement('div');
booksRead.classList.add('tally');
stats.appendChild(booksRead);
const totalPages = document.createElement('div');
totalPages.classList.add('tally');
stats.appendChild(totalPages);
const totalRead = document.createElement('div');
totalRead.classList.add('tally');
stats.appendChild(totalRead);
const updateStats = function() {
    label = document.querySelectorAll('label.toggle');
// stats functions
    let booksReadNumber = 0;
    const checkBooksRead = function() {
        label = document.querySelectorAll('label.toggle');
        booksReadNumber = 0;
        for (i=0; i<myLibrary.length; i++) {
            if (label[i].className == `toggle active`) {
            ++booksReadNumber;
            }
        }
        booksRead.textContent = `Books Read: ${booksReadNumber}`;
    } 
    let pageTotal = 0;
    const checkTotalPages = function() {
        pageTotal = 0;
        for (i=0; i<myLibrary.length; i++) {
            pageTotal += Number(myLibrary[i].pages);
        }
        totalPages.textContent = `Total Pages: ${pageTotal}`;
    }
    let pagesRead = 0;
    const checkPagesRead = function() {
        pagesRead = 0;
        for (i=0; i<myLibrary.length; i++) {
            if (label[i].className == `toggle active`) {
            pagesRead += Number(myLibrary[i].pages)
            }
        }
        totalRead.textContent = `Pages Read: ${pagesRead}`;
    }
    checkBooksRead();
    checkTotalPages();
    checkPagesRead();
    updateNumber();
    totalBooks.textContent = `Total Books: ${myLibrary.length}`;
}
displayLibrary();
listener();
modalListener();
updateStats();
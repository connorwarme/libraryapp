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
const mainbody = document.querySelector('div');
const display = function() {
    for (i=0; i<library.length; i++) {
    const card = document.createElement('div');
    card.classList.add('libcard')
    card.setAttribute('id', `${i}`);
    mainbody.appendChild(card);
    const title = document.createElement('div');
    title.textContent = `Title: ${library[i].title}`;
    card.appendChild(title);
    const author = document.createElement('div');
    author.textContent = `Author: ${library[i].author}`;
    card.appendChild(author);
    const genre = document.createElement('div');
    genre.textContent = `Genre: ${library[i].genre}`;
    card.appendChild(genre);
    const pages = document.createElement('div');
    pages.textContent = `Pages: ${library[i].pages}`;
    card.appendChild(pages);
    const year = document.createElement('div');
    year.textContent = `Published: ${library[i].year}`;
    card.appendChild(year);
    const read = document.createElement('input');
    read.classList.add('read');
    read.setAttribute('type', 'button');
    read.setAttribute('id', 'read');
    read.setAttribute('value', `Read`)
    card.appendChild(read);
    const removecontainer = document.createElement('div');
    card.appendChild(removecontainer);
    const remove = document.createElement('button');
    remove.classList.add('remove');
    remove.textContent = `Remove book from library`;
    removecontainer.appendChild(remove);
    }
    listener();
}
const book1 = new book("The Outlaw Ocean", "Ian Urbina", "Investigative Journalism", 560, 2019);
const book2 = new book("Black Mass", "Dick Lehr", "Investigative Journalism", 448, 2012);
library = [book1, book2];

const addButton = document.querySelector('button.add');
addButton.addEventListener('click', e => {
    const newTitle = new book(`${prompt(`Title:`)}`, `${prompt(`Author:`)}`, `${prompt(`Genre:`)}`, `${prompt(`Pages:`)}`, `${prompt(`Year:`)}`);
    console.log(newTitle);
    bookAdd(newTitle);
    console.log(library);
    display();
})
const listener = function() {
const removeButton = Array.from(document.querySelectorAll('button.remove'));
removeButton.forEach(function(part, index) {
    removeButton[index].addEventListener('click', e => {
        console.log(index);
        for (i=0; i<library.length; i++) {
            const libcards = Array.from(document.querySelectorAll('div.libcard'));
        if (index == libcards[i].id) {
            mainbody.removeChild(libcards[i]);
            library.splice(index, 1);
            console.log(library);
        };
    }})
})
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
        // const unread = Array.from(document.querySelectorAll('input.read.unread'));
        // console.log(unread);
        // unread.forEach(function(part, i) {
        //     unread[i].setAttribute('value', 'Unread');
        // })
    })
})
}

//issues:
//typeerror: libcards[i] is undefined (but it is still removing the card from view)
//read status would be cool as a toggle (read/unread) with different colors
//



// function display(book) {
//     const div = document.createElement('div');
//     mainbody.appendChild(div);
//     div.textContent = `${book.title}`;
// }
//ideas:
//outline of card with + inside, as the add button
//background? maybe the desert
// save data (to cloud? login feature needed?)
// "share my library" feature
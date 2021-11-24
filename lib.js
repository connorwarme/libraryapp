let library = [];
const book = function(title, author, genre, pages, year) {
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.pages = pages;
    this.year = year;
}
const bookAdd = function(input) {
    input += library;
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
    read.setAttribute('type', 'radio');
    read.textContent = `Read?`;
    card.appendChild(read);
    const remove = document.createElement('button');
    remove.textContent = `Remove book from library`;
    card.appendChild(remove);
    }
}
const book1 = new book("The Outlaw Ocean", "Ian Urbina", "Investigative Journalism", 560, 2019);
const book2 = new book("Black Mass", "Dick Lehr", "Investigative Journalism", 448, 2012);
library = [book1, book2];
const addContainer = document.createElement('div');
addContainer.classList.add('addC');
mainbody.appendChild(addContainer);
const addButton = document.createElement('button');
addButton.classList.add('add');
addButton.textContent = `Add a Title`;
addContainer.appendChild(addButton);
// addButton.addEventListener('click', e => {
    //prompt (maybe form?) with input lines for book
    //bookAdd function --> add to library array
    //update display with card for each object in library array

//})
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
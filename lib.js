let library = [];
const book = function(title, author, genre, pages, year) {
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.pages = pages;
    this.year = year;
}
const bookAdd = function() {
    book() += library;
}
const mainbody = document.querySelector('div');
// const display = function() {
//     for (i=0; i<library.length; i++) {
//     const para = document.createElement('p');
//     para.setAttribute('id', `${library.name}`);
//     mainbody.appendChild(`p`);
//     para.textContent = `${library.name}`
//     }
// }
const book1 = new book("The Outlaw Ocean", "Ian Urbina", "Investigative Journalism", 560, 2019);
const book2 = new book("Black Mass", "Dick Lehr", "Investigative Journalism", 448, 2012);

function display(book) {
    const div = document.createElement('div');
    mainbody.appendChild(div);
    div.textContent = `${book.title}`;
}
let myLibrary = [];
const Book = (title, author, pages, read) => {
    const addToLibrary = (book) => {
        myLibrary.push(book)};
    return {title, author, pages, read, addToLibrary};
}
// const addToLibrary = (book) => {
//     myLibrary.push(book);
//     console.log(myLibrary);
// }
let book1 = Book('A Very Punchable Face', 'Colin Jost', 346, 'read');
let book2 = Book('Emperor of All Maladies', 'Siddhartha Mukherjee', 608, 'read');
book1.addToLibrary(book1);
book2.addToLibrary(book2);
// loop thru array & display
const cardContainer = document.querySelector('div.cardContainer');
const displayLibrary = () => {
    for (i=0; i<myLibrary.length; i++) {
    const card = document.createElement('div');
    card.classList.add('bookCard');
    card.setAttribute('id', `${i}`);
    cardContainer.appendChild(card);
    const title = document.createElement('div');
    title.textContent = `${myLibrary[i].title}`;
    title.classList.add('cardTitle');
    card.appendChild(title);
    const author = document.createElement('div');
    author.textContent = `${myLibrary[i].author}`;
    author.classList.add('cardAuthor');
    card.appendChild(author);
    const genre = document.createElement('div');
    genre.textContent = `${myLibrary[i].genre}`;
    genre.classList.add('cardGenre');
    card.appendChild(genre);
    const pages = document.createElement('div');
    pages.textContent = `${myLibrary[i].pages} pages`;
    pages.classList.add('cardPages');
    card.appendChild(pages);
    const year = document.createElement('div');
    year.textContent = `${myLibrary[i].year}`;
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
}
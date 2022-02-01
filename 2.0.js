let myLibrary = [];
const Book = (title, author, pages, read) => {
    const bookAdd = () => {
        console.log(Book);
    }
    return {title, author, pages, read, bookAdd};
}
const addToLibrary = (book) => {
    myLibrary += book;
    console.log(myLibrary);
}
let book1 = Book('A Very Punchable Face', 'Colin Jost', 346, 'read');
let book2 = Book('Emperor of All Maladies', 'Siddhartha Mukherjee', 608, 'read');
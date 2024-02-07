'use strict'

var gBooks
_createBooks()

function getBooks(filterBy) {
    if (!filterBy) return gBooks
    var filterdBooks = gBooks.filter(book => book.title.toLowerCase().includes(filterBy.toLowerCase()))
    return filterdBooks
}

function removeBook(bookId) {
    const idx = gBooks.findIndex(book => book.id === bookId)
    gBooks.splice(idx, 1)
    _saveBooks()
}

function updatePrice(bookId,price) {
    const book = gBooks.find(book => book.id === bookId)
   book.price = price
    _saveBooks()
}

function addBook(name,price) {
    gBooks.unshift(_createBook(name, price))
    _saveBooks()
}

function getBookById(bookId) {
    const book = gBooks.find(book => book.id === bookId)
	return book
}
//private functions
function _createBooks() {
    gBooks = loadFromStorage('bookDB')
    if (!gBooks || gBooks.length === 0) {

        gBooks = [
            _createBook('Monkey Puzzle', 'Monkey Puzzle.webp'),
            _createBook('The Gruffalo', 'The Gruffalo.webp'),
            _createBook('Room on the Broom', 'Room on the Broom.webp'),
        ]
        _saveBooks()
    }
}

function _createBook(title, imgUrl) {
    return {

        id: makeId(),
        title,
        price: getRandomInt(25, 150),
        imgUrl,
        rate:getRandomInt(0, 5),
    }
}

function _saveBooks() {
    saveToStorage('bookDB', gBooks)
}
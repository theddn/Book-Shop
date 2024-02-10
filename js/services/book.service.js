'use strict'

const STORAGE_KEY = 'bookDB'
var gBooks

_createBooks()

//TODO
function getBooks(options = {}) {
    // if (!options.filterBy) return gBooks
    // var search = gBooks.filter(book => book.title.toLowerCase().includes(options.filterBy.txt.toLowerCase()))
    // return search

    var books = _filterBooks(options.filterBy)
    return books

}

function removeBook(bookId) {
    const idx = gBooks.findIndex(book => book.id === bookId)
    gBooks.splice(idx, 1)
    _saveBooks()
}

function updatePrice(bookId, price) {
    const book = gBooks.find(book => book.id === bookId)
    book.price = price
    _saveBooks()
}

function addBook(name, price) {
    gBooks.unshift(_createBook(name, price))
    _saveBooks()
}

function getBookById(bookId) {
    const book = gBooks.find(book => book.id === bookId)
    return book
}

//private functions
function _createBooks() {
    gBooks = loadFromStorage(STORAGE_KEY)
    if (!gBooks || gBooks.length === 0) {

        gBooks = [
            _createBook('Monkey puzzle', 'Monkey Puzzle.webp'),
            _createBook('The Gruffalo', 'The Gruffalo.webp'),
            _createBook('Room on the Broom', 'Room on the Broom.webp'),
            _createBook('Cat in the Hat', 'cat.jpg'),
            _createBook('Winnie the Pooh', 'pooh.jpg'),
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
        rate: getRandomInt(0, 5),
    }
}

function _saveBooks() {
    saveToStorage('bookDB', gBooks)
}

function getBookCount(filterBy) {
    return _filterBooks(filterBy).length
}

function _filterBooks(filterBy) {
    const txt = filterBy.txt.toLowerCase()
    const minRate = filterBy.minRate

    const books = gBooks.filter(car =>
        car.title.toLowerCase().includes(txt) &&
        car.rate >= minRate)

    return books
}


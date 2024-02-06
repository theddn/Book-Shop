'use strict'

// var gBooks = [
//     {
//         id: 'bg1',
//         title: 'Monkey Puzzle',
//         price: 120,
//         imgUrl: 'monkey.webp',
//     },
//     {
//         id: 'bg2',
//         title: 'The Gruffalo',
//         price: 300,
//         imgUrl: 'monster.webp',
//     },
//     {
//         id: 'bg3',
//         title: 'Room on the Broom',
//         price: 87,
//         imgUrl: 'witch.webp',
//     },
// ]
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

function _createBooks() {
    gBooks = loadFromStorage('bookDB')
    if (!gBooks || gBooks.length === 0) {

        gBooks = [
            _createBook('Monkey Puzzle', 'monkey.webp'),
            _createBook('The Gruffalo', 'monster.webp'),
            _createBook('Room on the Broom', 'witch.webp'),
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
    }
}

function _saveBooks() {
    saveToStorage('bookDB', gBooks)
}
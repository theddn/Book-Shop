'use strict'

var gBooks = [
    {
        id: 'bg1',
        title: 'Monkey Puzzle',
        price: 120,
        imgUrl: 'monkey.webp',
    },
    {
        id: 'bg2',
        title: 'The Gruffalo',
        price: 300,
        imgUrl: 'monster.webp',
    },
    {
        id: 'bg3',
        title: 'Room on the Broom',
        price: 87,
        imgUrl: 'witch.webp',
    },
]
console.log(gBooks);
function getBooks() {
    return gBooks
}

function removeBook(bookId) {
    const idx = gBooks.findIndex(book => book.id === bookId)
    gBooks.splice(idx, 1)
}

function updatePrice(bookId) {
    const book = gBooks.find(book => book.id === bookId)
    book.price = +prompt('update price:')
    return book.price
}
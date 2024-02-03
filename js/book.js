'use strict'

var gBooks = [
    {
        id: 'bg4J78',
        title: 'Monkey Puzzle',
        price: '120',
        imgUrl: 'monkey.webp',
    },
    {
        id: 'bg4J34',
        title: 'The Gruffalo',
        price: '300',
        imgUrl: 'monster.webp',
    },
    {
        id: 'bg4J72',
        title: 'Room on the Broom',
        price: '87',
        imgUrl: 'witch.webp',
    },
]

function onInit(){
    renderBooks()
}

function renderBooks(){
     const elBooks = document.querySelector('.books-table')
     const strHtmls = gBooks.map(book =>` <tr>
     <td class="${book.id}">${book.title}</td>
     <td class="${book.price}">${book.price}</td>
     <td>
       <button onclick="onReadBook('${book.id}')">Read</button>
       <button onclick="oUpdateBook('${book.id}')">Update</button>
       <button onclick="onDeleteBook('${book.id}')">Delete</button>
     </td>
   </tr>`)
   elBooks.innerHTML = strHtmls.join('')
}

function onReadBook() {
    console.log('hello')   
}

 function oUpdateBook(){
    console.log('update')
 }

function onDeleteBook(bookId) {
    console.log('bookId',bookId);
}
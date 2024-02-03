'use strict'

function onInit(){
    renderBooks()
}

function renderBooks(){
     const elBooks = document.querySelector('.books-table')
    const books = getBooks()
     const strHtmls = books.map(book =>` <tr>
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
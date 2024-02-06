'use strict'

function onInit(){
    renderBooks()
}

function renderBooks(){
     const elBooks = document.querySelector('.books-table')
    const books = getBooks()
     const strHtmls = books.map(book =>` <tr>
     <td class="${book.id}">${book.title}</td>
     <td class="${book.id}">${book.price}</td>
     <td>
       <button onclick="onReadBook('${book.id}')">Read</button>
       <button onclick="onUpdateBook('${book.id}')">Update</button>
       <button onclick="onRemoveBook('${book.id}')">Delete</button>
     </td>
   </tr>`)
   elBooks.innerHTML = strHtmls.join('')
}

function onRemoveBook(bookId) {
    removeBook(bookId)
    renderBooks()
}

function onUpdateBook(bookId){
  const price = +prompt('Enter new price:')
  if(!price) return
  updatePrice(bookId,price)
  renderBooks()
}

function onAddBook(){
  const bookName = prompt('Enter book name:')
  const bookPrice = prompt('Enter book price:')
  
    addBook(bookName,bookPrice)
    renderBooks()
}

function onReadBook(bookId) {
  
}

'use strict'

var gFilterBy = ''

function onInit(){
    renderBooks()
}

function renderBooks(){
     const elBooks = document.querySelector('.books-table')
    const books = getBooks(gFilterBy)
     const strHtmls = books.map(book =>` <tr>
     <td>${book.title}</td>
     <td>${book.price}</td>
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
  const book = getBookById(bookId)
  const elModal = document.querySelector('.book-details')
  const pre = elModal.querySelector('pre')

  pre.innerHTML = JSON.stringify(book, null, 3)

  elModal.showModal()
}

function onBookFilter(){
  const input = document.querySelector('input')
  gFilterBy = input.value

  renderBooks()
}

function onClearFilter() {
  const elSearch = document.querySelector('.menu input')
  elSearch.value = gFilterBy = ''

  renderBooks()
}
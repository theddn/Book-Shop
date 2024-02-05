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
  updatePrice(bookId)
  renderBooks()
}

function onAddBook(ev){
    ev.preventDefault()
    
    const elInput = document.querySelector('.new-book input')

    addBook(elInput.value)

    elInput.value = ''
    renderBooks()
}

function onReadBook() {
    console.log('hello')   
}

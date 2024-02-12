'use strict'

const gQueryOptions = {
  filterBy: { txt: '', minRate: 0 },
  sortBy: {},
}

function onInit() {
  renderBooks()
}

function renderBooks() {
  const elBooks = document.querySelector('.books-table')
  const books = getBooks(gQueryOptions)

  const strHtmls = books.map(book => ` <tr>
     <td>${book.title}</td>
     <td>${book.price}</td>
     <td>${book.rate}</td>
     <td>
       <button onclick="onReadBook('${book.id}')">Read</button>
       <button onclick="onUpdateBook('${book.id}')">Update</button>
       <button onclick="onRemoveBook('${book.id}')">Delete</button>
     </td>
   </tr>`)
  elBooks.innerHTML = strHtmls.join('')
}

//CRUD

function onRemoveBook(bookId) {
  removeBook(bookId)
  renderBooks()
}

function onUpdateBook(bookId) {
  const price = +prompt('Enter new price:')
  if (!price) return
  updatePrice(bookId, price)
  renderBooks()
}

function onAddBook() {
  const bookName = prompt('Enter book name:')
  const bookPrice = prompt('Enter book price:')

  addBook(bookName, bookPrice)
  renderBooks()
}

function onReadBook(bookId) {
  const book = getBookById(bookId)
  const elModal = document.querySelector('.book-details')

  elModal.querySelector('h3').innerText = book.title
  elModal.querySelector('h4 span').innerText = book.rate
  elModal.querySelector('img').src = `img/${book.imgUrl}`


  elModal.showModal()
}

function onCloseModal() {
  document.querySelector('.book-details').close()
}

function onSearchFilter() {
  const input = document.querySelector('.filter-txt')

  gQueryOptions.filterBy.txt = input.value

  renderBooks()
}

function onSetFilterBy() {
  const elMinRate = document.querySelector('.filter-slide')

  gQueryOptions.filterBy.minRate = elMinRate.value

  // console.log(gQueryOptions.filterBy)
  renderBooks()
}

function onSetSortBy() {
  const elSortBy = document.querySelector('.sort-by select')
  const sortBy = elSortBy.value

  var dir = +document.querySelector('[name="sort-by"]:checked').value

  if (sortBy === 'title') {
    gQueryOptions.sortBy = { title: dir }
  } else if (sortBy === 'price') {
    gQueryOptions.sortBy = { price: dir }
  } else if (sortBy === 'minRate') {
    gQueryOptions.sortBy = { rate: dir }
  }
  renderBooks()
}
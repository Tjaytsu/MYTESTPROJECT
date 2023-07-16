// Book Class : Represnt a Book

class Book {
     constructor(title,author,isbn){
          this.title = title;
          this.author = author;
          this.isbn = isbn;

     }
}

//UI Class : Handle UI Tasks
class UI {
     //static methods 
     static displayBooks(){
          //DOMI Local storage for test
          let StoredBooks = [
               {
                    title : 'Book One',
                    author: 'John Doe',
                    isbn: '130944'
               },
               {
                    title : 'Book Two',
                    author: 'John Joseph',
                    isbn: '150944'
               },
               {
                    title : 'Book Three',
                    author: 'John Constantine',
                    isbn: '170944'
               }
          ];

          let books = StoredBooks;

          books.forEach((book)=> UI. addBookToList(book));
     }

     static addBookToList(booky) {
         let list = document.querySelector('#book-list');
         let row = document.createElement('tr');
         row.innerHTML = `
         <td>${booky.title}</td>
         <td>${booky.author}</td>
         <td>${booky.isbn}</td>
         <td><a href = "#" class = "btn btn-danger btn-sm delete">X</a></td>
         
         `; 

         list.appendChild(row);
     }

     static deleteBook(del){
               if(del.classList.contains('delete')){
                del.parentElement.parentElement.remove();          
               }
     }

     static clearFields (){
          document.querySelector('#title').value = '';
          document.querySelector('#author').value = '';
          document.querySelector('#isbn').value = '';
     }
}

//Store Class : Handles Storage

//Event : Display Books
document.addEventListener('DOMContentLoaded', UI.displayBooks);


// Event : Add a Book
let form = document.querySelector('#book-form').addEventListener('submit', (e)=>{
     //prevent actual/default submit
     e.preventDefault();

     //Get form values
     let title = document.querySelector('#title').value;
     let author = document.querySelector('#author').value;
     let isbn = document.querySelector('#isbn').value;

     //instantiate book
     let book = new Book(title,author,isbn);

     //Add Book to UI
     UI.addBookToList(book);

     // console.log(book);

     //clear fields for fresh insert
     UI.clearFields ();
});


//Event : Remove a Book

document.querySelector('#book-form').addEventListener('click', (e)=>{
     // console.log(e.target); 
     UI.deleteBook(e.target);
})



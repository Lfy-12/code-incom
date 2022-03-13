class Book {
  constructor(title,pages,isbn){
    this.title = title;
    this.pages = pages;
    this.isbn = isbn;
  }
  printIsbn(){
    // console.log(this.isbn);
    return this.isbn;
  }
}

let book = new Book('title','pag','isbn')
// book.printIsbn();
console.log(book.printIsbn())

class ITBook extends Book{
  constructor(title,pages,isbn,technology){
    super(title,pages,isbn);
    this.technology = technology;
  }
  printTechnology(){
    console.log(this.technology);
  }
}
let jsBook = new ITBook('学习Js算法','200','1234567890','JavaScript');
console.log(jsBook.title);
jsBook.printTechnology();



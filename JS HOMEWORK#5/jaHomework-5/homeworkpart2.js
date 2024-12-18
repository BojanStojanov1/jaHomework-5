/*HOMEWORK Part 2
Write a JavaScript program to display the reading status of some book. The object should have the next properties: title, author, readingStatus and a method that will return info depending on the readingStatus e.g.

Already read 'The Robots of dawn' by Isaac Asimov. (if true)
You still need to read 'Mockingjay: The Final Book of The Hunger Games' by Suzanne Collins. (if false).
Bonus: enter the values from prompt()*/

let book = {
    title: " ",
    author: " ",
    readingStatus: false,
    info: function (){
        if(this.readingStatus){
            console.log(`Alredy read ${this.title} by ${this.author}`)
        } else{
            console.log(`you still need to read ${this.title} by ${this.author}`)
        }
    }

 }
book.title = prompt ('enter a title od a book');
book.author = prompt ("enter the author of the book");
book.readingStatus = prompt("Have you read this book? (yes/no)").toLowerCase()==="yes";

book.info();
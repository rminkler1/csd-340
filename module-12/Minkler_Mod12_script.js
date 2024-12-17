// Robert Minkler
// Module 12.2 Assignment
// JavaScript Exercise, Part 4
// Dec 17, 2024

const book_list = [
    "The Holy Bible", 
    "The Chronicles of Narnia Series",
    "The Invisible Man",
    "Honor Harrington Series",
    "A Journey to The Centre of The Earth",
    "Zero Day",
    "I, Robot",
    "The Pilgrim's Progress",
    "Developing The Leader Within You",
    "The Case for Christ",
];

// On page load, display the list so it is not empty
window.onload = function() {
    display_top_down(book_list);
}

// Display the books from first to last
function display_top_down (books) {

    let output_text = "";

    // Add each book as an HTML List Item
    for (i = 0; i < books.length; i++) {

        output_text += "<li>" + books[i] + "</li>";

        // Insert books into HTML
        let book_container = document.getElementById("books");
        book_container.innerHTML = output_text;

        // change list numbering to count up
        book_container.reversed = false;    
    }
};

// Display the books from last to first
function display_bot_down (books) {

    let output_text = "";

    // Add each book as an HTML List Item
    for (i = books.length - 1; i >= 0; i--) {

        output_text += "<li>" + books[i] + "</li>";

        // Insert books into HTML
        let book_container = document.getElementById("books");
        book_container.innerHTML = output_text;

        // change list numbering to count down
        book_container.reversed = true;
    }
};
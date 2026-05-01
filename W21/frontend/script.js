const API = "http://localhost:3000/books";

// ADD BOOK
async function addBook() {
    const book = {
        title: document.getElementById("title").value,
        author: document.getElementById("author").value,
        price: document.getElementById("price").value,
        genre: document.getElementById("genre").value
    };

    await fetch(`${API}/add`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(book)
    });

    alert("Book Added!");
    getBooks();
}

// GET BOOKS
async function getBooks() {
    const res = await fetch(API);
    const data = await res.json();

    const list = document.getElementById("bookList");
    list.innerHTML = "";

    data.books.forEach(book => {
        list.innerHTML += `
            <div class="book">
                <b>${book.title}</b> by ${book.author}  
                <br> ₹${book.price} | ${book.genre}
                <div class="actions">
                    <button onclick="updateBook('${book._id}')">Update</button>
                    <button class="delete" onclick="deleteBook('${book._id}')">Delete</button>
                </div>
            </div>
        `;
    });
}

// DELETE BOOK
async function deleteBook(id) {
    await fetch(`${API}/${id}`, {
        method: "DELETE"
    });

    alert("Deleted!");
    getBooks();
}

// UPDATE BOOK
async function updateBook(id) {
    const title = prompt("Enter new title:");
    const author = prompt("Enter new author:");
    const price = prompt("Enter new price:");
    const genre = prompt("Enter new genre:");

    await fetch(`${API}/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ title, author, price, genre })
    });

    alert("Updated!");
    getBooks();
}
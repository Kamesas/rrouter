import React from "react";

import books from "../data/books";

function Book() {
  const book = books.find(book => book.slug === "learning-javascript");

  return (
    <main id="book">
      <div>
        <div>
          <img src={`/img/books/${book.cover}`} alt={book.title} />

          <section>
            <h1>{book.title}</h1>

            <p>{book.author}</p>
            <p>{book.publisher}</p>
            <p>{book.pages} стр.</p>
            <p>{book.year} г.</p>

            <div>{book.description}</div>
          </section>
        </div>
      </div>
    </main>
  );
}

export default Book;

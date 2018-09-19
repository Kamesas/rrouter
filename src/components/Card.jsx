import React from "react";

function Card({ book }) {
  return (
    <div className="cardBook">
      <div>
        <img src={`/img/books/${book.cover}`} alt={book.title} />

        <section>
          <h2>{book.title}</h2>
          <p>{book.author}</p>
          <p>
            {book.publisher}, {book.year}
          </p>
        </section>
      </div>

      <section>
        <a href={`/books/${book.topic}/${book.slug}`}>Подробнее</a>
      </section>
    </div>
  );
}

export default Card;

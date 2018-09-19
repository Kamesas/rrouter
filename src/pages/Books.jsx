import React, { Component } from "react";
import Card from "../components/Card";
import data from "../data/books.json";

function Books({ match }) {
  const books = match.params.topic
    ? data.filter(book => book.topic === match.params.topic)
    : data;
  return (
    <div className="books">
      {books.map((book, index) => (
        <div key={index} className="booksItems">
          <Card book={book} />
        </div>
      ))}
    </div>
  );
}

export default Books;

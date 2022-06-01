import React from 'react';

const books = [
  {
    img: 'https://m.media-amazon.com/images/I/71KKZlVjbwL._AC_UL320_.jpg',
    title: 'An Autobiography of Abdul Kalam',
    author: 'by Arun Tiwari and A. P. J. Abdul Kalam',
  },
  {
    img: 'https://m.media-amazon.com/images/I/51-noH62XpL._AC_UL320_.jpg',
    title: 'The Power of Your Subconscious Mind',
    author: 'by Joseph Murphy',
  },
];

// const names = ['person1', 'person2', 'person3'];
// const newnmaes = names.map((name)=>{return <h1>{name}</h1>})
export default function BookLibrary() {
  return (
    <section className="booklist">
      {books.map((book,values) => {
        //const { img, title, author } = book;
        return <Book key={book.id} {...book}></Book>;
      })}
    </section>
  );
}

const Book = ( { img, title, author }) => {
  // attributes,evenhandelr , onclick, onmousehover
  return (
    <articel className="bookPanel">
      <img src={img} alt="" />
      <h3>{title}</h3>
      <p>{author} </p>
    </articel>
  );
};

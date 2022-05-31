import React from 'react';

const firstbook = {
  img: 'https://m.media-amazon.com/images/I/71KKZlVjbwL._AC_UL320_.jpg',
  title: 'An Autobiography of Abdul Kalam',
  autor: ' by Arun Tiwari and A. P. J. Abdul Kalam',
};
const secondimg = {
  img: 'https://m.media-amazon.com/images/I/51-noH62XpL._AC_UL320_.jpg',
  title: 'The Power of Your Subconscious Mind',
  author: 'by Joseph Murphy',
};
export default function BookLibrary() {
  return (
    <section className="booklist">
      <Books
        img={firstbook.img}
        author={firstbook.autor}
        title={firstbook.title}
      ></Books>
      <Books
        img={secondimg.img}
        author={secondimg.autor}
        title={secondimg.title}
      />
    </section> 
  );
}

const Books = (props) => {
  const { img, author, title } = props;
  return (
    <articel className="bookPanel">
      <img src={props.img} alt="" />
      <h3>{props.author}</h3>
      <p>{props.title}</p>
    </articel>
  );
};

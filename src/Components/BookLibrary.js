import React from 'react';

export default function BookLibrary() {
  return (
    <section className="booklist">
      <Books />
      <Books />
      <Books />
      <Books />
      <Books />
      <Books />
      <Books />
      <Books />
      <Books />
      <Books />
    </section>
  );
}

const Books = () => {
  return (
    <articel className="bookPanel">
      <Image />
      <Title />
      <Name />
    </articel>
  );
};

const Image = () => {
  return (
    <img
      src="https://m.media-amazon.com/images/I/71KKZlVjbwL._AC_UL320_.jpg"
      alt="1"
    />
  );
};
const Title = () => {
  return <h3>An Autobiography of Abdul Kalam</h3>;
};
const Name = () => {
  return (
    <h5 style={{ color: '#c9c9c9' }}>
      by Arun Tiwari and A. P. J. Abdul Kalam
    </h5>
  );
};

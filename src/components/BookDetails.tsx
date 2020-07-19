import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import '../styles/book-details.scss';
import { Book } from '../types';

interface RouteParams {
  id: string;
}

interface Prop {
  books: Book[]; 
  addToCart: (book: Book) => void;
}


export const BookDetails: React.FC<Prop> = ({books, addToCart}) => {
  let history = useHistory();
  let params = useParams<RouteParams>();

  let book = books.filter(b => String(b.id) === params.id)[0];

  function buyNow() {
    addToCart(book);
    history.push('/cart');
  }

  return (
    <div className="book-details">
      { book &&        
      <div className="book">
        <div className="book__thumb">
          <img src={book.image_url} alt={`Cover of ${book.title}`} />
        </div>
        <div className="book__info">
          <div className="book__info__title">{book.title}</div>
          <div className="book__info__rating"><i className="fas fa-star"></i> {book.average_rating}</div>
          <div className="book__info__price"><i className="fas fa-dollar-sign"></i> {book.price}</div>
          <div className="book__info__author">{book.authors.author.name}</div>
          <div className="book__info__page-count">{book.num_pages}</div>
          <div className="book__info__isbn">{book.isbn13}</div>
          <div className="book__info__pub-year">{book.publication_year}</div>

          <div className="book__action">
            <button className="btn-secondary" onClick={() => addToCart(book)}> <i className="fas fa-cart-plus"></i> Add to Cart</button>
            <button className="btn-primary" onClick={buyNow}><i className="fas fa-bolt"></i> Buy Now</button>
          </div>

          <div className="book__desc">
            {book.description.text.map((t, i) => (
              <p key={i} className="__para">
                {t}
              </p>
            ))}
          </div>
        </div>
      </div>
      }
    </div>
  )
}
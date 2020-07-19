import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import '../styles/home.scss';
import { Book } from '../types';


interface Prop {
    books: Array<Book>;
    addToCart: (book: Book) => void;
};


export const Home: React.FC<Prop> = ({ books, addToCart }) => {

    let history = useHistory();

    function buyNow(book: Book) {
        addToCart(book);
        history.push('/cart');
    }

    return (
        <div className="book-list">
            {
                books.map(book => (
                    <div key={String(book.id)} className="book">
                        <div className="book__thumb">
                            <img src={book.image_url} alt={`Cover of ${book.title}`} />
                        </div>
                        <div className="book__info">
                            <div className="book__info__title">
                                <Link to={`/book/${book.id}`} >
                                    {book.title} &nbsp; <i className="fas fa-external-link-alt"></i>
                                </Link>
                            </div>
                            <div className="book__info__desc">
                                {book.description.text[0]}
                            </div>
                            <div className="book__other">
                                <div className="book__other__rating">
                                    <i className="fas fa-star"></i> {book.average_rating}
                                </div>
                                <div className="book__other__price">
                                    ${book.price}
                                </div>
                            </div>
                        </div>
                        <div className="book__action-btn">
                            <div className="add-to-cart">
                                <button className="btn-secondary" onClick={() => addToCart(book)}><i className="fas fa-cart-plus"></i></button>
                            </div>
                            <div className="buy-now">
                                <button className="btn-primary" onClick={() => buyNow(book)}>Buy Now</button>
                            </div>                          
                        </div>
                    </div>                    
                ))
            }
        </div>
    )
}
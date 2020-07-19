import { Book, SimpleAction } from "../types";
import { ACTION } from './constants';

const books: Book[] = [];


export const BookReducuer = (state = books, action: SimpleAction)  => {
    switch(action.type) {
        case ACTION.LOAD_BOOKS: 
            return [..._books, ..._books, ..._books, ..._books, ..._books, ..._books ];
        default: 
            return state;
    }
}



let _books = JSON.parse(`[
   {
      "id": 2389560,
	  "price": 16.9,
      "isbn": "1565992547",
      "isbn13": "9781565992542",
      "text_reviews_count": 0,
      "uri": "kca://book/amzn1.gr.book.v1.IV7FKiI7rj-5eqRXkIpvoQ",
      "title": "Handbook for Servants",
      "title_without_series": "Handbook for Servants",
      "image_url": "https://s.gr-assets.com/assets/nophoto/book/111x148-bcc042a9c91a29c1d680899eff700a03.png",
      "small_image_url": "https://s.gr-assets.com/assets/nophoto/book/50x75-a91bf249278a81aabab721ef782c4a74.png",
      "large_image_url": [],
      "link": "https://www.goodreads.com/book/show/2389560.Handbook_for_Servants",
      "num_pages": "212",
      "format": "Paperback",
      "edition_information": [],
      "publisher": "Yahshua Publishing",
      "publication_day": "1",
      "publication_year": "2001",
      "publication_month": "1",
      "average_rating": "4.69",
      "ratings_count": "16",
      "description": {"text": ["Do you hunger for God to be active in your life? Do you wonder if the Holy Spirit can renew and empower you? Gayle Erwin places our hand in the hand of Jesus and takes us to the side of the Comforter."]},
      "authors": {
         "author": {
            "id": "16571",
            "name": "Gayle D. Erwin",
            "role": [],
            "image_url": {
               "@nophoto": "true",
               "text": "https://s.gr-assets.com/assets/nophoto/user/u_200x266-e183445fd1a1b5cc7075bb1cf7043306.png"
            },
            "small_image_url": {
               "@nophoto": "true",
               "text": "https://s.gr-assets.com/assets/nophoto/user/u_50x66-632230dc9882b4352d753eedf9396530.png"
            },
            "link": "https://www.goodreads.com/author/show/16571.Gayle_D_Erwin",
            "average_rating": "4.20",
            "ratings_count": "378",
            "text_reviews_count": "37"
         }
      },
      "published": "2001",
      "work": {
         "id": "2396572",
         "uri": "kca://work/amzn1.gr.work.v1.MN-HdG22N077tsJaPiIrdw"
      }
   }
]`);
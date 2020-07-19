type Author = {
    id: Number;
    name: string;
}

export type Book = {
    id: number;
    isbn13: string;
    title: string;
    image_url: string;
    num_pages: string;
    publication_year: string;
    average_rating: string;
    description: {
        text: Array<string>;
    },
    authors: {
        author: Author;
    };
    price: number;
    publication_year: string;
};


export type Order = {
    book: Book;
    status: number;
    date: number;
    quantity: number;
};

export type CartItem = {
    book: Book;
    quantity: number;
}
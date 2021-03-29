export default class BookStoreService {

    data = [
        {
            id: 1,
            title: 'Book 1',
            author: 'Author 1',
            price: 132,
            coverImg: 'https://files.books.ru/pic/5204001-5205000/5204327/1173783850ct.jpg'
        },
        {
            id: 2,
            title: 'Book 2',
            author: 'Author 2',
            price: 543,
            coverImg: 'https://files.books.ru/pic/5213001-5214000/5213525/535845823c.jpg'
        }
    ];

    getBooks() {

        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (Math.random() > 0.75){
                    reject(new Error('Error loading books'));
                }
                resolve(this.data);
            }, 700)
        });
    }
}

const apiBooks = 'http://localhost:3001';
export const fetchBooks = () => {
    const arr = fetch(apiBooks + '/books').then(res => res.json());
    return arr;
};
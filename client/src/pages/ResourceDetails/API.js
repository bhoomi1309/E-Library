const apiBooks = 'http://localhost:3001';
export const fetchBooks = () => {
    const arr = fetch(apiBooks + '/books').then(res => res.json());
    return arr;
};
export const fetchBookByTitle = async (ISBN) => {
    if (!ISBN) return null;
    try {
        const response = await fetch(apiBooks + '/books/'+ISBN);
        if (!response.ok) {
            throw new Error("Failed to fetch books");
        }
        const data = await response.json();
        return data;
    } catch (err) {
        console.error("Error fetching book:", err.message);
        return null;
    }
};
export const deleteBook = async (id, navigate) => {
    fetch(apiBooks + '/books/' + id, { method: "DELETE" })
        .then(res => res.json())
        .then(res => {
            navigate('/library/resources');
        });
};

const apiBooks = 'http://localhost:3001';
export const fetchBooks = () => {
    const arr = fetch(apiBooks + '/books').then(res => res.json());
    return arr;
};
export const addNewBook = async (newBook) => {
    try {
        const response = await fetch(apiBooks+'/books', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newBook),
        });

        if (response.ok) {
            const addedBook = await response.json();
            return addedBook;
        } else {
            throw new Error("Failed to add new book");
        }
    } catch (error) {
        console.error("Error adding new resource:", error);
        throw error;
    }
};

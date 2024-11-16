const apiBooks = 'http://localhost:3001';
export const fetchBooksSorted = async () => {
    const apiBooks = 'http://localhost:3001';
    try {
        const response = await fetch(apiBooks + '/books');
        const data = await response.json();

        data.sort((a, b) => b.YearOfPublication - a.YearOfPublication);

        return data;
    } catch (error) {
        console.error("Error fetching books:", error);
        return [];
    }
};

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './style.css';
import { fetchBooks } from "./API";

function Search() {
    const [books, setBooks] = useState([]);
    const [query, setQuery] = useState("");

    useEffect(() => {
        const getBooks = async () => {
            try {
                const response = await fetchBooks();
                setBooks(response);
            } catch (error) {
                console.error("Error fetching books:", error);
            }
        };
        getBooks();
    }, []);

    const handleInputChange = (e) => {
        setQuery(e.target.value);
    };

    // Filter books directly based on Title
    const filteredBooks = books.filter((book) =>
        book.Title.toLowerCase().includes(query.toLowerCase())
    );

    return (
        <>
            <div className="container" style={{ maxHeight: "90vh", overflowY: "auto" }}>
                <div className="row">
                    <div className="col text-center fw-bold mb-5" style={{ fontSize: "45px" }}>
                        Search
                    </div>
                </div>
                <div className="row justify-content-center mb-4">
                    <div className="col-md-8">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Search for items..."
                            style={{ borderRadius: "25px", height: "50px" }}
                            value={query}
                            onChange={handleInputChange}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        {query && filteredBooks.length > 0 && (
                            <div>
                                <ul className="searchResults">
                                    {filteredBooks.map((book) => (
                                        <li key={book.id} style={{ padding: "10px" }}>
                                            <Link
                                                to={`/library/resources/${book.ISBN}`}
                                                className="search-item-link"
                                            >
                                                {book.Title}
                                                <i className="fa-solid fa-arrow-right ms-3 arrow"></i>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                        {query && filteredBooks.length === 0 && (
                            <p className="text-center mt-4">No results found.</p>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Search;

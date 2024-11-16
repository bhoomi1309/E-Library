import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchBooksSorted } from "./API";
import './style.css';

function Dashboard() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        const getBooks = async () => {
            try {
                const response = await fetchBooksSorted();
                setBooks(response);
            } catch (error) {
                console.error("Error fetching books:", error);
            }
        };
        getBooks();
    }, []);

    return (
        <div className="container" style={{ maxHeight: "90vh", overflowY: "auto" }}>
            <div className="row">
                <div className="col text-center fw-bold mb-5" style={{ fontSize: "45px" }}>
                    Dashboard
                </div>
            </div>
            <div className="row">
                <div className="col fw-bold mb-4" style={{ fontSize: "25px" }}>
                    Recommended for you
                </div>
            </div>
            <div className="row">
                {books.slice(0, 10).map((book, index) => (
                    <div key={book.id} className="col-12 col-md-6 col-lg-4 mb-4">
                        <Link
                            to={`/library/resources/${book.ISBN}`}
                            style={{
                                textDecoration: "none", 
                                color: "inherit", 
                            }}
                        >
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    border: "1px solid #ddd",
                                    padding: "15px",
                                    borderRadius: "10px",
                                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                                    transition: "transform 0.3s, box-shadow 0.3s", 
                                }}
                                className="hover-card books"
                            >
                                <img
                                    src={book.smallimageofthebook}
                                    alt={book.Title}
                                    style={{
                                        width: "100%",
                                        maxHeight: "200px",
                                        objectFit: "cover",
                                        borderRadius: "5px",
                                        marginBottom: "15px",
                                    }}
                                />
                                <h5 style={{ fontWeight: "bold", marginBottom: "10px" }}>
                                    {book.Title}
                                </h5>
                                <p style={{ marginBottom: "5px" }}>
                                    <strong>Author:</strong> {book.Author}
                                </p>
                                <p style={{ marginBottom: "5px" }}>
                                    <strong>Publisher:</strong> {book.Publisher}
                                </p>
                                <p style={{ marginBottom: "5px" }}>
                                    <strong>Year:</strong> {book.YearOfPublication}
                                </p>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Dashboard;

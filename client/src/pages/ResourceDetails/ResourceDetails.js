import React from "react";
import { useState,useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { fetchBookByTitle,deleteBook } from "./API";
import Swal from "sweetalert2";

function BookDetails() {
    const { ISBN } = useParams();
    const [book, setBook] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const navigate=useNavigate();

    useEffect(() => {
        const fetchBook = async () => {
            setLoading(true);
            setError(null);
            try {
                const data = await fetchBookByTitle(ISBN);
                if (data && data.length > 0) {
                    setBook(data[0]);
                } else {
                    setError("Book not found");
                }
            } catch (err) {
                setError("Failed to fetch the book");
            } finally {
                setLoading(false);
            }
        };

        fetchBook();
    }, [ISBN]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    if (!book) {
        return <div>Book not found</div>;
    }

    function handleDeleteBook(){
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to retrieve the Book " + book.Title + " back!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        })
        .then(async (result) => {
            if (result.isConfirmed) {
                deleteBook(book.ISBN,navigate);
                Swal.fire({
                    icon: "success",
                    title: "Book Deleted!"
                })
            }
        })
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col text-center fw-bold mb-5" style={{ fontSize: "45px" }}>
                    Resources
                </div>
            </div>
            <div className="row">
                <div className="col mx-auto">
                    <div className="d-flex align-items-start">
                        <div style={{ flex: 1 }}>
                            <img
                                src={book.largeimageofthebook}
                                alt={`${book.Title} cover`}
                                style={{
                                    width: "100%",
                                    height: "auto",
                                    maxWidth: "300px",
                                    objectFit: "cover",
                                }}
                            />
                        </div>

                        <div style={{ flex: 2, marginLeft: "30px" }}>
                            <h3 className="mb-5 fs-1">{book.Title}</h3>
                            <p className="fs-5"><strong>Author:</strong> {book.Author}</p>
                            <p className="fs-5"><strong>Publisher:</strong> {book.Publisher}</p>
                            <p className="fs-5"><strong>Year of Publication:</strong> {book.YearOfPublication}</p>
                            <p className="fs-5"><strong>ISBN:</strong> {book.ISBN}</p>
                            <div className="btn btn-danger btn-lg mt-5" onClick={handleDeleteBook}>Delete</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BookDetails;

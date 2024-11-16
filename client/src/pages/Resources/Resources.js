import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchBooks } from "./API";
import { addNewBook } from "./API";
import './style.css';

function Resources() {
    const [books, setBooks] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [newBook, setNewBook] = useState({
        Title: "",
        Author: "",
        Publisher: "",
        YearOfPublication: "",
        ISBN: "",
        smallimageofthebook: "",
        mediumimageofthebook: "",
        largeimageofthebook: ""
    });

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
    }, [books]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name === "smallimageofthebook") {
            setNewBook((prev) => ({
                ...prev,
                [name]: value,
                mediumimageofthebook: value,
                largeimageofthebook: value,
            }));
        } else {
            setNewBook((prev) => ({ ...prev, [name]: value }));
        }
    };

    const handleAddResource = async (e) => {
        e.preventDefault();
        try {
            const addedBook = await addNewBook(newBook);
            setBooks((prev) => [...prev, addedBook]);
            setShowModal(false);
            setNewBook({
                Title: "",
                Author: "",
                Publisher: "",
                YearOfPublication: "",
                ISBN: "",
                smallimageofthebook: "",
                mediumimageofthebook: "",
                largeimageofthebook: ""
            });
        } catch (error) {
            console.error("Error adding new resource:", error);
        }
    };

    return (
        <div className="container" style={{ maxHeight: "90vh", overflowY: "auto" }}>
            <div className="row">
                <div className="col text-center fw-bold mb-5" style={{ fontSize: "45px" }}>
                    Resources
                </div>
            </div>
            <div className="row justify-content-end">
                <div className="col-3 mb-4 text-end">
                    <button className="btn btn-lg btn-success" onClick={() => setShowModal(true)}>
                        Add New Resource
                    </button>
                </div>
            </div>
            <div className="row">
                {books.map((book) => (
                    <div key={book.id} className="col-12 col-md-6 col-lg-4 mb-4">
                        <Link to={'/library/resources/' + book.ISBN} className="text-dark text-decoration-none">
                            <div className="card books" style={{ height: "100%" }}>
                                <img
                                    src={book.smallimageofthebook}
                                    className="card-img-top"
                                    alt={`${book.Title} cover`}
                                    style={{ height: "200px", objectFit: "cover" }}
                                />
                                <div className="card-body">
                                    <h5 className="card-title">{book.Title}</h5>
                                    <p className="card-text mt-4">
                                        <strong>Author:</strong> {book.Author}
                                    </p>
                                    <p className="card-text">
                                        <strong>Publisher:</strong> {book.Publisher}
                                    </p>
                                    <p className="card-text">
                                        <strong>Year of Publication:</strong> {book.YearOfPublication}
                                    </p>
                                </div>
                                <div className="card-footer text-center">
                                    <Link to={'/library/resources/' + book.ISBN} className="btn btn-primary">View Details</Link>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>

            {showModal && (
                <div className="modal d-block" style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Add New Resource</h5>
                                <button className="btn-close" onClick={() => setShowModal(false)}></button>
                            </div>
                            <form onSubmit={handleAddResource}>
                                <div className="modal-body">
                                    <div className="mb-3">
                                        <label className="form-label">Title</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="Title"
                                            value={newBook.Title}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Author</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="Author"
                                            value={newBook.Author}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Publisher</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="Publisher"
                                            value={newBook.Publisher}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Year of Publication</label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            name="YearOfPublication"
                                            value={newBook.YearOfPublication}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">ISBN</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="ISBN"
                                            value={newBook.ISBN}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Image URL</label>
                                        <input
                                            type="url"
                                            className="form-control"
                                            name="smallimageofthebook"
                                            value={newBook.smallimageofthebook}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>
                                        Close
                                    </button>
                                    <button type="submit" className="btn btn-success">
                                        Add Resource
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Resources;

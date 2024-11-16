import { Link, Outlet, NavLink, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import './style.css';
import Swal from 'sweetalert2';

function Layout() {
    const navigate = useNavigate();
    function logout() {
        Swal.fire({
            title: "Are you sure you want to logout?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes"
        }).then((result) => {
            if (result.isConfirmed) {
                localStorage.removeItem('authToken');
                navigate('/', { replace: true });
                window.history.replaceState(null, '', '/');
            }
        });
    }
    useEffect(() => {
        const handleBackButton = (event) => {
            navigate('/', { replace: true });
        };
        window.addEventListener('popstate', handleBackButton);
        return () => {
            window.removeEventListener('popstate', handleBackButton);
        };
    }, [navigate]);

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-3 col-0 d-none d-md-block">
                    <div className="offcanvas offcanvas-start show" id="offcanvas" aria-labelledby="offcanvasLabel" data-bs-backdrop="false">
                        <div className="offcanvas-header">
                            <h3 className="offcanvas-title fw-bold fs-3" id="offcanvasLabel">
                                KNOWLEDGE BANK
                            </h3>
                        </div>
                        <div className="offcanvas-body">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0 fs-5">
                                <li className="nav-item">
                                    <NavLink
                                        className="nav-link p-2 mb-1"
                                        to="/library"
                                        end
                                        style={({ isActive }) => ({
                                            color: isActive ? "black" : "grey",
                                        })}
                                    >
                                        <i className="fa-solid fa-boxes-stacked me-3"></i>Dashboard
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink
                                        className="nav-link p-2 mb-1"
                                        to="/library/resources"
                                        style={({ isActive }) => ({
                                            color: isActive ? "black" : "grey",
                                        })}
                                    >
                                        <i className="fa-solid fa-book me-3"></i>Resources
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink
                                        className="nav-link p-2 mb-1"
                                        to="/library/search"
                                        style={({ isActive }) => ({
                                            color: isActive ? "black" : "grey",
                                        })}
                                    >
                                        <i className="fa-solid fa-ticket me-3"></i>Search
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink
                                        className="nav-link p-2 mb-1"
                                        to={{ pathname: "/library/profile"}}
                                        style={({ isActive }) => ({
                                            color: isActive ? "black" : "grey",
                                        })}
                                    >
                                        <i className="fa-regular fa-bookmark me-3"></i>Profile
                                    </NavLink>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
                <div className="main col-md-9 col-12 ps-md-5">
                    <nav className="navbar">
                        <div className="container-fluid">
                            <button className="navbar-toggler me-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <button className='btn btn-lg ms-auto btn-dark' onClick={logout}>
                                <i className="fa-solid fa-right-from-bracket me-3"></i>Logout
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <NavLink
                                            className="nav-link p-2 mb-1"
                                            to="/library"
                                            end
                                            style={({ isActive }) => ({
                                                color: isActive ? "black" : "grey",
                                            })}
                                        >
                                            <i className="fa-solid fa-boxes-stacked me-3"></i>Dashboard
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink
                                            className="nav-link p-2 mb-1"
                                            to="/library/resources"
                                            style={({ isActive }) => ({
                                                color: isActive ? "black" : "grey",
                                            })}
                                        >
                                            <i className="fa-solid fa-book me-3"></i>Resources
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink
                                            className="nav-link p-2 mb-1"
                                            to="/library/search"
                                            style={({ isActive }) => ({
                                                color: isActive ? "black" : "grey",
                                            })}
                                        >
                                            <i className="fa-solid fa-ticket me-3"></i>Search
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink
                                            className="nav-link p-2 mb-1"
                                            to={{ pathname: "/library/profile" }}
                                            style={({ isActive }) => ({
                                                color: isActive ? "black" : "grey",
                                            })}
                                        >
                                            <i className="fa-regular fa-bookmark me-3"></i>Profile
                                        </NavLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                    <Outlet />
                </div>
            </div>
        </div>
    );
}

export default Layout;
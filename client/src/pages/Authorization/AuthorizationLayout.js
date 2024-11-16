import { Outlet } from 'react-router-dom';
import './style.css';

function AuthorizationLayout() {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-6 d-flex flex-column justify-content-center align-items-center styleLeft">
                    <h1 style={{ fontSize: "2.5rem", fontWeight: "bold", marginBottom: "1rem" }}>
                        Welcome to your <span style={{ color: "#ff6347" }}>E-Library</span>
                    </h1>
                    <p style={{ fontSize: "1.2rem", fontWeight: "lighter", maxWidth: "80%" }}>
                        Discover, explore, and shop for the best study resources and materials tailored just for you.
                    </p>
                </div>

                <div className="col-6 d-flex justify-content-center align-items-center styleRight">
                    <div style={{ width: "100%", maxWidth: "700px" }}>
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AuthorizationLayout;

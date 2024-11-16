import homeImg from './homeImg.png';
import { useNavigate } from 'react-router-dom';
import React from 'react';
import './style.css';

function Home() {
    const navigate = useNavigate();
    return (
        <>
            <div style={{
                backgroundImage: "url(" + homeImg + ")",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                height: "100vh",
                width: "100vw",
            }}>
                <div className='mb-3 head1'>Unlock Knowledge, Anytime, Anywhere</div>
                <div className='fw-bold mb-3 head2'>Your Ultimate E-Library</div>
                <button
                    className='btn btn-lg fw-bold rounded border fs-3 px-3 my-3'
                    style={{
                        backgroundColor: "#79dbda",
                        color: "black",
                        margin: "10px 30px 20px 30px",
                    }}
                    onMouseOver={(e) => {
                        e.target.style.backgroundColor = "#ff4500";
                        e.target.style.color = "white";
                    }}
                    onMouseOut={(e) => {
                        e.target.style.backgroundColor = "#79dbda";
                        e.target.style.color = "black";
                    }}
                    onClick={() => {
                        navigate('./auth/login');
                    }}
                >
                    Explore Now
                </button>
            </div>
        </>
    );
}

export default Home;
import {Link,useNavigate} from 'react-router-dom';
import {useState} from 'react';
import {checkUser} from './API';
import Swal from 'sweetalert2';
import { useUser } from '../../contexts/UserContext';

function Login(){
    const [user,setUser]=useState({
        Email:'',
        Password:''
    });
    const { loginUser } = useUser();
    const navigate = useNavigate();
    const handleFormSubmit = async (e) => {
        e.preventDefault();
        if(user.Email === '' ||  user.Password === ''){
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Please fill in all the fields for login!",
            });
            return;
        }
        const response = await checkUser(user);
        if(response.success){
            Swal.fire({
                icon: "success",
                title: "Login Successful",
                text: "You have logged in successfully",
            });
            const userDetails = response.user;
            loginUser(userDetails);
            navigate('/library');
        } 
        else{
            Swal.fire({
                icon: "error",
                title: "Login Failed",
                text: response.message,
            });
        }
    };
    return(
        <>
            <div className="container px-4">
                <div className="row text-center">
                    <div className="col h1">
                        Sign in to your account
                    </div>
                </div>
                <div className="row text-center py-1">
                    <div className="col">
                        Don't have an account? <Link to='/auth/register' className='text-decoration-none'>Register</Link>
                    </div>
                </div>
                <div className='row pt-4 px-5 pb-1'>
                    <div className='col fw-bold fs-5'>
                        Email
                    </div>
                </div>
                <div className='row px-5'>
                    <div className='col text-center'>
                        <input 
                            type='email' 
                            className='w-100 py-1 px-2' 
                            placeholder='Enter your email'
                            onChange={(e) => setUser(prev => ({ ...prev, Email: e.target.value }))}
                        />
                    </div>
                </div>
                <div className='row pt-4 px-5 pb-1'>
                    <div className='col fw-bold fs-5'>
                        Password
                    </div>
                </div>
                <div className='row px-5'>
                    <div className='col text-center'>
                        <input 
                            type='password' 
                            className='w-100 py-1 px-2' 
                            placeholder='Enter your password'
                            onChange={(e) => setUser(prev => ({ ...prev, Password: e.target.value }))}
                        />
                    </div>
                </div>
                <div className='row px-5 py-5'>
                    <div className='col'>
                        <button 
                            className='btn btn-lg w-100' 
                            style={{backgroundColor: "#150647" , color: "white"}}
                            onClick={handleFormSubmit}
                        >Sign In</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;
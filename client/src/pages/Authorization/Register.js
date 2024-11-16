import {Link,useNavigate} from 'react-router-dom';
import {useState} from 'react';
import {addUser} from './API';
import Swal from 'sweetalert2';

function Register(){
    const [user,setUser]=useState({
        name:'',
        email:'',
        password:'',
        address:'',
        phone:''
    });
    const navigate = useNavigate();
    const handleFormSubmit = async (e) => {
        e.preventDefault();
        if(user.name==='' || user.email === '' ||  user.password === '' || user.address === '' ||  user.phone === ''){
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Please fill in all the fields for registration!",
            });
            return;
        }
        await addUser(user,navigate);
        Swal.fire({
            icon: "success",
            title: "Registration Complete",
            text: 'You have been registered successfully',
        });
        navigate('/auth/login');
    };
    return(
        <>
            <div className="container px-4">
                <div className="row text-center">
                    <div className="col h1">
                        Create New Account
                    </div>
                </div>
                <div className="row text-center py-1">
                    <div className="col">
                        Already have an account? <Link to='/auth/login' className='text-decoration-none'>Login</Link>
                    </div>
                </div>
                <div className='row pt-4 px-5'>
                    <div className='col fw-bold fs-5'>
                        Name
                    </div>
                </div>
                <div className='row px-5'>
                    <div className='col text-center'>
                        <input 
                            type='text' 
                            className='w-100 py-1 px-2' 
                            placeholder='Enter your name'
                            onChange={(e) => setUser(prev => ({ ...prev, name: e.target.value }))}
                        />
                    </div>
                </div>
                <div className='row pt-4 px-5'>
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
                            onChange={(e) => setUser(prev => ({ ...prev, email: e.target.value }))}
                        />
                    </div>
                </div>
                <div className='row pt-4 px-5'>
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
                            onChange={(e) => setUser(prev => ({ ...prev, password: e.target.value }))}
                        />
                    </div>
                </div>
                <div className='row pt-4 px-5'>
                    <div className='col fw-bold fs-5'>
                        Phone
                    </div>
                </div>
                <div className='row px-5'>
                    <div className='col text-center'>
                        <input 
                            type='text' 
                            className='w-100 py-1 px-2' 
                            placeholder='Enter your phone'
                            onChange={(e) => setUser(prev => ({ ...prev, phone: e.target.value }))}
                        />
                    </div>
                </div>
                <div className='row pt-4 px-5'>
                    <div className='col fw-bold fs-5'>
                        Address
                    </div>
                </div>
                <div className='row px-5'>
                    <div className='col text-center'>
                        <input 
                            type='text' 
                            className='w-100 py-1 px-2' 
                            placeholder='Enter your address'
                            onChange={(e) => setUser(prev => ({ ...prev, address: e.target.value }))}
                        />
                    </div>
                </div>
                <div className='row px-5 py-5'>
                    <div className='col'>
                        <button 
                            className='btn btn-lg w-100' 
                            style={{backgroundColor: "#150647" , color: "white"}}
                            onClick={handleFormSubmit}
                        >Sign Up</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Register;
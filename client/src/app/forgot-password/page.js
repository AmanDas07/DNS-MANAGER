'use client'



import React, { useContext, useEffect, useState } from 'react'

import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/navigation.js';

const ForgotPassword = () => {


    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const Router = useRouter();
    const [newPassword, setnewPassword] = useState("");
    const handleSubmit = async (e) => {
        e.preventDefault();



        try {
            setLoading(true);
            const { data } = await axios.post(`${process.env.NEXT_PUBLIC_API}/forgotPassword`, {
                email,
                newPassword
            });
            toast.success("Password Reset Successfully");
            setLoading(false);
            Router.push("/login");
        }
        catch (error) {
            console.log(error);
            toast.error(error.response.data);
            setLoading(false);
        }



    }

    return (
        <div className='container'>
            <div className='row d-flex justify-content-center align-items-center '>
                <div className='col-md-8' />
                <h1 className='d-flex align-items-center justify-content-center mt-3 mb-3'>Reset Password</h1>
                <form className='shadow-lg p-3 mb-5 bg-white rounded' >
                    <ToastContainer position="top-center"
                        autoClose={5000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme="light"
                    />

                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={email} onChange={(event) => { setEmail(event.target.value) }
                        } />

                    </div>

                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword2" className="form-label">New-Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword2" value={newPassword} onChange={(event) => { setnewPassword(event.target.value) }
                        } />
                    </div>


                    <div className='d-flex '>
                        <button type="submit" className="btn btn-primary " onClick={handleSubmit} disabled={!newPassword || !email}>{
                            loading ? (<>
                                <span>Loading &nbsp;</span>
                                <span className='spinner-border spinner-border-sm' role='status' area-hidden='true'></span>
                            </>) : ('Submit')
                        }</button>

                    </div>

                </form>
            </div>
        </div>


    )
}

export default ForgotPassword;
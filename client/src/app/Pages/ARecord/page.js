'use client';

import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { useState, useContext } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const UpdateARecordForm = () => {
    const Router = useRouter();
    const [formValues, setFormValues] = useState({
        domainName: '',
        recordSetName: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formValues.domainName);
        try {

            const response = await axios.post(`${process.env.NEXT_PUBLIC_API}/updateARecord`, { ...formValues });
            if (response.data) {
                toast.success(response.data.message);
                Router.push("/");
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            toast.error("Failed to update A Record");
            console.error('Failed to fetch data:', error);
        }
    };

    return (
        <div className='container'>
            <div className='row d-flex justify-content-center align-items-center'>
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
                <h1 className='d-flex align-items-center justify-content-center mt-3 mb-3'>A Record Update</h1>
                <div className="container my-4">
                    <h2>Add or update the A record</h2>
                    <div className="card p-4">
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="domainName">Domain Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="domainName"
                                    name="domainName"
                                    value={formValues.domainName}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="recordSetName">Record Set Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="recordSetName"
                                    name="recordSetName"
                                    value={formValues.recordSetName}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <button type="submit" className="btn btn-primary mt-2">
                                Update A Record
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateARecordForm;

'use client'

import axios from 'axios';
import { useRouter } from 'next/navigation.js';
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UpdateCNAMERecordForm = () => {

    const Router = useRouter();


    const [formValues, setFormValues] = useState({
        domainName: '',
        recordSetName: '',
        canonicalName: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${process.env.NEXT_PUBLIC_API}/dns/updateCNAMERecord`, { ...formValues });
            if (response.data.result) {
                toast.success(response.data.message);
                Router.push("/");
            }
        } catch (error) {
            toast.error("Failed to update CNAME Record");
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
                <h1 className='d-flex align-items-center justify-content-center mt-3 mb-3'>CNAME Record Update</h1>
                <div className="container my-4">
                    <h2>Add or update the CNAME record</h2>
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
                            <div className="form-group">
                                <label htmlFor="canonicalName">Canonical Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="canonicalName"
                                    name="canonicalName"
                                    value={formValues.canonicalName}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <button type="submit" className="btn btn-primary mt-2">
                                Update CNAME Record
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateCNAMERecordForm;

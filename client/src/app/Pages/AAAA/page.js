'use client';

import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { useState, useContext } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const UpdateAAAARecordForm = () => {
    const Router = useRouter();

    const [formValues, setFormValues] = useState({
        domainName: '',
        recordSetName: '',
        ipv6Address: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${process.env.NEXT_PUBLIC_API}/dns/updateAAAARecord`, { ...formValues });
            if (response.data.result) {
                toast.success(response.data.message);
                Router.push("/");
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            toast.error("Failed to update AAAA Record");
            console.error('Failed to fetch data:', error);
        }
    };

    return (
        <div className='container'>
            <div className='row d-flex justify-content-center align-items-center'>
                <ToastContainer position="top-center" autoClose={5000} />
                <h1 className='mt-3 mb-3'>AAAA Record Update</h1>
                <div className="container my-4">
                    <h2>Add or update the AAAA record</h2>
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
                                <label htmlFor="recordSetName"> ip-v6-Address</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id=" ipv6Address"
                                    name=" ipv6Address"
                                    value={formValues.ipv6Address}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <button type="submit" className="btn btn-primary mt-2">
                                Update AAAA Record
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateAAAARecordForm;

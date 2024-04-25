'use client'

import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UpdateSOARecordForm = () => {
    const router = useRouter();
    const [formValues, setFormValues] = useState({
        domainName: '',
        email: '',
        refreshTime: '',
        retryTime: '',
        expireTime: '',
        minimumTTL: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${process.env.NEXT_PUBLIC_API}/dns/updateSOARecord`, { ...formValues });
            if (response.data.result) {
                toast.success(response.data.message);
                router.push("/");
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            toast.error('Failed to update SOA Record');
            console.error('Error updating SOA Record:', error);
        }
    };


    return (
        <div className='container'>
            <ToastContainer position="top-center" autoClose={5000} hideProgressBar={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
            <h1 className='text-center mt-3 mb-3'>Update SOA Record</h1>
            <div className="card p-4">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="domainName">Domain Name</label>
                        <input type="text" className="form-control" id="domainName" name="domainName" value={formValues.domainName} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Responsible Person Email</label>
                        <input type="email" className="form-control" id="email" name="email" value={formValues.email} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="refreshTime">Refresh Time</label>
                        <input type="number" className="form-control" id="refreshTime" name="refreshTime" value={formValues.refreshTime} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="retryTime">Retry Time</label>
                        <input type="number" className="form-control" id="retryTime" name="retryTime" value={formValues.retryTime} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="expireTime">Expire Time</label>
                        <input type="number" className="form-control" id="expireTime" name="expireTime" value={formValues.expireTime} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="minimumTTL">Minimum TTL</label>
                        <input type="number" className="form-control" id="minimumTTL" name="minimumTTL" value={formValues.minimumTTL} onChange={handleChange} required />
                    </div>
                    <button type="submit" className="btn btn-primary mt-3">Update SOA Record</button>
                </form>
            </div>
        </div>
    );
};

export default UpdateSOARecordForm;

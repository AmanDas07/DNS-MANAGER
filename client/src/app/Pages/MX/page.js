'use client'

import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UpdateMXRecordForm = () => {
    const router = useRouter();
    const [formValues, setFormValues] = useState({
        domainName: '',
        recordSetName: '',
        mailExchange: '',
        preference: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post(`${process.env.NEXT_PUBLIC_API}/dns/updateMXRecord`, { ...formValues });
            if (data.success) {
                toast.success(data.message);
                router.push('/');
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            toast.error('Failed to update MX Record');
            console.error('Error updating MX Record:', error);
        }
    };

    return (
        <div className='container'>
            <ToastContainer position="top-center" autoClose={5000} hideProgressBar={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
            <h1 className='text-center mt-3 mb-3'>Update MX Record</h1>
            <div className="card p-4">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="domainName">Domain Name</label>
                        <input type="text" className="form-control" id="domainName" name="domainName" value={formValues.domainName} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="recordSetName">Record Set Name</label>
                        <input type="text" className="form-control" id="recordSetName" name="recordSetName" value={formValues.recordSetName} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="mailExchange">Mail Exchange</label>
                        <input type="text" className="form-control" id="mailExchange" name="mailExchange" value={formValues.mailExchange} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="preference">Preference</label>
                        <input type="number" className="form-control" id="preference" name="preference" value={formValues.preference} onChange={handleChange} required />
                    </div>
                    <button type="submit" className="btn btn-primary mt-3">Update MX Record</button>
                </form>
            </div>
        </div>
    );
};

export default UpdateMXRecordForm;

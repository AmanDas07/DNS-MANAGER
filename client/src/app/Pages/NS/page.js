'use client'

import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UpdateNSRecordForm = () => {
    const router = useRouter();
    const [formValues, setFormValues] = useState({
        domainName: '',
        recordSetName: '',
        nameServers: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${process.env.NEXT_PUBLIC_API}/dns/updateNSRecord`, { ...formValues });
             if (response.data.result) {
                toast.success(response.data.message);
                router.push("/");
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            toast.error('Failed to update NS Record');
            console.error('Error updating NS Record:', error);
        }
    };

    return (
        <div className='container'>
            <ToastContainer position="top-center" autoClose={5000} hideProgressBar={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
            <h1 className='text-center mt-3 mb-3'>Update NS Record</h1>
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
                        <label htmlFor="nameServers">Name Servers</label>
                        <input type="text" className="form-control" id="nameServers" name="nameServers" value={formValues.nameServers} onChange={handleChange} required />
                    </div>
                    <button type="submit" className="btn btn-primary mt-3">Update NS Record</button>
                </form>
            </div>
        </div>
    );
};

export default UpdateNSRecordForm;

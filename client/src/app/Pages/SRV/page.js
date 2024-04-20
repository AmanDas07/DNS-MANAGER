'use client'

import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UpdateSRVRecordForm = () => {
    const router = useRouter();
    const [formValues, setFormValues] = useState({
        domainName: '',
        recordSetName: '',
        service: '',
        protocol: '',
        priority: '',
        weight: '',
        port: '',
        target: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post(`${process.env.NEXT_PUBLIC_API}/updateSRVRecord`, { ...formValues });
            if (data.success) {
                toast.success(data.message);
                router.push('/');
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            toast.error('Failed to update SRV Record');
            console.error('Error updating SRV Record:', error);
        }
    };

    return (
        <div className='container'>
            <ToastContainer position="top-center" autoClose={5000} hideProgressBar={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
            <h1 className='text-center mt-3 mb-3'>Update SRV Record</h1>
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
                        <label htmlFor="service">Service</label>
                        <input type="text" className="form-control" id="service" name="service" value={formValues.service} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="protocol">Protocol</label>
                        <input type="text" className="form-control" id="protocol" name="protocol" value={formValues.protocol} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="priority">Priority</label>
                        <input type="number" className="form-control" id="priority" name="priority" value={formValues.priority} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="weight">Weight</label>
                        <input type="number" className="form-control" id="weight" name="weight" value={formValues.weight} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="port">Port</label>
                        <input type="number" className="form-control" id="port" name="port" value={formValues.port} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="target">Target</label>
                        <input type="text" className="form-control" id="target" name="target" value={formValues.target} onChange={handleChange} required />
                    </div>
                    <button type="submit" className="btn btn-primary mt-3">Update SRV Record</button>
                </form>
            </div>
        </div>
    );
};

export default UpdateSRVRecordForm;

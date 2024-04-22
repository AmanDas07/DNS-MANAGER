'use client'
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation.js';
import { userContext } from "../../context/useContext.js";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Home = () => {
  const [records, setRecords] = useState([]);
  const [state, setState] = useContext(userContext);
  const [recordType, setRecordType] = useState('');
  const Router = useRouter();
  const [searchTerm, setSearchTerm] = useState('');

  const [showRecordTypeModal, setShowRecordTypeModal] = useState(false);

  const deleteRecord = async (recordType, recordSetName) => {
    console.log(recordType, recordSetName);
    try {

      const response = await axios.post(`${process.env.NEXT_PUBLIC_API}/dns/deleteRecord`, {
        recordType,
        recordSetName,
        dnsZoneName: 'Hllog.com',
        resourceGroup: 'hllo_group'
      });
      toast.success(response.data.message);
      fetchData();
    } catch (error) {
      toast.error("Failed to Delete Record");
      console.error('Failed to delete record:', error);
    }
  };



  const fetchData = async () => {
    try {
      const { data } = await axios.post(`${process.env.NEXT_PUBLIC_API}/dns/verifyDomain`, {
        domainName: '90amandasgmail.onmicrosoft.com'
      }, {
        headers: {
          Authorization: `Bearer ${state.token}`,
        }
      });
      setRecords(data);
    } catch (error) {
      console.error('Failed to fetch data:', error);
    }
  };

  useEffect(() => {
    const filteredRecords = records.filter(record => {
      const emailMatch = record.data.email ? record.data.email.toLowerCase().includes(searchTerm.toLowerCase()) : false;
      const targetMatch = record.data.target ? record.data.target.toLowerCase().includes(searchTerm.toLowerCase()) : false;

      return hostMatch || emailMatch || targetMatch;
    });

    if (searchTerm) {
      setRecords(filteredRecords);
    } else {
      fetchData();
    }
  }, [searchTerm]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleRecordTypeSelect = (type) => {
    setRecordType(type);
    if (recordType === 'A') {
      Router.push("/Pages/ARecord");
    }
    else if (recordType === 'AAAA') {
      Router.push("/Pages/AAAA");
    }
    else if (recordType === 'CNAME') {
      Router.push("/Pages/CNAME");
    }
    else if (recordType === 'TXT') {
      Router.push("/Pages/TXT");
    }
    else if (recordType === 'MX') {
      Router.push("/Pages/MX");
    }
    else if (recordType === 'NS') {
      Router.push("/Pages/NS");
    }
    else if (recordType === 'PTR') {
      Router.push("/Pages/PTR");
    }
    else if (recordType === 'SOA') {
      Router.push("/Pages/SOA");
    }
    else if (recordType === 'SRV') {
      Router.push("/Pages/SRV");
    }

    setShowRecordTypeModal(false);

  };



  return (
    <div className="container mt-4">
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
      <h2>Custom Domain Names</h2>
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => setShowRecordTypeModal(true)}
      >
        Add Record
      </button>
      <input
        type="text"
        placeholder="Search records..."
        className="form-control my-2"
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <table className="table mt-3" style={{ tableLayout: 'fixed', width: '100%' }}>
        <thead>
          <tr>
            <th>Type</th>
            <th>Name</th>
            <th>value</th>
            <th>TTL</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {records.map((record, index) => {
            let name, value, ttl;


            switch (record.type) {
              case 'SOA':
                name = record.data.host;
                value = `Email: ${record.data.email}, Serial: ${record.data.serialNumber}, Expire: ${record.data.expireTime}`;
                ttl = record.data.minimumTtl;
                break;
              case 'NS':
                name = '@';
                value = record.data.map(ns => ns.nsdname).join(', ');
                ttl = 'Default';
                break;
              case 'A':
                name = record.name;
                value = record.data[0].ipv4Address;
                ttl = record.data.ttl;
                break;
              case 'AAAA':
                name = record.name;
                value = record.data[0].ipv6Address;
                ttl = record.data.ttl;
                break;
              case 'TXT':
                name = record.name;
                value = record.data.name;
                ttl = record.data.ttl;
                break;
              case 'CNAME':
                name = record.data.cname;
                value = record.data.target;
                ttl = record.data.ttl;
                break;
              case 'MX':
                name = record.name;
                value = record.data[0].exchange;
                break;
              case 'SRV':
                name = record.name;
                value = 'N/A';
                ttl = 'N/A';
                break;
              default:
                name = 'Unknown';
                value = 'N/A';
                ttl = 'N/A';
            }

            return (
              <tr key={index}>
                <td>{record.type}</td>
                <td>{name}</td>
                <td style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}>{value}</td>
                <td>{ttl}</td>
                <td >
                  {(record.type !== 'NS' && record.type !== 'SOA') && (
                    <button
                      className="btn btn-danger btn-sm"

                      onClick={() => deleteRecord(record.type, record.name)}
                    >
                      Delete
                    </button>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>


      {showRecordTypeModal && (
        <div className="modal show d-block">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Select Record Type</h5>
                {' '}
                <button
                  type="button"
                  className="close btn-danger"
                  onClick={() => setShowRecordTypeModal(false)}
                  style={{ marginLeft: '10px', boxShadow: 'initial', borderRadius: '2px' }}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="list-group">
                  {['A', 'AAAA', 'CNAME', 'TXT', 'MX', 'NS', 'SOA', 'SRV'].map((type) => (
                    <button key={type} onClick={() => handleRecordTypeSelect(type)} className="list-group-item list-group-item-action">
                      {type} Record
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}




      {(showRecordTypeModal) && <div className="modal-backdrop fade show"></div>}
    </div>
  );
};


export default Home;



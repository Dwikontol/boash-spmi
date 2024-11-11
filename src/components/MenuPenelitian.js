// src/components/MenuPenelitian.js
import React from 'react';
import { Link } from 'react-router-dom';

const MenuPenelitian = () => {
    return (
        <div style={{
            
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '100vh',
            backgroundColor: '#f0f2f5',
            padding: '2rem'
        }}>
            <h1 style={{
                color: '#333',
                fontSize: '2.5rem',
                marginBottom: '2rem'
            }}>Menu Penelitian</h1>
            <ul style={{
                listStyle: 'none',
                padding: 0,
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '1rem',
                width: '100%',
                maxWidth: '800px'
            }}>
                <li style={{
                    backgroundColor: 'white',
                    borderRadius: '8px',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                    textAlign: 'center',
                    padding: '1rem'
                }}>
                    <Link to="/upload-proposal" style={{
                        textDecoration: 'none',
                        color: '#007bff',
                        fontSize: '1.2rem'
                    }}>Upload Proposal</Link>
                </li>
                <li style={{
                    backgroundColor: 'white',
                    borderRadius: '8px',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                    textAlign: 'center',
                    padding: '1rem'
                }}>
                    <Link to="/review-proposal" style={{
                        textDecoration: 'none',
                        color: '#007bff',
                        fontSize: '1.2rem'
                    }}>Review Proposal</Link>
                </li>
                <li style={{
                    backgroundColor: 'white',
                    borderRadius: '8px',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                    textAlign: 'center',
                    padding: '1rem'
                }}>
                    <Link to="/upload-laporan-penelitian" style={{
                        textDecoration: 'none',
                        color: '#007bff',
                        fontSize: '1.2rem'
                    }}>Upload Laporan Penelitian</Link>
                </li>
                <li style={{
                    backgroundColor: 'white',
                    borderRadius: '8px',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                    textAlign: 'center',
                    padding: '1rem'
                }}>
                    <Link to="/luaran-penelitian" style={{
                        textDecoration: 'none',
                        color: '#007bff',
                        fontSize: '1.2rem'
                    }}>Luaran Penelitian</Link>
                </li>
                <li style={{
                    backgroundColor: 'white',
                    borderRadius: '8px',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                    textAlign: 'center',
                    padding: '1rem'
                }}>
                    <Link to="/download-surat-tugas" style={{
                        textDecoration: 'none',
                        color: '#007bff',
                        fontSize: '1.2rem'
                    }}>Download Surat Tugas</Link>
                </li>
                <li style={{
                    backgroundColor: 'white',
                    borderRadius: '8px',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                    textAlign: 'center',
                    padding: '1rem'
                }}>
                    <Link to="/download-template" style={{
                        textDecoration: 'none',
                        color: '#007bff',
                        fontSize: '1.2rem'
                    }}>Download Template</Link>
                </li>
                <li style={{
                    backgroundColor: 'white',
                    borderRadius: '8px',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                    textAlign: 'center',
                    padding: '1rem'
                }}>
                    <Link to="/update-progress" style={{
                        textDecoration: 'none',
                        color: '#007bff',
                        fontSize: '1.2rem'
                    }}>Update Progress</Link>
                </li>
                <li style={{
                    backgroundColor: 'white',
                    borderRadius: '8px',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                    textAlign: 'center',
                    padding: '1rem'
                }}>
                    <Link to="/upload-hasil-review" style={{
                        textDecoration: 'none',
                        color: '#007bff',
                        fontSize: '1.2rem'
                    }}>Upload Hasil Review</Link>
                </li>
                <li style={{
                    backgroundColor: 'white',
                    borderRadius: '8px',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                    textAlign: 'center',
                    padding: '1rem'
                }}>
                    <Link to="/upload-sertifikat" style={{
                        textDecoration: 'none',
                        color: '#007bff',
                        fontSize: '1.2rem'
                    }}>Upload Sertifikat</Link>
                </li>
            </ul>
        </div>
    );
};

export default MenuPenelitian;

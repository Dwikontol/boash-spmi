// src/components/ReviewProposal.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const ReviewProposal = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1); // Navigasi kembali ke halaman sebelumnya
  };

  return (
    <div>
      <h1>Review Proposal</h1>
      {/* Konten review proposal */}
      <button onClick={handleBack} style={{ marginTop: '20px' }}>
        Back
      </button>
    </div>
  );
};

export default ReviewProposal;

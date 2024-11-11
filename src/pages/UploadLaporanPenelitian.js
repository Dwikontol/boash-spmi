// src/components/UploadLaporanPenelitian.js
import React from 'react';

const UploadLaporanPenelitian = () => {
  return (
    <div>
      <h2>Upload Laporan Penelitian</h2>
      <form>
        <label>
          Pilih File Laporan Penelitian:
          <input type="file" name="laporanPenelitian" />
        </label>
        <button type="submit">Upload</button>
      </form>
    </div>
  );
};

export default UploadLaporanPenelitian;

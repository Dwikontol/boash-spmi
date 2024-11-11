// src/components/MenuPKM.js
import React from 'react';
import { Link } from 'react-router-dom';

const MenuPKM = () => {
  return (
    <div>
      <h1>Menu PKM</h1>
      <ul>
        <li>
          <Link to="/upload-laporan-pkm">Upload Laporan PKM</Link>
        </li>
        <li>
          <Link to="/luaran-pkm">Luaran PKM</Link>
        </li>
        <li>
          <Link to="/download-template">Download Template</Link>
        </li>
        {/* Tambahkan menu lainnya sesuai kebutuhan */}
      </ul>
    </div>
  );
};

export default MenuPKM;

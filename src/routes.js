// src/routes.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import MenuPenelitian from './components/MenuPenelitian';
import MenuPKM from './components/MenuPKM';
import UploadProposal from './pages/UploadProposal';
import ReviewProposal from './pages/ReviewProposal';
import UploadLaporanPenelitian from './pages/UploadLaporanPenelitian';
import UploadLaporanPKM from './pages/UploadLaporanPKM';
import LuaranPenelitian from './pages/LuaranPenelitian';
import LuaranPKM from './pages/LuaranPKM';
import DownloadSuratTugas from './pages/DownloadSuratTugas';
import DownloadTemplateDokumen from './pages/DownloadTemplateDokumen';
import UpdateProgress from './pages/UpdateProgress';
import UploadHasilReview from './pages/UploadHasilReview';
import UploadSertifikat from './pages/UploadSertifikat';
import Logout from './components/Logout';
import DownloadTemplate from './pages/DownloadTemplate';

const AppRoutes = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/menu-penelitian" element={<MenuPenelitian />} />
      <Route path="/menu-pkm" element={<MenuPKM />} />
      <Route path="/upload-proposal" element={<UploadProposal />} />
      <Route path="/review-proposal" element={<ReviewProposal />} />
      <Route path="/upload-laporan-penelitian" element={<UploadLaporanPenelitian />} />
      <Route path="/upload-laporan-pkm" element={<UploadLaporanPKM />} />
      <Route path="/luaran-penelitian" element={<LuaranPenelitian />} />
      <Route path="/luaran-pkm" element={<LuaranPKM />} />
      <Route path="/download-surat-tugas" element={<DownloadSuratTugas />} />
      <Route path="/download-template" element={<DownloadTemplate />} />
      <Route path="/update-progress" element={<UpdateProgress />} />
      <Route path="/upload-hasil-review" element={<UploadHasilReview />} />
      <Route path="/upload-sertifikat" element={<UploadSertifikat />} />
      <Route path="/logout" element={<Logout />} />
    </Routes>
  </Router>
);

export default AppRoutes;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { TelehealthPage } from './pages/TelehealthPage';
import { DataManagementPage } from './pages/DataManagementPage';
import { AnalyticsPage } from './pages/AnalyticsPage';
import { HealthRecordsPage } from './pages/HealthRecordsPage';
import { WellnessPage } from './pages/WellnessPage';
export function App() {
  return <Router>
      <div className="flex flex-col min-h-screen bg-gray-50">
        <Navigation />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/telehealth" element={<TelehealthPage />} />
            <Route path="/data-management" element={<DataManagementPage />} />
            <Route path="/analytics" element={<AnalyticsPage />} />
            <Route path="/health-records" element={<HealthRecordsPage />} />
            <Route path="/wellness" element={<WellnessPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>;
}
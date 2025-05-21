import React, { useState } from 'react';
import { SearchIcon, FilterIcon, UploadIcon, DownloadIcon, TrashIcon, PlusIcon } from 'lucide-react';
import { Card, CardHeader, CardBody } from '../components/Card';
import { Button } from '../components/Button';
export const DataManagementPage = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  // Mock health data
  const healthData = [{
    id: 1,
    type: 'lab_result',
    name: 'Blood Test Results',
    date: '2023-10-15',
    provider: 'City Hospital',
    details: 'Complete blood count, lipid panel, glucose levels'
  }, {
    id: 2,
    type: 'vitals',
    name: 'Blood Pressure Readings',
    date: '2023-10-10',
    provider: 'Home Monitoring',
    details: '120/80 mmHg, pulse: 72 bpm'
  }, {
    id: 3,
    type: 'lab_result',
    name: 'Cholesterol Panel',
    date: '2023-09-28',
    provider: 'MedLab Diagnostics',
    details: 'LDL, HDL, triglycerides, total cholesterol'
  }, {
    id: 4,
    type: 'vitals',
    name: 'Weight Log',
    date: '2023-10-12',
    provider: 'Home Monitoring',
    details: '165 lbs'
  }, {
    id: 5,
    type: 'medication',
    name: 'Medication Tracker',
    date: '2023-10-14',
    provider: 'Self-reported',
    details: 'Daily medication compliance record'
  }, {
    id: 6,
    type: 'medication',
    name: 'Prescription Refill',
    date: '2023-09-30',
    provider: 'City Pharmacy',
    details: 'Prescription refill history'
  }];
  // Filter data based on active tab and search query
  const filteredData = healthData.filter(item => {
    const matchesTab = activeTab === 'all' || item.type === activeTab;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || item.provider.toLowerCase().includes(searchQuery.toLowerCase()) || item.details.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });
  return <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">
          Health Data Management
        </h1>
        <p className="mt-2 text-lg text-gray-600">
          Upload, view, and manage your health data securely
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Left sidebar */}
        <div className="lg:col-span-1">
          <Card className="sticky top-4">
            <CardHeader>
              <h2 className="text-xl font-medium text-gray-900">
                Data Categories
              </h2>
            </CardHeader>
            <CardBody className="p-0">
              <nav className="space-y-1">
                {[{
                id: 'all',
                name: 'All Data'
              }, {
                id: 'lab_result',
                name: 'Lab Results'
              }, {
                id: 'vitals',
                name: 'Vitals'
              }, {
                id: 'medication',
                name: 'Medications'
              }].map(tab => <button key={tab.id} onClick={() => setActiveTab(tab.id)} className={`w-full px-4 py-3 flex items-center text-left ${activeTab === tab.id ? 'bg-blue-50 text-blue-700 border-l-4 border-blue-500' : 'text-gray-600 hover:bg-gray-50'}`}>
                    {tab.name}
                  </button>)}
              </nav>
            </CardBody>
            <div className="p-4 border-t border-gray-200">
              <Button variant="primary" className="w-full flex items-center justify-center">
                <UploadIcon className="mr-2 h-4 w-4" />
                Upload New Data
              </Button>
            </div>
          </Card>
        </div>
        {/* Main content */}
        <div className="lg:col-span-3">
          <Card>
            <CardHeader className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
              <h2 className="text-xl font-medium text-gray-900">
                {activeTab === 'all' ? 'All Health Data' : activeTab === 'lab_result' ? 'Lab Results' : activeTab === 'vitals' ? 'Vitals' : 'Medications'}
              </h2>
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <SearchIcon className="h-5 w-5 text-gray-400" />
                  </div>
                  <input type="text" placeholder="Search data..." value={searchQuery} onChange={e => setSearchQuery(e.target.value)} className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" />
                </div>
                <button className="p-2 rounded-md border border-gray-300 hover:bg-gray-50">
                  <FilterIcon className="h-5 w-5 text-gray-400" />
                </button>
              </div>
            </CardHeader>
            <CardBody>
              {filteredData.length > 0 ? <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Name
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Date
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Provider
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Details
                        </th>
                        <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {filteredData.map(item => <tr key={item.id} className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm font-medium text-gray-900">
                              {item.name}
                            </div>
                            <div className="text-sm text-gray-500">
                              {item.type === 'lab_result' ? 'Lab Result' : item.type === 'vitals' ? 'Vital Signs' : 'Medication'}
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {new Date(item.date).toLocaleDateString()}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {item.provider}
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-500">
                            {item.details}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <button className="text-blue-600 hover:text-blue-900 mr-4">
                              <DownloadIcon className="h-5 w-5" />
                            </button>
                            <button className="text-red-600 hover:text-red-900">
                              <TrashIcon className="h-5 w-5" />
                            </button>
                          </td>
                        </tr>)}
                    </tbody>
                  </table>
                </div> : <div className="text-center py-12">
                  <div className="mx-auto h-12 w-12 text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="mt-2 text-sm font-medium text-gray-900">
                    No data found
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Try changing your search or filter, or upload new data.
                  </p>
                  <div className="mt-6">
                    <Button variant="primary" className="inline-flex items-center">
                      <PlusIcon className="h-5 w-5 mr-2" />
                      Add New Data
                    </Button>
                  </div>
                </div>}
            </CardBody>
          </Card>
        </div>
      </div>
    </div>;
};
import React, { useState } from 'react';
import { SearchIcon, FolderIcon, FileIcon, FilePlusIcon, DownloadIcon, ShareIcon, ClockIcon } from 'lucide-react';
import { Card, CardHeader, CardBody } from '../components/Card';
import { Button } from '../components/Button';
export const HealthRecordsPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  // Mock records data
  const records = [{
    id: 1,
    title: 'Annual Physical Exam',
    date: '2023-09-15',
    provider: 'Dr. Johnson',
    category: 'exam',
    description: 'Complete physical examination results and doctor notes',
    fileSize: '1.2 MB'
  }, {
    id: 2,
    title: 'Vaccination Record',
    date: '2023-08-22',
    provider: 'City Clinic',
    category: 'immunization',
    description: 'COVID-19 vaccination and other immunization records',
    fileSize: '850 KB'
  }, {
    id: 3,
    title: 'Cardiology Report',
    date: '2023-07-10',
    provider: 'Heart Health Center',
    category: 'specialist',
    description: 'Echocardiogram results and cardiologist assessment',
    fileSize: '3.4 MB'
  }, {
    id: 4,
    title: 'Lab Results - Blood Work',
    date: '2023-09-05',
    provider: 'MedLab Diagnostics',
    category: 'lab',
    description: 'Complete blood count, metabolic panel, and lipid profile',
    fileSize: '2.1 MB'
  }, {
    id: 5,
    title: 'Dental Records',
    date: '2023-08-01',
    provider: 'Smile Dental Care',
    category: 'dental',
    description: 'Dental examination and X-ray results',
    fileSize: '5.7 MB'
  }, {
    id: 6,
    title: 'Prescription History',
    date: '2023-09-10',
    provider: 'Various',
    category: 'medication',
    description: 'List of all prescribed medications in the past year',
    fileSize: '645 KB'
  }, {
    id: 7,
    title: 'Allergy Test Results',
    date: '2023-06-15',
    provider: 'Allergy & Asthma Clinic',
    category: 'lab',
    description: 'Comprehensive allergy panel and physician recommendations',
    fileSize: '1.8 MB'
  }];
  const categories = [{
    id: 'all',
    name: 'All Records'
  }, {
    id: 'exam',
    name: 'Physical Exams'
  }, {
    id: 'lab',
    name: 'Lab Results'
  }, {
    id: 'specialist',
    name: 'Specialist Reports'
  }, {
    id: 'immunization',
    name: 'Immunizations'
  }, {
    id: 'medication',
    name: 'Medications'
  }, {
    id: 'dental',
    name: 'Dental Records'
  }];
  // Filter records based on active category and search query
  const filteredRecords = records.filter(record => {
    const matchesCategory = activeCategory === 'all' || record.category === activeCategory;
    const matchesSearch = record.title.toLowerCase().includes(searchQuery.toLowerCase()) || record.provider.toLowerCase().includes(searchQuery.toLowerCase()) || record.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });
  return <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">
          Digital Health Records
        </h1>
        <p className="mt-2 text-lg text-gray-600">
          Securely access and manage your medical records
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Left sidebar */}
        <div className="lg:col-span-1">
          <Card className="sticky top-4">
            <CardHeader>
              <h2 className="text-xl font-medium text-gray-900">Categories</h2>
            </CardHeader>
            <CardBody className="p-0">
              <nav className="space-y-1">
                {categories.map(category => <button key={category.id} onClick={() => setActiveCategory(category.id)} className={`w-full px-4 py-3 flex items-center text-left ${activeCategory === category.id ? 'bg-blue-50 text-blue-700 border-l-4 border-blue-500' : 'text-gray-600 hover:bg-gray-50'}`}>
                    <FolderIcon className="h-5 w-5 mr-3" />
                    {category.name}
                  </button>)}
              </nav>
            </CardBody>
            <div className="p-4 border-t border-gray-200">
              <Button variant="primary" className="w-full flex items-center justify-center">
                <FilePlusIcon className="mr-2 h-4 w-4" />
                Upload New Record
              </Button>
            </div>
          </Card>
          <Card className="mt-8">
            <CardHeader>
              <h2 className="text-xl font-medium text-gray-900">Storage</h2>
            </CardHeader>
            <CardBody>
              <div className="mb-4">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm font-medium text-gray-700">
                    Usage
                  </span>
                  <span className="text-sm font-medium text-gray-700">65%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-blue-600 h-2.5 rounded-full" style={{
                  width: '65%'
                }}></div>
                </div>
              </div>
              <p className="text-sm text-gray-500">
                You are using <span className="font-medium">65 MB</span> of your{' '}
                <span className="font-medium">100 MB</span> storage.
              </p>
              <Button variant="outline" size="sm" className="mt-4 w-full">
                Upgrade Storage
              </Button>
            </CardBody>
          </Card>
        </div>
        {/* Main content */}
        <div className="lg:col-span-3">
          <Card>
            <CardHeader className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
              <h2 className="text-xl font-medium text-gray-900">
                {categories.find(c => c.id === activeCategory)?.name || 'All Records'}
              </h2>
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <SearchIcon className="h-5 w-5 text-gray-400" />
                  </div>
                  <input type="text" placeholder="Search records..." value={searchQuery} onChange={e => setSearchQuery(e.target.value)} className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" />
                </div>
              </div>
            </CardHeader>
            <CardBody>
              {filteredRecords.length > 0 ? <div className="space-y-4">
                  {filteredRecords.map(record => <div key={record.id} className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                      <div className="flex items-start justify-between">
                        <div className="flex items-start">
                          <div className="flex-shrink-0">
                            <div className="h-10 w-10 rounded-lg bg-blue-100 flex items-center justify-center">
                              <FileIcon className="h-6 w-6 text-blue-600" />
                            </div>
                          </div>
                          <div className="ml-4">
                            <h3 className="text-lg font-medium text-gray-900">
                              {record.title}
                            </h3>
                            <div className="mt-1 flex items-center text-sm text-gray-500">
                              <ClockIcon className="h-4 w-4 mr-1" />
                              <span>
                                {new Date(record.date).toLocaleDateString()}
                              </span>
                              <span className="mx-2">•</span>
                              <span>{record.provider}</span>
                            </div>
                            <p className="mt-2 text-sm text-gray-600">
                              {record.description}
                            </p>
                          </div>
                        </div>
                        <div className="flex-shrink-0 flex space-x-2">
                          <Button variant="outline" size="sm" className="flex items-center">
                            <ShareIcon className="h-4 w-4 mr-1" />
                            Share
                          </Button>
                          <Button variant="primary" size="sm" className="flex items-center">
                            <DownloadIcon className="h-4 w-4 mr-1" />
                            Download
                          </Button>
                        </div>
                      </div>
                      <div className="mt-4 flex items-center justify-between">
                        <div className="flex items-center text-sm text-gray-500">
                          <span className="px-2 py-1 bg-gray-100 rounded-md">
                            {record.fileSize}
                          </span>
                          <span className="ml-2 px-2 py-1 bg-blue-100 text-blue-800 rounded-md capitalize">
                            {record.category === 'lab' ? 'Lab Result' : record.category === 'exam' ? 'Examination' : record.category === 'specialist' ? 'Specialist Report' : record.category === 'immunization' ? 'Immunization' : record.category === 'medication' ? 'Medication' : record.category === 'dental' ? 'Dental' : record.category}
                          </span>
                        </div>
                        <button className="text-sm text-blue-600 hover:text-blue-800">
                          View details
                        </button>
                      </div>
                    </div>)}
                </div> : <div className="text-center py-12">
                  <div className="mx-auto h-12 w-12 text-gray-400">
                    <FolderIcon className="h-12 w-12" />
                  </div>
                  <h3 className="mt-2 text-sm font-medium text-gray-900">
                    No records found
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    {searchQuery ? 'Try adjusting your search' : 'Start by uploading your medical records'}
                  </p>
                  <div className="mt-6">
                    <Button variant="primary" className="inline-flex items-center">
                      <FilePlusIcon className="h-5 w-5 mr-2" />
                      Upload New Record
                    </Button>
                  </div>
                </div>}
            </CardBody>
          </Card>
          <div className="mt-8">
            <h2 className="text-xl font-medium text-gray-900 mb-4">Timeline</h2>
            <div className="border-l-2 border-gray-200 pl-4 ml-3 space-y-8">
              {filteredRecords.slice(0, 3).map((record, index) => <div key={record.id} className="relative">
                  <div className="absolute -left-6 mt-1.5 h-3 w-3 rounded-full border-2 border-white bg-blue-500"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <p className="text-sm text-gray-500">
                        {new Date(record.date).toLocaleDateString()}
                      </p>
                      <h3 className="text-lg font-medium text-gray-900 mt-1">
                        {record.title}
                      </h3>
                    </div>
                    <div className="mt-2 sm:mt-0">
                      <Button variant="outline" size="sm">
                        View
                      </Button>
                    </div>
                  </div>
                  <p className="mt-2 text-sm text-gray-600">
                    {record.description}
                  </p>
                </div>)}
            </div>
          </div>
        </div>
      </div>
    </div>;
};
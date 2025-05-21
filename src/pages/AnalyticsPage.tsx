import { useState } from 'react';
import { FilterIcon, CalendarIcon, DownloadIcon, RefreshCwIcon } from 'lucide-react';
import { Card, CardHeader, CardBody } from '../components/Card';
import { Button } from '../components/Button';
export const AnalyticsPage = () => {
  const [activeMetric, setActiveMetric] = useState('blood_pressure');
  const [dateRange, setDateRange] = useState('month');
  // Mock data for charts
  const metrics = [
    { id: 'blood_pressure', name: 'Blood Pressure' },
    { id: 'glucose', name: 'Blood Glucose' },
    { id: 'weight', name: 'Weight' },
    { id: 'heart_rate', name: 'Heart Rate' },
    { id: 'sleep', name: 'Sleep' },
  ];
  const renderChart = () => {
    // In a real application, this would use a chart library like recharts
    // Here we'll just show placeholder visualizations
    switch (activeMetric) {
      case 'blood_pressure':
        return (<div className="h-64 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-4 flex items-center justify-center">
          <svg className="w-full h-full" viewBox="0 0 400 200">
            <path d="M0,100 Q50,50 100,80 T200,90 T300,60 T400,100" fill="none" stroke="#3b82f6" strokeWidth="3" />
            <path d="M0,130 Q50,120 100,140 T200,120 T300,130 T400,110" fill="none" stroke="#ef4444" strokeWidth="3" />
            <line x1="0" y1="180" x2="400" y2="180" stroke="#e5e7eb" strokeWidth="1" />
            <text x="10" y="195" fontSize="10" fill="#6b7280">Oct 1</text>
            <text x="100" y="195" fontSize="10" fill="#6b7280">Oct 8</text>
            <text x="200" y="195" fontSize="10" fill="#6b7280">Oct 15</text>
            <text x="300" y="195" fontSize="10" fill="#6b7280">Oct 22</text>
            <text x="380" y="195" fontSize="10" fill="#6b7280">Oct 29</text>
          </svg>
        </div>);
      case 'glucose':
        return (<div className="h-64 bg-gradient-to-r from-green-50 to-green-100 rounded-lg p-4 flex items-center justify-center">
          <svg className="w-full h-full" viewBox="0 0 400 200">
            <path d="M0,120 Q30,150 60,100 T120,120 T180,80 T240,90 T300,70 T360,100 T400,110" fill="none" stroke="#10b981" strokeWidth="3" />
            <line x1="0" y1="180" x2="400" y2="180" stroke="#e5e7eb" strokeWidth="1" />
            <line x1="0" y1="60" x2="400" y2="60" stroke="#e5e7eb" strokeDasharray="5,5" />
            <line x1="0" y1="120" x2="400" y2="120" stroke="#e5e7eb" strokeDasharray="5,5" />
            <text x="10" y="195" fontSize="10" fill="#6b7280">Oct 1</text>
            <text x="100" y="195" fontSize="10" fill="#6b7280">Oct 8</text>
            <text x="200" y="195" fontSize="10" fill="#6b7280">Oct 15</text>
            <text x="300" y="195" fontSize="10" fill="#6b7280">Oct 22</text>
            <text x="380" y="195" fontSize="10" fill="#6b7280">Oct 29</text>
          </svg>
        </div>);
      case 'weight':
        return (<div className="h-64 bg-gradient-to-r from-purple-50 to-purple-100 rounded-lg p-4 flex items-center justify-center">
          <svg className="w-full h-full" viewBox="0 0 400 200">
            <path d="M0,150 C50,145 100,140 150,130 S250,110 300,100 S350,90 400,85" fill="none" stroke="#8b5cf6" strokeWidth="3" />
            <line x1="0" y1="180" x2="400" y2="180" stroke="#e5e7eb" strokeWidth="1" />
            <text x="10" y="195" fontSize="10" fill="#6b7280">Oct 1</text>
            <text x="100" y="195" fontSize="10" fill="#6b7280">Oct 8</text>
            <text x="200" y="195" fontSize="10" fill="#6b7280">Oct 15</text>
            <text x="300" y="195" fontSize="10" fill="#6b7280">Oct 22</text>
            <text x="380" y="195" fontSize="10" fill="#6b7280">Oct 29</text>
          </svg>
        </div>);
      case 'heart_rate':
        return (<div className="h-64 bg-gradient-to-r from-red-50 to-red-100 rounded-lg p-4 flex items-center justify-center">
          <svg className="w-full h-full" viewBox="0 0 400 200">
            <path d="M0,100 L40,100 L60,50 L80,150 L100,100 L140,100 L160,50 L180,150 L200,100 L240,100 L260,50 L280,150 L300,100 L340,100 L360,50 L380,150 L400,100" fill="none" stroke="#ef4444" strokeWidth="2" />
            <line x1="0" y1="180" x2="400" y2="180" stroke="#e5e7eb" strokeWidth="1" />
            <text x="10" y="195" fontSize="10" fill="#6b7280">Oct 1</text>
            <text x="100" y="195" fontSize="10" fill="#6b7280">Oct 8</text>
            <text x="200" y="195" fontSize="10" fill="#6b7280">Oct 15</text>
            <text x="300" y="195" fontSize="10" fill="#6b7280">Oct 22</text>
            <text x="380" y="195" fontSize="10" fill="#6b7280">Oct 29</text>
          </svg>
        </div>);
      case 'sleep':
        return (<div className="h-64 bg-gradient-to-r from-indigo-50 to-indigo-100 rounded-lg p-4 flex items-center justify-center">
          <svg className="w-full h-full" viewBox="0 0 400 200">
            <rect x="10" y="50" width="20" height="130" fill="#4f46e5" opacity="0.7" />
            <rect x="40" y="80" width="20" height="100" fill="#4f46e5" opacity="0.7" />
            <rect x="70" y="40" width="20" height="140" fill="#4f46e5" opacity="0.7" />
            <rect x="100" y="70" width="20" height="110" fill="#4f46e5" opacity="0.7" />
            <rect x="130" y="90" width="20" height="90" fill="#4f46e5" opacity="0.7" />
            <rect x="160" y="60" width="20" height="120" fill="#4f46e5" opacity="0.7" />
            <rect x="190" y="50" width="20" height="130" fill="#4f46e5" opacity="0.7" />
            <line x1="0" y1="180" x2="400" y2="180" stroke="#e5e7eb" strokeWidth="1" />
            <text x="10" y="195" fontSize="10" fill="#6b7280">Mon</text>
            <text x="40" y="195" fontSize="10" fill="#6b7280">Tue</text>
            <text x="70" y="195" fontSize="10" fill="#6b7280">Wed</text>
            <text x="100" y="195" fontSize="10" fill="#6b7280">Thu</text>
            <text x="130" y="195" fontSize="10" fill="#6b7280">Fri</text>
            <text x="160" y="195" fontSize="10" fill="#6b7280">Sat</text>
            <text x="190" y="195" fontSize="10" fill="#6b7280">Sun</text>
          </svg>
        </div>);
      default:
        return (<div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
          <p className="text-gray-500">Select a metric to view data</p>
        </div>);
    }
  };
  return (<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <div className="mb-8">
      <h1 className="text-3xl font-bold text-gray-900">Health Data Analytics</h1>
      <p className="mt-2 text-lg text-gray-600">Visualize and analyze your health trends</p>
    </div>
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
      {/* Left sidebar */}
      <div className="lg:col-span-1">
        <Card className="sticky top-4">
          <CardHeader>
            <h2 className="text-xl font-medium text-gray-900">Health Metrics</h2>
          </CardHeader>
          <CardBody className="p-0">
            <nav className="space-y-1">
              {metrics.map((metric) => (<button key={metric.id} onClick={() => setActiveMetric(metric.id)} className={`w-full px-4 py-3 flex items-center text-left ${activeMetric === metric.id
                ? 'bg-blue-50 text-blue-700 border-l-4 border-blue-500'
                : 'text-gray-600 hover:bg-gray-50'}`}>
                {metric.name}
              </button>))}
            </nav>
          </CardBody>
        </Card>
        <Card className="mt-8">
          <CardHeader>
            <h2 className="text-xl font-medium text-gray-900">Summary</h2>
          </CardHeader>
          <CardBody>
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-medium text-gray-500">Current Value</h3>
                <p className="mt-1 text-2xl font-semibold text-gray-900">
                  {activeMetric === 'blood_pressure' ? '120/80 mmHg' :
                    activeMetric === 'glucose' ? '98 mg/dL' :
                      activeMetric === 'weight' ? '165 lbs' :
                        activeMetric === 'heart_rate' ? '72 bpm' :
                          activeMetric === 'sleep' ? '7.5 hours' : 'N/A'}
                </p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500">30 Day Average</h3>
                <p className="mt-1 text-xl font-medium text-gray-900">
                  {activeMetric === 'blood_pressure' ? '118/78 mmHg' :
                    activeMetric === 'glucose' ? '101 mg/dL' :
                      activeMetric === 'weight' ? '167 lbs' :
                        activeMetric === 'heart_rate' ? '74 bpm' :
                          activeMetric === 'sleep' ? '7.2 hours' : 'N/A'}
                </p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500">Trend</h3>
                <p className={`mt-1 text-lg font-medium ${activeMetric === 'weight' ? 'text-green-600' : 'text-blue-600'}`}>
                  {activeMetric === 'weight' ? '↓ Decreasing' : '→ Stable'}
                </p>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
      {/* Main content */}
      <div className="lg:col-span-3">
        <Card>
          <CardHeader className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
            <h2 className="text-xl font-medium text-gray-900">
              {metrics.find(m => m.id === activeMetric)?.name || 'Health Data'} Trends
            </h2>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <select value={dateRange} onChange={(e) => setDateRange(e.target.value)} className="pl-10 pr-10 py-2 border border-gray-300 rounded-md appearance-none focus:ring-blue-500 focus:border-blue-500">
                  <option value="week">Last Week</option>
                  <option value="month">Last Month</option>
                  <option value="year">Last Year</option>
                </select>
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <CalendarIcon className="h-5 w-5 text-gray-400" />
                </div>
              </div>
              <button className="p-2 rounded-md border border-gray-300 hover:bg-gray-50">
                <FilterIcon className="h-5 w-5 text-gray-400" />
              </button>
            </div>
          </CardHeader>
          <CardBody>
            {renderChart()}
            <div className="mt-6 flex flex-col sm:flex-row sm:justify-between sm:items-center space-y-4 sm:space-y-0">
              <div className="flex items-center space-x-4">
                <div className="h-3 w-3 rounded-full bg-blue-500"></div>
                <span className="text-sm text-gray-600">
                  {activeMetric === 'blood_pressure' ? 'Systolic' :
                    activeMetric === 'glucose' ? 'After Meals' :
                      activeMetric === 'weight' ? 'Weight (lbs)' :
                        activeMetric === 'heart_rate' ? 'BPM' :
                          activeMetric === 'sleep' ? 'Hours' : 'Primary Metric'}
                </span>
                {activeMetric === 'blood_pressure' && (<>
                  <div className="h-3 w-3 rounded-full bg-red-500"></div>
                  <span className="text-sm text-gray-600">Diastolic</span>
                </>)}
              </div>
              <div className="flex space-x-4">
                <Button variant="outline" size="sm" className="flex items-center">
                  <DownloadIcon className="h-4 w-4 mr-2" />
                  Export Data
                </Button>
                <Button variant="outline" size="sm" className="flex items-center">
                  <RefreshCwIcon className="h-4 w-4 mr-2" />
                  Refresh
                </Button>
              </div>
            </div>
          </CardBody>
        </Card>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <Card>
            <CardHeader>
              <h2 className="text-lg font-medium text-gray-900">Insights</h2>
            </CardHeader>
            <CardBody>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 rounded-full bg-green-100 flex items-center justify-center">
                    <span className="text-green-600 text-xs">✓</span>
                  </div>
                  <p className="ml-3 text-sm text-gray-600">
                    {activeMetric === 'blood_pressure' ? 'Your blood pressure readings are within the normal range.' :
                      activeMetric === 'glucose' ? 'Your glucose levels have been stable this month.' :
                        activeMetric === 'weight' ? 'You\'ve lost 2 lbs since last month.' :
                          activeMetric === 'heart_rate' ? 'Your resting heart rate is in the healthy range.' :
                            activeMetric === 'sleep' ? 'Your sleep duration is consistent.' :
                              'Your health metrics look good'}
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 rounded-full bg-blue-100 flex items-center justify-center">
                    <span className="text-blue-600 text-xs">i</span>
                  </div>
                  <p className="ml-3 text-sm text-gray-600">
                    {activeMetric === 'blood_pressure' ? 'Consider taking readings at the same time each day for consistency.' :
                      activeMetric === 'glucose' ? 'Morning readings tend to be lower than post-meal readings.' :
                        activeMetric === 'weight' ? 'Weighing yourself at the same time each day provides more consistent data.' :
                          activeMetric === 'heart_rate' ? 'Your heart rate varies throughout the day based on activity level.' :
                            activeMetric === 'sleep' ? 'Aim for 7-9 hours of sleep per night for optimal health.' :
                              'Regular tracking helps identify important trends.'}
                  </p>
                </li>
              </ul>
            </CardBody>
          </Card>
          <Card>
            <CardHeader>
              <h2 className="text-lg font-medium text-gray-900">Recommendations</h2>
            </CardHeader>
            <CardBody>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 rounded-full bg-blue-100 flex items-center justify-center">
                    <span className="text-blue-600 text-xs">1</span>
                  </div>
                  <p className="ml-3 text-sm text-gray-600">
                    {activeMetric === 'blood_pressure' ? 'Continue maintaining a low-sodium diet to support healthy blood pressure.' :
                      activeMetric === 'glucose' ? 'Try to limit carbohydrate intake in the evening.' :
                        activeMetric === 'weight' ? 'Continue your current exercise routine to maintain progress.' :
                          activeMetric === 'heart_rate' ? 'Include more cardiovascular exercise in your weekly routine.' :
                            activeMetric === 'sleep' ? 'Maintain your consistent sleep schedule.' :
                              'Regular monitoring helps maintain optimal health.'}
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 rounded-full bg-blue-100 flex items-center justify-center">
                    <span className="text-blue-600 text-xs">2</span>
                  </div>
                  <p className="ml-3 text-sm text-gray-600">
                    {activeMetric === 'blood_pressure' ? 'Consider stress-reduction techniques like meditation to help maintain healthy levels.' :
                      activeMetric === 'glucose' ? 'Schedule a follow-up with your healthcare provider to review your glucose trends.' :
                        activeMetric === 'weight' ? 'Consider adding strength training to your fitness routine.' :
                          activeMetric === 'heart_rate' ? 'Practice deep breathing exercises to help lower resting heart rate.' :
                            activeMetric === 'sleep' ? 'Avoid screen time at least one hour before bedtime.' :
                              'Share these insights with your healthcare provider at your next visit.'}
                  </p>
                </li>
              </ul>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  </div>);
};

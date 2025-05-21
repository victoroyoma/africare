import React, { useState } from 'react';
import { HeartIcon, ActivityIcon, BellIcon, ClockIcon, CalendarIcon, TrendingUpIcon, CheckCircleIcon } from 'lucide-react';
import { Card, CardHeader, CardBody } from '../components/Card';
import { Button } from '../components/Button';
export const WellnessPage = () => {
  const [activeTab, setActiveTab] = useState('overview');
  // Mock wellness data
  const wellnessStats = {
    steps: 8743,
    stepsGoal: 10000,
    sleep: 7.5,
    sleepGoal: 8,
    water: 5,
    waterGoal: 8,
    calories: 1850,
    caloriesGoal: 2100
  };
  // Mock medication data
  const medications = [{
    id: 1,
    name: 'Vitamin D',
    dosage: '1000 IU',
    frequency: 'Daily',
    time: '8:00 AM',
    taken: true
  }, {
    id: 2,
    name: 'Multivitamin',
    dosage: '1 tablet',
    frequency: 'Daily',
    time: '8:00 AM',
    taken: true
  }, {
    id: 3,
    name: 'Fish Oil',
    dosage: '1000 mg',
    frequency: 'Daily',
    time: '6:00 PM',
    taken: false
  }];
  // Mock health tips
  const healthTips = [{
    id: 1,
    title: 'Stay Hydrated',
    description: 'Aim to drink at least 8 glasses of water per day to maintain proper hydration.',
    category: 'Nutrition'
  }, {
    id: 2,
    title: 'Take Movement Breaks',
    description: 'If you work at a desk, take a 5-minute walking break every hour to improve circulation.',
    category: 'Activity'
  }, {
    id: 3,
    title: 'Practice Mindfulness',
    description: 'Spend 10 minutes each day practicing mindful meditation to reduce stress.',
    category: 'Mental Health'
  }];
  // Mock upcoming activities
  const upcomingActivities = [{
    id: 1,
    title: 'Morning Walk',
    time: '7:00 AM',
    date: 'Tomorrow',
    category: 'Exercise'
  }, {
    id: 2,
    title: 'Meditation Session',
    time: '8:00 PM',
    date: 'Today',
    category: 'Mental Health'
  }, {
    id: 3,
    title: 'Nutritionist Appointment',
    time: '2:30 PM',
    date: '10/25/2023',
    category: 'Healthcare'
  }];
  return <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">
          Digital Health & Wellness
        </h1>
        <p className="mt-2 text-lg text-gray-600">
          Track your wellness journey and get personalized health insights
        </p>
      </div>
      {/* Tabs */}
      <div className="border-b border-gray-200 mb-8">
        <nav className="-mb-px flex space-x-8">
          {[{
          id: 'overview',
          name: 'Overview',
          icon: <ActivityIcon className="h-5 w-5" />
        }, {
          id: 'medications',
          name: 'Medications',
          icon: <HeartIcon className="h-5 w-5" />
        }, {
          id: 'tips',
          name: 'Health Tips',
          icon: <BellIcon className="h-5 w-5" />
        }, {
          id: 'activities',
          name: 'Activities',
          icon: <CalendarIcon className="h-5 w-5" />
        }].map(tab => <button key={tab.id} onClick={() => setActiveTab(tab.id)} className={`group inline-flex items-center py-4 px-1 border-b-2 font-medium text-sm ${activeTab === tab.id ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}>
              <span className="mr-2">{tab.icon}</span>
              {tab.name}
            </button>)}
        </nav>
      </div>
      {/* Overview Tab */}
      {activeTab === 'overview' && <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <Card>
              <CardBody>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-500">Steps</p>
                    <p className="mt-1 text-3xl font-semibold text-gray-900">
                      {wellnessStats.steps.toLocaleString()}
                    </p>
                  </div>
                  <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
                    <ActivityIcon className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
                <div className="mt-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">Progress</span>
                    <span className="font-medium text-gray-900">
                      {Math.round(wellnessStats.steps / wellnessStats.stepsGoal * 100)}
                      %
                    </span>
                  </div>
                  <div className="mt-1 w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{
                  width: `${Math.min(100, wellnessStats.steps / wellnessStats.stepsGoal * 100)}%`
                }}></div>
                  </div>
                  <p className="mt-2 text-xs text-gray-500">
                    Goal: {wellnessStats.stepsGoal.toLocaleString()} steps
                  </p>
                </div>
              </CardBody>
            </Card>
            <Card>
              <CardBody>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-500">Sleep</p>
                    <p className="mt-1 text-3xl font-semibold text-gray-900">
                      {wellnessStats.sleep} hrs
                    </p>
                  </div>
                  <div className="h-12 w-12 rounded-full bg-indigo-100 flex items-center justify-center">
                    <ClockIcon className="h-6 w-6 text-indigo-600" />
                  </div>
                </div>
                <div className="mt-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">Quality</span>
                    <span className="font-medium text-gray-900">Good</span>
                  </div>
                  <div className="mt-1 w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-indigo-600 h-2 rounded-full" style={{
                  width: `${Math.min(100, wellnessStats.sleep / wellnessStats.sleepGoal * 100)}%`
                }}></div>
                  </div>
                  <p className="mt-2 text-xs text-gray-500">
                    Goal: {wellnessStats.sleepGoal} hours
                  </p>
                </div>
              </CardBody>
            </Card>
            <Card>
              <CardBody>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-500">Water</p>
                    <p className="mt-1 text-3xl font-semibold text-gray-900">
                      {wellnessStats.water} cups
                    </p>
                  </div>
                  <div className="h-12 w-12 rounded-full bg-cyan-100 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-cyan-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 14.66V20a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2h2.34" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">Progress</span>
                    <span className="font-medium text-gray-900">
                      {Math.round(wellnessStats.water / wellnessStats.waterGoal * 100)}
                      %
                    </span>
                  </div>
                  <div className="mt-1 w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-cyan-600 h-2 rounded-full" style={{
                  width: `${Math.min(100, wellnessStats.water / wellnessStats.waterGoal * 100)}%`
                }}></div>
                  </div>
                  <p className="mt-2 text-xs text-gray-500">
                    Goal: {wellnessStats.waterGoal} cups
                  </p>
                </div>
              </CardBody>
            </Card>
            <Card>
              <CardBody>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-500">
                      Calories
                    </p>
                    <p className="mt-1 text-3xl font-semibold text-gray-900">
                      {wellnessStats.calories}
                    </p>
                  </div>
                  <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                    </svg>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">Consumed</span>
                    <span className="font-medium text-gray-900">
                      {Math.round(wellnessStats.calories / wellnessStats.caloriesGoal * 100)}
                      %
                    </span>
                  </div>
                  <div className="mt-1 w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-600 h-2 rounded-full" style={{
                  width: `${Math.min(100, wellnessStats.calories / wellnessStats.caloriesGoal * 100)}%`
                }}></div>
                  </div>
                  <p className="mt-2 text-xs text-gray-500">
                    Goal: {wellnessStats.caloriesGoal} calories
                  </p>
                </div>
              </CardBody>
            </Card>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <h2 className="text-xl font-medium text-gray-900">
                  Weekly Activity
                </h2>
              </CardHeader>
              <CardBody>
                <div className="h-64 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg flex items-center justify-center">
                  {/* Placeholder for weekly activity chart */}
                  <svg className="w-full h-full" viewBox="0 0 400 200">
                    <rect x="25" y="140" width="40" height="40" fill="#3b82f6" opacity="0.7" />
                    <rect x="75" y="100" width="40" height="80" fill="#3b82f6" opacity="0.7" />
                    <rect x="125" y="120" width="40" height="60" fill="#3b82f6" opacity="0.7" />
                    <rect x="175" y="80" width="40" height="100" fill="#3b82f6" opacity="0.7" />
                    <rect x="225" y="60" width="40" height="120" fill="#3b82f6" opacity="0.7" />
                    <rect x="275" y="100" width="40" height="80" fill="#3b82f6" opacity="0.7" />
                    <rect x="325" y="110" width="40" height="70" fill="#3b82f6" opacity="0.7" />
                    <line x1="0" y1="180" x2="400" y2="180" stroke="#e5e7eb" strokeWidth="1" />
                    <text x="35" y="195" fontSize="10" fill="#6b7280">
                      Mon
                    </text>
                    <text x="85" y="195" fontSize="10" fill="#6b7280">
                      Tue
                    </text>
                    <text x="135" y="195" fontSize="10" fill="#6b7280">
                      Wed
                    </text>
                    <text x="185" y="195" fontSize="10" fill="#6b7280">
                      Thu
                    </text>
                    <text x="235" y="195" fontSize="10" fill="#6b7280">
                      Fri
                    </text>
                    <text x="285" y="195" fontSize="10" fill="#6b7280">
                      Sat
                    </text>
                    <text x="335" y="195" fontSize="10" fill="#6b7280">
                      Sun
                    </text>
                  </svg>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      Weekly Average
                    </p>
                    <p className="text-lg font-semibold text-blue-600">
                      7,845 steps
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      Most Active Day
                    </p>
                    <p className="text-lg font-semibold text-blue-600">
                      Friday
                    </p>
                  </div>
                </div>
              </CardBody>
            </Card>
            <Card>
              <CardHeader>
                <h2 className="text-xl font-medium text-gray-900">
                  Personalized Insights
                </h2>
              </CardHeader>
              <CardBody>
                <div className="space-y-4">
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <TrendingUpIcon className="h-6 w-6 text-blue-600" />
                      </div>
                      <div className="ml-3">
                        <h3 className="text-sm font-medium text-blue-800">
                          Activity Trend
                        </h3>
                        <p className="mt-2 text-sm text-blue-700">
                          Your activity level has increased by 12% compared to
                          last week. Keep up the good work!
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 bg-green-50 rounded-lg">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <ClockIcon className="h-6 w-6 text-green-600" />
                      </div>
                      <div className="ml-3">
                        <h3 className="text-sm font-medium text-green-800">
                          Sleep Pattern
                        </h3>
                        <p className="mt-2 text-sm text-green-700">
                          Your sleep quality has been consistent this week.
                          Maintaining regular sleep hours helps improve overall
                          health.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 bg-yellow-50 rounded-lg">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div className="ml-3">
                        <h3 className="text-sm font-medium text-yellow-800">
                          Recommendation
                        </h3>
                        <p className="mt-2 text-sm text-yellow-700">
                          Try to increase your water intake. You're currently
                          averaging 5 cups per day, below your goal of 8 cups.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardBody>
            </Card>
          </div>
        </div>}
      {/* Medications Tab */}
      {activeTab === 'medications' && <div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card>
                <CardHeader className="flex items-center justify-between">
                  <h2 className="text-xl font-medium text-gray-900">
                    Medication Schedule
                  </h2>
                  <Button variant="outline" size="sm">
                    Add Medication
                  </Button>
                </CardHeader>
                <CardBody>
                  <div className="space-y-4">
                    {medications.map(medication => <div key={medication.id} className={`p-4 rounded-lg border ${medication.taken ? 'border-green-200 bg-green-50' : 'border-gray-200'}`}>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <div className={`h-10 w-10 rounded-full flex items-center justify-center ${medication.taken ? 'bg-green-100' : 'bg-gray-100'}`}>
                              {medication.taken ? <CheckCircleIcon className="h-6 w-6 text-green-600" /> : <ClockIcon className="h-6 w-6 text-gray-400" />}
                            </div>
                            <div className="ml-4">
                              <h3 className="text-lg font-medium text-gray-900">
                                {medication.name}
                              </h3>
                              <div className="mt-1 flex items-center text-sm text-gray-500">
                                <span>{medication.dosage}</span>
                                <span className="mx-2">•</span>
                                <span>{medication.frequency}</span>
                              </div>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-sm font-medium text-gray-900">
                              {medication.time}
                            </div>
                            <div className="mt-1">
                              {medication.taken ? <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                  Taken
                                </span> : <Button variant="primary" size="sm">
                                  Mark as Taken
                                </Button>}
                            </div>
                          </div>
                        </div>
                      </div>)}
                  </div>
                </CardBody>
              </Card>
            </div>
            <div>
              <Card>
                <CardHeader>
                  <h2 className="text-xl font-medium text-gray-900">
                    Medication Adherence
                  </h2>
                </CardHeader>
                <CardBody>
                  <div className="text-center mb-4">
                    <div className="inline-flex items-center justify-center p-4 bg-blue-50 rounded-full">
                      <svg className="h-16 w-16" viewBox="0 0 36 36">
                        <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#e5e7eb" strokeWidth="3" />
                        <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#3b82f6" strokeWidth="3" strokeDasharray="85, 100" />
                        <text x="18" y="20.5" textAnchor="middle" fontSize="10" fill="#3b82f6" fontWeight="bold">
                          85%
                        </text>
                      </svg>
                    </div>
                    <h3 className="mt-4 text-lg font-medium text-gray-900">
                      Weekly Adherence
                    </h3>
                    <p className="text-sm text-gray-500">
                      You've taken 17 out of 20 scheduled medications this week.
                    </p>
                  </div>
                  <div className="space-y-3">
                    <h4 className="text-sm font-medium text-gray-700">
                      Tips for Better Adherence
                    </h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-start">
                        <span className="flex-shrink-0 h-5 w-5 text-blue-500">
                          •
                        </span>
                        <span className="ml-2">
                          Set daily reminders on your phone
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="flex-shrink-0 h-5 w-5 text-blue-500">
                          •
                        </span>
                        <span className="ml-2">
                          Use a pill organizer for the week
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="flex-shrink-0 h-5 w-5 text-blue-500">
                          •
                        </span>
                        <span className="ml-2">
                          Take medications at the same time each day
                        </span>
                      </li>
                    </ul>
                  </div>
                </CardBody>
              </Card>
              <Card className="mt-8">
                <CardHeader>
                  <h2 className="text-xl font-medium text-gray-900">
                    Refill Reminders
                  </h2>
                </CardHeader>
                <CardBody>
                  <div className="space-y-4">
                    <div className="p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                      <div className="flex items-center">
                        <div className="flex-shrink-0">
                          <BellIcon className="h-5 w-5 text-yellow-600" />
                        </div>
                        <div className="ml-3">
                          <p className="text-sm font-medium text-yellow-800">
                            Vitamin D refill needed in 3 days
                          </p>
                        </div>
                      </div>
                    </div>
                    <Button variant="outline" className="w-full">
                      Set Up Auto-Refills
                    </Button>
                  </div>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>}
      {/* Health Tips Tab */}
      {activeTab === 'tips' && <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <h2 className="text-xl font-medium text-gray-900">
                  Personalized Health Tips
                </h2>
              </CardHeader>
              <CardBody>
                <div className="space-y-6">
                  {healthTips.map(tip => <div key={tip.id} className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm">
                      <div className="flex items-start">
                        <div className="flex-shrink-0">
                          <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </div>
                        </div>
                        <div className="ml-4">
                          <h3 className="text-lg font-medium text-gray-900">
                            {tip.title}
                          </h3>
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 mt-1">
                            {tip.category}
                          </span>
                          <p className="mt-2 text-base text-gray-600">
                            {tip.description}
                          </p>
                          <div className="mt-4 flex">
                            <Button variant="outline" size="sm" className="mr-4">
                              Save
                            </Button>
                            <Button variant="primary" size="sm">
                              Learn More
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>)}
                </div>
              </CardBody>
            </Card>
          </div>
          <div>
            <Card>
              <CardHeader>
                <h2 className="text-xl font-medium text-gray-900">
                  Weekly Focus Areas
                </h2>
              </CardHeader>
              <CardBody>
                <div className="space-y-4">
                  <div className="p-4 border border-blue-200 rounded-lg bg-blue-50">
                    <h3 className="text-lg font-medium text-blue-800">
                      Stress Management
                    </h3>
                    <p className="mt-1 text-sm text-blue-600">
                      Focus on reducing stress through mindfulness and
                      relaxation techniques.
                    </p>
                    <div className="mt-4">
                      <Button variant="primary" size="sm" className="w-full">
                        View Techniques
                      </Button>
                    </div>
                  </div>
                  <div className="p-4 border border-green-200 rounded-lg bg-green-50">
                    <h3 className="text-lg font-medium text-green-800">
                      Balanced Nutrition
                    </h3>
                    <p className="mt-1 text-sm text-green-600">
                      Incorporate more leafy greens and whole grains into your
                      meals.
                    </p>
                    <div className="mt-4">
                      <Button variant="primary" size="sm" className="w-full bg-green-600 hover:bg-green-700">
                        View Meal Ideas
                      </Button>
                    </div>
                  </div>
                  <div className="p-4 border border-purple-200 rounded-lg bg-purple-50">
                    <h3 className="text-lg font-medium text-purple-800">
                      Better Sleep
                    </h3>
                    <p className="mt-1 text-sm text-purple-600">
                      Establish a consistent sleep schedule to improve sleep
                      quality.
                    </p>
                    <div className="mt-4">
                      <Button variant="primary" size="sm" className="w-full bg-purple-600 hover:bg-purple-700">
                        Sleep Tips
                      </Button>
                    </div>
                  </div>
                </div>
              </CardBody>
            </Card>
            <Card className="mt-8">
              <CardHeader>
                <h2 className="text-xl font-medium text-gray-900">
                  Health Resources
                </h2>
              </CardHeader>
              <CardBody>
                <ul className="divide-y divide-gray-200">
                  <li className="py-3">
                    <a href="#" className="flex items-center hover:text-blue-600">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      Nutrition Guidelines
                    </a>
                  </li>
                  <li className="py-3">
                    <a href="#" className="flex items-center hover:text-blue-600">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      Exercise Programs
                    </a>
                  </li>
                  <li className="py-3">
                    <a href="#" className="flex items-center hover:text-blue-600">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      Mental Health Support
                    </a>
                  </li>
                  <li className="py-3">
                    <a href="#" className="flex items-center hover:text-blue-600">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      Sleep Improvement Guide
                    </a>
                  </li>
                </ul>
              </CardBody>
            </Card>
          </div>
        </div>}
      {/* Activities Tab */}
      {activeTab === 'activities' && <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader className="flex items-center justify-between">
                <h2 className="text-xl font-medium text-gray-900">
                  Upcoming Activities
                </h2>
                <Button variant="outline" size="sm">
                  Add Activity
                </Button>
              </CardHeader>
              <CardBody>
                <div className="space-y-4">
                  {upcomingActivities.map(activity => <div key={activity.id} className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                      <div className="flex items-start justify-between">
                        <div className="flex items-start">
                          <div className="flex-shrink-0">
                            <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                              <CalendarIcon className="h-6 w-6 text-blue-600" />
                            </div>
                          </div>
                          <div className="ml-4">
                            <h3 className="text-lg font-medium text-gray-900">
                              {activity.title}
                            </h3>
                            <div className="mt-1 flex items-center text-sm text-gray-500">
                              <ClockIcon className="h-4 w-4 mr-1" />
                              <span>{activity.time}</span>
                              <span className="mx-2">•</span>
                              <span>{activity.date}</span>
                            </div>
                            <span className="mt-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                              {activity.category}
                            </span>
                          </div>
                        </div>
                        <div>
                          <Button variant="outline" size="sm">
                            Reschedule
                          </Button>
                        </div>
                      </div>
                    </div>)}
                </div>
              </CardBody>
            </Card>
            <Card className="mt-8">
              <CardHeader>
                <h2 className="text-xl font-medium text-gray-900">
                  Activity Calendar
                </h2>
              </CardHeader>
              <CardBody>
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  {/* Calendar placeholder - in a real app, use a calendar component */}
                  <div className="flex items-center justify-center h-64 border-2 border-dashed border-gray-300 rounded-lg">
                    <div className="text-center">
                      <CalendarIcon className="mx-auto h-12 w-12 text-gray-400" />
                      <p className="mt-1 text-sm text-gray-500">
                        Calendar view would appear here
                      </p>
                    </div>
                  </div>
                </div>
              </CardBody>
            </Card>
          </div>
          <div>
            <Card>
              <CardHeader>
                <h2 className="text-xl font-medium text-gray-900">
                  Activity Suggestions
                </h2>
              </CardHeader>
              <CardBody>
                <div className="space-y-4">
                  <div className="p-4 border border-blue-200 rounded-lg bg-blue-50">
                    <h3 className="text-lg font-medium text-blue-800">
                      Yoga Session
                    </h3>
                    <p className="mt-1 text-sm text-blue-600">
                      30-minute gentle yoga to improve flexibility and reduce
                      stress.
                    </p>
                    <div className="mt-4">
                      <Button variant="primary" size="sm" className="w-full">
                        Schedule
                      </Button>
                    </div>
                  </div>
                  <div className="p-4 border border-green-200 rounded-lg bg-green-50">
                    <h3 className="text-lg font-medium text-green-800">
                      Outdoor Walk
                    </h3>
                    <p className="mt-1 text-sm text-green-600">
                      20-minute brisk walk to boost your daily step count and
                      energy.
                    </p>
                    <div className="mt-4">
                      <Button variant="primary" size="sm" className="w-full bg-green-600 hover:bg-green-700">
                        Schedule
                      </Button>
                    </div>
                  </div>
                  <div className="p-4 border border-purple-200 rounded-lg bg-purple-50">
                    <h3 className="text-lg font-medium text-purple-800">
                      Meditation Break
                    </h3>
                    <p className="mt-1 text-sm text-purple-600">
                      10-minute guided meditation to calm your mind and improve
                      focus.
                    </p>
                    <div className="mt-4">
                      <Button variant="primary" size="sm" className="w-full bg-purple-600 hover:bg-purple-700">
                        Schedule
                      </Button>
                    </div>
                  </div>
                </div>
              </CardBody>
            </Card>
            <Card className="mt-8">
              <CardHeader>
                <h2 className="text-xl font-medium text-gray-900">
                  Activity Progress
                </h2>
              </CardHeader>
              <CardBody>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm font-medium text-gray-700">
                        Weekly Goal Progress
                      </span>
                      <span className="text-sm font-medium text-gray-700">
                        60%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-blue-600 h-2.5 rounded-full" style={{
                    width: '60%'
                  }}></div>
                    </div>
                    <p className="mt-2 text-xs text-gray-500">
                      3 of 5 planned activities completed this week
                    </p>
                  </div>
                  <div className="pt-4 border-t border-gray-200">
                    <h3 className="text-sm font-medium text-gray-700 mb-2">
                      Recent Achievements
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        5-Day Streak
                      </span>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                        10k Steps
                      </span>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                        Meditation Master
                      </span>
                    </div>
                  </div>
                </div>
              </CardBody>
            </Card>
          </div>
        </div>}
    </div>;
};
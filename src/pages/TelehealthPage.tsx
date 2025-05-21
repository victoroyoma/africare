import React, { useState } from 'react';
import { Calendar, CalendarIcon, VideoIcon, UserIcon, ClockIcon, SearchIcon } from 'lucide-react';
import { Card, CardHeader, CardBody } from '../components/Card';
import { Button } from '../components/Button';
export const TelehealthPage = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedDoctor, setSelectedDoctor] = useState<number | null>(null);
  // Mock data for doctors
  const doctors = [{
    id: 1,
    name: 'Dr. Ogheneyoma Victor',
    specialty: 'Cardiology',
    rating: 4.9,
    availability: ['9:00 AM', '11:30 AM', '2:00 PM'],
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=1000'
  }, {
    id: 2,
    name: 'Dr. Akas Gift',
    specialty: 'Dermatology',
    rating: 4.7,
    availability: ['10:00 AM', '1:30 PM', '4:00 PM'],
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=1000'
  }, {
    id: 3,
    name: 'Dr. Tochi Nwankwo',
    specialty: 'Pediatrics',
    rating: 4.8,
    availability: ['8:30 AM', '12:00 PM', '3:30 PM'],
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=1000'
  }, {
    id: 4,
    name: 'Dr. James Mele',
    specialty: 'General Medicine',
    rating: 4.6,
    availability: ['9:30 AM', '1:00 PM', '4:30 PM'],
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=1000'
  }];
  // Mock time slots
  const timeSlots = ['9:00 AM', '10:00 AM', '11:00 AM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM'];
  const handleDateClick = (date: Date) => {
    setSelectedDate(date);
  };
  const handleDoctorSelect = (id: number) => {
    setSelectedDoctor(id === selectedDoctor ? null : id);
  };
  return <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <div className="mb-8">
      <h1 className="text-3xl font-bold text-gray-900">
        Telehealth Services
      </h1>
      <p className="mt-2 text-lg text-gray-600">
        Schedule virtual consultations with healthcare professionals
      </p>
    </div>
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Left column: Calendar and time selection */}
      <div className="lg:col-span-1">
        <Card>
          <CardHeader>
            <h2 className="text-xl font-medium text-gray-900">
              Schedule an Appointment
            </h2>
          </CardHeader>
          <CardBody>
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Select a Date
              </label>
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                {/* Calendar placeholder - in a real app, use a calendar component */}
                <div className="flex items-center justify-center h-64 border-2 border-dashed border-gray-300 rounded-lg">
                  <div className="text-center">
                    <CalendarIcon className="mx-auto h-12 w-12 text-gray-400" />
                    <p className="mt-1 text-sm text-gray-500">
                      Select a date from the calendar
                    </p>
                    {/* In a real app, this would be an actual calendar component */}
                    <Button variant="primary" className="mt-4" onClick={() => handleDateClick(new Date())}>
                      Select Today
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            {selectedDate && <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Available Time Slots
              </label>
              <div className="grid grid-cols-2 gap-2">
                {timeSlots.map(time => <button key={time} className="px-4 py-2 text-sm font-medium rounded-md border border-gray-300 hover:bg-blue-50 hover:text-blue-700 hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500">
                  {time}
                </button>)}
              </div>
            </div>}
          </CardBody>
        </Card>
        {/* Video call interface placeholder */}
        <Card className="mt-8">
          <CardHeader>
            <h2 className="text-xl font-medium text-gray-900">
              Video Consultation
            </h2>
          </CardHeader>
          <CardBody>
            <div className="bg-gray-800 rounded-lg aspect-video flex items-center justify-center">
              <div className="text-center">
                <VideoIcon className="mx-auto h-16 w-16 text-gray-400" />
                <p className="mt-2 text-white">
                  Your video call will appear here
                </p>
              </div>
            </div>
            <div className="mt-4 flex justify-center space-x-4">
              <Button variant="primary" disabled>
                Start Call
              </Button>
              <Button variant="outline" disabled>
                Test Audio
              </Button>
            </div>
          </CardBody>
        </Card>
      </div>
      {/* Right column: Doctor selection */}
      <div className="lg:col-span-2">
        <Card>
          <CardHeader className="flex justify-between items-center">
            <h2 className="text-xl font-medium text-gray-900">
              Available Healthcare Providers
            </h2>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <SearchIcon className="h-5 w-5 text-gray-400" />
              </div>
              <input type="text" placeholder="Search doctors..." className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" />
            </div>
          </CardHeader>
          <CardBody>
            <div className="space-y-4">
              {doctors.map(doctor => <div key={doctor.id} className={`p-4 rounded-lg border-2 transition-colors cursor-pointer ${selectedDoctor === doctor.id ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:bg-gray-50'}`} onClick={() => handleDoctorSelect(doctor.id)}>
                <div className="flex items-center">
                  <img src={doctor.image} alt={doctor.name} className="h-16 w-16 rounded-full object-cover" />
                  <div className="ml-4 flex-1">
                    <h3 className="text-lg font-medium text-gray-900">
                      {doctor.name}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {doctor.specialty}
                    </p>
                    <div className="flex items-center mt-1">
                      <div className="flex items-center">
                        <span className="text-yellow-400">★★★★★</span>
                        <span className="ml-1 text-sm text-gray-500">
                          {doctor.rating}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <Button variant={selectedDoctor === doctor.id ? 'primary' : 'outline'} size="sm">
                      {selectedDoctor === doctor.id ? 'Selected' : 'Select'}
                    </Button>
                  </div>
                </div>
                {selectedDoctor === doctor.id && <div className="mt-4 pt-4 border-t border-gray-200">
                  <h4 className="text-sm font-medium text-gray-700 mb-2">
                    Available Time Slots:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {doctor.availability.map(time => <span key={time} className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                      <ClockIcon className="h-4 w-4 mr-1" />
                      {time}
                    </span>)}
                  </div>
                  <div className="mt-4">
                    <Button variant="primary" size="md" className="w-full">
                      Book Appointment
                    </Button>
                  </div>
                </div>}
              </div>)}
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  </div>;
};
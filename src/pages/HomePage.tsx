import React from 'react';
import { useNavigate } from 'react-router-dom';
import { VideoIcon, DatabaseIcon, BarChartIcon, FileTextIcon, HeartIcon, ArrowRightIcon } from 'lucide-react';
import { Button } from '../components/Button';
import { Card, CardBody } from '../components/Card';
export const HomePage = () => {
  const navigate = useNavigate();
  const features = [{
    title: 'Telehealth',
    description: 'Schedule virtual consultations with healthcare professionals',
    icon: <VideoIcon size={24} className="text-blue-500" />,
    path: '/telehealth'
  }, {
    title: 'Data Management',
    description: 'Upload and manage your health data securely',
    icon: <DatabaseIcon size={24} className="text-blue-500" />,
    path: '/data-management'
  }, {
    title: 'Analytics',
    description: 'Visualize your health trends and progress',
    icon: <BarChartIcon size={24} className="text-blue-500" />,
    path: '/analytics'
  }, {
    title: 'Health Records',
    description: 'Access your medical records anytime, anywhere',
    icon: <FileTextIcon size={24} className="text-blue-500" />,
    path: '/health-records'
  }, {
    title: 'Wellness',
    description: 'Get personalized health tips and track your wellness journey',
    icon: <HeartIcon size={24} className="text-blue-500" />,
    path: '/wellness'
  }];
  return <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-500 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 lg:py-24">
          <div className="lg:flex lg:items-center lg:justify-between">
            <div className="lg:w-1/2">
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                Your Health, Digitally Connected
              </h1>
              <p className="mt-6 text-xl max-w-3xl">
                Access healthcare services, manage your medical data, and track
                your wellness journey all in one secure platform.
              </p>
              <div className="mt-10">
                <Button variant="primary" size="lg" className="mr-4" onClick={() => navigate('/telehealth')}>
                  Schedule a Consultation
                </Button>
                <Button variant="outline" size="lg" className="bg-white" onClick={() => navigate('/health-records')}>
                  View Your Records
                </Button>
              </div>
            </div>
            <div className="hidden lg:block lg:w-1/2">
              <img className="h-auto w-full object-cover rounded-lg shadow-xl" src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=2070" alt="Digital health illustration" />
            </div>
          </div>
        </div>
      </section>
      {/* Features Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Comprehensive Health Management
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              Everything you need to manage your health in one place
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map(feature => <Card key={feature.title} className="h-full transition-all hover:shadow-lg">
                <CardBody className="flex flex-col h-full">
                  <div className="flex items-center mb-4">
                    <div className="flex-shrink-0 p-3 rounded-md bg-blue-100">
                      {feature.icon}
                    </div>
                    <h3 className="ml-4 text-xl font-medium text-gray-900">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-gray-500 mb-6 flex-grow">
                    {feature.description}
                  </p>
                  <Button variant="outline" className="mt-auto inline-flex items-center" onClick={() => navigate(feature.path)}>
                    Learn more
                    <ArrowRightIcon size={16} className="ml-2" />
                  </Button>
                </CardBody>
              </Card>)}
          </div>
        </div>
      </section>
      {/* Stats Section */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Trusted by thousands of users
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <div className="text-center">
              <p className="text-4xl font-extrabold text-blue-600">5000+</p>
              <p className="mt-2 text-lg font-medium text-gray-500">
                Active Users
              </p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-extrabold text-blue-600">200+</p>
              <p className="mt-2 text-lg font-medium text-gray-500">
                Healthcare Providers
              </p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-extrabold text-blue-600">98%</p>
              <p className="mt-2 text-lg font-medium text-gray-500">
                Satisfaction Rate
              </p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-extrabold text-blue-600">24/7</p>
              <p className="mt-2 text-lg font-medium text-gray-500">
                Support Available
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="bg-blue-700 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-white">
              Ready to take control of your health?
            </h2>
            <p className="mt-4 text-xl text-blue-100">
              Start your journey to better health management today.
            </p>
            <div className="mt-8">
              <Button variant="primary" size="lg" className="bg-white text-blue-700 hover:bg-blue-50">
                Get Started Now
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>;
};

import { Link } from 'react-router-dom';
export const Footer = () => {
  return <footer className="bg-white border-t border-gray-200">
    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
      <div className="md:flex md:items-center md:justify-between">
        <div className="flex justify-center md:justify-start">
          <span className="text-gray-500 text-sm">
            © 2025 HealthHub. All rights reserved.
          </span>
        </div>
        <div className="mt-4 md:mt-0">
          <div className="flex justify-center md:justify-end space-x-6">
            <Link to="#" className="text-gray-400 hover:text-gray-500">
              Privacy Policy
            </Link>
            <Link to="#" className="text-gray-400 hover:text-gray-500">
              Terms of Service
            </Link>
            <Link to="#" className="text-gray-400 hover:text-gray-500">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  </footer>;
};
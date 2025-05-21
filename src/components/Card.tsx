import React from 'react';
interface CardProps {
  children: React.ReactNode;
  className?: string;
}
export const Card = ({
  children,
  className = ''
}: CardProps) => {
  return <div className={`bg-white rounded-lg shadow-md overflow-hidden ${className}`}>
      {children}
    </div>;
};
export const CardHeader = ({
  children,
  className = ''
}: CardProps) => {
  return <div className={`px-4 py-5 sm:px-6 border-b border-gray-200 ${className}`}>
      {children}
    </div>;
};
export const CardBody = ({
  children,
  className = ''
}: CardProps) => {
  return <div className={`px-4 py-5 sm:p-6 ${className}`}>{children}</div>;
};
export const CardFooter = ({
  children,
  className = ''
}: CardProps) => {
  return <div className={`px-4 py-4 sm:px-6 bg-gray-50 ${className}`}>
      {children}
    </div>;
};
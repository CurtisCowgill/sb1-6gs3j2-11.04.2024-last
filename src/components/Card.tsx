import React from 'react';
import { LucideIcon } from 'lucide-react';

interface CardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  iconColor: string;
  subtitle?: string;
  onClick?: () => void;
  className?: string;
}

const Card: React.FC<CardProps> = ({
  title,
  value,
  icon: Icon,
  iconColor,
  subtitle,
  onClick,
  className = ''
}) => {
  return (
    <div
      onClick={onClick}
      className={`bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-gray-200 
        ${onClick ? 'cursor-pointer hover:shadow-md transition-shadow' : ''} 
        ${className}`}
    >
      <div className="flex items-center">
        <Icon className={`h-8 w-8 ${iconColor}`} />
        <div className="ml-4 flex-1 min-w-0">
          <p className="text-sm font-medium text-gray-500 truncate">{title}</p>
          <div className="flex items-baseline">
            <p className="text-xl sm:text-2xl font-semibold text-gray-900 truncate">
              {value}
            </p>
            {subtitle && (
              <p className="ml-2 text-sm text-gray-500 truncate">{subtitle}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
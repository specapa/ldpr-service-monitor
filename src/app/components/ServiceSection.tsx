import React from 'react';
import Card from './Card';

interface ServiceItem {
  iconPath: string;
  title: string;
  description: string;
  buttonText: string;
  onButtonClick: () => void;
}

interface Props {
  title: string;
  items: ServiceItem[];
}

const ServiceSection: React.FC<Props> = ({ title, items }) => (
  <>
    <h2 className="text-3xl font-bold text-blue-900 mb-6">{title}</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
      {items.map((item, idx) => (
        <Card key={idx} {...item} />
      ))}
    </div>
  </>
);

export default ServiceSection;

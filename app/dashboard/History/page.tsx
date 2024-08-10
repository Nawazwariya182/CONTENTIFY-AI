'use client'; // This component should be client-side

import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Loader } from 'lucide-react';

// Define the props for TemplateCard
interface TemplateCardProps {
  name: string;
  desc: string;
}

// Simplified TemplateCard component with props typing
const TemplateCard: React.FC<TemplateCardProps> = ({ name, desc }) => (
  <div className="p-2 border border-gray-200 rounded-md">
    <p className="font-bold">{name}</p>
    <p>{desc}</p>
  </div>
);

export interface HISTORY {
  airesponse: string;
  createby: string;
  createdAt: string;
  formdata: string;
  id: number;
  templateslug: string;
}

const History: React.FC = () => {
  const [historyData, setHistoryData] = useState<HISTORY[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/history');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log('Fetched data:', data); // Confirm data structure here
        setHistoryData(data);
      } catch (error) {
        setError('Error fetching data');
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const cleanAIResponse = (response: string) => {
    // Replace unwanted characters and limit the response length
    const cleanedResponse = response.replace(/[#`*]/g, '').trim();
    return cleanedResponse.length > 100 ? `${cleanedResponse.slice(0, 100)}...` : cleanedResponse;
  };

  // const formatDate = (dateString: string) => {
  //   if (!dateString || typeof dateString !== 'string') {
  //     return 'Invalid Date';
  //   }

  //   // Check if the dateString is in the expected 'DD/MM/YYYY' format
  //   const dateParts = dateString.split('/');
  //   if (dateParts.length !== 3) {
  //     return 'Invalid Date';
  //   }

  //   const [day, month, year] = dateParts.map(part => parseInt(part, 10));

  //   // Check for NaN values or invalid dates (like February 30th)
  //   if (isNaN(day) || isNaN(month) || isNaN(year) || day > 31 || month > 12 || year < 1000) {
  //     return 'Invalid Date';
  //   }

  //   // Create a new Date object and check if it matches the input date
  //   const date = new Date(year, month - 1, day);
  //   if (date.getFullYear() !== year || date.getMonth() !== month - 1 || date.getDate() !== day) {
  //     return 'Invalid Date';
  //   }

  //   return date.toLocaleDateString();
  // };


  // totalUsage()
  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-4">History</h1>
      <p className="mb-8">Search your previously generated AI content</p>
      {error && <p className="text-red-500">{error}</p>}
      <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
        <thead className="bg-secondary">
          <tr>
            <th className="py-2 px-4 text-primary">Template</th>
            <th className="py-2 px-4 text-primary">AI Resp</th>
            {/* <th className="py-2 px-4">Date</th> */}
            <th className="py-2 px-4 text-primary">Words</th>
            <th className="py-2 px-4 text-primary">Copy</th>
          </tr>
        </thead>
        <tbody>
          {historyData.length > 0 ? (
            historyData.map((item) => (
              <tr key={item.id} className="border-t">
                <td className="py-2 px-4">
                  <div className="flex items-center">
                    <span className='text-primary font-bold'>{item.templateslug}</span>
                  </div>
                </td>
                <td className="py-2 px-4">{cleanAIResponse(item.airesponse)}</td>
                <td className="py-2 px-4">{item.airesponse ? item.airesponse.split(' ').length : 'N/A'}</td>
                <td className="py-2 px-4">
                  <Button
                    className="text-white py-1 px-3 rounded"
                    onClick={() => item.airesponse && navigator.clipboard.writeText(item.airesponse)}
                  >
                    Copy
                  </Button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={5} className="py-2 px-4 text-center">
                <div className="flex items-center justify-center w-full h-full">
                  <Loader></Loader>
                </div>
              </td>

            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default History;

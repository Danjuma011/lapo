import React from 'react';

const RecentCardRequests = () => {
  const cardRequests = [
    {
      branch: 'Corporate',
      initiator: 'RootUser',
      quantity: 10,
      batch: '847264905',
      dateRequested: '11/14/2024 10:27:43',
      status: 'Ready',
      action: 'View'
    },
    {
      branch: 'Corporate',
      initiator: 'RootUser',
      quantity: 10,
      batch: '847264905',
      dateRequested: '11/14/2024 10:27:43',
      status: 'Ready',
      action: 'View'
    },
    {
      branch: 'Corporate',
      initiator: 'RootUser',
      quantity: 10,
      batch: '847264905',
      dateRequested: '11/14/2024 10:27:43',
      status: 'In Progress',
      action: 'View'
    },
    {
      branch: 'Corporate',
      initiator: 'RootUser',
      quantity: 10,
      batch: '847264905',
      dateRequested: '11/14/2024 10:27:43',
      status: 'Pending',
      action: 'View'
    },
    {
      branch: 'Corporate',
      initiator: 'RootUser',
      quantity: 10,
      batch: '847264905',
      dateRequested: '11/14/2024 10:27:43',
      status: 'Acknowledged',
      action: 'View'
    }
  ];

  return (
    <div className='bg-[#fefefe] rounded-lg px-3 pb-5 pt-3 '>
     

      <table className="w-full">
        <thead>
          <tr className="text-center text-xs font-medium border-b bg-[#F1F7FF]">
            <th className="py-2">Branch</th>
            <th className="py-2">Initiator</th>
            <th className="py-2">Quantity</th>
            <th className="py-2">Batch</th>
            <th className="py-2">Date Requested</th>
            <th className="py-2">Status</th>
            <th className="py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {cardRequests.map((request, index) => (
            <tr key={index} className="border-b text-center text-[10px] font-normal text-[#475467]">
              <td className="py-3">{request.branch}</td>
              <td className="py-3">{request.initiator}</td>
              <td className="py-3">{request.quantity}</td>
              <td className="py-3">{request.batch}</td>
              <td className="py-3">{request.dateRequested}</td>
              <td className="py-3">
                <span
                  className={`inline-flex items-center px-2 py-1 rounded-full border ${
                    request.status === 'Ready'
                      ? 'border-green-500 bg-green-100 text-green-500'
                      : request.status === 'In Progress'
                      ? 'border-yellow-500 bg-yellow-100 text-yellow-500'
                      : request.status === 'Acknowledged'
                      ? 'border-blue-500 bg-blue-100 text-blue-500'
                      : request.status === 'Pending'
                      ? 'border-red-500 bg-red-100 text-red-500'
                      : 'border-gray-500 bg-gray-100 text-gray-500' // Fallback for unknown statuses
                  }`}
                >
                  {request.status}
                </span>
              </td>
              <td className="py-3">
                <button className="text-blue-500 px-3 py-1 rounded hover:text-blue-800">
                  {request.action}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RecentCardRequests;
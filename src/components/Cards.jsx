export function Card({ name, address, time, contact }) {
    return (
      <div className="bg-white shadow-sm hover:shadow-md transition-shadow duration-300 w-full max-w-2xl mx-auto px-4 py-3 text-sm text-gray-800 my-1 rounded-md border border-gray-200">
        <div className="space-y-2 divide-y divide-gray-200">
          <div className="flex justify-between items-start py-1">
            <span className="text-gray-500">Name</span>
            <span className="text-gray-900 font-medium text-right">{name}</span>
          </div>
          <div className="flex justify-between items-start py-1">
            <span className="text-gray-500">Contact</span>
            <span className="text-gray-900 font-medium text-right">{contact}</span>
          </div>
          <div className="flex justify-between items-start py-1">
            <span className="text-gray-500">Address</span>
            <span className="text-gray-900 font-medium text-right">{address}</span>
          </div>
          <div className="flex justify-between items-start py-1">
            <span className="text-gray-500">Prayer-Time</span>
            <span className="text-gray-900 font-medium text-right  ">{time}</span>
          </div>
        </div>
      </div>
    );
  }
  
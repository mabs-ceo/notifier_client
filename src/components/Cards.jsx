export function Card({ name, address, time, contact }) {
  return (
    <div className="bg-white shadow-md hover:shadow-lg transition-shadow duration-300 w-full max-w-2xl mx-auto px-6 py-4 text-sm text-green-900 my-3 rounded-xl border border-green-500">
      <div className="space-y-3 divide-y divide-green-200">
        <div className="flex justify-between items-start py-1">
          <span className="text-green-700 font-medium">Name</span>
          <span className="text-right font-semibold">{name}</span>
        </div>
        <div className="flex justify-between items-start py-1 pt-2">
          <span className="text-green-700 font-medium">Contact</span>
          <span className="text-right font-semibold">{contact}</span>
        </div>
        <div className="flex justify-between items-start py-1 pt-2">
          <span className="text-green-700 font-medium">Address</span>
          <span className="text-right font-semibold">{address}</span>
        </div>
        <div className="flex justify-between items-start py-1 pt-2">
          <span className="text-green-700 font-medium">Prayer Time</span>
          <span className="text-right font-semibold">{time}</span>
        </div>
      </div>
    </div>
  );
}

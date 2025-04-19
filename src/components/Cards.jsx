export function Card({ name, address, time, contact }) {
  return (
    <div className="w-full max-w-xl mx-auto my-4 px-6 py-4 bg-white  hover:shadow-md transition duration-300">
      <div className="space-y-3 text-slate-800 text-sm ">
        {/* Name */}
        <div className="flex  flex-row justify-between font-light">
          <span className="text-gray-500 ">Name</span>
          <span className="  text-right">{name}</span>
        </div>

        {/* Contact */}
        <div className="flex  flex-row justify-between font-light">
          <span className="text-gray-500 ">Contact</span>
          <span className="text-right ">{contact}</span>
        </div>

        {/* Address */}
        <div className="flex  flex-row justify-between font-light">
          <span className="text-gray-500 ">Address</span>
          <span className="text-right ">{address}</span>
        </div>

        {/* Prayer Time */}
        <div className="flex  flex-row justify-between font-light">
          <span className="text-gray-500 ">Prayer Time</span>
          <span className="text-right ">{time}</span>
        </div>
      </div>
    </div>
  );
}

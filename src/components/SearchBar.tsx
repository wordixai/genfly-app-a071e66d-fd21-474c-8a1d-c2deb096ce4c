import { Search, MapPin, BriefcaseIcon } from 'lucide-react';

export default function SearchBar() {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 mb-8">
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1 flex items-center border rounded-md p-2">
          <Search className="w-5 h-5 text-gray-400 mr-2" />
          <input
            type="text"
            placeholder="Job title or keyword"
            className="w-full outline-none"
          />
        </div>
        <div className="flex-1 flex items-center border rounded-md p-2">
          <MapPin className="w-5 h-5 text-gray-400 mr-2" />
          <input
            type="text"
            placeholder="Location"
            className="w-full outline-none"
          />
        </div>
        <div className="flex-1 flex items-center border rounded-md p-2">
          <BriefcaseIcon className="w-5 h-5 text-gray-400 mr-2" />
          <select className="w-full outline-none bg-transparent">
            <option value="">Job Type</option>
            <option value="full-time">Full-time</option>
            <option value="part-time">Part-time</option>
            <option value="contract">Contract</option>
            <option value="remote">Remote</option>
          </select>
        </div>
      </div>
    </div>
  );
}
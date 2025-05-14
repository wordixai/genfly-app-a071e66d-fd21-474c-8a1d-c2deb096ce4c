import { mockJobs } from '@/lib/mockData';
import { Building, MapPin, Clock, Globe } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function JobPage({ params }: { params: { id: string } }) {
  const job = mockJobs.find(j => j.id === params.id);

  if (!job) {
    return <div>Job not found</div>;
  }

  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Link href="/" className="text-blue-600 hover:underline mb-6 block">
        ← Back to jobs
      </Link>
      
      <div className="bg-white rounded-lg shadow-md p-8">
        <div className="flex items-start gap-6 mb-8">
          <Image
            src={job.companyLogo}
            alt={job.companyName}
            width={100}
            height={100}
            className="rounded-lg"
          />
          <div>
            <h1 className="text-3xl font-bold mb-4">{job.title}</h1>
            <div className="flex flex-wrap gap-4 text-gray-600">
              <div className="flex items-center">
                <Building className="w-5 h-5 mr-2" />
                {job.companyName}
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-2" />
                {job.location}
              </div>
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-2" />
                {job.type}
              </div>
              <div className="flex items-center">
                <Globe className="w-5 h-5 mr-2" />
                {job.remote ? 'Remote' : 'On-site'}
              </div>
            </div>
          </div>
        </div>

        <div className="prose max-w-none">
          <h2 className="text-xl font-semibold mb-4">About the role</h2>
          <p className="mb-6">{job.description}</p>
          
          <h2 className="text-xl font-semibold mb-4">Requirements</h2>
          <ul className="list-disc pl-6 mb-6">
            {job.requirements.map((req, index) => (
              <li key={index}>{req}</li>
            ))}
          </ul>

          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors w-full sm:w-auto">
            Apply for this position
          </button>
        </div>
      </div>
    </main>
  );
}
import { Job } from '@/lib/types';
import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Clock, Building } from 'lucide-react';

interface JobCardProps {
  job: Job;
}

export default function JobCard({ job }: JobCardProps) {
  return (
    <Link href={`/jobs/${job.id}`}>
      <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
        <div className="flex items-start gap-4">
          <Image
            src={job.companyLogo}
            alt={job.companyName}
            width={64}
            height={64}
            className="rounded-lg"
          />
          <div className="flex-1">
            <h2 className="text-xl font-semibold mb-2">{job.title}</h2>
            <div className="flex flex-wrap gap-4 text-gray-600 mb-3">
              <div className="flex items-center">
                <Building className="w-4 h-4 mr-1" />
                {job.companyName}
              </div>
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-1" />
                {job.location}
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-1" />
                {job.type}
              </div>
            </div>
            <p className="text-gray-600 line-clamp-2">{job.description}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
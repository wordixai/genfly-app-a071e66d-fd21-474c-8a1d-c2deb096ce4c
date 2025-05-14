import { mockCompanies } from '@/lib/mockData';
import Image from 'next/image';
import Link from 'next/link';
import { Building, MapPin, Globe, Users } from 'lucide-react';

export default function CompanyPage({ params }: { params: { id: string } }) {
  const company = mockCompanies.find(c => c.id === params.id);

  if (!company) {
    return <div>Company not found</div>;
  }

  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Link href="/" className="text-blue-600 hover:underline mb-6 block">
        ← Back to jobs
      </Link>

      <div className="bg-white rounded-lg shadow-md p-8">
        <div className="flex items-start gap-6 mb-8">
          <Image
            src={company.logo}
            alt={company.name}
            width={120}
            height={120}
            className="rounded-lg"
          />
          <div>
            <h1 className="text-3xl font-bold mb-4">{company.name}</h1>
            <div className="flex flex-wrap gap-4 text-gray-600">
              <div className="flex items-center">
                <Building className="w-5 h-5 mr-2" />
                {company.industry}
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-2" />
                {company.location}
              </div>
              <div className="flex items-center">
                <Users className="w-5 h-5 mr-2" />
                {company.size}
              </div>
              <div className="flex items-center">
                <Globe className="w-5 h-5 mr-2" />
                {company.website}
              </div>
            </div>
          </div>
        </div>

        <div className="prose max-w-none">
          <h2 className="text-xl font-semibold mb-4">About {company.name}</h2>
          <p className="mb-6">{company.description}</p>

          <h2 className="text-xl font-semibold mb-4">Open Positions</h2>
          <div className="grid gap-4">
            {company.openPositions.map((position, index) => (
              <Link 
                key={index} 
                href={`/jobs/${position.id}`}
                className="block p-4 border rounded-lg hover:bg-gray-50"
              >
                <h3 className="font-semibold">{position.title}</h3>
                <p className="text-gray-600">{position.location} • {position.type}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
import JobList from '@/components/JobList';
import SearchBar from '@/components/SearchBar';
import { mockJobs } from '@/lib/mockData';

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-4xl font-bold mb-8">Find Your Next Role</h1>
      <SearchBar />
      <JobList jobs={mockJobs} />
    </main>
  );
}
import { navItems } from '@/constants/data';
import DashboardNav from './dashboard-nav';
import { Link } from 'react-router-dom';

export default function Sidebar() {
  return (
    <aside className="hidden h-screen w-64 flex-col overflow-y-auto overflow-x-hidden  border-r bg-[#131C40] py-8 pl-5 lg:flex">
      <Link to="/" className="text-3xl font-bold text-white">
        <img src="/longlian_transparent_logo.png" alt="logo"  style={{ width: '14rem' }} />
      </Link>
      <div className="mt-6 flex flex-1 flex-col justify-between">
        <DashboardNav items={navItems} />
      </div>
    </aside>
  );
}
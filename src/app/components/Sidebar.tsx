import { useNavigate, useLocation } from 'react-router';
import { LayoutDashboard, Clock, Users, FileText, Settings, LogOut } from 'lucide-react';

interface SidebarProps {
  clinicName?: string;
  clinicLocation?: string;
  onLogout?: () => void;
}

export function Sidebar({ clinicName = "Mumbai North Clinic", clinicLocation = "Mumbai North Clinic", onLogout }: SidebarProps) {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const menuItems = [
    { path: '/admin/dashboard', icon: LayoutDashboard, label: 'Dashboard' },
    { path: '/admin/queue', icon: Clock, label: 'Queue' },
    { path: '/admin/patients', icon: Users, label: 'Patients' },
    { path: '/admin/billing', icon: FileText, label: 'Billing' },
    { path: '/admin/reports', icon: FileText, label: 'Reports' },
    { path: '/admin/settings', icon: Settings, label: 'Settings' },
  ];

  return (
    <div className="w-[200px] bg-[#f8f9fb] border-r border-gray-200 flex flex-col h-screen">
      {/* Logo */}
      <div className="p-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#006d4c] rounded-[20px] flex items-center justify-center flex-shrink-0">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M10 0C4.48 0 0 4.48 0 10s4.48 10 10 10 10-4.48 10-10S15.52 0 10 0zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" fill="#E6FFEF"/>
            </svg>
          </div>
          <div className="flex flex-col">
            <div className="font-['Manrope'] font-bold text-[16px] text-[#006d4c] leading-[20px]">
              The Clinical
              <br />
              Sanctuary
            </div>
            <div className="font-['Inter'] text-[10px] text-[#64748b] uppercase tracking-[1px] leading-[20px] mt-1">
              {clinicLocation}
            </div>
          </div>
        </div>
      </div>

      {/* Menu Items */}
      <nav className="flex-1 px-3">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const active = isActive(item.path);
          
          return (
            <button
              key={item.path}
              onClick={() => navigate(item.path)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl mb-1 transition-colors ${
                active 
                  ? 'bg-[#cfe9d9] text-[#006d4c]' 
                  : 'text-[#64748b] hover:bg-gray-100'
              }`}
            >
              <Icon className="w-[18px] h-[18px]" />
              <span className="font-['Inter'] font-medium text-[14px] tracking-[-0.35px]">
                {item.label}
              </span>
            </button>
          );
        })}
      </nav>

      {/* Logout */}
      {onLogout && (
        <div className="p-3">
          <button
            onClick={onLogout}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-[#64748b] hover:bg-gray-100 transition-colors"
          >
            <LogOut className="w-[18px] h-[18px]" />
            <span className="font-['Inter'] font-medium text-[14px] tracking-[-0.35px]">
              Logout
            </span>
          </button>
        </div>
      )}
    </div>
  );
}

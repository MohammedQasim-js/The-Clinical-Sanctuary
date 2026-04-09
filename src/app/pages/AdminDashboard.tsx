import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { storage } from '../services/storage';
import type { Token } from '../services/storage';
import { Sidebar } from '../components/Sidebar';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Input } from '../components/ui/input';
import { Search, Bell, UserCircle, TrendingUp, Clock, CheckCircle2, XCircle, Phone, MoreVertical, Play, UserCheck, AlertTriangle } from 'lucide-react';
import { toast } from 'sonner';

function AdminDashboard() {
  const navigate = useNavigate();
  const [clinic, setClinic] = useState(storage.getCurrentUser());
  const [tokens, setTokens] = useState<Token[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [refreshKey, setRefreshKey] = useState(0);

  useEffect(() => {
    if (!clinic) {
      toast.error('Please login first');
      navigate('/admin/login');
      return;
    }

    loadTokens();
    
    // Auto-refresh every 5 seconds
    const interval = setInterval(() => {
      loadTokens();
    }, 5000);

    return () => clearInterval(interval);
  }, [clinic, refreshKey]);

  const loadTokens = () => {
    if (!clinic) return;
    const clinicTokens = storage.getTokensByClinic(clinic.id);
    setTokens(clinicTokens);
  };

  const handleLogout = () => {
    storage.logout();
    toast.success('Logged out successfully');
    navigate('/admin/login');
  };

  const handleCallNext = () => {
    if (!clinic) return;

    const waitingTokens = tokens.filter(t => t.status === 'waiting');
    
    if (waitingTokens.length === 0) {
      toast.info('No waiting patients in queue');
      return;
    }

    // Notify the next 2 waiting patients
    const tokensToNotify = waitingTokens.slice(0, 2);
    
    tokensToNotify.forEach(token => {
      token.status = 'notified';
      storage.updateToken(token);
    });

    // Update current token
    const updatedClinic = { ...clinic, currentToken: clinic.currentToken + 1 };
    storage.updateClinic(updatedClinic);
    setClinic(updatedClinic);

    toast.success(`Called token #${waitingTokens[0].tokenNumber}`);
    setRefreshKey(prev => prev + 1);
  };

  const handleMarkArrived = (token: Token) => {
    if (!clinic) return;

    token.status = 'arrived';
    storage.updateToken(token);
    
    toast.success(`Token #${token.tokenNumber} marked as arrived`);
    setRefreshKey(prev => prev + 1);
  };

  const handleSkipPatient = (token: Token) => {
    if (!clinic) return;

    token.status = 'skipped';
    storage.updateToken(token);
    
    toast.warning(`Token #${token.tokenNumber} skipped`);
    setRefreshKey(prev => prev + 1);
  };

  const handleCompletePatient = (token: Token) => {
    if (!clinic) return;

    token.status = 'completed';
    storage.updateToken(token);
    
    toast.success(`Token #${token.tokenNumber} completed`);
    setRefreshKey(prev => prev + 1);
  };

  if (!clinic) return null;

  const waitingCount = tokens.filter(t => t.status === 'waiting').length;
  const notifiedCount = tokens.filter(t => t.status === 'notified').length;
  const arrivedCount = tokens.filter(t => t.status === 'arrived').length;
  const skippedCount = tokens.filter(t => t.status === 'skipped').length;
  const completedCount = tokens.filter(t => t.status === 'completed').length;

  const activeTokens = tokens.filter(t => 
    t.status === 'waiting' || t.status === 'notified' || t.status === 'arrived'
  );

  const nextToken = waitingCount > 0 ? tokens.find(t => t.status === 'waiting') : null;

  const formatTime = (isoString: string) => {
    const date = new Date(isoString);
    return date.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' });
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'waiting':
        return <Badge className="bg-[#f3f4f6] text-[#6b7280] hover:bg-[#f3f4f6] rounded-full px-3 py-1 text-xs font-medium">WAITING</Badge>;
      case 'notified':
        return <Badge className="bg-[#dbeafe] text-[#1e40af] hover:bg-[#dbeafe] rounded-full px-3 py-1 text-xs font-medium">NOTIFIED</Badge>;
      case 'arrived':
        return <Badge className="bg-[#d1fae5] text-[#065f46] hover:bg-[#d1fae5] rounded-full px-3 py-1 text-xs font-medium">ARRIVED</Badge>;
      case 'skipped':
        return <Badge className="bg-[#fee2e2] text-[#991b1b] hover:bg-[#fee2e2] rounded-full px-3 py-1 text-xs font-medium">SKIPPED</Badge>;
      case 'completed':
        return <Badge className="bg-[#f3f4f6] text-[#4b5563] hover:bg-[#f3f4f6] rounded-full px-3 py-1 text-xs font-medium">COMPLETED</Badge>;
      case 'in-consultation':
        return <Badge className="bg-[#cfe9d9] text-[#006d4c] hover:bg-[#cfe9d9] rounded-full px-3 py-1 text-xs font-medium">IN CONSULTATION</Badge>;
      default:
        return <Badge>{status}</Badge>;
    }
  };

  return (
    <div className="flex h-screen bg-white">
      <Sidebar clinicName={clinic.name} clinicLocation={clinic.location} onLogout={handleLogout} />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="border-b border-gray-200 bg-white">
          <div className="px-8 py-4 flex items-center justify-between">
            <div className="flex items-center gap-4 flex-1 max-w-xl">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Search patient ID or token..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 bg-[#f8f9fb] border-none"
                />
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <button className="p-2 hover:bg-gray-100 rounded-lg relative">
                <Bell className="w-5 h-5 text-gray-600" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              <div className="flex items-center gap-3 pl-4 border-l border-gray-200">
                <div className="text-right">
                  <div className="text-sm font-semibold text-[#2c3437]">Dr. Ananya Sharma</div>
                  <div className="text-xs text-[#64748b]">Chief Resident</div>
                </div>
                <div className="w-10 h-10 rounded-full bg-[#006d4c] flex items-center justify-center text-white font-semibold">
                  AS
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 overflow-auto bg-[#f8f9fb]">
          <div className="p-8">
            {/* Page Title */}
            <div className="mb-6">
              <h1 className="text-[32px] font-extrabold text-[#2c3437] tracking-[-0.8px] mb-2">Queue Management</h1>
              <p className="text-[#596064] text-base">Real-time patient flow at {clinic.name}</p>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-6 gap-4 mb-6">
              {/* Current Token */}
              <Card className="col-span-2 bg-white border-none shadow-sm p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="text-xs text-[#64748b] font-semibold uppercase tracking-wider mb-2">Current Token</div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-5xl font-bold text-[#006d4c]">#{clinic.currentToken}</span>
                      <TrendingUp className="w-5 h-5 text-[#006d4c]" />
                    </div>
                    <div className="text-sm text-[#006d4c] font-medium mt-1">In Consultation</div>
                  </div>
                </div>
              </Card>

              {/* Next Token */}
              <Card className="bg-white border-none shadow-sm p-6">
                <div className="text-xs text-[#64748b] font-semibold uppercase tracking-wider mb-2">Next</div>
                <div className="text-3xl font-bold text-[#2c3437]">#{nextToken?.tokenNumber || (clinic.currentToken + 1)}</div>
              </Card>

              {/* Waiting */}
              <Card className="bg-white border-none shadow-sm p-6">
                <div className="text-xs text-[#64748b] font-semibold uppercase tracking-wider mb-2">Waiting</div>
                <div className="text-3xl font-bold text-[#2c3437]">{waitingCount}</div>
              </Card>

              {/* Notified */}
              <Card className="bg-white border-none shadow-sm p-6">
                <div className="text-xs text-[#64748b] font-semibold uppercase tracking-wider mb-2">Notified</div>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold text-[#006d4c]">{notifiedCount}</span>
                  <div className="w-2 h-2 bg-[#006d4c] rounded-full"></div>
                </div>
              </Card>

              {/* Skipped */}
              <Card className="bg-white border-none shadow-sm p-6">
                <div className="text-xs text-[#64748b] font-semibold uppercase tracking-wider mb-2">Skipped</div>
                <div className="text-3xl font-bold text-[#ef4444]">{skippedCount}</div>
              </Card>

              {/* Completed */}
              <Card className="bg-[#cfe9d9] border-none shadow-sm p-6 col-start-6">
                <div className="text-xs text-[#006d4c] font-semibold uppercase tracking-wider mb-2">Completed</div>
                <div className="text-3xl font-bold text-[#006d4c]">{completedCount}</div>
              </Card>
            </div>

            {/* Queue Table */}
            <Card className="bg-white border-none shadow-sm">
              <div className="p-6 border-b border-gray-100">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-xl font-bold text-[#2c3437] mb-1">Live Queue Status</h2>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                      <span className="text-sm text-[#64748b]">LIVE</span>
                    </div>
                  </div>
                  <Button
                    onClick={handleCallNext}
                    disabled={waitingCount === 0}
                    className="bg-[#006d4c] hover:bg-[#005f42] text-white"
                  >
                    <Bell className="w-4 h-4 mr-2" />
                    Issue Token
                  </Button>
                </div>
              </div>

              {activeTokens.length === 0 ? (
                <div className="p-12 text-center">
                  <Clock className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-[#2c3437] mb-2">No Active Tokens</h3>
                  <p className="text-sm text-[#596064]">Queue is empty. New tokens will appear here automatically.</p>
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-[#f8f9fb]">
                      <tr>
                        <th className="text-left py-3 px-6 text-xs font-semibold text-[#64748b] uppercase tracking-wider">Token</th>
                        <th className="text-left py-3 px-6 text-xs font-semibold text-[#64748b] uppercase tracking-wider">Patient Name</th>
                        <th className="text-left py-3 px-6 text-xs font-semibold text-[#64748b] uppercase tracking-wider">Check-in</th>
                        <th className="text-left py-3 px-6 text-xs font-semibold text-[#64748b] uppercase tracking-wider">Status</th>
                        <th className="text-right py-3 px-6 text-xs font-semibold text-[#64748b] uppercase tracking-wider">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {activeTokens.map((token) => (
                        <tr key={token.id} className={`hover:bg-[#f8f9fb] transition-colors ${token.status === 'arrived' ? 'bg-green-50/30' : ''}`}>
                          <td className="py-4 px-6">
                            <div className="flex items-center gap-3">
                              {token.status === 'arrived' && (
                                <div className="w-1 h-12 bg-[#006d4c] rounded-full absolute left-0"></div>
                              )}
                              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm ${
                                token.status === 'arrived' ? 'bg-[#006d4c] text-white' : 
                                token.status === 'notified' ? 'bg-[#dbeafe] text-[#1e40af]' :
                                'bg-[#f3f4f6] text-[#6b7280]'
                              }`}>
                                {token.tokenNumber}
                              </div>
                              <span className="font-bold text-[#2c3437]">#{token.tokenNumber}</span>
                            </div>
                          </td>
                          <td className="py-4 px-6">
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-xs font-semibold">
                                {token.phoneNumber.slice(-4, -2).toUpperCase()}
                              </div>
                              <div>
                                <div className="font-medium text-[#2c3437]">{token.phoneNumber}</div>
                                {token.symptoms && (
                                  <div className="text-xs text-[#64748b]">{token.symptoms}</div>
                                )}
                              </div>
                            </div>
                          </td>
                          <td className="py-4 px-6">
                            <div className="text-sm text-[#2c3437]">{formatTime(token.generatedAt)}</div>
                          </td>
                          <td className="py-4 px-6">
                            {getStatusBadge(token.status)}
                          </td>
                          <td className="py-4 px-6">
                            <div className="flex justify-end gap-2">
                              {token.status === 'notified' && (
                                <Button
                                  size="sm"
                                  onClick={() => handleMarkArrived(token)}
                                  className="bg-[#006d4c] hover:bg-[#005f42] text-white h-8"
                                >
                                  <UserCheck className="w-3 h-3 mr-1" />
                                  Mark Arrived
                                </Button>
                              )}
                              
                              {token.status === 'arrived' && (
                                <Button
                                  size="sm"
                                  onClick={() => handleCompletePatient(token)}
                                  className="bg-gray-600 hover:bg-gray-700 text-white h-8"
                                >
                                  <CheckCircle2 className="w-3 h-3 mr-1" />
                                  Complete
                                </Button>
                              )}

                              {(token.status === 'waiting' || token.status === 'notified') && (
                                <Button
                                  size="sm"
                                  variant="ghost"
                                  onClick={() => handleSkipPatient(token)}
                                  className="text-red-600 hover:text-red-700 hover:bg-red-50 h-8"
                                >
                                  <XCircle className="w-3 h-3 mr-1" />
                                  Skip
                                </Button>
                              )}

                              <button className="p-2 hover:bg-gray-100 rounded-lg">
                                <MoreVertical className="w-4 h-4 text-gray-400" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </Card>

            {/* Immediate Actions */}
            <div className="grid grid-cols-4 gap-4 mt-6">
              <button 
                onClick={handleCallNext}
                disabled={waitingCount === 0}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <div className="w-12 h-12 bg-[#cfe9d9] rounded-full flex items-center justify-center mx-auto mb-3">
                  <Phone className="w-6 h-6 text-[#006d4c]" />
                </div>
                <div className="text-sm font-semibold text-[#2c3437]">Call Next</div>
              </button>

              <button className="bg-white border border-gray-200 rounded-xl p-6 hover:bg-gray-50 transition-colors">
                <div className="w-12 h-12 bg-[#cfe9d9] rounded-full flex items-center justify-center mx-auto mb-3">
                  <UserCheck className="w-6 h-6 text-[#006d4c]" />
                </div>
                <div className="text-sm font-semibold text-[#2c3437]">Mark Arrived</div>
              </button>

              <button className="bg-white border border-gray-200 rounded-xl p-6 hover:bg-gray-50 transition-colors">
                <div className="w-12 h-12 bg-[#fee2e2] rounded-full flex items-center justify-center mx-auto mb-3">
                  <Play className="w-6 h-6 text-[#ef4444]" />
                </div>
                <div className="text-sm font-semibold text-[#2c3437]">Skip Token</div>
              </button>

              <button className="bg-white border border-gray-200 rounded-xl p-6 hover:bg-gray-50 transition-colors">
                <div className="w-12 h-12 bg-[#dbeafe] rounded-full flex items-center justify-center mx-auto mb-3">
                  <AlertTriangle className="w-6 h-6 text-[#1e40af]" />
                </div>
                <div className="text-sm font-semibold text-[#2c3437]">Recall Skipped</div>
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default AdminDashboard;
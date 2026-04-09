import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { storage } from '../services/storage';
import type { Bill, Notification, Patient, Token, Visit } from '../services/storage';
import { Sidebar } from '../components/Sidebar';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import {
  Search,
  Bell,
  Clock,
  CheckCircle2,
  XCircle,
  Users,
  FileText,
  LayoutDashboard,
  Activity,
  Phone,
  UserCheck,
  AlertTriangle,
  RefreshCcw,
  Wallet,
  ShieldCheck,
  ClipboardList,
  Mail,
  Printer,
  Eye,
  Settings,
  Plus,
  Sparkles,
  ArrowRight,
} from 'lucide-react';
import { toast } from 'sonner';

type SectionKey = 'dashboard' | 'queue' | 'patients' | 'billing' | 'reports' | 'settings';

const emptyBillForm = {
  patientName: '',
  phoneNumber: '',
  amount: '',
  description: 'Consultation Fee',
  status: 'unpaid' as Bill['status'],
};

function formatDateTime(isoString: string) {
  return new Date(isoString).toLocaleString('en-IN', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
}

function formatTime(isoString: string) {
  return new Date(isoString).toLocaleTimeString('en-IN', {
    hour: '2-digit',
    minute: '2-digit',
  });
}

function currency(value: number) {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(value);
}

function tokenBadge(status: Token['status']) {
  const styles: Record<Token['status'], string> = {
    waiting: 'bg-[#f3f4f6] text-[#6b7280]',
    notified: 'bg-[#dbeafe] text-[#1e40af]',
    arrived: 'bg-[#d1fae5] text-[#065f46]',
    skipped: 'bg-[#fee2e2] text-[#991b1b]',
    completed: 'bg-[#e5e7eb] text-[#374151]',
  };

  return <Badge className={`${styles[status]} hover:${styles[status]} rounded-full px-3 py-1`}>{status.toUpperCase()}</Badge>;
}

function billBadge(status: Bill['status']) {
  if (status === 'paid') {
    return <Badge className="bg-[#d1fae5] text-[#065f46] hover:bg-[#d1fae5] rounded-full px-3 py-1">PAID</Badge>;
  }

  if (status === 'unpaid') {
    return <Badge className="bg-[#fee2e2] text-[#991b1b] hover:bg-[#fee2e2] rounded-full px-3 py-1">UNPAID</Badge>;
  }

  return <Badge className="bg-[#e5e7eb] text-[#374151] hover:bg-[#e5e7eb] rounded-full px-3 py-1">PENDING</Badge>;
}

function notificationBadge(type: Notification['type']) {
  const styles: Record<Notification['type'], string> = {
    info: 'bg-[#e5e7eb] text-[#374151]',
    warning: 'bg-[#fde68a] text-[#92400e]',
    success: 'bg-[#d1fae5] text-[#065f46]',
    billing: 'bg-[#dbeafe] text-[#1e40af]',
    token: 'bg-[#cfe9d9] text-[#006d4c]',
  };

  return <Badge className={`${styles[type]} hover:${styles[type]} rounded-full px-3 py-1`}>{type.toUpperCase()}</Badge>;
}

function AdminDashboard() {
  const navigate = useNavigate();
  const location = useLocation();

  const [clinic, setClinic] = useState(storage.getCurrentUser());
  const [tokens, setTokens] = useState<Token[]>([]);
  const [patients, setPatients] = useState<Patient[]>([]);
  const [visits, setVisits] = useState<Visit[]>([]);
  const [bills, setBills] = useState<Bill[]>([]);
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBillId, setSelectedBillId] = useState<string>('');
  const [billForm, setBillForm] = useState(emptyBillForm);
  const [internalIdPhone, setInternalIdPhone] = useState('');
  const [internalIdValue, setInternalIdValue] = useState('');

  const section: SectionKey = location.pathname.includes('/queue')
    ? 'queue'
    : location.pathname.includes('/patients')
      ? 'patients'
      : location.pathname.includes('/billing')
        ? 'billing'
        : location.pathname.includes('/reports')
          ? 'reports'
          : location.pathname.includes('/settings')
            ? 'settings'
            : 'dashboard';

  const refreshData = () => {
    const currentClinic = storage.getCurrentUser();

    if (!currentClinic) {
      navigate('/admin/login');
      return;
    }

    setClinic(currentClinic);
    setTokens(storage.getTokensByClinic(currentClinic.id));
    setPatients(storage.getPatients());
    setVisits(storage.getVisitsByClinic(currentClinic.id));
    setBills(storage.getBillsByClinic(currentClinic.id));
    setNotifications(storage.getNotificationsByClinic(currentClinic.id));
  };

  useEffect(() => {
    refreshData();
    const interval = setInterval(refreshData, 4000);

    return () => clearInterval(interval);
  }, [location.pathname]);

  useEffect(() => {
    if (bills.length > 0 && !selectedBillId) {
      setSelectedBillId(bills[0].id);
    }
  }, [bills, selectedBillId]);

  if (!clinic) {
    return null;
  }

  const waitingTokens = tokens.filter(token => token.status === 'waiting');
  const activeTokens = tokens.filter(token => token.status !== 'completed');
  const currentToken = tokens.find(token => token.tokenNumber === clinic.currentToken) || activeTokens[0] || null;
  const unreadNotifications = notifications.filter(notification => !notification.read);
  const outstandingBills = bills.filter(bill => bill.status !== 'paid');
  const paidBills = bills.filter(bill => bill.status === 'paid');
  const todayRevenue = paidBills.reduce((sum, bill) => sum + bill.amount, 0);
  const outstandingAmount = outstandingBills.reduce((sum, bill) => sum + bill.amount, 0);
  const clinicPatients = Array.from(new Map(tokens.map(token => [token.phoneNumber, token.phoneNumber])).values())
    .map(phoneNumber => storage.getPatient(phoneNumber) || patients.find(patient => patient.phoneNumber === phoneNumber) || { phoneNumber });

  const filteredTokens = activeTokens.filter(token => {
    const query = searchQuery.toLowerCase();
    return (
      token.phoneNumber.toLowerCase().includes(query) ||
      String(token.tokenNumber).includes(query) ||
      (token.symptoms || '').toLowerCase().includes(query)
    );
  });

  const filteredBills = bills.filter(bill => {
    const query = searchQuery.toLowerCase();
    return (
      bill.patientName.toLowerCase().includes(query) ||
      bill.phoneNumber.toLowerCase().includes(query) ||
      bill.invoiceId.toLowerCase().includes(query)
    );
  });

  const filteredVisits = visits.filter(visit => {
    const query = searchQuery.toLowerCase();
    const token = tokens.find(item => item.id === visit.tokenId);
    return (
      visit.phoneNumber.toLowerCase().includes(query) ||
      (token?.symptoms || '').toLowerCase().includes(query) ||
      String(token?.tokenNumber || '').includes(query)
    );
  });

  const filteredNotifications = notifications.filter(notification => {
    const query = searchQuery.toLowerCase();
    return (
      notification.title.toLowerCase().includes(query) ||
      notification.body.toLowerCase().includes(query)
    );
  });

  const saveNotification = (title: string, body: string, type: Notification['type']) => {
    storage.saveNotification({
      id: `notification_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
      clinicId: clinic.id,
      title,
      body,
      type,
      read: false,
      createdAt: new Date().toISOString(),
    });
  };

  const handleLogout = () => {
    storage.logout();
    toast.success('Logged out successfully');
    navigate('/admin/login');
  };

  const handleUpdateToken = (token: Token, status: Token['status']) => {
    storage.updateToken({ ...token, status });
    saveNotification(
      `Token #${token.tokenNumber} updated`,
      `Token #${token.tokenNumber} is now ${status}.`,
      status === 'skipped' ? 'warning' : 'success',
    );
    refreshData();
  };

  const handleCallNext = () => {
    const nextToken = tokens.find(token => token.status === 'waiting');

    if (!nextToken) {
      toast.info('No waiting patients in the queue');
      return;
    }

    storage.updateToken({ ...nextToken, status: 'notified' });
    storage.updateClinic({ ...clinic, currentToken: nextToken.tokenNumber });
    saveNotification(
      `Token #${nextToken.tokenNumber} called`,
      `${nextToken.phoneNumber} should report to the clinic now.`,
      'token',
    );
    toast.success(`Called token #${nextToken.tokenNumber}`);
    refreshData();
  };

  const handleMarkArrived = (token: Token) => {
    handleUpdateToken(token, 'arrived');
    toast.success(`Token #${token.tokenNumber} marked as arrived`);
  };

  const handleCompletePatient = (token: Token) => {
    storage.updateToken({ ...token, status: 'completed' });
    storage.saveVisit({
      id: `visit_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
      tokenId: token.id,
      clinicId: clinic.id,
      phoneNumber: token.phoneNumber,
      date: new Date().toISOString(),
      status: 'completed',
    });

    const existingBill = bills.find(bill => bill.tokenNumber === token.tokenNumber && bill.phoneNumber === token.phoneNumber);
    if (!existingBill) {
      const amount = 2000;
      storage.saveBill({
        id: `bill_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
        clinicId: clinic.id,
        patientName: storage.getPatient(token.phoneNumber)?.name || token.phoneNumber,
        phoneNumber: token.phoneNumber,
        tokenNumber: token.tokenNumber,
        invoiceId: `INV-${new Date().getFullYear()}-${String(bills.length + 1).padStart(3, '0')}`,
        serviceDate: new Date().toISOString(),
        amount,
        status: 'pending',
        description: 'Consultation fee',
        createdAt: new Date().toISOString(),
      });
    }

    saveNotification(
      `Token #${token.tokenNumber} completed`,
      `Visit completed for ${token.phoneNumber}. Billing record created.`,
      'billing',
    );
    toast.success(`Token #${token.tokenNumber} completed`);
    refreshData();
  };

  const handleSkipPatient = (token: Token) => {
    handleUpdateToken(token, 'skipped');
    toast.warning(`Token #${token.tokenNumber} skipped`);
  };

  const handleRequeueToken = (token: Token) => {
    handleUpdateToken(token, 'waiting');
    toast.success(`Token #${token.tokenNumber} returned to the queue`);
  };

  const handleCreateBill = (event: React.FormEvent) => {
    event.preventDefault();

    const amount = Number(billForm.amount);
    if (!billForm.patientName || !billForm.phoneNumber || !amount || amount <= 0) {
      toast.error('Please enter bill patient name, phone number, and amount');
      return;
    }

    const linkedToken = tokens.find(token => token.phoneNumber === billForm.phoneNumber);
    const invoiceId = `INV-${new Date().getFullYear()}-${String(bills.length + 1).padStart(3, '0')}`;
    const bill: Bill = {
      id: `bill_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
      clinicId: clinic.id,
      patientName: billForm.patientName,
      phoneNumber: billForm.phoneNumber,
      tokenNumber: linkedToken?.tokenNumber || 0,
      invoiceId,
      serviceDate: new Date().toISOString(),
      amount,
      status: billForm.status,
      description: billForm.description,
      createdAt: new Date().toISOString(),
      paidAt: billForm.status === 'paid' ? new Date().toISOString() : undefined,
    };

    storage.saveBill(bill);
    saveNotification(
      `Invoice ${invoiceId} created`,
      `${bill.patientName} has a new ${bill.status} invoice for ${currency(amount)}.`,
      'billing',
    );
    setBillForm(emptyBillForm);
    setSelectedBillId(bill.id);
    toast.success('Bill saved');
    refreshData();
  };

  const handleMarkBillPaid = (bill: Bill) => {
    storage.saveBill({ ...bill, status: 'paid', paidAt: new Date().toISOString() });
    saveNotification(
      `Invoice ${bill.invoiceId} paid`,
      `${bill.patientName} payment marked as received.`,
      'success',
    );
    toast.success(`Invoice ${bill.invoiceId} marked as paid`);
    refreshData();
  };

  const handleAssignInternalId = () => {
    if (!internalIdPhone || !internalIdValue) {
      toast.error('Enter a phone number and internal clinic ID');
      return;
    }

    const existingPatient = storage.getPatient(internalIdPhone) || { phoneNumber: internalIdPhone };
    storage.savePatient({ ...existingPatient, phoneNumber: internalIdPhone, internalId: internalIdValue });
    saveNotification(
      'Internal patient ID assigned',
      `Patient ${internalIdPhone} now has clinic ID ${internalIdValue}.`,
      'info',
    );
    toast.success('Internal ID saved');
    setInternalIdPhone('');
    setInternalIdValue('');
    refreshData();
  };

  const toggleClinicOpen = () => {
    storage.updateClinic({ ...clinic, isOpen: !clinic.isOpen });
    saveNotification(
      clinic.isOpen ? 'Clinic closed' : 'Clinic opened',
      `Clinic ${clinic.name} status updated from the settings section.`,
      'success',
    );
    toast.success(clinic.isOpen ? 'Clinic marked closed' : 'Clinic marked open');
    refreshData();
  };

  const bumpWaitTime = (delta: number) => {
    const nextWaitTime = Math.max(0, clinic.estimatedWaitTime + delta);
    storage.updateClinic({ ...clinic, estimatedWaitTime: nextWaitTime });
    saveNotification(
      'Wait time updated',
      `Estimated wait time changed to ${nextWaitTime} minutes.`,
      'info',
    );
    toast.success('Estimated wait time updated');
    refreshData();
  };

  const markAllNotificationsRead = () => {
    storage.markAllNotificationsRead(clinic.id);
    toast.success('All notifications marked as read');
    refreshData();
  };

  const selectedBill = bills.find(bill => bill.id === selectedBillId) || bills[0] || null;

  const sectionTitle: Record<SectionKey, string> = {
    dashboard: 'Dashboard',
    queue: 'Queue',
    patients: 'Patients',
    billing: 'Billing',
    reports: 'Reports',
    settings: 'Settings',
  };

  const sectionDescription: Record<SectionKey, string> = {
    dashboard: 'Quick clinic overview, queue health, and revenue snapshot.',
    queue: 'Live queue timeline and token controls backed by localStorage.',
    patients: 'Patient history and clinic ID management for the front desk.',
    billing: 'Create and track invoices without any backend dependency.',
    reports: 'System alerts, delivery notifications, and read status.',
    settings: 'Simple operating controls for the clinic admin.',
  };

  return (
    <div className="flex h-screen bg-white">
      <Sidebar clinicName={clinic.name} clinicLocation={clinic.location} onLogout={handleLogout} />

      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="border-b border-gray-200 bg-white">
          <div className="px-6 md:px-8 py-4 flex items-center justify-between gap-4">
            <div className="flex items-center gap-4 flex-1 max-w-2xl">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  placeholder={`Search ${section} records...`}
                  className="pl-10 bg-[#f8f9fb] border-none"
                />
              </div>
            </div>

            <div className="flex items-center gap-4">
              <button className="p-2 hover:bg-gray-100 rounded-lg relative">
                <Bell className="w-5 h-5 text-gray-600" />
                {unreadNotifications.length > 0 && <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />}
              </button>
              <div className="flex items-center gap-3 pl-4 border-l border-gray-200">
                <div className="text-right">
                  <div className="text-sm font-semibold text-[#2c3437]">{clinic.adminEmail || 'Dr. Ananya Sharma'}</div>
                  <div className="text-xs text-[#64748b]">Chief Medical Officer</div>
                </div>
                <div className="w-10 h-10 rounded-full bg-[#006d4c] flex items-center justify-center text-white font-semibold">
                  AS
                </div>
              </div>
            </div>
          </div>
        </header>

        <main className="flex-1 overflow-auto bg-[#f4f7fa]">
          <div className="p-6 md:p-8 space-y-6">
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              <Card className="bg-white border-none shadow-sm">
                <CardContent className="p-5">
                  <div className="text-xs uppercase tracking-wider text-[#64748b] font-semibold mb-2">Clinic Status</div>
                  <div className="text-3xl font-bold text-[#2c3437]">{clinic.isOpen ? 'Open' : 'Closed'}</div>
                  <div className="text-sm text-[#596064] mt-1">{clinic.name}</div>
                </CardContent>
              </Card>
              <Card className="bg-white border-none shadow-sm">
                <CardContent className="p-5">
                  <div className="text-xs uppercase tracking-wider text-[#64748b] font-semibold mb-2">Current Token</div>
                  <div className="text-3xl font-bold text-[#006d4c]">#{clinic.currentToken}</div>
                  <div className="text-sm text-[#596064] mt-1">Live queue position</div>
                </CardContent>
              </Card>
              <Card className="bg-white border-none shadow-sm">
                <CardContent className="p-5">
                  <div className="text-xs uppercase tracking-wider text-[#64748b] font-semibold mb-2">Outstanding</div>
                  <div className="text-3xl font-bold text-[#991b1b]">{currency(outstandingAmount)}</div>
                  <div className="text-sm text-[#596064] mt-1">{outstandingBills.length} unpaid bills</div>
                </CardContent>
              </Card>
              <Card className="bg-white border-none shadow-sm">
                <CardContent className="p-5">
                  <div className="text-xs uppercase tracking-wider text-[#64748b] font-semibold mb-2">Today Revenue</div>
                  <div className="text-3xl font-bold text-[#006d4c]">{currency(todayRevenue)}</div>
                  <div className="text-sm text-[#596064] mt-1">{paidBills.length} paid invoices</div>
                </CardContent>
              </Card>
            </div>

            <div className="flex items-center justify-between gap-4 flex-wrap">
              <div>
                <h1 className="text-3xl md:text-4xl font-extrabold text-[#2c3437] tracking-tight">{sectionTitle[section]}</h1>
                <p className="text-[#596064] mt-2">{sectionDescription[section]}</p>
              </div>
              <div className="flex gap-3 flex-wrap">
                <Button variant="outline" className="bg-white" onClick={refreshData}>
                  <RefreshCcw className="w-4 h-4 mr-2" />
                  Refresh
                </Button>
                <Button className="bg-gradient-to-r from-[#006d4c] to-[#005f42] text-white" onClick={() => navigate('/admin/billing')}>
                  <FileText className="w-4 h-4 mr-2" />
                  Billing
                </Button>
              </div>
            </div>

            {section === 'dashboard' && (
              <div className="grid gap-6 xl:grid-cols-3">
                <Card className="xl:col-span-2 bg-white border-none shadow-sm">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-2xl font-bold text-[#2c3437]">Clinic Overview</CardTitle>
                    <p className="text-[#596064]">A compact summary of the queue, billing, and clinic operating state.</p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-4">
                      <div className="rounded-2xl bg-[#f8f9fb] p-4">
                        <div className="text-xs uppercase tracking-wider text-[#64748b] font-semibold">Patients</div>
                        <div className="text-2xl font-bold text-[#2c3437] mt-2">{clinicPatients.length}</div>
                      </div>
                      <div className="rounded-2xl bg-[#f8f9fb] p-4">
                        <div className="text-xs uppercase tracking-wider text-[#64748b] font-semibold">Queue</div>
                        <div className="text-2xl font-bold text-[#2c3437] mt-2">{waitingTokens.length}</div>
                      </div>
                      <div className="rounded-2xl bg-[#f8f9fb] p-4">
                        <div className="text-xs uppercase tracking-wider text-[#64748b] font-semibold">Wait Time</div>
                        <div className="text-2xl font-bold text-[#2c3437] mt-2">{clinic.estimatedWaitTime} min</div>
                      </div>
                      <div className="rounded-2xl bg-[#f8f9fb] p-4">
                        <div className="text-xs uppercase tracking-wider text-[#64748b] font-semibold">Capacity</div>
                        <div className="text-2xl font-bold text-[#2c3437] mt-2">{clinic.tokensAvailable}</div>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-3 pt-2">
                      <Button className="bg-[#006d4c] hover:bg-[#005f42] text-white" onClick={handleCallNext}>
                        <Phone className="w-4 h-4 mr-2" />
                        Call Next
                      </Button>
                      <Button variant="outline" onClick={toggleClinicOpen}>
                        <ShieldCheck className="w-4 h-4 mr-2" />
                        {clinic.isOpen ? 'Close Clinic' : 'Open Clinic'}
                      </Button>
                      <Button variant="outline" onClick={() => navigate('/admin/queue')}>
                        <LayoutDashboard className="w-4 h-4 mr-2" />
                        View Queue
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-[#006d4c] to-[#005f42] text-white border-none shadow-sm">
                  <CardContent className="p-6 space-y-4">
                    <div>
                      <div className="text-white/80 text-sm font-medium">Total Outstanding</div>
                      <div className="text-4xl font-bold mt-2">{currency(outstandingAmount)}</div>
                    </div>
                    <Button className="w-full bg-white/15 hover:bg-white/25 text-white border border-white/20" onClick={() => navigate('/admin/billing')}>
                      Generate Aging Report
                    </Button>
                    <div className="rounded-2xl bg-white/10 p-4">
                      <div className="text-sm text-white/80">Next patient</div>
                      <div className="text-xl font-semibold mt-1">
                        {currentToken ? `Token #${currentToken.tokenNumber}` : 'No active token'}
                      </div>
                      <div className="text-sm text-white/80 mt-1">{currentToken?.phoneNumber || 'Queue is empty'}</div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="xl:col-span-3 bg-white border-none shadow-sm">
                  <div className="p-6 border-b border-gray-100 flex items-center justify-between gap-4">
                    <div>
                      <h2 className="text-xl font-bold text-[#2c3437]">Recent Queue and Billing Activity</h2>
                      <p className="text-sm text-[#596064]">Recent tokens and invoices are updated from localStorage.</p>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" onClick={() => navigate('/admin/queue')}>Queue</Button>
                      <Button className="bg-[#006d4c] hover:bg-[#005f42] text-white" onClick={() => navigate('/admin/billing')}>Billing</Button>
                    </div>
                  </div>
                  <div className="grid gap-6 xl:grid-cols-2 p-6">
                    <div>
                      <div className="space-y-3">
                        {filteredTokens.slice(0, 4).map(token => (
                          <div key={token.id} className="rounded-2xl bg-[#f8f9fb] p-4 flex items-center justify-between gap-3">
                            <div>
                              <div className="font-semibold text-[#2c3437]">Token #{token.tokenNumber}</div>
                              <div className="text-sm text-[#596064]">{token.phoneNumber}</div>
                            </div>
                            {tokenBadge(token.status)}
                          </div>
                        ))}
                        {filteredTokens.length === 0 && <div className="text-sm text-[#596064]">No queue records found.</div>}
                      </div>
                    </div>
                    <div>
                      <div className="space-y-3">
                        {filteredBills.slice(0, 4).map(bill => (
                          <div key={bill.id} className="rounded-2xl bg-[#f8f9fb] p-4 flex items-center justify-between gap-3">
                            <div>
                              <div className="font-semibold text-[#2c3437]">{bill.patientName}</div>
                              <div className="text-sm text-[#596064]">{bill.invoiceId} - {currency(bill.amount)}</div>
                            </div>
                            {billBadge(bill.status)}
                          </div>
                        ))}
                        {filteredBills.length === 0 && <div className="text-sm text-[#596064]">No invoice records found.</div>}
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            )}

            {section === 'queue' && (
              <div className="grid gap-6 xl:grid-cols-[1.4fr_0.6fr]">
                <div className="space-y-6">
                  <Card className="bg-white border-none shadow-sm">
                    <CardContent className="p-6 space-y-4">
                      <div className="flex items-center justify-between gap-4 flex-wrap">
                        <div>
                          <div className="text-sm uppercase tracking-[0.2em] text-[#64748b] font-semibold">Live Queue Timeline</div>
                          <div className="text-sm text-[#596064] mt-1">Currently processing token #{clinic.currentToken} - {waitingTokens.length} patients waiting</div>
                        </div>
                        <Button variant="outline"><RefreshCcw className="w-4 h-4 mr-2" /> Session Logs</Button>
                      </div>

                      <div className="grid md:grid-cols-[0.9fr_1.1fr] gap-4 items-stretch">
                        <div className="rounded-3xl bg-[#f8f9fb] p-6 flex flex-col justify-between min-h-[180px]">
                          <div className="text-5xl font-extrabold text-[#006d4c]">{clinic.currentToken}</div>
                          <div className="text-sm uppercase tracking-[0.2em] text-[#64748b] font-semibold mt-2">Token</div>
                          <div className="mt-4 text-sm text-[#596064]">The current consultation token stays in localStorage and updates as the queue advances.</div>
                        </div>
                        <div className="rounded-3xl bg-white border border-gray-200 p-6 flex flex-col justify-between min-h-[180px]">
                          <div className="flex items-center gap-2 flex-wrap">
                            <Badge className="bg-[#cfe9d9] text-[#006d4c] hover:bg-[#cfe9d9] rounded-full px-3 py-1">IN CONSULTATION</Badge>
                            <span className="text-sm text-[#596064]">Started at 10:14 AM</span>
                          </div>
                          <div>
                            <div className="text-2xl font-bold text-[#2c3437] mt-4">{currentToken ? `Token #${currentToken.tokenNumber}` : 'No active token'}</div>
                            <div className="text-sm text-[#596064] mt-1">{currentToken?.phoneNumber || 'Call the next waiting patient to begin.'}</div>
                          </div>
                          <div className="flex gap-3 flex-wrap mt-4">
                            <Button className="bg-[#006d4c] hover:bg-[#005f42] text-white" onClick={handleCallNext}><Phone className="w-4 h-4 mr-2" />Call Next</Button>
                            <Button variant="outline" onClick={toggleClinicOpen}><PauseIcon />{clinic.isOpen ? 'Close Clinic' : 'Open Clinic'}</Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-white border-none shadow-sm">
                    <div className="p-6 border-b border-gray-100 flex items-center justify-between">
                      <div>
                        <h2 className="text-xl font-bold text-[#2c3437]">Queue Status</h2>
                        <p className="text-sm text-[#596064]">Working tokens are listed here with quick actions.</p>
                      </div>
                      <div className="text-sm text-[#596064]">{filteredTokens.length} active tokens</div>
                    </div>
                    <CardContent className="p-6 space-y-4">
                      {filteredTokens.length > 0 ? filteredTokens.map(token => (
                        <div key={token.id} className="rounded-2xl border border-gray-200 p-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                          <div>
                            <div className="flex items-center gap-3 flex-wrap">
                              <div className="text-2xl font-bold text-[#006d4c]">#{token.tokenNumber}</div>
                              {tokenBadge(token.status)}
                              <span className="text-sm text-[#596064]">{formatTime(token.generatedAt)}</span>
                            </div>
                            <div className="text-sm text-[#596064] mt-1">{token.phoneNumber}{token.symptoms ? ` - ${token.symptoms}` : ''}</div>
                          </div>
                          <div className="flex gap-2 flex-wrap">
                            {token.status === 'waiting' && <Button className="bg-[#006d4c] hover:bg-[#005f42] text-white" onClick={() => handleUpdateToken(token, 'notified')}><Bell className="w-4 h-4 mr-2" />Call</Button>}
                            {token.status === 'notified' && <Button className="bg-[#006d4c] hover:bg-[#005f42] text-white" onClick={() => handleMarkArrived(token)}><UserCheck className="w-4 h-4 mr-2" />Arrived</Button>}
                            {token.status === 'arrived' && <Button className="bg-[#2c3437] hover:bg-black text-white" onClick={() => handleCompletePatient(token)}><CheckCircle2 className="w-4 h-4 mr-2" />Complete</Button>}
                            {token.status === 'skipped' && <Button variant="outline" onClick={() => handleRequeueToken(token)}><ArrowRight className="w-4 h-4 mr-2" />Re-queue</Button>}
                            {(token.status === 'waiting' || token.status === 'notified') && <Button variant="ghost" className="text-red-600 hover:text-red-700 hover:bg-red-50" onClick={() => handleSkipPatient(token)}><XCircle className="w-4 h-4 mr-2" />Skip</Button>}
                          </div>
                        </div>
                      )) : <div className="text-sm text-[#596064]">No active queue records.</div>}
                    </CardContent>
                  </Card>
                </div>

                <div className="space-y-6">
                  <Card className="bg-white border-none shadow-sm">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg font-bold text-[#2c3437]">Queue Composition</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex items-center justify-between"><span className="text-sm text-[#596064]">Arrived</span><span className="font-semibold text-[#2c3437]">{tokens.filter(token => token.status === 'arrived').length.toString().padStart(2, '0')}</span></div>
                      <div className="flex items-center justify-between"><span className="text-sm text-[#596064]">Waiting</span><span className="font-semibold text-[#2c3437]">{tokens.filter(token => token.status === 'waiting').length.toString().padStart(2, '0')}</span></div>
                      <div className="flex items-center justify-between"><span className="text-sm text-[#596064]">Delayed</span><span className="font-semibold text-[#2c3437]">{tokens.filter(token => token.status === 'skipped').length.toString().padStart(2, '0')}</span></div>
                    </CardContent>
                  </Card>

                  <Card className="bg-white border-none shadow-sm">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg font-bold text-[#2c3437]">Smart Management</CardTitle>
                    </CardHeader>
                    <CardContent className="grid grid-cols-2 gap-3">
                      <Button className="bg-[#006d4c] hover:bg-[#005f42] text-white h-12" onClick={handleCallNext}><Bell className="w-4 h-4 mr-2" />Call Next</Button>
                      <Button variant="outline" className="h-12" onClick={() => currentToken && handleMarkArrived(currentToken)}><UserCheck className="w-4 h-4 mr-2" />Mark Arrived</Button>
                      <Button variant="outline" className="h-12" onClick={() => currentToken && handleCompletePatient(currentToken)}><CheckCircle2 className="w-4 h-4 mr-2" />Complete</Button>
                      <Button variant="outline" className="h-12" onClick={() => currentToken && handleSkipPatient(currentToken)}><XCircle className="w-4 h-4 mr-2" />Skip</Button>
                    </CardContent>
                  </Card>

                  <Card className="bg-white border-none shadow-sm">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg font-bold text-[#2c3437]">Live Updates</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {notifications.slice(0, 4).map(notification => (
                        <div key={notification.id} className="flex items-start gap-3">
                          <div className="mt-1">
                            {notification.type === 'warning' ? <AlertTriangle className="w-4 h-4 text-[#a83836]" /> : <Activity className="w-4 h-4 text-[#006d4c]" />}
                          </div>
                          <div>
                            <div className="text-sm font-semibold text-[#2c3437]">{notification.title}</div>
                            <div className="text-xs text-[#596064] mt-1">{notification.body}</div>
                          </div>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                </div>
              </div>
            )}

            {section === 'patients' && (
              <div className="space-y-6">
                <Card className="bg-white border-none shadow-sm">
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-center justify-between gap-4 flex-wrap">
                      <div>
                        <h2 className="text-2xl font-bold text-[#2c3437]">Patient History</h2>
                        <p className="text-[#596064]">Viewing records from localStorage for {clinic.name}.</p>
                      </div>
                      <div className="flex gap-3 flex-wrap">
                        <Button variant="outline" onClick={handleAssignInternalId}><ClipboardList className="w-4 h-4 mr-2" />Assign Internal ID</Button>
                        <Button className="bg-[#006d4c] hover:bg-[#005f42] text-white" onClick={() => navigate('/token/1')}><Plus className="w-4 h-4 mr-2" />New Consultation</Button>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="rounded-2xl bg-[#f8f9fb] p-4">
                        <div className="text-xs uppercase tracking-wider text-[#64748b] font-semibold">Total Patients</div>
                        <div className="text-2xl font-bold text-[#2c3437] mt-2">{clinicPatients.length}</div>
                      </div>
                      <div className="rounded-2xl bg-[#f8f9fb] p-4">
                        <div className="text-xs uppercase tracking-wider text-[#64748b] font-semibold">Recent Visits</div>
                        <div className="text-2xl font-bold text-[#2c3437] mt-2">{visits.length}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="grid gap-6 xl:grid-cols-3">
                  <Card className="xl:col-span-2 bg-white border-none shadow-sm">
                    <div className="p-6 border-b border-gray-100 flex items-center justify-between">
                      <div>
                        <h3 className="text-xl font-bold text-[#2c3437]">Comprehensive Visit History</h3>
                        <p className="text-sm text-[#596064]">Token details, billing status, and consultation notes.</p>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline"><FilterIcon /></Button>
                        <Button variant="outline"><DownloadIcon /></Button>
                      </div>
                    </div>
                    <CardContent className="p-0 overflow-x-auto">
                      <table className="w-full">
                        <thead className="bg-[#f8f9fb] text-left text-xs uppercase tracking-wider text-[#64748b]">
                          <tr>
                            <th className="p-4">Date</th>
                            <th className="p-4">Symptoms</th>
                            <th className="p-4">Token</th>
                            <th className="p-4">Billing</th>
                            <th className="p-4">Notes</th>
                          </tr>
                        </thead>
                        <tbody>
                          {filteredVisits.length > 0 ? filteredVisits.map(visit => {
                            const token = tokens.find(item => item.id === visit.tokenId);
                            const bill = bills.find(item => item.tokenNumber === token?.tokenNumber);
                            const patient = storage.getPatient(visit.phoneNumber);
                            return (
                              <tr key={visit.id} className="border-t border-gray-100 align-top">
                                <td className="p-4 text-sm text-[#2c3437]">{formatDateTime(visit.date)}</td>
                                <td className="p-4 text-sm text-[#596064]">{token?.symptoms || 'General checkup'}</td>
                                <td className="p-4 text-[#006d4c] font-semibold">#{token?.tokenNumber || '-'}</td>
                                <td className="p-4">{bill ? billBadge(bill.status) : <Badge className="bg-[#e5e7eb] text-[#374151] hover:bg-[#e5e7eb]">N/A</Badge>}</td>
                                <td className="p-4 text-sm text-[#596064]">{patient?.internalId ? `Clinic ID ${patient.internalId}` : 'No clinic ID assigned'}</td>
                              </tr>
                            );
                          }) : <tr><td className="p-6 text-sm text-[#596064]" colSpan={5}>No visit history found.</td></tr>}
                        </tbody>
                      </table>
                    </CardContent>
                  </Card>

                  <div className="space-y-6">
                    <Card className="bg-white border-none shadow-sm">
                      <CardHeader className="pb-3">
                        <CardTitle className="text-lg font-bold text-[#2c3437]">Assign Internal Clinic ID</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        <Input value={internalIdPhone} onChange={e => setInternalIdPhone(e.target.value)} placeholder="Phone number" />
                        <Input value={internalIdValue} onChange={e => setInternalIdValue(e.target.value)} placeholder="Internal ID" />
                        <Button className="w-full bg-[#006d4c] hover:bg-[#005f42] text-white" onClick={handleAssignInternalId}>Save ID</Button>
                      </CardContent>
                    </Card>

                    <Card className="bg-[#eef8f4] border border-[#d6efe4] shadow-sm">
                      <CardContent className="p-5">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded-2xl bg-[#006d4c] text-white flex items-center justify-center"><Sparkles className="w-5 h-5" /></div>
                          <div>
                            <div className="font-semibold text-[#2c3437]">Patient Continuity Program</div>
                            <div className="text-sm text-[#596064] mt-1">Internal IDs help the front desk and admin team keep repeat patients organized.</div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            )}

            {section === 'billing' && (
              <div className="space-y-6">
                <div className="grid gap-6 xl:grid-cols-[1.1fr_0.55fr]">
                  <Card className="bg-white border-none shadow-sm">
                    <CardHeader className="pb-4">
                      <CardTitle className="text-3xl font-extrabold text-[#2c3437]">Billing Dashboard</CardTitle>
                      <p className="text-[#596064]">Monitor transactions, manage patient invoices, and oversee the clinic's financial health in one unified view.</p>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid md:grid-cols-3 gap-4">
                        <div className="rounded-2xl bg-[#f8f9fb] p-4">
                          <div className="text-xs uppercase tracking-wider text-[#64748b] font-semibold">Total Outstanding</div>
                          <div className="text-2xl font-bold text-[#006d4c] mt-2">{currency(outstandingAmount)}</div>
                        </div>
                        <div className="rounded-2xl bg-[#f8f9fb] p-4">
                          <div className="text-xs uppercase tracking-wider text-[#64748b] font-semibold">Total Invoices</div>
                          <div className="text-2xl font-bold text-[#2c3437] mt-2">{bills.length}</div>
                        </div>
                        <div className="rounded-2xl bg-[#f8f9fb] p-4">
                          <div className="text-xs uppercase tracking-wider text-[#64748b] font-semibold">Paid</div>
                          <div className="text-2xl font-bold text-[#006d4c] mt-2">{paidBills.length}</div>
                        </div>
                      </div>

                      <div className="flex gap-3 flex-wrap">
                        <Button variant="outline"><Wallet className="w-4 h-4 mr-2" />Filter By Date</Button>
                        <Button className="bg-[#006d4c] hover:bg-[#005f42] text-white"><Plus className="w-4 h-4 mr-2" />Create New Bill</Button>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-gradient-to-br from-[#006d4c] to-[#005f42] text-white border-none shadow-sm">
                    <CardContent className="p-6 space-y-4">
                      <div className="text-white/80 text-sm font-medium">Outstanding Summary</div>
                      <div className="text-4xl font-bold">{currency(outstandingAmount)}</div>
                      <div className="rounded-2xl bg-white/10 p-4">
                        <div className="text-sm text-white/80">Queue Health</div>
                        <div className="text-xl font-semibold mt-1">{clinic.isOpen ? 'Operational' : 'Closed'}</div>
                      </div>
                      <Button className="w-full bg-white/15 hover:bg-white/25 text-white border border-white/20" onClick={markAllNotificationsRead}>Generate Aging Report</Button>
                    </CardContent>
                  </Card>
                </div>

                <div className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
                  <Card className="bg-white border-none shadow-sm">
                    <div className="p-6 border-b border-gray-100 flex items-center justify-between gap-4">
                      <div>
                        <h3 className="text-xl font-bold text-[#2c3437]">Recent Transactions</h3>
                        <p className="text-sm text-[#596064]">Invoices stored locally are listed here and can be marked paid.</p>
                      </div>
                      <Button variant="outline" onClick={() => refreshData()}><RefreshCcw className="w-4 h-4 mr-2" />Refresh</Button>
                    </div>
                    <CardContent className="p-0 overflow-x-auto">
                      <table className="w-full">
                        <thead className="bg-[#f8f9fb] text-left text-xs uppercase tracking-wider text-[#64748b]">
                          <tr>
                            <th className="p-4">Patient</th>
                            <th className="p-4">Invoice</th>
                            <th className="p-4">Date</th>
                            <th className="p-4">Amount</th>
                            <th className="p-4">Status</th>
                            <th className="p-4 text-right">Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          {filteredBills.length > 0 ? filteredBills.map(bill => (
                            <tr key={bill.id} className="border-t border-gray-100">
                              <td className="p-4">
                                <div className="font-semibold text-[#2c3437]">{bill.patientName}</div>
                                <div className="text-xs text-[#596064]">{bill.description}</div>
                              </td>
                              <td className="p-4 text-sm text-[#596064]">{bill.invoiceId}</td>
                              <td className="p-4 text-sm text-[#596064]">{formatDateTime(bill.serviceDate)}</td>
                              <td className="p-4 text-sm font-semibold text-[#2c3437]">{currency(bill.amount)}</td>
                              <td className="p-4">{billBadge(bill.status)}</td>
                              <td className="p-4">
                                <div className="flex justify-end gap-2 flex-wrap">
                                  <Button variant="outline" size="sm" onClick={() => setSelectedBillId(bill.id)}><Eye className="w-4 h-4 mr-1" />View</Button>
                                  {bill.status !== 'paid' && <Button size="sm" className="bg-[#006d4c] hover:bg-[#005f42] text-white" onClick={() => handleMarkBillPaid(bill)}>Mark Paid</Button>}
                                </div>
                              </td>
                            </tr>
                          )) : <tr><td className="p-6 text-sm text-[#596064]" colSpan={6}>No invoice records found.</td></tr>}
                        </tbody>
                      </table>
                    </CardContent>
                  </Card>

                  <Card className="bg-white border-none shadow-sm">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg font-bold text-[#2c3437]">Create New Bill</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <form className="space-y-3" onSubmit={handleCreateBill}>
                        <Input placeholder="Patient name" value={billForm.patientName} onChange={e => setBillForm({ ...billForm, patientName: e.target.value })} />
                        <Input placeholder="Phone number" value={billForm.phoneNumber} onChange={e => setBillForm({ ...billForm, phoneNumber: e.target.value })} />
                        <Input placeholder="Amount" value={billForm.amount} onChange={e => setBillForm({ ...billForm, amount: e.target.value })} />
                        <Textarea placeholder="Description" value={billForm.description} onChange={e => setBillForm({ ...billForm, description: e.target.value })} />
                        <select className="h-11 w-full rounded-xl border border-gray-200 bg-white px-3 text-sm" value={billForm.status} onChange={e => setBillForm({ ...billForm, status: e.target.value as Bill['status'] })}>
                          <option value="unpaid">Unpaid</option>
                          <option value="paid">Paid</option>
                          <option value="pending">Pending</option>
                        </select>
                        <Button type="submit" className="w-full bg-[#006d4c] hover:bg-[#005f42] text-white">Save Invoice</Button>
                      </form>
                    </CardContent>
                  </Card>
                </div>

                <Card className="bg-white border-none shadow-sm">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg font-bold text-[#2c3437]">Invoice Preview</CardTitle>
                  </CardHeader>
                  <CardContent>
                    {selectedBill ? (
                      <div className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
                        <div className="space-y-2">
                          <div className="text-sm uppercase tracking-[0.2em] text-[#64748b] font-semibold">Invoice To</div>
                          <div className="text-2xl font-bold text-[#2c3437]">{selectedBill.patientName}</div>
                          <div className="text-sm text-[#596064]">{selectedBill.phoneNumber}</div>
                          <div className="text-sm text-[#596064]">Token #{selectedBill.tokenNumber}</div>
                          <div className="text-sm text-[#596064]">{selectedBill.description}</div>
                        </div>
                        <div className="rounded-2xl bg-[#f8f9fb] p-5 space-y-2">
                          <div className="flex justify-between text-sm"><span className="text-[#596064]">Invoice Number</span><span className="font-semibold text-[#2c3437]">{selectedBill.invoiceId}</span></div>
                          <div className="flex justify-between text-sm"><span className="text-[#596064]">Date of Issue</span><span className="font-semibold text-[#2c3437]">{formatDateTime(selectedBill.serviceDate)}</span></div>
                          <div className="flex justify-between text-sm"><span className="text-[#596064]">Total Amount</span><span className="font-extrabold text-[#006d4c]">{currency(selectedBill.amount)}</span></div>
                        </div>
                      </div>
                    ) : <div className="text-sm text-[#596064]">Select an invoice to preview it.</div>}
                  </CardContent>
                </Card>
              </div>
            )}

            {section === 'reports' && (
              <div className="grid gap-6 xl:grid-cols-[0.95fr_1.45fr]">
                <div className="space-y-6">
                  <Card className="bg-white border-none shadow-sm">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-xl font-bold text-[#2c3437]">Delivery Performance</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="rounded-2xl bg-[#f8f9fb] p-4 flex items-center justify-between">
                        <div>
                          <div className="font-semibold text-[#2c3437]">SMS Channel</div>
                          <div className="text-sm text-[#596064]">{Math.max(90, 98 - unreadNotifications.length)}% Success Rate</div>
                        </div>
                        <CheckCircle2 className="w-5 h-5 text-[#006d4c]" />
                      </div>
                      <div className="rounded-2xl bg-[#f8f9fb] p-4 flex items-center justify-between">
                        <div>
                          <div className="font-semibold text-[#2c3437]">WhatsApp</div>
                          <div className="text-sm text-[#596064]">Active and connected</div>
                        </div>
                        <CheckCircle2 className="w-5 h-5 text-[#006d4c]" />
                      </div>
                      <div className="rounded-2xl bg-[#f8f9fb] p-4 flex items-center justify-between">
                        <div>
                          <div className="font-semibold text-[#2c3437]">Email Relay</div>
                          <div className="text-sm text-[#596064]">2 alerts pending</div>
                        </div>
                        <Bell className="w-5 h-5 text-[#64748b]" />
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-white border-none shadow-sm">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-xl font-bold text-[#2c3437]">Active Toast Preview</CardTitle>
                    </CardHeader>
                    <CardContent>
                      {notifications[0] ? (
                        <div className="rounded-2xl border-l-4 border-[#006d4c] bg-[#f8f9fb] p-4">
                          <div className="font-semibold text-[#2c3437]">{notifications[0].title}</div>
                          <div className="text-sm text-[#596064] mt-1">{notifications[0].body}</div>
                        </div>
                      ) : <div className="text-sm text-[#596064]">No notification previews available.</div>}
                    </CardContent>
                  </Card>

                  <Card className="bg-[#fee2e2] border-none shadow-sm">
                    <CardContent className="p-5">
                      <div className="text-sm font-semibold text-[#a83836] uppercase tracking-wider">Urgent Alert</div>
                      <div className="font-bold text-[#2c3437] mt-2">Delay Alert</div>
                      <div className="text-sm text-[#596064] mt-1">OPD-2 is experiencing a short backlog. Automated patient updates have been sent.</div>
                    </CardContent>
                  </Card>
                </div>

                <Card className="bg-white border-none shadow-sm">
                  <div className="p-6 border-b border-gray-100 flex items-center justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-bold text-[#2c3437]">Notification Center</h3>
                      <p className="text-sm text-[#596064]">System-wide alerts and delivery updates stored in localStorage.</p>
                    </div>
                    <div className="flex gap-2 flex-wrap">
                      <Button variant="outline" onClick={markAllNotificationsRead}>Mark all read</Button>
                      <Button className="bg-[#006d4c] hover:bg-[#005f42] text-white">Alert Settings</Button>
                    </div>
                  </div>
                  <CardContent className="p-6 space-y-4">
                    {filteredNotifications.length > 0 ? filteredNotifications.map(notification => (
                      <div key={notification.id} className={`rounded-2xl border p-4 ${notification.read ? 'border-gray-200 bg-white' : 'border-[#cfe9d9] bg-[#f8fdf9]'}`}>
                        <div className="flex items-center justify-between gap-3 flex-wrap">
                          <div className="font-semibold text-[#2c3437]">{notification.title}</div>
                          {notificationBadge(notification.type)}
                        </div>
                        <div className="text-sm text-[#596064] mt-2">{notification.body}</div>
                        <div className="text-xs text-[#64748b] mt-2">{formatDateTime(notification.createdAt)}</div>
                      </div>
                    )) : <div className="text-sm text-[#596064]">No notifications found.</div>}
                  </CardContent>
                </Card>
              </div>
            )}

            {section === 'settings' && (
              <div className="grid gap-6 xl:grid-cols-3">
                <Card className="xl:col-span-2 bg-white border-none shadow-sm">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-2xl font-bold text-[#2c3437]">Clinic Settings</CardTitle>
                    <p className="text-sm text-[#596064]">Simple admin controls stored in localStorage.</p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="rounded-2xl bg-[#f8f9fb] p-4">
                        <div className="text-xs uppercase tracking-wider text-[#64748b] font-semibold">Clinic Open</div>
                        <div className="text-2xl font-bold text-[#2c3437] mt-2">{clinic.isOpen ? 'Yes' : 'No'}</div>
                      </div>
                      <div className="rounded-2xl bg-[#f8f9fb] p-4">
                        <div className="text-xs uppercase tracking-wider text-[#64748b] font-semibold">Estimated Wait</div>
                        <div className="text-2xl font-bold text-[#2c3437] mt-2">{clinic.estimatedWaitTime} min</div>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      <Button className="bg-[#006d4c] hover:bg-[#005f42] text-white" onClick={toggleClinicOpen}>{clinic.isOpen ? 'Close Clinic' : 'Open Clinic'}</Button>
                      <Button variant="outline" onClick={() => bumpWaitTime(5)}>Add 5 min</Button>
                      <Button variant="outline" onClick={() => bumpWaitTime(-5)}>Reduce 5 min</Button>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-[#006d4c] to-[#005f42] text-white border-none shadow-sm">
                  <CardContent className="p-6 space-y-4">
                    <div className="text-white/80 text-sm">Admin Controls</div>
                    <div className="text-2xl font-bold">Local-only mode</div>
                    <p className="text-white/80 text-sm">All screens save state to browser storage so the demo stays self-contained and easy to reset.</p>
                    <Button className="w-full bg-white/15 hover:bg-white/25 text-white border border-white/20" onClick={refreshData}>Reload from Storage</Button>
                  </CardContent>
                </Card>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}

function PauseIcon() {
  return <Clock className="w-4 h-4 mr-2" />;
}

function FilterIcon() {
  return <Activity className="w-4 h-4" />;
}

function DownloadIcon() {
  return <ClipboardList className="w-4 h-4" />;
}

export default AdminDashboard;
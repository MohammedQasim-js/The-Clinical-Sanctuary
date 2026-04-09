// localStorage service for clinic queue management system

export interface Clinic {
  id: string;
  name: string;
  type: string;
  location: string;
  address: string;
  isOpen: boolean;
  currentToken: number;
  tokensAvailable: number;
  estimatedWaitTime: number; // in minutes
  adminEmail?: string;
  adminPassword?: string;
}

export interface Bill {
  id: string;
  clinicId: string;
  patientName: string;
  phoneNumber: string;
  tokenNumber: number;
  invoiceId: string;
  serviceDate: string;
  amount: number;
  status: 'paid' | 'unpaid' | 'pending';
  description: string;
  createdAt: string;
  paidAt?: string;
}

export interface Notification {
  id: string;
  clinicId: string;
  title: string;
  body: string;
  type: 'info' | 'warning' | 'success' | 'billing' | 'token';
  read: boolean;
  createdAt: string;
}

export interface Patient {
  phoneNumber: string;
  name?: string;
  lastVisit?: string;
  internalId?: string;
}

export interface Token {
  id: string;
  tokenNumber: number;
  clinicId: string;
  phoneNumber: string;
  status: 'waiting' | 'notified' | 'arrived' | 'skipped' | 'completed';
  generatedAt: string;
  estimatedTime: string;
  expectedReportTime: string;
  symptoms?: string;
  reason?: string;
}

export interface Visit {
  id: string;
  tokenId: string;
  clinicId: string;
  phoneNumber: string;
  date: string;
  status: string;
}

// Initialize sample data
const SAMPLE_CLINICS: Clinic[] = [
  {
    id: '1',
    name: 'Mumbai Med Clinic',
    type: 'General Practice',
    location: 'Bandra West',
    address: '123 Hill Road, Bandra West, Mumbai',
    isOpen: true,
    currentToken: 15,
    tokensAvailable: 25,
    estimatedWaitTime: 45,
    adminEmail: 'admin@mumbaimed.com',
    adminPassword: 'admin123'
  },
  {
    id: '2',
    name: 'Coastal Care Center',
    type: 'Multi-Specialty',
    location: 'Juhu',
    address: '456 Beach Road, Juhu, Mumbai',
    isOpen: true,
    currentToken: 8,
    tokensAvailable: 15,
    estimatedWaitTime: 30,
    adminEmail: 'admin@coastal.com',
    adminPassword: 'admin123'
  },
  {
    id: '3',
    name: 'Health Core Clinic',
    type: 'Pediatrics',
    location: 'Andheri East',
    address: '789 Metro Lane, Andheri East, Mumbai',
    isOpen: true,
    currentToken: 22,
    tokensAvailable: 30,
    estimatedWaitTime: 60,
    adminEmail: 'admin@healthcore.com',
    adminPassword: 'admin123'
  },
  {
    id: '4',
    name: 'Unity Clinic',
    type: 'Dental Care',
    location: 'Powai',
    address: '321 Lake View, Powai, Mumbai',
    isOpen: false,
    currentToken: 0,
    tokensAvailable: 0,
    estimatedWaitTime: 0,
    adminEmail: 'admin@unity.com',
    adminPassword: 'admin123'
  },
  {
    id: '5',
    name: 'City Heart Medical',
    type: 'Cardiology',
    location: 'Lower Parel',
    address: '654 Central Avenue, Lower Parel, Mumbai',
    isOpen: true,
    currentToken: 12,
    tokensAvailable: 20,
    estimatedWaitTime: 50,
    adminEmail: 'admin@cityheart.com',
    adminPassword: 'admin123'
  },
  {
    id: '6',
    name: 'Wellness Point',
    type: 'General Practice',
    location: 'Goregaon',
    address: '987 Link Road, Goregaon West, Mumbai',
    isOpen: true,
    currentToken: 5,
    tokensAvailable: 18,
    estimatedWaitTime: 25,
    adminEmail: 'admin@wellness.com',
    adminPassword: 'admin123'
  }
];

const SAMPLE_BILLS: Bill[] = [
  {
    id: 'bill_1',
    clinicId: '1',
    patientName: 'Rajesh Kumar',
    phoneNumber: '9876543210',
    tokenNumber: 42,
    invoiceId: 'INV-2024-001',
    serviceDate: '2023-10-24T10:30:00.000Z',
    amount: 4500,
    status: 'paid',
    description: 'Specialist consultation and ECG',
    createdAt: '2023-10-24T10:30:00.000Z'
  },
  {
    id: 'bill_2',
    clinicId: '1',
    patientName: 'Anjali Singh',
    phoneNumber: '9876500011',
    tokenNumber: 108,
    invoiceId: 'INV-2024-002',
    serviceDate: '2023-10-24T14:15:00.000Z',
    amount: 1250,
    status: 'unpaid',
    description: 'Follow-up consultation',
    createdAt: '2023-10-24T14:15:00.000Z'
  },
  {
    id: 'bill_3',
    clinicId: '1',
    patientName: 'Vikram Mehta',
    phoneNumber: '9876500012',
    tokenNumber: 3,
    invoiceId: 'INV-2024-003',
    serviceDate: '2023-10-23T09:00:00.000Z',
    amount: 12800,
    status: 'paid',
    description: 'Diagnostic imaging package',
    createdAt: '2023-10-23T09:00:00.000Z'
  }
];

const SAMPLE_NOTIFICATIONS: Notification[] = [
  {
    id: 'notification_1',
    clinicId: '1',
    title: 'Token #42 issued',
    body: 'Rohan Deshmukh was added to the queue and is waiting for consultation.',
    type: 'token',
    read: false,
    createdAt: new Date().toISOString()
  },
  {
    id: 'notification_2',
    clinicId: '1',
    title: 'Billing ready',
    body: 'Invoice INV-2024-001 has been generated and marked as paid.',
    type: 'billing',
    read: true,
    createdAt: new Date().toISOString()
  },
  {
    id: 'notification_3',
    clinicId: '1',
    title: 'Delay alert',
    body: 'Queue A-40 is delayed by 15 minutes. Patients were notified automatically.',
    type: 'warning',
    read: false,
    createdAt: new Date().toISOString()
  }
];

class StorageService {
  private KEYS = {
    CLINICS: 'clinics',
    PATIENTS: 'patients',
    TOKENS: 'tokens',
    VISITS: 'visits',
    BILLS: 'bills',
    NOTIFICATIONS: 'notifications',
    CURRENT_USER: 'currentUser',
    INITIALIZED: 'initialized'
  };

  constructor() {
    this.initialize();
  }

  private initialize() {
    const isInitialized = localStorage.getItem(this.KEYS.INITIALIZED);
    
    if (!isInitialized) {
      localStorage.setItem(this.KEYS.CLINICS, JSON.stringify(SAMPLE_CLINICS));
      localStorage.setItem(this.KEYS.PATIENTS, JSON.stringify([]));
      localStorage.setItem(this.KEYS.TOKENS, JSON.stringify([]));
      localStorage.setItem(this.KEYS.VISITS, JSON.stringify([]));
      localStorage.setItem(this.KEYS.INITIALIZED, 'true');
    }
  }

  // Clinic methods
  getClinics(): Clinic[] {
    const data = localStorage.getItem(this.KEYS.CLINICS);
    return data ? JSON.parse(data) : [];
  }

  getClinic(id: string): Clinic | undefined {
    const clinics = this.getClinics();
    return clinics.find(c => c.id === id);
  }

  updateClinic(clinic: Clinic) {
    const clinics = this.getClinics();
    const index = clinics.findIndex(c => c.id === clinic.id);
    if (index !== -1) {
      clinics[index] = clinic;
      localStorage.setItem(this.KEYS.CLINICS, JSON.stringify(clinics));

      const currentUser = this.getCurrentUser();
      if (currentUser?.id === clinic.id) {
        localStorage.setItem(this.KEYS.CURRENT_USER, JSON.stringify(clinic));
      }
    }
  }

  // Patient methods
  getPatients(): Patient[] {
    const data = localStorage.getItem(this.KEYS.PATIENTS);
    return data ? JSON.parse(data) : [];
  }

  getPatient(phoneNumber: string): Patient | undefined {
    const patients = this.getPatients();
    return patients.find(p => p.phoneNumber === phoneNumber);
  }

  savePatient(patient: Patient) {
    const patients = this.getPatients();
    const index = patients.findIndex(p => p.phoneNumber === patient.phoneNumber);
    
    if (index !== -1) {
      patients[index] = patient;
    } else {
      patients.push(patient);
    }
    
    localStorage.setItem(this.KEYS.PATIENTS, JSON.stringify(patients));
  }

  // Token methods
  getTokens(): Token[] {
    const data = localStorage.getItem(this.KEYS.TOKENS);
    return data ? JSON.parse(data) : [];
  }

  getToken(id: string): Token | undefined {
    const tokens = this.getTokens();
    return tokens.find(t => t.id === id);
  }

  getTokensByClinic(clinicId: string): Token[] {
    const tokens = this.getTokens();
    return tokens
      .filter(t => t.clinicId === clinicId)
      .sort((a, b) => new Date(a.generatedAt).getTime() - new Date(b.generatedAt).getTime());
  }

  getTokenByPhoneAndClinic(phoneNumber: string, clinicId: string): Token | undefined {
    const tokens = this.getTokens();
    return tokens
      .filter(t => t.phoneNumber === phoneNumber && t.clinicId === clinicId)
      .sort((a, b) => new Date(b.generatedAt).getTime() - new Date(a.generatedAt).getTime())[0];
  }

  generateToken(clinicId: string, phoneNumber: string): Token {
    const clinic = this.getClinic(clinicId);
    if (!clinic) throw new Error('Clinic not found');

    const tokens = this.getTokensByClinic(clinicId);
    const highestToken = tokens.reduce((max, t) => Math.max(max, t.tokenNumber), clinic.currentToken);
    const newTokenNumber = highestToken + 1;

    const now = new Date();
    const estimatedMinutes = clinic.estimatedWaitTime + (tokens.filter(t => t.status === 'waiting' || t.status === 'notified').length * 10);
    const expectedReportTime = new Date(now.getTime() + estimatedMinutes * 60000);

    const token: Token = {
      id: `token_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      tokenNumber: newTokenNumber,
      clinicId,
      phoneNumber,
      status: 'waiting',
      generatedAt: now.toISOString(),
      estimatedTime: `${estimatedMinutes} mins`,
      expectedReportTime: expectedReportTime.toISOString()
    };

    const allTokens = this.getTokens();
    allTokens.push(token);
    localStorage.setItem(this.KEYS.TOKENS, JSON.stringify(allTokens));

    this.saveNotification({
      id: `notification_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
      clinicId,
      title: `Token #${newTokenNumber} issued`,
      body: `A new token was generated for ${phoneNumber}.`,
      type: 'token',
      read: false,
      createdAt: now.toISOString()
    });

    // Save patient if new
    if (!this.getPatient(phoneNumber)) {
      this.savePatient({ phoneNumber, lastVisit: now.toISOString() });
    }

    return token;
  }

  updateToken(token: Token) {
    const tokens = this.getTokens();
    const index = tokens.findIndex(t => t.id === token.id);
    if (index !== -1) {
      tokens[index] = token;
      localStorage.setItem(this.KEYS.TOKENS, JSON.stringify(tokens));
    }
  }

  updateTokenDetails(tokenId: string, symptoms: string, reason: string) {
    const token = this.getToken(tokenId);
    if (token) {
      token.symptoms = symptoms;
      token.reason = reason;
      this.updateToken(token);
    }
  }

  // Auth methods
  login(email: string, password: string): Clinic | null {
    const clinics = this.getClinics();
    const clinic = clinics.find(c => c.adminEmail === email && c.adminPassword === password);
    
    if (clinic) {
      localStorage.setItem(this.KEYS.CURRENT_USER, JSON.stringify(clinic));
      return clinic;
    }
    
    return null;
  }

  logout() {
    localStorage.removeItem(this.KEYS.CURRENT_USER);
  }

  getCurrentUser(): Clinic | null {
    const data = localStorage.getItem(this.KEYS.CURRENT_USER);
    return data ? JSON.parse(data) : null;
  }

  // Visit methods
  getVisits(): Visit[] {
    const data = localStorage.getItem(this.KEYS.VISITS);
    return data ? JSON.parse(data) : [];
  }

  saveVisit(visit: Visit) {
    const visits = this.getVisits();
    visits.push(visit);
    localStorage.setItem(this.KEYS.VISITS, JSON.stringify(visits));
  }

  getVisitsByClinic(clinicId: string): Visit[] {
    const visits = this.getVisits();
    return visits
      .filter(visit => visit.clinicId === clinicId)
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }

  getBills(): Bill[] {
    const data = localStorage.getItem(this.KEYS.BILLS);
    return data ? JSON.parse(data) : [];
  }

  getBillsByClinic(clinicId: string): Bill[] {
    const bills = this.getBills();
    return bills
      .filter(bill => bill.clinicId === clinicId)
      .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  }

  saveBill(bill: Bill) {
    const bills = this.getBills();
    const index = bills.findIndex(item => item.id === bill.id);

    if (index !== -1) {
      bills[index] = bill;
    } else {
      bills.unshift(bill);
    }

    localStorage.setItem(this.KEYS.BILLS, JSON.stringify(bills));
  }

  getNotifications(): Notification[] {
    const data = localStorage.getItem(this.KEYS.NOTIFICATIONS);
    return data ? JSON.parse(data) : [];
  }

  getNotificationsByClinic(clinicId: string): Notification[] {
    const notifications = this.getNotifications();
    return notifications
      .filter(notification => notification.clinicId === clinicId)
      .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  }

  saveNotification(notification: Notification) {
    const notifications = this.getNotifications();
    const index = notifications.findIndex(item => item.id === notification.id);

    if (index !== -1) {
      notifications[index] = notification;
    } else {
      notifications.unshift(notification);
    }

    localStorage.setItem(this.KEYS.NOTIFICATIONS, JSON.stringify(notifications));
  }

  markAllNotificationsRead(clinicId?: string) {
    const notifications = this.getNotifications().map(notification => {
      if (!clinicId || notification.clinicId === clinicId) {
        return { ...notification, read: true };
      }

      return notification;
    });

    localStorage.setItem(this.KEYS.NOTIFICATIONS, JSON.stringify(notifications));
  }
}

export const storage = new StorageService();

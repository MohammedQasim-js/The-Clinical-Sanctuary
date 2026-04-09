import { useState } from 'react';
import { useNavigate } from 'react-router';
import { storage } from '../services/storage';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { ArrowLeft, Lock, Mail, Building2 } from 'lucide-react';
import { toast } from 'sonner';

function AdminLogin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !password) {
      toast.error('Please enter both email and password');
      return;
    }

    setIsLoading(true);

    // Simulate login delay
    setTimeout(() => {
      const clinic = storage.login(email, password);
      
      if (clinic) {
        toast.success(`Welcome back, ${clinic.name}!`);
        navigate('/admin/dashboard');
      } else {
        toast.error('Invalid credentials. Please try again.');
      }
      
      setIsLoading(false);
    }, 800);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#006d4c] via-[#005f42] to-[#004d32] flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Back Button */}
        <button 
          onClick={() => navigate('/')}
          className="mb-6 p-2 -ml-2 hover:bg-white/10 rounded-lg text-white flex items-center gap-2"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back to Home</span>
        </button>

        {/* Login Card */}
        <Card className="shadow-2xl">
          <CardHeader className="text-center pb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-[#006d4c] to-[#005f42] rounded-full flex items-center justify-center mx-auto mb-4">
              <Building2 className="w-8 h-8 text-white" />
            </div>
            <CardTitle className="text-2xl font-bold text-[#2c3437]">
              Clinic Admin Login
            </CardTitle>
            <p className="text-sm text-[#596064] mt-2">
              Access your clinic dashboard
            </p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="text-sm font-medium text-[#596064] mb-2 block">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <Input
                    type="email"
                    placeholder="admin@clinic.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10 py-6"
                    autoComplete="email"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-[#596064] mb-2 block">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <Input
                    type="password"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-10 py-6"
                    autoComplete="current-password"
                  />
                </div>
              </div>

              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-[#006d4c] to-[#005f42] hover:from-[#005f42] hover:to-[#004d32] text-white py-6 text-base rounded-xl"
              >
                {isLoading ? 'Logging in...' : 'Login'}
              </Button>
            </form>

            {/* Demo Credentials */}
            <div className="mt-6 p-4 bg-blue-50 rounded-xl border border-blue-200">
              <p className="text-xs font-semibold text-blue-900 mb-2">Demo Credentials:</p>
              <div className="space-y-1 text-xs text-blue-800">
                <p><strong>Email:</strong> admin@mumbaimed.com</p>
                <p><strong>Password:</strong> admin123</p>
              </div>
              <p className="text-xs text-blue-700 mt-2">
                (All clinics use the same password for demo purposes)
              </p>
            </div>

            <div className="mt-4 text-center">
              <button 
                onClick={() => navigate('/clinics')}
                className="text-sm text-[#006d4c] hover:underline"
              >
                Looking to book a token? Click here
              </button>
            </div>
          </CardContent>
        </Card>

        {/* Additional Info */}
        <div className="mt-6 text-center text-white/80 text-sm">
          <p>© 2026 Clinical Sanctuary</p>
          <p className="mt-1">Secure clinic management platform</p>
        </div>
      </div>
    </div>
  );
}

export default AdminLogin;

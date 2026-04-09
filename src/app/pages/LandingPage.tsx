import { useNavigate } from 'react-router';
import { Button } from '../components/ui/button';
import imgClinicInterior from '../../assets/746707fb00195b2792ef041c01ea4ff049855634.png';
import imgHospitalExterior from '../../assets/946c18f2b04e702863fd63546b4ae39b6707f427.png';
import imgDashboardInterface from '../../assets/347c5a4e1147d79f3a1072172601aacb94347f88.png';
import { Activity, Clock, Users, Smartphone } from 'lucide-react';

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#e6ffef] via-[#f8f9fb] to-white">
      {/* Header */}
      <header className="px-4 md:px-8 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-[#006d4c] to-[#005f42] rounded-lg flex items-center justify-center">
            <Activity className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl md:text-2xl font-extrabold text-[#2c3437]">Clinical Sanctuary</span>
        </div>
        <Button 
          variant="ghost" 
          onClick={() => navigate('/admin/login')}
          className="text-sm"
        >
          Clinic Login
        </Button>
      </header>

      {/* Hero Section */}
      <section className="px-4 md:px-8 py-12 md:py-20 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-[#cfe9d9] px-4 py-2 rounded-full">
              <Activity className="w-4 h-4 text-[#40574b]" />
              <span className="text-xs font-semibold text-[#40574b] tracking-wide uppercase">
                Mumbai's Leading Clinic OS
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              <span className="text-[#2c3437]">Eradicate the</span>
              <br />
              <span className="text-[#006d4c]">Waiting Room</span>
              <br />
              <span className="text-[#2c3437]">Chaos.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-[#596064] leading-relaxed max-w-lg">
              The Clinical Sanctuary transforms Mumbai's crowded waiting areas into serene environments. 
              Intelligent token flows, real-time ETAs, and seamless clinic operations.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                onClick={() => navigate('/clinics')}
                className="bg-gradient-to-r from-[#006d4c] to-[#005f42] hover:from-[#005f42] hover:to-[#004d32] text-white px-8 py-6 text-base rounded-2xl shadow-lg"
              >
                Explore Clinics
              </Button>
              <Button 
                variant="outline"
                onClick={() => navigate('/status')}
                className="px-8 py-6 text-base rounded-2xl border-2"
              >
                Check Token Status
              </Button>
            </div>

            <div className="flex items-center gap-4 pt-6">
              <div className="flex -space-x-3">
                <div className="w-12 h-12 rounded-full border-4 border-white bg-[#006d4c] flex items-center justify-center text-white font-semibold">
                  <Users className="w-6 h-6" />
                </div>
              </div>
              <div className="text-sm">
                <span className="font-semibold text-[#006d4c]">500+</span>
                <span className="text-[#596064]"> Clinics in Mumbai Trust Us</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-[#006d4c]/10 to-[#2d676e]/10 rounded-3xl blur-3xl"></div>
            <div className="relative bg-white rounded-3xl shadow-2xl p-4 space-y-4">
              <div className="rounded-2xl overflow-hidden">
                <img 
                  src={imgDashboardInterface} 
                  alt="Dashboard Interface" 
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-2xl overflow-hidden">
                  <img 
                    src={imgClinicInterior} 
                    alt="Clinic Interior" 
                    className="w-full h-32 object-cover"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden">
                  <img 
                    src={imgHospitalExterior} 
                    alt="Hospital Exterior" 
                    className="w-full h-32 object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-4 md:px-8 py-16 bg-[#f0f4f7]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-extrabold text-[#2c3437] mb-4">
              The Sanctuary Flow
            </h2>
            <p className="text-lg text-[#596064] max-w-2xl mx-auto">
              A seamless orchestration of patient arrival, wait time, and clinical care designed to eliminate bottlenecks.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center space-y-4">
              <div className="w-20 h-20 bg-gradient-to-br from-[#006d4c] to-[#005f42] rounded-full flex items-center justify-center mx-auto">
                <Smartphone className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#2c3437]">Token Flow</h3>
              <p className="text-[#596064]">
                Patients book via WhatsApp or QR. Instant digital token assigned with no physical queue required.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg text-center space-y-4">
              <div className="w-20 h-20 bg-gradient-to-br from-[#2d676e] to-[#1f4a50] rounded-full flex items-center justify-center mx-auto">
                <Clock className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#2c3437]">Real-time ETA</h3>
              <p className="text-[#596064]">
                AI-driven wait time calculations. Patients arrive only when their turn is near, reducing clinic crowding.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg text-center space-y-4">
              <div className="w-20 h-20 bg-gradient-to-br from-[#006d4c] to-[#005f42] rounded-full flex items-center justify-center mx-auto">
                <Activity className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#2c3437]">Queue Control</h3>
              <p className="text-[#596064]">
                Clinic staff manage arrivals in real-time. Smart notifications and auto-skip for no-shows.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-4 md:px-8 py-8 text-center text-[#596064] text-sm border-t border-gray-200">
        <p>© 2026 Clinical Sanctuary. Empowering Mumbai's Healthcare Infrastructure.</p>
      </footer>
    </div>
  );
}

export default LandingPage;

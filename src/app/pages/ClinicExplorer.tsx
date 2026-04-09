import { useState, useMemo } from 'react';
import { useNavigate } from 'react-router';
import { storage } from '../services/storage';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Badge } from '../components/ui/badge';
import { Card, CardContent } from '../components/ui/card';
import { Search, MapPin, Clock, Users, ArrowLeft, Building2 } from 'lucide-react';

function ClinicExplorer() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const clinics = storage.getClinics();

  const filteredClinics = useMemo(() => {
    if (!searchQuery) return clinics;
    
    const query = searchQuery.toLowerCase();
    return clinics.filter(clinic => 
      clinic.name.toLowerCase().includes(query) ||
      clinic.location.toLowerCase().includes(query) ||
      clinic.type.toLowerCase().includes(query)
    );
  }, [searchQuery, clinics]);

  const registeredClinics = filteredClinics.filter(c => c.isOpen);
  const nearbyClinics = filteredClinics.slice(0, 3);

  return (
    <div className="min-h-screen bg-[#f8f9fb]">
      {/* Mobile-first Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="px-4 py-4">
          <div className="flex items-center justify-between mb-4">
            <button 
              onClick={() => navigate('/')}
              className="p-2 -ml-2 hover:bg-gray-100 rounded-lg"
            >
              <ArrowLeft className="w-5 h-5 text-[#2c3437]" />
            </button>
            <h1 className="text-lg font-bold text-[#2c3437]">Find Clinic</h1>
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => navigate('/admin/login')}
              className="text-sm"
            >
              Admin
            </Button>
          </div>
          
          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <Input
              type="text"
              placeholder="Search by name, location, or specialty..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-4 py-6 text-base rounded-xl"
            />
          </div>
        </div>
      </header>

      <div className="px-4 py-6 max-w-4xl mx-auto space-y-8">
        {/* Registered Clinics Section */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-[#2c3437]">Available Clinics</h2>
            <Badge variant="secondary" className="bg-[#cfe9d9] text-[#006d4c]">
              {registeredClinics.length} Open
            </Badge>
          </div>
          
          <div className="space-y-4">
            {registeredClinics.length === 0 ? (
              <Card>
                <CardContent className="p-8 text-center">
                  <Building2 className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                  <p className="text-gray-500">No clinics found matching your search</p>
                </CardContent>
              </Card>
            ) : (
              registeredClinics.map(clinic => (
                <Card 
                  key={clinic.id}
                  className="hover:shadow-lg transition-shadow cursor-pointer"
                  onClick={() => navigate(`/token/${clinic.id}`)}
                >
                  <CardContent className="p-5">
                    <div className="flex justify-between items-start mb-3">
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-[#2c3437] mb-1">
                          {clinic.name}
                        </h3>
                        <p className="text-sm text-[#596064]">{clinic.type}</p>
                      </div>
                      <Badge 
                        className={clinic.isOpen 
                          ? "bg-[#cfe9d9] text-[#006d4c] hover:bg-[#cfe9d9]" 
                          : "bg-gray-200 text-gray-600"
                        }
                      >
                        {clinic.isOpen ? 'Open' : 'Closed'}
                      </Badge>
                    </div>

                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2 text-sm text-[#596064]">
                        <MapPin className="w-4 h-4 text-[#006d4c]" />
                        <span>{clinic.location}</span>
                      </div>
                      
                      {clinic.isOpen && (
                        <>
                          <div className="flex items-center gap-2 text-sm text-[#596064]">
                            <Clock className="w-4 h-4 text-[#006d4c]" />
                            <span>Est. wait: {clinic.estimatedWaitTime} mins</span>
                          </div>
                          
                          <div className="flex items-center gap-2 text-sm text-[#596064]">
                            <Users className="w-4 h-4 text-[#006d4c]" />
                            <span>{clinic.tokensAvailable} tokens available</span>
                          </div>
                        </>
                      )}
                    </div>

                    {clinic.isOpen && (
                      <Button 
                        className="w-full bg-gradient-to-r from-[#006d4c] to-[#005f42] hover:from-[#005f42] hover:to-[#004d32] text-white rounded-xl"
                      >
                        Generate Token
                      </Button>
                    )}
                  </CardContent>
                </Card>
              ))
            )}
          </div>
        </section>

        {/* Nearby Clinics Section */}
        {nearbyClinics.length > 0 && searchQuery === '' && (
          <section>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-[#2c3437]">Nearby You</h2>
              <MapPin className="w-5 h-5 text-[#006d4c]" />
            </div>
            
            <div className="space-y-4">
              {nearbyClinics.map(clinic => (
                <Card 
                  key={clinic.id}
                  className="hover:shadow-lg transition-shadow cursor-pointer bg-gradient-to-br from-white to-[#f0f9f5]"
                  onClick={() => navigate(`/token/${clinic.id}`)}
                >
                  <CardContent className="p-5">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="text-lg font-bold text-[#2c3437] mb-1">
                          {clinic.name}
                        </h3>
                        <p className="text-sm text-[#596064]">{clinic.type}</p>
                      </div>
                      <Badge 
                        className={clinic.isOpen 
                          ? "bg-[#cfe9d9] text-[#006d4c] hover:bg-[#cfe9d9]" 
                          : "bg-gray-200 text-gray-600"
                        }
                      >
                        {clinic.isOpen ? 'Open' : 'Closed'}
                      </Badge>
                    </div>

                    <div className="flex items-center gap-2 text-sm text-[#596064] mb-3">
                      <MapPin className="w-4 h-4 text-[#006d4c]" />
                      <span>{clinic.location} • 2.3 km away</span>
                    </div>

                    {clinic.isOpen && (
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-[#596064]">
                          {clinic.estimatedWaitTime} mins wait
                        </span>
                        <span className="font-semibold text-[#006d4c]">
                          {clinic.tokensAvailable} slots
                        </span>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        )}
      </div>

      {/* Floating Action - Check Status */}
      <div className="fixed bottom-6 right-6">
        <Button
          onClick={() => navigate('/status')}
          className="rounded-full shadow-2xl bg-white text-[#006d4c] hover:bg-gray-50 px-6 py-6 border-2 border-[#006d4c]"
        >
          <Clock className="w-5 h-5 mr-2" />
          Check Status
        </Button>
      </div>
    </div>
  );
}

export default ClinicExplorer;

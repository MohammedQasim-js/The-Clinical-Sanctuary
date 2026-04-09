import { useState } from 'react';
import { useNavigate } from 'react-router';
import { storage } from '../services/storage';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { ArrowLeft, Search, Clock, AlertCircle, CheckCircle2, XCircle } from 'lucide-react';
import { toast } from 'sonner';

function PatientStatus() {
  const navigate = useNavigate();
  const [phoneNumber, setPhoneNumber] = useState('');
  const [selectedClinicId, setSelectedClinicId] = useState('');
  const [searchResult, setSearchResult] = useState<any>(null);

  const clinics = storage.getClinics();

  const handleSearch = () => {
    if (!phoneNumber || phoneNumber.length !== 10) {
      toast.error('Please enter a valid 10-digit phone number');
      return;
    }

    if (!selectedClinicId) {
      toast.error('Please select a clinic');
      return;
    }

    const token = storage.getTokenByPhoneAndClinic(phoneNumber, selectedClinicId);
    const clinic = storage.getClinic(selectedClinicId);

    if (!token) {
      toast.error('No token found for this phone number at the selected clinic');
      setSearchResult(null);
      return;
    }

    const clinicTokens = storage.getTokensByClinic(selectedClinicId);
    const waitingTokens = clinicTokens.filter(t => 
      t.tokenNumber < token.tokenNumber && 
      (t.status === 'waiting' || t.status === 'notified')
    );

    setSearchResult({
      token,
      clinic,
      position: waitingTokens.length + 1,
      tokensAhead: waitingTokens.length
    });

    toast.success('Token found!');
  };

  const getStatusInfo = (status: string) => {
    switch (status) {
      case 'waiting':
        return { 
          color: 'bg-yellow-100 text-yellow-800 border-yellow-300', 
          text: 'Waiting',
          icon: Clock,
          message: 'Please wait. You will be notified when your turn is near.'
        };
      case 'notified':
        return { 
          color: 'bg-blue-100 text-blue-800 border-blue-300', 
          text: 'Please Report Now',
          icon: AlertCircle,
          message: 'Your turn is approaching! Please head to the clinic now.'
        };
      case 'arrived':
        return { 
          color: 'bg-green-100 text-green-800 border-green-300', 
          text: 'Checked In',
          icon: CheckCircle2,
          message: 'You have checked in. The doctor will see you shortly.'
        };
      case 'skipped':
        return { 
          color: 'bg-red-100 text-red-800 border-red-300', 
          text: 'Missed',
          icon: XCircle,
          message: 'You missed your turn. Please generate a new token.'
        };
      case 'completed':
        return { 
          color: 'bg-gray-100 text-gray-800 border-gray-300', 
          text: 'Completed',
          icon: CheckCircle2,
          message: 'Your consultation is complete. Thank you for visiting!'
        };
      default:
        return { 
          color: 'bg-gray-100 text-gray-800 border-gray-300', 
          text: status,
          icon: Clock,
          message: ''
        };
    }
  };

  const formatTime = (isoString: string) => {
    const date = new Date(isoString);
    return date.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' });
  };

  const shouldReportNow = (token: any) => {
    return token.status === 'notified' || searchResult?.tokensAhead <= 2;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#e6ffef] via-[#f8f9fb] to-white pb-8">
      {/* Mobile-first Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="px-4 py-4 flex items-center justify-between">
          <button 
            onClick={() => navigate('/clinics')}
            className="p-2 -ml-2 hover:bg-gray-100 rounded-lg"
          >
            <ArrowLeft className="w-5 h-5 text-[#2c3437]" />
          </button>
          <h1 className="text-lg font-bold text-[#2c3437]">Check Status</h1>
          <div className="w-10"></div>
        </div>
      </header>

      <div className="px-4 py-6 max-w-2xl mx-auto space-y-6">
        {/* Search Card */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Search className="w-5 h-5 text-[#006d4c]" />
              Find Your Token
            </CardTitle>
            <p className="text-sm text-[#596064]">
              Enter your phone number and select the clinic
            </p>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="text-sm font-medium text-[#596064] mb-2 block">
                Phone Number
              </label>
              <Input
                type="tel"
                placeholder="9876543210"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value.replace(/\D/g, '').slice(0, 10))}
                maxLength={10}
                className="py-6 text-lg"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-[#596064] mb-2 block">
                Select Clinic
              </label>
              <Select value={selectedClinicId} onValueChange={setSelectedClinicId}>
                <SelectTrigger className="py-6">
                  <SelectValue placeholder="Choose a clinic..." />
                </SelectTrigger>
                <SelectContent>
                  {clinics.map(clinic => (
                    <SelectItem key={clinic.id} value={clinic.id}>
                      {clinic.name} - {clinic.location}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <Button
              onClick={handleSearch}
              disabled={!phoneNumber || !selectedClinicId}
              className="w-full bg-gradient-to-r from-[#006d4c] to-[#005f42] hover:from-[#005f42] hover:to-[#004d32] text-white py-6 text-base rounded-xl"
            >
              <Search className="w-5 h-5 mr-2" />
              Search Token
            </Button>
          </CardContent>
        </Card>

        {/* Search Results */}
        {searchResult && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            {/* Token Card */}
            <Card className={`border-2 ${getStatusInfo(searchResult.token.status).color.includes('blue') ? 'border-blue-300' : 'border-[#006d4c]'}`}>
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <div className="bg-gradient-to-br from-[#006d4c] to-[#005f42] rounded-2xl p-8 mb-4">
                    <p className="text-white/80 text-sm mb-2">Your Token</p>
                    <p className="text-6xl font-bold text-white mb-4">
                      #{searchResult.token.tokenNumber}
                    </p>
                    <Badge className={`${getStatusInfo(searchResult.token.status).color} px-4 py-2 text-base border-2`}>
                      {getStatusInfo(searchResult.token.status).text}
                    </Badge>
                  </div>

                  <div className={`flex items-start gap-3 p-4 rounded-xl border-2 ${getStatusInfo(searchResult.token.status).color}`}>
                    {(() => {
                      const StatusIcon = getStatusInfo(searchResult.token.status).icon;
                      return <StatusIcon className="w-5 h-5 mt-0.5 flex-shrink-0" />;
                    })()}
                    <p className="text-sm font-medium text-left">
                      {getStatusInfo(searchResult.token.status).message}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Clinic & Queue Info */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">{searchResult.clinic.name}</CardTitle>
                <p className="text-sm text-[#596064]">{searchResult.clinic.location}</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-[#f0f4f7] rounded-xl text-center">
                    <p className="text-sm text-[#596064] mb-1">Current Token</p>
                    <p className="text-3xl font-bold text-[#2c3437]">
                      #{searchResult.clinic.currentToken}
                    </p>
                  </div>
                  
                  <div className="p-4 bg-[#f0f4f7] rounded-xl text-center">
                    <p className="text-sm text-[#596064] mb-1">Your Position</p>
                    <p className="text-3xl font-bold text-[#006d4c]">
                      {searchResult.position}
                    </p>
                  </div>
                </div>

                {searchResult.tokensAhead > 0 && searchResult.token.status === 'waiting' && (
                  <div className="p-4 bg-yellow-50 rounded-xl border border-yellow-200">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-yellow-900 font-medium">
                          {searchResult.tokensAhead} token{searchResult.tokensAhead > 1 ? 's' : ''} ahead
                        </p>
                        <p className="text-xs text-yellow-700 mt-1">
                          Estimated wait: {searchResult.token.estimatedTime}
                        </p>
                      </div>
                      <Clock className="w-8 h-8 text-yellow-600" />
                    </div>
                  </div>
                )}

                <div className="p-4 bg-[#f0f4f7] rounded-xl">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-[#596064]">Expected Report Time</span>
                    <span className="text-lg font-bold text-[#2c3437]">
                      {formatTime(searchResult.token.expectedReportTime)}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-[#596064]">Generated At</span>
                    <span className="text-sm font-medium text-[#2c3437]">
                      {formatTime(searchResult.token.generatedAt)}
                    </span>
                  </div>
                </div>

                {/* Action Recommendation */}
                {shouldReportNow(searchResult.token) ? (
                  <div className="p-5 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl text-white text-center">
                    <AlertCircle className="w-12 h-12 mx-auto mb-3" />
                    <p className="text-lg font-bold mb-2">Time to Report!</p>
                    <p className="text-sm text-blue-100">
                      Please head to the clinic now. Your turn is very close.
                    </p>
                  </div>
                ) : searchResult.token.status === 'waiting' ? (
                  <div className="p-5 bg-gradient-to-r from-[#006d4c] to-[#005f42] rounded-xl text-white text-center">
                    <Clock className="w-12 h-12 mx-auto mb-3" />
                    <p className="text-lg font-bold mb-2">Please Wait</p>
                    <p className="text-sm text-green-100">
                      You'll be notified via SMS when it's almost your turn. No need to wait at the clinic.
                    </p>
                  </div>
                ) : null}
              </CardContent>
            </Card>

            {/* Additional Info */}
            {(searchResult.token.symptoms || searchResult.token.reason) && (
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Your Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {searchResult.token.symptoms && (
                    <div>
                      <p className="text-sm text-[#596064] mb-1">Symptoms</p>
                      <p className="text-base text-[#2c3437] font-medium">
                        {searchResult.token.symptoms}
                      </p>
                    </div>
                  )}
                  {searchResult.token.reason && (
                    <div>
                      <p className="text-sm text-[#596064] mb-1">Reason</p>
                      <p className="text-base text-[#2c3437] font-medium">
                        {searchResult.token.reason}
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            )}

            {/* Actions */}
            <div className="flex flex-col gap-3">
              <Button
                onClick={() => {
                  setSearchResult(null);
                  setPhoneNumber('');
                  setSelectedClinicId('');
                }}
                variant="outline"
                className="w-full py-6 text-base rounded-xl border-2"
              >
                Check Another Token
              </Button>
              
              <Button
                onClick={() => navigate('/clinics')}
                variant="ghost"
                className="w-full py-6 text-base rounded-xl"
              >
                Back to Clinics
              </Button>
            </div>
          </div>
        )}

        {/* Empty State */}
        {!searchResult && (
          <Card className="bg-gradient-to-br from-white to-[#f0f9f5] border-dashed">
            <CardContent className="p-12 text-center">
              <Search className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-[#2c3437] mb-2">
                No Token Searched Yet
              </h3>
              <p className="text-sm text-[#596064]">
                Enter your phone number and clinic to check your token status
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}

export default PatientStatus;

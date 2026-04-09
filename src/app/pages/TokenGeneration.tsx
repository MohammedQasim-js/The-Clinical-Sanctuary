import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router';
import { storage } from '../services/storage';
import type { Token } from '../services/storage';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { ArrowLeft, MapPin, Clock, CheckCircle2, AlertCircle, Smartphone } from 'lucide-react';
import { toast } from 'sonner';

function TokenGeneration() {
  const navigate = useNavigate();
  const { clinicId } = useParams();
  const [phoneNumber, setPhoneNumber] = useState('');
  const [symptoms, setSymptoms] = useState('');
  const [reason, setReason] = useState('');
  const [generatedToken, setGeneratedToken] = useState<Token | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [showOptionalFields, setShowOptionalFields] = useState(false);

  const clinic = clinicId ? storage.getClinic(clinicId) : null;

  useEffect(() => {
    if (!clinic) {
      toast.error('Clinic not found');
      navigate('/clinics');
    }
  }, [clinic, navigate]);

  if (!clinic) return null;

  const handleGenerateToken = () => {
    if (!phoneNumber || phoneNumber.length !== 10 || !/^\d+$/.test(phoneNumber)) {
      toast.error('Please enter a valid 10-digit phone number');
      return;
    }

    setIsGenerating(true);

    // Simulate generation delay
    setTimeout(() => {
      const token = storage.generateToken(clinic.id, phoneNumber);
      setGeneratedToken(token);
      setShowOptionalFields(true);
      setIsGenerating(false);
      toast.success('Token generated successfully!');
    }, 800);
  };

  const handleSaveDetails = () => {
    if (generatedToken && (symptoms || reason)) {
      storage.updateTokenDetails(generatedToken.id, symptoms, reason);
      toast.success('Details saved successfully!');
    }
  };

  const formatTime = (isoString: string) => {
    const date = new Date(isoString);
    return date.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' });
  };

  const getStatusInfo = (status: string) => {
    switch (status) {
      case 'waiting':
        return { color: 'bg-yellow-100 text-yellow-800', text: 'Waiting' };
      case 'notified':
        return { color: 'bg-blue-100 text-blue-800', text: 'Please Report' };
      case 'arrived':
        return { color: 'bg-green-100 text-green-800', text: 'Arrived' };
      case 'skipped':
        return { color: 'bg-red-100 text-red-800', text: 'Skipped' };
      case 'completed':
        return { color: 'bg-gray-100 text-gray-800', text: 'Completed' };
      default:
        return { color: 'bg-gray-100 text-gray-800', text: status };
    }
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
          <h1 className="text-lg font-bold text-[#2c3437]">Generate Token</h1>
          <div className="w-10"></div>
        </div>
      </header>

      <div className="px-4 py-6 max-w-2xl mx-auto space-y-6">
        {/* Clinic Details Card */}
        <Card className="bg-gradient-to-br from-[#006d4c] to-[#005f42] text-white border-none">
          <CardContent className="p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <h2 className="text-2xl font-bold mb-2">{clinic.name}</h2>
                <p className="text-white/90 text-sm">{clinic.type}</p>
              </div>
              <Badge className="bg-white/20 text-white hover:bg-white/30 backdrop-blur">
                {clinic.isOpen ? 'Open' : 'Closed'}
              </Badge>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-white/90">
                <MapPin className="w-4 h-4" />
                <span>{clinic.address}</span>
              </div>
              
              <div className="flex items-center gap-2 text-sm text-white/90">
                <Clock className="w-4 h-4" />
                <span>Estimated wait: {clinic.estimatedWaitTime} minutes</span>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-white/20">
              <div className="flex items-center justify-between text-sm">
                <span className="text-white/90">Current Token:</span>
                <span className="text-2xl font-bold">#{clinic.currentToken}</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Token Generation Form */}
        {!generatedToken ? (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Smartphone className="w-5 h-5 text-[#006d4c]" />
                Enter Your Phone Number
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-sm font-medium text-[#596064] mb-2 block">
                  Phone Number (10 digits)
                </label>
                <Input
                  type="tel"
                  placeholder="9876543210"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value.replace(/\D/g, '').slice(0, 10))}
                  maxLength={10}
                  className="text-lg py-6"
                />
                <p className="text-xs text-[#596064] mt-2">
                  This will be used to notify you when your turn approaches
                </p>
              </div>

              <Button
                onClick={handleGenerateToken}
                disabled={isGenerating || !phoneNumber}
                className="w-full bg-gradient-to-r from-[#006d4c] to-[#005f42] hover:from-[#005f42] hover:to-[#004d32] text-white py-6 text-base rounded-xl"
              >
                {isGenerating ? 'Generating...' : 'Generate Token'}
              </Button>

              <div className="flex items-start gap-2 p-4 bg-blue-50 rounded-lg">
                <AlertCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-blue-900">
                  You'll receive your token instantly. No need to wait at the clinic until notified.
                </p>
              </div>
            </CardContent>
          </Card>
        ) : (
          /* Token Display */
          <div className="space-y-6">
            <Card className="border-2 border-[#006d4c]">
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-[#cfe9d9] rounded-full mb-4">
                    <CheckCircle2 className="w-8 h-8 text-[#006d4c]" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#2c3437] mb-2">
                    Token Generated!
                  </h3>
                  <p className="text-[#596064]">Your token has been successfully created</p>
                </div>

                <div className="bg-gradient-to-br from-[#006d4c] to-[#005f42] rounded-2xl p-8 text-center mb-6">
                  <p className="text-white/80 text-sm mb-2">Your Token Number</p>
                  <p className="text-6xl font-bold text-white mb-4">
                    #{generatedToken.tokenNumber}
                  </p>
                  <Badge className={`${getStatusInfo(generatedToken.status).color} px-4 py-1`}>
                    {getStatusInfo(generatedToken.status).text}
                  </Badge>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-[#f0f4f7] rounded-xl">
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-[#006d4c]" />
                      <div>
                        <p className="text-sm text-[#596064]">Estimated Wait</p>
                        <p className="text-lg font-semibold text-[#2c3437]">
                          {generatedToken.estimatedTime}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-[#f0f4f7] rounded-xl">
                    <div className="flex items-center gap-3">
                      <AlertCircle className="w-5 h-5 text-[#006d4c]" />
                      <div>
                        <p className="text-sm text-[#596064]">Expected Report Time</p>
                        <p className="text-lg font-semibold text-[#2c3437]">
                          {formatTime(generatedToken.expectedReportTime)}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Optional Information */}
            {showOptionalFields && (
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Additional Information (Optional)</CardTitle>
                  <p className="text-sm text-[#596064]">
                    Help the doctor prepare for your visit
                  </p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-[#596064] mb-2 block">
                      Symptoms
                    </label>
                    <Input
                      type="text"
                      placeholder="E.g., Fever, Headache, Cough"
                      value={symptoms}
                      onChange={(e) => setSymptoms(e.target.value)}
                      className="py-6"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-[#596064] mb-2 block">
                      Reason for Consultation
                    </label>
                    <Textarea
                      placeholder="Describe your concerns..."
                      value={reason}
                      onChange={(e) => setReason(e.target.value)}
                      className="min-h-[100px]"
                    />
                  </div>

                  <Button
                    onClick={handleSaveDetails}
                    disabled={!symptoms && !reason}
                    className="w-full bg-[#006d4c] hover:bg-[#005f42] text-white py-6 rounded-xl"
                  >
                    Save Details
                  </Button>
                </CardContent>
              </Card>
            )}

            {/* Action Buttons */}
            <div className="flex flex-col gap-3">
              <Button
                onClick={() => navigate('/status')}
                variant="outline"
                className="w-full py-6 text-base rounded-xl border-2"
              >
                Check Token Status
              </Button>
              
              <Button
                onClick={() => navigate('/clinics')}
                variant="ghost"
                className="w-full py-6 text-base rounded-xl"
              >
                Back to Clinics
              </Button>
            </div>

            <div className="flex items-start gap-2 p-4 bg-green-50 rounded-lg">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
              <p className="text-sm text-green-900">
                We'll send you an SMS when it's almost your turn. No need to wait at the clinic!
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default TokenGeneration;

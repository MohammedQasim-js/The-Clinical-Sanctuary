import { useNavigate } from 'react-router';
import { Button } from '../components/ui/button';
import { Home } from 'lucide-react';

function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#e6ffef] via-[#f8f9fb] to-white flex items-center justify-center p-4">
      <div className="text-center">
        <h1 className="text-9xl font-extrabold text-[#006d4c] mb-4">404</h1>
        <h2 className="text-3xl font-bold text-[#2c3437] mb-4">Page Not Found</h2>
        <p className="text-[#596064] mb-8 max-w-md">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Button
          onClick={() => navigate('/')}
          className="bg-gradient-to-r from-[#006d4c] to-[#005f42] hover:from-[#005f42] hover:to-[#004d32] text-white px-8 py-6"
        >
          <Home className="w-5 h-5 mr-2" />
          Back to Home
        </Button>
      </div>
    </div>
  );
}

export default NotFound;

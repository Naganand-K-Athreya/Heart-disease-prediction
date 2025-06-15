
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { HeartPulse } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-blue-50 p-4">
      <div className="text-center max-w-md">
        <HeartPulse className="text-heart-DEFAULT mx-auto mb-4" size={64} />
        <h1 className="text-4xl font-bold text-medical-dark mb-4">404</h1>
        <p className="text-xl text-gray-700 mb-6">Oops! We couldn't find the page you're looking for.</p>
        <p className="text-gray-600 mb-8">
          The page might have been removed, renamed, or is temporarily unavailable.
        </p>
        <Button asChild className="font-medium">
          <Link to="/">Return to Homepage</Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;

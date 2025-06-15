
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { HeartPulseAnimation } from "@/components/ui/heart-pulse-animation";
import { useAuth } from "@/hooks/useAuth";
import { LogOut, LogIn } from "lucide-react";

export function Navbar() {
  const { isAuthenticated, logout } = useAuth();

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-100">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <HeartPulseAnimation size={32} className="text-medical-DEFAULT group-hover:scale-110 transition-transform" />
            <span className="font-bold text-xl text-medical-dark hover:text-medical-DEFAULT transition-colors">
              CardioPredict
            </span>
          </Link>
          
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-gray-700 hover:text-medical-DEFAULT font-medium transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-medical-DEFAULT font-medium transition-colors">
              About
            </Link>
            <Link to="/resources" className="text-gray-700 hover:text-medical-DEFAULT font-medium transition-colors">
              Resources
            </Link>
            {isAuthenticated ? (
              <>
                <Link to="/dataset" className="text-gray-700 hover:text-medical-DEFAULT font-medium transition-colors">
                  My Dataset
                </Link>
                <Button 
                  variant="outline" 
                  className="flex items-center gap-1" 
                  onClick={logout}
                >
                  <LogOut size={16} />
                  Logout
                </Button>
              </>
            ) : (
              <Link to="/login" className="flex items-center gap-1 text-gray-700 hover:text-medical-DEFAULT font-medium transition-colors">
                <LogIn size={16} />
                Login
              </Link>
            )}
            <Button asChild className="hover:scale-105 transition-transform">
              <Link to="/predict">
                Start Prediction
              </Link>
            </Button>
          </nav>
          
          <Button variant="outline" size="icon" className="md:hidden hover:bg-gray-50">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
          </Button>
        </div>
      </div>
    </header>
  );
}

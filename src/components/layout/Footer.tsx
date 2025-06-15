
import { Link } from "react-router-dom";
import { HeartPulse } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-50 border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-2">
              <HeartPulse className="text-heart-DEFAULT" size={24} />
              <span className="font-bold text-lg text-medical-dark">CardioPredict</span>
            </div>
            <p className="text-gray-600 max-w-md">
              An AI-powered tool for heart disease prediction using machine learning algorithms to help assess your risk factors.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-3 text-medical-dark">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-600 hover:text-medical-DEFAULT">Home</Link></li>
              <li><Link to="/about" className="text-gray-600 hover:text-medical-DEFAULT">About</Link></li>
              <li><Link to="/predict" className="text-gray-600 hover:text-medical-DEFAULT">Predict</Link></li>
              <li><Link to="/resources" className="text-gray-600 hover:text-medical-DEFAULT">Resources</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-3 text-medical-dark">Important</h3>
            <ul className="space-y-2">
              <li><Link to="#" className="text-gray-600 hover:text-medical-DEFAULT">Privacy Policy</Link></li>
              <li><Link to="#" className="text-gray-600 hover:text-medical-DEFAULT">Terms of Use</Link></li>
              <li><Link to="#" className="text-gray-600 hover:text-medical-DEFAULT">Medical Disclaimer</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-8 pt-6 text-center text-gray-500 text-sm">
          <p>© {currentYear} CardioPredict. This is a demonstration tool only and should not replace professional medical advice.</p>
        </div>
      </div>
    </footer>
  );
}

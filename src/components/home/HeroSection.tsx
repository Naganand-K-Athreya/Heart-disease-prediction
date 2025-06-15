
import { Button } from "@/components/ui/button";
import { HeartPulseAnimation } from "@/components/ui/heart-pulse-animation";
import { Link } from "react-router-dom";

export function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-blue-50 via-blue-100 to-indigo-50 py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 space-y-6 animate-fade-in">
            <div className="flex items-center gap-3 mb-2">
              <HeartPulseAnimation size={48} className="text-medical-DEFAULT" />
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-medical-dark via-medical-DEFAULT to-medical-dark bg-clip-text text-transparent">
                CardioPredict
              </h1>
            </div>
            <p className="text-2xl md:text-3xl font-medium text-gray-700 leading-relaxed">
              Heart Disease Prediction Using{" "}
              <span className="text-medical-DEFAULT">Advanced AI</span>
            </p>
            <p className="text-lg text-gray-600 max-w-lg leading-relaxed">
              Our AI-powered tool uses cutting-edge machine learning algorithms to assess your risk of heart disease based on health indicators and lifestyle factors.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                asChild 
                size="lg" 
                className="font-medium text-lg hover:scale-105 transition-transform"
              >
                <Link to="/predict">
                  Start Prediction
                </Link>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                size="lg" 
                className="font-medium text-lg hover:bg-white/50 transition-colors"
              >
                <Link to="/about">
                  Learn More
                </Link>
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center animate-fade-in animation-delay-200">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-medical-DEFAULT to-blue-600 rounded-lg blur opacity-30 group-hover:opacity-40 transition duration-1000"></div>
              <img 
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&h=600&q=80" 
                alt="Heart health visualization" 
                className="rounded-lg shadow-2xl hover:scale-[1.02] transition-transform duration-300 relative"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

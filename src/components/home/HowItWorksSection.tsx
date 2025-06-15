
import { FileText, Heart, Award } from "lucide-react";

const steps = [
  {
    icon: FileText,
    title: "Enter Your Information",
    description: "Fill out a simple form with your health metrics, medical history, and lifestyle factors."
  },
  {
    icon: Heart,
    title: "Get Your Prediction",
    description: "Our AI model analyzes your data and provides a personalized heart disease risk assessment."
  },
  {
    icon: Award,
    title: "Review Recommendations",
    description: "Receive personalized insights about your risk factors and suggestions for improvement."
  }
];

export function HowItWorksSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-medical-dark mb-4">
            How It Works
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our heart disease prediction tool is easy to use and provides valuable insights in just a few steps.
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-6 max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="flex-1 bg-white p-6 rounded-lg border border-gray-100 shadow-sm text-center">
              <div className="mx-auto bg-medical-light w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <step.icon className="text-medical-DEFAULT" size={28} />
              </div>
              <div className="bg-medical-DEFAULT text-white w-8 h-8 rounded-full flex items-center justify-center text-lg font-bold mx-auto -mt-12 mb-4 border-4 border-white">
                {index + 1}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

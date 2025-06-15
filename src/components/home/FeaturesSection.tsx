
import { Activity, BarChart3, Brain, HeartPulse, ShieldCheck, Users } from "lucide-react";

const features = [
  {
    icon: HeartPulse,
    title: "Risk Assessment",
    description: "Get an assessment of your heart disease risk based on your health metrics and lifestyle factors."
  },
  {
    icon: Brain,
    title: "ML Algorithm",
    description: "Our prediction uses advanced machine learning models trained on extensive medical datasets."
  },
  {
    icon: Activity,
    title: "Health Tracking",
    description: "Monitor changes in your risk factors over time to see how lifestyle changes affect your risk."
  },
  {
    icon: BarChart3,
    title: "Personalized Insights",
    description: "Receive detailed insights about which factors contribute most to your personal risk profile."
  },
  {
    icon: ShieldCheck,
    title: "Data Privacy",
    description: "Your health information is secure and never shared with third parties."
  },
  {
    icon: Users,
    title: "Expert Validated",
    description: "Our models are developed in collaboration with healthcare professionals."
  }
];

export function FeaturesSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-medical-dark mb-4">
            Key Features
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            CardioPredict offers a comprehensive suite of tools to help you understand and manage your heart health risk factors.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-medical-light w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <feature.icon className="text-medical-DEFAULT" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

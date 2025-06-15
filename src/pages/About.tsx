
import { PageContainer } from "@/components/layout/PageContainer";
import { Card, CardContent } from "@/components/ui/card";
import { Activity, Brain, Database, FileBarChart, HeartPulse, Info } from "lucide-react";

const About = () => {
  return (
    <PageContainer>
      <section className="bg-gradient-to-b from-blue-50 to-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-medical-dark mb-4">
              About CardioPredict
            </h1>
            <p className="text-lg text-gray-700 mb-6">
              Understanding how our heart disease prediction technology works
            </p>
          </div>
        </div>
      </section>
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-16">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start mb-4">
                  <Info className="text-medical-DEFAULT mt-1 mr-3 flex-shrink-0" />
                  <p className="text-gray-700 italic">
                    <strong>Disclaimer:</strong> CardioPredict is designed for educational purposes only and should not be used as a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
            <div>
              <div className="flex items-center mb-4">
                <HeartPulse className="text-heart-DEFAULT mr-2" size={28} />
                <h2 className="text-2xl font-bold text-medical-dark">Our Mission</h2>
              </div>
              <p className="text-gray-700 mb-4">
                CardioPredict was created with a simple mission: to make heart disease risk assessment more accessible, understandable, and actionable for everyone.
              </p>
              <p className="text-gray-700 mb-6">
                By leveraging the power of machine learning and artificial intelligence, we aim to provide users with insights about their heart health that they can discuss with their healthcare providers.
              </p>
              
              <div className="flex items-center mb-4">
                <Brain className="text-medical-DEFAULT mr-2" size={28} />
                <h2 className="text-2xl font-bold text-medical-dark">Machine Learning Model</h2>
              </div>
              <p className="text-gray-700 mb-4">
                Our prediction system uses a sophisticated machine learning algorithm trained on large datasets of patient information and outcomes.
              </p>
              <p className="text-gray-700">
                The model analyzes various risk factors including age, blood pressure, cholesterol levels, and lifestyle factors to predict the likelihood of heart disease.
              </p>
            </div>
            
            <div>
              <div className="flex items-center mb-4">
                <Database className="text-medical-DEFAULT mr-2" size={28} />
                <h2 className="text-2xl font-bold text-medical-dark">Training Data</h2>
              </div>
              <p className="text-gray-700 mb-4">
                Our model was trained using anonymized patient data that includes demographic information, medical history, laboratory results, and heart health outcomes.
              </p>
              <p className="text-gray-700 mb-6">
                This diverse dataset helps our algorithm recognize patterns and correlations between different risk factors and heart disease.
              </p>
              
              <div className="flex items-center mb-4">
                <FileBarChart className="text-medical-DEFAULT mr-2" size={28} />
                <h2 className="text-2xl font-bold text-medical-dark">Accuracy & Limitations</h2>
              </div>
              <p className="text-gray-700 mb-4">
                While our model achieves high accuracy in predicting heart disease risk based on known risk factors, it has several important limitations:
              </p>
              <ul className="list-disc pl-5 text-gray-700 space-y-2 mb-4">
                <li>It cannot account for all possible risk factors</li>
                <li>Individual genetic variations may affect personal risk</li>
                <li>The model provides statistical predictions, not certainties</li>
                <li>New medical research may change our understanding of risk factors</li>
              </ul>
              <p className="text-gray-700">
                For these reasons, CardioPredict should be used as an educational tool to complement, not replace, professional medical advice.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl font-bold text-medical-dark mb-8 text-center">
            The Technologies Behind CardioPredict
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <Activity className="text-medical-DEFAULT mb-4" size={32} />
              <h3 className="text-xl font-semibold mb-3">Machine Learning Algorithms</h3>
              <p className="text-gray-700">
                Our system uses several advanced algorithms including Random Forest, Gradient Boosting, and Neural Networks that are combined to provide the most accurate prediction possible.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <Database className="text-medical-DEFAULT mb-4" size={32} />
              <h3 className="text-xl font-semibold mb-3">Data Processing</h3>
              <p className="text-gray-700">
                We use sophisticated data normalization and feature engineering techniques to ensure the model handles diverse input data consistently and accurately.
              </p>
            </div>
          </div>
        </div>
      </section>
    </PageContainer>
  );
};

export default About;

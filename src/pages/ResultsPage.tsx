
import { useEffect, useState } from "react";
import { PageContainer } from "@/components/layout/PageContainer";
import { ResultsDisplay } from "@/components/results/ResultsDisplay";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const ResultsPage = () => {
  const navigate = useNavigate();
  const [result, setResult] = useState<any>(null);
  const [formData, setFormData] = useState<any>(null);
  
  useEffect(() => {
    // Retrieve the prediction result from session storage
    const storedResult = sessionStorage.getItem('predictionResult');
    const storedFormData = sessionStorage.getItem('formData');
    
    if (storedResult) {
      setResult(JSON.parse(storedResult));
    } else {
      // If there's no result, redirect to the prediction page
      navigate('/predict');
    }
    
    if (storedFormData) {
      setFormData(JSON.parse(storedFormData));
    }
  }, [navigate]);
  
  return (
    <PageContainer className="bg-gray-50 py-10">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h1 className="text-3xl font-bold text-medical-dark mb-4">
            Your Heart Health Results
          </h1>
          <p className="text-gray-600 mb-8">
            Review your personalized heart disease risk assessment below.
          </p>
        </div>
        
        {result ? (
          <>
            <ResultsDisplay result={result} formData={formData} />
            
            <div className="mt-10 text-center">
              <Button 
                variant="outline" 
                onClick={() => navigate('/predict')} 
                className="mr-4"
              >
                Retake Assessment
              </Button>
              <Button 
                onClick={() => navigate('/resources')}
              >
                Explore Heart Health Resources
              </Button>
            </div>
          </>
        ) : (
          <div className="text-center py-8">
            <p>Loading your results...</p>
          </div>
        )}
      </div>
    </PageContainer>
  );
};

export default ResultsPage;


import { PageContainer } from "@/components/layout/PageContainer";
import { PredictionForm } from "@/components/prediction/PredictionForm";

const PredictPage = () => {
  return (
    <PageContainer className="bg-gray-50 py-10">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto mb-10">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-3xl font-bold text-medical-dark">
              Heart Disease Risk Assessment
            </h1>
          </div>
          <p className="text-gray-600">
            Fill out the form below with your health information to receive a personalized heart disease risk assessment.
          </p>
        </div>
        
        <PredictionForm />
      </div>
    </PageContainer>
  );
}

export default PredictPage;

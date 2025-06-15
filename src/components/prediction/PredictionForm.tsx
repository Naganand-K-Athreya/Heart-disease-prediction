
import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { calculateHeartDiseaseRisk } from "@/lib/predictionModel";
import { FormHeader } from "./FormHeader";
import { BasicInfoFields } from "./BasicInfoFields";
import { CholesterolField } from "./CholesterolField";
import { BloodPressureFields } from "./BloodPressureFields";
import { BloodSugarField } from "./BloodSugarField";
import { HealthConditionsFields } from "./HealthConditionsFields";
import { FormSubmitButton } from "./FormSubmitButton";
import { useDataStorage, FormDataType } from "./useDataStorage";

interface PredictionFormProps {
  onPredictionComplete?: (result: any) => void;
}

// Threshold for automatically marking diabetes (126 mg/dL is the clinical threshold)
const DIABETES_THRESHOLD = 126;

export function PredictionForm({ onPredictionComplete }: PredictionFormProps) {
  const navigate = useNavigate();
  const { saveToDataset } = useDataStorage();
  const [formData, setFormData] = useState<FormDataType>({
    age: 45,
    sex: "male",
    cholesterol: 180,
    bloodPressure: {
      systolic: 120,
      diastolic: 80
    },
    bloodSugar: 100,
    smoker: false,
    diabetes: false,
    familyHistory: false
  });
  
  // Effect to auto-check diabetes when blood sugar exceeds threshold
  useEffect(() => {
    if (formData.bloodSugar >= DIABETES_THRESHOLD && !formData.diabetes) {
      setFormData(prev => ({
        ...prev,
        diabetes: true
      }));
    }
  }, [formData.bloodSugar]);
  
  const handleChange = (field: string, value: any) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };
  
  const handleBloodPressureChange = (type: 'systolic' | 'diastolic', value: number) => {
    setFormData(prev => ({
      ...prev,
      bloodPressure: {
        ...prev.bloodPressure,
        [type]: value
      }
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    if (e) {
      e.preventDefault();
    }
    
    const result = calculateHeartDiseaseRisk(formData);
    
    // Save the form data and result to the dataset
    saveToDataset(formData, result);
    
    if (onPredictionComplete) {
      onPredictionComplete(result);
    } else {
      // Store the result in sessionStorage and navigate to results page
      sessionStorage.setItem('predictionResult', JSON.stringify(result));
      sessionStorage.setItem('formData', JSON.stringify(formData));
      navigate('/results');
    }
  };
  
  return (
    <Card className="w-full max-w-2xl mx-auto">
      <FormHeader />
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <BasicInfoFields 
            age={formData.age} 
            sex={formData.sex}
            onAgeChange={(value) => handleChange('age', value)}
            onSexChange={(value) => handleChange('sex', value)}
          />
          
          <CholesterolField 
            cholesterol={formData.cholesterol}
            onCholesterolChange={(value) => handleChange('cholesterol', value)}
          />
          
          <BloodPressureFields
            systolic={formData.bloodPressure.systolic}
            diastolic={formData.bloodPressure.diastolic}
            onSystolicChange={(value) => handleBloodPressureChange('systolic', value)}
            onDiastolicChange={(value) => handleBloodPressureChange('diastolic', value)}
          />
          
          <BloodSugarField 
            bloodSugar={formData.bloodSugar}
            diabetesThreshold={DIABETES_THRESHOLD}
            onBloodSugarChange={(value) => handleChange('bloodSugar', value)}
          />
          
          <HealthConditionsFields 
            smoker={formData.smoker}
            diabetes={formData.diabetes}
            familyHistory={formData.familyHistory}
            onSmokerChange={(value) => handleChange('smoker', value)}
            onDiabetesChange={(value) => handleChange('diabetes', value)}
            onFamilyHistoryChange={(value) => handleChange('familyHistory', value)}
          />
          
          <FormSubmitButton onSubmit={handleSubmit} />
        </form>
      </CardContent>
    </Card>
  );
}


// Based on established cardiovascular risk algorithms (Framingham, ASCVD) 
// but simplified for demonstration purposes

interface PredictionInputs {
  age: number;
  sex: 'male' | 'female';
  cholesterol: number;  // Total cholesterol in mg/dL
  bloodPressure: {
    systolic: number;   // mm Hg
    diastolic: number;  // mm Hg
  };
  bloodSugar: number;   // Fasting blood sugar in mg/dL
  smoker: boolean;
  diabetes: boolean;
  familyHistory: boolean;
}

interface PredictionResult {
  probability: number;    // 0-1 probability of heart disease
  riskLevel: 'Low' | 'Moderate' | 'High';
  riskScore: number;      // 0-100 score
  keyFactors: string[];   // Key contributing factors
  recommendations: string[]; // Personalized recommendations
}

/**
 * Calculate heart disease risk based on medical inputs
 * Uses a simplified model based on established cardiovascular risk factors
 */
export function calculateHeartDiseaseRisk(inputs: PredictionInputs): PredictionResult {
  // Base score starts at 0
  let riskScore = 0;
  const factors: string[] = [];
  const recommendations: string[] = [];
  
  // Age factor - risk increases with age
  if (inputs.age < 40) {
    riskScore += 5;
  } else if (inputs.age < 50) {
    riskScore += 10;
  } else if (inputs.age < 60) {
    riskScore += 20;
    factors.push("Age (50-60)");
    recommendations.push("Regular cardiovascular check-ups recommended at your age");
  } else if (inputs.age < 70) {
    riskScore += 30;
    factors.push("Age (60-70)");
    recommendations.push("Regular cardiovascular check-ups essential at your age");
  } else {
    riskScore += 40;
    factors.push("Age (70+)");
    recommendations.push("Frequent cardiovascular monitoring recommended");
  }

  // Gender factor - men have statistically higher risk
  if (inputs.sex === "male") {
    riskScore += 10;
  }

  // Cholesterol factor
  if (inputs.cholesterol < 200) {
    // Optimal range
  } else if (inputs.cholesterol < 240) {
    riskScore += 15;
    recommendations.push("Consider dietary changes to lower cholesterol");
  } else {
    riskScore += 25;
    factors.push("High Cholesterol");
    recommendations.push("Consult with healthcare provider about cholesterol management");
  }

  // Blood Pressure factor
  if (inputs.bloodPressure.systolic >= 140 || inputs.bloodPressure.diastolic >= 90) {
    riskScore += 25;
    factors.push("High Blood Pressure");
    recommendations.push("Monitor blood pressure regularly and consult with your doctor");
  } else if (inputs.bloodPressure.systolic >= 130 || inputs.bloodPressure.diastolic >= 80) {
    riskScore += 15;
    recommendations.push("Keep monitoring your blood pressure regularly");
  }

  // Blood Sugar factor
  if (inputs.bloodSugar > 126) {
    riskScore += 15;
    factors.push("Elevated Blood Sugar");
    recommendations.push("Follow up with healthcare provider regarding blood sugar levels");
  } else if (inputs.bloodSugar > 100) {
    riskScore += 7;
    recommendations.push("Consider lifestyle changes to maintain healthy blood sugar levels");
  }

  // Smoking factor
  if (inputs.smoker) {
    riskScore += 20;
    factors.push("Smoking");
    recommendations.push("Quitting smoking would significantly reduce your heart disease risk");
  }

  // Diabetes factor
  if (inputs.diabetes) {
    riskScore += 25;
    factors.push("Diabetes");
    recommendations.push("Continue to manage diabetes carefully to reduce heart disease risk");
  }

  // Family History factor
  if (inputs.familyHistory) {
    riskScore += 15;
    factors.push("Family History");
    recommendations.push("Regular screenings are especially important given your family history");
  }

  // Calculate combination effects (some factors together increase risk more than the sum)
  if (inputs.diabetes && inputs.bloodPressure.systolic >= 140) {
    riskScore += 10; // Extra risk for combination of diabetes and hypertension
  }
  
  if (inputs.smoker && inputs.cholesterol >= 240) {
    riskScore += 10; // Extra risk for combination of smoking and high cholesterol
  }

  // Normalize to 0-100 scale and ensure it doesn't exceed bounds
  riskScore = Math.min(Math.max(riskScore, 0), 100);

  // Determine risk level based on score
  const riskLevel = riskScore < 30 ? 'Low' : riskScore < 60 ? 'Moderate' : 'High';

  // Add general recommendations based on risk level
  if (riskLevel === 'Low') {
    recommendations.push("Maintain your healthy lifestyle");
  } else if (riskLevel === 'Moderate') {
    recommendations.push("Consider a heart health check with your doctor");
  } else {
    recommendations.push("Schedule an appointment with a cardiologist");
  }

  // Return only unique recommendations
  const uniqueRecommendations = Array.from(new Set(recommendations));

  return {
    probability: riskScore / 100,
    riskLevel,
    riskScore,
    keyFactors: factors.slice(0, 3), // Return top 3 factors
    recommendations: uniqueRecommendations
  };
}

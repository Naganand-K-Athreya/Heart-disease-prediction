
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { HeartPulse, AlertTriangle, CheckCircle, Info, Lightbulb } from "lucide-react";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";

interface ResultsDisplayProps {
  result: {
    probability: number;
    riskLevel: string;
    riskScore: number;
    keyFactors: string[];
    recommendations?: string[];
  };
  formData?: any;
}

export function ResultsDisplay({ result, formData }: ResultsDisplayProps) {
  const riskColor = 
    result.riskLevel === "Low" 
      ? "text-green-500" 
      : result.riskLevel === "Moderate" 
        ? "text-amber-500" 
        : "text-red-500";
  
  const riskBgColor = 
    result.riskLevel === "Low" 
      ? "bg-green-500" 
      : result.riskLevel === "Moderate" 
        ? "bg-amber-500" 
        : "bg-red-500";
  
  const RiskIcon = 
    result.riskLevel === "Low" 
      ? CheckCircle 
      : result.riskLevel === "Moderate" 
        ? Info 
        : AlertTriangle;
        
  // Data for pie chart
  const pieData = [
    { name: 'Risk', value: result.riskScore },
    { name: 'Safe', value: 100 - result.riskScore }
  ];
  
  const COLORS = ['#EA384C', '#0EA5E9'];
  
  const renderMessage = () => {
    switch(result.riskLevel) {
      case "Low":
        return "Your risk factors suggest a low risk of heart disease. Continue maintaining your healthy lifestyle.";
      case "Moderate":
        return "You have some risk factors that suggest a moderate risk of heart disease. Consider discussing these with your healthcare provider.";
      case "High":
        return "Several risk factors indicate a higher risk of heart disease. We strongly recommend consulting with a healthcare professional soon.";
      default:
        return "Based on your inputs, here's your heart disease risk assessment.";
    }
  };
  
  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader className="text-center border-b pb-6">
        <div className="flex items-center justify-center mb-2">
          <HeartPulse size={32} className="text-heart-DEFAULT mr-2" />
          <CardTitle className="text-2xl">Your Heart Health Assessment</CardTitle>
        </div>
        <CardDescription>
          Based on the information you provided, here's your personalized risk assessment.
        </CardDescription>
      </CardHeader>
      
      <CardContent className="pt-6">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2">
            <div className="text-center mb-6">
              <h3 className="text-lg font-medium text-gray-700 mb-2">Risk Level</h3>
              <div className={`inline-flex items-center px-4 py-2 rounded-full ${riskBgColor} text-white`}>
                <RiskIcon size={18} className="mr-2" />
                {result.riskLevel} Risk
              </div>
            </div>
            
            <div className="mb-6">
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium">Risk Score</span>
                <span className={`text-sm font-bold ${riskColor}`}>{result.riskScore}%</span>
              </div>
              <Progress value={result.riskScore} className="h-2" />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>Low Risk</span>
                <span>Moderate</span>
                <span>High Risk</span>
              </div>
            </div>
            
            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-medium mb-2">Assessment Summary</h3>
              <p className="text-gray-700 text-sm">{renderMessage()}</p>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <h3 className="text-lg font-medium text-gray-700 mb-4 text-center">Risk Breakdown</h3>
            <div className="h-48">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
            
            <div className="mt-6">
              <h3 className="font-medium mb-2">Key Risk Factors</h3>
              <ul className="space-y-2">
                {result.keyFactors.length > 0 ? (
                  result.keyFactors.map((factor, index) => (
                    <li key={index} className="flex items-center">
                      <AlertTriangle size={16} className="text-amber-500 mr-2" />
                      <span className="text-gray-700">{factor}</span>
                    </li>
                  ))
                ) : (
                  <li className="text-gray-600 text-sm">No significant risk factors identified.</li>
                )}
              </ul>
            </div>
          </div>
        </div>
        
        {/* New section for personalized recommendations */}
        {result.recommendations && result.recommendations.length > 0 && (
          <div className="mt-8 pt-6 border-t">
            <h3 className="font-medium mb-4 flex items-center">
              <Lightbulb size={18} className="mr-2 text-amber-500" />
              Personalized Recommendations
            </h3>
            <ul className="space-y-2">
              {result.recommendations.map((recommendation, index) => (
                <li key={index} className="flex items-center bg-blue-50 p-3 rounded-lg">
                  <span className="text-sm text-gray-700">{recommendation}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
        
        <div className="mt-8 pt-6 border-t text-center">
          <p className="text-sm text-gray-500 mb-4">
            <strong>Important:</strong> This assessment is based on established cardiovascular risk factors but is for educational purposes only. 
            For proper medical advice, please consult a healthcare professional.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}

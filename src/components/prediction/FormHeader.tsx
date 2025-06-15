
import { CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export function FormHeader() {
  return (
    <CardHeader>
      <div className="flex justify-between items-center">
        <CardTitle className="text-2xl text-medical-dark">Heart Disease Risk Assessment</CardTitle>
      </div>
      <CardDescription>
        Fill out the form below with your health information to get a personalized risk assessment.
      </CardDescription>
    </CardHeader>
  );
}

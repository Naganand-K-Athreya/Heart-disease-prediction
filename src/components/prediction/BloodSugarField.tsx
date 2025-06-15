
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";

interface BloodSugarFieldProps {
  bloodSugar: number;
  diabetesThreshold: number;
  onBloodSugarChange: (value: number) => void;
}

export function BloodSugarField({ 
  bloodSugar, 
  diabetesThreshold, 
  onBloodSugarChange 
}: BloodSugarFieldProps) {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <Label htmlFor="bloodSugar">Fasting Blood Sugar (mg/dL)</Label>
        <span className="text-sm text-gray-500">{bloodSugar} mg/dL 
          {bloodSugar >= diabetesThreshold && 
           <span className="ml-2 text-red-500 font-medium">(Diabetes range)</span>}
        </span>
      </div>
      <Slider 
        id="bloodSugar"
        min={70} 
        max={200}
        step={1}
        value={[bloodSugar]}
        onValueChange={(values) => onBloodSugarChange(values[0])} 
      />
      <div className="flex justify-between text-xs text-gray-500">
        <span>70</span>
        <span>135</span>
        <span>200</span>
      </div>
    </div>
  );
}

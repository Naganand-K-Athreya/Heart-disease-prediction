
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface BloodPressureFieldsProps {
  systolic: number;
  diastolic: number;
  onSystolicChange: (value: number) => void;
  onDiastolicChange: (value: number) => void;
}

export function BloodPressureFields({ 
  systolic, 
  diastolic, 
  onSystolicChange, 
  onDiastolicChange 
}: BloodPressureFieldsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="space-y-2">
        <Label htmlFor="systolic">Systolic Blood Pressure (mmHg)</Label>
        <Input 
          id="systolic" 
          type="number" 
          value={systolic} 
          onChange={(e) => onSystolicChange(parseInt(e.target.value))}
          min={80}
          max={220}
          required
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="diastolic">Diastolic Blood Pressure (mmHg)</Label>
        <Input 
          id="diastolic" 
          type="number" 
          value={diastolic} 
          onChange={(e) => onDiastolicChange(parseInt(e.target.value))}
          min={40}
          max={140}
          required
        />
      </div>
    </div>
  );
}

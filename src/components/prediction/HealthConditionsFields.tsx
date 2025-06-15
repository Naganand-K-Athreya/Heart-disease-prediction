
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Info } from "lucide-react";

interface HealthConditionsFieldsProps {
  smoker: boolean;
  diabetes: boolean;
  familyHistory: boolean;
  onSmokerChange: (value: boolean) => void;
  onDiabetesChange: (value: boolean) => void;
  onFamilyHistoryChange: (value: boolean) => void;
}

export function HealthConditionsFields({
  smoker,
  diabetes,
  familyHistory,
  onSmokerChange,
  onDiabetesChange,
  onFamilyHistoryChange
}: HealthConditionsFieldsProps) {
  return (
    <div className="space-y-4">
      <h3 className="font-medium text-gray-700">Health Conditions</h3>
      
      <div className="flex items-center justify-between border-b pb-2">
        <div className="flex items-center space-x-2">
          <Label htmlFor="smoker">Smoker</Label>
          <Info size={16} className="text-gray-400" />
        </div>
        <Switch 
          id="smoker" 
          checked={smoker} 
          onCheckedChange={onSmokerChange} 
        />
      </div>
      
      <div className="flex items-center justify-between border-b pb-2">
        <div className="flex items-center space-x-2">
          <Label htmlFor="diabetes">Diabetes</Label>
          <Info size={16} className="text-gray-400" />
        </div>
        <Switch 
          id="diabetes" 
          checked={diabetes} 
          onCheckedChange={onDiabetesChange} 
        />
      </div>
      
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Label htmlFor="familyHistory">Family History of Heart Disease</Label>
          <Info size={16} className="text-gray-400" />
        </div>
        <Switch 
          id="familyHistory" 
          checked={familyHistory} 
          onCheckedChange={onFamilyHistoryChange} 
        />
      </div>
    </div>
  );
}

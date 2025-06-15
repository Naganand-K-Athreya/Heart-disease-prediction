
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";

interface CholesterolFieldProps {
  cholesterol: number;
  onCholesterolChange: (value: number) => void;
}

export function CholesterolField({ cholesterol, onCholesterolChange }: CholesterolFieldProps) {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <Label htmlFor="cholesterol">Total Cholesterol (mg/dL)</Label>
        <span className="text-sm text-gray-500">{cholesterol} mg/dL</span>
      </div>
      <Slider 
        id="cholesterol"
        min={100} 
        max={400}
        step={1}
        value={[cholesterol]}
        onValueChange={(values) => onCholesterolChange(values[0])} 
      />
      <div className="flex justify-between text-xs text-gray-500">
        <span>100</span>
        <span>250</span>
        <span>400</span>
      </div>
    </div>
  );
}

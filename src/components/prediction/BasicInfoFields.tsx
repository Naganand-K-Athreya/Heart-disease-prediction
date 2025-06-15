
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface BasicInfoFieldsProps {
  age: number;
  sex: 'male' | 'female';
  onAgeChange: (value: number) => void;
  onSexChange: (value: 'male' | 'female') => void;
}

export function BasicInfoFields({ age, sex, onAgeChange, onSexChange }: BasicInfoFieldsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="space-y-2">
        <Label htmlFor="age">Age</Label>
        <Input 
          id="age" 
          type="number" 
          value={age} 
          onChange={(e) => onAgeChange(parseInt(e.target.value))}
          min={18}
          max={100}
          required
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="sex">Sex</Label>
        <Select 
          value={sex} 
          onValueChange={(value: 'male' | 'female') => onSexChange(value)}
        >
          <SelectTrigger id="sex">
            <SelectValue placeholder="Select sex" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="male">Male</SelectItem>
            <SelectItem value="female">Female</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}

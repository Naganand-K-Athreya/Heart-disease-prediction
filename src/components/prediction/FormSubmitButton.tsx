
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { LineChart } from "lucide-react";

interface FormSubmitButtonProps {
  onSubmit: (e?: React.FormEvent) => void;
}

export function FormSubmitButton({ onSubmit }: FormSubmitButtonProps) {
  return (
    <div className="pt-4">
      <Button type="submit" className="w-full" onClick={(e) => {
        e.preventDefault();
        onSubmit();
      }}>
        Calculate Risk Assessment
      </Button>
      <div className="flex justify-between items-center mt-2">
        <p className="text-xs text-gray-500">
          This prediction is for educational purposes only.
        </p>
        <Link to="/dataset" className="flex items-center text-xs text-medical-DEFAULT hover:text-medical-dark">
          <LineChart className="h-3 w-3 mr-1" />
          View Dataset
        </Link>
      </div>
    </div>
  );
}

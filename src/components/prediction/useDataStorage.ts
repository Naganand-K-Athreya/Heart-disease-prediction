
import { useToast } from "@/hooks/use-toast";

export interface FormDataType {
  age: number;
  sex: 'male' | 'female';
  cholesterol: number;
  bloodPressure: {
    systolic: number;
    diastolic: number;
  };
  bloodSugar: number;
  smoker: boolean;
  diabetes: boolean;
  familyHistory: boolean;
}

export function useDataStorage() {
  const { toast } = useToast();
  
  const saveToDataset = (data: FormDataType, result: any) => {
    try {
      console.log("Attempting to save data:", data);
      console.log("Result to save:", result);
      
      // Get existing dataset or initialize an empty array
      const existingDataset = localStorage.getItem('healthDataset');
      const dataset = existingDataset ? JSON.parse(existingDataset) : [];
      
      console.log("Existing dataset:", dataset);
      
      // Add timestamp and username to the entry
      const currentUsername = localStorage.getItem('username');
      console.log("Current username:", currentUsername);
      
      const entry = {
        ...data,
        result,
        timestamp: new Date().toISOString(),
        username: currentUsername || 'guest'
      };
      
      console.log("New entry to add:", entry);
      
      // Add new entry to dataset
      dataset.push(entry);
      
      // Save updated dataset back to localStorage
      localStorage.setItem('healthDataset', JSON.stringify(dataset));
      
      console.log("Dataset saved successfully. New dataset length:", dataset.length);
      
      // Verify the save worked
      const savedData = localStorage.getItem('healthDataset');
      console.log("Verification - saved data:", savedData);
      
      // Notify user that data has been saved
      toast({
        title: "Data saved",
        description: "Your health data has been anonymously stored for analysis",
      });
      
    } catch (error) {
      console.error("Failed to save to dataset:", error);
      toast({
        title: "Error saving data",
        description: "Failed to save your health data. Please try again.",
        variant: "destructive",
      });
    }
  };

  return { saveToDataset };
}

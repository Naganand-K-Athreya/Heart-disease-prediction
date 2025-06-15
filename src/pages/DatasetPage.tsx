
import { useState, useEffect } from "react";
import { PageContainer } from "@/components/layout/PageContainer";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { format } from "date-fns";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/hooks/useAuth";

const DatasetPage = () => {
  const [dataset, setDataset] = useState<any[]>([]);
  const { toast } = useToast();
  const { username } = useAuth();

  useEffect(() => {
    console.log("DatasetPage mounted, loading dataset for user:", username);
    loadDataset();
  }, [username]);

  const loadDataset = () => {
    try {
      console.log("Loading dataset...");
      const storedData = localStorage.getItem('healthDataset');
      console.log("Raw stored data:", storedData);
      
      if (storedData) {
        const parsedData = JSON.parse(storedData);
        console.log("Parsed data:", parsedData);
        console.log("Current username for filtering:", username);
        
        // Filter data for current user
        const userDataset = parsedData.filter((item: any) => {
          console.log("Checking item username:", item.username, "against current user:", username);
          return item.username === username || !item.username;
        });
        
        console.log("Filtered user dataset:", userDataset);
        setDataset(userDataset);
      } else {
        console.log("No stored data found");
        setDataset([]);
      }
    } catch (error) {
      console.error("Failed to load dataset:", error);
      toast({
        title: "Error loading data",
        description: "Failed to load your health data.",
        variant: "destructive",
      });
    }
  };

  const clearDataset = () => {
    try {
      // Get existing dataset
      const existingDataset = localStorage.getItem('healthDataset');
      if (existingDataset) {
        const parsedData = JSON.parse(existingDataset);
        // Filter out current user's data
        const remainingData = parsedData.filter((item: any) => 
          item.username !== username && item.username
        );
        localStorage.setItem('healthDataset', JSON.stringify(remainingData));
      }
      setDataset([]);
      toast({
        title: "Dataset cleared",
        description: "All your stored health data has been removed",
      });
    } catch (error) {
      console.error("Failed to clear dataset:", error);
    }
  };

  const formatTimestamp = (timestamp: string) => {
    try {
      return format(new Date(timestamp), "MMM d, yyyy h:mm a");
    } catch (e) {
      return "Invalid date";
    }
  };

  const formatRiskResult = (result: any) => {
    if (!result) return "N/A";
    
    if (typeof result === 'object') {
      if (result.riskLevel && result.riskScore !== undefined) {
        return `${result.riskScore}% (${result.riskLevel})`;
      }
      if (result.riskPercentage) {
        return `${result.riskPercentage}% (${result.riskLevel || 'Unknown'})`;
      }
      return JSON.stringify(result);
    }
    
    return result.toString();
  };

  console.log("Rendering DatasetPage with dataset:", dataset);

  return (
    <PageContainer className="bg-gray-50 py-10">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle className="text-2xl text-medical-dark">My Health Dataset</CardTitle>
                <p className="text-gray-500 mt-1">Welcome back, {username || 'User'}</p>
                <p className="text-sm text-gray-400 mt-1">Dataset entries: {dataset.length}</p>
              </div>
              <div className="flex gap-2">
                <Button 
                  variant="outline" 
                  onClick={loadDataset}
                >
                  Refresh
                </Button>
                <Button 
                  variant="destructive" 
                  onClick={clearDataset}
                  disabled={dataset.length === 0}
                >
                  Clear Dataset
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              {dataset.length === 0 ? (
                <div className="text-center py-8 text-gray-500">
                  <p>No health data available.</p>
                  <p className="mt-2">Complete the risk assessment form to add data.</p>
                  <Button 
                    variant="outline" 
                    className="mt-4"
                    onClick={loadDataset}
                  >
                    Check Again
                  </Button>
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Date</TableHead>
                        <TableHead>Age</TableHead>
                        <TableHead>Sex</TableHead>
                        <TableHead>Cholesterol</TableHead>
                        <TableHead>Blood Pressure</TableHead>
                        <TableHead>Blood Sugar</TableHead>
                        <TableHead>Health Conditions</TableHead>
                        <TableHead>Risk Result</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {dataset.map((entry, index) => (
                        <TableRow key={index}>
                          <TableCell>{formatTimestamp(entry.timestamp)}</TableCell>
                          <TableCell>{entry.age}</TableCell>
                          <TableCell className="capitalize">{entry.sex}</TableCell>
                          <TableCell>{entry.cholesterol} mg/dL</TableCell>
                          <TableCell>{entry.bloodPressure.systolic}/{entry.bloodPressure.diastolic}</TableCell>
                          <TableCell>{entry.bloodSugar} mg/dL</TableCell>
                          <TableCell>
                            {[
                              entry.smoker ? "Smoker" : null,
                              entry.diabetes ? "Diabetes" : null,
                              entry.familyHistory ? "Family History" : null
                            ]
                              .filter(Boolean)
                              .join(", ") || "None"}
                          </TableCell>
                          <TableCell className="font-medium">
                            {formatRiskResult(entry.result)}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </PageContainer>
  );
};

export default DatasetPage;

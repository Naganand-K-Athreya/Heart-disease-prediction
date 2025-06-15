
import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LoginForm } from "@/components/auth/LoginForm";
import { RegisterForm } from "@/components/auth/RegisterForm";
import { useAuth } from "@/hooks/useAuth";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const LoginPage = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from || "/";
  const [activeTab, setActiveTab] = useState<string>("login");

  useEffect(() => {
    // If already authenticated, redirect to home or intended destination
    if (isAuthenticated) {
      navigate(from, { replace: true });
    }
  }, [isAuthenticated, navigate, from]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-blue-50/30 p-4">
      <div className="max-w-md w-full">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-medical-dark">CardioPredict</h1>
          <p className="text-gray-600 mt-2">AI-powered heart health assessment</p>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle className="text-center">Welcome to CardioPredict</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="login" value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="grid grid-cols-2 mb-4">
                <TabsTrigger value="login">Login</TabsTrigger>
                <TabsTrigger value="register">Register</TabsTrigger>
              </TabsList>
              
              <TabsContent value="login">
                <p className="text-center text-gray-600 mb-4">
                  Please login to access your personal health dashboard and assessment tools.
                </p>
                <LoginForm />
              </TabsContent>
              
              <TabsContent value="register">
                <p className="text-center text-gray-600 mb-4">
                  Create an account to start tracking your heart health predictions.
                </p>
                <RegisterForm />
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default LoginPage;

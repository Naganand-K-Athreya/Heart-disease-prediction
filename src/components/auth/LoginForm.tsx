
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Lock, User } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";

export function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const { toast } = useToast();
  const { login } = useAuth();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    const loginSuccess = login(username, password);
    
    if (loginSuccess) {
      // Get the intended destination from location state, or default to home page
      const from = location.state?.from || "/";
      
      // Redirect to the intended destination
      navigate(from, { replace: true });
      
      toast({
        title: "Login successful",
        description: `Welcome back, ${username}!`,
      });
    } else {
      toast({
        title: "Login failed",
        description: "Invalid username or password.",
        variant: "destructive",
      });
    }
  };

  return (
    <form onSubmit={handleLogin} className="space-y-6 max-w-md w-full mx-auto">
      <div className="space-y-2">
        <Label htmlFor="username">Username</Label>
        <div className="relative">
          <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
          <Input 
            id="username" 
            placeholder="Enter your username" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)}
            className="pl-10"
            required
          />
        </div>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="password">Password</Label>
        <div className="relative">
          <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
          <Input 
            id="password" 
            type="password" 
            placeholder="Enter your password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)}
            className="pl-10"
            required
          />
        </div>
      </div>
      
      <Button type="submit" className="w-full">
        Login
      </Button>
      
      <div className="text-center text-sm text-gray-500">
        <p>Demo credentials:</p>
        <p>Username: admin</p>
        <p>Password: password123</p>
      </div>
    </form>
  );
}

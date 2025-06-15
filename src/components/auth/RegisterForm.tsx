
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { AtSign, Lock, User } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";

export function RegisterForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { toast } = useToast();
  const { register } = useAuth();

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (password !== confirmPassword) {
      toast({
        title: "Password mismatch",
        description: "Passwords do not match. Please try again.",
        variant: "destructive",
      });
      return;
    }

    const registerSuccess = register(username, password);
    
    if (registerSuccess) {
      toast({
        title: "Registration successful",
        description: `Welcome, ${username}! You can now log in.`,
      });
    } else {
      toast({
        title: "Registration failed",
        description: "Username already exists or is invalid.",
        variant: "destructive",
      });
    }
  };

  return (
    <form onSubmit={handleRegister} className="space-y-6 max-w-md w-full mx-auto">
      <div className="space-y-2">
        <Label htmlFor="register-username">Username</Label>
        <div className="relative">
          <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
          <Input 
            id="register-username" 
            placeholder="Choose a username" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)}
            className="pl-10"
            required
          />
        </div>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="register-password">Password</Label>
        <div className="relative">
          <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
          <Input 
            id="register-password" 
            type="password" 
            placeholder="Choose a password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)}
            className="pl-10"
            required
            minLength={6}
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="confirm-password">Confirm Password</Label>
        <div className="relative">
          <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
          <Input 
            id="confirm-password" 
            type="password" 
            placeholder="Confirm your password" 
            value={confirmPassword} 
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="pl-10"
            required
            minLength={6}
          />
        </div>
      </div>
      
      <Button type="submit" className="w-full">
        Register
      </Button>
    </form>
  );
}

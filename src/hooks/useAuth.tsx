
import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [username, setUsername] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Check if user is authenticated
    const authStatus = localStorage.getItem('isAuthenticated');
    const storedUsername = localStorage.getItem('username');
    
    setIsAuthenticated(authStatus === 'true');
    setUsername(storedUsername);
    setIsLoading(false);
    
    // If not authenticated and not on login page, redirect to login
    if (authStatus !== 'true' && location.pathname !== '/login') {
      navigate('/login', { state: { from: location.pathname } });
    }
  }, [navigate, location.pathname]);

  const login = (username: string, password: string): boolean => {
    // Check if user exists in localStorage
    const users = JSON.parse(localStorage.getItem('users') || '{}');
    
    // If the default admin user is trying to login, or a registered user with correct password
    if ((username === "admin" && password === "password123") || 
        (users[username] && users[username] === password)) {
      localStorage.setItem('isAuthenticated', 'true');
      localStorage.setItem('username', username);
      setIsAuthenticated(true);
      setUsername(username);
      return true;
    }
    return false;
  };

  const register = (username: string, password: string): boolean => {
    // Get existing users or initialize empty object
    const users = JSON.parse(localStorage.getItem('users') || '{}');
    
    // Check if username already exists
    if (users[username] || username === "admin") {
      return false;
    }
    
    // Add new user
    users[username] = password;
    localStorage.setItem('users', JSON.stringify(users));
    return true;
  };

  const logout = () => {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('username');
    setIsAuthenticated(false);
    setUsername(null);
    navigate('/login');
  };

  return { isAuthenticated, username, isLoading, login, logout, register };
}

// src/contexts/AuthContext.js
import { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({ username: null });

    const login = async (username, password) => {
        try {
            const response = await fetch('https://api-demo-4gqb.onrender.com/users/login', {
                method: 'POST',  // Changed to POST
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),  // Send login details in body
            });
            
            const data = await response.json();
            
            if (response.ok) {
                setUser(data);  // Save user data on successful login
                return true;    // Login successful
            } 
            return false;       // Login failed (bad credentials)
        } catch (error) {
            console.error('Login failed', error);  // Handle errors
            return false;
        }
    };

    const logout = () => setUser({ username: null });

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

// Custom hook to use the AuthContext
export const useAuth = () => useContext(AuthContext);

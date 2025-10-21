import { createContext, useState, useContext } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(() => {
        const savedUser = localStorage.getItem("loggedUser");
        return savedUser ? JSON.parse(savedUser) : null;
    });

    const login = (username, password) => {
        // Get users from localStorage (or empty array)
        const storedUsers = JSON.parse(localStorage.getItem("users")) || [];

        // Include mock users as fallback
        const allUsers = [
            { username: "admin", password: "1234", name: "Admin User" },
            { username: "user", password: "abcd", name: "Regular User" },
            ...storedUsers,
        ];

        const foundUser = allUsers.find(
            (u) => u.username === username && u.password === password
        );

        if (foundUser) {
            setUser(foundUser);
            localStorage.setItem("loggedUser", JSON.stringify(foundUser));
            return true;
        }

        return false;
    };


    const logout = () => {
        setUser(null);
        localStorage.removeItem("loggedUser");
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);

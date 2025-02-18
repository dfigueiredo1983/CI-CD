import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(localStorage.getItem("token") || "");

    // Efeito para verificar o token no localStorage quando o componente for carregado
    useEffect(() => {
        if (token) {
            fetchUserProfile();
        }
    }, [token]);

    const fetchUserProfile = async () => {
        try {
            const storedToken = localStorage.getItem("token");
            if (!storedToken) {
                return; // Se não houver token, sai sem fazer nada
            }

            console.log("Token salvo no localStorage:", storedToken);

            const response = await fetch("http://localhost:8000/login/profile/", {
                method: "GET",
                headers: {
                    "Authorization": `Bearer ${storedToken}`,
                    "Content-Type": "application/json",
                },
            });

            console.log("Response: ", response);
            console.log("Status da resposta:", response.status);

            if (response.ok) {
                const data = await response.json();
                console.log('Dados recebidos: ', data);
                setUser(data);
            } else {
                console.error('Erro na requisição, código HTTP: ', response.status);
                logout();
            }
        } catch (error) {
            console.error("Erro ao buscar perfil:", error);
        }
    };

    const login = async (username, password) => {
        console.log('Tentando logar com: ', username, password);

        const response = await fetch("http://localhost:8000/login/token/", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, password }),
        });

        if (response.ok) {
            const data = await response.json();
            console.log('Login bem-sucedido!');

            setToken(data.access);
            localStorage.setItem("token", data.access);
            fetchUserProfile();  // Agora chama novamente para buscar o perfil
        } else {
            console.error('Erro no login: ', await response.text());
            throw new Error("Login falhou!");
        }
    };

    const logout = () => {
        setUser(null);
        setToken("");
        localStorage.removeItem("token");
    };

    return (
        <AuthContext.Provider value={{ user, token, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

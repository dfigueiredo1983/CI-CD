import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Produtos = () => {
    const { token, logout } = useContext(AuthContext);
    const [produtos, setProdutos] = useState([]);
    const [query, setQuery] = useState("");

    useEffect(() => {
        fetchProdutos();
    }, []);

    const fetchProdutos = async () => {
        try {
            const response = await fetch(`http://localhost:8000/api/produtos/?search=${query}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            if (response.ok) {
                const data = await response.json();
                setProdutos(data);
            } else {
                logout();
            }
        } catch (error) {
            console.error("Erro ao buscar produtos:", error);
        }
    };

    return (
        <div>
            <h2>Lista de Produtos</h2>
            <input
                type="text"
                placeholder="Pesquisar produto..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <button onClick={fetchProdutos}>Buscar</button>

            <ul>
                {produtos.map((produto) => (
                    <li key={produto.id}>{produto.nome} - R$ {produto.preco}</li>
                ))}
            </ul>

            <button onClick={logout}>Sair</button>
        </div>
    );
};

export default Produtos;

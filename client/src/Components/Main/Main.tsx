import React, { useState } from "react";
import "./Main.css";

interface TokenFormData {
    name: string;
    symbol: string;
    supply: string;
}

const Main: React.FC = () => {
    const [formData, setFormData] = useState<TokenFormData>({
        name: "",
        symbol: "",
        supply: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Form submited with :",formData);
        // Add convertion and other logic here
    };
    return (
        <main>
            <h1>Create GRC20 Token</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                </label>
                <label>
                    Symbol:
                    <input type="text" name="symbol" value={formData.symbol} onChange={handleChange} required />
                </label>
                <label>
                    Supply:
                    <input type="number" name="supply" value={formData.supply} onChange={handleChange} required />
                </label>
                <button type="submit">Create Token</button>
            </form>
        </main>
    );
};

export default Main;
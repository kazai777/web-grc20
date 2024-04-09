import React from 'react';
import './Header.css';

declare global {
    interface Window {
        adena?: {
            AddEstablish: (name: string) => Promise <{
                code: number;
                status: string;
                type: string;
                message: string;
                data: object;
            }>;
        };
    }
}

const Header: React.FC = () => {
    const connectAdena = async () => {
        // Check if the Adena object is available
        if (!window.adena) {
            window.open('https://adena.app/', '_blank');
        } else {
            try {
                const response = await window.adena.AddEstablish('Web GRC20');
                console.log(response);
                alert("Successfully connected to Adena");
            } catch (error) {
                console.error("Connexion error :", error);
                alert("Failed to connect to Adena, try again later");
            }
        }
    };

    return (
        <header>
            <button className="buttonConnect" onClick={connectAdena}>Connect to Adena</button>
        </header>
    );
};

export default Header;
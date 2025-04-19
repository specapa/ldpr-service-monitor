import React from 'react';

interface ButtonProps {
    label: string;
    onClick: () => void;
}

const ButtonMoreServ: React.FC<ButtonProps> = ({ label, onClick }) => {
    return (
        <button
            onClick={onClick}
            className="border-2 border-background text-background font-bold px-8 py-3 rounded-full hover:bg-ldpr-blue hover:text-foreground transition"
        >
            {label}
            <i className="fas fa-arrow-right ml-2"></i>
        </button>
    );
};

export default ButtonMoreServ;
import React from 'react';
import Image from 'next/image';

interface CardProps {
  iconPath: string; // Путь к иконке в папке public
  title: string;
  description: string;
  buttonText?: string;
  onButtonClick?: () => void;
}

const Card = ({
  iconPath,
  title,
  description,
  buttonText = 'Перейти',
  onButtonClick,
}: CardProps) => {
  return (
    <div className="flex flex-col justify-between h-full p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-transform hover:-translate-y-1 duration-300 border border-gray-200">
      {/* Верхняя часть: иконка + заголовок */}
      <div className="flex items-start gap-4 mb-4">
        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center overflow-hidden">
          <Image
            src={`/${iconPath}`}
            alt="Иконка"
            width={48}
            height={48}
            className="w-full h-full object-contain"
          />
        </div>
        <h3 className="font-semibold text-xl text-gray-800 break-words leading-snug">
          {title}
        </h3>
      </div>


      {/* Описание */}
      <p className="text-gray-600 text-sm flex-grow mb-6">{description}</p>

      {/* Кнопка */}
      <button
        onClick={onButtonClick}
        className="mt-auto w-full px-4 py-2 text-sm font-medium bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-md transition duration-200"
      >
        {buttonText}
      </button>
    </div>
  );
};

export default Card;
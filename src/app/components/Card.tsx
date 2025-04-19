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
    <div className="bg-white rounded-lg shadow-md p-6 space-y-4 max-w-xs justify-center flex flex-col">
      {/* Первая строка: Иконка и Заголовок */}
      <div className="flex items-center gap-2">
        <Image 
          src={`/${iconPath}`} // Путь относительно папки public
          alt="ico"
          width={48}
          height={48}
          className="h-6 w-6"
        />
        <h3 className="font-bold text-lg text-black">{title}</h3>
      </div>

      {/* Вторая строка: Описание */}
      <p className="text-gray-600 text-sm">{description}</p>

      {/* Третья строка: Кнопка */}
      <div className="mt-2">
        <button
          onClick={onButtonClick}
          className="bg-background hover:bg-blue-600 text-foreground px-4 py-2 rounded transition-colors text-sm"
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default Card;
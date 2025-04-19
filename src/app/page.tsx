'use client';

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Card from '@/app/components/Card';
import Header from '@/app/components/Header';
import ButtonMoreServ from './components/ButtonMoreServices';

interface LinkBlockProps {
  title: string;
  description: string;
  href: string;
}

const LinkBlock: React.FC<LinkBlockProps> = ({ title, description, href }) => (
  <Link href={href}>
    <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer">
      <h3 className="text-xl font-semibold text-blue-600 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </Link>
);

const LdprPage: React.FC = () => {
  const router = useRouter();

  const services = {
    study: [
      {
        title: 'Обращение в приёмную ЛДПР',
        description: 'Решение вопросов ЖКХ, защита прав, юридическая помощь без бюрократии',
        iconPath: 'icons/favicon.ico',
        buttonText: 'Оставить обращение',
        link: 'https://ldpr.ru/treatment',
      },
      {
        title: 'Новости и аналитика',
        description: 'События страны через призму честного взгляда ЛДПР',
        iconPath: 'icons/favicon.ico',
        buttonText: 'Читать',
        link: '/pages/ldpr.html',
      },
      {
        title: 'История партии',
        description: 'История ЛДПР',
        iconPath: 'icons/favicon.ico',
        buttonText: 'Подробнее',
        link: 'pages/ldpr-history.html',
      },
    ],
    mp: [
      {
        title: 'События ЛДПР',
        description: 'Интерактивная карта событий партии',
        iconPath: 'icons/favicon.ico',
        buttonText: 'Изучить',
        link: 'pages/ldpr-map.html',
      },
      {
        title: 'Первый хакатон ЛДПР',
        description: 'Первый хакатон ЛДПР',
        iconPath: 'icons/favicon.ico',
        buttonText: 'Изучить',
        link: 'pages/ldpr-map.html',
      },
    ],
    services: [
      {
        title: 'Налоговый калькулятор',
        description: 'Узнайте как изменится ваша жизнь благодаря нашим решениям',
        iconPath: 'icons/favicon.ico',
        buttonText: 'Узнать',
        link: 'pages/ldpr-calc.html',
      },
      {
        title: 'ЛДПР: Достижения для России',
        description: 'Интерактивная карта ключевых решений',
        iconPath: 'icons/favicon.ico',
        buttonText: 'Смотреть',
        link: '/pages/ldpr-d-map.html',
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="max-w-6xl mx-auto px-4 py-12">
        <section className="mb-16 text-center">
          <p className="text-background mb-6">
            Мы стоим на страже интересов каждого гражданина России. Наш сайт — ваш личный помощник
            и прямой канал связи с партией.
          </p>
          <h2 className="text-3xl font-bold text-blue-800 mb-8">
            Сервисы ЛДПР для вас
          </h2>
        </section>

        {/* ОБРАЗОВАНИЕ */}
        <h2 className="text-2xl font-bold text-black mb-4">ОБРАЗОВАНИЕ</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.study.map((service, index) => (
            <Card
              key={index}
              iconPath={service.iconPath}
              title={service.title}
              description={service.description}
              buttonText={service.buttonText}
              onButtonClick={() => router.push(service.link)}
            />
          ))}
          <div className="justify-center items-center flex col-start-2">
            <ButtonMoreServ label="Смотреть больше" onClick={() => console.log('Иди!')} />
          </div>
        </div>

        {/* МЕРОПРИЯТИЯ */}
        <h2 className="text-2xl font-bold text-black mb-4">МЕРОПРИЯТИЯ</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.mp.map((service, index) => (
            <Card
              key={index}
              iconPath={service.iconPath}
              title={service.title}
              description={service.description}
              buttonText={service.buttonText}
              onButtonClick={() => router.push(service.link)}
            />
          ))}
          <div className="justify-center items-center flex col-start-2">
            <ButtonMoreServ label="Показать ещё" onClick={() => console.log('Иди!')} />
          </div>
        </div>

        {/* СЕРВИСЫ */}
        <h2 className="text-2xl font-bold text-black mb-4">СЕРВИСЫ</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.services.map((service, index) => (
            <Card
              key={index}
              iconPath={service.iconPath}
              title={service.title}
              description={service.description}
              buttonText={service.buttonText}
              onButtonClick={() => router.push(service.link)}
            />
          ))}
          <div className="justify-center items-center flex col-start-2">
            <ButtonMoreServ label="Больше сервисов" onClick={() => console.log('Иди!')} />
          </div>
        </div>

        {/* Дополнительный блок */}
        <section className="space-y-8">
          <div className="bg-blue-50 p-8 rounded-xl">
            <h2 className="text-2xl font-bold text-blue-800 mb-4">
              ЛДПР — за справедливость и сильную Россию!
            </h2>
            <p className="text-background">
              Мы боремся против беззакония и чиновничьего произвола. Защищаем ваши интересы
              в Государственной Думе и региональных парламентах.
            </p>
          </div>
        </section>
      </main>

      <footer className="bg-background text-foreground py-4 mt-12 justify-center items-center">
        <div className="container mx-auto px-4 text-foreground text-center">
          <p>© ЛДПР {new Date().getFullYear()}. Все права защищены</p>
        </div>
      </footer>
    </div>
  );
};

export default LdprPage;

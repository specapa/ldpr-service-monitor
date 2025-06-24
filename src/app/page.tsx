'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

import Header from '@/app/components/Header';
import SearchBar from '@/app/components/SearchBar';
import Footer from '@/app/components/Footer';
import Hero from '@/app/components/Hero';
import ServiceSection from '@/app/components/ServiceSection';
import ButtonMoreServ from '@/app/components/ButtonMoreServices';
import { services } from '@/app/data/services';

const LdprPage: React.FC = () => {
  const router = useRouter();
  const [query, setQuery] = useState('');
  const handleSubmit = () => {
        const trimmed = query.trim();
        if (!trimmed) return;

        const newPath = trimmed.split(/\s+/).join('/');
        if (!newPath) return;

        router.push(`/result?path=${encodeURIComponent(newPath)}`);
    };


  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 via-white to-blue-50 flex flex-col">
      <Header />

      <main className="max-w-6xl mx-auto px-4 py-12 flex-grow">
        <Hero />
        <SearchBar
          value={query}
          onChange={setQuery}
          onSubmit={handleSubmit}
          className="mb-8"
        />

        <ServiceSection
          title="ОБРАЗОВАНИЕ"
          items={services.study.map(service => ({
            ...service,
            onButtonClick: () => router.push(service.link),
          }))}
        />
        <div className="flex justify-center mb-8">
          <ButtonMoreServ label="Смотреть больше" onClick={() => console.log('In dev')} />
        </div>

        <ServiceSection
          title="МЕРОПРИЯТИЯ"
          items={services.mp.map(service => ({
            ...service,
            onButtonClick: () => router.push(service.link),
          }))}
        />
        <div className="flex justify-center mb-8">
          <ButtonMoreServ label="Показать ещё" onClick={() => console.log('In dev')} />
        </div>

        <ServiceSection
          title="СЕРВИСЫ"
          items={services.services.map(service => ({
            ...service,
            onButtonClick: () => router.push(service.link),
          }))}
        />
        <div className="flex justify-center">
          <ButtonMoreServ label="Больше сервисов" onClick={() => console.log('In dev')} />
        </div>

        <section className="space-y-8 mt-8">
          <div className="bg-blue-50 p-8 rounded-xl shadow">
            <h2 className="text-2xl font-bold text-blue-800 mb-4">
              Наш сайт — за справедливость и сильную Россию!
            </h2>
            <p className="text-background">
              Мы боремся против беззакония и чиновничьего произвола. Защищаем ваши интересы в
              Государственной Думе и региональных парламентах.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default LdprPage;

import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-white relative overflow-hidden">
      <div className="absolute top-5 left-5 text-3xl font-bold">
        <span className="text-red-500">ЛДПР</span>
        <span className="ml-2">4</span>
        <span className="ml-2">people</span>
      </div>

      <h1 className="text-6xl font-extrabold text-center mt-20">ЛДПР 4people</h1>

      <div className="mt-10 flex items-center gap-6">
        <div>
          <Image 
            src="/dino.png" 
            alt="Dino" 
            width={100} 
            height={100} 
            className="pixelated"
          />
        </div>

        <div className="bg-purple-100 p-4 rounded-xl max-w-xs">
          <p className="text-sm font-medium">
            Сообщество, где можно проявить себя, искать и пробовать, развиваться и строить карьеру
          </p>
        </div>
      </div>

      <div className="mt-10 bg-yellow-300 px-6 py-4 rounded-xl text-5xl font-bold text-center">
        СТАРТ КАРЬЕРЫ В IT
      </div>

      <div className="absolute bottom-10 animate-bounce">
        <div className="bg-black text-white w-14 h-14 flex items-center justify-center rounded-full">
          <span className="text-2xl">↓</span>
        </div>
      </div>

      <div className="absolute top-10 right-10">
        <button className="bg-black text-white px-6 py-2 rounded-full">Хочу в Яндекс</button>
      </div>

      <div className="absolute top-0 left-1/3 w-full h-20 bg-purple-200 rotate-12 opacity-50 z-[-1]" />
      <div className="absolute bottom-0 left-0 w-full h-32 bg-purple-200 rotate-12 opacity-50 z-[-1]" />
    </section>
  );
}

import Image from 'next/image';
import React from 'react';
import '@/assets/images/AceSpades.png';

export default function Home() {
  return (
    <>
    {/* Header */}
    <header>
      <div className="header-title">
        <h1 className="text-2xl font-bold"> Late Night Poker </h1>
      </div>
    </header>

    {/* Content / Logic */}
    <main>
      {/* CARDS */}
      <div className="card-container">
        <div className="card">
          <div className="card-inner">  {/* INNER */}
            <div className="card-front">  {/* FRONT */}
              <Image src="" alt="" className="card-img" />
            </div>

            <div className="card-back">  {/* BACK */}

            </div>
          </div>
        </div>
      </div>
    </main>
      
    </>
  );
}

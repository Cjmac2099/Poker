import Image from 'next/image';
import React from 'react';

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
              <Image 
              src="/images/card-JackClubs.png" 
              alt="Jack of Clubs Card-Front" 
              className="card-img"
              width={120}
              height={120} />


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

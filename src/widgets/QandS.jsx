import React from 'react';

export default function QandS() {
// function random (){
//     const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const randomItem = arr[Math.floor(Math.random() * arr.length)];
// }

  return (
    <div className="w-full bg-slate-900 min-h-[350px] my-4 py-6">
      <h2 className="font-sans text-center text-slate-50 tracking-wide text-base mb-6 flex flex-col leading-snug">
        A revelation where conviction meets contemplation  
        <span className="font-bold">— The Quran</span>
      </h2>

      <div className="flex flex-col gap-6 px-4 md:flex-row md:justify-center md:items-start">
        <Card
          ayat="like the darkness in a deep sea, covered by waves upon waves, topped by ˹dark˺ clouds. Darkness upon darkness! If one stretches out their hand, they can hardly see it. And whoever Allah does not bless with light will have no light!"
          verse="24:40"
          src="https://oceanwiki.ethz.ch/doku.php?id=lecture12:internalwaves#:~:text=Internal%20waves%20are%20gravity%20waves,increase%20in%20density%20with%20depth."
          edv="Internal waves are gravity waves that occur at the interface of ocean layers with differing densities—caused by variations in temperature and salinity."
        />
      </div>
    </div>
  );
}

function Card({ ayat, verse, edv, src }) {
  return (
    <div className="max-w-md bg-white rounded-2xl shadow-lg p-6 w-full flex flex-col justify-between hover:shadow-2xl hover:scale-[0.98] transition-all duration-300 ease-in-out">
      <div className="text-center">
        <p className="text-base font-mono font-semibold text-gray-800 mb-1">Quran Verse</p>
        <p className="text-sm font-mono text-gray-700">{ayat}</p>
        <span className="block text-xs font-mono text-gray-500 mt-3">
          al-Quran: {verse}
        </span>
      </div>

      <div className="text-center mt-5">
        <span className="block text-xs font-mono text-gray-600 italic">
          Scientific Insight: <span className='bg-yellow-300 '> {edv}</span> 
        </span>
        <a
          href={src}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 underline text-xs font-light italic mt-1 inline-block"
        >
          Source
        </a>
      </div>
    </div>
  );
}

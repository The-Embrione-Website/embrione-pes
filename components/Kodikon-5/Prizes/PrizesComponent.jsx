import React from 'react'
import TitleComponent from '../HelperComponents/TitleComponent'
import Image from 'next/image'

const PrizeCard = ({ source, index, amount, showConfetti = false }) => {
  return (
    <div className="prize-card h-[220px] w-[220px] md:h-[240px] md:w-[240px] flex items-center justify-center relative">
      <div className="prize-anim absolute inset-0" />
      {showConfetti && (
        <div className="confetti-container">
          {/* 12 pieces with CSS-driven randomized offsets via inline style vars */}
          {Array.from({ length: 12 }).map((_, i) => {
            const angle = (i / 12) * 360
            const radius = 120 + (i % 4) * 12
            const dx = Math.cos((angle * Math.PI) / 180) * radius + 'px'
            const dy = Math.sin((angle * Math.PI) / 180) * radius + 'px'
            const rot = (Math.random() * 360).toFixed(0) + 'deg'
            const colorClass = `c${(i % 5) + 1}`
            return (
              <span
                key={i}
                className={`confetti-piece ${colorClass}`}
                style={{ ['--dx']: dx, ['--dy']: dy, ['--rot']: rot }}
              />
            )
          })}
        </div>
      )}
      <Image src={source} alt={`prize-${index}`} height={800} width={800} className='bg-transparent select-none pointer-events-none' />
      {amount && (
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 px-3 py-1 rounded-md bg-black/45 backdrop-blur text-white text-sm md:text-base font-semibold text-outline">
          {amount}
        </div>
      )}
    </div>
  )
}


const PrizesComponent = () => {
  // Configure prize amounts here (leave empty string to hide overlay)
  const prizeAmounts = {
    first: '',
    second: '',
    third: '',
  }

  // Prefer Kodikon-5 assets if available; fallback to Kodikon-4 for now
  const images = {
    first: '/Kodikon5/prizes/first.png',
    second: '/Kodikon5/prizes/second.png',
    third: '/Kodikon5/prizes/third.png',
  }

  return (
    <div className="flex flex-col w-full h-fit gap-6">
      <TitleComponent titleData="Prizes in Store!" />
      <div className="w-full h-fit grid grid-cols-1 md:grid-cols-3 place-items-center my-16 gap-9 md:gap-0 ">
        <PrizeCard index={1} source={images.first} amount={prizeAmounts.first} showConfetti />
        <PrizeCard index={2} source={images.second} amount={prizeAmounts.second} showConfetti/>
        <PrizeCard index={3} source={images.third} amount={prizeAmounts.third} showConfetti/>
      </div>
    </div>
  )
}

export default PrizesComponent

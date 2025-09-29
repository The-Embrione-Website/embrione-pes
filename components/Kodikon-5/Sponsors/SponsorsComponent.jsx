import React from 'react'
import Image from 'next/image'
import TitleComponent from '../HelperComponents/TitleComponent'
import { sponsors_for_kodikon_4 } from '@/components/Kodikon-4/sponsors'
const SponsorCard = ({ sponsorName, sponsorImageURL, sponsorDescription, sponsorWebsiteURL, index }) => {
  return (
    <div className="flex flex-col items-center justify-center p-2 h-100 w-100">
      <Image 
        src={sponsorImageURL} 
        alt={sponsorName} 
        height={500} 
        width={500} 
        className='rounded-md' 
      />
      <p className="text-white mt-2 text-lg">{sponsorName}</p>
      {sponsorDescription && (
        <p className="text-gray-400 mt-2 text-center text-sm">{sponsorDescription}</p>
      )}
    </div>
  );
};



const SponsorsComponent = () => {
  return (
    <div className="flex flex-col w-full h-fit gap-6">
      <TitleComponent id="sponsor" titleData="Our Sponsors" />
      {/* <div className="w-full h-fit flex flex-col items-center justify-center gap-12 ">
        {
          sponsors_for_kodikon_4?.map((sponsor, index) => (
            <div className="text-white py-9 " key={index}>
              <h1 className="w-full text-center text-4xl md:text-5xl my-5">{sponsor.category}</h1>
              <div className="flex md:flex flex-col md:grid-cols-2 justify-center gap-12 p-5 ">
                {sponsor.categorySponsors.map((item, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <SponsorCard 
                      index={index} 
                      sponsorImageURL={item.imageUrl} 
                      sponsorName={item.name} 
                      sponsorDescription={item.description} 
                    />
                    {item.sponsorWebsiteURL && (
                      <a 
                        href={item.sponsorWebsiteURL} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="mt-2 text-center "
                        style={{ color: '#1ec6fa' }} 
                      >
                        Click here to visit {item.name}.com
                      </a>
                    )}
                  </div>
                ))}
              </div>
              {index === sponsors_for_kodikon_4.length - 1 && (
                <h1 className="w-full text-center text-4xl md:text-5xl my-6 h-40 gradient-text-animation">
                  Awaiting More Sponsors !!
                </h1>
              )}  
            </div>
          ))
        }
      </div> */}
    </div>
  );
}



export default SponsorsComponent


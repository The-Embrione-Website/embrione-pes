import sevenEleven from "./logos/seveneleven.png";
import azure from "./logos/azure.png";
import brownBurger from "./logos/brownburger.png";
import cothas from "./logos/cothas.png";
import flatlogic from "./logos/flatlogic.png";
import glens from "./logos/glens.png";
import internshala from "./logos/internshala.png";
import rage from "./logos/rage.png";
import sentinel from "./logos/sentinel.png";
import wolfram from "./logos/wolfram.png";
import PreviousPartner from "./PreviousPartner";



const logoSources = [
  sevenEleven,
  azure,
  brownBurger,
  cothas,
  flatlogic,
  glens,
  internshala,
  rage,
  sentinel,
  wolfram,
];

const logoSizes = [
  { height: 100, width: 100 }, // 7-eleven
  { height: 120, width: 120 }, // azure
  { height: 140, width: 140 }, // brown burger
  { height: 100, width: 100 }, // cothas
  { height: 120, width: 120 }, // flatlogic
  { height: 130, width: 130 }, // glens
  { height: 130, width: 130 }, // internshala
  { height: 130, width: 130 }, // rage
  { height: 130, width: 130 }, // sentinel
  { height: 130, width: 130 }, // wolfram
];

// Optional: you can later fill these with actual sponsor links
const logoLinks = [
  "#", "#", "#", "#", "#", "#", "#", "#", "#", "#",
];

const PreviousPartners = () => {
  return (
    <div className="p-5 md:p-[110px] flex flex-col relative items-center justify-center mt-9">
      <div
        className="flex flex-col md:flex-row items-center justify-center w-fit h-fit md:space-x-3 mb-9"
        data-aos="zoom-in-up"
        data-aos-duration="500"
      >
        <span className="text-4xl md:text-7xl">✨</span>
        <h1 className="text-white md:text-7xl text-4xl pb-6 pt-3 text-center">
          Our Previous Partners!
        </h1>
      </div>

      <div className="flex flex-wrap gap-12 md:gap-20 items-center justify-center mt-9 relative">
        {logoSources.map((logoSource, index) => (
          <PreviousPartner
            key={index}
            index={index}
            logoSource={logoSource}
            height={logoSizes[index].height}
            width={logoSizes[index].width}
            logoLink={logoLinks[index]}
          />
        ))}
      </div>
    </div>
  );
};

export default PreviousPartners;

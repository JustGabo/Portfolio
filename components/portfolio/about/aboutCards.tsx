import AboutResponsive from "./aboutResponsive";
import AboutInfo from "./aboutInfo";
import AboutInteractions from "./aboutInteractions";

const AboutCards = () => {
  return (
    <section className="w-full ml-auto  flex flex-col lg:gap-14 gap-20">
      <AboutInfo />
      <AboutResponsive />
      <AboutInteractions />
    </section>
  );
};

export default AboutCards;

import "./AboutUs.css";
import AboutUsTeamCards from "./components/AboutUsTeamCards/AboutUsTeamCards.tsx";
import AboutUsInfo from "./components/AboutUsInfo.tsx";

const AboutUs = () => {
  return (
    <div className="about-us mt-5">
      <AboutUsInfo />
      <AboutUsTeamCards />
    </div>
  );
};

export default AboutUs;

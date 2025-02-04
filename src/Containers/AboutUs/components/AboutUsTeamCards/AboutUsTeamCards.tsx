import team from "../../team.ts";
import AboutUsTeamCard from "./AboutUsTeamCard.tsx";

const AboutUsTeamCards = () => {
  return (
    <>
      <div className="py-5 mt-5">
        <h3 className="text-center mb-5">Наша команда</h3>
        <div className="row g-4">
          {team.map((worker, index) => (
            <AboutUsTeamCard key={index+worker.jobTitle} name={worker.name} jobTitle={worker.jobTitle} />
          ))}
        </div>
      </div>
    </>
  );
};

export default AboutUsTeamCards;
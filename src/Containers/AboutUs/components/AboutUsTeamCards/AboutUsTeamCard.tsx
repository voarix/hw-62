import React from "react";

interface Props {
  name: string;
  jobTitle: string;
}

const AboutUsTeamCard: React.FC<Props> = ({ name, jobTitle }) => {
  return (
    <>
      <div className="col-md-4">
        <div className="card h-100 shadow border-0">
          <div className="card-body text-center">
            <h5 className="card-title">{name}</h5>
            <p className="card-text text-muted">{jobTitle}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUsTeamCard;

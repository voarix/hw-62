import AboutUsImg from "../../../assets/AboutUs.jpg";

const AboutUsInfo = () => {
  return (
    <>
      <div className="bg-light p-5 rounded-3">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h1 className="display-4 fw-bold mb-4">
              Мы создаем новый интернет
            </h1>
            <p className="fs-6 fw-light">Быстрее. Безопаснее. Лучше.</p>
          </div>
          <div className="col-md-6">
            <img
              src={AboutUsImg}
              alt="Наша команда"
              className="img-fluid rounded-3 shadow"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUsInfo;
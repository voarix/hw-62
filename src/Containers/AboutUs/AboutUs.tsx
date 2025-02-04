import AboutUsImg from "../../assets/AboutUs.jpg";
import './AboutUs.css';

const AboutUs = () => {
  return (
    <>
      <div className="bg-light p-5 mt-5 rounded-2">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h1 className="display-4 fw-bold mb-4">
              Мы создаем новый интернет
            </h1>
            <p className="fs-6 fw-light">
              Быстрее. Безопаснее. Лучше.
            </p>
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

      <div className="py-5 mt-5">
        <h3 className="text-center mb-5">Наша команда</h3>
        <div className="row g-4">
          <div className="col-md-4">
            <div className="card h-100 shadow">
              <div className="card-body text-center">
                <h5 className="card-title">Ричард Хендрикс</h5>
                <p className="card-text text-muted">Генеральный директор</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100 shadow">
              <div className="card-body text-center">
                <h5 className="card-title">Динеш Чугтай</h5>
                <p className="card-text text-muted">Разработчик ПО</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100 shadow">
              <div className="card-body text-center">
                <h5 className="card-title">Бертрам Гилфойл</h5>
                <p className="card-text text-muted">Специалист по кибербезопасности</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100 shadow">
              <div className="card-body text-center">
                <h5 className="card-title">Эрлих Бахман</h5>
                <p className="card-text text-muted">Специалист по ничему-не-деланию</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100 shadow">
              <div className="card-body text-center">
                <h5 className="card-title">Джаред Дан</h5>
                <p className="card-text text-muted">Директор по развитию бизнеса </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100 shadow">
              <div className="card-body text-center">
                <h5 className="card-title">Алихан Качкынов</h5>
                <p className="card-text text-muted">Помощник Эрлиха Бахмана</p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default AboutUs;
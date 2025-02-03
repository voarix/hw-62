import logoImg from '../../assets/logo.svg';


const Home = () => {


  return (
    <div className="home">
      <div className="row justify-content-center align-items-center py-5 mb-4">
        <div className="col-6 text-center">
          <h1 className="display-4 fw-bold mb-3">
            Middle-Out сжатие изменит всё
          </h1>
          <p className="lead mb-4">
            5.2 по шкале Вайсмана — новый стандарт передачи данных
          </p>
          <button className="btn btn-outline-primary">
            Попробовать бета-версию
          </button>
        </div>
        <div className="col-md-6 mt-4">
          <img
            src={logoImg}
            alt="Технология Middle-Out(Из центра наружу)"
            className="img-fluid w-100"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
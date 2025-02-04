import { Outlet, useNavigate } from "react-router-dom";

const Portfolio = () => {
  const navigate = useNavigate();

  return (
    <div className="portfolio text-center mt-5">
      <div className="project card border-0 shadow p-4 mb-5">
        <h3 className="display-6 mb-4 fw-bold">
          Страны, в которых мы работаем
        </h3>
        <button
          className="btn btn-primary border-5 py-3 shadow fs-5"
          onClick={() => navigate("countries")}
        >
          К странам!
        </button>
      </div>

      <div className="project card border-0 shadow p-4 mb-5">
        <h3 className="display-6 mb-4 fw-bold">Переходите к нам в чат!</h3>
        <button
          className="btn btn-success border-5 py-3 shadow fs-5"
          onClick={() => navigate("chat")}
        >
          В чат!
        </button>
      </div>
      <hr />
      <Outlet />
    </div>
  );
};

export default Portfolio;

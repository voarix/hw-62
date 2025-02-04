import { Outlet, useNavigate } from "react-router-dom";

const Portfolio = () => {
  const navigate = useNavigate();

  return (
    <div className="portfolio text-center">
      <div className="project mt-5">
        <h3>Страны в которых мы работаем:</h3>
        <button
          className="btn btn-primary mt-2"
          onClick={() => navigate("countries")}
        >
          К странам!
        </button>
      </div>
      <div className="project mt-5">
        <h3>Переходит к нам в чат!</h3>
        <button
          className="btn btn-primary mt-2"
          onClick={() => navigate("chat")}
        >
          В чат!
        </button>
      </div>

      <Outlet />
    </div>
  );
};

export default Portfolio;

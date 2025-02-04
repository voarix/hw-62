import logoImg from "../../assets/logo.svg";
import { useState } from "react";
import { ModalFormType } from "./types.ts";
import Modal from "./components/Modal.tsx";

const Home = () => {
  const [modal, setModal] = useState<boolean>(false);

  const onSubmitAdd = (data: ModalFormType) => {
    alert(data.firstName + ", скоро мы вам ответим :)");
  };

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
          <button
            className="btn btn-outline-primary"
            onClick={() => setModal(true)}
          >
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

      <div className="py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h2 className="mb-4">Технические характеристики</h2>
              <ul className="list-unstyled fs-3">
                <li className="mb-5 mt-5">
                  <strong>Алгоритм сжатия:</strong> Middle-Out (из центра
                  наружу)
                </li>
                <li className="mb-5">
                  <strong>Совместимость:</strong> Windows, macOS, Linux, IOS,
                  Android
                </li>
              </ul>
            </div>
            <div className="col-md-6">
              <div className="ratio ratio-16x9 rounded-3 overflow-hidden">
                <iframe
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="Показ технологии сжатия"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Modal
        show={modal}
        onSubmitAdd={onSubmitAdd}
        onHide={() => setModal(false)}
      />
    </div>
  );
};

export default Home;

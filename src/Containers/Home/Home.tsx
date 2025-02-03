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
      <Modal
        show={modal}
        onSubmitAdd={onSubmitAdd}
        onHide={() => setModal(false)}
      />
    </div>
  );
};

export default Home;

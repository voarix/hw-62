import React, { useState } from "react";
import { ModalFormType } from "../types.ts";

interface Props {
  onHide: () => void;
  onSubmitAdd: (data: ModalFormType) => void;
  show: boolean;
}

const initialForm = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
};

const Modal: React.FC<Props> = ({ onHide, onSubmitAdd, show }) => {
  const [form, setForm] = useState<ModalFormType>(initialForm);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmitAdd(form);
    setForm(initialForm);
    onHide();
  };

  const onChangeInputMessage = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className={`modal fade ${show ? "show d-block" : ""}`} tabIndex={-1}>
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Доступ к бета-версии</h5>
              <button
                type="button"
                className="btn-close"
                onClick={onHide}
              ></button>
            </div>
            <form onSubmit={onSubmit}>
              <div className="modal-body">
                <div className="mb-3">
                  <label className="form-label" htmlFor="email">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    required
                    name="email"
                    id="email"
                    value={form.email}
                    onChange={onChangeInputMessage}
                  />
                </div>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="form-label" htmlFor="firstName">
                      Имя
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      required
                      name="firstName"
                      id="firstName"
                      value={form.firstName}
                      onChange={onChangeInputMessage}
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label" htmlFor="lastName">
                      Фамилия
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      required
                      name="lastName"
                      id="lastName"
                      value={form.lastName}
                      onChange={onChangeInputMessage}
                    />
                  </div>
                </div>
                <div className="mb-3">
                  <label className="form-label" htmlFor="phone">
                    Номер телефона
                  </label>
                  <input
                    type="tel"
                    className="form-control"
                    required
                    name="phone"
                    id="phone"
                    value={form.phone}
                    onChange={onChangeInputMessage}
                  />
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={onHide}
                >
                  Закрыть
                </button>
                <button type="submit" className="btn btn-primary">
                  Отправить заявку
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {show ? <div className="modal-backdrop fade show"></div> : null}
    </>
  );
};

export default Modal;

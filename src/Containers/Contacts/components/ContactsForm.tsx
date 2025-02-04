import React, { useState } from "react";
import { ModalFormType } from "../../Home/types.ts";
import { FormType } from "../types.ts";

interface Props {
  onSubmitAdd: (data: ModalFormType) => void;
}

const initialForm = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
};

const ContactsForm: React.FC<Props> = ({ onSubmitAdd }) => {
  const [form, setForm] = useState<FormType>(initialForm);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmitAdd(form);
    setForm(initialForm);
  };

  const onChangeInputMessage = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="col-md-6 mb-4">
        <div className="card h-100 border-0 shadow-sm">
          <div className="card-body p-4">
            <h2 className="mb-4">Напишите нам</h2>
            <form onSubmit={onSubmit}>
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
              <div className="mb-3">
                <textarea
                  className="form-control"
                  rows={5}
                  placeholder="Ваше предложение что хотели бы обсудить"
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary">
                Отправить заявку
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactsForm;

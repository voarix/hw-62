import ContactsForm from "./components/ContactsForm.tsx";
import { FormType } from "./types.ts";

const Contacts = () => {
  const onSubmitAdd = (data: FormType) => {
    alert(data.firstName + ", в скором времени мы с вами свяжемся :)");
  };

  return (
    <div className="contacts py-5">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center mb-5">
            <h1 className="display-4 fw-bold">Свяжитесь с нами</h1>
            <p className="lead">
              Мы всегда рады услышать ваши идеи и ответить на вопросы
            </p>
          </div>

          <div className="col-md-6 mb-4">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body p-4">
                <h2 className="mb-4">Наши контакты</h2>
                <div className="d-flex align-items-start mb-4">
                  <div>
                    <h5>Адрес</h5>
                    <p className="text-muted mb-0">
                      Сан-Франциско, Кремниевая долина,
                      <br />
                      ул. Малдыбаева 7/1
                    </p>
                  </div>
                </div>

                <div className="d-flex align-items-start mb-4">
                  <div>
                    <h5>Телефон</h5>
                    <p className="text-muted mb-0">
                      +996 999 999 999
                      <br />
                      (Пн-Пт 12:00 - 19:00)
                    </p>
                  </div>
                </div>

                <div className="d-flex align-items-start mb-4">
                  <div>
                    <h5>Email</h5>
                    <p className="text-muted mb-0">PiedPiper@gmail.com</p>
                  </div>
                </div>

                <div className="d-flex align-items-start">
                  <div>
                    <h5>Часы работы</h5>
                    <p className="text-muted mb-0">
                      Пн-Сб: 12:00 - 21:00
                      <br />
                      Вс: выходной
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6 mb-4">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body p-4">
                <h2 className="mb-4">Напишите нам</h2>
                <ContactsForm onSubmitAdd={onSubmitAdd} />
              </div>
            </div>
          </div>

          <div className="col-12 mt-5">
            <h3 className="text-center mb-5 mt-5 display-4 fw-bold">
              Где мы находимся
            </h3>
            <div className="ratio ratio-21x9">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2925.256043189796!2d74.59462951267248!3d42.84632650412042!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389eb626e9f798bd%3A0xf77beac093888960!2z0KbQtdC90YLRgCDQv9C-0LTQs9C-0YLQvtCy0LrQuCDQv9GA0L7Qs9GA0LDQvNC80LjRgdGC0L7QsiBBdHRyYWN0b3IgU2Nob29sIEJpc2hrZWs!5e0!3m2!1sru!2skg!4v1738650277208!5m2!1sru!2skg"
                className="border-0 rounded-3 shadow"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;

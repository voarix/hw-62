const ContactsInfo = () => {
  return (
    <>
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
    </>
  );
};

export default ContactsInfo;

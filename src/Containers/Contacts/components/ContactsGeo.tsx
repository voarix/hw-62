const ContactsGeo = () => {
  return (
    <>
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
    </>
  );
};

export default ContactsGeo;

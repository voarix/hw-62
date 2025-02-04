import ContactsForm from "./components/ContactsForm.tsx";
import { FormType } from "./types.ts";
import ContactsInfo from "./components/ContactsInfo.tsx";
import ContactsGeo from "./components/ContactsGeo.tsx";
import ContactsTitle from "./components/ContactsTitle.tsx";

const Contacts = () => {
  const onSubmitAdd = (data: FormType) => {
    alert(data.firstName + ", в скором времени мы с вами свяжемся :)");
  };

  return (
    <div className="contacts py-5">
      <div className="row">
        <ContactsTitle />
        <ContactsInfo />
        <ContactsForm onSubmitAdd={onSubmitAdd} />
        <ContactsGeo />
      </div>
    </div>
  );
};

export default Contacts;

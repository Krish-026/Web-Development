import Button from '../Button/Button'
import styles from './ContactForm.module.css'
import { MdMessage } from "react-icons/md"
import { FaPhoneAlt } from "react-icons/fa"
import { HiMail } from "react-icons/hi"
import { useState } from 'react'
const ContactForm = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [text, setText] = useState('');

  const onSubmit = (event) => {
    event.preventDefault();
    // console.log(event);
    // console.log("Name :",event.target[0].value);
    // console.log("Email :",event.target[1].value);
    // console.log("Text :",event.target[2].value);

    setName(event.target[0].value);
    setEmail(event.target[1].value);
    setText(event.target[2].value);
  }

  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.contact_form}`}>
        <div className={`${styles.top_btn}`}>
          <Button text="VIA SUPPORT CHAT" icon={<MdMessage fontSize="24px" />} />
          <Button  text="VIA CALL" icon={<FaPhoneAlt fontSize="24px" />} />
        </div>
        <Button isOutline={true} text="VIA EMAIL FORM" icon={<HiMail fontSize="24px" />} />
        
        <form onSubmit={onSubmit}>

          <div className={`${styles.form_control}`}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" placeholder="Your name.." />
          </div>

          <div className={`${styles.form_control}`}>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" placeholder="Your email.." />
          </div>

          <div className={`${styles.form_control}`}>
            <label htmlFor="text">Text</label>
            <textarea name="text" placeholder="Text" ></textarea>
          </div>

          <div className={`${styles.form_button}`}>
            <Button text="Submit" ></Button>
          </div>

        </form>
        <div>{name + ' ' + email + ' ' + text}</div>
      </div>
      <div className={`${styles.contact_image}`}>
        <img src="/images/contact.svg" alt="contact img" />
      </div>

    </div>
  )
}

export default ContactForm

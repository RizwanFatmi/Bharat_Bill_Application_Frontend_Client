import React, {useEffect} from 'react'
import ContactSlider from './ContactSlider'
import ContactForm from './ContactForm'
const ContactUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  },[]);
  return (
    <>
    <ContactSlider />
    <ContactForm />
    </>
  )
}

export default ContactUs
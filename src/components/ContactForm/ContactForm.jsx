import React from 'react'
import css from './ContactForm.module.css'


const ContactForm = ({onAdd}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({
      id: Date.now(),
      name: e.target.elements.name.value,
      number: e.target.elements.number.value
    });
    e.target.reset();
  }
  return (
    <form className={css.form} onSubmit={handleSubmit}>

      <label className={css.label}>
        Name
        <input className={css.input} type="text" name="name" />
      </label>

      <label className={css.label}>
        Number
        <input className={css.input} type="number" name="number" />
      </label>

      <button className={css.submitBtn} type="submit" >Add contact</button>
    </form>
  )
}

export default ContactForm
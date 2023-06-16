import css from "./Form.module.css";
import { useState } from "react";
import { nanoid } from "nanoid";

export const Form = ({onDataSubmit}) => {
    
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const nameInputId = nanoid();
    const numberInputId = nanoid();

    const handleSetState = (e) => {
        const { name, value } = e.target;
        if (name === 'name') {
            setName(value);
        } else if (name === 'number') {
            setNumber(value);
        }
    };

    const handleSubmitForm = (e) => {
        e.preventDefault();
  
        if (name !== "" && number !== "") {
            const contactId = nanoid();
            const formData = {
                name: name,
                number: number,
                contactId: contactId,
            };
  
        onDataSubmit(formData);
        reset();
        } 
    };

    const reset = () => {
        setName('');
        setNumber('');
    };

    return (
        <>
            <form
                className={css.form}
                onSubmit={handleSubmitForm}
                action="">
                <label
                    className={css.input_title}
                    htmlFor={nameInputId}>
                    Name
                </label>
                <input
                    className={css.form_input}
                    name="name"
                    id={nameInputId}
                    type="text"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    value={name}
                    onChange={handleSetState}
                    required
                />
                <label
                    className={css.input_title}
                    htmlFor={numberInputId}>
                    Number
                </label>
                <input
                    className={css.form_input}
                    name="number"
                    id={numberInputId}
                    type="tel"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    value={number}
                    onChange={handleSetState}
                    required
                />
                <button
                    className={css.submit_Btn}
                    type="submit">
                    Add contact
                </button>
            </form>
        </>
    );
}


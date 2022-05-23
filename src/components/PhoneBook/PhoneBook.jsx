import { Component } from 'react';
import { nanoid } from 'nanoid';

import styles from './phoneBook.module.css';
import PropTypes from 'prop-types';

import Form from './Form';
import ContactList from '../ContactList';

class PhoneBook extends Component {
    state = {
        contacts: [
            {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
            {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
            {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
            {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
        ],
        name: "",
        number: "",
        filter: "",
    }
    addContact = (data) =>{
        const { contacts } = this.state;
        const dublicate = contacts.find(contact => contact.name === data.name);
        if(dublicate){
            alert(`${data.name} is already in name list`);
            return;
        }
        this.setState(prevState => {
        const { contacts } = prevState;
        const {name, number} = data;
        const newContact ={
            name,
            number,
            id: nanoid()
        };
        return {
            contacts: [...contacts, newContact],
            name: "",
            number: "",
        }
    })
    };
    deleteContact = (id) => {
        this.setState(prevState => {
            const {contacts} = prevState;
            return {
                contacts: contacts.filter(contact => contact.id !== id)
            }
        });
    };
    changeFilter = ({target}) =>{
        this.setState({filter: target.value})
    };
    getFilteredContacts(){
        const {filter, contacts} = this.state;
        if(!filter){
            return contacts;
        }
        const filterText = filter.toLocaleLowerCase();
        const filteredContacts = contacts.filter(({name}) =>{
            const result = name.toLocaleLowerCase().includes(filterText)
            return result;
        });
        return filteredContacts;
    };
    render() {
        const { filter } = this.state;
        const {addContact, deleteContact, changeFilter} = this;

        const contacts = this.getFilteredContacts();

        return(
            <div className={styles.container}>
                <div className={styles.contForm}>
                <h1>Phonebook</h1>
                <Form onSubmit={addContact}/>
                </div> 
            <div className={styles.container}>
                <h2>Contacts</h2>
                    <label htmlFor="name">Find contacts by name:</label> <br/>
                    <input className={styles.find}onChange={ changeFilter } value={filter} type="text" name="filter" placeholder="Filter"/>
                    <ContactList contacts={contacts} deleteContact={deleteContact}/>
                </div>
            </div>
        );
    };
};
export default PhoneBook;

PhoneBook.protoType ={
    filter: PropTypes.string.isRequired
};
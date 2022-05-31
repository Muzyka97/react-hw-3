import { useState, useEffect, useRef } from 'react';

import { nanoid } from 'nanoid';

import styles from './phoneBook.module.css';
import PropTypes from 'prop-types';

import Form from './Form';
import ContactList from '../ContactList';

const PhoneBook = () =>{
    const [contacts, setContacts] = useState([]);
    const [filter, setFilter] = useState("");

    const firstRender = useRef(true);

    useEffect(() => {
        if(firstRender.current){
            const data = localStorage.getItem("contacts");
            const contacts = JSON.parse(data);
            if(data?.length){
                setContacts(contacts)
            }
            firstRender.current = false;
        }
    }, []);
    useEffect=(() => {
        if(!firstRender.current){
            localStorage.setItem("contacts", JSON.stringify(contacts))
        }
    },[contacts])

    const addContact = (data) =>{
        const dublicate = contacts.find(contact => contact.name === data.name);
        if(dublicate){
            alert(`${data.name} is already in name list`);
            return;
        }
        setContacts(prevState => {
            const {name, number} = data;
            const newContact ={
                name,
                number,
                id: nanoid()
            };
            return [...prevState, newContact];
        });
    }

    const deleteContact = id => {
        setContacts(prevState => contacts.filter(contact => contact.id !== id));
    };

    const changeFilter = ({target}) => setFilter(target.value);

    const filterText = filter.toLocaleLowerCase();
    const filteredContacts = contacts.filter(({name}) =>{
        const result = name.toLocaleLowerCase().includes(filterText)
        return result;
    });

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
}

export default PhoneBook;

PhoneBook.protoType ={
    filter: PropTypes.string.isRequired
};
// class PhoneBook extends Component {
//     state = {
//         contacts: [],
//         name: "",
//         number: "",
//         filter: "",
//     }
//     addContact = (data) =>{
//         const { contacts } = this.state;
//         const dublicate = contacts.find(contact => contact.name === data.name);
//         if(dublicate){
//             alert(`${data.name} is already in name list`);
//             return;
//         }
//         this.setState(prevState => {
//         const { contacts } = prevState;
//         const {name, number} = data;
//         const newContact ={
//             name,
//             number,
//             id: nanoid()
//         };
//         return {
//             contacts: [...contacts, newContact],
//             name: "",
//             number: "",
//         }
//     })
//     };
//     deleteContact = (id) => {
//         this.setState(prevState => {
//             const {contacts} = prevState;
//             return {
//                 contacts: contacts.filter(contact => contact.id !== id)
//             }
//         });
//     };
//     changeFilter = ({target}) =>{
//         this.setState({filter: target.value})
//     };
//     getFilteredContacts(){
//         const {filter, contacts} = this.state;
//         if(!filter){
//             return contacts;
//         }
//         const filterText = filter.toLocaleLowerCase();
//         const filteredContacts = contacts.filter(({name}) =>{
//             const result = name.toLocaleLowerCase().includes(filterText)
//             return result;
//         });
//         return filteredContacts;
//     };
//     componentDidMount(){
//         const contacts = localStorage.getItem('contacts');
//         const parsedContacts = JSON.parse( contacts );
//         if(parsedContacts){
//             this.setState({ contacts: parsedContacts })
//         };
//     };
//     componentDidUpdate(prevProps, prevState){
//         if(this.state.contacts !== prevState.contacts){
//             console.log("obnova");
//             localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
//         }
//     };
//     render() {
//         const { filter } = this.state;
//         const {addContact, deleteContact, changeFilter} = this;

//         const contacts = this.getFilteredContacts();

//         return(
//             <div className={styles.container}>
//                 <div className={styles.contForm}>
//                 <h1>Phonebook</h1>
//                 <Form onSubmit={addContact}/>
//                 </div> 
//             <div className={styles.container}>
//                 <h2>Contacts</h2>
//                     <label htmlFor="name">Find contacts by name:</label> <br/>
//                     <input className={styles.find}onChange={ changeFilter } value={filter} type="text" name="filter" placeholder="Filter"/>
//                     <ContactList contacts={contacts} deleteContact={deleteContact}/>
//                 </div>
//             </div>
//         );
//     };
// };
// export default PhoneBook;

// PhoneBook.protoType ={
//     filter: PropTypes.string.isRequired
// };

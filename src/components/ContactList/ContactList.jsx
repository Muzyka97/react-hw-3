import styles from './contactList.module.css';
import PropTypes  from 'prop-types';

const ContactList = ({contacts, deleteContact}) =>{
    const elements = contacts.map(({ name, number, id })=> (
        <li key={id}> {name} {number} 
        <button onClick={()=> deleteContact(id)}>Delete</button>
        </li>
    ));
    return (
        <ul>
        {elements}
    </ul>
    )
};
export default ContactList;

ContactList.propTypes={
    deleteContact: PropTypes.func.isRequired,
    contacts: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
    })
    ),
};

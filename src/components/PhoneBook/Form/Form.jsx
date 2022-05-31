import {initialState} from './initialState';

import useForm from 'shared/hooks/useForm';

import styles from './form.module.css';

const Form = ({onSubmit}) =>{
    const [state, handleSubmit, handleChange ] = useForm(initialState,onSubmit)

    const { name, number } = state;

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <div className={styles.input} >
                    <label htmlFor="name" > Name:</label> <br/>
                    <input
                        value={name}
                        type="text"
                        name="name"
                        onChange={handleChange}
                        id="name"
                        placeholder="Enter Name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                    />
                </div>
                <div className={styles.input}>
                    <label htmlFor="name" >Number:</label> <br/>
                    <input
                        value={number}
                        type="tel"
                        name="number"
                        onChange={handleChange}
                        placeholder="Enter Number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                        />
                </div>
                <button className={styles.click} type='submit'>Add contact</button>
            </form>
        </div>
    )
}
// class Form extends Component {
//     state ={...initialState};

//     handleSubmit =(e) =>{
//         e.preventDefault();
//         this.props.onSubmit(this.state);
//         this.setState({...initialState})
//     }
//     handleChange = ({ target }) => {
//         const { name, value } = target;
//         this.setState({
//             [name] : value,
            
//         });
//     };
//     render() {
//         const {  name, number } = this.state;
//         const {handleSubmit, handleChange} = this;
//         return(
//                 <div>
//                     <form onSubmit={handleSubmit}>
//                         <div className={styles.input} >
//                             <label htmlFor="name" > Name:</label> <br/>
//                             <input
//                                 value={name}
//                                 type="text"
//                                 name="name"
//                                 onChange={handleChange}
//                                 id="name"
//                                 placeholder="Enter Name"
//                                 pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//                                 title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//                                 required
//                             />
//                         </div>
//                         <div className={styles.input}>
//                             <label htmlFor="name" >Number:</label> <br/>
//                             <input
//                                 value={number}
//                                 type="tel"
//                                 name="number"
//                                 onChange={handleChange}
//                                 placeholder="Enter Number"
//                                 pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//                                 title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//                                 required
//                                 />
//                         </div>
//                         <button className={styles.click} type='submit'>Add contact</button>
//                     </form>
//                 </div>
//         )
//     }
// };

export default Form;
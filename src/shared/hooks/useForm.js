import {useState} from 'react';

const useForm = ({initialState, onSubmit}) =>{
    const [state, setState] = useState({...initialState});

    const handleSubmit =(e) =>{
        e.preventDefault();
        onSubmit({...state});
        setState({...initialState})
    };

    const handleChange = ({ target }) => {
        const { name, value } = target;
        setState({
            ...state,
        [name] : value,
        
        });
    }
        return {state, setState, handleSubmit, handleChange};
};
export default useForm;

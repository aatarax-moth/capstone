import './button.css';

function Button(props) {
    return (
        <button aria-label="On Click"  className="button">{props.text}</button>
    );  
}   

export default Button;
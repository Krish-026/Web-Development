import styles from './Button.module.css'
import PropTypes from 'prop-types'
function Button(props) {   
    const {isOutline, text, icon} = props;
  return ( 
    <button className={isOutline ? `${styles.outline_btn}` : `${styles.primary_btn}`}>
        {icon}
        {text}
    </button>
  )
}

Button.defaultProps = {
    isOutline: false,
    text: "Button",
    icon: null
}

Button.propTypes = {
    isOutline: PropTypes.bool,
    text: PropTypes.string,
    icon: PropTypes.element
}

export default Button

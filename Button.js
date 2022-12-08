import React from "react";
import './Styles/Button.css';

class Button extends React.Component {

    render() {
      const { 
        variant,
        content,
        ...others
      } = this.props;
      
      return (
        <button className={variant} >
          {content}
        </button>
      )
    }
  }

export default Button;
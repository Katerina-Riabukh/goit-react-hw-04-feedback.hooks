import React from "react";
import css from './notification.module.css'
import PropTypes from 'prop-types';


export const Notification = ({message}) => {
    return <p className={css.message}>{ message}</p>
}

Notification.propTypes = {
    message: PropTypes.string.isRequired,
}

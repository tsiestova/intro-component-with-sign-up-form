import React from "react";
import FormStyles from "./form.module.scss"


const Form = () => {

    return (
        <div className={FormStyles.form__wrap}>
            {/*<form action="#" className={`${FormStyles.register__form} ${FormStyles.error}`}>*/}
            <form action="#" className={FormStyles.register__form}>
                <div className={FormStyles.form__item_wrap}>
                    <div className={FormStyles.input__wrap}>
                        <input
                            id="username"
                            type="text"
                            placeholder="First Name"
                            required
                        />
                    </div>
                    <span className={FormStyles.error__message}>First Name cannot be empty</span>
                </div>

                <div className={FormStyles.form__item_wrap}>
                    <div className={FormStyles.input__wrap}>
                        <input
                            id="usersurname"
                            type="text"
                            placeholder="Last Name"
                            required
                        />
                    </div>
                    <span className={FormStyles.error__message}>First Name cannot be empty</span>
                </div>

                <div className={FormStyles.form__item_wrap}>
                    <div className={FormStyles.input__wrap}>
                        <input
                            id="email"
                            type="email"
                            placeholder="Email Address"
                            required
                        />
                    </div>
                    <span className={FormStyles.error__message}>First Name cannot be empty</span>
                </div>

                <div className={FormStyles.form__item_wrap}>
                    <div className={FormStyles.input__wrap}>
                        <input
                            id="password"
                            type="password"
                            placeholder="Password"
                            required
                        />
                    </div>
                    <span className={FormStyles.error__message}>First Name cannot be empty</span>
                </div>

                <button
                    type="submit"
                    className={FormStyles.btn__submit}
                >
                    CLAIM YOUR FREE TRIAL
                </button>
            </form>
            <div className={FormStyles.register__condition}>
                By clicking the button, you are agreeing
                to our <a href="#">Terms and
                Services</a>
            </div>
        </div>

    )
}

export default Form;
import React, { useEffect, useState } from "react";
import formStyles from "./form.module.scss";

const initialState = {
  isSubmitted: false,
  isFormValid: true,

  form: {
    firstName: {
      value: "",
      isValid: false,
      isTouched: false,
    },
    lastName: {
      value: "",
      isValid: false,
      isTouched: false,
    },
    email: {
      value: "",
      isValid: false,
      isTouched: false,
    },
    password: {
      value: "",
      isValid: false,
      isTouched: false,
    },
  },
};

const isValidInput = (type, value) => {
  switch (type) {
    case "firstName":
      return (value && value.length && value.trim().length) > 0;
    case "lastName":
      return (value && value.length && value.trim().length) > 0;
    case "email":
      return (
        (value && value.length && value.trim().length) > 0 &&
        /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(value)
      );
    case "password":
      return (value && value.length && value.trim().length) > 0;
  }
};

const Form = () => {
  const [form, setForm] = useState(initialState);

  const handleInputChange = (e) => {
    const inputEl = e.target;
    const name = inputEl.name;
    const value = inputEl.value;

    setForm((data) => ({
      ...data,
      isSubmitted: false,
      isFormValid: true,

      form: {
        ...data.form,
        [name]: {
          ...data.form[name],
          value,
          isTouched: false,
          isValid: isValidInput(name, value),
        },
      },
    }));
  };

  const handleTouched = (e) => {
    const inputEl = e.target;
    const name = inputEl.name;

    setForm((data) => ({
      ...data,
      form: {
        ...data.form,
        [name]: {
          ...data.form[name],
          isTouched: true,
        },
      },
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const isFormValid = Object.keys(form.form).every(
      (el) => form.form[el].isValid
    );

    setForm((data) => ({
      ...data,
      isSubmitted: true,
      isFormValid,
    }));

    if (!isFormValid) {
      return;
    }

    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data: form,
      }),
    })
      .then((data) => {
        setForm(initialState);
      })

      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div className={formStyles.form__wrap}>
      <form
        noValidate
        className={formStyles.register__form}
        onSubmit={handleFormSubmit}
      >
        <div className={formStyles.form__item_wrap}>
          <div
            className={
              form.isSubmitted && !form.form.firstName.isValid
                ? `${formStyles.input__wrap} ${formStyles.error}`
                : formStyles.input__wrap
            }
          >
            <input
              id="firstname"
              type="text"
              placeholder="First Name"
              required
              name="firstName"
              value={form.form.firstName.value}
              onInput={handleInputChange}
              onBlur={handleTouched}
            />
          </div>
          {form.isSubmitted && !form.form.firstName.isValid ? (
            <span className={formStyles.error__message}>
              First Name cannot be empty
            </span>
          ) : null}
        </div>

        <div className={formStyles.form__item_wrap}>
          <div
            className={
              form.isSubmitted && !form.form.lastName.isValid
                ? `${formStyles.input__wrap} ${formStyles.error}`
                : formStyles.input__wrap
            }
          >
            <input
              id="lastName"
              type="text"
              placeholder="Last Name"
              required
              name="lastName"
              value={form.form.lastName.value}
              onInput={handleInputChange}
              onBlur={handleTouched}
            />
          </div>
          {form.isSubmitted && !form.form.lastName.isValid ? (
            <span className={formStyles.error__message}>
              Last Name cannot be empty
            </span>
          ) : null}
        </div>
        <div className={formStyles.form__item_wrap}>
          <div
            className={
              form.isSubmitted && !form.form.email.isValid
                ? `${formStyles.input__wrap} ${formStyles.error}`
                : formStyles.input__wrap
            }
          >
            <input
              id="email"
              type="email"
              placeholder="Email Address"
              required
              name="email"
              value={form.form.email.value}
              onInput={handleInputChange}
              onBlur={handleTouched}
            />
          </div>
          {form.isSubmitted && !form.form.email.isValid ? (
            <span className={formStyles.error__message}>
              Looks like this is not an email
            </span>
          ) : null}
        </div>

        <div className={formStyles.form__item_wrap}>
          <div
            className={
              form.isSubmitted && !form.form.password.isValid
                ? `${formStyles.input__wrap} ${formStyles.error}`
                : formStyles.input__wrap
            }
          >
            <input
              id="password"
              type="password"
              placeholder="Password"
              required
              name="password"
              value={form.form.password.value}
              onInput={handleInputChange}
              onBlur={handleTouched}
            />
          </div>
          {form.isSubmitted && !form.form.password.isValid ? (
            <span className={formStyles.error__message}>
              Password cannot be empty
            </span>
          ) : null}
        </div>
        <button
          type="submit"
          className={formStyles.btn__submit}
          disabled={form.isSubmitted}
        >
          CLAIM YOUR FREE TRIAL
        </button>
      </form>
      <div className={formStyles.register__condition}>
        By clicking the button, you are agreeing to our{" "}
        <a href="#">Terms and Services</a>
      </div>
    </div>
  );
};

export default Form;

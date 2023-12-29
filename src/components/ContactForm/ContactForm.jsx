import React, { Component } from 'react';
import css from './ContactForm.module.css';

class ContactForm extends Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.onAddClick} className={css.formData}>
          <label>
            <span className={css.labelTitleName}>Name:</span>
            <input
              type="text"
              placeholder="Anna"
              name="name"
              onChange={this.props.handleChange}
              pattern="^[A-Za-z ]*$"
              required
            />
          </label>
          <label>
            <span className={css.labelTitleNumber}>Number:</span>
            <input
              type="tel"
              placeholder="50102050"
              name="number"
              onChange={this.props.handleNumber}
              pattern="[0-9]*"
              required
            />
          </label>

          <button type="submit" className={css.btn}>
            Add contact
          </button>
        </form>
      </div>
    );
  }
}

export { ContactForm };

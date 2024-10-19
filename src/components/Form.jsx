import { useState } from 'react';
import { validateEmail } from '../utils/helpers';

function Form() {
  // Create state variables for the fields in the form
  const [email, setEmail] = useState('');
  const [name, setName] = useState(''); 
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Update the state based on the name of the input
    if (name === 'email') {
        setEmail(value);
        // Validate email as it is entered
        if (!validateEmail(value)) {
          setErrorMessage('Email is invalid');
        } else {
          setErrorMessage(''); // Clear error if valid
        }
      } else if (name === 'name') {
        setName(value);
      } else if (name === 'message') {
        setMessage(value);
      }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setErrorMessage('');

    // Validate email and name
    if (!validateEmail(email) || !name) {
        setErrorMessage('Email or name is invalid');
        return;
    }
    if (!message) {
        setErrorMessage('Message is required');
        return;
    }
    alert(`Thank you for your message ${name}`);

    // Clear the form on successful submission
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="form-container">
      <form className="form" onSubmit={handleFormSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            value={name}
            name="name"
            onChange={handleInputChange}
            type="text"
            placeholder="Enter your name"
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            value={email}
            name="email"
            onChange={handleInputChange}
            type="email"
            placeholder="Enter your email"
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            value={message}
            name="message"
            onChange={handleInputChange}
            placeholder="Enter your message"
            rows="4"
          />
        </div>

        <button type="submit">Submit</button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
  );
}

export default Form;
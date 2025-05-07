import { useState } from 'react';
import axios from 'axios';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post(axios.post('http://localhost:5000/contact'), formData);
    alert('Message sent!');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Name" onChange={e => setFormData({ ...formData, name: e.target.value })} />
      <input placeholder="Email" onChange={e => setFormData({ ...formData, email: e.target.value })} />
      <textarea placeholder="Message" onChange={e => setFormData({ ...formData, message: e.target.value })}></textarea>
      <button type="submit">Send</button>
    </form>
  );
};

export default Contact;

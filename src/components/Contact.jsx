import React from 'react';

const Contact = () => (
  <section id="contact" className="p-8 bg-white text-center">
    <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
    <p className="text-gray-700 mb-6">Feel free to reach out to us for any inquiries.</p>
    <form className="max-w-md mx-auto">
      <div className="mb-4">
        <input type="text" placeholder="Name" className="w-full p-2 border border-gray-300 rounded" />
      </div>
      <div className="mb-4">
        <input type="email" placeholder="Email" className="w-full p-2 border border-gray-300 rounded" />
      </div>
      <div className="mb-4">
        <textarea placeholder="Message" className="w-full p-2 border border-gray-300 rounded"></textarea>
      </div>
      <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded">Send Message</button>
    </form>
  </section>
);

export default Contact;

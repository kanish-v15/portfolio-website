import React, { useState } from 'react';
import { Send } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
          Name
        </label>
        <input
          type="text"
          id="name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-700 focus:border-violet-500 focus:ring-1 focus:ring-violet-500 outline-none transition-colors"
          required
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-700 focus:border-violet-500 focus:ring-1 focus:ring-violet-500 outline-none transition-colors"
          required
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
          Message
        </label>
        <textarea
          id="message"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          rows={5}
          className="w-full px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-700 focus:border-violet-500 focus:ring-1 focus:ring-violet-500 outline-none transition-colors"
          required
        />
      </div>
      <button
        type="submit"
        className="w-full bg-gradient-to-r from-violet-500 to-emerald-500 text-white py-3 px-6 rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
      >
        Send Message
        <Send className="w-5 h-5" />
      </button>
    </form>
  );
};

export default ContactForm;
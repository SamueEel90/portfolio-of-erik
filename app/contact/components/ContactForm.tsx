'use client';
import React, { useState } from "react";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    message: "",
  });

  const [status, setStatus] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Odosielam...");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("Správa bola úspešne odoslaná ✅");
        setFormData({ name: "", email: "", date: "", message: "" });
      } else {
        setStatus("❌ Niečo sa pokazilo, skúste znova.");
      }
    } catch (error) {
      setStatus("❌ Chyba pri odosielaní.");
    }
  };

  // Tailwind placeholder color class for text-secondary
  const placeholderClass = "placeholder:text-secondary";

  return (
    <div className="flex justify-center items-center ">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-4xl space-y-6 shadow-md rounded-2xl p-6"
      >
        <div>
          <label className="block text-xl font-medium text-light-gray glow-pink">Meno a priezvisko</label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="Zadajte vaše meno"
            className={`mt-1 block w-full border border-accent-pink rounded-lg p-3 focus:ring-1 focus:ring-dark-gray focus:outline-none ${placeholderClass}`}
          />
        </div>

        <div>
          <label className="block text-xl font-medium text-light-gray glow-pink">Email</label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="Váš email"
            className={`mt-1 block w-full border border-accent-pink rounded-lg p-3 focus:ring-1 focus:ring-dark-gray focus:outline-none ${placeholderClass}`}
          />
        </div>

        <div>
          <label className="block text-xl font-medium text-light-gray glow-pink">Dátum</label>
          <input
            type="date"
            name="date"
            required
            value={formData.date}
            onChange={handleChange}
            placeholder="Vyberte dátum"
            className={`mt-1 block w-full border border-accent-pink rounded-lg p-3 focus:ring-1 focus:ring-dark-gray focus:outline-none ${placeholderClass}`}
          />
        </div>

        <div>
          <label className="block text-xl font-medium text-light-gray glow-pink">Správa</label>
          <textarea
            name="message"
            rows={5}
            required
            value={formData.message}
            onChange={handleChange}
            placeholder="Vaša správa"
            className={`mt-1 text-lg block w-full border border-light-gray rounded-lg p-3 focus:ring-1 focus:ring-dark-gray focus:outline-none ${placeholderClass}`}
          />
        </div>

        {/* Centered Button */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="w-1/2 mt-10 text-secondary py-3 border border-accent-pink rounded-3xl hover:bg-gray-800 transition text-2xl"
          >
            Odoslať
          </button>
        </div>

        {status && <p className="text-center text-sm mt-4">{status}</p>}
      </form>
    </div>
  );
};

export default ContactForm;
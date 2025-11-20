import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, MapPin, Mail, Phone } from "lucide-react";
import emailjs from "@emailjs/browser";

import { HERO_CONTENT } from "../constants";

const Contact: React.FC = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_zghyvy9",
        "template_x8iniy4",
        {
          from_name: form.name,
          to_name: "Solomon Assefa",
          from_email: form.email,
          to_email: "assefas146@gmail.com",
          message: form.message,
        },
        "tGp9d_HTHQecJ2OHe"
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");
          setForm({ name: "", email: "", message: "" });
        },
        (error) => {
          setLoading(false);
          console.error(error);
          alert("Something went wrong. Please try again.");
        }
      );
  };

  return (
    <section id="contact" className="py-24 bg-darker relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Let's Create Something Extraordinary
          </h2>
          <p className="text-slate-400">
            Whether you have a question or just want to say hi, I'll try my best
            to get back to you!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 bg-slate-900 rounded-3xl overflow-hidden border border-slate-800 shadow-2xl">
          {/* Contact Info */}
          <div className="bg-slate-800/50 p-10 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold text-white mb-8">
                Contact Information
              </h3>
              <div className="space-y-8">
                <div className="flex items-start gap-4 text-slate-300">
                  <Mail className="text-primary shrink-0" />
                  <div>
                    <p className="text-sm text-slate-500 mb-1">Email</p>
                    <a
                      href={`mailto:${HERO_CONTENT.email}`}
                      className="hover:text-white transition-colors"
                    >
                      {HERO_CONTENT.email}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4 text-slate-300">
                  <Phone className="text-primary shrink-0" />
                  <div>
                    <p className="text-sm text-slate-500 mb-1">Phone</p>
                    <p>+251 92 834 4248</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 text-slate-300">
                  <MapPin className="text-primary shrink-0" />
                  <div>
                    <p className="text-sm text-slate-500 mb-1">Location</p>
                    <p>Addis Ababa, Ethiopia</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <p className="text-slate-500 text-sm mb-4">Connect with me</p>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center text-white hover:bg-primary transition-colors cursor-pointer">
                  <span className="font-bold">In</span>
                </div>
                <div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center text-white hover:bg-primary transition-colors cursor-pointer">
                  <span className="font-bold">X</span>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2 p-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="text-sm font-medium text-slate-400"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-3 bg-darker border border-slate-700 rounded-lg focus:outline-none focus:border-primary text-white transition-colors"
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-slate-400"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-darker border border-slate-700 rounded-lg focus:outline-none focus:border-primary text-white transition-colors"
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-sm font-medium text-slate-400"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-darker border border-slate-700 rounded-lg focus:outline-none focus:border-primary text-white transition-colors resize-none"
                  placeholder="Tell me about your project..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className={`inline-flex items-center justify-center px-8 py-4 bg-primary hover:bg-blue-600 text-white font-bold rounded-lg transition-all shadow-lg shadow-blue-500/25 w-full md:w-auto ${
                  loading ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                {loading ? "Sending..." : "Send Message"}{" "}
                <Send size={18} className="ml-2" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
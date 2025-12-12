import React, { forwardRef, useRef, useState } from "react";
import { Mail, Calendar, Send } from "lucide-react";
import emailjs from "@emailjs/browser";

export const ContactSection = forwardRef<HTMLElement>((props, ref) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    content: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(formData);
  };

  const sendEmail = (e) => {
    e.preventDefault(); // zatrzymuje odświeżanie strony

    if (!formData.content || !formData.email || !formData.name) {
      alert("Your email is incomplete. Please fill in all required fields.");
      return null;
    }

    emailjs
      .send(
        "service_5zvpylq", // np. service_xxxxx
        "template_vutp8bj", // np. template_xxxxx
        formData,
        "mhX_fa3WAJL3agjFu" // np. user_xxxxx
      )
      .then(
        (result) => {
          console.log("Sent:", result.text);
          alert("Email send!");
          setFormData({ name: "", email: "", content: "" });
        },
        (error) => {
          console.log("Error:", error.text);
          alert("Error while sending email");
        }
      );
  };

  return (
    <section ref={ref} className="py-24 border-t border-cyan-500/20 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-160 h-160 bg-cyan-500/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-full mb-4 text-purple-400">
              {`Contact`}
            </div>
            <h2 className="text-4xl md:text-5xl mb-4">
              {`Feel Free to Reach Out Anytime!`}
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              {`I’m always open to new projects, collaborations, or just a friendly chat about ideas. If you have a website in mind or need help with development, feel free to message me — I usually reply within a few hours.`}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div className="bg-gray-900/50 backdrop-blur-sm border border-cyan-500/30 rounded-2xl p-8">
              <form onSubmit={sendEmail} className="space-y-6">
                <div>
                  <label className="block text-sm text-gray-400 mb-2">
                    {`Name`}
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    name="name"
                    placeholder="Name"
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:border-cyan-500 transition-colors duration-300 text-white placeholder-gray-500"
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-400 mb-2">
                    {`Email`}
                  </label>
                  <input
                    onChange={handleChange}
                    value={formData.email}
                    name="email"
                    type="email"
                    placeholder="Email"
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:border-cyan-500 transition-colors duration-300 text-white placeholder-gray-500"
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-400 mb-2">
                    {`Content`}
                  </label>
                  <textarea
                    rows={5}
                    value={formData.content}
                    onChange={handleChange}
                    name="content"
                    placeholder="Project content"
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:border-cyan-500 transition-colors duration-300 text-white placeholder-gray-500 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-linear-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400 transition-all duration-300 rounded-lg flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/50"
                >
                  {`Submit`}
                  <Send className="w-5 h-5" />
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="bg-gray-900/50 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-8 hover:border-purple-500/50 transition-colors duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-xl mb-2">{`Send me an Email`}</h3>
                    <p className="text-gray-400 mb-2">{`The quickest way to reach me. I’m most responsive here.`}</p>
                    <a
                      href="mailto:example@email.com"
                      className="text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      {`dawidkrasinski14@gmail.com`}
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-gray-900/50 backdrop-blur-sm border border-pink-500/30 rounded-2xl p-8 hover:border-pink-500/50 transition-colors duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-pink-500/10 rounded-lg flex items-center justify-center shrink-0">
                    <Calendar className="w-6 h-6 text-pink-400" />
                  </div>
                  <div>
                    <h3 className="text-xl mb-2">{`Book a Call (Coming Soon)`}</h3>
                    <p className="text-gray-400 mb-2">{`Soon you’ll be able to schedule a meeting directly from my website.`}</p>
                    <a
                      href="#"
                      className="text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      {`######`}
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-linear-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/30 rounded-2xl p-8">
                <h3 className="text-xl mb-3">{`Availability & Working Hours`}</h3>
                <p className="text-gray-400 leading-relaxed">
                  {`I’m available for freelance projects and collaborations. I work in the CET timezone and usually respond the same day or within a few hours.`}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

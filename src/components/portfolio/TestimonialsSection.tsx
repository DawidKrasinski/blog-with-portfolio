import React from "react";
import { Quote } from "lucide-react";

export function TestimonialsSection() {
  const testimonials = [
    {
      quote: "{quote describing positive experience}",
      name: "{name of the person}",
      role: "{role of the person}",
      company: "{company name}",
      gradient: "from-cyan-500/40 to-blue-500/40",
    },
    {
      quote: "{quote describing positive experience}",
      name: "{name of the person}",
      role: "{role of the person}",
      company: "{company name}",
      gradient: "from-purple-500/20 to-pink-500/20",
    },
    {
      quote: "{quote describing positive experience}",
      name: "{name of the person}",
      role: "{role of the person}",
      company: "{company name}",
      gradient: "from-pink-500/20 to-rose-500/20",
    },
  ];

  return (
    <section className="py-24 border-t border-cyan-500/20 relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full mb-4 text-cyan-400">
            {`{section label}`}
          </div>
          <h2 className="text-4xl md:text-5xl mb-4">
            {`{section headline about client testimonials}`}
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            {`{subheadline about client satisfaction or results}`}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`p-8 bg-linear-to-br ${testimonial.gradient} backdrop-blur-sm border border-gray-800 rounded-2xl hover:border-cyan-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20 relative`}
            >
              <Quote className="w-12 h-12 text-cyan-400/30 mb-4" />

              <p className="text-gray-300 leading-relaxed mb-6 italic">
                "{testimonial.quote}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-linear-to-br from-cyan-500 to-purple-500 rounded-full flex items-center justify-center">
                  <span>{`{initials}`}</span>
                </div>
                <div>
                  <div className="text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">
                    {testimonial.role}
                  </div>
                  <div className="text-sm text-cyan-400">
                    {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

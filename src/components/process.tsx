import { MessageSquare, FileCheck, Settings, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    title: "Consultation",
    description: "Book a free consultation to discuss your requirements and get expert advice.",
    step: "01",
  },
  {
    icon: FileCheck,
    title: "Documentation",
    description: "We guide you through the documentation process with a simple checklist.",
    step: "02",
  },
  {
    icon: Settings,
    title: "Processing",
    description: "Our experts handle all paperwork, filings, and government interactions.",
    step: "03",
  },
  {
    icon: CheckCircle,
    title: "Completion",
    description: "Receive your certificates and ongoing compliance support from our team.",
    step: "04",
  },
];

export function Process() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-2 bg-[#14b8a6]/20 rounded-full text-sm text-[#14b8a6] mb-4">
            Our Process
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold mb-4">
            Simple 4-Step Process
          </h2>
          <p className="text-lg text-gray-300">
            From consultation to completion, we make tax compliance seamless and stress-free.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connection Lines */}
          <div className="hidden lg:block absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#14b8a6]/30 to-transparent" />
          
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Step Card */}
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-[#14b8a6]/50 transition-all duration-300 hover:shadow-2xl hover:shadow-[#14b8a6]/20">
                {/* Step Number */}
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-[#14b8a6] to-[#0d9488] rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold">{step.step}</span>
                </div>

                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-to-br from-[#14b8a6]/20 to-[#0d9488]/20 rounded-xl flex items-center justify-center mb-6">
                  <step.icon className="w-8 h-8 text-[#14b8a6]" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{step.description}</p>
              </div>

              {/* Arrow for larger screens */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 -right-4 z-10">
                  <div className="w-8 h-8 bg-[#0f172a] rotate-45 border-r border-t border-[#14b8a6]/30" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <button className="bg-[#14b8a6] hover:bg-[#0f766e] text-white px-8 py-4 rounded-lg font-medium transition-colors inline-flex items-center gap-2 group">
            Start Your Journey Today
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

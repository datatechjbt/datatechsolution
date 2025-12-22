import { FileText, Receipt, DollarSign, Building2, Users, TrendingUp } from "lucide-react";
import { Card } from "./ui/card";

const services = [
  {
    icon: FileText,
    title: "ITR Filing",
    description: "Hassle-free income tax return filing for individuals and businesses with maximum refunds.",
    color: "from-[#14b8a6] to-[#0d9488]",
  },
  {
    icon: Receipt,
    title: "GST Services",
    description: "Complete GST registration, filing, and compliance solutions for seamless operations.",
    color: "from-[#0f172a] to-[#334155]",
  },
  {
    icon: DollarSign,
    title: "TDS/TCS",
    description: "Expert TDS and TCS return filing, deduction, and compliance management services.",
    color: "from-[#10b981] to-[#059669]",
  },
  {
    icon: TrendingUp,
    title: "Tax Planning",
    description: "Strategic tax planning and optimization to minimize liabilities and maximize savings.",
    color: "from-[#0891b2] to-[#0e7490]",
  },
  {
    icon: Building2,
    title: "Business Registrations",
    description: "End-to-end company registration services including Pvt Ltd, LLP, and Proprietorship.",
    color: "from-[#6366f1] to-[#4f46e5]",
  },
  {
    icon: Users,
    title: "Professional Consultations",
    description: "One-on-one expert consultations for all your taxation and compliance queries.",
    color: "from-[#f59e0b] to-[#d97706]",
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-2 bg-[#14b8a6]/10 rounded-full text-sm text-[#14b8a6] mb-4">
            Our Services
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-[#0f172a] mb-4">
            Comprehensive Tax & Compliance Solutions
          </h2>
          <p className="text-lg text-[#64748b]">
            From ITR filing to business registrations, we provide end-to-end taxation services tailored for Indian businesses and individuals.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group p-8 hover:shadow-xl transition-all duration-300 border-gray-100 hover:border-[#14b8a6]/30 cursor-pointer"
            >
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <service.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#0f172a] mb-3">{service.title}</h3>
              <p className="text-[#64748b] leading-relaxed">{service.description}</p>
              <div className="mt-6 flex items-center text-[#14b8a6] opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-sm font-medium">Learn More</span>
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

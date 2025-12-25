import { Shield, Clock, Award, Headphones, Target, TrendingUp } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const features = [
  {
    icon: Shield,
    title: "100% Compliance Guarantee",
    description: "Stay fully compliant with the latest tax laws and regulations.",
  },
  {
    icon: Clock,
    title: "Quick Turnaround",
    description: "Fast and efficient service delivery without compromising quality.",
  },
  {
    icon: Award,
    title: "Expert Team",
    description: "Certified professionals with 15+ years of industry experience.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Round-the-clock assistance for all your tax and compliance queries.",
  },
  {
    icon: Target,
    title: "Personalized Solutions",
    description: "Tailored services that match your specific business needs.",
  },
  {
    icon: TrendingUp,
    title: "Growth Focused",
    description: "Strategic planning to help your business scale efficiently.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#f8fafc] to-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Image */}
          <div className="relative">
            <div className="absolute -top-6 -left-6 w-full h-full bg-gradient-to-br from-[#14b8a6]/20 to-[#0f172a]/20 rounded-2xl" />
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1759310610325-2c7cb621e5e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGhhbmRzaGFrZSUyMHRydXN0fGVufDF8fHx8MTc2NjQwMjAxOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Business Partnership"
              className="relative rounded-2xl shadow-2xl w-full object-cover"
            />
            
            {/* Floating Stats Card */}
            <div className="absolute -bottom-6 right-4 lg:-bottom-8 lg:-right-8 bg-white rounded-2xl shadow-2xl p-6 border border-gray-100">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-[#14b8a6] to-[#0d9488] rounded-xl flex items-center justify-center">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-[#0f172a]">ISO Certified</div>
                  <div className="text-sm text-[#64748b]">Quality Assured</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-8">
            <div>
              <div className="inline-block px-4 py-2 bg-[#14b8a6]/10 rounded-full text-sm text-[#14b8a6] mb-4">
                Why Choose Us
              </div>
              <h2 className="text-3xl lg:text-5xl font-bold text-[#0f172a] mb-4">
                Your Trusted Partner for Tax Excellence
              </h2>
              <p className="text-lg text-[#64748b]">
                With over 15 years of experience serving thousands of clients across India, we deliver unmatched expertise and reliability in taxation and compliance.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#14b8a6]/10 to-[#0f172a]/10 rounded-lg flex items-center justify-center">
                      <feature.icon className="w-6 h-6 text-[#14b8a6]" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0f172a] mb-1">{feature.title}</h4>
                    <p className="text-sm text-[#64748b]">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
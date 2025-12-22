import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#f8fafc] via-white to-[#f0fdfa]" />
      
      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-[#14b8a6]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#0f172a]/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#14b8a6]/10 rounded-full border border-[#14b8a6]/20">
              <CheckCircle2 className="w-4 h-4 text-[#14b8a6]" />
              <span className="text-sm text-[#0f172a]">India's Trusted Tax Partner</span>
            </div>

            <h1 className="text-4xl lg:text-6xl font-bold text-[#0f172a] leading-tight">
              Simplifying Taxation & Compliance for India
            </h1>

            <p className="text-lg text-[#64748b] leading-relaxed">
              Expert solutions for ITR filing, GST, TDS/TCS, business registrations, and professional tax consultations. Your trusted partner for seamless compliance.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-[#14b8a6] hover:bg-[#0f766e] text-white px-8 py-6 text-lg group">
                Book Free Consultation
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" className="border-[#0f172a] text-[#0f172a] hover:bg-[#0f172a] hover:text-white px-8 py-6 text-lg">
                Explore Services
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
              <div>
                <div className="text-3xl font-bold text-[#0f172a]">5000+</div>
                <div className="text-sm text-[#64748b]">Clients Served</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#0f172a]">15+</div>
                <div className="text-sm text-[#64748b]">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#0f172a]">98%</div>
                <div className="text-sm text-[#64748b]">Success Rate</div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-[#14b8a6]/20 to-[#0f172a]/20 rounded-3xl blur-2xl" />
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1674133623270-469ea4464ba9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHwzRCUyMGFic3RyYWN0JTIwZmluYW5jZSUyMGRhdGF8ZW58MXx8fHwxNzY2NDAyNzU3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="3D Finance Illustration"
              className="relative rounded-3xl shadow-2xl w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

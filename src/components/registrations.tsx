import { Building, Users2, Briefcase, Heart, Landmark, FileCheck } from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

const businessRegistrations = [
  {
    icon: Building,
    title: "Private Limited Company",
    description: "Limited liability with separate legal entity status.",
    features: ["Minimum 2 Directors", "Separate Legal Entity", "Limited Liability", "Easy Funding"],
    popular: true,
  },
  {
    icon: Users2,
    title: "LLP Registration",
    description: "Flexible structure with limited liability protection.",
    features: ["Minimum 2 Partners", "Low Compliance", "Tax Benefits", "Flexible Management"],
    popular: false,
  },
  {
    icon: Briefcase,
    title: "Proprietorship",
    description: "Simple structure for individual business owners.",
    features: ["Single Owner", "Easy Setup", "Complete Control", "Minimal Compliance"],
    popular: false,
  },
];

const ngoRegistrations = [
  {
    icon: Heart,
    title: "Trust Registration",
    description: "Ideal for charitable and religious activities.",
    features: ["Minimum 2 Trustees", "Tax Exemptions", "12A & 80G Benefits", "Perpetual Existence"],
    popular: true,
  },
  {
    icon: Landmark,
    title: "Society Registration",
    description: "Perfect for social welfare and cultural activities.",
    features: ["Minimum 7 Members", "Democratic Structure", "Government Grants", "Tax Benefits"],
    popular: false,
  },
  {
    icon: FileCheck,
    title: "Section 8 Company",
    description: "Non-profit company with corporate structure.",
    features: ["Limited Liability", "Corporate Benefits", "Tax Exemptions", "Professional Image"],
    popular: false,
  },
];

export function Registrations() {
  return (
    <section id="registrations" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-2 bg-[#14b8a6]/10 rounded-full text-sm text-[#14b8a6] mb-4">
            Registrations
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-[#0f172a] mb-4">
            Business & NGO Registrations Made Easy
          </h2>
          <p className="text-lg text-[#64748b]">
            Complete registration services for businesses and non-profit organizations with end-to-end support.
          </p>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="business" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12">
            <TabsTrigger value="business">Business Solutions</TabsTrigger>
            <TabsTrigger value="ngo">NGO & Institutions</TabsTrigger>
          </TabsList>

          {/* Business Registrations */}
          <TabsContent value="business">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {businessRegistrations.map((reg, index) => (
                <Card
                  key={index}
                  className={`p-8 hover:shadow-xl transition-all duration-300 border relative ${
                    reg.popular
                      ? "border-[#14b8a6] shadow-lg"
                      : "border-gray-100 hover:border-[#14b8a6]/30"
                  }`}
                >
                  {reg.popular && (
                    <div className="absolute -top-3 right-6 bg-gradient-to-r from-[#14b8a6] to-[#0d9488] text-white px-4 py-1 rounded-full text-xs font-medium">
                      Most Popular
                    </div>
                  )}
                  
                  <div className="w-14 h-14 bg-gradient-to-br from-[#14b8a6]/10 to-[#0f172a]/10 rounded-xl flex items-center justify-center mb-6">
                    <reg.icon className="w-7 h-7 text-[#14b8a6]" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-[#0f172a] mb-2">{reg.title}</h3>
                  <p className="text-[#64748b] mb-6">{reg.description}</p>
                  
                  <ul className="space-y-3 mb-6">
                    {reg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-[#64748b]">
                        <svg className="w-5 h-5 text-[#14b8a6] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className={`w-full ${
                      reg.popular
                        ? "bg-[#14b8a6] hover:bg-[#0f766e] text-white"
                        : "bg-[#f1f5f9] hover:bg-[#e2e8f0] text-[#0f172a]"
                    }`}
                  >
                    Get Started
                  </Button>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* NGO Registrations */}
          <TabsContent value="ngo">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {ngoRegistrations.map((reg, index) => (
                <Card
                  key={index}
                  className={`p-8 hover:shadow-xl transition-all duration-300 border relative ${
                    reg.popular
                      ? "border-[#14b8a6] shadow-lg"
                      : "border-gray-100 hover:border-[#14b8a6]/30"
                  }`}
                >
                  {reg.popular && (
                    <div className="absolute -top-3 right-6 bg-gradient-to-r from-[#14b8a6] to-[#0d9488] text-white px-4 py-1 rounded-full text-xs font-medium">
                      Recommended
                    </div>
                  )}
                  
                  <div className="w-14 h-14 bg-gradient-to-br from-[#14b8a6]/10 to-[#0f172a]/10 rounded-xl flex items-center justify-center mb-6">
                    <reg.icon className="w-7 h-7 text-[#14b8a6]" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-[#0f172a] mb-2">{reg.title}</h3>
                  <p className="text-[#64748b] mb-6">{reg.description}</p>
                  
                  <ul className="space-y-3 mb-6">
                    {reg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-[#64748b]">
                        <svg className="w-5 h-5 text-[#14b8a6] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className={`w-full ${
                      reg.popular
                        ? "bg-[#14b8a6] hover:bg-[#0f766e] text-white"
                        : "bg-[#f1f5f9] hover:bg-[#e2e8f0] text-[#0f172a]"
                    }`}
                  >
                    Get Started
                  </Button>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}

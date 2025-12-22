import { MapPin, Phone, Mail, Send } from "lucide-react";
import { Card } from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { Label } from "./ui/label";

const contactInfo = [
  {
    icon: Phone,
    title: "Call Us",
    details: ["+91 98765 43210", "+91 87654 32109"],
  },
  {
    icon: Mail,
    title: "Email Us",
    details: ["info@datatechsolutions.in", "support@datatechsolutions.in"],
  },
  {
    icon: MapPin,
    title: "Visit Us",
    details: ["123 Business District", "Mumbai, Maharashtra 400001"],
  },
];

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-[#f8fafc] to-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-2 bg-[#14b8a6]/10 rounded-full text-sm text-[#14b8a6] mb-4">
            Contact Us
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-[#0f172a] mb-4">
            Get in Touch with Our Experts
          </h2>
          <p className="text-lg text-[#64748b]">
            Have questions? Our team is here to help you with all your tax and compliance needs.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="p-8 border-gray-100">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      placeholder="Enter your name"
                      className="bg-[#f8fafc] border-gray-200"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      className="bg-[#f8fafc] border-gray-200"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      placeholder="+91 98765 43210"
                      className="bg-[#f8fafc] border-gray-200"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="service">Service Required</Label>
                    <select
                      id="service"
                      className="w-full px-3 py-2 bg-[#f8fafc] border border-gray-200 rounded-md text-[#0f172a] focus:outline-none focus:ring-2 focus:ring-[#14b8a6]"
                    >
                      <option>Select a service</option>
                      <option>ITR Filing</option>
                      <option>GST Services</option>
                      <option>TDS/TCS</option>
                      <option>Tax Planning</option>
                      <option>Company Registration</option>
                      <option>NGO Registration</option>
                      <option>Consultation</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your requirements..."
                    rows={5}
                    className="bg-[#f8fafc] border-gray-200"
                  />
                </div>

                <Button className="w-full bg-[#14b8a6] hover:bg-[#0f766e] text-white py-6 group">
                  Send Message
                  <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </Card>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="p-6 border-gray-100 hover:border-[#14b8a6]/30 transition-all hover:shadow-lg">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#14b8a6]/10 to-[#0d9488]/10 rounded-lg flex items-center justify-center">
                      <info.icon className="w-6 h-6 text-[#14b8a6]" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0f172a] mb-2">{info.title}</h4>
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-sm text-[#64748b]">
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              </Card>
            ))}

            {/* Business Hours */}
            <Card className="p-6 border-gray-100 bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white">
              <h4 className="font-bold mb-4">Business Hours</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-300">Monday - Friday</span>
                  <span>9:00 AM - 7:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Saturday</span>
                  <span>10:00 AM - 5:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Sunday</span>
                  <span className="text-[#14b8a6]">Closed</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

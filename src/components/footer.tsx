import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react";

const footerLinks = {
  services: [
    { label: "ITR Filing", href: "#services" },
    { label: "GST Services", href: "#services" },
    { label: "TDS/TCS", href: "#services" },
    { label: "Tax Planning", href: "#services" },
  ],
  company: [
    { label: "About Us", href: "#about" },
    { label: "Why Choose Us", href: "#why-choose-us" },
    { label: "Our Process", href: "#process" },
    { label: "Careers", href: "#careers" },
  ],
  registrations: [
    { label: "Pvt Ltd Company", href: "#registrations" },
    { label: "LLP Registration", href: "#registrations" },
    { label: "Trust Registration", href: "#registrations" },
    { label: "Society Registration", href: "#registrations" },
  ],
  resources: [
    { label: "Blog", href: "#blogs" },
    { label: "Tax Calculator", href: "#resources" },
    { label: "FAQs", href: "#faqs" },
    { label: "Contact Us", href: "#contact" },
  ],
};

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Instagram, href: "#", label: "Instagram" },
];

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-[#14b8a6] to-[#0d9488] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">D</span>
              </div>
              <div>
                <div className="text-xl font-bold">Datatech Solution</div>
                <div className="text-xs text-gray-400">Tax & Compliance Experts</div>
              </div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Your trusted partner for comprehensive taxation and compliance solutions across India. 
              Delivering excellence for over 15 years.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#14b8a6] transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-[#14b8a6] transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-[#14b8a6] transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Registrations */}
          <div>
            <h4 className="font-bold mb-4">Registrations</h4>
            <ul className="space-y-3">
              {footerLinks.registrations.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-[#14b8a6] transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-bold mb-4">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-[#14b8a6] transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="grid md:grid-cols-3 gap-6 mt-12 pt-12 border-t border-white/10">
          <div className="flex items-start gap-3">
            <Phone className="w-5 h-5 text-[#14b8a6] flex-shrink-0 mt-1" />
            <div>
              <div className="text-sm text-gray-400">Call Us</div>
              <div className="text-sm">033 6902 8800</div>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Mail className="w-5 h-5 text-[#14b8a6] flex-shrink-0 mt-1" />
            <div>
              <div className="text-sm text-gray-400">Email Us</div>
              <div className="text-sm">support@datatechsolution.in</div>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <MapPin className="w-5 h-5 text-[#14b8a6] flex-shrink-0 mt-1" />
            <div>
              <div className="text-sm text-gray-400">Visit Us</div>
              <div className="text-sm">Jibantala, Canning - II, 24 Pgs (S), West Bengal 743502</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <div>
              © 2024 Datatech Solutions. All rights reserved.
            </div>
            <div className="flex gap-6">
              <a href="#privacy" className="hover:text-[#14b8a6] transition-colors">
                Privacy Policy
              </a>
              <a href="#terms" className="hover:text-[#14b8a6] transition-colors">
                Terms of Service
              </a>
              <a href="#cookies" className="hover:text-[#14b8a6] transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

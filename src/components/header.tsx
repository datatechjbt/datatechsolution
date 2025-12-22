import { useState, useEffect } from "react";
import { ChevronDown, Menu, X, LogIn } from "lucide-react";
import { Button } from "./ui/button";

const menuItems = [
  {
    label: "Services",
    items: [
      { label: "ITR Filing", href: "#services" },
      { label: "GST Services", href: "#services" },
      { label: "TDS/TCS", href: "#services" },
      { label: "Tax Planning", href: "#services" },
    ],
  },
  {
    label: "Business Solutions",
    items: [
      { label: "Private Limited Company", href: "#registrations" },
      { label: "LLP Registration", href: "#registrations" },
      { label: "Proprietorship", href: "#registrations" },
    ],
  },
  {
    label: "NGO & Institutions",
    items: [
      { label: "Trust Registration", href: "#registrations" },
      { label: "Society Registration", href: "#registrations" },
      { label: "Section 8 Company", href: "#registrations" },
    ],
  },
  {
    label: "Consultations",
    href: "#contact",
  },
  {
    label: "Resources",
    items: [
      { label: "Blog", href: "#blogs" },
      { label: "Tax Calculator", href: "#resources" },
      { label: "Guides", href: "#resources" },
    ],
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-white/95 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-[#0f172a] to-[#14b8a6] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">D</span>
            </div>
            <div>
              <div className="text-xl font-bold text-[#0f172a]">Datatech Solutions</div>
              <div className="text-xs text-[#64748b]">Tax & Compliance Experts</div>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {menuItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.items && setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {item.items ? (
                  <>
                    <button className="flex items-center gap-1 text-[#1e293b] hover:text-[#14b8a6] transition-colors py-2">
                      {item.label}
                      <ChevronDown className="w-4 h-4" />
                    </button>
                    {activeDropdown === item.label && (
                      <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-100 py-2 animate-in fade-in slide-in-from-top-2 duration-200">
                        {item.items.map((subItem) => (
                          <a
                            key={subItem.label}
                            href={subItem.href}
                            className="block px-4 py-2 text-[#1e293b] hover:bg-[#f1f5f9] hover:text-[#14b8a6] transition-colors"
                          >
                            {subItem.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <a
                    href={item.href}
                    className="text-[#1e293b] hover:text-[#14b8a6] transition-colors"
                  >
                    {item.label}
                  </a>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-3">
            <button className="text-[#1e293b] hover:text-[#14b8a6] transition-colors flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-[#f1f5f9]">
              <LogIn className="w-4 h-4" />
              Login
            </button>
            <Button className="bg-[#14b8a6] hover:bg-[#0f766e] text-white px-6">
              Get Consultation
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-[#0f172a]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-100 animate-in slide-in-from-top duration-200">
            {menuItems.map((item) => (
              <div key={item.label} className="py-2">
                {item.items ? (
                  <>
                    <button
                      className="flex items-center justify-between w-full text-[#1e293b] py-2"
                      onClick={() =>
                        setActiveDropdown(
                          activeDropdown === item.label ? null : item.label
                        )
                      }
                    >
                      {item.label}
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${
                          activeDropdown === item.label ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {activeDropdown === item.label && (
                      <div className="pl-4 py-2 space-y-2">
                        {item.items.map((subItem) => (
                          <a
                            key={subItem.label}
                            href={subItem.href}
                            className="block text-[#64748b] hover:text-[#14b8a6] py-1"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {subItem.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <a
                    href={item.href}
                    className="block text-[#1e293b] hover:text-[#14b8a6] py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                )}
              </div>
            ))}
            <div className="pt-4">
              <Button className="w-full bg-[#14b8a6] hover:bg-[#0f766e] text-white mb-3">
                Get Consultation
              </Button>
              <button className="w-full text-[#1e293b] border border-gray-200 hover:border-[#14b8a6] hover:text-[#14b8a6] transition-colors flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg">
                <LogIn className="w-4 h-4" />
                Login
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
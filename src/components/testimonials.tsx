import { Star, Quote } from "lucide-react";
import { Card } from "./ui/card";

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "Founder, Tech Startup",
    content: "Datatech Solutions made our Pvt Ltd registration incredibly smooth. Their team handled everything professionally, and we got our incorporation certificate within 10 days!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1758518732175-5d608ba3abdf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHRlYW18ZW58MXx8fHwxNzY2MzE1MzMyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    name: "Priya Sharma",
    role: "E-commerce Business Owner",
    content: "Best GST and ITR filing service I've used! They saved me thousands in taxes through proper planning. Highly recommend their expertise and professionalism.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1758518732175-5d608ba3abdf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHRlYW18ZW58MXx8fHwxNzY2MzE1MzMyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    name: "Amit Patel",
    role: "NGO Director",
    content: "Their trust registration service was exceptional. The team guided us through every step and helped us get 12A and 80G certification without any hassle.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1758518732175-5d608ba3abdf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHRlYW18ZW58MXx8fHwxNzY2MzE1MzMyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    name: "Sneha Reddy",
    role: "Freelance Consultant",
    content: "Excellent tax planning advice! They helped me structure my freelance income efficiently and ensured complete compliance. Very responsive and knowledgeable team.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1758518732175-5d608ba3abdf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHRlYW18ZW58MXx8fHwxNzY2MzE1MzMyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    name: "Vikram Singh",
    role: "Manufacturing Business",
    content: "We've been working with Datatech for 3 years now. Their ongoing compliance support and TDS filing services are impeccable. Truly a reliable partner!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1758518732175-5d608ba3abdf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHRlYW18ZW58MXx8fHwxNzY2MzE1MzMyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    name: "Meera Joshi",
    role: "Restaurant Owner",
    content: "Professional, efficient, and always available. They handled our LLP registration and GST compliance seamlessly. Best decision for our business!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1758518732175-5d608ba3abdf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHRlYW18ZW58MXx8fHwxNzY2MzE1MzMyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
];

export function Testimonials() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#f8fafc] to-white overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-2 bg-[#14b8a6]/10 rounded-full text-sm text-[#14b8a6] mb-4">
            Testimonials
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-[#0f172a] mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-[#64748b]">
            Join thousands of satisfied clients who trust us with their taxation and compliance needs.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="p-8 hover:shadow-xl transition-all duration-300 border-gray-100 hover:border-[#14b8a6]/30 relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-10">
                <Quote className="w-16 h-16 text-[#14b8a6]" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#f59e0b] text-[#f59e0b]" />
                ))}
              </div>

              {/* Content */}
              <p className="text-[#64748b] mb-6 italic leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                <div className="w-12 h-12 bg-gradient-to-br from-[#14b8a6] to-[#0d9488] rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="font-bold text-[#0f172a]">{testimonial.name}</div>
                  <div className="text-sm text-[#64748b]">{testimonial.role}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 pt-16 border-t border-gray-200">
          <div className="text-center">
            <div className="text-4xl font-bold text-[#14b8a6] mb-2">5000+</div>
            <div className="text-sm text-[#64748b]">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-[#14b8a6] mb-2">4.9/5</div>
            <div className="text-sm text-[#64748b]">Client Rating</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-[#14b8a6] mb-2">98%</div>
            <div className="text-sm text-[#64748b]">Success Rate</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-[#14b8a6] mb-2">24/7</div>
            <div className="text-sm text-[#64748b]">Support Available</div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { Calendar, ArrowRight, Clock } from "lucide-react";
import { Card } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const blogs = [
  {
    title: "Understanding New Tax Regime vs Old Tax Regime for FY 2024-25",
    excerpt: "A comprehensive guide to help you choose the best tax regime for maximum savings this financial year.",
    date: "Dec 15, 2024",
    readTime: "5 min read",
    category: "Tax Planning",
    image: "https://images.unsplash.com/photo-1718220216044-006f43e3a9b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzY2Mzk5NDAzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    title: "GST Compliance Checklist for Small Businesses in India",
    excerpt: "Essential GST filing requirements and deadlines every small business owner must know to avoid penalties.",
    date: "Dec 10, 2024",
    readTime: "7 min read",
    category: "GST",
    image: "https://images.unsplash.com/photo-1718220216044-006f43e3a9b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzY2Mzk5NDAzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    title: "Private Limited Company vs LLP: Which is Right for Your Startup?",
    excerpt: "Detailed comparison of company structures to help entrepreneurs make the right choice for their business.",
    date: "Dec 5, 2024",
    readTime: "6 min read",
    category: "Business Setup",
    image: "https://images.unsplash.com/photo-1718220216044-006f43e3a9b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzY2Mzk5NDAzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
];

export function Blogs() {
  return (
    <section id="blogs" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-4">
          <div>
            <div className="inline-block px-4 py-2 bg-[#14b8a6]/10 rounded-full text-sm text-[#14b8a6] mb-4">
              Resources
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold text-[#0f172a] mb-2">
              Latest Insights & Updates
            </h2>
            <p className="text-lg text-[#64748b]">
              Stay informed with the latest tax laws, compliance tips, and business guides.
            </p>
          </div>
          <button className="text-[#14b8a6] font-medium flex items-center gap-2 hover:gap-3 transition-all group">
            View All Articles
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-xl transition-all duration-300 border-gray-100 hover:border-[#14b8a6]/30 cursor-pointer group"
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <ImageWithFallback
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 bg-[#14b8a6] text-white px-3 py-1 rounded-full text-xs font-medium">
                  {blog.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Meta */}
                <div className="flex items-center gap-4 text-xs text-[#64748b] mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {blog.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {blog.readTime}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-[#0f172a] mb-3 group-hover:text-[#14b8a6] transition-colors line-clamp-2">
                  {blog.title}
                </h3>

                {/* Excerpt */}
                <p className="text-[#64748b] text-sm mb-4 line-clamp-2">{blog.excerpt}</p>

                {/* Read More */}
                <button className="text-[#14b8a6] font-medium text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                  Read More
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

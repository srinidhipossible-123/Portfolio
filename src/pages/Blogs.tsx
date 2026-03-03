import { useState, useMemo } from "react";
import { blogs, Blog } from "@/data/blogs";
import { Search, Calendar, Clock, ArrowRight, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ThunderBackground } from "@/components/ThunderBackground";

const Blogs = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const filteredBlogs = useMemo(() => {
    if (!blogs || blogs.length === 0) return [];
    if (!searchQuery.trim()) return blogs;

    const query = searchQuery.toLowerCase();
    return blogs.filter(
      (blog) =>
        blog.title.toLowerCase().includes(query) ||
        blog.excerpt.toLowerCase().includes(query) ||
        blog.category.toLowerCase().includes(query) ||
        blog.tags.some((tag) => tag.toLowerCase().includes(query))
    );
  }, [searchQuery]);

  const handleReadMore = (slug: string) => {
    navigate(`/blogs/${slug}`);
  };

  return (
    <div className="min-h-screen bg-background">
      <ThunderBackground />
      <div className="relative z-10 min-h-screen">
        <Header />
        <main className="pt-24">
          <section className="py-12 relative min-h-screen">
            <div className="container mx-auto px-4">
              {/* Header */}
              <div className="text-center mb-12 animate-fade-in">
                <div className="inline-flex items-center gap-2 text-primary mb-4">
                  <Zap className="w-6 h-6 animate-lightning-flash" />
                  <span className="text-sm uppercase tracking-wider font-semibold">Blogs</span>
                  <Zap className="w-6 h-6 animate-lightning-flash" />
                </div>
                <h1 className="text-4xl md:text-6xl font-bold mb-4 text-foreground">My Blog Posts</h1>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Exploring technology, development practices, and sharing knowledge from my journey.
                </p>
              </div>

              {/* Search Bar */}
              <div className="max-w-2xl mx-auto mb-12">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5 z-10" />
                  <Input
                    type="text"
                    placeholder="Search blogs by title, category, or tags..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 pr-4 py-6 text-lg bg-card/80 border-primary/30 focus:border-primary text-foreground"
                  />
                </div>
              </div>

              {/* Blog Cards Grid */}
              {filteredBlogs.length > 0 ? (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                  {filteredBlogs.map((blog, i) => (
                    <BlogCard key={blog.slug} blog={blog} index={i} onReadMore={handleReadMore} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-16">
                  <p className="text-xl text-muted-foreground">No blogs found matching your search.</p>
                </div>
              )}

              {/* Back to Home */}
              <div className="max-w-6xl mx-auto mt-12 flex justify-center">
                <Button variant="ghost" className="text-primary" onClick={() => navigate("/")}>
                  Return Home <ArrowRight className="ml-2" />
                </Button>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </div>
  );
};

interface BlogCardProps {
  blog: Blog;
  index: number;
  onReadMore: (slug: string) => void;
}

const BlogCard = ({ blog, index, onReadMore }: BlogCardProps) => {
  return (
    <article
      className="bg-card/80 backdrop-blur-lg border border-primary/20 rounded-2xl overflow-hidden hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group animate-fade-in"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 rounded-full bg-primary/90 text-primary-foreground text-xs font-semibold">
            {blog.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            <span>{new Date(blog.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{blog.readTime}</span>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
          {blog.title}
        </h2>

        <p className="text-muted-foreground line-clamp-3">{blog.excerpt}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {blog.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 text-xs rounded-full border border-primary/30 text-primary bg-primary/5"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Read More Button */}
        <Button
          onClick={() => onReadMore(blog.slug)}
          className="w-full bg-primary text-primary-foreground hover:bg-primary/90 group-hover:shadow-lg group-hover:shadow-primary/20 transition-all"
        >
          Read More
          <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
    </article>
  );
};

export default Blogs;

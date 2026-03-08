import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { blogs } from "@/data/blogs";
import { ArrowLeft, Calendar, Clock, Github, ExternalLink, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import NotFound from "./NotFound";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ThunderBackground } from "@/components/ThunderBackground";

const BlogDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const blog = blogs.find((b) => b.slug === slug);

  useEffect(() => {
    // Ensure we land at the top when opening a blog post
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [slug]);

  if (!blog) {
    return <NotFound />;
  }

  return (
    <div className="min-h-screen bg-background">
      <ThunderBackground />
      <div className="relative z-10 min-h-screen">
        <Header />
        <section className="py-24 relative min-h-screen pt-32">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Back Button */}
        <Button
          variant="ghost"
          onClick={() => navigate("/blogs")}
          className="mb-8 text-primary hover:text-primary/80"
        >
          <ArrowLeft className="mr-2 w-4 h-4" />
          Back to Blogs
        </Button>

        {/* Header */}
        <div className="mb-8 animate-fade-in">
          <div className="inline-flex items-center gap-2 text-primary mb-4">
            <Zap className="w-5 h-5 animate-lightning-flash" />
            <span className="text-sm uppercase tracking-wider font-semibold">{blog.category}</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-glow">{blog.title}</h1>
          
          <div className="flex flex-wrap items-center gap-6 text-muted-foreground mb-6">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{new Date(blog.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{blog.readTime}</span>
            </div>
            <div className="flex items-center gap-2">
              <span>By {blog.author}</span>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {blog.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1.5 text-sm rounded-full border border-primary/30 text-primary bg-primary/5"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Featured Image */}
        <div className="relative mb-12 rounded-2xl overflow-hidden border border-primary/20">
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-auto object-cover"
            loading="lazy"
          />
        </div>

        {/* Content */}
        <div className="prose prose-invert max-w-none mb-12">
          <div className="text-lg text-muted-foreground leading-relaxed whitespace-pre-line">
            {blog.content || blog.excerpt}
          </div>
        </div>

        {/* Design Flow Diagram */}
        {blog.designFlowDiagram && (
          <div className="mb-12 animate-fade-in">
            <h2 className="text-3xl font-bold mb-6 text-glow">Design Flow Diagra</h2>
            <div className="relative rounded-2xl overflow-hidden border border-primary/20 bg-card/50 p-4">
              <img
                src={blog.designFlowDiagram}
                alt="Design Flow Diagram"
                className="w-full h-auto rounded-lg"
                loading="lazy"
              />
            </div>
          </div>
        )}

        {/* Video Demo */}
        {blog.videoDemo && (
          <div className="mb-12 animate-fade-in">
            <h2 className="text-3xl font-bold mb-6 text-glow">Video Demo</h2>
            <div className="relative rounded-2xl overflow-hidden border border-primary/20 bg-card/50 p-4">
              <div className="relative aspect-video">
                <iframe
                  src={blog.videoDemo}
                  title="Video Demo"
                  className="absolute top-0 left-0 w-full h-full rounded-lg"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        )}

        {/* GitHub Link */}
        {blog.githubLink && (
          <div className="mb-12 animate-fade-in">
            <h2 className="text-3xl font-bold mb-6 text-glow">Try the Code</h2>
            <div className="bg-card/80 backdrop-blur-lg border border-primary/20 rounded-2xl p-6">
              <p className="text-muted-foreground mb-4">
                Check out the complete source code on GitHub and try it yourself!
              </p>
              <Button
                asChild
                className="bg-primary text-primary-foreground hover:bg-primary/90 border-glow"
                size="lg"
              >
                <a
                  href={blog.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center"
                >
                  <Github className="mr-2 w-5 h-5" />
                  View on GitHub
                  <ExternalLink className="ml-2 w-4 h-4" />
                </a>
              </Button>
            </div>
          </div>
        )}

        {/* Navigation */}
        <div className="flex justify-between items-center pt-8 border-t border-primary/20">
          <Button
            variant="ghost"
            onClick={() => navigate("/blogs")}
            className="text-primary"
          >
            <ArrowLeft className="mr-2 w-4 h-4" />
            All Blogs
          </Button>
          <Button
            variant="ghost"
            onClick={() => navigate("/")}
            className="text-primary"
          >
            Return Home
            <ArrowLeft className="ml-2 w-4 h-4 rotate-180" />
          </Button>
        </div>
      </div>
    </section>
    <Footer />
      </div>
    </div>
  );
};

export default BlogDetail;

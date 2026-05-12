import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Github, Linkedin, Mail, Zap, Send } from "lucide-react";
import { toast } from "sonner";
import SocialTooltip from "./SocialTooltip";
import emailjs from '@emailjs/browser';

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      toast.error("EmailJS configuration is missing.", {
        description: "Please check your environment variables.",
      });
      setIsLoading(false);
      return;
    }

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
      };

      await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      );
      toast.success("Message sent successfully!", {
        description: "I'll get back to you as soon as possible.",
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast.error("Failed to send message.", {
        description: "Please try again later or contact me via LinkedIn.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Crazy 3D Background Elements */}
      <div className="absolute inset-0 electric-grid pointer-events-none opacity-40" />
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-secondary/10 rounded-full blur-[120px] animate-pulse" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 text-primary mb-4">
            <Zap className="w-6 h-6 animate-lightning-flash" />
            <span className="text-sm uppercase tracking-wider font-semibold">Get In Touch</span>
            <Zap className="w-6 h-6 animate-lightning-flash" />
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-glow">
            Let's Build <span className="text-primary">Something</span> Crazy
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Have a project in mind or just want to chat about AI and web development? 
            My inbox is always open for bold ideas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start perspective-1000">
          {/* Contact Form - 3D Card */}
          <div className="relative group animate-slide-in-left preserve-3d transition-transform duration-700 hover:rotate-y-12">
            <div className="absolute -inset-1 bg-linear-to-r from-primary via-secondary to-primary rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200" />
            <div className="relative bg-card/80 backdrop-blur-xl border border-primary/20 rounded-2xl p-8 shadow-2xl overflow-hidden">
              {/* Scanning Effect Overlay */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="w-full h-1 bg-primary/20 shadow-[0_0_15px_rgba(139,92,246,0.5)] animate-scan opacity-0 group-hover:opacity-100" />
              </div>

              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-primary/80 ml-1">Identity</label>
                  <Input
                    name="user_name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e: { target: { value: any; }; }) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-background/50 border-primary/20 focus:border-primary focus:ring-1 focus:ring-primary/50 text-foreground placeholder:text-muted-foreground h-12 transition-all"
                    required
                    disabled={isLoading}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-primary/80 ml-1">Frequency</label>
                  <Input
                    type="email"
                    name="user_email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e: { target: { value: any; }; }) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-background/50 border-primary/20 focus:border-primary focus:ring-1 focus:ring-primary/50 text-foreground placeholder:text-muted-foreground h-12 transition-all"
                    required
                    disabled={isLoading}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-primary/80 ml-1">Transmission</label>
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={(e: { target: { value: any; }; }) => setFormData({ ...formData, message: e.target.value })}
                    className="bg-background/50 border-primary/20 focus:border-primary focus:ring-1 focus:ring-primary/50 text-foreground placeholder:text-muted-foreground min-h-[150px] resize-none transition-all"
                    required
                    disabled={isLoading}
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 border-glow group h-14 text-lg font-bold"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <div className="flex items-center gap-2">
                      <div className="h-5 w-5 animate-spin rounded-full border-2 border-primary-foreground border-t-transparent" />
                      Initializing...
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      Deploy Message
                    </div>
                  )}
                </Button>
              </form>
            </div>
          </div>

          {/* Contact Info & Social Links - 3D Card */}
          <div className="space-y-8 animate-slide-in-right preserve-3d transition-transform duration-700 hover:-rotate-y-12">
            {/* Info Card */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-linear-to-r from-secondary via-primary to-secondary rounded-xl blur opacity-10 group-hover:opacity-30 transition duration-1000" />
              <div className="relative bg-card/80 backdrop-blur-xl border border-primary/20 rounded-xl p-8 border-glow hover:border-primary/40 transition-all duration-500 hover:shadow-[0_0_30px_rgba(139,92,246,0.3)]">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20 group-hover:scale-110 transition-transform">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground text-lg mb-1">Direct Signal</h4>
                      <p className="text-muted-foreground break-all">srinidhisjoshi78@gmail.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center shrink-0 border border-secondary/20 group-hover:scale-110 transition-transform">
                      <Linkedin className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground text-lg mb-1">Professional Link</h4>
                      <p className="text-muted-foreground">linkedin.com/in/srinidhi-s-joshi</p>
                    </div>
                  </div>
                </div>

                {/* Follow Me Section */}
                <div className="mt-10 pt-8 border-t border-primary/10">
                  <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                    Connect Frequency <Zap className="w-4 h-4 text-primary" />
                  </h3>
                  <div className="grid grid-cols-4 gap-4 place-items-center">
                    <SocialTooltip 
                      icon={<Github className="w-6 h-6" />}
                      name="GitHub"
                      href="https://github.com/srinidhipossible-123"
                      color="#FFFFFF"
                    />
                    <SocialTooltip 
                      icon={<Linkedin className="w-6 h-6" />}
                      name="LinkedIn"
                      href="https://www.linkedin.com/in/srinidhi-s-joshi-6a0a14298/"
                      color="#00CCFF"
                    />
                    <SocialTooltip 
                      icon={
                        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                          <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
                        </svg>
                      }
                      name="X"
                      href="https://twitter.com/yourusername"
                      color="#FFFFFF"
                    />
                    <SocialTooltip 
                      icon={<Mail className="w-6 h-6" />}
                      name="Email"
                      href="https://mail.google.com/mail/?view=cm&fs=1&to=srinidhisjoshi78@gmail.com"
                      color="#FFD900"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
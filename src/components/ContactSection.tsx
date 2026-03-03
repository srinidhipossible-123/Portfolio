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

      toast.success("⚡ Message sent! I'll respond at lightning speed!", {
        description: "Thanks for reaching out!",
      });
      
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Email sending failed:", error);
      toast.error("Failed to send message", {
        description: "Please try again or contact me directly via email.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 relative overflow-hidden bg-gradient-to-b from-background to-secondary/10 pb-20 md:pb-20">
      {/* Electric background wires */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-0 left-1/4 w-0.5 h-full bg-secondary animate-lightning-flash" />
        <div className="absolute top-0 right-1/4 w-0.5 h-full bg-primary animate-lightning-flash" style={{ animationDelay: "0.5s" }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 text-primary mb-4">
            <Zap className="w-6 h-6 animate-lightning-flash" />
            <span className="text-sm uppercase tracking-wider font-semibold">Contact</span>
            <Zap className="w-6 h-6 animate-lightning-flash" />
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="text-foreground">LET'S CONNECT</span>
            <br />
            <span className="text-primary">GET IN TOUCH</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Let's discuss your next project. I'm always open to new opportunities and collaborations.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="animate-slide-in-left">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  name="from_name" // EmailJS expects this field name
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e: { target: { value: any; }; }) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-input border-primary/30 focus:border-primary focus:border-glow text-foreground placeholder:text-muted-foreground"
                  required
                  disabled={isLoading}
                />
              </div>
              <div>
                <Input
                  type="email"
                  name="from_email" // EmailJS expects this field name
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e: { target: { value: any; }; }) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-input border-primary/30 focus:border-primary focus:border-glow text-foreground placeholder:text-muted-foreground"
                  required
                  disabled={isLoading}
                />
              </div>
              <div>
                <Textarea
                  name="message" // EmailJS expects this field name
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={(e: { target: { value: any; }; }) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-input border-primary/30 focus:border-primary focus:border-glow text-foreground placeholder:text-muted-foreground min-h-[150px] resize-none"
                  required
                  disabled={isLoading}
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 border-glow group"
                size="lg"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <div className="mr-2 h-5 w-5 animate-spin rounded-full border-2 border-background border-t-transparent" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="mr-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    Send Message ⚡
                  </>
                )}
              </Button>
            </form>
          </div>

          {/* Contact Info & Social Links */}
          <div className="space-y-8 animate-slide-in-right">
            {/* Info Card */}
            <div className="bg-card/80 backdrop-blur-lg border border-primary/20 rounded-xl p-8 border-glow hover:border-primary/40 transition-all duration-500 hover:shadow-[0_0_30px_rgba(139,92,246,0.3)] group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />
              <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-glow transition-colors relative">Let's Connect</h3>
              <p className="text-muted-foreground mb-6 relative leading-relaxed">
                Currently available for freelance projects, full-time positions, and consulting opportunities.
                Let's build something amazing together.
              </p>
              <div className="space-y-4 relative">
                <div className="flex items-center gap-3 text-foreground hover:text-primary transition-colors">
                  <Mail className="w-5 h-5 text-primary drop-shadow-[0_0_8px_rgba(139,92,246,0.6)]" />
                  <a href="mailto:srinidhisjoshi78@gmail.com" className="hover:underline">srinidhisjoshi78@gmail.com</a>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Zap className="w-5 h-5 text-primary animate-lightning-flash drop-shadow-[0_0_8px_rgba(139,92,246,0.6)]" />
                  <span>Response Time: <span className="text-primary font-semibold">Within 24 hours</span></span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                  <span>Status: <span className="text-primary font-semibold">Available for work</span></span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-card/80 backdrop-blur-lg border border-primary/20 rounded-xl p-8 border-glow hover:border-primary/40 transition-all duration-500 hover:shadow-[0_0_30px_rgba(139,92,246,0.3)] group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />

              {/* Logo and Title */}
              <div className="flex flex-col items-center mb-6">
                <h3 className="text-2xl font-bold text-foreground group-hover:text-glow transition-colors relative">
                  Follow Me ⚡
                </h3>
              </div>

              {/* Social Links */}
              <div className="grid grid-cols-4 gap-8 relative mt-8 place-items-center">
                {/* GitHub */}
                <SocialTooltip 
                  icon={<Github className="w-6 h-6" />}
                  name="GitHub"
                  href="https://github.com/srinidhipossible-123"
                  color="#FFFFFF"
                />

                {/* LinkedIn */}
                <SocialTooltip 
                  icon={<Linkedin className="w-6 h-6" />}
                  name="LinkedIn"
                  href="https://www.linkedin.com/in/srinidhi-s-joshi-6a0a14298/"
                  color="#00CCFF"
                />

                {/* Twitter / X */}
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

                {/* Mail */}
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
    </section>
  );
};
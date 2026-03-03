import { caseStudies } from "@/data/case-studies";
import { ArrowRight, ExternalLink, Github, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const CaseStudies = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 text-primary mb-4">
            <Zap className="w-6 h-6 animate-lightning-flash" />
            <span className="text-sm uppercase tracking-wider font-semibold">Case Studies</span>
            <Zap className="w-6 h-6 animate-lightning-flash" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Selected Work</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Deep dives into projects with clear problems, solutions, and measurable impact.
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-12">
          {caseStudies.map((cs, i) => (
            <article key={cs.slug} className="bg-card/80 backdrop-blur-lg border border-primary/20 rounded-2xl p-6 md:p-10 border-glow animate-fade-in" style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="grid md:grid-cols-5 gap-8 items-start">
                {/* Summary */}
                <div className="md:col-span-2 space-y-4">
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground">{cs.title}</h2>
                  <div className="flex flex-wrap gap-2 text-sm">
                    <span className="px-2 py-1 rounded border border-primary/40 text-primary/90">{cs.period}</span>
                    <span className="px-2 py-1 rounded border border-secondary/40 text-secondary/90">{cs.role}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{cs.problem}</p>
                  <p className="text-sm text-foreground/90">{cs.solution}</p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {cs.stack.map((t) => (
                      <span key={t} className="px-2.5 py-1 text-[11px] rounded-full border border-primary/30 text-primary bg-primary/5">{t}</span>
                    ))}
                  </div>

                  <div className="flex gap-3 pt-4">
                    {cs.repo && (
                      <Button variant="outline" className="border-primary text-primary" asChild>
                        <a href={cs.repo} target="_blank" rel="noopener noreferrer"><Github className="mr-2" /> Code</a>
                      </Button>
                    )}
                    {cs.demo && (
                      <Button className="bg-primary text-primary-foreground" asChild>
                        <a href={cs.demo} target="_blank" rel="noopener noreferrer">Live Demo <ExternalLink className="ml-2" /></a>
                      </Button>
                    )}
                  </div>
                </div>

                {/* Screens + Outcomes */}
                <div className="md:col-span-3 space-y-6">
                  <div className="relative overflow-hidden rounded-xl border border-primary/20">
                    <img src={cs.screenshots[0]} alt={`${cs.title} screenshot`} className="w-full h-auto object-cover" loading="lazy" decoding="async" />
                    <div className="absolute inset-0 bg-linear-to-t from-background/30 to-transparent" />
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Outcomes</h3>
                      <ul className="list-disc pl-5 text-sm text-foreground/90 space-y-1">
                        {cs.outcomes.map((o) => (<li key={o}>{o}</li>))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Metrics</h3>
                      <ul className="list-disc pl-5 text-sm text-foreground/90 space-y-1">
                        {cs.metrics.map((m) => (<li key={m}>{m}</li>))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="max-w-6xl mx-auto mt-12 flex justify-center">
          <Button variant="ghost" className="text-primary" asChild>
            <a href="/">Return Home <ArrowRight className="ml-2" /></a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;



import { Zap } from "lucide-react";
import { LastUpdated } from "@/components/LastUpdated";

export const Footer = () => {
  return (
    <footer className="border-t border-primary/20 py-8 bg-card/50 backdrop-blur-lg">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Zap className="w-5 h-5 text-primary animate-lightning-flash" />
            <span>© 2024 Srinidhi S Joshi. All rights reserved.</span>
          </div>
          <div className="text-muted-foreground text-center md:text-right">
            <p className="text-sm">
              Built with <span className="text-primary">⚡ Thunder Breathing ⚡</span>
            </p>
            <p className="text-xs mt-1">
              Powered by Lightning-Fast Code
            </p>
            <div className="mt-2"><LastUpdated /></div>
          </div>
        </div>
      </div>
    </footer>
  );
};
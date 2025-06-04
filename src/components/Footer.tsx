
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast({
        title: "Email Required",
        description: "Please enter your email address.",
        variant: "destructive"
      });
      return;
    }
    toast({
      title: "Subscribed!",
      description: "You've been added to our mailing list."
    });
    setEmail("");
  };

  return (
    <footer className="relative backdrop-blur-sm border-t border-white/10 mt-auto">
      <div className="max-w-6xl mx-auto px-3 py-4 bg-black">
        <div className="grid md:grid-cols-3 gap-4">
          {/* NEFTIT Section */}
          <div>
            <h3 className="text-white text-sm font-bold mb-2">NEFTIT</h3>
            <p className="text-white/70 text-xs leading-relaxed">
              NEFTIT is a Web3 engagement platform designed to empower NFT projects and communities through gamified interactions.
            </p>
          </div>

          {/* Newsletter Section */}
          <div>
            <h3 className="text-white text-sm font-bold mb-2">GET NEFTIT UPDATES</h3>
            <form onSubmit={handleSubmit} className="flex gap-2">
              <Input
                type="email"
                placeholder="Your email..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60 h-8 rounded-md flex-1 text-xs"
              />
              <Button
                type="submit"
                className="bg-cyan-500 hover:bg-cyan-600 text-white h-8 px-3 rounded-md font-bold text-xs"
              >
                SUBMIT
              </Button>
            </form>
          </div>

          {/* Social Section */}
          <div>
            <h3 className="text-white text-sm font-bold mb-2">SOCIAL</h3>
            <div className="space-y-1">
              <a href="https://twitter.com/neftitxyz" target="_blank" rel="noopener noreferrer" className="flex items-center text-white/70 hover:text-white transition-colors text-xs">
                TWITTER →
              </a>
              <a href="https://discord.gg/GHc9samP" target="_blank" rel="noopener noreferrer" className="flex items-center text-white/70 hover:text-white transition-colors text-xs">
                DISCORD →
              </a>
              <a href="#" className="flex items-center text-white/70 hover:text-white transition-colors text-xs">
                TELEGRAM →
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 mt-4 pt-3 flex flex-col md:flex-row justify-between items-center gap-2">
          <p className="text-white/60 text-xs">© 2025 NEFTIT</p>
          <div className="flex gap-3 text-xs">
            <a href="#" className="text-white/60 hover:text-white transition-colors">
              Docs
            </a>
            <a href="#" className="text-white/60 hover:text-white transition-colors">
              Media Kit
            </a>
            <a href="#" className="text-white/60 hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-white/60 hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


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
        title: "EMAIL REQUIRED",
        description: "PLEASE ENTER YOUR EMAIL ADDRESS.",
        variant: "destructive"
      });
      return;
    }
    toast({
      title: "SUBSCRIBED!",
      description: "YOU'VE BEEN ADDED TO OUR MAILING LIST."
    });
    setEmail("");
  };

  return (
    <footer className="relative backdrop-blur-sm border-t border-white/10 mt-auto font-monument">
      <div className="max-w-6xl mx-auto px-4 py-8 bg-black">
        <div className="grid md:grid-cols-3 gap-8">
          {/* NEFTIT Section */}
          <div>
            <h3 className="text-white text-lg font-monument font-black mb-3 uppercase tracking-wider">NEFTIT</h3>
            <p className="text-white/70 text-sm leading-relaxed font-monument font-bold uppercase">
              NEFTIT IS A WEB3 ENGAGEMENT PLATFORM DESIGNED TO EMPOWER NFT PROJECTS AND COMMUNITIES THROUGH GAMIFIED INTERACTIONS.
            </p>
          </div>

          {/* Newsletter Section */}
          <div>
            <h3 className="text-white text-lg font-monument font-black mb-3 uppercase tracking-wider">GET NEFTIT UPDATES IN YOUR INBOX</h3>
            <form onSubmit={handleSubmit} className="flex gap-2">
              <Input
                type="email"
                placeholder="YOUR EMAIL..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60 h-10 rounded-lg flex-1 text-sm font-monument font-bold uppercase"
              />
              <Button
                type="submit"
                className="bg-cyan-500 hover:bg-cyan-600 text-white h-10 px-4 rounded-lg font-monument font-black text-sm uppercase tracking-wider"
              >
                SUBMIT
              </Button>
            </form>
          </div>

          {/* Social Section */}
          <div>
            <h3 className="text-white text-lg font-monument font-black mb-3 uppercase tracking-wider">SOCIAL</h3>
            <div className="space-y-2">
              <a href="https://twitter.com/neftitxyz" target="_blank" rel="noopener noreferrer" className="flex items-center text-white/70 hover:text-white transition-colors text-sm font-monument font-bold uppercase tracking-wider">
                TWITTER →
              </a>
              <a href="https://discord.gg/GHc9samP" target="_blank" rel="noopener noreferrer" className="flex items-center text-white/70 hover:text-white transition-colors text-sm font-monument font-bold uppercase tracking-wider">
                DISCORD →
              </a>
              <a href="#" className="flex items-center text-white/70 hover:text-white transition-colors text-sm font-monument font-bold uppercase tracking-wider">
                TELEGRAM →
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-white/60 text-sm font-monument font-bold uppercase">© 2025 NEFTIT</p>
          <div className="flex gap-4 text-sm">
            <a href="#" className="text-white/60 hover:text-white transition-colors font-monument font-bold uppercase tracking-wider">
              DOCS
            </a>
            <a href="#" className="text-white/60 hover:text-white transition-colors font-monument font-bold uppercase tracking-wider">
              MEDIA KIT
            </a>
            <a href="#" className="text-white/60 hover:text-white transition-colors font-monument font-bold uppercase tracking-wider">
              PRIVACY POLICY
            </a>
            <a href="#" className="text-white/60 hover:text-white transition-colors font-monument font-bold uppercase tracking-wider">
              TERMS OF SERVICE
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

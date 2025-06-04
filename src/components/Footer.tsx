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
  return <footer className="relative backdrop-blur-sm border-t border-white/10 mt-auto">
      <div className="max-w-6xl mx-auto px-6 py-16 bg-black">
        <div className="grid md:grid-cols-3 gap-12">
          {/* NEFTIT Section */}
          <div>
            <h3 className="text-white text-xl font-bold mb-4">NEFTIT</h3>
            <p className="text-white/70 text-sm leading-relaxed">
              NEFTIT is a Web3 engagement platform designed to empower NFT projects and communities through gamified interactions.
            </p>
          </div>

          {/* Newsletter Section */}
          <div>
            <h3 className="text-white text-xl font-bold mb-4">GET NEFTIT UPDATES IN YOUR INBOX</h3>
            <form onSubmit={handleSubmit} className="flex gap-3">
              <Input type="email" placeholder="Your email..." value={email} onChange={e => setEmail(e.target.value)} className="bg-white/10 border-white/20 text-white placeholder:text-white/60 h-12 rounded-xl flex-1" />
              <Button type="submit" className="bg-cyan-500 hover:bg-cyan-600 text-white h-12 px-6 rounded-xl font-bold">
                SUBMIT
              </Button>
            </form>
          </div>

          {/* Social Section */}
          <div>
            <h3 className="text-white text-xl font-bold mb-4">SOCIAL</h3>
            <div className="space-y-3">
              <a href="https://twitter.com/neftitxyz" target="_blank" rel="noopener noreferrer" className="flex items-center text-white/70 hover:text-white transition-colors">
                TWITTER →
              </a>
              <a href="https://discord.gg/GHc9samP" target="_blank" rel="noopener noreferrer" className="flex items-center text-white/70 hover:text-white transition-colors">
                DISCORD →
              </a>
              <a href="#" className="flex items-center text-white/70 hover:text-white transition-colors">
                TELEGRAM →
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/60 text-sm">© 2025 NEFTIT</p>
          <div className="flex gap-6 text-sm">
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
    </footer>;
};
export default Footer;

import { useState } from "react";
import { Trophy, Copy, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";
import MainNav from "@/components/MainNav";
import Footer from "@/components/Footer";

interface LeaderboardProps {
  userName: string;
  userRank: number;
  referralCount: number;
  email: string;
}

const Leaderboard = ({ userName, userRank, referralCount, email }: LeaderboardProps) => {
  const [referralLink] = useState(`https://neftit.com/waitlist?ref=${userName.toLowerCase()}`);

  const leaderboardData = [
    { rank: 1, name: "LOREM IPSUM", referrals: 12 },
    { rank: 2, name: "LOREM IPSUM", referrals: 11 },
    { rank: 3, name: "LOREM IPSUM", referrals: 10 },
    { rank: 4, name: "LOREM IPSUM", referrals: 9 },
  ];

  const handleCopyLink = () => {
    navigator.clipboard.writeText(referralLink);
    toast({
      title: "Link Copied!",
      description: "Referral link copied to clipboard.",
    });
  };

  const handleShareTwitter = () => {
    const text = `I just joined the NEFTIT waitlist! Join me and climb the leaderboard: ${referralLink}`;
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`;
    window.open(twitterUrl, "_blank");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <MainNav />
      
      <div 
        className="flex-1 flex flex-col items-center justify-center p-2 pt-12 sm:pt-16 relative"
        style={{
          backgroundImage: 'url(/lovable-uploads/1161bd19-0bbb-4e19-ab51-1f508be196c9.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Background overlay for better readability */}
        <div className="absolute inset-0 bg-black/30"></div>
        
        <div className="w-full max-w-xl space-y-3 relative z-10">
          {/* User Profile Card */}
          <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                {/* Avatar */}
                <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-indigo-500 rounded-full flex items-center justify-center relative">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                    <div className="w-6 h-6 bg-blue-400 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-xs">
                        {userName.charAt(0)}
                      </span>
                    </div>
                  </div>
                </div>

                {/* User Info */}
                <div>
                  <h2 className="text-purple-300 text-sm font-bold mb-0">YOUR NAME HERE</h2>
                  <p className="text-white/60 text-xs">@USERNAME</p>
                </div>
              </div>

              {/* Rank */}
              <div className="text-right flex items-center space-x-2">
                <Trophy className="h-6 w-6 text-purple-400" />
                <div>
                  <p className="text-white text-xs font-bold mb-0">YOUR RANK</p>
                  <p className="text-white/70 text-lg font-bold">#001</p>
                </div>
              </div>
            </div>
          </div>

          {/* Referrals and Invite Section */}
          <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-4">
            <div className="grid md:grid-cols-2 gap-4">
              {/* Your Referrals */}
              <div>
                <h3 className="text-white text-sm font-bold mb-2">YOUR REFERRALS</h3>
                <div className="mb-2">
                  <span className="text-purple-400 text-xl font-bold">12</span>
                  <span className="text-white text-sm font-bold ml-2">JOINED!</span>
                </div>
                <p className="text-white/70 text-xs">INVITE MORE FRIENDS TO CLIMB ON TOP</p>
              </div>

              {/* Invite Friends */}
              <div>
                <h3 className="text-white text-sm font-bold mb-3">INVITE YOUR FRIENDS</h3>
                <div className="space-y-2">
                  <Input
                    value={referralLink}
                    readOnly
                    className="bg-white/10 border-white/20 text-white h-8 rounded-lg text-xs px-2"
                  />
                  <div className="flex space-x-2">
                    <Button
                      onClick={handleShareTwitter}
                      className="flex-1 bg-blue-600 hover:bg-blue-700 text-white h-8 rounded-lg font-bold text-xs"
                    >
                      <Twitter className="h-3 w-3 mr-1" />
                      SHARE
                    </Button>
                    <Button
                      onClick={handleCopyLink}
                      variant="outline"
                      className="bg-white/10 border-white/20 text-white hover:bg-white/20 h-8 rounded-lg px-3 font-bold text-xs"
                    >
                      <Copy className="h-3 w-3 mr-1" />
                      COPY
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Leaderboard */}
          <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-4">
            <h2 className="text-purple-400 text-lg font-bold mb-0.5">LEADERBOARD</h2>
            <p className="text-white/70 text-xs mb-4">NEFTIT TOP REFEREES</p>

            <div className="space-y-2">
              {leaderboardData.map((user) => (
                <div
                  key={user.rank}
                  className="bg-white/5 border border-white/10 rounded-lg p-3 flex items-center justify-between hover:bg-white/10 transition-all duration-300"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-xs">{user.rank}</span>
                    </div>
                    <span className="text-white font-bold text-sm">{user.name}</span>
                  </div>
                  <span className="text-white font-bold text-sm">{user.referrals}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Leaderboard;

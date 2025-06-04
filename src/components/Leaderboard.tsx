
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
        className="flex-1 flex flex-col items-center justify-center p-3 pt-16 sm:pt-20 lg:pt-24 relative"
        style={{
          backgroundImage: 'url(/lovable-uploads/1161bd19-0bbb-4e19-ab51-1f508be196c9.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Background overlay for better readability */}
        <div className="absolute inset-0 bg-black/20"></div>
        
        <div className="w-full max-w-2xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-6xl mx-auto space-y-4 relative z-10 px-4">
          {/* User Profile Card */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                {/* Avatar */}
                <div className="w-14 h-14 bg-gradient-to-br from-purple-400 to-indigo-500 rounded-full flex items-center justify-center relative">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <div className="w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">
                        {userName.charAt(0)}
                      </span>
                    </div>
                  </div>
                </div>

                {/* User Info */}
                <div>
                  <h2 className="text-purple-300 text-lg font-bold mb-0.5">YOUR NAME HERE</h2>
                  <p className="text-white/60 text-sm">@USERNAME</p>
                </div>
              </div>

              {/* Rank */}
              <div className="text-right flex items-center space-x-3">
                <Trophy className="h-8 w-8 text-purple-400" />
                <div>
                  <p className="text-white text-sm font-bold mb-0.5">YOUR RANK</p>
                  <p className="text-white/70 text-2xl font-bold">#001</p>
                </div>
              </div>
            </div>
          </div>

          {/* Referrals and Invite Section */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Your Referrals */}
              <div>
                <h3 className="text-white text-lg font-bold mb-3">YOUR REFERRALS</h3>
                <div className="mb-3">
                  <span className="text-purple-400 text-3xl font-bold">12</span>
                  <span className="text-white text-lg font-bold ml-2">JOINED!</span>
                </div>
                <p className="text-white/70 text-sm">INVITE MORE FRIENDS TO CLIMB ON TOP</p>
              </div>

              {/* Invite Friends */}
              <div>
                <h3 className="text-white text-lg font-bold mb-4">INVITE YOUR FRIENDS</h3>
                <div className="space-y-3">
                  <Input
                    value={referralLink}
                    readOnly
                    className="bg-white/10 border-white/20 text-white h-10 rounded-xl text-sm px-3"
                  />
                  <div className="flex space-x-2">
                    <Button
                      onClick={handleShareTwitter}
                      className="flex-1 bg-blue-600 hover:bg-blue-700 text-white h-10 rounded-xl font-bold text-sm"
                    >
                      <Twitter className="h-4 w-4 mr-1" />
                      SHARE
                    </Button>
                    <Button
                      onClick={handleCopyLink}
                      variant="outline"
                      className="bg-white/10 border-white/20 text-white hover:bg-white/20 h-10 rounded-xl px-4 font-bold text-sm"
                    >
                      <Copy className="h-4 w-4 mr-1" />
                      COPY
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Leaderboard */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6">
            <h2 className="text-purple-400 text-2xl font-bold mb-1">LEADERBOARD</h2>
            <p className="text-white/70 text-sm mb-6">NEFTIT TOP REFEREES</p>

            <div className="space-y-3">
              {leaderboardData.map((user) => (
                <div
                  key={user.rank}
                  className="bg-white/5 border border-white/10 rounded-xl p-4 flex items-center justify-between hover:bg-white/10 transition-all duration-300"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">{user.rank}</span>
                    </div>
                    <span className="text-white font-bold text-base">{user.name}</span>
                  </div>
                  <span className="text-white font-bold text-lg">{user.referrals}</span>
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

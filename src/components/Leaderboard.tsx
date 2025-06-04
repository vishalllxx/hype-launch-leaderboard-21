
import { useState } from "react";
import { Trophy, Copy, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";

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
    <div 
      className="min-h-screen flex flex-col items-center justify-center p-4 relative"
      style={{
        backgroundImage: 'url(/lovable-uploads/1161bd19-0bbb-4e19-ab51-1f508be196c9.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Background overlay for better readability */}
      <div className="absolute inset-0 bg-black/20"></div>
      
      <div className="w-full max-w-4xl space-y-6 relative z-10">
        {/* User Profile Card */}
        <div className="bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 p-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              {/* Avatar */}
              <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-indigo-500 rounded-full flex items-center justify-center relative">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                  <div className="w-12 h-12 bg-blue-400 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-xl">
                      {userName.charAt(0)}
                    </span>
                  </div>
                </div>
              </div>

              {/* User Info */}
              <div>
                <h2 className="text-purple-300 text-2xl font-bold mb-1">YOUR NAME HERE</h2>
                <p className="text-white/60 text-lg">@USERNAME</p>
              </div>
            </div>

            {/* Rank */}
            <div className="text-right flex items-center space-x-4">
              <Trophy className="h-12 w-12 text-purple-400" />
              <div>
                <p className="text-white text-xl font-bold mb-1">YOUR RANK</p>
                <p className="text-white/70 text-4xl font-bold">#001</p>
              </div>
            </div>
          </div>
        </div>

        {/* Referrals and Invite Section */}
        <div className="bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 p-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Your Referrals */}
            <div>
              <h3 className="text-white text-2xl font-bold mb-4">YOUR REFERRALS</h3>
              <div className="mb-4">
                <span className="text-purple-400 text-6xl font-bold">12</span>
                <span className="text-white text-2xl font-bold ml-3">JOINED!</span>
              </div>
              <p className="text-white/70 text-lg">INVITE MORE FRIENDS TO CLIMB ON TOP</p>
            </div>

            {/* Invite Friends */}
            <div>
              <h3 className="text-white text-2xl font-bold mb-6">INVITE YOUR FRIENDS</h3>
              <div className="space-y-4">
                <Input
                  value={referralLink}
                  readOnly
                  className="bg-white/10 border-white/20 text-white h-14 rounded-2xl text-lg px-4"
                />
                <div className="flex space-x-3">
                  <Button
                    onClick={handleShareTwitter}
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white h-14 rounded-2xl font-bold text-base"
                  >
                    <Twitter className="h-5 w-5 mr-2" />
                    SHARE ON TWITTER
                  </Button>
                  <Button
                    onClick={handleCopyLink}
                    variant="outline"
                    className="bg-white/10 border-white/20 text-white hover:bg-white/20 h-14 rounded-2xl px-6 font-bold"
                  >
                    <Copy className="h-5 w-5 mr-2" />
                    COPY LINK
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Leaderboard */}
        <div className="bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 p-8">
          <h2 className="text-purple-400 text-5xl font-bold mb-2">LEADERBOARD</h2>
          <p className="text-white/70 text-lg mb-8">NEFTIT TOP REFEREES</p>

          <div className="space-y-4">
            {leaderboardData.map((user) => (
              <div
                key={user.rank}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 flex items-center justify-between hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex items-center space-x-6">
                  <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">{user.rank}</span>
                  </div>
                  <span className="text-white font-bold text-xl">{user.name}</span>
                </div>
                <span className="text-white font-bold text-2xl">{user.referrals}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;

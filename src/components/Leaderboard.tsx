
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
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-900 p-4">
      <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
        {/* User Profile Card */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              {/* Avatar */}
              <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-indigo-500 rounded-full flex items-center justify-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">
                    {userName.charAt(0)}
                  </span>
                </div>
              </div>

              {/* User Info */}
              <div>
                <h2 className="text-purple-300 text-lg font-semibold">{userName}</h2>
                <p className="text-white/60 text-sm">@{userName.toLowerCase()}</p>
              </div>
            </div>

            {/* Rank */}
            <div className="text-right">
              <div className="flex items-center space-x-2">
                <Trophy className="h-8 w-8 text-purple-400" />
                <div>
                  <p className="text-white text-lg font-bold">YOUR RANK</p>
                  <p className="text-purple-300 text-2xl font-bold">#{userRank.toString().padStart(3, '0')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Referrals and Invite Section */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 p-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Your Referrals */}
            <div>
              <h3 className="text-white text-xl font-bold mb-2">YOUR REFERRALS</h3>
              <div className="mb-4">
                <span className="text-purple-300 text-4xl font-bold">{referralCount}</span>
                <span className="text-white text-xl font-semibold ml-2">JOINED!</span>
              </div>
              <p className="text-white/70 text-sm">INVITE MORE FRIENDS TO CLIMB ON TOP</p>
            </div>

            {/* Invite Friends */}
            <div>
              <h3 className="text-white text-xl font-bold mb-4">INVITE YOUR FRIENDS</h3>
              <div className="space-y-3">
                <Input
                  value={referralLink}
                  readOnly
                  className="bg-white/10 border-white/20 text-white h-12 rounded-xl"
                />
                <div className="flex space-x-2">
                  <Button
                    onClick={handleShareTwitter}
                    className="flex-1 bg-blue-500 hover:bg-blue-600 text-white h-12 rounded-xl"
                  >
                    <Twitter className="h-4 w-4 mr-2" />
                    SHARE ON TWITTER
                  </Button>
                  <Button
                    onClick={handleCopyLink}
                    variant="outline"
                    className="bg-white/10 border-white/20 text-white hover:bg-white/20 h-12 rounded-xl px-4"
                  >
                    <Copy className="h-4 w-4 mr-2" />
                    COPY LINK
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Leaderboard */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 p-6">
          <h2 className="text-purple-300 text-3xl font-bold mb-2">LEADERBOARD</h2>
          <p className="text-white/70 text-sm mb-6">NEFTIT TOP REFEREES</p>

          <div className="space-y-3">
            {leaderboardData.map((user) => (
              <div
                key={user.rank}
                className="bg-white/5 border border-white/10 rounded-xl p-4 flex items-center justify-between hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">{user.rank}</span>
                  </div>
                  <span className="text-white font-semibold">{user.name}</span>
                </div>
                <span className="text-purple-300 font-bold text-lg">{user.referrals}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;

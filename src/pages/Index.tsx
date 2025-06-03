
import { useState, useEffect } from "react";
import { Mail, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";
import WaitlistCard from "@/components/WaitlistCard";
import Leaderboard from "@/components/Leaderboard";

const Index = () => {
  const [completedTasks, setCompletedTasks] = useState({
    email: false,
    twitter: false,
    discord: false,
  });
  const [showLeaderboard, setShowLeaderboard] = useState(false);
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [userRank, setUserRank] = useState(1);
  const [referralCount, setReferralCount] = useState(12);

  const handleTaskComplete = (task: string) => {
    if (task === "email" && !email) {
      toast({
        title: "Email Required",
        description: "Please enter your email address first.",
        variant: "destructive",
      });
      return;
    }

    setCompletedTasks(prev => ({ ...prev, [task]: true }));
    toast({
      title: "Task Completed!",
      description: `${task.charAt(0).toUpperCase() + task.slice(1)} task completed successfully.`,
    });
  };

  const allTasksCompleted = Object.values(completedTasks).every(Boolean);

  const handleEnterNeftit = () => {
    if (allTasksCompleted && email) {
      setUserName(email.split('@')[0].toUpperCase());
      setShowLeaderboard(true);
      toast({
        title: "Welcome to NEFTIT!",
        description: "You're now part of the community!",
      });
    }
  };

  if (showLeaderboard) {
    return (
      <Leaderboard
        userName={userName}
        userRank={userRank}
        referralCount={referralCount}
        email={email}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-900 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md space-y-8 animate-fade-in">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-wider">
            JOIN THE WAITLIST
          </h1>
          <p className="text-lg text-purple-200 font-medium">
            FOR THE NEFTIT WEB3 EXPERIENCE
          </p>
        </div>

        {/* Email Input */}
        <div className="space-y-4">
          <Input
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full h-12 bg-white/10 border-white/20 text-white placeholder:text-white/60 rounded-xl backdrop-blur-sm"
          />
        </div>

        {/* Task Cards */}
        <div className="space-y-4">
          <WaitlistCard
            icon={<Mail className="h-6 w-6 text-white" />}
            title="Connect Email"
            description="To Receive Latest Updates First"
            isCompleted={completedTasks.email}
            onComplete={() => handleTaskComplete("email")}
            bgColor="bg-purple-500"
          />

          <WaitlistCard
            icon={<Twitter className="h-6 w-6 text-white" />}
            title="Follow Us On"
            description="To Stay Updated On Latest News"
            isCompleted={completedTasks.twitter}
            onComplete={() => handleTaskComplete("twitter")}
            bgColor="bg-blue-500"
          />

          <WaitlistCard
            icon={
              <svg className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419-.0189 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"/>
              </svg>
            }
            title="Join Our Discord"
            description="Join & Become A Part Of our Community"
            isCompleted={completedTasks.discord}
            onComplete={() => handleTaskComplete("discord")}
            bgColor="bg-indigo-500"
          />
        </div>

        {/* Enter Button */}
        <Button
          onClick={handleEnterNeftit}
          disabled={!allTasksCompleted || !email}
          className={`w-full h-14 rounded-xl text-lg font-semibold tracking-wider transition-all duration-300 ${
            allTasksCompleted && email
              ? "bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white shadow-lg hover:shadow-xl transform hover:scale-105"
              : "bg-gray-600 text-gray-400 cursor-not-allowed"
          }`}
        >
          ENTER NEFTIT →
        </Button>

        {/* Bottom Text */}
        <div className="text-center">
          <p className="text-purple-200 text-sm">
            <span className="text-purple-300 font-semibold">1,247</span> Believers Joined Already!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;

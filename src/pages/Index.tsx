import { useState } from "react";
import { Mail, Twitter, Wallet } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";
import WaitlistCard from "@/components/WaitlistCard";
import Leaderboard from "@/components/Leaderboard";
import MainNav from "@/components/MainNav";
import Footer from "@/components/Footer";

const Index = () => {
  const [completedTasks, setCompletedTasks] = useState({
    email: false,
    wallet: false,
    twitter: false,
    discord: false
  });
  const [showLeaderboard, setShowLeaderboard] = useState(false);
  const [email, setEmail] = useState("");
  const [walletAddress, setWalletAddress] = useState("");
  const [twitterUsername, setTwitterUsername] = useState("");
  const [discordUsername, setDiscordUsername] = useState("");
  const [userName, setUserName] = useState("");
  const [userRank, setUserRank] = useState(1);
  const [referralCount, setReferralCount] = useState(12);

  // States to show input fields
  const [showEmailInput, setShowEmailInput] = useState(false);
  const [showWalletInput, setShowWalletInput] = useState(false);
  const [showTwitterInput, setShowTwitterInput] = useState(false);
  const [showDiscordInput, setShowDiscordInput] = useState(false);

  const handleTaskComplete = (task: string) => {
    if (task === "email") {
      setShowEmailInput(prev => !prev);
    } else if (task === "wallet") {
      setShowWalletInput(prev => !prev);
    } else if (task === "twitter") {
      // Redirect to Twitter follow link
      window.open("https://twitter.com/intent/follow?screen_name=neftitxyz", "_blank");
      setShowTwitterInput(true);
    } else if (task === "discord") {
      // Redirect to Discord join link
      window.open("https://discord.gg/GHc9samP", "_blank");
      setShowDiscordInput(true);
    }
  };

  const handleEmailSubmit = () => {
    if (!email) {
      toast({
        title: "Email Required",
        description: "Please enter your email address.",
        variant: "destructive"
      });
      return;
    }
    setCompletedTasks(prev => ({
      ...prev,
      email: true
    }));
    setShowEmailInput(false);
    toast({
      title: "Email Submitted!",
      description: "Email task completed successfully."
    });
  };

  const handleWalletSubmit = () => {
    if (!walletAddress) {
      toast({
        title: "Wallet Address Required",
        description: "Please enter your EVM wallet address.",
        variant: "destructive"
      });
      return;
    }
    setCompletedTasks(prev => ({
      ...prev,
      wallet: true
    }));
    setShowWalletInput(false);
    toast({
      title: "Wallet Address Submitted!",
      description: "Wallet task completed successfully."
    });
  };

  const handleTwitterSubmit = () => {
    if (!twitterUsername) {
      toast({
        title: "Username Required",
        description: "Please enter your Twitter username.",
        variant: "destructive"
      });
      return;
    }
    setCompletedTasks(prev => ({
      ...prev,
      twitter: true
    }));
    setShowTwitterInput(false);
    toast({
      title: "Twitter Task Completed!",
      description: "Twitter task completed successfully."
    });
  };

  const handleDiscordSubmit = () => {
    if (!discordUsername) {
      toast({
        title: "Username Required",
        description: "Please enter your Discord username.",
        variant: "destructive"
      });
      return;
    }
    setCompletedTasks(prev => ({
      ...prev,
      discord: true
    }));
    setShowDiscordInput(false);
    toast({
      title: "Discord Task Completed!",
      description: "Discord task completed successfully."
    });
  };

  const allTasksCompleted = Object.values(completedTasks).every(Boolean);

  const handleEnterNeftit = () => {
    if (allTasksCompleted && email) {
      setUserName(email.split('@')[0].toUpperCase());
      setShowLeaderboard(true);
      toast({
        title: "Welcome to NEFTIT!",
        description: "You're now part of the community!"
      });
    }
  };

  if (showLeaderboard) {
    return (
      <div className="min-h-screen w-full">
        <MainNav />
        <Leaderboard userName={userName} userRank={userRank} referralCount={referralCount} email={email} />
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full flex flex-col">
      <MainNav />
      
      {/* Main Content */}
      <div 
        className="flex-1 flex flex-col items-center justify-center px-4 py-6 pt-20 sm:pt-24 relative overflow-hidden" 
        style={{
          backgroundImage: 'url(/lovable-uploads/1161bd19-0bbb-4e19-ab51-1f508be196c9.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed'
        }}
      >
        {/* Background overlay for better readability */}
        <div className="absolute inset-0 bg-black/20 z-0"></div>
        
        {/* Content Container - Responsive width */}
        <div className="w-full max-w-md lg:max-w-lg xl:max-w-xl space-y-4 relative z-10">
          {/* Header */}
          <div className="text-center space-y-2 mb-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-wider leading-tight">
              JOIN THE WAITLIST
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-white/90 font-medium px-4">
              for the next level web3 experience
            </p>
          </div>

          {/* Task Cards */}
          <div className="space-y-4">
            <WaitlistCard 
              icon={<Mail className="h-5 w-5 text-white" />} 
              title="Enter email address" 
              description="To Receive Latest Updates First" 
              isCompleted={completedTasks.email} 
              onComplete={() => handleTaskComplete("email")} 
              bgColor="bg-purple-600" 
            />

            {/* Email Input Field */}
            {showEmailInput && (
              <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-4 space-y-3">
                <Input 
                  type="email" 
                  placeholder="Enter your email address" 
                  value={email} 
                  onChange={e => setEmail(e.target.value)} 
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/60 h-12 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent" 
                />
                <Button 
                  onClick={handleEmailSubmit} 
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white h-12 rounded-lg font-bold text-sm transition-all duration-200"
                >
                  Submit Email
                </Button>
              </div>
            )}

            <WaitlistCard 
              icon={<Wallet className="h-5 w-5 text-white" />} 
              title="Enter EVM address" 
              description="To Access Web3 Features" 
              isCompleted={completedTasks.wallet} 
              onComplete={() => handleTaskComplete("wallet")} 
              bgColor="bg-purple-600" 
            />

            {/* Wallet Input Field */}
            {showWalletInput && (
              <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-4 space-y-3">
                <Input 
                  type="text" 
                  placeholder="Enter your EVM wallet address" 
                  value={walletAddress} 
                  onChange={e => setWalletAddress(e.target.value)} 
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/60 h-12 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent" 
                />
                <Button 
                  onClick={handleWalletSubmit} 
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white h-12 rounded-lg font-bold text-sm transition-all duration-200"
                >
                  Submit Wallet Address
                </Button>
              </div>
            )}

            <WaitlistCard 
              icon={
                <svg className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              } 
              title="Follow Us On" 
              description="To Stay Updated On Latest News" 
              isCompleted={completedTasks.twitter} 
              onComplete={() => handleTaskComplete("twitter")} 
              bgColor="bg-purple-600" 
            />

            {/* Twitter Input Field */}
            {showTwitterInput && (
              <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-4 space-y-3">
                <Input 
                  type="text" 
                  placeholder="Enter your Twitter username" 
                  value={twitterUsername} 
                  onChange={e => setTwitterUsername(e.target.value)} 
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/60 h-12 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent" 
                />
                <Button 
                  onClick={handleTwitterSubmit} 
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white h-12 rounded-lg font-bold text-sm transition-all duration-200"
                >
                  Submit Twitter Username
                </Button>
              </div>
            )}

            <WaitlistCard 
              icon={
                <svg className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419-.0189 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" />
                </svg>
              } 
              title="Join Our Discord" 
              description="Join & Become A Part Of our Community" 
              isCompleted={completedTasks.discord} 
              onComplete={() => handleTaskComplete("discord")} 
              bgColor="bg-purple-600" 
            />

            {/* Discord Input Field */}
            {showDiscordInput && (
              <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-4 space-y-3">
                <Input 
                  type="text" 
                  placeholder="Enter your Discord username" 
                  value={discordUsername} 
                  onChange={e => setDiscordUsername(e.target.value)} 
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/60 h-12 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent" 
                />
                <Button 
                  onClick={handleDiscordSubmit} 
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white h-12 rounded-lg font-bold text-sm transition-all duration-200"
                >
                  Submit Discord Username
                </Button>
              </div>
            )}
          </div>

          {/* Enter Button */}
          <div className="pt-8">
            <Button 
              onClick={handleEnterNeftit} 
              disabled={!allTasksCompleted} 
              className={`w-full h-14 rounded-xl text-base font-bold tracking-wider transition-all duration-300 ${
                allTasksCompleted 
                  ? "bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white border border-purple-500 shadow-lg hover:shadow-xl" 
                  : "bg-gray-700/50 text-gray-400 cursor-not-allowed border border-gray-600"
              }`}
            >
              ENTER NEFTIT →
            </Button>
          </div>

          {/* Bottom spacing */}
          <div className="h-8"></div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Index;

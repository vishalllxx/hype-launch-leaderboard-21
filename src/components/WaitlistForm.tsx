
import { useState } from "react";
import { Mail, Wallet } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import WaitlistCard from "@/components/WaitlistCard";
import TaskInputField from "@/components/TaskInputField";
import EnterButton from "@/components/EnterButton";

interface WaitlistFormProps {
  onEnterNeftit: (email: string) => void;
}

const WaitlistForm = ({ onEnterNeftit }: WaitlistFormProps) => {
  const [completedTasks, setCompletedTasks] = useState({
    email: false,
    wallet: false,
    twitter: false,
    discord: false
  });
  const [email, setEmail] = useState("");
  const [walletAddress, setWalletAddress] = useState("");
  const [twitterUsername, setTwitterUsername] = useState("");
  const [discordUsername, setDiscordUsername] = useState("");

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
      onEnterNeftit(email);
    }
  };

  return (
    <div className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl 2xl:max-w-3xl space-y-4 lg:space-y-6 relative z-10">
      {/* Header */}
      <div className="text-center space-y-2 mb-8 lg:mb-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold text-white tracking-wider leading-tight">
          JOIN THE WAITLIST
        </h1>
        <p className="text-lg sm:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl text-white/90 font-medium px-4">
          for the next level web3 experience
        </p>
      </div>

      {/* Task Cards */}
      <div className="space-y-4 lg:space-y-6">
        <WaitlistCard 
          icon={<Mail className="h-5 w-5 lg:h-6 lg:w-6 xl:h-7 xl:w-7 text-white" />} 
          title="Enter email address" 
          description="To Receive Latest Updates First" 
          isCompleted={completedTasks.email} 
          onComplete={() => handleTaskComplete("email")} 
          bgColor="bg-purple-600" 
        />

        {/* Email Input Field */}
        {showEmailInput && (
          <TaskInputField
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={setEmail}
            onSubmit={handleEmailSubmit}
            buttonText="Submit Email"
          />
        )}

        <WaitlistCard 
          icon={<Wallet className="h-5 w-5 lg:h-6 lg:w-6 xl:h-7 xl:w-7 text-white" />} 
          title="Enter EVM address" 
          description="To Access Web3 Features" 
          isCompleted={completedTasks.wallet} 
          onComplete={() => handleTaskComplete("wallet")} 
          bgColor="bg-purple-600" 
        />

        {/* Wallet Input Field */}
        {showWalletInput && (
          <TaskInputField
            type="text"
            placeholder="Enter your EVM wallet address"
            value={walletAddress}
            onChange={setWalletAddress}
            onSubmit={handleWalletSubmit}
            buttonText="Submit Wallet Address"
          />
        )}

        <WaitlistCard 
          icon={
            <svg className="h-5 w-5 lg:h-6 lg:w-6 xl:h-7 xl:w-7 text-white" viewBox="0 0 24 24" fill="currentColor">
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
          <TaskInputField
            type="text"
            placeholder="Enter your Twitter username"
            value={twitterUsername}
            onChange={setTwitterUsername}
            onSubmit={handleTwitterSubmit}
            buttonText="Submit Twitter Username"
          />
        )}

        <WaitlistCard 
          icon={
            <svg className="h-5 w-5 lg:h-6 lg:w-6 xl:h-7 xl:w-7 text-white" viewBox="0 0 24 24" fill="currentColor">
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
          <TaskInputField
            type="text"
            placeholder="Enter your Discord username"
            value={discordUsername}
            onChange={setDiscordUsername}
            onSubmit={handleDiscordSubmit}
            buttonText="Submit Discord Username"
          />
        )}
      </div>

      {/* Enter Button */}
      <EnterButton 
        allTasksCompleted={allTasksCompleted} 
        onEnterNeftit={handleEnterNeftit} 
      />

      {/* Bottom spacing */}
      <div className="h-8 lg:h-12"></div>
    </div>
  );
};

export default WaitlistForm;

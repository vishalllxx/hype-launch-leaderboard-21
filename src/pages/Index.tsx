
import { useState } from "react";
import { toast } from "@/hooks/use-toast";
import Leaderboard from "@/components/Leaderboard";
import MainNav from "@/components/MainNav";
import Footer from "@/components/Footer";
import WaitlistForm from "@/components/WaitlistForm";

const Index = () => {
  const [showLeaderboard, setShowLeaderboard] = useState(false);
  const [userName, setUserName] = useState("");
  const [userRank, setUserRank] = useState(1);
  const [referralCount, setReferralCount] = useState(12);
  const [userEmail, setUserEmail] = useState("");

  const handleEnterNeftit = (email: string) => {
    setUserName(email.split('@')[0].toUpperCase());
    setUserEmail(email);
    setShowLeaderboard(true);
    toast({
      title: "Welcome to NEFTIT!",
      description: "You're now part of the community!"
    });
  };

  if (showLeaderboard) {
    return (
      <div className="min-h-screen w-full">
        <MainNav />
        <Leaderboard userName={userName} userRank={userRank} referralCount={referralCount} email={userEmail} />
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full flex flex-col">
      <MainNav />
      
      {/* Main Content */}
      <div 
        className="flex-1 flex flex-col items-center justify-center px-4 py-6 pt-20 sm:pt-24 lg:pt-28 xl:pt-32 relative overflow-hidden" 
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
        
        {/* Content Container */}
        <WaitlistForm onEnterNeftit={handleEnterNeftit} />
      </div>

      <Footer />
    </div>
  );
};

export default Index;

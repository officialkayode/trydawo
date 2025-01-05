import { Building2, Users2, Wallet, Shield, TrendingUp, DollarSign } from "lucide-react";

const Features = () => {
  return (
    <section className="section bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">How Dawo Works</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-6">Back the Founders You Believe In. Grow Together.</h3>
          <p className="text-lg text-gray-600">
            We're building Africa's first community investment platform that lets you invest directly in founders you know and trust. Whether it's your friend building the next big thing, or that local startup you've watched grow from day one - now you can be part of their journey and success.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-bold mb-6">For Startups</h3>
            <div className="flex gap-4">
              <Building2 className="h-8 w-8 text-primary flex-shrink-0" />
              <div>
                <h4 className="font-semibold mb-2">Launch Community Rounds</h4>
                <p className="text-gray-600">Create investment opportunities that turn your most engaged supporters into invested stakeholders.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Users2 className="h-8 w-8 text-primary flex-shrink-0" />
              <div>
                <h4 className="font-semibold mb-2">Build Investor Communities</h4>
                <p className="text-gray-600">Transform your users and supporters into a community of investors who are committed to your long-term success.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <TrendingUp className="h-8 w-8 text-primary flex-shrink-0" />
              <div>
                <h4 className="font-semibold mb-2">Community-Driven Growth</h4>
                <p className="text-gray-600">Leverage your community's network and resources to accelerate your startup's growth journey.</p>
              </div>
            </div>
          </div>
          
          <div className="space-y-8">
            <h3 className="text-2xl font-bold mb-6">For Investors</h3>
            <div className="flex gap-4">
              <Wallet className="h-8 w-8 text-primary flex-shrink-0" />
              <div>
                <h4 className="font-semibold mb-2">Join Community Rounds</h4>
                <p className="text-gray-600">Participate in community investment rounds of promising African startups, starting from ₦50,000.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Shield className="h-8 w-8 text-primary flex-shrink-0" />
              <div>
                <h4 className="font-semibold mb-2">Secure Investment Platform</h4>
                <p className="text-gray-600">Invest with confidence through our SEC-compliant platform designed for community rounds.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <DollarSign className="h-8 w-8 text-primary flex-shrink-0" />
              <div>
                <h4 className="font-semibold mb-2">Active Community Member</h4>
                <p className="text-gray-600">Become an active member of startup communities and contribute to their growth journey beyond just capital.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;

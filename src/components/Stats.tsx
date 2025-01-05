import { TrendingUp, Users, Shield, DollarSign } from "lucide-react";

const Stats = () => {
  return (
    <section className="section bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
          Why Dawo Matters
        </h2>
        <p className="text-lg text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          We're building Africa's first community investment platform that brings together startups and local investors through community rounds, creating meaningful connections and shared success between founders and their supporters.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="stat-card">
            <TrendingUp className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-2xl font-bold mb-2">Community Rounds</h3>
            <p className="text-gray-600">Connecting startups with their most engaged supporters through community-driven investment rounds</p>
          </div>
          <div className="stat-card">
            <Users className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-2xl font-bold mb-2">Investor Community</h3>
            <p className="text-gray-600">Building a vibrant community of local investors who actively support and engage with promising startups</p>
          </div>
          <div className="stat-card">
            <Shield className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-2xl font-bold mb-2">Shared Success</h3>
            <p className="text-gray-600">Creating alignment between startups and their community of investors for long-term growth</p>
          </div>
          <div className="stat-card">
            <DollarSign className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-2xl font-bold mb-2">Active Participation</h3>
            <p className="text-gray-600">Enabling investors to actively participate in startup growth through community rounds starting from $10 in your local currency</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
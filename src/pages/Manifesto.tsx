import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";

const Manifesto = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-12">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto space-y-8">
            {/* What is Dawo? */}
            <section className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold text-primary">What is Dawo?</h1>
              <p className="text-xl text-gray-600">
                Dawo is creating a crowdfunding platform for African startups.
              </p>
              <p className="text-lg text-gray-600">
                Our mission is simple: turn community (both local and diaspora) to angel investors by giving them the chance to invest in the future of Africa through its startups, and startups the opportunity to raise funds through their communities.
              </p>
            </section>

            {/* Our Vision */}
            <section className="space-y-4">
              <h2 className="text-3xl font-bold text-primary">Our Vision</h2>
              <p className="text-lg text-gray-600">
                We envision an Africa where Startups thrive with support from their communities, scaling solutions that address local challenges and additionally, having a seat at solving global challenges. Tech investment is no longer the privilege of a few but a collective opportunity for many.
              </p>
            </section>

            {/* Our Commitment */}
            <section className="space-y-4">
              <h2 className="text-3xl font-bold text-primary">Our Commitment</h2>
              <p className="text-lg text-gray-600">We are committed to building a platform that:</p>
              <ul className="space-y-2 text-lg text-gray-600 list-disc pl-6">
                <li><strong>Empowers Startups:</strong> Providing an environment for startups to raise funds easily.</li>
                <li><strong>Engages Communities:</strong> Offering communities the opportunity to invest in the continent's brightest ideas and share in their success.</li>
                <li><strong>Drives Economic Impact:</strong> Leveraging diaspora investment to boost local economies, fund infrastructure, and create lasting value.</li>
              </ul>
            </section>

            {/* Impact of our approach */}
            <section className="space-y-4">
              <h2 className="text-3xl font-bold text-primary">Impact of our approach</h2>
              <p className="text-lg text-gray-600">
                We believe the future of Africa lies in fostering homegrown innovation and entrepreneurship. By enabling startups to fundraise locally and providing communities the tools to invest, we can:
              </p>
              <ul className="space-y-2 text-lg text-gray-600 list-disc pl-6">
                <li><strong>Bring Tech Investment to Everyone:</strong> It's time to break barriers and make investing in African startups something anyone can do. Let's turn everyday Africans into owners and drivers of our tech future.</li>
                <li><strong>Champion African Solutions:</strong> Local problems need local solutions. By focusing on raising funds in our own currencies, we're not just cutting costs—we're building a tech ecosystem that reflects Africa's strength, resilience, and brilliance.</li>
              </ul>
            </section>

            {/* Call to Action */}
            <section className="space-y-4 bg-primary/5 p-6 rounded-lg">
              <h2 className="text-3xl font-bold text-primary">Are you in?</h2>
              <p className="text-lg text-gray-600">
                This is more than a platform—it's a movement. A movement to transform how Africa builds, funds, and scales its future. Together, we can democratize tech investment, strengthen local economies, and elevate African startups to the rightful position as a leader!
              </p>
              <Link to="https://tally.so/r/wkOKa6">
                <Button className="mt-2" size="lg">
                  Join the Movement <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Manifesto;
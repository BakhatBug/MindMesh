import { Users, Shield, Award, TrendingUp, Target, Zap, Network } from "lucide-react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Card } from "./ui/card";

export function AboutPage() {
  const features = [
    {
      icon: Shield,
      title: "AI-Powered Moderation",
      description: "Advanced algorithms ensure quality discussions, detect plagiarism, and maintain academic integrity across all conversations.",
    },
    {
      icon: Network,
      title: "Domain Categorization",
      description: "Organized by academic disciplines and sub-fields, making it easy to find relevant discussions and experts in your area.",
    },
    {
      icon: Award,
      title: "Reputation Scores",
      description: "Transparent merit-based system that rewards quality contributions, peer review, and academic collaboration.",
    },
    {
      icon: Users,
      title: "Verified Community",
      description: "All members verified through institutional email addresses, ensuring authentic academic discourse.",
    },
    {
      icon: Zap,
      title: "Real-Time Collaboration",
      description: "Instant notifications, live discussions, and seamless integration with research workflows.",
    },
    {
      icon: TrendingUp,
      title: "Impact Tracking",
      description: "Track the reach and influence of your contributions across the academic community.",
    },
  ];

  const stats = [
    { value: "50,000+", label: "Verified Academics" },
    { value: "150+", label: "Countries" },
    { value: "500+", label: "Institutions" },
    { value: "1M+", label: "Discussions" },
  ];

  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-olive-600 to-olive-800">
              <span className="text-2xl text-white">MM</span>
            </div>
          </div>
          <h1 className="text-white mb-4">About MindMesh</h1>
          <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
            Bridging intellectual gaps through peer-to-peer academic exchange
          </p>
        </div>

        {/* Mission Statement */}
        <Card className="bg-neutral-900 border-neutral-800 p-8 mb-12">
          <div className="flex items-center gap-3 mb-4">
            <Target className="h-6 w-6 text-olive-500" />
            <h2 className="text-white">Our Mission</h2>
          </div>
          <p className="text-neutral-300 leading-relaxed mb-4">
            MindMesh is revolutionizing academic collaboration by creating a global platform where 
            researchers, educators, and students can engage in meaningful intellectual discourse. 
            We believe that the best ideas emerge from diverse perspectives and rigorous peer review.
          </p>
          <p className="text-neutral-300 leading-relaxed">
            By combining the community dynamics of Reddit, the knowledge-sharing of Quora, and the 
            professional networking of LinkedIn, we've created a unique space designed specifically 
            for the academic community. Our platform facilitates genuine scholarly exchange while 
            maintaining the highest standards of academic integrity.
          </p>
        </Card>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-neutral-900 border-neutral-800 p-6 text-center">
              <div className="text-3xl text-olive-500 mb-2">{stat.value}</div>
              <div className="text-sm text-neutral-400">{stat.label}</div>
            </Card>
          ))}
        </div>

        {/* Features Grid */}
        <div className="mb-12">
          <h2 className="text-white mb-6 text-center">Platform Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="bg-neutral-900 border-neutral-800 p-6 hover:border-olive-600/50 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-olive-600/20">
                      <feature.icon className="h-6 w-6 text-olive-500" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-white mb-2">{feature.title}</h3>
                    <p className="text-sm text-neutral-400">{feature.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Vision Section */}
        <Card className="bg-gradient-to-r from-olive-950 to-neutral-950 border-olive-800 p-8 mb-12">
          <h2 className="text-white mb-4">Our Vision</h2>
          <p className="text-neutral-300 leading-relaxed mb-4">
            We envision a world where geographical boundaries don't limit intellectual collaboration. 
            MindMesh is building the infrastructure for the next generation of academic discovery, 
            where ideas can be shared, challenged, and refined in real-time by a global community of experts.
          </p>
          <p className="text-neutral-300 leading-relaxed">
            Inspired by the collaborative spirit of Stack Overflow and the academic rigor of traditional 
            peer review, we're creating a platform that accelerates the pace of discovery while maintaining 
            the integrity that academic discourse demands.
          </p>
        </Card>

        {/* Values */}
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-neutral-900 border-neutral-800 p-6">
            <h3 className="text-olive-500 mb-3">Academic Integrity</h3>
            <p className="text-sm text-neutral-400">
              We maintain the highest standards of scholarly conduct and ensure all discussions are 
              grounded in evidence and rigorous methodology.
            </p>
          </Card>
          <Card className="bg-neutral-900 border-neutral-800 p-6">
            <h3 className="text-olive-500 mb-3">Open Collaboration</h3>
            <p className="text-sm text-neutral-400">
              We believe in the power of diverse perspectives and create spaces where respectful 
              intellectual debate can flourish.
            </p>
          </Card>
          <Card className="bg-neutral-900 border-neutral-800 p-6">
            <h3 className="text-olive-500 mb-3">Innovation</h3>
            <p className="text-sm text-neutral-400">
              We continuously evolve our platform using cutting-edge technology to better serve 
              the academic community's needs.
            </p>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
}

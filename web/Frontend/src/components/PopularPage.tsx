import { useState } from "react";
import { TrendingUp, Crown, Award } from "lucide-react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Card } from "./ui/card";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { Badge } from "./ui/badge";

export function PopularPage({ onNavigate }: { onNavigate?: (page: string) => void }) {
  const [timeFilter, setTimeFilter] = useState("weekly");
  const [sortBy, setSortBy] = useState("endorsements");

  const popularPosts = [
    {
      title: "Revolutionary Breakthrough in Quantum Entanglement Could Transform Computing",
      summary: "Recent experiments at CERN have demonstrated sustained quantum entanglement at room temperature, potentially eliminating the need for expensive cooling systems in quantum computers.",
      category: "Quantum Physics",
      author: { name: "Dr. Elena Rodriguez", role: "Quantum Physicist" },
      endorsements: 1842,
      refutations: 45,
      replies: 387,
      timestamp: "3 days ago",
      views: 12500,
    },
    {
      title: "Climate Model Predictions: Why We're Underestimating Arctic Ice Loss",
      summary: "New satellite data combined with improved modeling techniques suggests current climate models may be underestimating Arctic sea ice decline by up to 30%.",
      category: "Climate Science",
      author: { name: "Dr. Maya Patel", role: "Climate Scientist" },
      endorsements: 1654,
      refutations: 234,
      replies: 567,
      timestamp: "5 days ago",
      views: 15200,
    },
    {
      title: "Ancient Mesopotamian Tablet Reveals Previously Unknown Mathematical System",
      summary: "Archaeologists have deciphered a 4,000-year-old clay tablet that appears to document a base-60 trigonometric system predating Greek mathematics by over 1,000 years.",
      category: "Archaeology",
      author: { name: "Prof. David Morrison", role: "Ancient History Scholar" },
      endorsements: 1523,
      refutations: 98,
      replies: 445,
      timestamp: "4 days ago",
      views: 11800,
    },
    {
      title: "CRISPR-Based Treatment Shows Promise in Hereditary Blindness Clinical Trial",
      summary: "Phase 2 trials demonstrate significant vision improvement in patients with Leber congenital amaurosis. All participants showed measurable gains in light perception.",
      category: "Genetics",
      author: { name: "Dr. Sarah Williams", role: "Gene Therapy Specialist" },
      endorsements: 1456,
      refutations: 67,
      replies: 289,
      timestamp: "2 days ago",
      views: 9800,
    },
    {
      title: "New Meta-Analysis Questions Traditional Approaches to Machine Learning Bias",
      summary: "A comprehensive review of 150+ studies suggests that current bias mitigation techniques in ML models may inadvertently introduce new forms of discrimination.",
      category: "Computer Science",
      author: { name: "Prof. James Chen", role: "AI Ethics Researcher" },
      endorsements: 1289,
      refutations: 178,
      replies: 423,
      timestamp: "6 days ago",
      views: 13400,
    },
  ];

  const topContributors = [
    { name: "Dr. Elena Rodriguez", posts: 145, endorsements: 12400, badge: "Top Contributor" },
    { name: "Prof. James Chen", posts: 132, endorsements: 11200, badge: "Expert" },
    { name: "Dr. Maya Patel", posts: 128, endorsements: 10800, badge: "Verified Researcher" },
    { name: "Prof. David Morrison", posts: 98, endorsements: 8900, badge: "Rising Star" },
    { name: "Dr. Sarah Williams", posts: 87, endorsements: 7600, badge: "Active Member" },
  ];

  return (
    <div className="min-h-screen bg-black">
      <Header onNavigate={onNavigate} />
      
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Page Header */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="h-6 w-6 text-olive-500" />
                <h1 className="text-white">Popular Discussions</h1>
              </div>
              <p className="text-neutral-400">
                Trending academic conversations from verified researchers worldwide
              </p>
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-4 mb-6">
              <div className="flex items-center gap-2">
                <span className="text-sm text-neutral-400">Time:</span>
                <select
                  value={timeFilter}
                  onChange={(e) => setTimeFilter(e.target.value)}
                  className="bg-neutral-900 border border-neutral-800 text-neutral-300 text-sm rounded-lg px-3 py-2 focus:ring-olive-500 focus:border-olive-500"
                >
                  <option value="daily">Today</option>
                  <option value="weekly">This Week</option>
                  <option value="monthly">This Month</option>
                  <option value="all">All Time</option>
                </select>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-sm text-neutral-400">Sort by:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-neutral-900 border border-neutral-800 text-neutral-300 text-sm rounded-lg px-3 py-2 focus:ring-olive-500 focus:border-olive-500"
                >
                  <option value="endorsements">Most Endorsed</option>
                  <option value="views">Most Viewed</option>
                  <option value="replies">Most Discussed</option>
                  <option value="recent">Most Recent</option>
                </select>
              </div>

              <select className="bg-neutral-900 border border-neutral-800 text-neutral-300 text-sm rounded-lg px-3 py-2 focus:ring-olive-500 focus:border-olive-500">
                <option value="">All Categories</option>
                <option value="physics">Physics</option>
                <option value="cs">Computer Science</option>
                <option value="biology">Biology</option>
                <option value="math">Mathematics</option>
                <option value="humanities">Humanities</option>
              </select>
            </div>

            {/* Posts List */}
            <div className="space-y-4">
              {popularPosts.map((post, index) => (
                <div key={index} className="relative">
                  {index < 3 && (
                    <div className="absolute -left-3 top-6 z-10">
                      <Badge className="bg-olive-600 text-white border-olive-700">
                        #{index + 1}
                      </Badge>
                    </div>
                  )}
                  <Card className="bg-neutral-900 border-neutral-800 p-6">
                    <h3 className="text-lg text-white mb-2">{post.title}</h3>
                    <p className="text-neutral-400 mb-4">{post.summary}</p>
                    <div className="flex items-center justify-between text-sm text-neutral-500">
                      <span>{post.category}</span>
                      <span>{post.timestamp}</span>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-20 space-y-6">
              {/* Top Contributors */}
              <Card className="bg-neutral-900 border-neutral-800 p-4">
                <div className="flex items-center gap-2 mb-4">
                  <Crown className="h-5 w-5 text-olive-500" />
                  <h3 className="text-white">Top Contributors</h3>
                </div>
                <div className="space-y-3">
                  {topContributors.map((contributor, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 cursor-pointer hover:bg-neutral-800 p-2 rounded-lg transition-colors"
                    >
                      <div className="flex-shrink-0 relative">
                        <Avatar className="h-10 w-10">
                          <AvatarFallback className="bg-olive-700 text-white text-xs">
                            {contributor.name.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        {index === 0 && (
                          <Crown className="absolute -top-1 -right-1 h-4 w-4 text-yellow-500" />
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm text-neutral-200 truncate">{contributor.name}</p>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-xs text-olive-500">{contributor.endorsements.toLocaleString()} endorsements</span>
                        </div>
                        <Badge variant="outline" className="text-xs border-olive-600/50 text-olive-400 mt-1">
                          {contributor.badge}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Recommended Categories */}
              <Card className="bg-neutral-900 border-neutral-800 p-4">
                <div className="flex items-center gap-2 mb-4">
                  <Award className="h-5 w-5 text-olive-500" />
                  <h3 className="text-white">Trending Categories</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {["Quantum Physics", "AI Ethics", "Climate Science", "Genetics", "Archaeology", "Neuroscience"].map((category) => (
                    <Badge
                      key={category}
                      variant="outline"
                      className="cursor-pointer border-neutral-700 text-neutral-300 hover:border-olive-500 hover:text-olive-500 transition-colors"
                    >
                      {category}
                    </Badge>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

import { Mail, MapPin, Calendar, Award, TrendingUp, Users, MessageSquare, Edit, Settings } from "lucide-react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Card } from "./ui/card";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

export function ProfilePage({ onNavigate }: { onNavigate?: (page: string) => void }) {
  const userProfile = {
    name: "Dr. Sarah Chen",
    role: "Professor of Artificial Intelligence",
    institution: "Stanford University",
    location: "Stanford, CA",
    joinDate: "January 2024",
    email: "sarah.chen@stanford.edu",
    bio: "AI researcher focused on machine learning ethics and explainable AI. Passionate about making AI systems more transparent and accountable. Published 50+ papers in leading conferences.",
    stats: {
      posts: 145,
      replies: 892,
      endorsements: 12400,
      followers: 2345,
      following: 456,
    },
    badges: [
      { name: "Top Contributor", color: "text-yellow-500" },
      { name: "Expert in AI Ethics", color: "text-olive-500" },
      { name: "Verified Researcher", color: "text-blue-500" },
      { name: "Community Leader", color: "text-purple-500" },
    ],
  };

  const userPosts = [
    {
      title: "New Meta-Analysis Questions Traditional Approaches to Machine Learning Bias",
      summary: "A comprehensive review of 150+ studies suggests that current bias mitigation techniques in ML models may inadvertently introduce new forms of discrimination.",
      category: "Computer Science",
      author: { name: "Dr. Sarah Chen", role: "AI Ethics Researcher" },
      endorsements: 289,
      refutations: 45,
      replies: 124,
      timestamp: "5 days ago",
    },
    {
      title: "Explainable AI: Bridging the Gap Between Performance and Interpretability",
      summary: "Exploring methods to make complex AI systems more interpretable without sacrificing accuracy. Case studies from healthcare and finance.",
      category: "Artificial Intelligence",
      author: { name: "Dr. Sarah Chen", role: "AI Ethics Researcher" },
      endorsements: 567,
      refutations: 23,
      replies: 89,
      timestamp: "2 weeks ago",
    },
  ];

  const endorsedPosts = [
    {
      title: "Revolutionary Breakthrough in Quantum Entanglement Could Transform Computing",
      summary: "Recent experiments at CERN have demonstrated sustained quantum entanglement at room temperature.",
      category: "Quantum Physics",
      author: { name: "Dr. Elena Rodriguez", role: "Quantum Physicist" },
      endorsements: 342,
      refutations: 12,
      replies: 87,
      timestamp: "1 week ago",
    },
  ];

  return (
    <div className="min-h-screen bg-black">
      <Header onNavigate={onNavigate} />
      
      <main className="container mx-auto px-4 py-8">
        {/* Profile Header */}
        <Card className="bg-neutral-900 border-neutral-800 p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Avatar */}
            <div className="flex-shrink-0">
              <Avatar className="h-24 w-24 md:h-32 md:w-32">
                <AvatarFallback className="bg-olive-700 text-white text-2xl">
                  {userProfile.name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
            </div>

            {/* Info */}
            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                <div>
                  <h1 className="text-white mb-2">{userProfile.name}</h1>
                  <p className="text-neutral-300 mb-2">{userProfile.role}</p>
                  <div className="flex flex-wrap gap-4 text-sm text-neutral-400">
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      <span>{userProfile.institution}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>Joined {userProfile.joinDate}</span>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" className="border-olive-600 text-olive-500 hover:bg-olive-600 hover:text-white">
                    <Edit className="h-4 w-4 mr-2" />
                    Edit Profile
                  </Button>
                  <Button variant="outline" className="border-neutral-700 text-neutral-300 hover:bg-neutral-800">
                    <Settings className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <p className="text-neutral-400 mb-4">{userProfile.bio}</p>

              {/* Badges */}
              <div className="flex flex-wrap gap-2 mb-4">
                {userProfile.badges.map((badge, index) => (
                  <Badge key={index} variant="outline" className={`border-neutral-700 ${badge.color}`}>
                    <Award className="h-3 w-3 mr-1" />
                    {badge.name}
                  </Badge>
                ))}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4 pt-4 border-t border-neutral-800">
                <div className="text-center">
                  <div className="text-2xl text-olive-500">{userProfile.stats.posts}</div>
                  <div className="text-xs text-neutral-500">Posts</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl text-olive-500">{userProfile.stats.replies}</div>
                  <div className="text-xs text-neutral-500">Replies</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl text-olive-500">{userProfile.stats.endorsements.toLocaleString()}</div>
                  <div className="text-xs text-neutral-500">Endorsements</div>
                </div>
                <div className="text-center cursor-pointer hover:text-olive-500 transition-colors">
                  <div className="text-2xl text-white">{userProfile.stats.followers.toLocaleString()}</div>
                  <div className="text-xs text-neutral-500">Followers</div>
                </div>
                <div className="text-center cursor-pointer hover:text-olive-500 transition-colors">
                  <div className="text-2xl text-white">{userProfile.stats.following}</div>
                  <div className="text-xs text-neutral-500">Following</div>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Tabbed Content */}
        <Tabs defaultValue="posts" className="w-full">
          <TabsList className="bg-neutral-900 border border-neutral-800 mb-6">
            <TabsTrigger value="posts" className="data-[state=active]:bg-olive-600 data-[state=active]:text-white">
              <MessageSquare className="h-4 w-4 mr-2" />
              Posts
            </TabsTrigger>
            <TabsTrigger value="endorsed" className="data-[state=active]:bg-olive-600 data-[state=active]:text-white">
              <TrendingUp className="h-4 w-4 mr-2" />
              Endorsed
            </TabsTrigger>
            <TabsTrigger value="followers" className="data-[state=active]:bg-olive-600 data-[state=active]:text-white">
              <Users className="h-4 w-4 mr-2" />
              Network
            </TabsTrigger>
          </TabsList>

          <TabsContent value="posts" className="space-y-4">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-white">My Posts ({userProfile.stats.posts})</h2>
              <select className="bg-neutral-900 border border-neutral-800 text-neutral-300 text-sm rounded-lg px-3 py-2 focus:ring-olive-500 focus:border-olive-500">
                <option>Most Recent</option>
                <option>Most Endorsed</option>
                <option>Most Discussed</option>
              </select>
            </div>
            {userPosts.map((post, index) => (
              <Card key={index} className="bg-neutral-900 border-neutral-800 p-6">
                <h3 className="text-lg text-white mb-2">{post.title}</h3>
                <p className="text-neutral-400 mb-4">{post.summary}</p>
                <div className="flex items-center justify-between text-sm text-neutral-500">
                  <span>{post.category}</span>
                  <span>{post.timestamp}</span>
                </div>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="endorsed" className="space-y-4">
            <h2 className="text-white mb-4">Endorsed Content</h2>
            {endorsedPosts.map((post, index) => (
              <Card key={index} className="bg-neutral-900 border-neutral-800 p-6">
                <h3 className="text-lg text-white mb-2">{post.title}</h3>
                <p className="text-neutral-400 mb-4">{post.summary}</p>
                <div className="flex items-center justify-between text-sm text-neutral-500">
                  <span>{post.category}</span>
                  <span>{post.timestamp}</span>
                </div>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="followers">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-neutral-900 border-neutral-800 p-6">
                <h3 className="text-white mb-4">Followers ({userProfile.stats.followers.toLocaleString()})</h3>
                <p className="text-neutral-400 text-sm">
                  Researchers and academics following your work
                </p>
              </Card>
              <Card className="bg-neutral-900 border-neutral-800 p-6">
                <h3 className="text-white mb-4">Following ({userProfile.stats.following})</h3>
                <p className="text-neutral-400 text-sm">
                  Experts and peers you're following for updates
                </p>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </main>

      <Footer />
    </div>
  );
}

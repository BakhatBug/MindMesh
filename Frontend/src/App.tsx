import { useState } from "react";
import { Header } from "./components/Header";
import { PostCard } from "./components/PostCard";
import { Sidebar } from "./components/Sidebar";
import { Footer } from "./components/Footer";
import { SignUpPage } from "./components/SignUpPage";
import { SignInPage } from "./components/SignInPage";
import { ForgotPasswordPage } from "./components/ForgotPasswordPage";
import { PopularPage } from "./components/PopularPage";
import { AboutPage } from "./components/AboutPage";
import { ContactPage } from "./components/ContactPage";
import { BlogPage } from "./components/BlogPage";
import { CareerPage } from "./components/CareerPage";
import { ProfilePage } from "./components/ProfilePage";
import { MessagingPage } from "./components/MessagingPage";
import { FollowersPage } from "./components/FollowersPage";
import { FollowingPage } from "./components/FollowingPage";
import { PolicyPage } from "./components/PolicyPage";
import { SelectCommunityPage } from "./components/SelectCommunityPage";
import { ManageCommunitiesPage } from "./components/ManageCommunitiesPage";
import { AdminStatsPage } from "./components/AdminStatsPage";
import { AdminModerationPage } from "./components/AdminModerationPage";
import { AdminRecheckFlagPage } from "./components/AdminRecheckFlagPage";
import { AdminUsersPage } from "./components/AdminUsersPage";
import { SearchPage } from "./components/SearchPage";
import { UserProfileViewPage } from "./components/UserProfileViewPage";
import { FAQsPage } from "./components/FAQsPage";
import { NotificationsPage } from "./components/NotificationsPage";
import { NavigationDemo } from "./components/NavigationDemo";

type Page = 
  | "home" 
  | "signup" 
  | "signin" 
  | "forgot" 
  | "popular" 
  | "about" 
  | "contact" 
  | "blog" 
  | "career" 
  | "profile"
  | "messages"
  | "followers"
  | "following"
  | "policy"
  | "communities"
  | "manage-communities"
  | "admin-stats"
  | "admin-moderation"
  | "admin-recheck"
  | "admin-users"
  | "search"
  | "user-profile"
  | "faqs"
  | "notifications";

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>("home");

  const posts = [
    {
      title: "Revolutionary Breakthrough in Quantum Entanglement Could Transform Computing",
      summary: "Recent experiments at CERN have demonstrated sustained quantum entanglement at room temperature, potentially eliminating the need for expensive cooling systems in quantum computers. This could accelerate commercial quantum computing applications significantly.",
      category: "Quantum Physics",
      author: {
        name: "Dr. Elena Rodriguez",
        role: "Quantum Physicist",
      },
      endorsements: 342,
      refutations: 12,
      replies: 87,
      timestamp: "2 hours ago",
    },
    {
      title: "New Meta-Analysis Questions Traditional Approaches to Machine Learning Bias",
      summary: "A comprehensive review of 150+ studies suggests that current bias mitigation techniques in ML models may inadvertently introduce new forms of discrimination. The paper proposes a novel framework for evaluating fairness across diverse demographic groups.",
      category: "Computer Science",
      author: {
        name: "Prof. James Chen",
        role: "AI Ethics Researcher",
      },
      endorsements: 289,
      refutations: 45,
      replies: 124,
      timestamp: "5 hours ago",
    },
    {
      title: "CRISPR-Based Treatment Shows Promise in Hereditary Blindness Clinical Trial",
      summary: "Phase 2 trials demonstrate significant vision improvement in patients with Leber congenital amaurosis. All participants showed measurable gains in light perception, with 40% achieving functional vision improvements.",
      category: "Genetics",
      author: {
        name: "Dr. Sarah Williams",
        role: "Gene Therapy Specialist",
      },
      endorsements: 456,
      refutations: 8,
      replies: 93,
      timestamp: "8 hours ago",
    },
    {
      title: "Ancient Mesopotamian Tablet Reveals Previously Unknown Mathematical System",
      summary: "Archaeologists have deciphered a 4,000-year-old clay tablet that appears to document a base-60 trigonometric system predating Greek mathematics by over 1,000 years. This discovery could rewrite our understanding of mathematical history.",
      category: "Archaeology",
      author: {
        name: "Prof. David Morrison",
        role: "Ancient History Scholar",
      },
      endorsements: 523,
      refutations: 34,
      replies: 156,
      timestamp: "12 hours ago",
    },
    {
      title: "Climate Model Predictions: Why We're Underestimating Arctic Ice Loss",
      summary: "New satellite data combined with improved modeling techniques suggests current climate models may be underestimating Arctic sea ice decline by up to 30%. The implications for global sea level rise projections are significant.",
      category: "Climate Science",
      author: {
        name: "Dr. Maya Patel",
        role: "Climate Scientist",
      },
      endorsements: 401,
      refutations: 67,
      replies: 203,
      timestamp: "1 day ago",
    },
    {
      title: "Neuroplasticity Study Reveals Brain's Remarkable Adaptation to Bilingualism",
      summary: "fMRI studies show that bilingual individuals develop unique neural pathways that enhance cognitive flexibility and delay age-related cognitive decline. The effect is most pronounced in those who learned second languages before age 12.",
      category: "Neuroscience",
      author: {
        name: "Dr. Thomas Anderson",
        role: "Cognitive Neuroscientist",
      },
      endorsements: 367,
      refutations: 19,
      replies: 78,
      timestamp: "1 day ago",
    },
  ];

  // Render different pages
  const renderPage = () => {
    switch (currentPage) {
      case "signup":
        return <SignUpPage />;
      case "signin":
        return <SignInPage />;
      case "forgot":
        return <ForgotPasswordPage />;
      case "popular":
        return <PopularPage />;
      case "about":
        return <AboutPage />;
      case "contact":
        return <ContactPage />;
      case "blog":
        return <BlogPage />;
      case "career":
        return <CareerPage />;
      case "profile":
        return <ProfilePage />;
      case "messages":
        return <MessagingPage />;
      case "followers":
        return <FollowersPage />;
      case "following":
        return <FollowingPage />;
      case "policy":
        return <PolicyPage />;
      case "communities":
        return <SelectCommunityPage />;
      case "manage-communities":
        return <ManageCommunitiesPage />;
      case "admin-stats":
        return <AdminStatsPage />;
      case "admin-moderation":
        return <AdminModerationPage />;
      case "admin-recheck":
        return <AdminRecheckFlagPage />;
      case "admin-users":
        return <AdminUsersPage />;
      case "search":
        return <SearchPage />;
      case "user-profile":
        return <UserProfileViewPage />;
      case "faqs":
        return <FAQsPage />;
      case "notifications":
        return <NotificationsPage />;
      default:
        return (
          <div className="min-h-screen bg-black">
            <Header />
            <main className="container mx-auto px-4 py-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-4">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl text-white">Recent Discussions</h2>
                    <select className="bg-neutral-900 border border-neutral-800 text-neutral-300 text-sm rounded-lg px-3 py-2 focus:ring-olive-500 focus:border-olive-500">
                      <option>Latest</option>
                      <option>Most Endorsed</option>
                      <option>Most Discussed</option>
                      <option>Trending</option>
                    </select>
                  </div>
                  {posts.map((post, index) => (
                    <PostCard key={index} {...post} />
                  ))}
                </div>
                <div className="lg:col-span-1">
                  <div className="sticky top-20">
                    <Sidebar />
                  </div>
                </div>
              </div>
            </main>
            <Footer />
          </div>
        );
    }
  };

  return (
    <>
      {renderPage()}
      <NavigationDemo onNavigate={setCurrentPage} />
    </>
  );
}

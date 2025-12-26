import { useState } from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { SignUpPage } from "./components/SignUpPage";
import { SignInPage } from "./components/SignInPage";
import { ForgotPasswordPage } from "./components/ForgotPasswordPage";
import { PopularPage } from "./components/PopularPage";
import { AboutPage } from "./components/AboutPage";
import { ContactPage } from "./components/ContactPage";
import { ProfilePage } from "./components/ProfilePage";

type Page = 
  | "home" 
  | "signup" 
  | "signin" 
  | "forgot" 
  | "popular" 
  | "about" 
  | "contact" 
  | "profile";

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>("home");

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
        return <PopularPage onNavigate={setCurrentPage} />;
      case "about":
        return <AboutPage onNavigate={setCurrentPage} />;
      case "contact":
        return <ContactPage onNavigate={setCurrentPage} />;
      case "profile":
        return <ProfilePage onNavigate={setCurrentPage} />;
      default:
        return (
          <div className="min-h-screen bg-black">
            <Header onNavigate={setCurrentPage} />
            <main className="container mx-auto px-4 py-8">
              <div className="text-center">
                <h1 className="text-4xl text-white mb-4">Welcome to MindMesh</h1>
                <p className="text-neutral-300">A platform for academic discussions and knowledge sharing.</p>
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
    </>
  );
}

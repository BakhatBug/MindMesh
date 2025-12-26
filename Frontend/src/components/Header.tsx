import { Search, Bell, User, Menu } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useState } from "react";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-800 bg-black">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-8">
            <a href="/" className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-olive-600 to-olive-800">
                <span className="text-white">MM</span>
              </div>
              <span className="text-xl text-white">MindMesh</span>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6">
              <a href="#popular" className="text-sm text-neutral-300 hover:text-olive-500 transition-colors">
                Popular
              </a>
              <a href="#about" className="text-sm text-neutral-300 hover:text-olive-500 transition-colors">
                About Us
              </a>
              <a href="#contact" className="text-sm text-neutral-300 hover:text-olive-500 transition-colors">
                Contact
              </a>
              <a href="#blog" className="text-sm text-neutral-300 hover:text-olive-500 transition-colors">
                Blog
              </a>
              <a href="#career" className="text-sm text-neutral-300 hover:text-olive-500 transition-colors">
                Career
              </a>
            </nav>
          </div>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex flex-1 max-w-xl mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-500" />
              <Input
                type="search"
                placeholder="Search topics, questions, or people..."
                className="w-full bg-neutral-900 border-neutral-800 pl-10 text-white placeholder:text-neutral-500 focus-visible:ring-olive-500"
              />
            </div>
          </div>

          {/* Right side actions */}
          <div className="flex items-center gap-3">
            <Button
              variant="default"
              className="hidden md:inline-flex bg-olive-600 hover:bg-olive-700 text-white"
            >
              Create Post
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="text-neutral-300 hover:text-white hover:bg-neutral-900"
            >
              <Bell className="h-5 w-5" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="text-neutral-300 hover:text-white hover:bg-neutral-900"
            >
              <User className="h-5 w-5" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-neutral-300 hover:text-white hover:bg-neutral-900"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="md:hidden pb-4">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-500" />
            <Input
              type="search"
              placeholder="Search..."
              className="w-full bg-neutral-900 border-neutral-800 pl-10 text-white placeholder:text-neutral-500 focus-visible:ring-olive-500"
            />
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <nav className="md:hidden border-t border-neutral-800 py-4 flex flex-col gap-3">
            <a href="#popular" className="text-sm text-neutral-300 hover:text-olive-500 transition-colors">
              Popular
            </a>
            <a href="#about" className="text-sm text-neutral-300 hover:text-olive-500 transition-colors">
              About Us
            </a>
            <a href="#contact" className="text-sm text-neutral-300 hover:text-olive-500 transition-colors">
              Contact
            </a>
            <a href="#blog" className="text-sm text-neutral-300 hover:text-olive-500 transition-colors">
              Blog
            </a>
            <a href="#career" className="text-sm text-neutral-300 hover:text-olive-500 transition-colors">
              Career
            </a>
            <Button className="w-full bg-olive-600 hover:bg-olive-700 text-white">
              Create Post
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
}

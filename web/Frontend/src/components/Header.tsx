import { Search, Bell, User, Menu } from "lucide-react";
import { useState } from "react";

interface HeaderProps {
  onNavigate?: (page: string) => void;
}

export function Header({ onNavigate }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-800 bg-black">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-8">
            <button onClick={() => onNavigate ? onNavigate("home") : window.location.href = "/"} className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-olive-600 to-olive-800">
                <span className="text-white">MM</span>
              </div>
              <span className="text-xl text-white">MindMesh</span>
            </button>

            {/* Desktop Navigation */}
            {onNavigate && (
              <nav className="hidden md:flex items-center gap-6">
                <button onClick={() => onNavigate("popular")} className="text-sm text-neutral-300 hover:text-olive-500 transition-colors">
                  Popular
                </button>
                <button onClick={() => onNavigate("about")} className="text-sm text-neutral-300 hover:text-olive-500 transition-colors">
                  About Us
                </button>
                <button onClick={() => onNavigate("contact")} className="text-sm text-neutral-300 hover:text-olive-500 transition-colors">
                  Contact
                </button>
              </nav>
            )}
          </div>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex flex-1 max-w-xl mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-500" />
              <input
                type="search"
                placeholder="Search topics, questions, or people..."
                className="w-full bg-neutral-900 border border-neutral-800 pl-10 pr-4 py-2 text-white placeholder:text-neutral-500 focus:ring-2 focus:ring-olive-500 rounded"
              />
            </div>
          </div>

          {/* Right side actions */}
          <div className="flex items-center gap-3">
            <button className="hidden md:inline-flex bg-olive-600 hover:bg-olive-700 text-white px-4 py-2 rounded">
              Create Post
            </button>

            <button className="text-neutral-300 hover:text-white hover:bg-neutral-900 p-2 rounded">
              <Bell className="h-5 w-5" />
            </button>

            <button className="text-neutral-300 hover:text-white hover:bg-neutral-900 p-2 rounded">
              <User className="h-5 w-5" />
            </button>

            <button
              className="md:hidden text-neutral-300 hover:text-white hover:bg-neutral-900 p-2 rounded"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="md:hidden pb-4">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-500" />
            <input
              type="search"
              placeholder="Search..."
              className="w-full bg-neutral-900 border border-neutral-800 pl-10 pr-4 py-2 text-white placeholder:text-neutral-500 focus:ring-2 focus:ring-olive-500 rounded"
            />
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <nav className="md:hidden border-t border-neutral-800 py-4 flex flex-col gap-3">
            {onNavigate && (
              <>
                <button onClick={() => onNavigate("popular")} className="text-sm text-neutral-300 hover:text-olive-500 transition-colors text-left">
                  Popular
                </button>
                <button onClick={() => onNavigate("about")} className="text-sm text-neutral-300 hover:text-olive-500 transition-colors text-left">
                  About Us
                </button>
                <button onClick={() => onNavigate("contact")} className="text-sm text-neutral-300 hover:text-olive-500 transition-colors text-left">
                  Contact
                </button>
              </>
            )}
            <button className="w-full bg-olive-600 hover:bg-olive-700 text-white px-4 py-2 rounded">
              Create Post
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}

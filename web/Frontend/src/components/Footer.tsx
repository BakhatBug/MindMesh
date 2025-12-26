export function Footer() {
  return (
    <footer className="border-t border-neutral-800 bg-black mt-12">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo and tagline */}
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-olive-600 to-olive-800">
              <span className="text-sm text-white">MM</span>
            </div>
            <div>
              <span className="text-white">MindMesh</span>
              <p className="text-xs text-neutral-500">Academic collaboration network</p>
            </div>
          </div>

          {/* Links */}
          <nav className="flex items-center gap-6">
            <a href="#policy" className="text-sm text-neutral-400 hover:text-olive-500 transition-colors">
              Privacy Policy
            </a>
            <a href="#terms" className="text-sm text-neutral-400 hover:text-olive-500 transition-colors">
              Terms of Service
            </a>
            <a href="#faqs" className="text-sm text-neutral-400 hover:text-olive-500 transition-colors">
              FAQs
            </a>
          </nav>

          {/* Copyright */}
          <p className="text-xs text-neutral-500">
            © 2025 MindMesh. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

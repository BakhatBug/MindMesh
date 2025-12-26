import { useState } from "react";
import { ArrowLeft, Mail, Shield } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

export function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Reset password for:", email);
    setIsSubmitted(true);
    // Handle password reset logic here
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="flex items-center justify-center gap-2 mb-8">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-olive-600 to-olive-800">
            <span className="text-xl text-white">MM</span>
          </div>
          <span className="text-2xl text-white">MindMesh</span>
        </div>

        {!isSubmitted ? (
          <>
            {/* Header */}
            <div className="mb-8 text-center">
              <h1 className="text-white mb-2">Forgot Password?</h1>
              <p className="text-neutral-400">
                No worries, we'll send you reset instructions.
              </p>
            </div>

            {/* Instructions */}
            <div className="mb-6 p-4 bg-neutral-900 border border-neutral-800 rounded-lg">
              <div className="flex gap-3">
                <Shield className="h-5 w-5 text-olive-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-neutral-300">
                    Enter your institutional email to receive a reset link.
                  </p>
                  <p className="text-xs text-neutral-500 mt-1">
                    The reset link will be valid for 24 hours.
                  </p>
                </div>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-white">
                  Institutional Email
                </Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-500" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@university.edu"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-neutral-900 border-neutral-800 text-white placeholder:text-neutral-500 focus-visible:ring-olive-500 pl-10"
                    required
                  />
                </div>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full bg-olive-600 hover:bg-olive-700 text-white"
              >
                Reset Password
              </Button>
            </form>

            {/* Back to Sign In Link */}
            <div className="mt-6">
              <a
                href="#signin"
                className="flex items-center justify-center gap-2 text-sm text-neutral-400 hover:text-olive-500 transition-colors"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Sign In
              </a>
            </div>
          </>
        ) : (
          <>
            {/* Success State */}
            <div className="text-center">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-olive-600/20">
                <Mail className="h-8 w-8 text-olive-500" />
              </div>
              
              <h1 className="text-white mb-2">Check Your Email</h1>
              <p className="text-neutral-400 mb-6">
                We've sent a password reset link to
              </p>
              <p className="text-olive-500 mb-8">{email}</p>

              <div className="p-4 bg-neutral-900 border border-neutral-800 rounded-lg mb-6">
                <p className="text-sm text-neutral-300 mb-2">
                  Didn't receive the email?
                </p>
                <p className="text-xs text-neutral-500">
                  Check your spam folder or{" "}
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="text-olive-500 hover:text-olive-400"
                  >
                    try again
                  </button>
                </p>
              </div>

              <a
                href="#signin"
                className="flex items-center justify-center gap-2 text-sm text-neutral-400 hover:text-olive-500 transition-colors"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Sign In
              </a>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

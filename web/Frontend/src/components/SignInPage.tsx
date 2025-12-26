import { useState } from "react";
import { Eye, EyeOff, GraduationCap } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Checkbox } from "./ui/checkbox";

export function SignInPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Sign in:", formData);
    // Handle sign in logic here
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

        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-white mb-2">Welcome Back</h1>
          <p className="text-neutral-400">
            Connect with academic peers.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email */}
          <div className="space-y-2">
            <Label htmlFor="email" className="text-white">
              Email Address
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="your.email@university.edu"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="bg-neutral-900 border-neutral-800 text-white placeholder:text-neutral-500 focus-visible:ring-olive-500"
              required
            />
          </div>

          {/* Password */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="password" className="text-white">
                Password
              </Label>
              <a href="#forgot" className="text-sm text-olive-500 hover:text-olive-400">
                Forgot password?
              </a>
            </div>
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                className="bg-neutral-900 border-neutral-800 text-white placeholder:text-neutral-500 focus-visible:ring-olive-500 pr-10"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-500 hover:text-neutral-300"
              >
                {showPassword ? (
                  <EyeOff className="h-4 w-4" />
                ) : (
                  <Eye className="h-4 w-4" />
                )}
              </button>
            </div>
          </div>

          {/* Remember Me */}
          <div className="flex items-center gap-2">
            <Checkbox
              id="remember"
              checked={formData.rememberMe}
              onCheckedChange={(checked) =>
                setFormData({ ...formData, rememberMe: checked === true })
              }
              className="border-neutral-700 data-[state=checked]:bg-olive-600 data-[state=checked]:border-olive-600"
            />
            <label htmlFor="remember" className="text-sm text-neutral-400">
              Remember me
            </label>
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full bg-olive-600 hover:bg-olive-700 text-white"
          >
            Sign In
          </Button>
        </form>

        {/* Sign Up Link */}
        <p className="text-center text-sm text-neutral-400 mt-6">
          Don't have an account?{" "}
          <a href="#signup" className="text-olive-500 hover:text-olive-400">
            Sign Up
          </a>
        </p>

        {/* Divider */}
        <div className="relative my-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-neutral-800"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-black text-neutral-500">For verified academics only</span>
          </div>
        </div>

        {/* Info Card */}
        <div className="p-4 bg-neutral-900 border border-neutral-800 rounded-lg">
          <div className="flex gap-3">
            <GraduationCap className="h-5 w-5 text-olive-500 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm text-neutral-300">
                MindMesh requires institutional verification
              </p>
              <p className="text-xs text-neutral-500 mt-1">
                All members must have a verified academic email address from their institution.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

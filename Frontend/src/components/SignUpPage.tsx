import { useState } from "react";
import { CheckCircle, Shield, Users, Sparkles, Eye, EyeOff } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Checkbox } from "./ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Card } from "./ui/card";

export function SignUpPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    role: "",
    institution: "",
    agreeToTerms: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Sign up:", formData);
    // Handle sign up logic here
  };

  const benefits = [
    {
      icon: Users,
      title: "Domain-Specific Communities",
      description: "Connect with verified academics in your field of study and research.",
    },
    {
      icon: Shield,
      title: "AI-Powered Moderation",
      description: "Advanced algorithms ensure quality discussions and prevent spam.",
    },
    {
      icon: CheckCircle,
      title: "Verified Network",
      description: "All members verified through institutional email for credibility.",
    },
    {
      icon: Sparkles,
      title: "Research Collaboration",
      description: "Find collaborators, share insights, and advance your research.",
    },
  ];

  return (
    <div className="min-h-screen bg-black flex">
      {/* Left side - Form */}
      <div className="flex-1 flex items-center justify-center p-6 lg:p-12">
        <div className="w-full max-w-md">
          {/* Logo */}
          <div className="flex items-center gap-2 mb-8">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-olive-600 to-olive-800">
              <span className="text-white">MM</span>
            </div>
            <span className="text-2xl text-white">MindMesh</span>
          </div>

          {/* Header */}
          <div className="mb-8">
            <h1 className="text-white mb-2">Create Your Account</h1>
            <p className="text-neutral-400">
              Join the academic community and start collaborating today.
            </p>
          </div>

          {/* Verification Note */}
          <div className="mb-6 p-4 bg-olive-600/10 border border-olive-600/30 rounded-lg">
            <div className="flex gap-2">
              <Shield className="h-5 w-5 text-olive-500 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm text-olive-400">
                  Institutional email required for verification
                </p>
                <p className="text-xs text-neutral-400 mt-1">
                  Use your .edu or institutional email address to verify your academic status.
                </p>
              </div>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Full Name */}
            <div className="space-y-2">
              <Label htmlFor="fullName" className="text-white">
                Full Name
              </Label>
              <Input
                id="fullName"
                type="text"
                placeholder="Dr. Jane Smith"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                className="bg-neutral-900 border-neutral-800 text-white placeholder:text-neutral-500 focus-visible:ring-olive-500"
                required
              />
            </div>

            {/* Institutional Email */}
            <div className="space-y-2">
              <Label htmlFor="email" className="text-white">
                Institutional Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="jane.smith@university.edu"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="bg-neutral-900 border-neutral-800 text-white placeholder:text-neutral-500 focus-visible:ring-olive-500"
                required
              />
            </div>

            {/* Password */}
            <div className="space-y-2">
              <Label htmlFor="password" className="text-white">
                Password
              </Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Create a strong password"
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

            {/* Role */}
            <div className="space-y-2">
              <Label htmlFor="role" className="text-white">
                Role
              </Label>
              <Select
                value={formData.role}
                onValueChange={(value) => setFormData({ ...formData, role: value })}
                required
              >
                <SelectTrigger
                  id="role"
                  className="bg-neutral-900 border-neutral-800 text-white focus:ring-olive-500"
                >
                  <SelectValue placeholder="Select your role" />
                </SelectTrigger>
                <SelectContent className="bg-neutral-900 border-neutral-800">
                  <SelectItem value="student" className="text-white">
                    Student
                  </SelectItem>
                  <SelectItem value="teacher" className="text-white">
                    Teacher/Professor
                  </SelectItem>
                  <SelectItem value="researcher" className="text-white">
                    Researcher
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Institution */}
            <div className="space-y-2">
              <Label htmlFor="institution" className="text-white">
                Institution
              </Label>
              <Input
                id="institution"
                type="text"
                placeholder="Stanford University"
                value={formData.institution}
                onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
                className="bg-neutral-900 border-neutral-800 text-white placeholder:text-neutral-500 focus-visible:ring-olive-500"
                required
              />
            </div>

            {/* Terms Checkbox */}
            <div className="flex items-start gap-2">
              <Checkbox
                id="terms"
                checked={formData.agreeToTerms}
                onCheckedChange={(checked) =>
                  setFormData({ ...formData, agreeToTerms: checked === true })
                }
                className="mt-1 border-neutral-700 data-[state=checked]:bg-olive-600 data-[state=checked]:border-olive-600"
                required
              />
              <label htmlFor="terms" className="text-sm text-neutral-400 leading-tight">
                I agree to the{" "}
                <a href="#terms" className="text-olive-500 hover:text-olive-400">
                  Terms of Service
                </a>{" "}
                and{" "}
                <a href="#privacy" className="text-olive-500 hover:text-olive-400">
                  Privacy Policy
                </a>
              </label>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full bg-olive-600 hover:bg-olive-700 text-white"
            >
              Sign Up
            </Button>
          </form>

          {/* Sign In Link */}
          <p className="text-center text-sm text-neutral-400 mt-6">
            Already have an account?{" "}
            <a href="#signin" className="text-olive-500 hover:text-olive-400">
              Sign In
            </a>
          </p>
        </div>
      </div>

      {/* Right side - Benefits */}
      <div className="hidden lg:flex flex-1 bg-neutral-950 p-12 items-center justify-center">
        <div className="max-w-md">
          <h2 className="text-white mb-3">Why Join MindMesh?</h2>
          <p className="text-neutral-400 mb-8">
            The premier academic network for verified scholars, researchers, and students worldwide.
          </p>

          <div className="space-y-6">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className="bg-neutral-900 border-neutral-800 p-5 hover:border-olive-600/50 transition-colors"
              >
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-olive-600/20">
                      <benefit.icon className="h-5 w-5 text-olive-500" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-white mb-1">{benefit.title}</h3>
                    <p className="text-sm text-neutral-400">{benefit.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-8 p-4 bg-olive-600/10 border border-olive-600/30 rounded-lg">
            <p className="text-sm text-olive-400">
              <span>🎓</span> Join 50,000+ verified academics from leading institutions worldwide
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

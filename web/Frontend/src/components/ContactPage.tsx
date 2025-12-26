import { useState } from "react";
import { Mail, MessageSquare, Briefcase, Bug, Clock, Send } from "lucide-react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Card } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";

export function ContactPage({ onNavigate }: { onNavigate?: (page: string) => void }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    category: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact form submitted:", formData);
    // Handle form submission
  };

  const contactCategories = [
    {
      icon: MessageSquare,
      title: "General Inquiries",
      description: "Questions about MindMesh features, membership, or general information",
      email: "hello@mindmesh.edu",
    },
    {
      icon: Bug,
      title: "Bug Reports",
      description: "Report technical issues, bugs, or suggest improvements",
      email: "support@mindmesh.edu",
    },
    {
      icon: Briefcase,
      title: "Partnerships",
      description: "Academic institutions, research collaborations, or business inquiries",
      email: "partnerships@mindmesh.edu",
    },
  ];

  return (
    <div className="min-h-screen bg-black">
      <Header onNavigate={onNavigate} />
      
      <main className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-white mb-4">Get in Touch</h1>
          <p className="text-neutral-400 max-w-2xl mx-auto">
            Have a question or feedback? We'd love to hear from you. Our team typically responds within 24-48 hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Contact Categories */}
          <div className="lg:col-span-3 grid md:grid-cols-3 gap-6 mb-8">
            {contactCategories.map((category, index) => (
              <Card key={index} className="bg-neutral-900 border-neutral-800 p-6 hover:border-olive-600/50 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-olive-600/20">
                      <category.icon className="h-6 w-6 text-olive-500" />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-white mb-2">{category.title}</h3>
                    <p className="text-sm text-neutral-400 mb-3">{category.description}</p>
                    <a href={`mailto:${category.email}`} className="text-sm text-olive-500 hover:text-olive-400 break-all">
                      {category.email}
                    </a>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="bg-neutral-900 border-neutral-800 p-6">
              <h2 className="text-white mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-white">
                      Name
                    </Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="bg-neutral-950 border-neutral-800 text-white placeholder:text-neutral-500 focus-visible:ring-olive-500"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-white">
                      Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@university.edu"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="bg-neutral-950 border-neutral-800 text-white placeholder:text-neutral-500 focus-visible:ring-olive-500"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="category" className="text-white">
                    Category
                  </Label>
                  <select
                    id="category"
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full bg-neutral-950 border border-neutral-800 text-white rounded-lg px-3 py-2 focus:ring-olive-500 focus:border-olive-500"
                    required
                  >
                    <option value="">Select a category</option>
                    <option value="general">General Inquiry</option>
                    <option value="bug">Bug Report</option>
                    <option value="partnership">Partnership</option>
                    <option value="feedback">Feedback</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-white">
                    Subject
                  </Label>
                  <Input
                    id="subject"
                    type="text"
                    placeholder="Brief description of your inquiry"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="bg-neutral-950 border-neutral-800 text-white placeholder:text-neutral-500 focus-visible:ring-olive-500"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-white">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us more about your inquiry..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="bg-neutral-950 border-neutral-800 text-white placeholder:text-neutral-500 focus-visible:ring-olive-500 min-h-32"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-olive-600 hover:bg-olive-700 text-white"
                >
                  <Send className="h-4 w-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </Card>
          </div>

          {/* Contact Info Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="bg-neutral-900 border-neutral-800 p-6">
              <div className="flex items-center gap-2 mb-4">
                <Mail className="h-5 w-5 text-olive-500" />
                <h3 className="text-white">Email Us</h3>
              </div>
              <p className="text-sm text-neutral-400 mb-2">
                For general inquiries:
              </p>
              <a href="mailto:hello@mindmesh.edu" className="text-olive-500 hover:text-olive-400">
                hello@mindmesh.edu
              </a>
            </Card>

            <Card className="bg-neutral-900 border-neutral-800 p-6">
              <div className="flex items-center gap-2 mb-4">
                <Clock className="h-5 w-5 text-olive-500" />
                <h3 className="text-white">Support Hours</h3>
              </div>
              <div className="space-y-2 text-sm text-neutral-400">
                <p>Monday - Friday: 9:00 AM - 6:00 PM EST</p>
                <p>Saturday - Sunday: Limited support</p>
                <p className="text-xs text-neutral-500 mt-3">
                  We aim to respond to all inquiries within 24-48 hours
                </p>
              </div>
            </Card>

            <Card className="bg-gradient-to-br from-olive-950 to-neutral-950 border-olive-800 p-6">
              <h3 className="text-white mb-2">Quick Response</h3>
              <p className="text-sm text-neutral-300">
                For urgent technical issues, please include your account email and a detailed description of the problem.
              </p>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

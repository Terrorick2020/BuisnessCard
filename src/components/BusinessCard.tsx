import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";
import { Separator } from "./ui/separator";
import { Mail, Phone, MapPin, Linkedin, Github, Globe, Download } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function BusinessCard() {
  const businessInfo = {
    name: "Alex Morgan",
    title: "Senior Product Designer",
    company: "Creative Studios Inc.",
    bio: "Passionate about creating intuitive digital experiences that blend form and function. Specialized in UX/UI design with 8+ years of experience.",
    email: "alex.morgan@email.com",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA",
    website: "www.alexmorgan.design",
    linkedin: "linkedin.com/in/alexmorgan",
    github: "github.com/alexmorgan",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
  };

  const handleDownloadVCard = () => {
    const vCard = `BEGIN:VCARD
VERSION:3.0
FN:${businessInfo.name}
TITLE:${businessInfo.title}
ORG:${businessInfo.company}
TEL:${businessInfo.phone}
EMAIL:${businessInfo.email}
URL:${businessInfo.website}
END:VCARD`;
    
    const blob = new Blob([vCard], { type: 'text/vcard' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'contact.vcf';
    link.click();
    window.URL.revokeObjectURL(url);
  };

  return (
    <Card className="w-full max-w-2xl bg-white/95 backdrop-blur shadow-2xl">
      <div className="p-8">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
          <Avatar className="w-32 h-32 border-4 border-slate-200">
            <AvatarImage src={businessInfo.image} alt={businessInfo.name} />
            <AvatarFallback>{businessInfo.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
          </Avatar>
          
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-slate-900 mb-1">{businessInfo.name}</h1>
            <p className="text-slate-600 mb-1">{businessInfo.title}</p>
            <p className="text-slate-500">{businessInfo.company}</p>
          </div>
        </div>

        {/* Bio */}
        <p className="mt-6 text-slate-600 text-center md:text-left">
          {businessInfo.bio}
        </p>

        <Separator className="my-6" />

        {/* Contact Information */}
        <div className="space-y-3">
          <a 
            href={`mailto:${businessInfo.email}`}
            className="flex items-center gap-3 text-slate-700 hover:text-slate-900 transition-colors group"
          >
            <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-slate-200 transition-colors">
              <Mail className="w-5 h-5" />
            </div>
            <span>{businessInfo.email}</span>
          </a>

          <a 
            href={`tel:${businessInfo.phone}`}
            className="flex items-center gap-3 text-slate-700 hover:text-slate-900 transition-colors group"
          >
            <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-slate-200 transition-colors">
              <Phone className="w-5 h-5" />
            </div>
            <span>{businessInfo.phone}</span>
          </a>

          <div className="flex items-center gap-3 text-slate-700">
            <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center">
              <MapPin className="w-5 h-5" />
            </div>
            <span>{businessInfo.location}</span>
          </div>

          <a 
            href={`https://${businessInfo.website}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-slate-700 hover:text-slate-900 transition-colors group"
          >
            <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-slate-200 transition-colors">
              <Globe className="w-5 h-5" />
            </div>
            <span>{businessInfo.website}</span>
          </a>
        </div>

        <Separator className="my-6" />

        {/* Social Links & Actions */}
        <div className="flex flex-col sm:flex-row gap-3 justify-between items-center">
          <div className="flex gap-2">
            <Button 
              variant="outline" 
              size="icon"
              asChild
            >
              <a 
                href={`https://${businessInfo.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </Button>
            
            <Button 
              variant="outline" 
              size="icon"
              asChild
            >
              <a 
                href={`https://${businessInfo.github}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
            </Button>
          </div>

          <Button 
            onClick={handleDownloadVCard}
            className="gap-2"
          >
            <Download className="w-4 h-4" />
            Save Contact
          </Button>
        </div>
      </div>
    </Card>
  );
}

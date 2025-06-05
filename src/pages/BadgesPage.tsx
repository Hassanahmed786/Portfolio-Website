import React, { useState } from 'react';
import { Award, ExternalLink, X, Calendar, Building, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import IBM_Logo from '../components/Images/Badges/IBM_Logo.webp';
import GOOGLE_Logo from '../components/Images/Badges/GOOGLE_Logo.webp';

interface Badge {
  id: number;
  name: string;
  issuer: string;
  date: string;
  description: string;
  verificationUrl: string;
  image: string;
}

const badges: Badge[] = [
  {
    id: 1,
    name: "Data Fundamentals",
    issuer: "IBM",
    date: "2025",
    description: "Foundational certification covering data concepts, data analysis, and data visualization techniques.",
    verificationUrl: "https://www.credly.com/badges/e039298c-0508-4789-b54c-321dd349e848/public_url",
    image: IBM_Logo
  },
  {
    id: 2,
    name: "Develop GenAI Apps with Gemini and Streamlit Skill Badge",
    issuer: "Google",
    date: "2024",
    description: "Skill badge demonstrating the ability to develop generative AI applications using Google Gemini and Streamlit.",
    verificationUrl: "https://www.credly.com/badges/37e0ecac-801c-4a9a-98d0-76c09d278819/public_url",
    image: GOOGLE_Logo
  },
  {
    id: 3,
    name: "Meta Certified Developer",
    issuer: "Meta",
    date: "2023",
    description: "Advanced certification showcasing expertise in developing applications using Meta's platforms and technologies.",
    verificationUrl: "https://meta.com/verification",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=200&q=80"
  },
  {
    id: 4,
    name: "Microsoft Azure Expert",
    issuer: "Microsoft",
    date: "2023",
    description: "Expert-level certification for Azure cloud services, covering advanced topics in cloud architecture and implementation.",
    verificationUrl: "https://microsoft.com/verification",
    image: "https://images.unsplash.com/photo-1614680376573-df3480f33139?auto=format&fit=crop&w=200&q=80"
  },
  {
    id: 5,
    name: "Certified Kubernetes Administrator",
    issuer: "CNCF",
    date: "2023",
    description: "Professional certification validating expertise in Kubernetes administration and container orchestration.",
    verificationUrl: "https://kubernetes.io/verification",
    image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?auto=format&fit=crop&w=200&q=80"
  },
  {
    id: 6,
    name: "Docker Certified Associate",
    issuer: "Docker",
    date: "2023",
    description: "Professional certification demonstrating expertise in containerization and Docker technologies.",
    verificationUrl: "https://docker.com/verification",
    image: "https://images.unsplash.com/photo-1605745341112-85968b19335b?auto=format&fit=crop&w=200&q=80"
  },
  {
    id: 7,
    name: "Terraform Associate",
    issuer: "HashiCorp",
    date: "2023",
    description: "Certification validating skills in infrastructure automation using Terraform.",
    verificationUrl: "https://hashicorp.com/verification",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=200&q=80"
  },
  {
    id: 8,
    name: "MongoDB Certified Developer",
    issuer: "MongoDB",
    date: "2022",
    description: "Professional certification demonstrating expertise in MongoDB database development and administration.",
    verificationUrl: "https://mongodb.com/verification",
    image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&w=200&q=80"
  },
  {
    id: 9,
    name: "React Developer Certification",
    issuer: "Meta",
    date: "2022",
    description: "Advanced certification showcasing proficiency in React.js development and modern frontend technologies.",
    verificationUrl: "https://meta.com/verification",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=200&q=80"
  },
  {
    id: 1,
    name: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    date: "2024",
    description: "Professional level certification for designing distributed systems on AWS. Demonstrates expertise in building secure and robust applications using AWS services.",
    verificationUrl: "https://aws.amazon.com/verification",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=200&q=80"
  },
  {
    id: 2,
    name: "Google Cloud Professional",
    issuer: "Google",
    date: "2023",
    description: "Expert-level certification validating proficiency in designing, developing, and managing solutions using Google Cloud Platform technologies.",
    verificationUrl: "https://google.com/verification",
    image: "https://images.unsplash.com/photo-1573167243872-43c6433b9d40?auto=format&fit=crop&w=200&q=80"
  },
  {
    id: 3,
    name: "Meta Certified Developer",
    issuer: "Meta",
    date: "2023",
    description: "Advanced certification showcasing expertise in developing applications using Meta's platforms and technologies.",
    verificationUrl: "https://meta.com/verification",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=200&q=80"
  },
  {
    id: 4,
    name: "Microsoft Azure Expert",
    issuer: "Microsoft",
    date: "2023",
    description: "Expert-level certification for Azure cloud services, covering advanced topics in cloud architecture and implementation.",
    verificationUrl: "https://microsoft.com/verification",
    image: "https://images.unsplash.com/photo-1614680376573-df3480f33139?auto=format&fit=crop&w=200&q=80"
  },
  {
    id: 5,
    name: "Certified Kubernetes Administrator",
    issuer: "CNCF",
    date: "2023",
    description: "Professional certification validating expertise in Kubernetes administration and container orchestration.",
    verificationUrl: "https://kubernetes.io/verification",
    image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?auto=format&fit=crop&w=200&q=80"
  },
  {
    id: 6,
    name: "Docker Certified Associate",
    issuer: "Docker",
    date: "2023",
    description: "Professional certification demonstrating expertise in containerization and Docker technologies.",
    verificationUrl: "https://docker.com/verification",
    image: "https://images.unsplash.com/photo-1605745341112-85968b19335b?auto=format&fit=crop&w=200&q=80"
  },
  {
    id: 7,
    name: "Terraform Associate",
    issuer: "HashiCorp",
    date: "2023",
    description: "Certification validating skills in infrastructure automation using Terraform.",
    verificationUrl: "https://hashicorp.com/verification",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=200&q=80"
  },
  {
    id: 8,
    name: "MongoDB Certified Developer",
    issuer: "MongoDB",
    date: "2022",
    description: "Professional certification demonstrating expertise in MongoDB database development and administration.",
    verificationUrl: "https://mongodb.com/verification",
    image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&w=200&q=80"
  },
  {
    id: 9,
    name: "React Developer Certification",
    issuer: "Meta",
    date: "2022",
    description: "Advanced certification showcasing proficiency in React.js development and modern frontend technologies.",
    verificationUrl: "https://meta.com/verification",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=200&q=80"
  }
];

const BadgesPage = () => {
  const [selectedBadge, setSelectedBadge] = useState<Badge | null>(null);
  const navigate = useNavigate();

  return (
      <div className="min-h-screen pt-16 bg-gradient-to-br from-blue-50 via-white to-blue-50">
        <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Back to Home Button */}
          <button
            onClick={() => navigate('/')}
            className="mb-8 flex items-center text-blue-600 hover:text-blue-800 transition-colors"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Home
            </button>

          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900">Professional Badges</h1>
            <p className="mt-4 text-xl text-gray-600">Achievements earned throughout my career</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 p-8">
            {badges.map((badge) => (
              <div
                key={badge.id}
                className="relative w-56 h-56 mx-auto cursor-pointer group"
                onClick={() => setSelectedBadge(badge)}
                style={{
                  clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)'
                }}
              >
                {/* Hexagon Border */}
                <div 
                  className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 group-hover:from-cyan-400 group-hover:to-blue-500 transition-all duration-300 group-hover:scale-105"
                  style={{
                    clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)'
                  }}
                />
                
                {/* Hexagon Content */}
                <div 
                  className="absolute inset-1 bg-white flex flex-col items-center justify-center p-6 group-hover:scale-95 transition-all duration-300"
                  style={{
                    clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)'
                  }}
                >
                  <img 
                    src={badge.image} 
                    alt={badge.name}
                    className="w-20 h-20 object-cover rounded-full border-2 border-gray-200 mb-2"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const fallback = target.nextElementSibling as HTMLElement;
                      if (fallback) fallback.style.display = 'block';
                    }}
                  />
                  <Award className="w-16 h-16 text-blue-600 mb-2 hidden" />
                  <h3 className="text-sm font-semibold text-center text-gray-900 leading-tight px-2">{badge.name}</h3>
                  <p className="text-xs text-gray-600 mt-1">{badge.date}</p>
                </div>
              </div>
            ))}
          </div>

          {selectedBadge && (
            <div className="fixed inset-0 bg-black/50 badge-modal-overlay flex items-center justify-center p-4 z-50">
              <div className="bg-white rounded-xl max-w-lg w-full p-8 relative badge-modal active shadow-2xl">
                <button
                  onClick={() => setSelectedBadge(null)}
                  className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
                
                <div className="flex items-center mb-6">
                  <img 
                    src={selectedBadge.image} 
                    alt={selectedBadge.name}
                    className="w-16 h-16 object-cover rounded-full border-2 border-gray-200 mr-4"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.nextElementSibling.style.display = 'block';
                    }}
                  />
                  <Award className="w-12 h-12 text-blue-600 mr-4 hidden" />
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">{selectedBadge.name}</h2>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <p className="text-gray-600 leading-relaxed">{selectedBadge.description}</p>
                  
                  <div className="flex flex-col gap-2 text-sm text-gray-600">
                    <div className="flex items-center">
                      <Building className="w-4 h-4 mr-2 text-gray-400" />
                      <span>Issued by: {selectedBadge.issuer}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2 text-gray-400" />
                      <span>Issued: {selectedBadge.date}</span>
                    </div>
                  </div>
                  
                  <a
                    href={selectedBadge.verificationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Verify Badge
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
  );
};

export default BadgesPage;
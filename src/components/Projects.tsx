import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import Project1 from '../components/Images/Project_Stock/Project1.jpg'
import Project2 from '../components/Images/Project_Stock/Project2.webp'

const projects = [
  {
    title: 'AI Heathcare Platform',
    description: 'A comprehensive healthcare platform that uses AI to provide personalized health recommendations, appointment scheduling.',
    image: Project1,
    technologies: [ 'React', 'Node.js', 'Express', 'MongoDB', 'AI/ML'],
    liveUrl: 'https://doctorhealth.vercel.app/login',
    githubUrl: 'https://github.com/Hassanahmed786/healthcare-ai-platform',
  },
  {
    title: 'Travel Buddy',
    description: 'A travel planning application that helps users discover new destinations, create itineraries, and share travel experiences with friends.',
    image: Project2 ,
    technologies: [ 'React' , 'Node.js' , 'MongoDB', 'Google Maps API'],
    liveUrl: 'https://project2.com',
    githubUrl: 'https://github.com/yourusername/project2',
  },
  {
    title: 'AI Content Generator',
    description: 'An AI-powered content generation tool that helps create blog posts, social media content, and marketing copy using OpenAI\'s GPT-3.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80',
    technologies: ['React', 'Python', 'OpenAI API', 'FastAPI'],
    liveUrl: 'https://project2.com',
    githubUrl: 'https://github.com/yourusername/project3',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Featured Projects
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            A selection of my recent work and personal projects.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-12">
          {projects.map((project) => (
            <div
              key={project.title}
              className="flex flex-col rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="flex-shrink-0">
                <img
                  className="h-48 w-full object-cover"
                  src={project.image}
                  alt={project.title}
                />
              </div>
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-base text-gray-500">
                    {project.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-blue-100 text-blue-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mt-6 flex items-center gap-4">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
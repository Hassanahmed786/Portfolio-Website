import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    title: 'Microsoft Learn Student Ambassador',
    company: 'Microsoft',
    location: 'Remote',
    period: 'Oct 2024- Present',
    description: 'Empowering students to lead technology communities and build technical skills.',
  },
  {
    title: 'BlackBox AI Student Ambassador',
    company: 'BlackBox AI',
    location: 'Remote',
    period: 'Aug 2024 - Present',
    description: 'Building AI solutions for social good and promoting AI ethics.',
  },
  {
    title: 'Open Source Contributor',
    company: 'Girlscript Summer Of Code',
    location: 'Remote',
    period: 'Nov 2024 - Oct 2024',
    description: 'Contributing to open source projects and building technical skills.',
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Professional Experience
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            My journey in software development and leadership roles.
          </p>
        </div>

        <div className="mt-16 space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-8 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{exp.title}</h3>
                  <p className="text-xl text-blue-600">{exp.company}</p>
                </div>
                <div className="mt-2 md:mt-0 space-y-2">
                  <div className="flex items-center text-gray-600">
                    <Calendar className="w-5 h-5 mr-2" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <MapPin className="w-5 h-5 mr-2" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>
              <p className="mt-4 text-gray-600">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
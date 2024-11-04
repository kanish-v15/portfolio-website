import React from 'react';
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  User,
  Briefcase,
  Twitter,
  Code2,
  FileType,
  Database,
  Server,
  Binary,
  Container,
  Layout,
  Palette,
} from 'lucide-react';
import NavBar from './components/NavBar';
import ProjectCard from './components/ProjectCard';
import ContactForm from './components/ContactForm';
import SkillCard from './components/SkillCard';

function App() {
  const skills = [
    { name: 'Python', Icon: Binary, color: 'text-violet-400' },
    { name: 'Django', Icon: Code2, color: 'text-emerald-500' },
    { name: 'PostgreSQL', Icon: Database, color: 'text-cyan-400' },
    { name: 'MySQL', Icon: Database, color: 'text-amber-400' },
    { name: 'HTML', Icon: Layout, color: 'text-rose-400' },
    { name: 'CSS', Icon: Palette, color: 'text-cyan-500' },
    { name: 'JavaScript', Icon: FileType, color: 'text-amber-300' },
    { name: 'Docker', Icon: Container, color: 'text-cyan-400' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-violet-900/20 to-slate-900 text-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="animate-float-slow absolute top-20 left-10 w-64 h-64 bg-violet-500/10 rounded-full blur-3xl"></div>
        <div className="animate-float-medium absolute top-40 right-20 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
        <div className="animate-float-fast absolute bottom-20 left-1/3 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl"></div>
      </div>

      <NavBar />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative px-4">
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-violet-400 to-emerald-400 text-transparent bg-clip-text animate-title">
            Kanish V
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-fade-in">
            Backend Developer
          </p>
          <div className="flex gap-4 justify-center">
            <a
              href="https://github.com/kanish-v15"
              className="text-gray-400 hover:text-violet-400 transition-colors transform hover:scale-110"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/kanishv/"
              className="text-gray-400 hover:text-violet-400 transition-colors transform hover:scale-110"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="https://x.com/kanish2233"
              className="text-gray-400 hover:text-violet-400 transition-colors transform hover:scale-110"
            >
              <Twitter className="w-6 h-6" />
            </a>
            <a
              href="mailto:kanish2233@gmail.com"
              className="text-gray-400 hover:text-violet-400 transition-colors transform hover:scale-110"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1629904853716-f0bc54eea481?auto=format&fit=crop&q=80"
                alt="Profile"
                className="rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="text-4xl font-bold mb-6">About Me</h2>
              <p className="text-gray-300 mb-6">
                I'm a dedicated backend developer with expertise in building
                robust and scalable server-side applications. I specialize in
                Python, Django, and database optimization, with a strong
                foundation in web technologies.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-800/50 p-4 rounded-lg transform hover:scale-105 transition-transform">
                  <User className="w-6 h-6 mb-2 text-violet-400" />
                  <h3 className="font-semibold mb-1">Experience</h3>
                  <p className="text-gray-400">1+ Years</p>
                </div>
                <div className="bg-gray-800/50 p-4 rounded-lg transform hover:scale-105 transition-transform">
                  <Briefcase className="w-6 h-6 mb-2 text-emerald-400" />
                  <h3 className="font-semibold mb-1">Projects</h3>
                  <p className="text-gray-400">5+ Completed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard
              title="Project Management Application"
              description="Collaborative project management tool with real-time updates and team collaboration features"
              image="https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&q=80"
              tags={['Django', 'MySQL', 'Docker']}
              liveLink="https://kanishv.pythonanywhere.com/"
              codeLink="https://github.com/username/project"
            />
            <ProjectCard
              title="E-Commerce Application"
              description="Full-featured online store with payment processing and inventory management"
              image="https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80"
              tags={['Django REST', 'Python', 'PostgreSQL']}
              liveLink="https://store.example.com"
              codeLink="https://github.com/username/store"
            />
            <ProjectCard
              title="Expense Tracker Application"
              description="Personal finance management tool with budgeting and reporting features"
              image="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80"
              tags={['Django', 'Chart.js', 'MySQL']}
              liveLink="https://expenses.example.com"
              codeLink="https://github.com/username/expenses"
            />
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Skills & Technologies
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {skills.map((skill) => (
              <SkillCard
                key={skill.name}
                name={skill.name}
                Icon={skill.Icon}
                color={skill.color}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-gray-900/50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Get In Touch</h2>
          <ContactForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-slate-900/80">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-left">
            <h3 className="text-xl font-bold bg-gradient-to-r from-violet-400 to-emerald-400 text-transparent bg-clip-text">
              Kanish V
            </h3>
            <p className="text-gray-400">Backend Developer</p>
          </div>
          <div className="flex gap-4">
            <a
              href="https://github.com/kanish-v15"
              className="text-gray-400 hover:text-violet-400 transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/kanishv/"
              className="text-gray-400 hover:text-violet-400 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://x.com/kanish2233"
              className="text-gray-400 hover:text-violet-400 transition-colors"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="mailto:kanish2233@gmail.com"
              className="text-gray-400 hover:text-violet-400 transition-colors"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

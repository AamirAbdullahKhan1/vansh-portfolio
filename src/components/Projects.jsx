import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const projects = [
  {
    id: 1,
    title: "Space Explorer",
    description: "A 3D space exploration game with procedurally generated planets and alien life forms.",
    role: "Lead Developer & 3D Artist",
    technologies: ["Unity", "C#", "Blender", "Shader Graph"],
    videoUrl: "https://example.com/space-explorer.mp4",
    repoUrl: "https://github.com/yourusername/space-explorer",
    demoUrl: "https://space-explorer-demo.vercel.app",
  },
  {
    id: 2,
    title: "Dungeon Crawler",
    description: "A roguelike dungeon crawler with pixel art graphics and challenging gameplay.",
    role: "Gameplay Programmer & Level Designer",
    technologies: ["Godot", "GDScript", "Aseprite"],
    videoUrl: "https://example.com/dungeon-crawler.mp4",
    repoUrl: "https://github.com/yourusername/dungeon-crawler",
    demoUrl: "https://dungeon-crawler-demo.vercel.app",
  },
  {
    id: 3,
    title: "Puzzle Master",
    description: "A mind-bending puzzle game with unique mechanics and beautiful minimalist design.",
    role: "Solo Developer",
    technologies: ["Unreal Engine", "C++", "Blueprint"],
    videoUrl: "https://example.com/puzzle-master.mp4",
    repoUrl: "https://github.com/yourusername/puzzle-master",
    demoUrl: "https://puzzle-master-demo.vercel.app",
  },
]

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="bg-gray-800 rounded-lg overflow-hidden cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedProject(project)}
            >
              <video className="w-full h-48 object-cover" muted loop autoPlay>
                <source src={project.videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="bg-gray-800 rounded-lg p-6 max-w-2xl w-full"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-2xl font-bold mb-4">{selectedProject.title}</h3>
              <p className="text-gray-300 mb-2">
                <strong>Role:</strong> {selectedProject.role}
              </p>
              <p className="text-gray-300 mb-4">{selectedProject.description}</p>
              <div className="mb-4">
                <strong>Technologies:</strong>
                <ul className="list-disc list-inside">
                  {selectedProject.technologies.map((tech, index) => (
                    <li key={index} className="text-gray-300">
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
              <video className="w-full h-64 object-cover mb-4 rounded" controls>
                <source src={selectedProject.videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="flex justify-between">
                <a
                  href={selectedProject.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded transition-colors"
                >
                  View Repository
                </a>
                <a
                  href={selectedProject.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded transition-colors"
                >
                  Play Demo
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Projects


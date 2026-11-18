import { PROJECTS } from '../constants';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa'; // GitHub icon

function Projects() {
    return (
        <div className='border-b border-neutral-900 pb-4'>
            <h1 className='my-20 text-center text-4xl font-bold'>Projects</h1>
            <div className='flex flex-wrap justify-center gap-8'>
                {PROJECTS.map((project, index) => (
                    <div
                        key={index}
                        className='w-full sm:w-80 bg-neutral-800 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 flex flex-col'
                    >
                        {/* Project Image */}
                        {project.image && (
                            <div className='flex justify-center mb-4'>
                                <img
                                    src={project.image}
                                    width={150}
                                    height={150}
                                    alt={project.title}
                                    className='rounded'
                                />
                            </div>
                        )}

                        {/* Project Title */}
                        <h3 className='text-xl font-semibold mb-2 text-center'>{project.title}</h3>

                        {/* Project Description */}
                        <p className='text-neutral-400 mb-4 text-center'>{project.description}</p>

                        {/* Technologies Used */}
                        <div className='flex flex-wrap justify-center mb-4'>
                            {project.technologies.map((tech, idx) => (
                                <span
                                    key={idx}
                                    className='mr-2 mb-2 rounded bg-purple-900 px-2 py-1 text-sm font-medium text-white'
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>

                        {/* GitHub Link with Motion Icon */}
                        {project.github && (
                            <div className='flex justify-center mt-auto pt-4'>
                                <motion.a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    className='flex items-center px-4 py-2 bg-purple-700 text-white rounded hover:bg-purple-600 transition-colors'
                                >
                                    <FaGithub className='mr-2' /> {/* GitHub Icon */}
                                    View on GitHub
                                </motion.a>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Projects;

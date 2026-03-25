import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";






const Experience = () => {
    return (
      <div className="border-b border-neutral-900 pb-4">
          <motion.h2 
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.5 }}
                    className="my-20 text-center text-4xl font-semibold tracking-tighter">
            Experience
            </motion.h2>
          <div>
              {EXPERIENCES.map((experience, index) => (
                  <div 
                  key={index}
                                    className="glass-card mb-8 rounded-2xl p-6 grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-8"
                  >
                     <motion.div 
                     whileInView={{ opacity: 1, x: 0 }}
                     initial={{ opacity: 0, x: -100 }}
                     transition={{ duration: 1 }}
                                         className="w-full lg:col-span-1">
                      <p className="mb-2 text-sm text-neutral-400">{experience.year}</p>
                     </motion.div> 
                     <motion.div 
                     whileInView={{ opacity: 1, x: 0 }}
                     initial={{ opacity: 0, x: 100 }}
                     transition={{ duration: 1 }}
                                         className="w-full lg:col-span-3 lg:max-w-3xl">
                        <h6 className="mb-2 font-semibold">
                            {experience.role} -{" "}
                            <span className="text-sm text-purple-100">
                                {experience.company}
                            </span>
                        </h6>
                        <p className="mb-4 text-neutral-400">{experience.description}</p>
                                                <div className="flex flex-wrap gap-2">
                                                    {experience.technologies.map((tech, index) => (
                                                        <span
                                                            key={index}
                                                            className="glass-pill rounded px-2 py-1 text-sm font-medium text-purple-200"
                                                        >
                                                            {tech}
                                                        </span>
                                                    ))}
                                                </div>
                     </motion.div>
                  </div>
              ))}
          </div>
        
      </div>
    );
  };
  
  export default Experience;
  
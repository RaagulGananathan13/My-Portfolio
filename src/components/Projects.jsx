import { PROJECTS } from "../constants";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const ImageGalleryModal = ({ project, currentIndex, onClose, onPrev, onNext, onSelect }) => {
    if (!project) return null;

    const images = project.images || [];
    if (!images.length) return null;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
            onClick={onClose}
        >
            <div
                className="glass-card relative w-full max-w-4xl rounded-2xl border border-neutral-700 bg-neutral-900/80 p-4"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    type="button"
                    className="absolute right-3 top-3 rounded bg-neutral-800 px-3 py-1 text-sm text-white hover:bg-neutral-700"
                    onClick={onClose}
                >
                    Close
                </button>

                <h3 className="mb-4 pr-20 text-lg font-semibold text-white">{project.title}</h3>

                <div className="relative flex items-center justify-center">
                    {images.length > 1 && (
                        <button
                            type="button"
                            onClick={onPrev}
                            className="absolute left-2 rounded bg-neutral-800 px-3 py-2 text-white hover:bg-neutral-700"
                        >
                            Prev
                        </button>
                    )}

                    <img
                        src={images[currentIndex]}
                        alt={`${project.title} ${currentIndex + 1}`}
                        className="max-h-[70vh] w-full rounded object-contain"
                    />

                    {images.length > 1 && (
                        <button
                            type="button"
                            onClick={onNext}
                            className="absolute right-2 rounded bg-neutral-800 px-3 py-2 text-white hover:bg-neutral-700"
                        >
                            Next
                        </button>
                    )}
                </div>

                {images.length > 1 && (
                    <div className="mt-4 flex flex-wrap items-center gap-2">
                        {images.map((img, idx) => (
                            <button
                                key={idx}
                                type="button"
                                onClick={() => onSelect(idx)}
                                className={`overflow-hidden rounded border ${
                                    idx === currentIndex ? "border-purple-500" : "border-neutral-700"
                                }`}
                            >
                                <img src={img} alt={`${project.title} thumb ${idx + 1}`} className="h-12 w-16 object-cover" />
                            </button>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

const Projects = () => {
    const [galleryProject, setGalleryProject] = useState(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [showAllProjects, setShowAllProjects] = useState(false);

    const visibleProjects = showAllProjects ? PROJECTS : PROJECTS.slice(0, 5);

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (!galleryProject) return;

            if (event.key === "Escape") {
                setGalleryProject(null);
            }

            if (event.key === "ArrowRight") {
                const total = galleryProject.images?.length || 0;
                if (total > 1) {
                    setCurrentImageIndex((prev) => (prev + 1) % total);
                }
            }

            if (event.key === "ArrowLeft") {
                const total = galleryProject.images?.length || 0;
                if (total > 1) {
                    setCurrentImageIndex((prev) => (prev - 1 + total) % total);
                }
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [galleryProject]);

    const openGallery = (project) => {
        setGalleryProject(project);
        setCurrentImageIndex(0);
    };

    const closeGallery = () => {
        setGalleryProject(null);
        setCurrentImageIndex(0);
    };

    const goNext = () => {
        if (!galleryProject?.images?.length) return;
        setCurrentImageIndex((prev) => (prev + 1) % galleryProject.images.length);
    };

    const goPrev = () => {
        if (!galleryProject?.images?.length) return;
        setCurrentImageIndex((prev) => (prev - 1 + galleryProject.images.length) % galleryProject.images.length);
    };

  return (
    <div className="border-b border-neutral-900 pb-4">
        <motion.h2 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl tracking-tighter font-semibold">Projects</motion.h2>
        <div>
            {visibleProjects.map((project, index) => (
                <div key={index} className="glass-card mb-8 flex flex-wrap rounded-2xl p-5 lg:justify-center">
                                        {/** Support both legacy `technologies` and new `tags` */}
                                        {(() => {
                                            const techItems = project.technologies || project.tags || [];
                                            return (
                                                <>
                    <motion.div 
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 1 }}
                    className="w-full lg:w-1/3">
                                                <button
                                                    type="button"
                                                    onClick={() => openGallery(project)}
                                                    className="relative mb-6 block w-full overflow-hidden rounded-xl"
                                                >
                                                    <img
                                                    src={project.images?.[0]}
                                                    alt={project.title}
                                                    className="h-56 w-full rounded-xl object-cover transition-transform duration-300 hover:scale-[1.02] lg:h-72"
                                                    />
                                                    <span className="glass-pill absolute left-3 top-3 rounded-full px-3 py-1 text-xs font-semibold text-white">
                                                        Gallery • {project.images?.length || 1}
                                                    </span>
                                                    <span className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent px-3 py-2 text-left text-xs text-neutral-200">
                                                        Click to open gallery
                                                    </span>
                                                </button>
                    </motion.div>
                    <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 100 }}
                    transition={{ duration: 1 }} className="w-full max-w-xl lg:w-2/3 lg:pl-6">
                    <h6 className="mb-2 font-semibold">{project.title}</h6>
                    <p className="mb-4 text-neutral-400">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                        {techItems.map((tech, index) => (
                            <span
                                key={index}
                                className="glass-pill inline-flex whitespace-nowrap rounded px-2 py-1 text-sm font-medium text-purple-200"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                    </motion.div>
                        </>
                      );
                    })()}
                </div>
            ))}

            {PROJECTS.length > 5 && (
                <div className="mt-8 text-center">
                    <button
                        type="button"
                        onClick={() => setShowAllProjects((prev) => !prev)}
                        className="glass-card rounded px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-neutral-800/70"
                    >
                        {showAllProjects ? "See Less" : `See More (${PROJECTS.length - 5} more)`}
                    </button>
                </div>
            )}
        </div>

                <ImageGalleryModal
                    project={galleryProject}
                    currentIndex={currentImageIndex}
                    onClose={closeGallery}
                    onPrev={goPrev}
                    onNext={goNext}
                    onSelect={setCurrentImageIndex}
                />
      
    </div>
  );
};

export default Projects;

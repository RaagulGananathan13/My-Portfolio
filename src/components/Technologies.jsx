import { RiReactjsLine } from "react-icons/ri";
import { SiAngular, SiCss3, SiExpress, SiFigma, SiGithub, SiHtml5, SiJavascript, SiMongodb, SiMysql, SiPhp, SiPostman } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { motion } from "framer-motion";
import { FaJava } from "react-icons/fa6";
import { DiAndroid, DiVisualstudio } from "react-icons/di";


const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});



const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h2
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: -100 }}
      transition={{ duration: 1.5 }}
       className="my-20 text-center text-4xl font-light tracking-tighter font-semibold">
        Technologies
       </motion.h2>
      <motion.div 
      whileInView={{ opacity: 1, x: 0 }}
      initial={{ opacity: 0, x: -100 }}
      transition={{ duration: 1.5 }}
      className="flex flex-wrap items-center justify-center gap-4">
      <motion.div 
       variants={iconVariants(2.5)}
       initial='initial'
       animate='animate'
      className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiMongodb className="text-6xl text-green-500" />
        </motion.div>

        <motion.div 
        variants={iconVariants(3)}
        initial='initial'
        animate='animate'
        className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiExpress className="text-6xl text-gray-400" />
        </motion.div> 

        <motion.div 
        variants={iconVariants(5)}
        initial='initial'
        animate='animate'
        className="rounded-2xl border-4 border-neutral-800 p-4">
            <RiReactjsLine className="text-6xl text-cyan-400" />
        </motion.div> 

        <motion.div 
        variants={iconVariants(2)}
        initial='initial'
        animate='animate'
        className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaNodeJs className="text-6xl text-green-500" />
        </motion.div> 

        <motion.div 
        variants={iconVariants(3)}
        initial='initial'
        animate='animate'
        className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiPostman className="text-6xl text-orange-500" />
        </motion.div>

        <motion.div 
        variants={iconVariants(1.5)}
        initial='initial'
        animate='animate'
        className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiMysql className="text-6xl text-blue-500" />
        </motion.div>

        <motion.div 
        variants={iconVariants(5)}
        initial='initial'
        animate='animate'
        className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiHtml5 className="text-6xl text-orange-500" />
        </motion.div>

        <motion.div 
        variants={iconVariants(8)}
        initial='initial'
        animate='animate'
        className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiCss3 className="text-6xl text-blue-400" />
        </motion.div>

        <motion.div 
        variants={iconVariants(2)}
        initial='initial'
        animate='animate'
        className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiJavascript className="text-6xl text-yellow-400" />
        </motion.div>

        <motion.div 
        variants={iconVariants(3)}
        initial='initial'
        animate='animate'
        className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiPhp className="text-6xl text-indigo-600" />
        </motion.div>

        <motion.div 
        variants={iconVariants(6)}
        initial='initial'
        animate='animate'
        className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaJava className="text-6xl text-red-600" />
        </motion.div>

        <motion.div 
        variants={iconVariants(1.4)}
        initial='initial'
        animate='animate'
        className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiGithub className="text-6xl text-black-500" />
        </motion.div>

        <motion.div 
        variants={iconVariants(4)}
        initial='initial'
        animate='animate'
        className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiFigma className="text-6xl text-purple-500" />
        </motion.div>

        <motion.div 
        variants={iconVariants(5)}
        initial='initial'
        animate='animate'
        className="rounded-2xl border-4 border-neutral-800 p-4">
            <DiVisualstudio className="text-6xl text-blue-500" />
        </motion.div>

        <motion.div 
        variants={iconVariants(8)}
        initial='initial'
        animate='animate'
        className="rounded-2xl border-4 border-neutral-800 p-4">
            <DiAndroid className="text-6xl text-green-500" />
        </motion.div>

        <motion.div 
        variants={iconVariants(2)}
        initial='initial'
        animate='animate'
        className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiAngular className="text-6xl text-red-600" />
        </motion.div>








      </motion.div>
    </div>
  );
};

export default Technologies;

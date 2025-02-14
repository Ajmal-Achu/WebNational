import { motion } from "framer-motion"
import ServiceCard from "./ServiceCard"
import { backend, web, mobile, creator } from "../assets"
const About = () => {
  const handleLogin = () => {
    window.open("https://cmt3.research.microsoft.com/NCICPS2025", "_blank", "noopener,noreferrer")
  }

  const textVariant = () => {
    return {
      hidden: {
        y: 50,
        opacity: 0,
      },
      visible: {
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.8,
          ease: "easeInOut",
        },
      },
    }
  }

  const fadeIn = (direction, type, delay, duration) => {
    return {
      hidden: {
        x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
        y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
        opacity: 0,
      },
      show: {
        x: 0,
        y: 0,
        opacity: 1,
        transition: {
          type: type,
          delay: delay,
          duration: duration,
          ease: "easeOut",
        },
      },
    }
  }

  const services = [
    {
      title: "Cutting-edge research presentations",
      icon: backend,
    },
    {
      title: "Networking opportunities",
      icon: mobile,
    },
    {
      title: "Advance interactive workshops",
      icon: web,
    },
    {
      title: "Industry-academia collaborations",
      icon: creator,
    },
  ]

  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <motion.div variants={textVariant()} className="mt-4 w-full text-center">
        <h2 className="text-4xl font-bold text-white mb-4 text-center">About the Conference</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-2 text-secondary text-[17px] w-full max-w-4xl leading-[30px] text-left"
      >
        Cyber-physical security is crucial in our interconnected world, where digital systems integrate with physical
        infrastructure. As technology becomes more embedded in daily life, vulnerabilities emerge. A comprehensive
        strategy combining cyber and physical security is essential. The 2nd National Conference on Intelligent
        Cyber-Physical Systems (NCICP525) gathers researchers, practitioners, and innovators in cyber-physical systems
        and intelligent applications. Join us in shaping the future of these systems and their impact on our
        interconnected world.
      </motion.p>

      <motion.div variants={textVariant()} className="mt-4 w-full text-center">
        <h2 className="text-4xl font-bold text-white mb-4 text-center">Call For Papers</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-2 text-secondary text-[17px] w-full max-w-4xl leading-[30px] text-left"
      >
        NCICPS'25 invites full paper submissions in various tracks. All accepted papers will be published in the
        conference proceedings, and selected papers will be published in the International Journal of Science Technology
        and Innovation (IJSTI). We welcome innovative research, case studies, and practical applications in the fields
        of Intelligent Cyber Physical Systems, Computational Intelligence, and Cyber Security & Forensics.
      </motion.p>

      <motion.div variants={textVariant()} className="mt-6 w-full text-center">
        <h2 className="text-4xl font-bold text-white mb-4 text-center">Important Dates</h2>
      </motion.div>
      <motion.ul
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-2 text-secondary text-[17px] w-full max-w-4xl leading-[30px] list-disc list-inside text-left"
      >
        <li>Paper Submission Deadline: 21/01/2025</li>
        <li>Notification of acceptance: 14/02/2025</li>
        <li>Camera-Ready paper submission: 18/02/2025</li>
        <li>Registration for conference: 20/02/2025</li>
        <li>Registration closes on: 20/02/2025</li>
      </motion.ul>

      <motion.div
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] w-full max-w-4xl leading-[30px] text-left"
      >
        <p>Authors can submit papers through Microsoft CMT.</p>
        <motion.button
          className="mt-3 bg-gradient-to-r from-purple-500 to-indigo-600 text-white py-2 px-6 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleLogin}
        >
          Login
        </motion.button>
      </motion.div>

      <div className="mt-12 flex flex-wrap justify-center gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  )
}

export default About


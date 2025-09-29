'use client'
import React, { useEffect } from 'react'
import { HackathonThemesCard, Article } from './HackathonThemesCard'
import TitleComponent from '../HelperComponents/TitleComponent'
import { motion, useAnimation, useInView } from 'framer-motion'
import { useRef } from 'react'

const themes = [
  {
    title: "Developer Tools",
    description: "Unleash your innovation to streamline software development and enhance coding workflows. From enforcing coding standards to improving documentation and version control, this is your chance to develop tools that empower developers to build smarter, faster, and more efficiently.",
  },
  {
    title: "EdTech",
    description: "Are you ready to revolutionize education? Dive into this theme and design solutions that personalize learning, create engaging interactive tools, and provide accessible resources for diverse learners. Whether it's AI-powered platforms or immersive AR/VR experiences, you can make learning more impactful and inclusive.",
  },
  {
    title: "Smart Cities",
    description: "Help shape the future of urban living! Use cutting-edge technologies like IoT, AI, and big data to create smart solutions that improve transportation, manage resources efficiently, and reduce environmental impact. Your innovation could be the key to building more sustainable and smarter cities.",
  },
  {
    title: "Next-Gen Technologies",
    description: "Step into the world of future tech! With advancements like 5G, blockchain, and AR/VR, you can create solutions that redefine connectivity, speed, and real-time communication. Whether it's enhancing network performance or revolutionizing digital experiences, your ideas can lead the next wave of technological breakthroughs.",
  },
  {
    title: "Assistive Technology and Accessibility",
    description: "Create technologies that make a real difference! This theme invites you to design devices and software that enhance accessibility, mobility, and communication for individuals with disabilities. Your innovation can promote independence, inclusivity, and equal opportunities for everyone.",
  },
  {
    "title": "Cybersecurity",
    "description": "In an increasingly digital world, security is more crucial than ever. Build solutions that protect sensitive data, detect vulnerabilities, and secure networks from cyber threats. Whether it's encryption, threat detection, or privacy-enhancing technologies, your innovations can help safeguard the digital future."
  }  
]

const HackathonThemes = () => {
  const themeGrid = useRef(null);
  const isInView = useInView(themeGrid, { once: true });
  const controls = useAnimation();

  useEffect(()=>{
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView])

  return (
    <div className="flex flex-col w-full h-fit gap-8 py-8 ">
      <TitleComponent titleData="Hackathon Themes" id="theme" />
      {/* <div ref={themeGrid} className="w-full grid grid-cols-1 md:grid-cols-2 gap-9">
        {
          themes.map((item, index) => (
            <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y:50 },
                  visible: { opacity: 1, y: 0 }
                }}
                initial="hidden"
                animate={controls}
                transition={{ duration: 1 }}
            >
              <HackathonThemesCard>
                <Article title={item.title} description = {item.description} themeNumber = {` ${index + 1}`} />
              </HackathonThemesCard>
            </motion.div>
          ))
        }
      </div> */}
    </div>
  )
}

export default HackathonThemes

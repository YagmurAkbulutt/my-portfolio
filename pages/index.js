import Typical from "react-typical";
import Layout from "../components/Layout";
import { motion } from "framer-motion";
import React from "react";
import GithubIcon from "../components/icons/Github";
import LinkedinIcon from "../components/icons/Linkedin";
import Link from "next/link";

const TypingAnimation = React.memo(
  () => {
    return (
      <Typical
        loop={3}
        wrapper="p"
        steps={["Front-End Developer", 2000, "React Developer", 2000]}
      />
    );
  },
  (props, prevProps) => true
);

export default function Home() {
  return (
    <Layout title={"Yağmur Akbulut"} description={"My Portfolio"}>
      <motion.img
        whileHover={{ y: -10, rotate: 90, transition: { duration: 0.4 } }}
        drag
        dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
        src="/images/ball-1.svg"
        className="hidden md:block absolute h-auto top-35 right-10 z-[1]"
      />

      <motion.img
        whileHover={{ y: -10, rotate: 90, transition: { duration: 0.4 } }}
        drag
        dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
        src="/images/ball-2.svg"
        className="hidden md:block absolute h-auto bottom-1 left-10 z-[1]"
      />

      <main className="w-full h-full md:flex">
        <section className="h-full max-w-5xl mx-auto pt-16 md:pt-1 ">
          <div className="flex flex-col items-center justify-center md:items-start">
            <h4 className="text-lg text-gray-800 dark:text-white">
              <span className="text-xl font-normal">Hello,</span> I'm
            </h4>
            <h1 className="mt-5 text-xl font-extrabold tracking-normal text-gray-800 uppercase md:text-4xl md:mt-3 dark:text-white">
              Yağmur Akbulut
            </h1>

            <div className="mt-5 text-2xl font-normal text-transparent bg-gradient-to-r from-pink-500 via-indigo-400 to-purple-700 bg-clip-text md:mt-3">
              <TypingAnimation />
            </div>

            <div className="flex items-center align-items-center mt-8 space-x-6 md:mt-4">
              <motion.a
                href="https://github.com/YagmurAkbulutt"
                target={"_blank"}
                rel="noopener noreferrer"
                className="flex items-center justify-center text-gray-800 transition-colors duration-300 dark:text-gray-100 dark:hover:text-pinkish-200 hover:text-pinkish-200"
                whileHover={{ scale: 1.1 }}
              >
                <GithubIcon className={"w-8 h-8 fill-current"} />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/ya%C4%9Fmur-akbulut/"
                target={"_blank"}
                rel="noopener noreferrer"
                className="flex items-center justify-center text-gray-800 transition-colors duration-300 dark:text-gray-100 dark:hover:text-pinkish-200 hover:text-pinkish-200"
                whileHover={{ scale: 1.1 }}
              >
                <LinkedinIcon className={"w-8 h-8 fill-current"} />
              </motion.a>
            </div>
          </div>

          <article className="mt-3 prose md:mt-4 md:prose-lg dark:prose-dark ">
            <div>
              <pre>
                <code className="language-js">
                  <div className="flex items-center py-0 my-0 space-x-4 text-gray-500">
                    <span>// Portfolio.js </span>
                  </div>
                  <p>
                    <span className="text-gray-500">//</span>{" "}
                    <span className="text-purple-300">Todo:</span> You can drag
                    these balloons. 🎈🎈
                  </p>

                  <div className="flex items-center space-x-4">
                    <img
                      src="https://media.licdn.com/dms/image/v2/D4D03AQEyubD2nl98fA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1711570635172?e=1730937600&v=beta&t=N6xVMMRX3bG1r4yGqAoc3cOCxJlUsQk6577UOB-0jys"
                      alt="Me"
                      className="rounded-full"
                      style={{width: "70px", height: "70px"}}
                    />

                    <div className="">
                      <p className="text-sm">
                        <span className="text-pink-300"> {">"} </span> const
                        webTechStack
                        <span className="font-bold text-pink-300">2</span> =
                        ["React", "TypeScript", "JavaScript" , "Redux"];{" "}
                      </p>
                      <p className="text-sm">
                        <span className="text-pink-300"> {">"} </span> const
                        webTechStack
                        <span className="font-bold text-pink-300">3</span> =
                        ["TailwindCSS", "BootStrap", "Firebase", "Unit Test"];{" "}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-8">
                    <a href="https://github.com/YagmurAkbulutt?tab=repositories" target="_blank" className="transition duration-300">
                      Projects
                    </a>
                  </div>
                </code>
              </pre>
            </div>
          </article>
        </section>
      </main>
    </Layout>
  );
}

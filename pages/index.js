import Head from "next/head";
import { BsFillMoonStarsFill, BsFillBrightnessHighFill } from "react-icons/bs"; 
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";
import Image from "next/image";
import deved from "../public/dev-ed-wave.png";
import anton from "../public/Antony.png";
import code from "../public/code.png";
import design from "../public/design.png";
import consulting from "../public/consulting.png";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import web5 from "../public/web5.png";
import web6 from "../public/web6.png";
import { useState } from "react";

const cover = { objectFit: "cover" };

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Antony Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="font-burton text-xl dark:text-gray-200">developedbyantony</h1>
            <ul className="flex items-center">
              <li className="cursor-pointer text-2xl" onClick={() => setDarkMode(!darkMode)}>
              {darkMode ? <BsFillBrightnessHighFill className="dark:text-gray-200" /> : <BsFillMoonStarsFill />}
                
                  
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
                  href="#"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">
              Antony Syah
            </h2>
            <h3 className="text-2xl py-2 md:text-3xl dark:text-gray-300">
              Developer and Designer
            </h3>
            <p className="text-md py-5 leading-8 text-gray-600 md:text-lg max-w-xl mx-auto dark:text-gray-300">
              Freelancer providing service for programming and desain content
              needs. Join me down below and let's get cracking!
            </p>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-300">
              <AiFillTwitterCircle />
              <AiFillLinkedin />
              <AiFillYoutube />
            </div>
            <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:w-96 md:h-96">
              <Image src={anton} fill style={cover} />
            </div>
          </div>
        </section>

        {/* create service */}
        <section>
          <div className="text-center p-10">
            <h3 className="text-3xl py-1 dark:text-gray-300">Service I offer</h3>
            <p className="text-md py-2 leading-8 md:text-lg max-w-xl mx-auto text-gray-800 dark:text-gray-300">
              Since the begining of my journey as a free developer, I've done
              remote work for<span className="text-teal-500"> agency</span>
              consulted for <span className="text-teal-500"> startups</span> and
              collaborated with talented people to create digital product for
              both business and consumer use.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-300">
              I offer from a wide range of service, including brand design,
              programming and teaching.
            </p>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gray-800">
              <Image
                className="mx-auto"
                src={design}
                width={100}
                height={100}
              />
              <h3 className="text-lg font-medium pt-8 pb-2 dark:text-gray-200">
                Beautiful Design
              </h3>
              <p className="py-2 dark:text-gray-200">
                Creating elegant design suited for your needs following core
                design theory
              </p>
              <h4 className="py-4 text-teal-600">Design tools I use</h4>
              <p className="text-gray-200 py-1">Photoshop</p>
              <p className="text-gray-200 py-1">Ilustrator</p>
              <p className="text-gray-200 py-1">Figma</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gray-800">
              <Image className="mx-auto" src={code} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2 text-gray-200">
                Code Your Dream Project
              </h3>
              <p className="py-2 text-gray-200">
                Creating elegant design suited for your needs following core
                design theory
              </p>
              <h4 className="py-4 text-teal-600">Design tools I use</h4>
              <p className="text-gray-200 py-1">Photoshop</p>
              <p className="text-gray-200 py-1">Ilustrator</p>
              <p className="text-gray-200 py-1">Figma</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gray-800">
              <Image
                className="mx-auto"
                src={consulting}
                width={100}
                height={100}
              />
              <h3 className="text-lg font-medium pt-8 pb-2 text-gray-200">Consulting</h3>
              <p className="py-2 text-gray-200">
                Are you interested in feedback for your current project? I can
                give you tips and trick to level it up.
              </p>
              <h4 className="py-4 text-teal-600">Design tools I use</h4>
              <p className="text-gray-200 py-1">Photoshop</p>
              <p className="text-gray-200 py-1">Ilustrator</p>
              <p className="text-gray-200 py-1">Figma</p>
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1 text-gray-200">Portofolio</h3>
            <p className="text-md py-2 leading-8 text-gray-800 text-gray-200">
              Since the begining of my journey as a free developer, I've done
              remote work for<span className="text-teal-500"> agency</span>
              consulted for <span className="text-teal-500"> startups</span> and
              collaborated with talented people to create digital product for
              both business and consumer use.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 text-gray-200">
              I offer from a wide range of service, including brand design,
              programming and teaching.
            </p>
          </div>
          <div className="flex flex-col-reverse gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1">
              <Image
                src={web1}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web1}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web1}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web1}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web1}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web1}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

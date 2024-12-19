import { Figma, Github, MapPin, Twitter } from "lucide-react";
import Image from "next/image";

export default function profile() {
  return (
    <div>
      <div className="w-full max-w-full px-0">
        <div className="flex justify-between p-5">
          <div className="text-lg items-center font-bold">{"</>"}</div>

          <div className="flex items-center gap-x-7">
            <div className="text-lg">About</div>
            <div className="text-lg">Work</div>
            <div className="text-lg">Testimonials</div>
            <div className="text-lg">Contact</div>
            <button className="w-full bg-black text-white p-3 rounded-xl">
              Download CV
            </button>
          </div>
        </div>
        <div className="flex p-5">
          <div className="w-full lg:1/2 p-5">
            <div className="text-6xl font-bold">Hi, I`m Rangga 👋</div>
            <div className="text-lg mt-5 text-gray-400">
              I`m a full stack developer (React.js & Node.js) with a focus on
              creating (and occasionally designing) exceptional digital
              experiences that are fast, accessible, visually appealing, and
              responsive. Even though I have been creating web applications for
              over 7 years, I still love it as if it was something new.
            </div>
            <div className="mt-10">
              <div className="text-lg flex items-center gap-x-4">
                <MapPin /> Rangga Putra, Bandung
              </div>
              <div className="text-lg flex items-center gap-x-4 ml-1.5 mt-3">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-1.5"></div>
                Available for new projects
              </div>
            </div>
            <div className="mt-10">
              <div className="flex items-center gap-x-4">
                <Github />
                <Twitter />
                <Figma />
              </div>
            </div>
          </div>
          <div className="w-full flex justify-center items-center lg:1/2 p-5">
            {/* <Image
              className=""
              src="/img/profile2.jpg"
              alt="Profile"
              width={150}
              height={30}
            /> */}
            <div className="relative">
              <div className="w-60 h-60 bg-gray-400 absolute top-8 left-8"></div>
              <div className="w-60 h-60 relative">
                <Image
                  className="object-cover w-full h-full"
                  src="/img/profile.jpg"
                  alt="Profile"
                  width={240}
                  height={240}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

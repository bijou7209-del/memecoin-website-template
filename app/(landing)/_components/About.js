import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div className="relative">
      <div className="flex absolute -top-24 max-w-full overflow-clip">
        <div className="cloud -ms-6"></div>
        <div className="cloud -ms-6 rotate-6"></div>
        <div className="cloud -ms-6"></div>
        <div className="cloud -ms-6 -rotate-12"></div>
        <div className="cloud -ms-6"></div>
        <div className="cloud -ms-6 rotate-12"></div>
        <div className="cloud -ms-6"></div>
        <div className="cloud -ms-6 -rotate-6"></div>
        <div className="cloud -ms-6"></div>
        <div className="cloud -ms-6"></div>
        <div className="cloud -ms-6"></div>
        <div className="cloud -ms-6 rotate-6"></div>
        <div className="cloud -ms-6"></div>
        <div className="cloud -ms-6 -rotate-12"></div>
        <div className="cloud -ms-6"></div>
        <div className="cloud -ms-6 rotate-12"></div>
        <div className="cloud -ms-6"></div>
        <div className="cloud -ms-6 -rotate-6"></div>
        <div className="cloud -ms-6"></div>
        <div className="cloud -ms-6"></div>
      </div>
      <div id="about" className="max-w-[85rem] px-4 py-10 sm:py-14 mx-auto">
        <div className="my-7">
          <h2 className="font-stopbuck text-6xl text-duis text-shadow text-center mt-14">
            About the $STARCAT
          </h2>
          <h3 className="font-stopbuck text-2xl text-center italic text-black">
            {`(the cutest cat on earth)`}
          </h3>
        </div>
        <div className="grid lg:grid-cols-2 gap-6">
          <div className="">
            <Image
              className="h-full object-cover"
              src="/collection/9.png"
              width={700}
              height={700}
              alt="Dui Image"
            />
          </div>

          <div className="p-4 h-full sm:p-6">
            <h3 className="font-mono text-lg sm:text-2xl text-[#33271e] tracking-widest text-justify sm:text-left">
              <p className="indent-12">
                <span className="text-3xl font-bold">The $STARCAT</span>, affectionately
                known as the{" "}
                <span className="font-semibold italic">{'"star kitty"'}</span>{" "}
                captured the hearts of millions worldwide with his celestial marking and his unbelievably cute, personality-filled expressions.{" "}
              </p>
              <p className="indent-12 mt-3">
                His TikTok videos exploded in early March 2026, instantly turning the {" "}
                <span className=" italic font-bold">$STARCAT</span> into a viral sensation with thousands shared memes and stickers in the comments.
              <p className="indent-12 mt-3">
                Even during global conflicts, the tiny star-marked kitten spread joy and positivity.
              </p>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

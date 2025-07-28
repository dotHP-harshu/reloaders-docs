import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import { WaveformBar } from "@dothp/reloaders/BarLoaders";
import { DotCircleLoader } from "@dothp/reloaders/DotLoaders";
import { ShapeMorphing } from "@dothp/reloaders/ShapeLoaders";
import { DashedRingLoader } from "@dothp/reloaders/Spinner";
import { ScrambledLettersLoader } from "@dothp/reloaders/TextLoaders";
import { CircleSkeleton } from "@dothp/reloaders/SkeletonLoaders";
import { LissajousCurveLoader } from "@dothp/reloaders/MotionPathLoaders";
import { YinYangLoader } from "@dothp/reloaders/FunLoaders";

import { useRef } from "react";

gsap.registerPlugin(useGSAP);

const introLoadersPosition = [
  { id: 1, x: "30vw", y: "30vh" }, // top-left
  { id: 2, x: "50vw", y: "25vh" }, // top-center
  { id: 3, x: "70vw", y: "30vh" }, // top-right
  { id: 4, x: "32vw", y: "50vh" }, // mid-left
  { id: 5, x: "68vw", y: "50vh" }, // mid-right
  { id: 6, x: "35vw", y: "70vh" }, // bottom-left
  { id: 7, x: "50vw", y: "75vh" }, // bottom-center
  { id: 8, x: "65vw", y: "70vh" }, // bottom-right
];

function PreLoader({setIsShowingPreloader}) {
  const preloaderRef = useRef(null);
  useGSAP(() => {
    const introLoaders = gsap.utils.toArray(
      preloaderRef.current.querySelectorAll(".intro-loaders")
    );

    const logo = preloaderRef.current.querySelector("#logo");
    const logoText = preloaderRef.current.querySelector("#logo-text");

    introLoaders.forEach((loader, index) => {
      gsap.set(loader, {
        x: introLoadersPosition[index].x,
        y: introLoadersPosition[index].y,
        opacity: 0,
      });
    });

    const tl = gsap.timeline();

    tl.to(introLoaders, {
      opacity: 1,
      stagger: 0.1,
      duration: 1,
      ease: "back.out",
    })
      .to(
        introLoaders,
        {
          top: "55%",
          left: "55%",
          x: "-50%",
          y: "-50%",
          scale: 0,
          opacity: 0,
          stagger: 0.1,
          duration: 1,
          ease: "power2.out",
        },
        "-=0.3"
      )
      .from(logo, {
        scale: 0,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
      })
      .from(logoText, {
        y: 100,
        duration: 1,
        ease: "power2.out",
      })
      .to(preloaderRef.current, {
        opacity: 0,
        y: "-100%",
        delay: 0.5,
        duration: 1,
        onComplete: () => setIsShowingPreloader(false),
      });
  }, {scope: preloaderRef.current});

  return (
    <div
      ref={preloaderRef}
      className="w-screen h-screen overflow-hidden bg-main-bg-light dark:bg-main-bg-dark fixed top-0 right-0 flex justify-center items-center z-[200]"
    >
      <div className="intro-loaders flex flex-col justify-center items-center h-40 w-4 absolute top-0 left-0 -translate-1/2 max-sm:scale-50">
        <DotCircleLoader color={"#3498db"} />
      </div>

      <div className="intro-loaders flex flex-col justify-center items-center h-40 w-40 absolute top-0 left-0 -translate-1/2 max-sm:scale-50">
        <ShapeMorphing color={"#3498db"} secondColor={"#ff6b9d"} />
      </div>
      <div className="intro-loaders flex flex-col justify-center items-center h-40 w-40 absolute top-0 left-0 -translate-1/2 max-sm:scale-50">
        <DashedRingLoader color={"#3498db"} />
      </div>
      <div className="intro-loaders flex flex-col justify-center items-center h-40 w-40 absolute top-0 left-0 -translate-1/2 max-sm:scale-50">
        <ScrambledLettersLoader text="Loading" />
      </div>
      <div className="intro-loaders flex flex-col justify-center items-center h-40 w-40 absolute top-0 left-0 -translate-1/2 max-sm:scale-50">
        <LissajousCurveLoader color={"#3498db"} />
      </div>
      <div className="intro-loaders flex flex-col justify-center items-center h-40 w-40 absolute top-0 left-0 -translate-1/2 max-sm:scale-50">
        <WaveformBar color={"#6366f1"} />
      </div>
      <div className="intro-loaders flex flex-col justify-center items-center h-40 w-40 absolute top-0 left-0 -translate-1/2 max-sm:scale-50">
        <CircleSkeleton size={50} />
      </div>
      <div className="intro-loaders flex flex-col justify-center items-center h-40 w-40 absolute top-0 left-0 -translate-1/2 max-sm:scale-50">
        <YinYangLoader color1={"#2c3e50"} color2={"#ecf0f1"} />
      </div>
      <div className="w-40 h-40 ">
        <img
          id="logo"
          src="/reloaders-docs/images/logo.png "
          alt="logo"
          className="w-full drop-shadow-xl drop-shadow-accent-color max-sm:scale-50"
        />
        <span className="w-fit h-fit inline-block overflow-hidden mt-6">
          <h1
            id="logo-text"
            className="text-lg font-light text-accent-color tracking-wide w-full text-center"
          >
            @dothp/
            <span className="text-primary-color font-semibold">reloaders</span>
          </h1>
        </span>
      </div>
    </div>
  );
}

export default PreLoader;

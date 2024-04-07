import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { personalDetails } from "../Details";

function Home() {
  const { name, tagline, img } = personalDetails;
  const h11 = useRef();
  const h12 = useRef();
  const h13 = useRef();
  const myimageref = useRef();
  const quoteTitleRef = useRef();
  const quoteRef = useRef();
  useEffect(() => {
    const tl = gsap.timeline();
    tl.from(
      h11.current,
      {
        x: "-100%",
        delay: 0.8,
        opacity: 0,
        duration: 2,
        ease: "Power3.easeOut",
      },
      "<"
    )
      .from(
        h12.current,
        {
          x: "-100%",
          delay: 0.5,
          opacity: 0,
          duration: 2,
          ease: "Power3.easeOut",
        },
        "<"
      )
      .from(
        h13.current,
        {
          x: "-100%",
          delay: 0.1,
          opacity: 0,
          duration: 2,
          ease: "Power3.easeOut",
        },
        "<"
      )
      .from(
        myimageref.current,
        {
          x: "200%",
          delay: 0.5,
          opacity: 0,
          duration: 2,
          ease: "Power3.easeOut",
        },
        "<"
      )
      .from(
        [quoteTitleRef.current, quoteRef.current],
        {
          delay: 1,
          y: 20,
          opacity: 0,
          duration: 1,
          ease: "Power3.easeOut",
        },"<"
      );
    }, []);

  return (
    <main className="container mx-auto max-w-7xl p-4 md:flex md:justify-between md:items-center">
    <div className="flex-1">
      <h1
        ref={h11}
        className="text-4xl font-bold leading-tight text-dark-heading dark:text-light-heading md:text-5xl xl:text-6xl"
      >
        Hi,👋<br></br>My Name is<br></br>
      </h1>
      <h1
        ref={h12}
        className="text-4xl font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400 md:text-5xl xl:text-6xl"
      >
        {name}
      </h1>
      <h3
        ref={h13}
        className="text-xl leading-tight text-dark-heading dark:text-light-heading md:text-2xl xl:text-4xl"
      >
        {tagline}
      </h3>
      <br/><br/><br/><br/><br/>
        <h3 
          ref={quoteTitleRef} 
          className="text-lg leading-tight text-dark-heading dark:text-light-heading md:text-xl xl:text-2xl"
        >
          My Favourite Quote
        </h3>
        <p 
          ref={quoteRef}
          className="italic text-lg"
        >
          "The most certain way to succeed is always to try just one more time."<br/>&nbsp;&nbsp;&nbsp;- Thomas Edison
        </p>
    </div>
    <div className="md:flex-1 mt-5 md:mt-0 md:flex md:justify-end">
      <img ref={myimageref} className="w-full md:w-1/2 lg:w-4/5" src={img} alt="Peyman Naderi" />
    </div>
  </main>
  
  );
}

export default Home;

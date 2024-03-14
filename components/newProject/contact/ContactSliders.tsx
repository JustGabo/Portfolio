"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const ContactSliders = () => {
  useGSAP(() => {
    const footerTl = gsap.timeline();

    ScrollTrigger.create({
      animation: footerTl,
      trigger: ".footer",
      start: "top top",
    });

    footerTl
      .from(".skills", {
        opacity: 0,
        xPercent: "-=20",
      })
      .to(".skills", {
        xPercent: "-=100",
        opacity: 0,
        duration: 1,
        delay: 0.8,
      });

    gsap.to(".section-1", {
      xPercent: -100,
      delay: 1.5,
      duration: 0.8,
      scrollTrigger: {
        trigger: ".footer",
        start: "top top",
      },
    });

    gsap.to(".section-2", {
      xPercent: 100,
      delay: 1.7,
      duration: 0.8,
      scrollTrigger: {
        trigger: ".footer",
        start: "top top",
      },
    });
    gsap.to(".section-3", {
      xPercent: "200",
      delay: 2,
      duration: 0.8,
      scrollTrigger: {
        trigger: ".footer",
        start: "top top",
      },
    });
    gsap.to(".section-4", {
      yPercent: 100,
      delay: 1.5,
      duration: 0.8,
      scrollTrigger: {
        trigger: ".footer",
        start: "top top",
      },
    });

    const smFooterTl = gsap.timeline();

    ScrollTrigger.create({
      animation: smFooterTl,
      trigger: ".sm-footer",
      start: "top 20",
    });

    smFooterTl
      .from(".sm-footer-title", {
        opacity: 0,
        y: "-=30",
      })
      .to(".sm-footer-title", {
        opacity: 0,
        y: "+=30",
        delay: 1,
      })
      .to(".sm-footer", {
        xPercent: "-100",
        duration: 0.8,
      });
  });

  return (
    <>
      <section className="w-[100vw] hidden  absolute skills text-[#130101] z-10  top-0 left-0   h-[100vh] lg:flex items-end p-2">
        <h2 className="w-[55%] text-8xl   font-semibold">
          Thank you for viewing<span className="text-white  h-min">.</span>
        </h2>
      </section>
      <section className="w-[100vw] hidden  lg:flex flex-col h-[100vh] footer">
        <article className="flex-1 flex">
          <div className="w-[30%]  section-1  bg-yellow-600 flex items-center justify-center"></div>
          <div className="flex-1 section-2 bg-yellow-600 flex items-center justify-center"></div>
        </article>
        <article className="flex-1 flex">
          <div className="w-[60%] section-3 h-full  bg-yellow-600 flex items-center justify-center"></div>
          <div className="flex-1 section-4 h-full  bg-yellow-600 flex items-center justify-center"></div>
        </article>
      </section>

      <section className="h-screen flex lg:hidden sm-footer  p-5 bg-yellow-600  absolute top-0 left-0 z-10 w-full">
        <article className="flex flex-col sm-footer-title h-full gap-10  justify-end   tracking-tight">
          <h2 className="w-[90%] text-5xl   font-semibold">
            Thank you for viewing<span className="text-white  h-min">.</span>
          </h2>
        </article>
      </section>
    </>
  );
};

export default ContactSliders;

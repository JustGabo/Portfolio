"use client";
import React from "react";
import ContactContent from "./ContactContent";
import ContactSliders from "./ContactSliders";
const Contact = () => {
  return (
    <article className="flex relative items-center justify-center h-[100dvh]">
      <ContactContent />
      <ContactSliders />
    </article>
  );
};

export default Contact;

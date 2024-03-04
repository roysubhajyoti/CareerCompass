"use client";
import React from "react";
import SJR from "../assets/SJR.jpeg";
import Rohit from "../assets/Rohit.jpeg";
import sd from "../assets/sd.jpg";
import { AnimatedTooltip } from "./UI/animated-tooltip";
const people = [
  {
    id: 1,
    name: "SJR",
    designation: "Founder",
    image: SJR,
  },
  {
    id: 2,
    name: "Soumojit",
    designation: "Founder",
    image: sd,
  },
  {
    id: 3,
    name: "Ankur",
    designation: "Founder",
    image:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
  },
  {
    id: 4,
    name: "Rohit",
    designation: "Founder",
    image: Rohit,
  },
];

export function AnimatedTool() {
  return (
    <div className="flex flex-row items-center justify-center mb-10 w-full">
      <AnimatedTooltip items={people} />
    </div>
  );
}

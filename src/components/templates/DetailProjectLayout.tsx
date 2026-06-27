"use client";
import { useState } from "react";
import Navbar from "../organisms/Navbar";
import Footer from "../organisms/Footer";
import ProjectDetailHero from "../organisms/ProjectDetailHero";
import ProjectDetailContent from "../organisms/ProjectDetailContent";
import ProjectDetailGallery from "../organisms/ProjectDetailGallery";
import { Project } from "@/config/projects";
const DetailProjectLayout = ({ project }: { project: Project }) => {
  return (
    <div className="overflow-x-hidden overflow-y-clip bg-white">
      <Navbar />
      <main>
        <ProjectDetailHero project={project} />
        <ProjectDetailContent project={project} />
        <ProjectDetailGallery project={project} />
      </main>
      <Footer />
    </div>
  );
};

export default DetailProjectLayout;

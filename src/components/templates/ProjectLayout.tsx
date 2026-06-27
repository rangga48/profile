"use client";
import Navbar from "../organisms/Navbar";
import Footer from "../organisms/Footer";
import HeadlineProject from "../organisms/HeadlineProject";
import ProjectSection from "../organisms/ProjectSection";
const ProjectLayout = ({}) => {
  return (
    <div className="bg-white">
      <Navbar />
      <HeadlineProject />
      <ProjectSection />
      <Footer />
    </div>
  );
};

export default ProjectLayout;

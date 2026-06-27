import Image from "next/image";
import { Project } from "@/config/projects";

const ProjectDetailGallery = ({ project }: { project: Project }) => {
  if (!project.galleryImages || project.galleryImages.length === 0) return null;

  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2
          className="font-display font-bold text-3xl text-zinc-900 dark:text-white mb-10 text-center"
          data-aos="fade-up"
        >
          Project Gallery
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {project.galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative aspect-video rounded-3xl overflow-hidden border border-zinc-100 dark:border-zinc-800 shadow-md"
              data-aos="fade-up"
              data-aos-delay={100 + index * 100}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectDetailGallery;

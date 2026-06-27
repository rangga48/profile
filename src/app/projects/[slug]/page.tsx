import DetailProjectLayout from "@/components/templates/DetailProjectLayout";
import { projects } from "@/config/projects";

interface PageProps {
  params: {
    slug: string;
  };
}

export default function DetailProject({ params }: PageProps) {
  const project = projects.find((project) => project.slug === params.slug);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-zinc-500">Project tidak ditemukan</p>
      </div>
    );
  }
  return <DetailProjectLayout project={project} />;
}

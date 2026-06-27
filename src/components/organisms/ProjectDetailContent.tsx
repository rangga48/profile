import { Project } from "@/config/projects";
const ProjectDetailContent = ({ project }: { project: Project }) => {
  return (
    <>
      <section className="py-16 border-t border-zinc-100 dark:border-zinc-900">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-12">
          <div
            className="md:col-span-2"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <h2 className="font-display font-bold text-3xl text-zinc-900 dark:text-white mb-6">
              Project Overview
            </h2>
            <div className="space-y-4 text-zinc-500 dark:text-zinc-400 leading-relaxed">
              <p>{project.overviewParagraphs[0]}</p>
              <p>{project.overviewParagraphs[1]}</p>
              <p>{project.overviewParagraphs[2]}</p>
            </div>
          </div>
          <div
            className="md:col-span-1"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 rounded-3xl p-8">
              <h3 className="font-display font-bold text-xl text-zinc-900 dark:text-white mb-4">
                The Challenge
              </h3>
              <ul className="space-y-3 text-sm text-zinc-500 dark:text-zinc-400">
                <li className="flex gap-2">
                  <span className="text-accent">•</span>
                  <span>{project.challenges[0]}</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent">•</span>
                  <span>{project.challenges[1]}</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent">•</span>
                  <span>{project.challenges[2]}</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent">•</span>
                  <span>{project.challenges[3]}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-zinc-50 dark:bg-zinc-900/40">
        <div className="max-w-6xl mx-auto px-6 space-y-12">
          <div data-aos="fade-up" data-aos-delay="300">
            <h2 className="font-display font-bold text-3xl text-zinc-900 dark:text-white mb-6">
              The Solution
            </h2>
            <div className="text-zinc-500 dark:text-zinc-400 leading-relaxed space-y-4">
              <p>{project.solutionParagraphs[0]}</p>
              <p>{project.solutionParagraphs[1]}</p>
              <p>{project.solutionParagraphs[2]}</p>
              <p>{project.solutionParagraphs[3]}</p>
            </div>
          </div>

          <div data-aos="fade-up" data-aos-delay="400">
            <h2 className="font-display font-bold text-3xl text-zinc-900 dark:text-white mb-6">
              The Results
            </h2>
            <div className="text-zinc-500 dark:text-zinc-400 leading-relaxed space-y-4">
              <p>{project.resultsParagraphs[0]}</p>
              <p>{project.resultsParagraphs[1]}</p>
              <p>{project.resultsParagraphs[2]}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectDetailContent;

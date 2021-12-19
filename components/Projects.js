import { projects } from "../projects-data";
import Project from "./Project";

export default function Projects() {
  return (
    <section className="font-mono sm:w-11/12 w-[96%] sm:max-w-screen-xl shadow-lg shadow-gray-500 rounded my-16 mx-auto transition-all ease-in duration-300">
      <p className="text-3xl ml-6 font-bold">Projects I have worked on</p>

      <div className="flex flex-col lg:flex-row lg:justify-evenly sm:p-10">
        {projects.map((pr) => (
          <Project
            key={pr.id}
            image={pr.image}
            name={pr.name}
            stack={pr.stack}
            description={pr.description}
            link={pr.link}
          />
        ))}
      </div>
    </section>
  );
}

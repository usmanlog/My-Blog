import { projects } from "../projects-data";
import Project from "./Project";

export default function Projects() {
  return (
    <section className="font-poppins sm:w-11/12 w-[96%] sm:max-w-screen-xl shadow-lg shadow-gray-500 rounded my-16 mx-auto transition-all ease-in duration-300">
      <p className="sm:text-3xl text-2xl ml-6 mb-8 font-bold">
        Projects I have worked on<span className="tracking-widest">...</span>
      </p>

      <div className="flex flex-col lg:flex-row flex-wrap sm:p-10">
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

import AboutMe from "../components/AboutMe";
import Intro from "../components/Intro";
AboutMe;
import Layout from "../components/Layout";
import Projects from "../components/Projects";
Intro;

export default function Home() {
  return (
    <Layout>
      <Intro />
      <AboutMe />
      <Projects />
    </Layout>
  );
}

import Image from "next/image";
import profilePic from "../public/portfolio.jpg";

export default function AboutMe() {
  return (
    <section className="font-poppins w-11/12 sm:max-w-screen-xl shadow-lg shadow-gray-500 rounded my-6 mx-auto">
      <p className="sm:text-3xl text-2xl ml-6 font-bold">About me</p>
      <div className="text-justify p-6 sm:p-10 lg:flex lg:justify-between">
        <div className="mb-10 lg:mr-10 lg-mb-0  w-48 h-48 mx-auto">
          <Image
            src={profilePic}
            alt="portfolio"
            placeholder="blur"
            layout="fixed"
            height={192}
            width={188}
          ></Image>
        </div>

        <div className="sm:text-lg text-base">
          <p>
            I started learning programming in the year 2020, and at first it was quite overwhelming
            for me because I had no prior experience or knowledge of programming.
          </p>
          <br />
          <p>
            I am a slow learner, and it took my quite some time to learn to code, but I am glad that
            I was able to teach myself <strong className="font-extrabold">HTML</strong>,{" "}
            <strong className="font-extrabold">CSS</strong>,{" "}
            <strong className="font-extrabold">JavaScript</strong>,{" "}
            <strong className="font-extrabold">React js</strong>,{" "}
            <strong className="font-extrabold">Redux</strong>, and{" "}
            <strong className="font-extrabold">Next js.</strong>
          </p>
          <br />
          <p>
            My future plan is to keep growing and learning new things, as web development is
            changing rapidly. My goal is to become a Full Stack developer.
          </p>
        </div>
      </div>
    </section>
  );
}

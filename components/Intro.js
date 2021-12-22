import Link from "next/link";

export default function Intro() {
  return (
    <section className="w-full h-72  font-mono flex items-center text-center flex-col justify-center ">
      <p className="sm:text-2xl text-xl mb-3">Hi, I am Usman! 👋</p>
      <p className="sm:text-5xl text-2xl">I am a self taught Frontend Developer!</p>
      <Link href="/blog" passHref>
        <button className="sm:mt-12 mt-6 bg-black text-white sm:p-4 p-[0.85rem] rounded shadow-md shadow-black sm:text-lg hover:bg-gray-800 hover:-translate-y-1 ease-in duration-100">
          <a>Read my Blog</a>
        </button>
      </Link>
    </section>
  );
}

import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="w-full h-[70px] bg-black bg-gradient-to-r from-black via-gray-700 to-black text-white sm:px-8 px-2 flex justify-between items-center">
      <div className="flex justify-center items-center">
        <Link href="/">
          <a className="sm:text-5xl text-4xl font-mono font-bold sm:tracking-[.7rem] tracking-widest flex items-center hover:text-gray-200">
            <Image src="/logo-white.png" width="70px" height="70px" alt="logo" />
            sman
          </a>
        </Link>
      </div>

      <div className="sm:mr-6 mr-2">
        <nav>
          <Link href="/blog">
            <a className="sm:mr-6 mr-3 hover:text-gray-200">Blog</a>
          </Link>
        </nav>
      </div>
    </header>
  );
}

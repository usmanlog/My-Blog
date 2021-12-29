import Image from "next/image";

export default function Project({ image, name, stack, description, link }) {
  return (
    <div className=" bg-gradient-to-br from-black to-gray-700 hover:cursor-pointer hover:bg-gradient-to-tr hover:from-gray-700 hover:to-black text-white rounded-md overflow-hidden mx-auto mb-12 shadow-black shadow-sm h-[350px] w-[260px] sm:w-[300px] sm:h-[380px] text-left">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <Image
          src={image}
          layout="responsive"
          height={160}
          width={265}
          objectFit="cover"
          alt={name}
          priority
        />
        <div className="w-full p-4">
          <p className="text-xl font-extrabold mb-5 ">{name}</p>
          <p className="text-sm sm:text-base">{description}</p>
          <p className="mx-auto text-center rounded text-sm sm:text-base w-32 font-semibold bg-violet-700 p-1 mt-5">
            {stack}
          </p>
        </div>
      </a>
    </div>
  );
}

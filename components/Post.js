import Link from "next/link";
import Image from "next/image";

export default function Post({ title, image, description, date, category, slug }) {
  return (
    <div className=" bg-gradient-to-br from-black to-gray-700 hover:bg-gradient-to-tr hover:from-gray-700 hover:to-black text-white rounded-md overflow-hidden mx-auto my-8 lg:my-0 shadow-black shadow-sm h-[400px] w-[260px] hover:cursor-pointer sm:w-[350px] sm:h-[450px]">
      <Image
        src={image}
        height={160}
        width={265}
        objectFit="cover"
        alt={title}
        layout="responsive"
      />
      <div className="grid grid-flow-row w-full h-[245px]">
        <div className="p-4">
          <p className="text-xl font-extrabold mb-5 ">{title}</p>
          <p>{description}</p>
        </div>
        <div className=" flex flex-row items-end justify-between p-4">
          <p>{date}</p>
          <p className="bg-violet-700 px-2 py-1 shadow-md shadow-gray-600 font-semibold">
            {category}
          </p>
        </div>
      </div>
    </div>
  );
}

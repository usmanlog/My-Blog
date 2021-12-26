import Link from "next/link";

export default function Pagination({ currentPage, numPages }) {
  const isFirst = currentPage === 1;
  const isLast = currentPage === numPages;
  const prevPage = `/blog/page/${currentPage - 1}`;
  const nextPage = `/blog/page/${currentPage + 1}`;

  if (numPages === 1) {
    return <></>;
  }

  return (
    <div className="w-full flex flex-row justify-center mb-10">
      {!isFirst && (
        <Link href={prevPage}>
          <a>
            <button className="mt-6 bg-black text-white px-5 py-3 rounded shadow-md shadow-black sm:text-lg hover:bg-gray-800">
              Previous
            </button>
          </a>
        </Link>
      )}
      {!isLast && (
        <Link href={nextPage}>
          <a>
            <button className="mt-6 bg-black text-white px-5 py-3 rounded shadow-md shadow-black sm:text-lg hover:bg-gray-800">
              Next
            </button>
          </a>
        </Link>
      )}
    </div>
  );
}

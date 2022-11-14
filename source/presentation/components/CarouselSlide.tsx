import { useRouter } from "next/router";
import { FC, useRef } from "react";

interface ICarouselSlideProps {
  imageSource: string;
  title: string;
  time: string;
  categories: string[];
  id: string;
}

export const CarouselSlide: FC<ICarouselSlideProps> = ({
  imageSource,
  title,
  time,
  categories,
  id,
}): JSX.Element => {
  const { push } = useRouter();
  function watch(): void {
    push(`/watch/${id}`);
  }

  return (
    <article onClick={watch} className="relative group rounded-t-lg">
      <img
        src={imageSource}
        className="w-full h-auto object-cover object-center"
        alt=""
      />
      <div className="absolute bottom-0 w-full translate-y-full group-hover:p-4 bg-dark bg-opacity-95 rounded-b-lg shadow-sm shadow-transparent group-hover:shadow-black">
        <div className="carousel-item-info text-left flex flex-col justify-start">
          <div className="flex items-center justify-between">
            <p>{title}</p>
            <time className="text-xs">{time}</time>
          </div>
          <div className="mt-2 flex items-center space-x-2">
            <button className="text-white transition-all hover:scale-105 hover:text-opacity-80">
              <svg
                width="32"
                height="32"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.1 18.5V29.5C19.1 30.2 19.3916 30.7167 19.975 31.05C20.5583 31.3833 21.1333 31.3667 21.7 31L30.35 25.4C30.8833 25.0667 31.15 24.6 31.15 24C31.15 23.4 30.8833 22.9333 30.35 22.6L21.7 17C21.1333 16.6333 20.5583 16.625 19.975 16.975C19.3916 17.325 19.1 17.8333 19.1 18.5V18.5ZM24 44.3C21.2333 44.3 18.6083 43.7667 16.125 42.7C13.6416 41.6333 11.4833 40.1833 9.64995 38.35C7.81662 36.5167 6.36662 34.3583 5.29995 31.875C4.23328 29.3917 3.69995 26.7667 3.69995 24C3.69995 21.2333 4.23328 18.6083 5.29995 16.125C6.36662 13.6417 7.81662 11.4833 9.64995 9.65001C11.4833 7.81668 13.6416 6.36668 16.125 5.30001C18.6083 4.23335 21.2333 3.70001 24 3.70001C26.7666 3.70001 29.3916 4.23335 31.875 5.30001C34.3583 6.36668 36.5166 7.81668 38.3499 9.65001C40.1833 11.4833 41.6333 13.6417 42.7 16.125C43.7666 18.6083 44.2999 21.2333 44.2999 24C44.2999 26.7667 43.7666 29.3917 42.7 31.875C41.6333 34.3583 40.1833 36.5167 38.3499 38.35C36.5166 40.1833 34.3666 41.6333 31.9 42.7C29.4333 43.7667 26.8 44.3 24 44.3V44.3Z"
                  fill="currentColor"
                />
              </svg>
            </button>

            <button className="text-white transition-all hover:scale-105 hover:text-opacity-80">
              <svg
                width="32"
                height="32"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.8501 42.5C14.8834 42.5 14.0668 42.175 13.4001 41.525C12.7334 40.875 12.4001 40.0666 12.4001 39.1V17.95C12.4001 17.5166 12.4834 17.0916 12.6501 16.675C12.8168 16.2583 13.0668 15.9 13.4001 15.6L23.1501 5.24998C23.6834 4.74998 24.3168 4.43331 25.0501 4.29998C25.7834 4.16664 26.4668 4.28331 27.1001 4.64998C27.7334 4.98331 28.2001 5.49164 28.5001 6.17498C28.8001 6.85831 28.8834 7.54998 28.7501 8.24998L27.0001 16.6H42.8001C43.7001 16.6 44.5001 16.95 45.2001 17.65C45.9001 18.35 46.2501 19.1333 46.2501 20V23.55C46.2501 23.9166 46.2001 24.35 46.1001 24.85C46.0001 25.35 45.8668 25.7833 45.7001 26.15L39.8501 39.75C39.5168 40.5166 38.9751 41.1666 38.2251 41.7C37.4751 42.2333 36.6668 42.5 35.8001 42.5H15.8501ZM6.5001 42.5C5.7001 42.5 5.01676 42.2166 4.4501 41.65C3.88343 41.0833 3.6001 40.4 3.6001 39.6V19.5C3.6001 18.7 3.88343 18.0166 4.4501 17.45C5.01676 16.8833 5.7001 16.6 6.5001 16.6C7.3001 16.6 7.98343 16.8833 8.5501 17.45C9.11676 18.0166 9.4001 18.7 9.4001 19.5V39.6C9.4001 40.4 9.11676 41.0833 8.5501 41.65C7.98343 42.2166 7.3001 42.5 6.5001 42.5V42.5Z"
                  fill="currentColor"
                />
              </svg>
            </button>
          </div>

          <ul className="mt-4 text-xs text-opacity-75 flex items-start flex-wrap justify-start">
            {categories.map((item) => (
            <li key={item} className="first:before:content-none last:mr-0 mr-2 flex items-center space-x-4 before:content-['•'] before:mr-2 before:text-gray before:block">
              {item}
            </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
};

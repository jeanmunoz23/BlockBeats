import { Fragment, useEffect, useState } from "react";
import { IoArrowUpCircleOutline } from "react-icons/io5";

export default function BackToTopButton() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        setShow(true);
      } else {
        setShow(false);
      }
    });
  });

  const jumpToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      {show ? (
        <div className=" fixed bottom-0 right-0 mb-6 mr-6 z-10">
          <button
            onClick={jumpToTop}
            className="flex items-center bg-black text-white rounded-full p-2 hover:bg-gray-900 transition mr-10"
          >
            <IoArrowUpCircleOutline size={24} />
            <span className="ml-4 text-[22px]">Back to the top</span>
          </button>
        </div>
      ) : (
        <Fragment />
      )}
    </div>
  );
}

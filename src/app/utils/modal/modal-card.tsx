import { useEffect } from "react";
import { FaXmark } from "react-icons/fa6";
import img from "../../../../public/svg/plusFee.svg";
import Image from "next/image";

interface IModalCard {
  setShowModal: (item: boolean) => void;
  children: React.ReactNode;
  title?: string;
  subTitle?: string
  className?: string;
  modalWidth?: string;
}

const ModalCard = ({
  setShowModal,
  children,
  title,
  className,
  subTitle,
  modalWidth,
}: IModalCard) => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (target.classList.contains("modal-overlay")) {
        setShowModal(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setShowModal]);
  return (
    <>
      <div className=" bg-black/50 modal-overlay fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden outline-none focus:outline-none">
        <div
          className={`relative mx-auto max-h-[95vh] my-6 w-auto ${
            modalWidth || "max-w-3xl"
          } `}
        >
          {/*container*/}
          <div className="relative flex w-full flex-col rounded-lg border-0 bg-white shadow-lg outline-none focus:outline-none md:min-w-[400px] lg:min-w-[700px]">
            {/*content*/}
            <div className="flex justify-between px-8 pt-8 mb-2">
              <div className="flex gap-4">
                <Image
                  src={img}
                  alt="plus fee"
                  width={0}
                  height={0}
                  className="mb-1"
                />
                <div className="flex flex-col ">
                  <div className={className}>{title}</div>
                  <p className="text-[#475467] text-sm font-normal">{subTitle}</p>
                </div>
              </div>
              <div className="relative px-8">
                <FaXmark
                  size={0}
                  color={"#424242"}
                  className="absolute top-0 right-2 cursor-pointer text-2xl"
                  onClick={() => setShowModal(false)}
                />
              </div>
            </div>
<hr className="mb-3"/>

            <div className="px-8 pb-8">{children}</div>
          </div>
        </div>
      </div>
      <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
    </>
  );
};

export default ModalCard;

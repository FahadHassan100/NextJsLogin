import Image from "next/image";
import React, { useState } from "react";
import { updateStatus } from "@/services/user";

interface Props {
  closeModal: () => void;
  changeBtn: () => void;
}

const ModalSplitCommission = (props: Props) => {
  const [loaderShow, setLoaderShow] = useState(false);

  const handleConfirmBtn = async () => {
    setLoaderShow(true);

    await updateStatus();

    setTimeout(() => {
      setLoaderShow(false);
      props.closeModal();
      props.changeBtn();
    }, 3000);
  };

  return (
    <>
      <div className="modal-wrapper"></div>
      <div className="MyCustomModal">
        {loaderShow === true ? (
          <div className="flex items-center justify-center">
            <Image
              src="https://justicetrading.com/Client_Portal/images/loader.gif"
              width={100}
              height={100}
              alt="loader"
              unoptimized
            />
          </div>
        ) : (
          <div>
            <div className="myModalHeader">
              <h2 className="text-xl font-extrabold ml-7">
                Transfer DGC to Tokens
              </h2>
            </div>

            <div className="p-5 h-80 flex items-center justify-center">
              <p>
                Each DGC of a Booklet ID will be redeemed for 100 Tokens and
                will be transferred to the chosen beneficiary.
              </p>
            </div>
            <button
              className="px-7 py-3 bg-sky-500 text-xl rounded text-white max-sm:block max-sm:m-auto  max-sm:mb-5"
              onClick={handleConfirmBtn}
            >
              Confirm Redemption and Transfer
            </button>

            <button
              className="ml-5 px-7 py-3 bg-gray-200 rounded hover:bg-gray-400 max-sm:block max-sm:m-auto max-sm:mb-5"
              onClick={props.closeModal}
            >
              Close
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default ModalSplitCommission;

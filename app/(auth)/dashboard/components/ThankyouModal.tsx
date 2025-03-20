import React from "react";

interface Props {
  closeModal: () => void;
}

const ThankyouModal = (props: Props) => {
  return (
    <>
      <div className="modal-wrapper"></div>
      <div className="MyCustomModal">
        <div>
          <div className="myModalHeader">
            <h2 className="text-xl font-extrabold ml-7">
              Thank You for Completing the Transfer!
            </h2>
          </div>

          <div className="p-5 h-80 flex items-center justify-center">
            <p>
              You have successfully redeemed and transferred the Donattion Gift
              Certificates (DGCs) into Justice Trading Tokens. Thank you for
              helping us maintain transparency in charitable giving. Your
              organization&apos;s participation ensures that donors&apos;
              contributions are effectively utilized for meaningful impact.
            </p>
          </div>

          <button
            className="ml-5 px-7 py-3 bg-gray-200 rounded hover:bg-gray-400 max-sm:block max-sm:m-auto max-sm:mb-5"
            onClick={props.closeModal}
          >
            Close
          </button>
        </div>
      </div>
    </>
  );
};

export default ThankyouModal;

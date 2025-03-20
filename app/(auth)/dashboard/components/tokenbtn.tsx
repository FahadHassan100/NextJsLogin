"use client";

import { useEffect, useState } from "react";
import ModalSplitCommission from "./Modal";
import ThankyouModal from "./ThankyouModal";
import { getUserByEmail } from "@/services/user";

const TokenBtn = () => {
  const [showModal, setShowModal] = useState(false);
  const [transferred, setTransferred] = useState(0);
  const [showThankYouModal, setShowThankYouModal] = useState(false);

  useEffect(() => {
    const getUserData = async () => {
      const user: any = await getUserByEmail("test@live.com");

      setTransferred(user.transfer_status);
      //setShowButton(true);
    };

    getUserData();
  }, []);

  const openModel = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    document.body.classList.remove("modalOpen");
  };

  const closeThankYouModal = () => {
    setShowThankYouModal(false);
  };

  const handleChangeBtn = () => {
    setTransferred(1);
    setShowThankYouModal(true);
  };

  return (
    <div>
      <div>
        {transferred === 0 ? (
          <button
            className="border-2 px-4 py-3 my-3 rounded-lg hover:bg-cyan-600 hover:text-white"
            onClick={openModel}
          >
            Convert DGC to tokens and transfer
          </button>
        ) : (
          <p className="text-green-600 font-bold my-4 mr-20">Transferred</p>
        )}
      </div>
      <div className="models">
        {showModal && (
          <ModalSplitCommission
            closeModal={closeModal}
            changeBtn={handleChangeBtn}
          />
        )}
        {showThankYouModal && <ThankyouModal closeModal={closeThankYouModal} />}
      </div>
    </div>
  );
};

export default TokenBtn;

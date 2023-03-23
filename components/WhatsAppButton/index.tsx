import { useState } from "react";

import { FaWhatsapp } from "react-icons/fa";


interface Props {
  phoneNumber: string;
  message: string;
}

const WhatsAppButton: React.FC<Props> = ({ phoneNumber, message }) => {
  const [url, setUrl] = useState("");

  const handleWhatsAppButtonClick = () => {
    const encodedMessage = encodeURIComponent(message);
    setUrl(`https://wa.me/${phoneNumber}?text=${encodedMessage}`);
  };

  return (
    <>
      <button
        className="p-4 text-white bg-green-500 fixed rounded-full bottom-4 right-2 shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
        onClick={handleWhatsAppButtonClick}
      >
        <FaWhatsapp color="white" />
      </button>
      {url && <meta httpEquiv="refresh" content={`0;url=${url}`} />}
    </>
  );
};

export default WhatsAppButton;

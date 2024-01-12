import { XMarkIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

const Modal = ({ closeModal }) => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [isFailed, setIsFailed] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = {};

    formData.forEach((value, key) => {
      data[key] = value;
    });

    try {
      const response = await fetch("https://formspree.io/f/mnqeqyoe", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        // Berhasil mengirim pesan, tambahkan logika atau tindakan sesuai kebutuhan Anda
        setIsSuccess(true);
      } else {
        // Gagal mengirim pesan, tambahkan logika atau tindakan sesuai kebutuhan Anda
        setIsFailed(true);
      }
    } catch (error) {
      console.error("Terjadi kesalahan:", error);
      setIsFailed(true);
    }
  };

  const handleModalClose = () => {
    setIsSuccess(false);
    setIsFailed(false);
    closeModal();
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full px-10 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300 ease-in-out">
      <div className="bg-[#191A19] p-8 rounded-lg relative mx-auto w-96 transform transition-transform duration-300 ease-in-out">
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <XMarkIcon className="h-12 w-12" />
        </button>
        {isSuccess && (
          <>
            <h2 className="text-2xl font-bold mb-4 text-green-500">Success</h2>
            <p>Your message has been sent.</p>
          </>
        )}
        {isFailed && (
          <>
            <h2 className="text-2xl font-bold mb-4 text-red-600">Failed</h2>
            <p>Failed to send your message.</p>
          </>
        )}
        {!isSuccess && !isFailed && (
          <>
            <h2 className="text-2xl font-semibold mb-4 text-white">
              Contact Me
            </h2>
            <form onSubmit={handleSubmit}>
              {/* Form input untuk nama, email, pesan */}
              <label className="font-semibold text-white" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full mb-2 p-2 border text-black"
                placeholder="Enter your name"
              />

              <label className="font-semibold text-white" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full mb-2 p-2 border text-black"
                placeholder="Enter a valid email Address"
              />

              <label className="font-semibold text-white" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                required
                className="w-full mb-4 p-2 border text-black"
                placeholder="Enter your message"
              />

              <button
                type="submit"
                className="bg-[#333] text-white p-4 m-2 rounded-xl font-bold"
              >
                Send Message
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default Modal;

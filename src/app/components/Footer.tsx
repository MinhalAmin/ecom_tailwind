const Footer = () => {
    return (
      <footer className=" bg-black text-white py-8 ">
        <div className="max-w-screen-2xl mx-auto px-6">
          {/* Footer content */}
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left">
              <h1 className="text-lg font-bold">Luxurious Lavender</h1>
              <p className="text-gray-400 text-sm">
              Indulge your senses in the extraordinary.
              </p>
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm">
                About Us
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm">
                Contact
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm">
                Privacy
              </a>
            </div>
          </div>
  
          <div className="border-t border-gray-600 my-6"></div>
  
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-xs text-center md:text-left">
              © 2024 Luxurious Lavender. All Rights Reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="hover:text-gray-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12c0-5.522-4.478-10-10-10S2 6.478 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987H7.898v-2.891h2.539v-2.2c0-2.506 1.492-3.891 3.779-3.891 1.094 0 2.238.195 2.238.195v2.46h-1.261c-1.244 0-1.63.772-1.63 1.563v1.873h2.773l-.443 2.891h-2.33v6.987C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
              <a href="#" className="hover:text-gray-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 4.559c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.723-.951.566-2.005.977-3.127 1.199-.897-.955-2.177-1.553-3.594-1.553-2.723 0-4.928 2.205-4.928 4.928 0 .386.044.761.128 1.122C7.691 8.094 4.066 6.13 1.64 3.161c-.423.724-.666 1.562-.666 2.475 0 1.71.87 3.217 2.188 4.099-.807-.026-1.566-.247-2.228-.616v.062c0 2.388 1.698 4.384 3.953 4.833-.414.113-.85.173-1.296.173-.318 0-.626-.031-.927-.089.627 1.956 2.444 3.379 4.6 3.419-1.685 1.319-3.808 2.105-6.114 2.105-.397 0-.79-.023-1.175-.069 2.181 1.399 4.768 2.215 7.548 2.215 9.055 0 14-7.496 14-14 0-.213-.005-.426-.014-.637.961-.695 1.8-1.562 2.46-2.549z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  
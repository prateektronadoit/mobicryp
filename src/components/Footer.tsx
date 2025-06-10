import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-black">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-6 xl:col-span-1 flex flex-col items-start">
            <img
              className="h-10"
              src="/mobicryp1.png"
              alt="Mobic Logo"
            />
            <div className="text-gray-300 text-sm">
              <p><span className="font-bold text-white">Vision:</span> The most trusted, stable platform for the Stable Coin Ecosystem, empowering millions globally.</p>
              <p className="mt-2"><span className="font-bold text-white">Mission:</span> Build real demand and opportunities for stable coins, generating regular revenue for our community.</p>
            </div>
            <div className="flex space-x-4 mt-2">
              <a href="#" className="text-gray-400 hover:text-gray-300" aria-label="Facebook">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.522-4.477-10-10-10S2 6.478 2 12c0 5 3.657 9.127 8.438 9.877v-6.987h-2.54v-2.89h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.242 0-1.632.771-1.632 1.562v1.875h2.773l-.443 2.89h-2.33v6.987C18.343 21.127 22 17 22 12"/></svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-300" aria-label="Instagram">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5zm4.25 2.25a6.25 6.25 0 1 1-6.25 6.25 6.25 6.25 0 0 1 6.25-6.25zm0 1.5a4.75 4.75 0 1 0 4.75 4.75A4.75 4.75 0 0 0 12 5.25zm6.25 1.25a1 1 0 1 1-1 1 1 1 0 0 1 1-1z"/></svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-300" aria-label="LinkedIn">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase mb-4">Helpful Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-base text-gray-300 hover:text-white">FAQ's</a>
                </li>
                <li>
                  <Link to="/privacy-policy" className="text-base text-gray-300 hover:text-white">Privacy Policy</Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase mb-4">Information</h3>
              <ul className="space-y-2">
                <li>
                  <span className="text-base text-gray-300">info@mobicryp.io</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-700 pt-8">
          <p className="text-base text-gray-400 xl:text-center">
            © MOBICRYP 2022 | ALL RIGHT RESERVED
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer 
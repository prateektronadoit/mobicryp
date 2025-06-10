import Navbar from '../components/Navbar';
import React, { useState } from 'react';

const toc = [
  { title: 'Introduction', id: 'introduction' },
  { title: 'Other Applicable Terms', id: 'other-terms' },
  { title: 'About Us', id: 'about-us' },
  { title: 'Definitions and Interpretations', id: 'definitions' },
  { title: 'Products', id: 'products' },
  { title: 'Changes To These Terms and Services', id: 'changes-terms' },
  { title: 'Changes To The Online Platforms', id: 'changes-platforms' },
  { title: 'Accessing The Online Platforms', id: 'accessing' },
  { title: 'Your Account and Passwords', id: 'account-passwords' },
  { title: 'Your Wallet', id: 'wallet' },
  { title: 'Terms of Trdo Wallet', id: 'trdo-wallet' },
  { title: 'Terms of Coins Wallet', id: 'coins-wallet' },
  { title: 'User Representations, Covenants and Obligations', id: 'user-representations' },
  { title: 'Risks', id: 'risks' },
  { title: 'Fees', id: 'fees' },
  { title: 'Intellectual Property Rights', id: 'ip-rights' },
  { title: 'No Reliance of information', id: 'no-reliance' },
  { title: 'Disclaimer of Warranties', id: 'disclaimer' },
  { title: 'Viruses', id: 'viruses' },
  { title: 'Limitation of Liability', id: 'liability' },
  { title: 'Electronic Communications', id: 'electronic-communications' },
  { title: 'Linking and Framing', id: 'linking' },
  { title: 'Indemnification', id: 'indemnification' },
  { title: 'Release and waiver', id: 'release' },
  { title: 'Right of Set Off', id: 'setoff' },
  { title: 'Applicable Law', id: 'law' },
  { title: 'Suspension and Termination', id: 'suspension' },
  { title: 'General Terms', id: 'general' },
  { title: 'Contact Us', id: 'contact' },
];

const sections = [
  { id: 'introduction', title: 'Introduction', content: `These User terms and conditions (together with the documents referred to in it) (“Terms”) are the terms on which you may make use of our website www.mobicryp.io and the associated mobile and software applications (either existing or available in the future) and our digital assets trading services (“Online Platforms”) whether as a guest or a registered user. Use of the Online Platforms includes accessing, browsing, or registering to use the Online Platforms. Please read these Terms carefully before you start to use the Online Platforms. We recommend that you print a copy of these Terms for future reference.\nBy using the Online Platforms, you confirm that you accept these Terms and that you agree to comply with them.\nIf you do not agree to these Terms, you must not use the Online Platforms If you do not agree with any amendments made by these Terms at any time in future, you must stop using the Online Platforms with immediate effect.` },
  { id: 'other-terms', title: 'Other Applicable Terms', content: `These Terms refer to, incorporate, and include the following additional terms, which also apply to your use of the Online Platforms:\nOur Privacy Policy, which sets out the terms on which we process any personal data we collect from you, or that you provide to us. By using the Online Platforms, you consent to such processing and you warrant that all data/ information provided by you is accurate, true and updated.\nOur Anti-Money Laundering Policy, which sets out the terms regarding identity verification of our Users and the procedures followed for early identification and reporting of prohibited/illegal activities which may be committed by using our services. When using the Online Platforms, you must comply with the terms of the AML Policy. We may require further documentation for verifying your identity and the source of funds used to trade using the services prior to any confirmation of a trade. You further agree to provide us, at any time, with such information as we determine to be necessary and appropriate to verify compliance with the anti-money laundering regulations of any applicable jurisdiction or to respond to requests for information concerning your identity from any governmental authority, self-regulatory organization or financial institution in connection with its anti-money laundering compliance procedures, and to update such information as necessary.\nOur Beta Testing Terms & Conditions, which sets out the terms and conditions you must agree to in order to participate as a Beta tester and/or Licensee.` },
  { id: 'about-us', title: 'About Us', content: `The Online Platforms provide access to an online digital assets exchange/profit sharing/trading/holding that currently facilitates the:\nonline trading of Digital Assets including their sale and purchase (either using fiat currency or another form of Digital Assets),\ntransfer of Funds from a User's Bank account/Fiat Wallet into its Linked Bank Account/Company's bank accounts and vice versa, and\nonline storage of Digital Assets owned by the Users (collectively the "Services").` },
  // ... Add all other sections here, using the content you provided ...
];

const PrivacyPolicy = () => {
  const [modalSection, setModalSection] = useState<string | null>(null);

  // Scroll to top on mount
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Prevent background scroll when modal is open
  React.useEffect(() => {
    if (modalSection) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [modalSection]);

  const section = sections.find(s => s.id === modalSection);

  return (
    <div className="min-h-screen bg-black text-white font-['Inter',_sans-serif]">
      <Navbar />
      <main className="max-w-3xl mx-auto px-4 py-12 pt-32">
        <h1 className="text-4xl font-extrabold mb-8 text-center">Terms Of Use</h1>
        <div className="mb-8 bg-[#18181b] rounded-2xl shadow-lg p-6 border border-[#232328]">
          <h2 className="text-2xl font-bold mb-4 text-center">Table of Contents</h2>
          <ul className="space-y-2">
            {toc.map((item, idx) => (
              <li key={item.id}>
                <button
                  className={`w-full text-left flex items-center gap-2 px-3 py-2 rounded transition-colors duration-200 hover:bg-[#232328] text-blue-400 font-medium`}
                  onClick={() => setModalSection(item.id)}
                >
                  <span className="font-mono text-base w-6 text-right">{idx + 1}.</span>
                  <span>{item.title}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
        {/* Modal for section content */}
        {modalSection && section && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
            <div className="bg-[#18181b] rounded-2xl shadow-2xl p-8 border border-[#232328] max-w-2xl w-full relative animate-fadein">
              <button
                className="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl font-bold focus:outline-none"
                onClick={() => setModalSection(null)}
                aria-label="Close"
              >
                &times;
              </button>
              <h2 className="text-2xl font-bold mb-4 text-blue-300 text-center">{section.title}</h2>
              <p className="whitespace-pre-line text-gray-200 text-lg leading-relaxed">{section.content}</p>
            </div>
          </div>
        )}
      </main>
      {/* <Footer /> */}
      <style>{`
        .animate-fadein {
          animation: fadein 0.5s;
        }
        @keyframes fadein {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default PrivacyPolicy; 
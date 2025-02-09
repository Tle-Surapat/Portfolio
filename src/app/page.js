import Head from 'next/head';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faLine } from '@fortawesome/free-brands-svg-icons';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#fff5e8] font-montserrat">
      <Head>
        <title>Portfolio - Surapat Hoknoo</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main className="container bg-[#81a969] mx-auto py-10 ">
        {/* Header Section */}
        <div className="text-center text-[#fff5e8] mb-12">
          <h1 className="text-5xl md:text-6xl font-bold">Portfolio</h1>
          <div className="flex flex-col md:flex-row justify-center items-center mt-10 px-16 relative w-full">
            <h2 className="text-xl md:text-2xl flex-1 text-right pr-10">Surapat Hoknoo</h2>
            <div className="w-1 h-12 bg-[#fff5e8] mx-10"></div><h2 className="text-xl md:text-2xl flex-1 text-left pl-10">Tle</h2>
          </div>
        </div>

        {/* Contact Section */}
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#fff5e8] text-center mb-8">Contact</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-[#333] text-center">
            <a href="tel:098-016-5518" className="flex flex-col items-center">
              <FontAwesomeIcon icon={faPhone} className="w-8 h-8 md:w-10 md:h-10 mb-2 text-black" />
              <span>098-016-5518</span>
            </a>
            <a href="https://www.facebook.com/tle.surapat" className="flex flex-col items-center">
              <FontAwesomeIcon icon={faFacebookF} className="w-8 h-8 md:w-10 md:h-10 mb-2 text-black" />
              <span>Tle Surapat</span>
            </a>
            <a href="https://line.me/ti/p/r9_QIHDHc4" className="flex flex-col items-center">
              <FontAwesomeIcon icon={faLine} className="w-8 h-8 md:w-10 md:h-10 mb-2 text-black" />
              <span>tlesurapat911</span>
            </a>
            <a href="mailto:tle.surapat@gmail.com" className="flex flex-col items-center">
              <FontAwesomeIcon icon={faEnvelope} className="w-8 h-8 md:w-10 md:h-10 mb-2 text-black" />
              <span>tle.surapat@gmail.com</span>
            </a>
          </div>
        </div>

        {/* Projects Section */}
        <div className="bg-[#fff5e8] py-24">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#81a969] text-center mb-16">Project</h2>
          <div className="space-y-8">
            <div className="bg-[#fff5e8] rounded-lg p-6 flex flex-col md:flex-row">
              <img src='/scs.png' alt='Senior Care Support' className='w-full md:w-96 h-64 object-cover rounded-lg mb-6 md:mb-0 md:mr-16' />
              <div>
                <a href="https://wucare-senior-cs.up.railway.app/" className="text-xl md:text-2xl font-semibold text-[#81a969] mb-2 hover:underline" target="_blank" rel="noopener noreferrer">Senior Care Support Web Application</a>
                <p className="text-gray-700 text-sm md:text-base mt-4">
                The Senior Care Support Project web platform offers stress detection from HRV signals combined with AI to assist individuals and caregivers in managing health and well-being through personalized, accessible, and user-friendly solutions.
                </p>
              </div>
            </div>
            <div className="bg-[#fff5e8] rounded-lg p-6 flex flex-col md:flex-row">
              <img src='/voyage.png' alt='Voyage Project' className='w-full md:w-96 h-64 object-cover rounded-lg mb-6 md:mb-0 md:mr-16' />
              <div>
                <a href="https://github.com/Tle-Surapat/Voyage_Project" className="text-xl md:text-2xl font-semibold text-[#81a969] mb-2 hover:underline" target="_blank" rel="noopener noreferrer">Voyage Project</a>
                <p className="text-gray-700 text-sm md:text-base mt-4">
                The Voyage Project explores exploration, navigation, and discovery, analyzing historical and modern impacts of voyages through research, storytelling, and technology, fostering innovation and understanding of cultural and environmental connections.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center text-[#fff5e8] mt-8 py-2 bg-[#81a969]">
          <h2 className="text-lg md:text-xl font-semibold">Tle Surapat</h2>
          <p className="text-sm md:text-base">© 2025 Tle Surapat. All rights reserved.</p>
        </footer>
      </main>
    </div>
  );
}

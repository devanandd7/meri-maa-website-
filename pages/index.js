import { Inter } from "next/font/google";

import { useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  useEffect(() => {
    const Con = document.getElementById("codepen");
    const slider = document.querySelector(".slider");
    slider.addEventListener("input", (e) => {
      Con.style.setProperty("--position", `${e.target.value}%`);
    });
   
  });

  return (
    <>
      <div className="container px-5 py-[2vh] mx-auto bg-gradient-to-r from-violet-500 to-fuchsia-500">
        <section className="text-orange-600 bg-zinc-100	 body-font overflow-hidden">
          <div className="container px-5 py-24 mx-auto">
            <div className="lg:w-4/5 mx-auto flex flex-wrap ">
              <img
                alt="ecommerce"
                className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded shadow-2xl "
                src="woman.png"
              />
              <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-7 lg:mt-0">
                <h1 className="text-black-900 text-7xl title-font font-bold my-7 text-center">
                  Meri Maa
                </h1>
<h5 className="text-center">~ You think ,I made for You ~</h5>
                <p className="leading-relaxed text-center mt-9">
                  Welcome to our T-shirt <b>Design</b> website! Our mission is
                  simple: to create meaningful connections through art.
                </p>
               

                <h1 className="text-3xl  text-blue-600 text-center">
                  {" "}
                  Only 350₹{" "}
                </h1>
                <p className="text-center"><b>~❤~ <br />A gift to your memories and your loved One. <br /> ~❤~</b></p>
               
              </div>
            </div>
          </div>
        </section>

        <section className="text-gray-600 body-font">
          <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
              <div id="codepen" className="con">
                <div className="image-container">
                  <img
                    className="image-before slider-image"
                    src="meri-maa-org.jpg"
                    alt="color photo"
                  />
                  <img
                    className="image-after slider-image"
                    src="meri-maa2.jpg"
                    alt="black and white"
                  />
                </div>

                <input
                  type="range"
                  min="0"
                  max="100"
                  value="50"
                  aria-label="Percentage of before photo shown"
                  className="slider"
                />
                <div className="slider-line" aria-hidden="true"></div>
                <div className="slider-button" aria-hidden="true">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <rect width="256" height="256" fill="none"></rect>
                    <line
                      x1="128"
                      y1="40"
                      x2="128"
                      y2="216"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="16"
                    ></line>
                    <line
                      x1="96"
                      y1="128"
                      x2="16"
                      y2="128"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="16"
                    ></line>
                    <polyline
                      points="48 160 16 128 48 96"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="16"
                    ></polyline>
                    <line
                      x1="160"
                      y1="128"
                      x2="240"
                      y2="128"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="16"
                    ></line>
                    <polyline
                      points="208 96 240 128 208 160"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="16"
                    ></polyline>
                  </svg>
                </div>
              </div>

              {/* <img
                className="object-cover object-center rounded"
                alt="hero"
                src="meri-maa1.jpg"
              /> */}
            </div>
            <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
              <h1 className="title-font sm:text-5xl text-3xl mb-4 font-medium text-yellow-200">
                Costum Art-work
                <br className=" lg:inline-block" />
                <i className="sm:text-3xl text-gray-700">
                  <p>Waterproof on any cloth</p>
                </i>
              </h1>
              <h6 className="mb-8 leading-relaxed text-white">
                Sketch on  paper.
                <br />
                Sketch on  cloth/ acket/ shirt.
               <br />
                I guarantee that the sketch will not fade or the color will fade even after washing the clothes.
                <br /> 
                <p className="text-center"><b> <i><br />Stay Connected With Love One <br /></i> ~❤~</b></p>
              </h6>
              <div className="flex justify-item-center ">
                <a href="https://forms.gle/mREbvifNpZu6GDQe6">
                  {" "}
                  <button className="ml-4 mx-auto inline-flex text-blue-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                    <i>
                      {" "}
                      <b> Order now</b>{" "}
                    </i>
                  </button>
                </a>
              </div>
            </div>
           
          </div>
        </section>

        <section className="text-gray-600 body-font">
          <div className="container mx-2 box-border border-2 ">
            <div className="text-center">
              <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900">
                What i do
              </h1>
            </div>

            <div className="p-2 sm:w-1/2 w-full">
             
            </div>
            <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
              <div className="p-2 sm:w-1/2 w-full">
                <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                    <path d="M22 4L12 14.01l-3-3"></path>
                  </svg>
                  <span className="title-font font-medium">
                  Waterproof drawing on cloth.
                   
                  </span>
                </div>
              </div>
              <div className="p-2 sm:w-1/2 w-full ">
                <div className="bg-gray-100 rounded flex p-4 h-full items-center ">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                    <path d="M22 4L12 14.01l-3-3"></path>
                  </svg>
                  <span className="title-font font-medium">Sketch Potrate</span>
                </div>
              </div>

              <div className="p-2 sm:w-1/2 w-full">
                <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                    <path d="M22 4L12 14.01l-3-3"></path>
                  </svg>
                  <span className="title-font font-medium">Sketch Gift</span>
                </div>
              </div>
              <div className="p-2 sm:w-1/2 w-full">
                <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                    <path d="M22 4L12 14.01l-3-3"></path>
                  </svg>
                  <span className="title-font font-medium">Sketch Gift</span>
                </div>
              </div>
              
            </div>
           
          </div>
        </section>

        <section className="text-gray-600 body-font">
          <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
              <img
                className="object-cover object-center rounded"
                alt="hero"
                src="mata.jpg"
              />
            </div>
            <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
              <h1 className="title-font sm:text-5xl text-3xl mb-4 font-medium text-gray-900">
                Sketch Portrait
                <br className=" lg:inline-block" />
                <i className="sm:text-3xl text-yellow-200">
                  (black&white ,color pecile ,water color ...)
                </i>
              </h1>
              <p className="mb-8 leading-relaxed text-white">
                I weave graphite dreams onto paper. My lines dance with emotion,
                capturing your essence—the curve of your smile, the depth of
                your eyes. Let my sketches whisper your story.
              </p>
              <div className="flex justify-center">
                <a href="https://forms.gle/mREbvifNpZu6GDQe6">
                  {" "}
                  <button className="ml-4 inline-flex text-orange-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                    <i>
                      {" "}
                      <b> Order now</b>{" "}
                    </i>
                  </button>
                </a>
                <a href="/gallery">
                  <button className="ml-4 inline-flex text-orange-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                    <i>
                      <b> Gallery</b>
                    </i>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </section>

        <footer className="text-gray-600 body-font">
          <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
            <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
                viewBox="0 0 24 24"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
              </svg>
              <span className="ml-3 text-xl">
                <b>
                  <i> Meri-Maa </i>
                </b>
              </span>
            </a>
            <p className="text-sm text-yellow-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-yellow-200 sm:py-2 sm:mt-0 mt-4 text-center">
              © 2024 Tailblocks —
              <a
                href="https://twitter.com/knyttneve"
                className="text-white ml-1"
                rel="noopener noreferrer"
                target="_blank"
              >
                @David-Adair
              </a>
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}

import React from "react";

const about = () => {
  return (
    <div className="bg-gradient-to-r from-violet-500 to-fuchsia-500">
      <section className="text-white-600 body-font ">
        <div className="container px-5 py-24 mx-auto">
          <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="inline-block w-8 h-8 text-gray-400 mb-8"
              viewBox="0 0 975.036 975.036"
            >
              <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
            </svg>
            <p className="leading-relaxed text-lg">
              Welcome to our T-shirt selling website! We believe that family is
              at the heart of everything we do. Our mission is simple: to create
              meaningful connections through art.
            </p>
            <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-8 mb-6"></span>
            <h2 className="text-white-900 font-medium title-font tracking-wider text-xx">
              david adair
            </h2>
            <p className="text-gray-500">Senior Product Designer</p>
          </div>
        </div>
      </section>

      <section className="text-white-600  overflow-hidden">
        <div className="container px-5 py-1 mx-auto ">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-white-900">
              What We Do For You
            </h1>
           
          </div>
          <div className="flex flex-wrap -m-4 justify-center">
            <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
              <div className="h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden">
                <h1 className="text-5xl text-white-900 pb-4 mb-4 border-b border-gray-200 leading-none">
                  Custom Artwork
                </h1>
                <p className="flex items-center text-white-600 mb-2">
                  <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      stroke-width="2.5"
                      className="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  We specialize in hand-drawn portraits of mothers, fathers, and
                  grandparents. Each image is carefully crafted to capture the
                  essence of the person, their love, and their unique story.
                </p>

                <button className="flex items-center mt-auto text-white bg-orange-400 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-500 rounded">
                  {" "}
                  Order now
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    stroke-width="2"
                    className="w-4 h-4 ml-auto"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </button>
              </div>
            </div>

            <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
              <div className="h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden">
                <h1 className="text-5xl text-white-900 pb-4 mb-4 border-b border-gray-200 leading-none">
                  Emotional Bridges
                </h1>
                <p className="flex items-center text-white-600 mb-2">
                  <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      stroke-width="2.5"
                      className="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  We specialize in hand-drawn portraits of mothers, fathers, and
                  grandparents. Each image is carefully crafted to capture the
                  essence of the person, their love, and their unique story.
                </p>

                <button className="flex items-center mt-auto text-white bg-orange-400 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-500 rounded">
                  {" "}
                  Order now
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    stroke-width="2"
                    className="w-4 h-4 ml-auto"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </button>
              </div>
            </div>

            <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
              <div className="h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden">
                <h1 className="text-5xl text-white-900 pb-4 mb-4 border-b border-gray-200 leading-none">
                  Memories Preserved
                </h1>
                <p className="flex items-center text-white-600 mb-2">
                  <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      stroke-width="2.5"
                      className="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>{" "}
                  Whether it’s a cherished memory or a tribute to someone
                  special, our T-shirts become keepsakes. They hold the
                  laughter, the tears, and the moments that define us.
                </p>

                <button className="flex items-center mt-auto text-white bg-orange-400 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-500 rounded">
                  {" "}
                  Order now
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    stroke-width="2"
                    className="w-4 h-4 ml-auto"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="text-gray-600 body-font">
  <div className="container mx-auto flex flex-col px-5 py-24 justify-center items-center">
    <div classNameName="container ">
    <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
          <h2 className="tracking-widest text-xs title-font font-medium text-red-600 mb-1">Our Letter For You</h2>
          <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">Why we do it for you</h1>
          <p className="leading-relaxed mb-3">We believe that art has the power to heal, to uplift, and to connect. When you wear one of our T-shirts, you’re not just wearing fabric—you’re wearing a piece of your heart..</p>
         <h1 className="title-font sm:text-2xl text-xl font-medium text-red-900 mb-3">join our family</h1>

         <p className="leading-relaxed mb-3">Explore our collection, find the portrait that resonates with you, and wear it proudly. Let’s celebrate family, love, and the beautiful tapestry of human connections.

Thank you for being a part of our journey. ❤️.</p>
          <div className="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
            <span className="text-gray-400 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
              <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>1.2K
            </span>
            <span className="text-gray-400 inline-flex items-center leading-none text-sm">
              <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
              </svg>6
            </span>
          </div>
    </div>
   </div>
   </div>
</section>


    </div>
  );
};

export default about;

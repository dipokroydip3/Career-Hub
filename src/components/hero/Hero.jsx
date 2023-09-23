

const Hero = () => {
      return (
            <div className="bg-gray-200">
                  <div className="flex items-center w-10/12 m-auto pt-10 ">
                        <div>
                              <h1 className="text-4xl font-semibold">One Step Closer To Your <br /> <span className="text-blue-400">Dream Job</span></h1>
                              <p className="py-2">
                                  Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.  
                              </p>
                              <button className="bg-blue-400 text-white py-2 px-3 rounded">Get Started</button>
                        </div>
                        <div>
                              <img src="/src/assets/images/user.png" alt="" />
                        </div>
                  </div>
            </div>
      );
};

export default Hero;

const JobCategory = () => {
      return (
            <div className="py-24">
                  <div className="text-center pb-10 ">
                        <h1 className="text-4xl font-semibold">Job Category List</h1>
                        <p className="pt-3">Explore thousands of job opportunities with all the information you need. Its your future</p>
                  </div>
                  <div className="grid gap-5 grid-cols-1  md:grid-cols-2 lg:grid-cols-4 w-10/12 m-auto">
                        <div className="bg-gray-100 py-8 px-5 rounded">
                              <img src="/src/assets/icons/accounts.png" alt="" />
                              <h1 className="font-semibold text-2xl">Account & Finance</h1>
                              <p>300 Jobs Available</p>
                        </div>
                        <div className="bg-gray-100 py-8 px-5 rounded">
                              <img src="/src/assets/icons/creative.png" alt="" />
                              <h1 className="font-semibold text-2xl">Creative Design</h1>
                              <p>100+ Jobs Available</p>
                        </div>
                        <div className="bg-gray-100 py-8 px-5 rounded">
                              <img src="/src/assets/icons/marketing.png" alt="" />
                              <h1 className="font-semibold text-2xl">Marketing & Sales</h1>
                              <p>150 Jobs Available</p>
                        </div>
                        <div className="bg-gray-100 py-8 px-5 rounded">
                              <img src="/src/assets/icons/chip.png" alt="" />
                              <h1 className="font-semibold text-2xl">Engineering Job</h1>
                              <p>224 Jobs Available</p>
                        </div>
                  </div>
            </div>
      );
};

export default JobCategory;
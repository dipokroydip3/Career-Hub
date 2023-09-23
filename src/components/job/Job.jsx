

const Job = ({job}) => {
      
      const {logo_img, position, company_name, job_title, working_time, location, salary} = job

      return (
            <div>
                  <div className="border py-5 px-8 rounded">
                        <img src={logo_img} alt="" />
                        <h2 className="pt-5 font-semibold">{position}</h2>
                        <p>{company_name}</p>
                        <div className="flex gap-3 py-2">
                              <h1 className="border px-3 py-1 rounded">{job_title}</h1>
                              <h2 className="border px-3 py-1 rounded">{working_time}</h2>
                        </div>
                        <div className="flex">
                              <h3>{location}</h3>
                              <h2>{salary}</h2>
                        </div>
                        <button className="bg-blue-400 mt-5 text-white px-2 py-1 rounded block m-auto">View Details</button>
                  </div>
            </div>
      );
};

export default Job;
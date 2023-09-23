import { useEffect, useState } from "react";
import Job from "../job/Job";
// import { key } from "localforage";


const FeaturedJobs = () => {

      const [featuredJobs, setFeaturedJobs] = useState([])
      const [sliceData, setSliceData] = useState([4])
      

      useEffect(() => {
            fetch('Jobs.json')
            .then(res => res.json())
            .then(data => setFeaturedJobs(data))
            
      },[]);
     
      
      

      return (
            <div>
                 <div>
                        
                 </div>

                 <div className="grid grid-cols-1 md:grid-cols-2 py-12 w-10/12 m-auto gap-10 justify-between">
                        {
                              featuredJobs.slice(0, sliceData).map(job => <Job key={job.id} job={job}></Job>)
                        }
                 </div>
                 <div className={ sliceData === featuredJobs.length ? "hidden" : ''} >
                        <button
                        onClick={() => setSliceData(featuredJobs.length)}
                        className="block m-auto px-2 py-2 mb-5 rounded bg-blue-400 text-white">Show all jobs
                        </button>
                 </div>
            </div>
      );
};

export default FeaturedJobs;
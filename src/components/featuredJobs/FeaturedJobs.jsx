import { useEffect, useState } from "react";
import Job from "../job/Job";
// import { key } from "localforage";


const FeaturedJobs = () => {

      const [featuredJobs, setFeaturedJobs] = useState([])
      

      useEffect(() => {
            fetch('Jobs.json')
            .then(res => res.json())
            .then(data => setFeaturedJobs(data))
            
      },[]);
      console.log(featuredJobs);
      
      

      return (
            <div>
                 <div>
                        <h3>{featuredJobs.length}</h3> 
                 </div>

                 <div className="grid grid-cols-1 md:grid-cols-2 py-12 w-10/12 m-auto gap-10 justify-between">
                        {
                              featuredJobs.map(job => <Job key={job.id} job={job}></Job>)
                        }
                 </div>
            </div>
      );
};

export default FeaturedJobs;
import JobCategory from "../category/JobCategory";
import FeaturedJobs from "../featuredJobs/FeaturedJobs";
import Hero from "../hero/Hero";


const Home = () => {
      return (
            <div>
               <Hero></Hero>  
               <JobCategory></JobCategory>
               <FeaturedJobs></FeaturedJobs> 
            </div>
      );
};

export default Home;
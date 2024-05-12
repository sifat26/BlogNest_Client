import Banner from "./Banner";
import Newsletter from "./Newsletter";
import RecentBlogs from "./RecentBlogs";

const Home = () => {
    return (
        <div>
            <Banner/>
            <RecentBlogs/>
            <Newsletter/>
        </div>
    );
};

export default Home;
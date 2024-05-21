import Banner from "./Banner";
import Newsletter from "./Newsletter";
import RecentBlogs from "./RecentBlogs/RecentBlogs";
import TopBloger from "./TopBloger";

const Home = () => {
    return (
        <div>
            <Banner/>
            <RecentBlogs/>
            <Newsletter/>
            <TopBloger/>
        </div>
    );
};

export default Home;
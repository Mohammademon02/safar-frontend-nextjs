import BlogGrid from "@/components/BlogGrid/BlogGrid";
import DownloadApp from "@/components/DownloadApp/DownloadApp";
import PageTitleHeader from "@/components/PageTitleHeader/PageTitleHeader";



const BlogPage = async () => {
    return (
        <>
            <PageTitleHeader title="Blogs" page_link="blogs" />
            <BlogGrid />
            <DownloadApp />
        </>
    );
};

export default BlogPage;
import BlogGrid from "@/components/BlogGrid/BlogGrid";
import PageTitleHeader from "@/components/PageTitleHeader/PageTitleHeader";



const BlogPage = async () => {
    return (
        <>
            <PageTitleHeader title="Blog" page_link="blogs" />
            <BlogGrid />
        </>
    );
};

export default BlogPage;
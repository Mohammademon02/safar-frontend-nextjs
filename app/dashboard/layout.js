import Sidebar from "@/components/Dashboard/Sidebar/Sidebar";
import PageTitleHeader from "@/components/PageTitleHeader/PageTitleHeader";

const layout = ({ children }) => {
    return (
        <div className='my-account-page'>
            <PageTitleHeader
                title='My Account'
                page_link='dashboard'
            />
            <div className='container mx-auto px-4 sm:px-6 lg:px-8 pb-6 md:pb-10'>
                <div className="flex flex-col md:flex-row gap-6">
                    <div className='w-full md:w-[30%]'>
                        <Sidebar />
                    </div>

                    <div className='flex-1'>{children}</div>
                </div>
            </div>
        </div>
    );
};

export default layout;

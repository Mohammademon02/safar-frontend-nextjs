import PageTitleHeader from '@/components/PageTitleHeader/PageTitleHeader';
import DownloadApp from '@/components/DownloadApp/DownloadApp';
import ImageSlider from '@/components/ImageSlider/ImageSlider';
import MissionVision from '@/components/MissionVision/MissionVision';
import TeamMembersSection from '@/components/TeamMembersSection/TeamMembersSection';
import Introducing from '@/components/Introducing/Introducing';
import CompanyOverview from '@/components/CompanyOverview/CompanyOverview';

export default function page() {
    return (
        <>
            <PageTitleHeader
                title='About Us'
                page_link='about-us'
            />
            <Introducing />
            <ImageSlider />
            <MissionVision />
            <TeamMembersSection />
            <CompanyOverview />
            <DownloadApp />
        </>
    );
}
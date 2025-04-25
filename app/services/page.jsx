import PageTitleHeader from '@/components/PageTitleHeader/PageTitleHeader';
import SectionTitle from '@/components/Common/SectionTitle/SectionTitle';
import ServiceCardsSection from '@/components/ServiceCardsSection/ServiceCardsSection';
import DownloadApp from '@/components/DownloadApp/DownloadApp';
import JoinUsSection from '@/components/JoinUsSection/JoinUsSectionl';
import OurFleet from '@/components/OurFleet/OurFleet';

export default function page() {

    return (
        <>
            <PageTitleHeader
                title='Services'
                page_link='contact-us'
            />

            <div>
                <SectionTitle subtitle="Our Services" title="Providing Reliable & Affordable Rental Cars for Your Travel Needs." />

                <div className='flex items-center justify-center gap-4 h-[400px] bg-[var(--primary)]'>
                    Google Map Area
                </div>
            </div>

            <div className='container mx-auto px-4 sm:px-6 lg:px-8 pb-10'>

            </div>

            <ServiceCardsSection />
            <OurFleet />
            <JoinUsSection />
            <DownloadApp />
        </>
    );
}
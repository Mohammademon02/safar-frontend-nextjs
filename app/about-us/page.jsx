import PageTitleHeader from '@/components/PageTitleHeader/PageTitleHeader';
import DownloadApp from '@/components/DownloadApp/DownloadApp';
import ImageSlider from '@/components/ImageSlider/ImageSlider';

export default function page() {
    return (
        <>
            <PageTitleHeader
                title='About Us'
                page_link='about-us'
            />

            <ImageSlider />


            <DownloadApp />
        </>
    );
}
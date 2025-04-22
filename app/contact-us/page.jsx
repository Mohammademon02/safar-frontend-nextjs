import SectionTitle from '@/components/Common/SectionTitle/SectionTitle';
import ContactForm from '@/components/ContactFrom/ContactForm';
import PageTitleHeader from '@/components/PageTitleHeader/PageTitleHeader';

export default function page() {

    return (
        <>
            <PageTitleHeader
                title='Contact Us'
                page_link='contact-us'
            />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-10">
                <SectionTitle title="Contact Us" description="Any question or remarks? Just write us a message!" />
                <ContactForm />
            </div>
        </>
    );
}
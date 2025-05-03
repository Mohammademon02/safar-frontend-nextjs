import SectionTitle from '@/components/Common/SectionTitle/SectionTitle';
import DownloadApp from '@/components/DownloadApp/DownloadApp';
import PageTitleHeader from '@/components/PageTitleHeader/PageTitleHeader';

export default function page() {

    return (
        <>
            <PageTitleHeader
                title='Cancellation Policy'
                page_link='cancellation-policy'
            />

            <div className="max-w-3xl mx-auto px-4 pb-10">
                <div className='bg-[#F5F5F5] p-6 rounded-[20px]'>

                    <SectionTitle
                        subtitle='Policy'
                        title='Cancellation Policy'
                        alignment='center'
                    />

                    <p className='text-[var(--text-black)] text-base leading-6'>
                        You can cancel your booking up to 4 hr before the scheduled date and time of your pick-up, in which case a cancellation fee of Rs 100 will be charged, You will receive a ride coupon for the remaining advance payment which you can use on your next ride. If you cancel the ride with less than 4hrs left in the journey time, the advance payment made by you will be charged as cancellation fee. In this case the advance payment will not be refundable and you will not receive any ride coupon.
                        <br />
                        <br />
                        Drivers are also able to cancel a ride request if they've waited 1hr at the pickup location or for any reason whatsoever you have provided wrong details of pickup location or you are not reachable at phone, mobile number and email address you have provided. Charged either a cancellation fee as of the complete advance amount paid by you for the booking.
                        <br />
                        <br />
                        In case, cancellation is due to external factors which human being by the exercise of reasonable diligence cannot avoid such as epidemic, tornadoes, earthquakes, hurricanes, floods, fire, strikes, lockouts or other industrial disturbances; war, terrorist acts, riot, or other civil disturbance; epidemics; or other similar forces or due to force majeure which lead to the roads closed, voucher for the complete advance amount paid by you for the booking, in Safar shall be issued without expiry to use in future.
                        <br />
                        <br />
                        You can cancel your booking up to 4 hr before the scheduled date and time of your pick-up, in which case a cancellation fee of Rs 100 will be charged, You will receive a ride coupon for the remaining advance payment which you can use on your next ride. If you cancel the ride with less than 4hrs left in the journey time, the advance payment made by you will be charged as cancellation fee. In this case the advance payment will not be refundable and you will not receive any ride coupon.
                        <br />
                        <br />
                        Drivers are also able to cancel a ride request if they've waited 1hr at the pickup location or for any reason whatsoever you have provided wrong details of pickup location or you are not reachable at phone, mobile number and email address you have provided. Charged either a cancellation fee as of the complete advance amount paid by you for the booking.
                        <br />
                        <br />
                        In case, cancellation is due to external factors which human being by the exercise of reasonable diligence cannot avoid such as epidemic, tornadoes, earthquakes, hurricanes, floods, fire, strikes, lockouts or other industrial disturbances; war, terrorist acts, riot, or other civil disturbance; epidemics; or other similar forces or due to force majeure which lead to the roads closed, voucher for the complete advance amount paid by you for the booking, in Safar shall be issued without expiry to use in future.
                    </p>
                </div>
            </div>

            <DownloadApp />
        </>
    );
}
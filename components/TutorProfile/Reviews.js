import React, { useState, useEffect } from 'react';
import StarFilled from "../../icons/StarFilled";
import StarEmpty from "../../icons/StarEmpty";

const Reviews = () => {
    const [showReview, setShowReview] = useState(0);     // storing index of reviews array
    const [review, setReview] = useState({});

    const reviews = [
        { title: 'Teaches Concepts in Depth', desc: 'I had been dreaming to learn guitar for 4 yrs. One day I visited Peppertree.com. I clicked "Buy a Trial Session". Later all happened automatically, I kept attending the amazing tutor online and she kept me motivated. Its been 4 weeks & 40 sessions.And woohoo! I just surprised all my friends at a party with my skills! Stop desiring a skill, just start with Peppertree!' },
        { title: 'having fun', desc: 'slkdjflnsd fsdjf ljsdlkfj lksdj fjsdlkjf lkjsdflj ldjsnfhuohhweouhjwsh fhjdsjklfouwhjfhsjdfhj sdjfh. dshf dslfjlsdj foijudsojf jhsdjkfh jsdhjufhsjfhjsd. dskfkjsdfjsklfnsdkfn ksdfiekasdf. sdklfj lskjeialkf lksfo aelkasssdklfdkljoand sdfl sskfdkld ssdkfjwpwj lakf lskdjfk aol flkeljal sdkffskl sd flkjsdf sdkffskl sd flkjsdf sdf dskfn dlsknf sdkfj salkfwl wlek sdflksldkf s dlk sdfjlks df' },
        { title: 'Yo Yo Yo', desc: 'sdkjfksdj fsjdfkj sskljdfjsdlkfjoiwejhwohjshd. dshf kjsdhkjfh hsdoufyhowuejhfuiwah fhskjdhfjshjfhw98hqohskjfhkjshkdf hkshbhfdu ghksjndf jhsdjkfh dskfkjsdfjsklfnsdkfn ksdfiekasdf. sdklfj lskjeialkf lksfo aelkasssdklfdkljoand sdfl sskfdkld ssdkfjwpwj lakf lskdjfk aol flkeljal sdkffskl sd flkjsdf sdkffskl sd flkjsdf sdf dskfn dlsknf sdkfj salkfwl wlek sdflksldkf s dlk sdfjlks df' },
        { title: 'Sniper MKS', desc: 'jjsahdfj jshfds khfdhsdkjlfjj slkjf jsfdhowhouhf. sjdfj hsjfoijweojjasjfljnl sjdfjlskjfljslhhuhwhnfjsah ljjsadjf kljsldkjf lsjdlfj isojdfoijs ksnfd  nfdsj fjsdlfjksld jksdjf dskfkjsdfjsklfnsdkfn ksdfiekasdf. sdklfj lskjeialkf lksfo aelkasssdklfdkljoand sdfl sskfdkld ssdkfjwpwj lakf lskdjfk aol flkeljal sdkffskl sd flkjsdf sdkffskl sd flkjsdf sdf dskfn dlsknf sdkfj salkfwl wlek sdflksldkf s dlk sdfjlks df' },
    ]

    // showing review as per index clicked on balls
    const showReviewFunction = (index) => {
        setReview(reviews[index]);
    }

    useEffect(() => {
        // initially it will show 0th index review
        showReviewFunction(showReview);
    }, [showReview])

    return (
        <div className='snap-fullPage h-[calc(100vh-79px)] flex flex-col items-center sm:justify-evenly sm:gap-0 gap-16 bg-[#FFF7F7] px-4'>
            <TopHeading />

            <ReviewContainer review={review} showReview={showReview} setShowReview={setShowReview} reviews={reviews} />
        </div>
    )
}

export default Reviews;

const TopHeading = () => {
    return (
        <div className='flex items-center justify-between xl:w-[1069px] min-w-[396px] w-full mx-auto font-monts'>
            <h2 className='text-[#5E5252] font-bold lg:text-[30px] md:text-[25px] sm:text-[22px] text-[18px]'>
                REVIEWS
            </h2>

            {/* Stars */}
            <div className='hidden md:flex items-center gap-4 capitalize text-[#2E2E2E] font-medium font-poppins'>
                <div className='flex items-center justify-center gap-2'>
                    <StarFilled />
                    <StarFilled />
                    <StarFilled />
                    <StarFilled />
                    <StarEmpty />
                </div>
                <p>
                    <span className='text-[20px]'>4.1</span>/5 avg rating (132 Ratings)
                </p>
            </div>

            {/* button */}
            <button className='w-[129.47px] h-[31px] sm:w-[213px] sm:h-[51px] sm:text-[16px] text-[12px] rounded-md text-[#FC4D6D] border-2 border-[#FC4D6D] font-poppins font-medium flex items-center justify-evenly'>
                <span className='md:text-[25px] text-[20px]'>
                    +
                </span>
                Add a Review
            </button>
        </div>
    )
}

// Review Container
const ReviewContainer = ({ review, showReview, setShowReview, reviews }) => {
    return (
        <div className='flex flex-col items-center justify-between relative xl:w-[1069px] h-[310px] min-w-[396px] gap-10'>
            <Review review={review} />
            {/* gradientCircles */}
            <span className='gradientCircle sm:w-[97.67px] sm:h-[97.67px] w-[60px] h-[60px] sm:-top-[25px] sm:-left-[30px] -top-[15px] -left-[15px]' />
            <span className='gradientCircle w-[31.88px] h-[31.88px] top-[50px] sm:right-[260px] right-[160px]' />
            <span className='gradientCircle w-[49.04px] h-[49.04px] sm:bottom-[30px] left-[60px] -bottom-[20px]' />
            <span className='gradientCircle md:w-[220px] md:h-[220px] sm:w-[180px] sm:h-[180px] w-[100px] h-[100px] sm:-bottom-[50px] sm:-right-[60px] -right-[20px] -bottom-[20px]' />

            {/* dots */}
            <div className='flex items-center justify-center w-full gap-2'>
                {/* no. of dots depands on length of reviews array */}
                {reviews?.map((item, index) => (
                    <span key={index} onClick={() => setShowReview(index)} className={`rounded-full w-[12px] h-[12px] cursor-pointer transition duration-300 ${showReview === index ? 'bg-[#FC4D6D]' : 'bg-[#C4C4C4]'}`} />
                ))}
            </div>
        </div>
    )
}


// Reviews
const Review = ({ review }) => {
    return (
        <div className='flex flex-col relative items-center capitalize z-10 justify-center w-full h-full sm:px-20 sm:py-8 px-4 py-10 shadow-2xl rounded-3xl backdrop-blur-xl gap-3 font-monts'>
            {/* quotes */}
            <svg className='absolute xl:top-[55px] xl:left-[45px] lg:top-[50px] lg:left-[45px] md:top-[50px] md:left-[45px] hidden md:inline-block' width="33" height="27" viewBox="0 0 33 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.1003 13.3258C11.3552 13.8484 12.3249 14.6903 13.0094 15.8516C13.7509 16.9548 14.1217 18.2903 14.1217 19.8581C14.1217 21.9484 13.4657 23.6613 12.1538 24.9968C10.8418 26.3323 9.21618 27 7.27678 27C5.22331 27 3.5406 26.3323 2.22866 24.9968C0.916714 23.6613 0.260742 21.9484 0.260742 19.8581C0.260742 18.8129 0.374824 17.7968 0.602988 16.8097C0.888193 15.8226 1.40156 14.3419 2.1431 12.3677L6.67785 0H13.5228L10.1003 13.3258ZM28.2394 13.3258C29.4943 13.8484 30.4639 14.6903 31.1484 15.8516C31.89 16.9548 32.2607 18.2903 32.2607 19.8581C32.2607 21.9484 31.6048 23.6613 30.2928 24.9968C28.9809 26.3323 27.3552 27 25.4158 27C23.3623 27 21.6796 26.3323 20.3677 24.9968C19.0558 23.6613 18.3998 21.9484 18.3998 19.8581C18.3998 18.8129 18.5139 17.7968 18.742 16.8097C19.0272 15.8226 19.5406 14.3419 20.2821 12.3677L24.8169 0H31.6618L28.2394 13.3258Z" fill="#A7A7A7" />
            </svg>

            {/* title */}
            <div className='flex items-start gap-5 w-full'>
                <h2 className='font-semibold text-[#383838] text-[20px] md:pl-2'>
                    {review?.title}
                </h2>

                {/* stars */}
                <div className='hidden sm:flex items-center justify-center gap-1 pt-1'>
                    <StarFilled width='18px' height='18px' />
                    <StarFilled width='18px' height='18px' />
                    <StarFilled width='18px' height='18px' />
                    <StarFilled width='18px' height='18px' />
                    <StarFilled width='18px' height='18px' />
                </div>
            </div>

            {/* desc */}
            <p className='font-medium text-[#656565]'>
                {review?.desc}
            </p>

            {/* quotes */}
            <svg className='absolute xl:bottom-[65px] xl:right-[65px] lg:right-[50px] lg:bottom-[40px] md:right-[50px] md:bottom-[40px] hidden md:inline-block' width="33" height="27" viewBox="0 0 33 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.4212 13.6742C21.1663 13.1516 20.1966 12.3097 19.5121 11.1484C18.7705 10.0452 18.3998 8.70968 18.3998 7.14193C18.3998 5.05161 19.0558 3.33871 20.3677 2.00323C21.6796 0.667744 23.3053 0 25.2447 0C27.2982 0 28.9809 0.667744 30.2928 2.00323C31.6048 3.33871 32.2607 5.05161 32.2607 7.14193C32.2607 8.1871 32.1467 9.20322 31.9185 10.1903C31.6333 11.1774 31.1199 12.6581 30.3784 14.6323L25.8436 27H18.9987L22.4212 13.6742ZM4.28213 13.6742C3.02723 13.1516 2.05754 12.3097 1.37304 11.1484C0.63151 10.0452 0.260744 8.70968 0.260744 7.14193C0.260744 5.05161 0.916714 3.33871 2.22865 2.00323C3.5406 0.667744 5.16627 0 7.10566 0C9.15914 0 10.8418 0.667744 12.1538 2.00323C13.4657 3.33871 14.1217 5.05161 14.1217 7.14193C14.1217 8.1871 14.0076 9.20322 13.7795 10.1903C13.4943 11.1774 12.9809 12.6581 12.2394 14.6323L7.70459 27H0.859676L4.28213 13.6742Z" fill="white" />
            </svg>
        </div>
    )
}
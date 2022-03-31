import React, { useState } from 'react'
import { BsEmojiSmile } from 'react-icons/bs'
import { FiPaperclip } from 'react-icons/fi'
import { AiOutlineSend } from 'react-icons/ai'
import { MdKeyboardArrowLeft } from 'react-icons/md'
import Image from 'next/image'
import Rating from 'react-rating'
import { useMediaQuery } from 'react-responsive'

let data = [
    {
        id: 1,
        image: '/Images/revuserimg.png',
        username: 'Claire.U 1',
        date: '12/31/2021',
        reviews: {
            title: 'I Use It Every Day!',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Hendrerit amet vitae, gravida ultrices arcu mattis molestie dignissim. Rutrum nibh tortor fermentum mauris, eget consequat, ut. Mauris massa felis, velit ornare commodo feugiat mauris dignissim. Amet, bibendum convallis massa sit lorem morbi tellus. Feugiat odio rhoncus accumsan, vulputate. Elementum elementum rutrum vulputate rhoncus, enim rhoncus in. Viverra netus at pellentesque sit sed. Et.',
        }
    },
    {
        id: 2,
        image: '/Images/revuserimg.png',
        username: 'Claire.U 2',
        date: '12/31/2021',
        reviews: {
            title: 'I Use It Every Day!',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Hendrerit amet vitae, gravida ultrices arcu mattis molestie dignissim. Rutrum nibh tortor fermentum mauris, eget consequat, ut. Mauris massa felis, velit ornare commodo feugiat mauris dignissim. Amet, bibendum convallis massa sit lorem morbi tellus. Feugiat odio rhoncus accumsan, vulputate. Elementum elementum rutrum vulputate rhoncus, enim rhoncus in. Viverra netus at pellentesque sit sed. Et.',
        }
    },
    {
        id: 3,
        image: '/Images/revuserimg.png',
        username: 'Claire.U 3',
        date: '12/31/2021',
        reviews: {
            title: 'I Use It Every Day!',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Hendrerit amet vitae, gravida ultrices arcu mattis molestie dignissim. Rutrum nibh tortor fermentum mauris, eget consequat, ut. Mauris massa felis, velit ornare commodo feugiat mauris dignissim. Amet, bibendum convallis massa sit lorem morbi tellus. Feugiat odio rhoncus accumsan, vulputate. Elementum elementum rutrum vulputate rhoncus, enim rhoncus in. Viverra netus at pellentesque sit sed. Et.',
        }
    },
    {
        id: 4,
        image: '/Images/revuserimg.png',
        username: 'Claire.U 4',
        date: '12/31/2021',
        reviews: {
            title: 'I Use It Every Day!',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Hendrerit amet vitae, gravida ultrices arcu mattis molestie dignissim. Rutrum nibh tortor fermentum mauris, eget consequat, ut. Mauris massa felis, velit ornare commodo feugiat mauris dignissim. Amet, bibendum convallis massa sit lorem morbi tellus. Feugiat odio rhoncus accumsan, vulputate. Elementum elementum rutrum vulputate rhoncus, enim rhoncus in. Viverra netus at pellentesque sit sed. Et.',
        }
    },
]

const MyReview = () => {

    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
    const [showReview, setshowReview] = useState(isTabletOrMobile ? null : data[0])
    function review(item) {
        setshowReview(item)
    }
    console.log("showReview", showReview)
    return (
        <div className='flex  xl:h-[620px]  bg-white sm:bg-[#FFF2E3]'>
            <div className={`${showReview === null ? '' : 'hidden' } sm:block xs:w-[100%] sm:w-[25%]  h-[85vh]] border-r border-[#FF9515]`}>
                <div className='border-b border-[#FF9515]'>
                    <ul className='flex ml-8 mt-[34px]'>
                        <li className='border-b-4 border-pink text-pink '>All</li>
                    </ul>
                </div>
                <div>

                    <ul className='text-center cursor-pointer'>
                        {
                            data.length > 0 &&
                            data.map((item, index) => (
                                <div key={index} onClick={() => review(item)} className={`flex border-b sm:border-b-0  items-center h-20   ${showReview?.id === item.id ? 'bg-white' : ''}`} >
                                    <div className='ml-5'>
                                        <Image src={item.image}
                                            alt="Picture of the author"
                                            width={40}
                                            height={40} />
                                    </div>
                                    <div className='ml-2 mr-14'>
                                        <div className='flex'>
                                            <div className='mr-16'> {item.username}</div>
                                            <div className='text-[12px] '>{item.date}</div>
                                        </div>
                                        <div className='flex'>
                                           <div>
                                           <Rating
                                                initialRating={3.5}
                                                readonly
                                                emptySymbol={
                                                    <svg
                                                        width={20}
                                                        height={20}
                                                        viewBox="0 0 20 20"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M10 0L13.09 6.26L20 7.27L15 12.14L16.18 19.02L10 15.77L3.82 19.02L5 12.14L0 7.27L6.91 6.26L10 0Z"
                                                            fill="#FFC700"
                                                        />
                                                    </svg>
                                                }
                                                fullSymbol={
                                                    <svg
                                                        width={20}
                                                        height={20}
                                                        viewBox="0 0 20 20"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M10 0L13.09 6.26L20 7.27L15 12.14L16.18 19.02L10 15.77L3.82 19.02L5 12.14L0 7.27L6.91 6.26L10 0Z"
                                                            fill="#FFC700"
                                                        />
                                                    </svg>
                                                }
                                            />
                                           </div>
                                           <div className='ml-5 text-[14px]'>
                                               5.0ratings
                                           </div>
                                        </div>

                                    </div>
                                </div>

                            ))

                        }
                    </ul>
                </div>
            </div>

            <div className={`${showReview === null ? 'hidden' : ''} sm:block xs:w-[100%] sm:w-[75%]`}>
                <div className='text-center border-b border-[#FF9515] mt-4 '>
                    <ul className='flex text-center sm:justify-center'>
                        <li>
                            <button onClick={() => setshowReview(null)} className='sm:hidden'> <MdKeyboardArrowLeft/> </button>
                        </li>
                        <li className='ml-4'>
                            {
                                showReview?.image &&
                                <Image src={showReview?.image || ""}
                                    alt="Picture of the author"
                                    width={40}
                                    height={40} />
                            }
                        </li>
                        <li className='mx-3'>
                            {showReview?.username || ""}
                        </li>
                    </ul>
                </div>
                <div className='h-[550px]'>
                    <div className='xl:h-[88%] lg:h-[300px]  overflow-auto'>
                        {
                            showReview !== null &&
                            <div className='bg-white rounded-xl mx-5 mt-3 break-all overflow-scroll px-8 py-8'>
                                <div className='flex'>
                                <h1 className='text-3xl'>{showReview.reviews.title}</h1>
                                <div className='ml-6'>
                                <Rating
                                                initialRating={3.5}
                                                readonly
                                                emptySymbol={
                                                    <svg
                                                        width={20}
                                                        height={20}
                                                        viewBox="0 0 20 20"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M10 0L13.09 6.26L20 7.27L15 12.14L16.18 19.02L10 15.77L3.82 19.02L5 12.14L0 7.27L6.91 6.26L10 0Z"
                                                            fill="#FFC700"
                                                        />
                                                    </svg>
                                                }
                                                fullSymbol={
                                                    <svg
                                                        width={20}
                                                        height={20}
                                                        viewBox="0 0 20 20"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M10 0L13.09 6.26L20 7.27L15 12.14L16.18 19.02L10 15.77L3.82 19.02L5 12.14L0 7.27L6.91 6.26L10 0Z"
                                                            fill="#FFC700"
                                                        />
                                                    </svg>
                                                }
                                            />
                                </div>
                                </div>
                                <div>
                                <h1 className='my-10'>{showReview.reviews.description}</h1>
                                </div>
                                <div className='flex'>
                                    <div className='flex '>
                                    <h1>1 day ago</h1>
                                    <h1 className='ml-[15px]'>Great Britain</h1>
                                    </div>
                                    <div className='flex sm:ml-[80px] lg:ml-[200px]  xl:ml-[500px] '>
                                        <h1>reply</h1>
                                        <h1 className='ml-8'>share</h1>
                                    </div>

                                </div>
                            </div>
                        }

                    </div>
                        <div className=' fixed  xl:bottom-[40px] lg:bottom-[20px] w-4/5 border-t border-[#FF9515]'>
                            <input type='text' placeholder='Reply' className=' ml-5 px-4 w-[800px] rounded-2xl h-8 mt-3'></input>
                            <button className='ml-[-80px]'><BsEmojiSmile /></button>
                            <button className='ml-6'><FiPaperclip /></button>
                            <button className='ml-10'><AiOutlineSend className='text-pink' /></button>
                        </div>

                </div>

            </div>
        </div>
    )
}

export default MyReview
import React, { useState } from 'react'
import {BsEmojiSmile} from 'react-icons/bs'
import {FiPaperclip} from 'react-icons/fi'
import {AiOutlineSend} from 'react-icons/ai'
import Image from 'next/image'

let data = [
    {
        id: 1,
        image: '/Images/revuserimg.png',
        username: 'user1',
        date: '12/31/2021',
        reviews: {
            title: 'heading 1',
            description: 'lorem inojrsdf jirwdsof 0jirwn 0j iorwf0jiowr rfdsc 90j iowjfdsc0 jiowfdś', 
        }
    },
    {
        id: 2,
        image: '/Images/revuserimg.png',
        username: 'user2',
        date: '12/31/2021',
        reviews: {
            title: 'heading 2',
            description: 'lorem inojrsdf jirwdsof 0jirwn 0j iorwf0jiowr rfdsc 90j iowjfdsc0 jiowfdś', 
        }
    },
    {
        id: 3,
        image: '/Images/revuserimg.png',
        username: 'user3',
        date: '12/31/2021',
        reviews: {
            title: 'heading 3',
            description: 'lorem inojrsdf jirwdsof 0jirwn 0j iorwf0jiowr rfdsc 90j iowjfdsc0 jiowfdś', 
        }
    },
    {
        id: 4,
        image: '/Images/revuserimg.png',
        username: 'user4',
        date: '12/31/2021',
        reviews: {
            title: 'heading 4',
            description: 'lorem inojrsdf jirwdsof 0jirwn 0j iorwf0jiowr rfdsc 90j iowjfdsc0 jiowfdś', 
        }
    },
]

const MyReview = () => {

    const [showReview, setshowReview] = useState(null)
    function review(item) {
        setshowReview(item)
    }
    console.log("showReview", showReview)
    return (
        <div className='flex'>
            <div className='w-1/5 h-screen border-r border-[#FF9515]'>
                <div className='border-b border-[#FF9515]'>
                    <ul className='flex ml-8 mt-3'>
                        <li>All</li>
                    </ul>
                </div>
                <div>

                    <ul className='text-center cursor-pointer'>
                        {
                            data.length > 0 && 
                            data.map((item, index) => (
                                <ul key={index} onClick={() => review(item)} className={`flex  items-center h-20   ${showReview?.id === item.id ? 'bg-white' : ''}`} >
                                <li className='ml-2'>
                                <Image src={item.image}
                                alt="Picture of the author"
                                width={40}
                                height={40} />
                                </li>
                                <li className='ml-2 mr-14'>

                                {item.username}
                                </li>
                                <li className='text-[10px] '>

                                {item.date}
                                </li>
                               
                                </ul>
                            ))
                        }
                    </ul>
                </div>
            </div>

            <div className='w-4/5'>
                <div className='text-center border-b border-[#FF9515] mt-3 '>
                {showReview?.username || ""}
                </div>
            <div>
                {
                    showReview !== null &&
                    <div className='bg-white rounded-xl mx-5 mt-3'>
                        <h1 className='text-3xl'>{showReview.reviews.title}</h1>
                        <h1>{showReview.reviews.description}</h1>
                    </div>
                }
    
                </div>
                <div className='border-t border-[#FF9515] mt-[520px]'>
                    <input type='text' placeholder='Reply' className=' px-4 w-4/5 ml-5 mt-5 rounded-2xl h-8 '></input>
                    <button className='ml-[-86px] '><BsEmojiSmile /></button>
                    <button className='ml-6'><FiPaperclip /></button>
                    <button className='ml-10'><AiOutlineSend className='text-pink' /></button>
                </div>
            </div>
        </div>
    )
}

export default MyReview
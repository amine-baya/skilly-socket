import Link from 'next/link';
import React from 'react';
import Image from "next/image";
import { PhoneIcon, LocationMarkerIcon } from "@heroicons/react/solid";
import { MailIcon } from "@heroicons/react/outline";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

const TutorFooter = () => {
    return (
        <div className='snap-fullPage h-[calc(100vh-79px)] flex flex-col items-center justify-center gap-14 bg-[#FFF7F7]'>
            <LinksAndLogo />

            {/* divider */}
            <span className='bg-[#000000] block sm:w-[70%] w-[85%] h-[1px] rounded-full mx-auto' />

            <SocialLinks />

            <CopyRight />
        </div>
    )
}

export default TutorFooter;


// Links ans Logo
const LinksAndLogo = () => {
    const leftLinks = [
        { title: 'Product', slug: '/' },
        { title: 'Features', slug: '/' },
        { title: 'Resources', slug: '/' },
    ]

    const rightLinks = [
        { title: 'About', slug: '/' },
        { title: 'Blog', slug: '/' },
        { title: 'Support', slug: '/' },
    ]

    return (
        <>
            {/* visible in large devices */}
            <div className='hidden sm:flex items-center justify-around w-full md:w-[80%] mx-auto font-monts font-semibold text-[#2E2E2E]'>
                {/* left side links */}
                {leftLinks?.map((link, i) => (
                    <Link key={i} href={link?.slug} passHref>
                        <p className='cursor-pointer'>
                            {link?.title}
                        </p>
                    </Link>
                ))}

                {/* logo center */}
                <div className='relative cursor-pointer w-[200px] h-[50px]'>
                    <Link href='/' passHref>
                        <Image
                            src='/Images/brand_logo.png'
                            alt='logo'
                            objectFit='contain'
                            layout='fill'
                        />
                    </Link>
                </div>

                {/* right side links */}
                {rightLinks?.map((link, i) => (
                    <Link key={i} href={link?.slug} passHref>
                        <p className='cursor-pointer'>
                            {link?.title}
                        </p>
                    </Link>
                ))}
            </div>

            {/* visible in small devices */}
            <div className='flex sm:hidden items-center justify-around gap-8 flex-wrap flex-col w-[80%] mx-auto font-monts font-semibold text-[#2E2E2E]'>
                {/* logo center */}
                <div className='relative cursor-pointer w-[200px] h-[50px]'>
                    <Link href='/' passHref>
                        <Image
                            src='/Images/brand_logo.png'
                            alt='logo'
                            objectFit='contain'
                            layout='fill'
                        />
                    </Link>
                </div>

                <div className='flex items-center justify-around flex-wrap w-full'>
                    {/* left side links */}
                    {leftLinks?.map((link, i) => (
                        <Link key={i} href={link?.slug} passHref>
                            <p className='cursor-'>
                                {link?.title}
                            </p>
                        </Link>
                    ))}
                </div>

                <div className='flex items-center justify-around flex-wrap w-[80%]'>
                    {/* right side links */}
                    {rightLinks?.map((link, i) => (
                        <Link key={i} href={link?.slug} passHref>
                            <p className='cursor-pointer'>
                                {link?.title}
                            </p>
                        </Link>
                    ))}
                </div>
            </div>
        </>
    )
}

const SocialLinks = () => {
    return (
        <div className='flex items-center justify-center w-full sm:gap-8 gap-6 mx-auto'>
            {/* phone */}
            <Link href='/' passHref>
                <div className='flex items-center justify-center rounded-full w-[40px] h-[40px] border-[3px] p-2 border-[#FC4D6D] cursor-pointer'>
                    <PhoneIcon />
                </div>
            </Link>

            {/* phone */}
            <Link href='/' passHref>
                <div className='flex items-center justify-center rounded-full w-[40px] h-[40px] border-[3px] p-2 border-[#FC4D6D] cursor-pointer'>
                    <FaFacebookF />
                </div>
            </Link>

            {/* phone */}
            <Link href='/' passHref>
                <div className='flex items-center justify-center rounded-full w-[40px] h-[40px] border-[3px] p-2 border-[#FC4D6D] cursor-pointer'>
                    <FaInstagram />
                </div>
            </Link>

            {/* Mail */}
            <Link href='/' passHref>
                <div className='flex items-center justify-center rounded-full w-[40px] h-[40px] border-[3px] p-2 border-[#FC4D6D] cursor-pointer'>
                    <MailIcon />
                </div>
            </Link>

            {/* Location */}
            <Link href='/' passHref>
                <div className='flex items-center justify-center rounded-full w-[40px] h-[40px] border-[3px] p-2 border-[#FC4D6D] cursor-pointer'>
                    <LocationMarkerIcon />
                </div>
            </Link>
        </div>
    )
}

const CopyRight = () => {
    return (
        <div className='flex items-center justify-center gap-4 w-full font-monts font-medium text-[#474545]'>
            <p>©  2020 - 2022</p>
            <p>Privacy - Terms</p>
        </div>
    )
}
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import leavesicon from '../../public/Images/leavesicon.png'
import righticon from '../../public/Images/righticon.png'
import twoicon from '../../public/Images/twoicon.png'
import threeicon from '../../public/Images/threeicon.png'
import editpenicon from '../../public/Images/editpenicon.png'
import { AiOutlineLeft } from 'react-icons/ai'

let data = [
    {
        id: 1,
        image: '/Images/Arlene Mccoy.png',
        username: 'Arlene MCcoy',
        profession: 'Gardening',
        progress: {
            title: 'Gardening',
            description: 'Arlene Mccoy sessions for gardening',
            sessions: {
                sessionstate: 'Session1',
                sessionstatus: 'Introduction',
                sessionagenda:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum duis orci blandit commodo cursuslacus adipiscing molestie. Suspendisse enim dui id sed id lectus pharetra eleifend. Faucibus sit ut cras scelerisque. Dolor tortor sed placerat dui sociis',
                tutorremarks:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum duis orci blandit commodo cursuslacus adipiscing molestie. Suspendisse enim dui id sed id lectus pharetra eleifend. Faucibus sit ut cras scelerisque. Dolor tortor sed placerat dui sociis',
                date: '5/3/2021',
            },
        },
    },
    {
        id: 2,
        image: '/Images/Albert Flores.png',
        username: 'Albert Flores',
        profession: 'Cooking',
        progress: {
            title: 'Cooking',
            description: 'Albert flores sessions for Cooking',
            sessions: {
                sessionstate: 'Session3',
                sessionstatus: 'Introduction',
                sessionagenda:
                    'Cooking classes are a powerful place for learning because food is something we can all relate to, be excited about, and apply in our live. teaching cooking classes to kids and adults, I’ve learned many lessons (some the hard way) for making cooking classes fun and educational, tasty and healthy, effective and timely.',
                tutorremarks:
                    ' I always feel like I over-plan my cooking lessons,anything and everything you might need. Planning can save you from forgetting really important materials. Muffins aren’t quite muffins if you forget the muffin tin, although muffin cake works too.',
                date: '12/6/2021',
            },
        },
    },
    {
        id: 3,
        image: '/Images/Annette Black.png',
        username: 'Annette Black',
        profession: 'Teaching',
        progress: {
            title: 'Teaching',
            description: 'Annette Black sessions for Teaching',
            sessions: {
                sessionstate: 'Session1',
                sessionstatus: 'Sets and Lists',
                sessionagenda:
                    'The syllabus also contains the usual information about assignments, work expectations, and plagiarism. Together with the context, Estes said, it tells students not only what they will do, but the kind of thinking they will be asked to try.',
                tutorremarks:
                    'excels at applying what he/she learns in the classroom to real-world and real-life situations.',
                date: '20/8/2021',
            },
        },
    },
    {
        id: 4,
        image: '/Images/Dianne Russell.png',
        username: 'Dianne Russel',
        profession: 'Horse Riding',
        progress: {
            title: 'Horse Riding',
            description: 'Dianne Russell sessions for Horse Riding',
            sessions: {
                sessionstate: 'Session6',
                sessionstatus: 'Safety measures',
                sessionagenda:
                    'you might economize by keeping your horses at home and hauling in for a weekly lesson. Obviously, what my students do outside of my barn isnt under my direct control.',
                tutorremarks:
                    'I guide such a student with a fairly detailed weekly training schedule based on homework (the skills she needs to work on), lifestyle (its unrealistic to expect most students, mothers and 9-to-5ers to ride every day) and the five-day work week I believe is ideal for horses.',
                date: '11/3/2022',
            },
        },
    },
    {
        id: 5,
        image: '/Images/Elanor Pena.png',
        username: 'Elanor Pena',
        profession: 'Coding',
        progress: {
            title: 'Coding',
            description: 'Elanor sessions for Coding',
            sessions: {
                sessionstate: 'Session2',
                sessionstatus: ' Django Framework',
                sessionagenda:
                    'article describes an approach of systematic, rule guided qualitative text analysis, which tries to preserve some methodological strengths of quantitative content analysis and widen them to a concept of qualitative procedure.',
                tutorremarks:
                    'If we say, qualitative content analysis wants to preserve the advantages of quantitative content analysis for a more qualitative text interpretation',
                date: '25/3/2022',
            },
        },
    },
]

const MyProgress = () => {
    const [showProgress, setshowProgress] = useState("")

    const [indexValue, setIndexValue] = useState(0)
    function progress(item, index) {
        setshowProgress(item)
        setIndexValue(index)
    }
    useEffect(() => {
        if (showProgress.length === 0) {

            setshowProgress(data[0])
        }
    }, [showProgress])


    return (
        <div className="p-2 lg:p-[33px]">
            <h1 className="mb-[30px] hidden font-poppins  text-2xl font-semibold text-[#5E5252] md:block">
                MyProgress
            </h1>
            <div className=" flex h-full flex-col-reverse justify-between gap-2 md:flex-row lg:gap-[25px]">
                <div className=" h-full w-full rounded-[15px] bg-white  px-1 py-[25px] md:px-[21px] ">
                    <div className="flex justify-between">
                        <div className="flex gap-[13px]">
                            <div className="my-auto">
                                <Image
                                    src={leavesicon}
                                    alt="Country Flag"
                                //   width={18}
                                //   height={18}
                                />
                            </div>
                            <div className="">
                                <h1 className="font-roboto text-2xl font-bold mb-2">
                                    {showProgress?.progress?.title}
                                </h1>
                                <h1 className="font-roboto text-[14px] ">
                                    {showProgress?.progress?.description}
                                </h1>
                            </div>
                        </div>
                        <div className="my-auto ">
                            <label className="flex font-semibold">
                                <AiOutlineLeft className="my-auto text-sm" />
                                Back
                            </label>
                        </div>
                    </div>
                    <div className=" mt-10 grid grid-cols-1 md:grid-cols-2  md:flex-row">
                        <div className="relative md:px-0 px-1.5">
                            <div className="grid grid-flow-col grid-cols-none grid-rows-3 md:grid-flow-row md:grid-cols-3 md:grid-rows-none">
                                <div className=" text-left text-xs md:text-right md:text-sm md:order-none order-3">
                                    <h1 className="mb-[14px] text-[#000000]">Session1</h1>
                                    <h1 className="text-[#888888]">Introduction</h1>
                                </div>

                                <div className=" ml-auto flex h-[40px] items-center justify-self-center md:ml-0 md:h-auto md:flex-col md:order-none order-2">
                                    <div className="h-[30px] w-[30px] md:h-[40px] md:w-[40px]">
                                        <Image
                                            src={righticon}
                                            alt="Country Flag"
                                        // width={40}
                                        // height={40}
                                        />
                                    </div>
                                    <div className="mx-auto my-auto h-[1px] w-[52px] bg-[#9E9E9E] md:my-0 md:h-[62px] md:w-0.5"></div>
                                    <div className="my-auto flex md:my-0">
                                        <div className="mx-auto h-[9px] w-[9px] rounded-full bg-[#9E9E9E] md:mb-[31px] "></div>
                                    </div>
                                </div>
                                <div className="my-auto md:my-0 md:order-none order-1">
                                    <h1 className=" text-[10px] font-medium text-[#20C374] md:text-left ">
                                        Completed
                                    </h1>
                                </div>

                                <div className="text-center text-xs md:my-auto md:text-right md:text-sm md:order-none order-6">
                                    <h1 className="mb-[14px] text-[#000000]">Session Number</h1>
                                    <h1 className="text-[#888888]">Session Name</h1>
                                </div>

                                <div className=" flex h-[40px] items-center justify-self-center md:h-auto md:flex-col md:order-none order-5">
                                    <div className="mx-auto  my-auto h-[1px] w-[52px] bg-[#9E9E9E] md:my-0 md:h-[62px] md:w-0.5 "></div>
                                    <div className="h-[30px] w-[30px] md:h-[40px] md:w-[40px]">
                                        <Image
                                            src={twoicon}
                                            alt="Country Flag"
                                            className="h-[30px] w-[30px]"
                                        />
                                    </div>
                                    <div className="mx-auto my-auto h-[1px] w-[52px] bg-[#9E9E9E] md:my-0 md:h-[62px] md:w-0.5"></div>
                                    <div className="my-auto flex md:my-0">
                                        <div className="mx-auto h-[9px] w-[9px] rounded-full bg-[#9E9E9E] md:mb-[31px]"></div>
                                    </div>
                                </div>
                                <div className="my-auto flex justify-center md:justify-start md:order-none order-4">
                                    <h1 className="h-[25px] w-auto rounded bg-[#F6F4FD] p-1  text-[10px] font-medium text-[#1976D2] ">
                                        In Progress
                                    </h1>
                                </div>

                                <div className="text-center text-xs md:my-auto md:text-right md:text-sm md:order-none order-9">
                                    <h1 className="mb-[14px] text-[#000000]">Session Number</h1>
                                    <h1 className="text-[#888888]">Session Name</h1>
                                </div>

                                <div className="  flex h-[40px] items-center justify-self-center md:h-auto md:flex-col md:order-none order-8">
                                    <div className="mx-auto  my-auto h-[1px] w-[52px] bg-[#9E9E9E] md:my-0 md:h-[62px] md:w-0.5"></div>
                                    <div className="h-[30px] w-[30px] whitespace-nowrap md:h-[40px] md:w-[40px]">
                                        <Image
                                            src={threeicon}
                                            alt="Country Flag"
                                        // width={40}
                                        // height={40}
                                        />
                                    </div>
                                    <div className="mx-auto  my-auto h-[1px] w-[32px] bg-[#9E9E9E] md:my-0 md:h-[62px] md:w-0.5"></div>
                                </div>
                                <div className="my-auto flex justify-center md:justify-start md:order-none order-7">
                                    <h1 className="h-[25px] w-auto rounded border border-[#BDBDBD] p-1 text-[10px] font-medium text-[#BDBDBD] md:ml-0 ml-4">
                                        Pending
                                    </h1>
                                </div>
                            </div>
                            {/* </div> */}
                        </div>

                        <div className=" mt-[100px] w-auto justify-self-center rounded-[15px] border-2 border-[#C8C8C8] p-4 md:mt-0">
                            <div className="mb-10 flex flex-col gap-2.5">
                                <ul className="flex justify-between">
                                    <li className="">
                                        <h1 className="text-lg font-medium">
                                            {showProgress?.progress?.sessions?.sessionstate}
                                        </h1>
                                    </li>
                                    <li className=" font-bold text-[#20C374]">
                                        <h1>Completed</h1>
                                    </li>
                                </ul>
                                <h1 className="text-[#8C8C8C]">
                                    {showProgress?.progress?.sessions?.sessionstatus}
                                </h1>
                                <div className="flex justify-between">
                                    <div>
                                        <h1 className="text-[#8C8C8C]">
                                            {showProgress?.progress?.sessions?.date}
                                        </h1>
                                    </div>
                                    <div className="">
                                        <Image
                                            src={editpenicon}
                                            alt="Country Flag"
                                        //   width={18}
                                        //   height={18}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className="flex flex-col gap-[13px]">
                                    <h1 className="text-[18px] font-bold">Session Agenda</h1>
                                    <h1 className="text-[14px] text-[#414141]">
                                        {showProgress?.progress?.sessions?.sessionagenda}
                                    </h1>
                                    <div className="flex">
                                        <label className=" ml-auto text-xs font-bold text-[#818181] ">
                                            Read More
                                        </label>
                                    </div>
                                </div>

                                <div className="mt-2.5 flex flex-col gap-[13px]">
                                    <h1 className="text-[18px] font-bold">
                                        Post Session Tutor Remarks
                                    </h1>
                                    <p className="text-[14px] text-[#414141]">
                                        {showProgress?.progress?.sessions?.tutorremarks}
                                    </p>
                                    <div className="flex">
                                        <label className=" ml-auto text-xs font-bold text-[#818181] ">
                                            Read More
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <h1 className="mt-[30px] mb-[17px] block font-poppins text-2xl font-semibold text-[#5E5252] md:hidden">
                    MyProgress
                </h1>
                <div className="">
                    <h1 className="font-poppins text-xl font-semibold">
                        My Targeted Skills
                    </h1>
                    <div className=" mt-[9px] h-full w-full rounded-[15px] bg-[#FFFFFF]  md:w-[212px] lg:w-[233px] xl:w-[309px] 2xl:w-[367px]  ">
                        <ul className="flex flex-col gap-y-[22px]">
                            {data.length > 0 &&
                                data.map((item, index) => (

                                    <div
                                        key={index}
                                        onClick={() => progress(item, index)}
                                        className={`flex gap-2 hover:cursor-pointer md:gap-4 p-4 ${index === indexValue ? "bg-[#EEEEEE] " : null} `}
                                    >
                                        <div>
                                            <Image
                                                src={item.image}
                                                alt="Picture of the author"
                                                width={58}
                                                height={58}
                                            />
                                        </div>
                                        <div className="">
                                            <h1 className="text-xl font-semibold md:text-base lg:text-xl">
                                                {item.username}
                                            </h1>
                                            <h1 className="text-lg font-medium md:text-sm lg:text-lg">
                                                {item.profession}
                                            </h1>
                                        </div>
                                    </div>
                                ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyProgress

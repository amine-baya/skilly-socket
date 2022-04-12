import React from 'react'
import { FiCheckCircle } from 'react-icons/fi'

function SettingNotification() {
    return (
        <>
            <div>
                <div className="md-[1px] h1wi ml-[1px] mb-[1px] bg-white  capitalize lg:ml-[30px] lg:mt-[34px] lg:mb-[30px] lg:rounded-2xl ">
                    <div
                        id="heading"
                        className="col-span-12  p-5 text-3xl font-semibold text-[#3d3d3d] xl:px-12"
                    >
                        Notification center
                    </div>
                    <hr className="text-[#E2E2E2]" />

                    <div className=" px-5 py-6 font-semibold text-[#545454] xl:px-12">
                        <h1 className="mb-8 text-lg font-semibold">Email notifications</h1>
                        <div className="mb-8 flex gap-3">
                            <div className="whitespace-nowrap">
                                <FiCheckCircle className="b-colo  mt-2" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className=" text-lg font-medium">
                                    sessions scheduling
                                </label>

                                <p className=" text-xs md:text-base">
                                    Alerts about new sessions and schedule changes.
                                </p>
                            </div>
                        </div>
                        <div className="mb-8 flex gap-3">
                            <div className="whitespace-nowrap">
                                <FiCheckCircle className="b-colo  mt-2" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className=" text-lg font-medium">
                                    General reminders
                                </label>

                                <p className=" text-xs md:text-base">
                                    Notifications about sessions, tutor messages, and payments.
                                </p>
                            </div>
                        </div>
                        <div className="mb-8 flex gap-3">
                            <div className="whitespace-nowrap">
                                <FiCheckCircle className="b-colo mt-2" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className=" text-lg font-medium">
                                    miscellaneous notifications
                                </label>

                                <p className=" text-xs md:text-base">
                                    Stay connected with product updates, helpful tips and special
                                    offers.
                                </p>
                            </div>
                        </div>
                        <h1 className="mb-8 text-lg font-semibold">SMS notifications</h1>
                        <div className="mb-8 flex gap-3">
                            <div className="whitespace-nowrap">
                                <FiCheckCircle className="b-colo  mt-2" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className=" text-lg font-medium">
                                    sessions and messages
                                </label>

                                <p className=" text-xs md:text-base">
                                    SMS alerts about tutor&apos;s first responses to your requests
                                    and trial session reminders.
                                </p>
                            </div>
                        </div>
                        <h1 className="mb-8 text-lg font-semibold">
                            Voice call notifications
                        </h1>
                        <div className="mb-8 flex gap-3">
                            <div className="ml-[30px] flex flex-col gap-2">
                                <label className=" text-lg font-medium">sessions</label>

                                <p className=" text-xs md:text-base">
                                    Receive automated phone call reminders about your upcoming
                                    sessions when you haven&apos;t viewed your calendar on
                                    skillytree for a while.
                                </p>
                            </div>
                        </div>
                        <h1 className="mb-8 text-lg font-semibold">SkillyTree insights</h1>
                        <div className="mb-8 flex gap-3">
                            <div className="whitespace-nowrap">
                                <FiCheckCircle className="b-colo  mt-2" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className=" text-lg font-medium">
                                    Allow Preply team to contact me for product improvements
                                </label>

                                <p className=" text-xs md:text-base">
                                    Product improvements, research and beta testing
                                </p>
                            </div>
                        </div>
                        <h1 className="mb-8 text-lg font-semibold">Profile promotion</h1>
                        <div className="mb-8 flex gap-3">
                            <div className="whitespace-nowrap">
                                <FiCheckCircle className="b-colo mt-2" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className=" text-lg font-medium">
                                    Allow SkillyTree to promote details from my tutor profile in
                                    ads
                                </label>

                                <p className=" text-xs md:text-base">
                                    To help you reach more students, Preply can promote your
                                    profile photo, video and/or other publicly available details
                                    from your tutor profile in advertisements. To learn more, read
                                    our FAQs.
                                </p>
                            </div>
                        </div>
                        <div className="   flex justify-between">
                            <button
                                className="flex gap-2.5 rounded-lg border border-[#FC4D6D] bg-[#FC4D6D] px-3 py-1 text-lg font-medium capitalize text-white"
                                type="submit"
                            >
                                save settings
                            </button>

                            <button
                                className="  w-auto  cursor-pointer rounded-lg   border border-[#FC4D6D] bg-white px-3 py-1  font-medium capitalize"
                                type="button"
                            >
                                unsubscribe from all
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SettingNotification
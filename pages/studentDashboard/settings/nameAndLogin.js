import React from 'react'
import { Formik, Field, Form } from 'formik'
import SelectWithIcons from '../../../components/TutorDashboardRegistration/SelectWithIcons'

const data = [
    {
        id: 1,
        name: '+91',
        avatar:
            'https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1200px-Flag_of_India.svg.png',
    },
    {
        id: 2,
        name: '+1',
        avatar:
            'https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg',
    },
]

function NameAndLogin() {
    const initialValues = {
        verifyPassword: '',
        newPassword: '',
        currentPassword: '',
        emailusername: '',
        phonenumber: '',
        lastName: '',
        firstName: '',
    }

    const onSubmit = (data) => {
        console.log('value', data)
    }

    return (
        <>
            <div>
                <div className="md-[1px] h1wi ml-[1px] mb-[1px] bg-white  capitalize lg:ml-[30px] lg:mt-[34px] lg:mb-[30px] lg:rounded-2xl">
                    <div
                        id="heading"
                        className="col-span-12  p-5 text-3xl font-semibold text-[#3d3d3d] xl:px-12"
                    >
                        name and login
                    </div>
                    <hr className="text-[#E2E2E2]" />

                    <Formik initialValues={initialValues} onSubmit={onSubmit}>
                        <Form className="grid grid-cols-9 gap-y-6 px-5 py-6 font-semibold text-[#545454] xl:px-12">
                            <label className="col-span-9 whitespace-nowrap md:col-span-2">
                                first name
                            </label>
                            <Field
                                type="text"
                                name="firstName"
                                className="col-span-9 h-11 w-full rounded-lg border border-[#C1C1C1] focus:outline-none md:col-span-7"
                            />
                            <label className="col-span-9 whitespace-nowrap md:col-span-2">
                                Last name
                            </label>
                            <Field
                                type="text"
                                name="lastName"
                                className="col-span-9 h-11 w-full rounded-lg border border-[#C1C1C1] focus:outline-none md:col-span-7"
                            />
                            <label className="col-span-9 whitespace-nowrap md:col-span-2">
                                Phone number
                            </label>
                            <div className="col-span-9 flex h-11 w-full gap-x-5 rounded-lg border border-[#C1C1C1] md:col-span-7 md:gap-x-2">
                                <div>
                                    <SelectWithIcons
                                        people={data}
                                        className="h-11 w-[126px] border-none"
                                        flag="center"
                                        changestyle="font-extrabold"
                                    />
                                </div>
                                <Field
                                    type="number"
                                    name="phonenumber"
                                    className=" my-auto h-10 w-full focus:outline-none"
                                />
                            </div>
                            <label className="col-span-9 whitespace-nowrap md:col-span-2">
                                email/username
                            </label>
                            <Field
                                type="text"
                                name="emailusername"
                                className="col-span-9 h-11 w-full rounded-lg border border-[#C1C1C1] focus:outline-none md:col-span-7"
                            />
                            <label className="col-span-9 md:col-span-2 ">
                                Current password
                            </label>
                            <Field
                                type="text"
                                name="currentPassword"
                                className="col-span-9 h-11 w-full rounded-lg border border-[#C1C1C1] focus:outline-none md:col-span-7"
                            />
                            <label className="col-span-9 whitespace-nowrap md:col-span-2">
                                New password
                            </label>
                            <Field
                                type="text"
                                name="newPassword"
                                className="col-span-9 h-11 w-full rounded-lg border border-[#C1C1C1] focus:outline-none md:col-span-7"
                            />
                            <label className="col-span-9 whitespace-nowrap md:col-span-2">
                                Verify password
                            </label>
                            <Field
                                type="text"
                                name="verifyPassword"
                                className="col-span-9 h-11 w-full rounded-lg border border-[#C1C1C1] focus:outline-none md:col-span-7"
                            />
                            <div className="col-span-9 md:col-span-2"></div>
                            <div className="col-span-9 flex  justify-between md:col-span-7">
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
                                    delete account
                                </button>
                            </div>
                        </Form>
                    </Formik>
                </div>
            </div>
        </>
    )
}

export default NameAndLogin
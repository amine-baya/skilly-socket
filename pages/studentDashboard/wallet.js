import React from 'react';
import Image from 'next/image';
import wallet from '../../public/Images/wallet.svg';

const Wallet = () => {
    return (
        <div className="h-full whitespace-nowrap font-roboto capitalize px-4 sm:px-9 p-9 w-full block mx-auto text-white">
            <div className="mb-9 flex justify-between">
                <h1 className="text-2xl font-semibold text-[#5E5252]">
                    My Wallet
                </h1>

                {/* wallet */}
                <div className="sticky top-0 z-20 flex sm:h-[44px] h-[33.58px] sm:w-[336.53px] w-[300px] items-center justify-between rounded-lg bg-[#FC4D6D] pl-1 pr-3 text-[15px] tracking-widest sm:text-[18px]">
                    <div className="flex items-center justify-between gap-1">
                        <div className="relative h-[27.1px] w-[29.45px] sm:h-[35.51px] sm:w-[38.6px]">
                            <Image
                                src={wallet}
                                alt="wallet"
                                layout="fill"
                                objectFit="contain"
                            />
                        </div>
                        <p className="font-bold">Your Balance :</p>
                    </div>
                    <p className="font-bold">$120</p>
                </div>
            </div>

            {/* main Container */}
            <div className='flex items-center sm:justify-between justify-center flex-wrap gap-x-4 gap-y-8'>
                {/* cards */}
                <Cards />
                <Cards />
                <Cards />
                <Cards />
                <Cards />
                <Cards />
                <Cards />
                <Cards />
                <Cards />
            </div>
        </div>
    )
}

export default Wallet;


// Cards
const Cards = () => {
    return (
        <div className="relative flex h-[180px] w-[360px] flex-col justify-center gap-8 overflow-hidden rounded-xl bg-[#FC4D6D] bg-gradient-to-br from-[#FC4D6D] to-[#FDA02F] p-5 font-poppins capitalize">
            <div className='z-10'>
                <p className="z-10 text-[19px] font-semibold sm:text-[21.07px]">
                    Add $100 to your
                </p>
                <p className="z-10 text-[19px] font-semibold sm:text-[21.07px]">
                    wallet & get
                </p>
            </div>
            {/* gradient circle */}
            <span className="absolute -top-[112px] -left-[105px] h-[300px] w-[300px] rounded-full bg-gradient-to-r from-transparent to-[#FFB65D96] sm:-top-[110px] sm:-left-[85px]" />
            <div className="z-10 flex items-center justify-between">
                <p className="text-[25px] font-extrabold sm:text-[29px]">
                    $10 extra
                </p>
                <button className="rounded-full border-none bg-[#FFFFFF] text-center font-bold text-[#FC4D6D] h-[27px] w-[87px] text-[15px]">
                    Buy Now
                </button>
            </div>
        </div>
    )
}
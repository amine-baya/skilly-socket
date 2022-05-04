import React, {useEffect, useState } from 'react';
import axios from "axios";
import { BsEmojiSmile } from 'react-icons/bs';
import { FiPaperclip, FiSend } from 'react-icons/fi';
import counrtyIcon from '../../public/Images/ukIcon.png';
import { GoChevronLeft } from 'react-icons/go';
import Image from 'next/image';
import Rating from 'react-rating';
import { getCookie } from 'cookies-next'
import { useMediaQuery } from 'react-responsive';
import io from "socket.io-client"


let data = [
    {
        id: 1,
        image: '/Images/revuserimg.png',
        username: 'Claire.U 1',
        date: '12/31/2021',
        messages: {
            receive:
                "Hey Yashvi, That's great! would you like my help with this? do you have any questions for me about how I conduct my Sessions?",
            send: 'Hi Claire! hi need to learn for traveling',
        },
    },
    {
        id: 2,
        image: '/Images/revuserimg.png',
        username: 'Claire.U 2',
        date: '12/31/2021',
        messages: {
            receive:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos cumque, nam delectus eaque sed sapiente animi? At, maxime impedit deleniti illo mollitia repudiandae magnam autem maiores eum! Laborum, enim quos.',
            send: 'Hi Claire! hi need to learn for traveling',
        },
    },
    {
        id: 3,
        image: '/Images/revuserimg.png',
        username: 'Claire.U 3',
        date: '12/31/2021',
        messages: {
            receive:
                "Hey Yashvi, That's great! would you like my help with this? do you have any questions for me about how I conduct my Sessions?",
            send: 'Hi Claire! hi need to learn for traveling',
        },
    },
    {
        id: 4,
        image: '/Images/revuserimg.png',
        username: 'Claire.U 4',
        date: '12/31/2021',
        messages: {
            receive:
                "Hey Yashvi, That's great! would you like my help with this? do you have any questions for me about how I conduct my Sessions?",
            send: 'Hi Claire! hi need to learn for traveling',
        },
    },
]

let socket, selectedChatCompare;

function Messages() {
    const [Chats, setChats] = useState([])
    const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
    const [socketConnected, setSocketConnected] = useState(false);
    const [latestmessage, setlatestmessage] = useState("")
    const [NewChat, setNewChat] = useState(true)

    const [showReview, setshowReview] = useState({_id: "626f17eaa1d26505f4813837"})

    function review(item) {
        setshowReview(item)
    }

    
    const TOKEN = getCookie('token')
    ? JSON.parse(getCookie('token')).access_token
    : false
    
const user = typeof window !== 'undefined' ? localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : {} : null
    
    const fetchChats = async () => {

        // console.log(user._id);
        try {
          const config = {
            headers: {
              Authorization: `Bearer ${TOKEN}`,
            },
          };
    
          const { data } = await axios.get("http://localhost:5087/chat/tutor", config);
          setChats(data);
          setshowReview(data[0])
          console.log(data);
        } catch (error) {
            throw new Error(error.message);

        }
      };

      const fetchMessages = async () => {
       // if (!selectedChat) return;
    
        try {
          const config = {
            headers: {
              Authorization: `Bearer ${TOKEN}`,
            },
          };
    
          const { data } = await axios.get(
            `http://localhost:5087/message/${showReview?._id}`,
            config
          );
          setMessages(data);
          console.log(data);
    
          socket.emit("join chat", showReview?._id);
        } catch (error) {
            throw new Error(error.message);

        }
      };
    
      useEffect(() => {

      socket = io("http://localhost:5087")
          socket.emit("setup", user);
          socket.on("connected", () => setSocketConnected(true));
          //socket.on("typing", () => setIsTyping(true));
          //socket.on("stop typing", () => setIsTyping(false));
        
        
      }, []);
      useEffect(() => { 
          console.log("hello"); 
          fetchChats();
        }, [NewChat]);

      useEffect(() => {
    socket.on("message recieved tutor", (newMessageRecieved) => {

      if (
        !selectedChatCompare || // if chat is not selected or doesn't match current chat
        selectedChatCompare._id !== newMessageRecieved.chat._id
      ) {
        //if (!notification.includes(newMessageRecieved)) {
        //  setNotification([newMessageRecieved, ...notification]);
        //  setFetchAgain(!fetchAgain);
        //}
      } else {
          setlatestmessage(newMessageRecieved.content)
        setMessages([...messages, newMessageRecieved]);
      }
    });

    socket.on("add chat", (newMessageRecieved) => {
        console.log(newMessageRecieved, "hello");
        fetchChats();
    })

  });

      useEffect(() => {

            fetchMessages()

            selectedChatCompare = showReview

     
      }, [showReview]);
       
      const sendMessage = async (event) => {
       
          //socket.emit("stop typing", selectedChat._id);
          try {
            const config = {
              headers: {
                "Content-type": "application/json",
                Authorization: `Bearer ${TOKEN}`,
              },
            };
            setNewMessage("");
            const { data } = await axios.post("http://localhost:5087/message",{ content: newMessage, chatId: showReview?._id}, config);
            socket.emit("new message tutor", data);
            socket.emit("new chat", NewChat);

            setMessages([...messages, data]);
          } catch (error) {
            throw new Error(error.message);
          }
        
      };

      const typingHandler = (e) => {
        setNewMessage(e.target.value);
    
      //if (!socketConnected) return;
    
      //if (!typing) {
      //  setTyping(true);
      //  socket.emit("typing", selectedChat._id);
      //}
      //let lastTypingTime = new Date().getTime();
      //var timerLength = 3000;
      //setTimeout(() => {
      //  var timeNow = new Date().getTime();
      //  var timeDiff = timeNow - lastTypingTime;
      //  if (timeDiff >= timerLength && typing) {
      //    socket.emit("stop typing", selectedChat._id);
      //    setTyping(false);
      //  }
      //}, timerLength);
      };
    

    return (
        <>
            <div className="grid h-full   grid-cols-12  bg-white sm:bg-[#FFF2E3]">
                <div className="col-span-12 border-y border-[#DFDFDF] py-3 px-7 font-semibold text-[#5E5252] md:hidden">
                    <h1>My Reviews</h1>
                </div>
                <div
                    className={`${showReview === null ? '' : 'hidden'
                        } col-span-12 w-full h-[calc(100vh-79px)]  overflow-y-scroll  border-[#FF9515]  sm:block md:col-span-4 md:border-r `}
                >
                    <div className="boder-[#DFDFDF] sticky top-0 z-[1] border-b md:border-[#FF9515] sm:bg-[#FFF2E3]">
                        <ul className="ml-7  flex font-semibold">
                            <li className="border-b-4 border-pink p-4 text-pink">All</li>
                            <li className="p-4 text-[#9A9A9A] ">Unread</li>
                        </ul>
                    </div>
                    <div>
                        <ul className="cursor-pointer text-center md:mt-1">
                            {Chats.length > 0 &&
                                Chats.map((item, index) => (
                                    <div
                                        key={index}
                                        onClick={() => review(item)}
                                        className={`flex items-center gap-2 border-b p-5  sm:border-b-0 lg:gap-4   ${showReview?._id === item._id ? 'bg-white' : ''
                                            }`}
                                    >
                                        {/* <div className="whitespace-nowrap">
                                            <Image
                                                src={item.image}
                                                alt="Picture of the author"
                                                width={58}
                                                height={58}
                                            />
                                        </div> */}
                                        <div className="w-full">
                                            <div className="mb-3 flex justify-between">
                                                 <div className="font-medium"> {item?.student?.email}</div>
                                                <div className="mt-auto text-[12px] ">{item.date}</div>
                                            </div>
                                            <div className=" w-[254px] overflow-hidden text-ellipsis whitespace-nowrap ">
                                                { item.latestMessage?.content || "say somthing"}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                        </ul>
                    </div>
                </div>

                <div
                    className={`${showReview === null ? 'hidden' : 'block'
                        } col-span-12 w-full h-[calc(100vh-79px)]  overflow-y-scroll  sm:block  md:col-span-8 `}
                >
                    <div className="sticky top-0 z-[1]  border-b border-[#FF9515] bg-white  text-center md:bg-[#FFF2E3]">
                        <ul className="mt-1.5 flex p-[7px] text-center sm:justify-center md:px-6">
                            <li className="self-center">
                                <button
                                    onClick={() => setshowReview(null)}
                                    className="my-auto sm:hidden"
                                >
                                    {' '}
                                    <GoChevronLeft className="mr-2 text-xl font-extrabold text-[#9A9A9A]" />{' '}
                                </button>
                            </li>
                            {/* <div className="my-auto whitespace-nowrap">
                                {showReview?.image && (
                                    <Image
                                        src={showReview?.image || null}
                                        alt="Picture of the author"
                                        width={38}
                                        height={38}
                                    />
                                )}
                            </div> */}
                            <li className="ml-3 mt-2 text-xl font-semibold text-[#515151]">
                                {showReview?.username || ''}
                            </li>
                        </ul>
                    </div>

                    <div className="h-full">
                        <div className=" h-[657px] overflow-y-auto p-4 ">
                            {showReview !== null && (
                                <>
                                    {/* <div className=" overflow-scroll break-all rounded-xl bg-[#FFF2E3] px-8 py-5 md:bg-white">
                    <div className="flex gap-6 text-[#515151] ">
                      <h1 className="text-xl font-semibold">
                        {showReview.reviews.title}
                      </h1>

                      <Rating
                        initialRating={3}
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
                        className="my-auto flex justify-between"
                      />
                    </div>
                    <div>
                      <p className="my-7 text-base font-medium">
                        {showReview.reviews.description}
                      </p>
                    </div>
                    <div className="flex justify-between font-semibold">
                      <div className="flex gap-8 ">
                        <label>1 day ago</label>
                        <div className="  ">
                          <Image
                            src={counrtyIcon}
                            alt="Country Flag"
                            //   width={18}
                            //   height={18}
                          />
                          <label className="ml-2.5">Great Britain</label>
                        </div>
                      </div>
                      <div className="flex gap-8">
                      <label>reply</label>
                      <label className="ml-8">share</label>
                    </div>
                    </div>
                  </div> */}
                                    <div className="flex flex-col gap-5">

                                        {messages?.map((el, index) => (

                                        <div className="flex">
                                            <div className={el.sender !== null ? "ml-auto flex max-w-[410px] gap-1 rounded-xl bg-[#FFE5EA] py-[14px] px-5 sm:gap-5" : "flex  gap-3 rounded-xl bg-[#ECECEC]  py-[14px] px-5 sm:gap-5"}>
                                                {el.content}
                                                <label className="mt-auto text-xs text-[#686868]">
                                                    {el.createdAt.slice(11,16)} 
                                                </label>
                                            </div>
                                        </div>
                                        ))}
                                        
                                       
                                        {/* <div className="inline-flex gap-[13px]">
                                            <div className="my-auto whitespace-nowrap">
                                                 {showReview?.image && (
                                                    <Image
                                                        src={showReview?.image || null}
                                                        alt="Picture of the author"
                                                        width={38}
                                                        height={38}
                                                    />
                                                )} 
                                            </div>
                                            <div className="flex  gap-3 rounded-xl bg-[#ECECEC]  py-[14px] px-5 sm:gap-5">
                                                <p className="max-w-[410px]">
                                                    {showReview?.latestMessage?.content}
                                                </p>
                                                <label className="mt-auto text-xs text-[#686868]">
                                                    11:42
                                                </label>
                                            </div>
                                        </div> */}
                                    </div>
                                </>
                            )}
                        </div>
                        <div className=" sticky bottom-0 flex border-t border-[#DFDFDF] bg-white  px-5 text-[#7B7B7B] md:border-[#FF9515] md:bg-[#FFF2E3] md:py-6">
                            <input
                                type="text"
                                placeholder="Reply"
                                className=" h-[55px] w-11/12 rounded-2xl px-4 focus:outline-none"
                                onChange={(e) => typingHandler(e)}
                                value={newMessage}
                            />
                            <button className="ml-[-80px] text-xl">
                                <BsEmojiSmile />
                            </button>
                            <button className="ml-6 text-xl">
                                <FiPaperclip />
                            </button>
                            <button className="ml-10 " onClick={() => sendMessage()}>
                                <FiSend className="rotate-45 text-3xl text-pink " />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Messages;
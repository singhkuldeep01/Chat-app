import React, { useEffect } from 'react'
import assest, { messagesDummyData } from '../assets/assets'
const ChatContainer = ({ selectedUser , setSelectedUser}) => {

    const scrollEnd = React.useRef(null);

    useEffect(() => {
       if(scrollEnd.current) {
        scrollEnd.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
       }
    }, [selectedUser , setSelectedUser]);

    const formatTime = (dateString) => {
        return new Date(dateString).toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit',
            hour12: false // Set to true for AM/PM like "03:45 PM"
        });
    };
  return selectedUser ? (
    <div className='h-full overflow-scroll relative backdrop:blur-lg'>
        {/* header part */}
        <div className='flex text-white items-center gap-3 py-3 mx-4 border-b border-stone-500' >
            <img src={assest.profile_martin} className='w-8 rounded-full' alt="User Avatar" />
            <p className='text-lg flex-1 flex text-white items-center gap-2'>Marting Johnson
            <span className='w-2 h-2 rounded-full bg-green-500'></span>
            </p>
            <img onClick={()=>setSelectedUser(null)} src={assest.arrow_icon } alt="Arrow Icon" className='md:hidden max-w-7' />
            <img src={assest.help_icon} alt='help icon' className='max-md:hidden max-w-5' ></img>
        </div>
        {/* messages part */}
        <div className='flex  flex-col h-[calc(100%-120px) overflow-y-auto p-3 pb-6'>
            {messagesDummyData.map((message) => (
                <div key={message._id} className={`flex items-end gap-2 justify-end 
                ${message.senderId !== "680f50e4f10f3cd28382ecf9" && "flex-row-reverse"}`}>
                    {message.image ? (
                         <img src={message.image} alt='image' className='max-w-57.5 border
                         border-gray-700 rounded-lg overflow-hidden mb-8'></img>
                    ) : (
                        <p className={`p-2 max-w-50 md:text-sm font-light rounded-lg 
                        mb-8 break-all bg-violet-500/30 text-white ${
                        message.senderId === "680f50e4f10f3cd28382ecf9" ? 'rounded-br-none' : 'rounded-bl-none'}`}>{message.text}</p>
                    )}
                    <div className='text-center text-xs'>
                        <img src={message.senderId !== "680f50e4f10f3cd28382ecf9" ? assest.profile_martin : assest.avatar_icon} alt='User Avatar' className='w-7 rounded-full' />
                        <p className='text-gray-400'>{formatTime(message.createdAt)}</p>
                    </div>
                </div>
            ))}
            <div ref={scrollEnd} className='pb-2' >

            </div>
        </div>   
        {/* bottom input area */}
        
    </div>
  ) : (
    <div className='h-full flex flex-col justify-center items-center gap-5 text-gray-400 bg-white/10 max-md:hidden'>
        <img className='max-w-16' src={assest.logo_icon}></img>
        <p>Chat anytime, anywhere</p>
    </div>
  )
}

export default ChatContainer
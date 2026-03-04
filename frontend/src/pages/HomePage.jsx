import React from 'react'
import LeftSidebar from '../components/LeftSidebar'
import RightSidebar from '../components/RightSidebar'
import ChatContainer from '../components/ChatContainer'

const HomePage = () => {
  const [selectedUser, setSelectedUser] = React.useState(null);
  return (
    <div className='w-full h-screen border sm:px-[1%] sm:py-[1.5%]'>
        <div className = {`backdrop-blur-xl border-2 border-gray-600 rounded-2xl 
overflow-hidden h-full grid grid-cols-1 relative ${selectedUser ?
'md:grid-cols-[1fr_1.5fr_1fr] xl:grid-cols-[1fr_2fr_1fr]' : 'md:grid-cols-2'}`}>
          <LeftSidebar 
            setSelectedUser={setSelectedUser}
            selectedUser={selectedUser}
          />
          <ChatContainer 
            selectedUser={selectedUser}
            setSelectedUser={setSelectedUser}
          />
          {selectedUser && <RightSidebar 
            selectedUser={selectedUser}
            setSelectedUser={setSelectedUser}
          />}
      </div>
    </div>
  )
}

export default HomePage
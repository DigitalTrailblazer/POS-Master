import React from 'react'

const Loader = () => {
  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-90 flex items-center justify-center z-999">
      <div className="w-14 h-14 border-4 border-white/30 border-t-yellow-400 rounded-full animate-spin shadow-lg"></div>
    </div>
  )
}

export default Loader

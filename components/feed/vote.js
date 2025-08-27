const Vote = () => {
  return (
    <div className='flex flex-col items-center justify-start space-y-1 rounded bg-[#1a1b1c]/80 text-xs text-white'>
      <button className='hover:text-blue-500'>
        <i className='fas fa-chevron-up'></i>
      </button>
      <p className='text-xs font-bold text-white'>12.5k</p>
      <button className='hover:text-red-500'>
        <i className='fas fa-chevron-down'></i>
      </button>
    </div>
  )
}

export default Vote
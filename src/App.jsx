import Particlesbg from './components/Particles';

function App() {

  return (
    <>
      <div className='flex flex-col font-mono border-solid border-red-500 border-1 rounded-sm text-3xl text-red-500 relative bg-white/5 mt-15 w-fit mx-15 px-10 py-2 backdrop-blur-xs z-1'>
      <span className='block m-0 p-0'>Gian Laban</span>
      <span className='text-xs m-0 p-0'>Problem-solving enthusiast and a puzzle lover. Software engineer in the making.<br/>
      </span>
      </div>
      <div className='flex flex-row space-between font-mono border-solid border-red-500/0 border-1 rounded-sm z-10 mt-0 mr-15 px-15 py-0 w-fit sticky'>
        <div className='hover:bg-white/10 flex font-mono border-solid border-red-500 border-1 rounded-sm px-10 py-5 text-red-500 bg-white/5 backdrop-blur-xs'>About</div>
        <div className='hover:bg-white/10 flex font-mono border-solid border-red-500 border-1 rounded-sm px-10 py-5 text-red-500 bg-white/5 backdrop-blur-xs'>Projects</div>
        <div className='hover:bg-white/10 flex font-mono border-solid border-red-500 border-1 rounded-sm px-10 py-5 text-red-500 bg-white/5 backdrop-blur-xs'>Contact</div>
      </div>
      <Particlesbg />
      {/* <video id='background-vid' className='z-0 w-screen h-screen relative backdrop-blur-xs object-cover' loop autoPlay={true} muted>
            <source src="https://cdn.pixabay.com/video/2023/09/02/178908-860734672_large.mp4" type="video/mp4" />
      </video> */}
    </>
  )
}

export default App

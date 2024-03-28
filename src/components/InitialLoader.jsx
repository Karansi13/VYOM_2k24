export default function InitialLoader() {
  return (
    <div className="loader w-screen h-screen bg-black z-[28]  ">
      <video
        src="https://i.imgur.com/86MsBC7.mp4"
        autoPlay
        loop
        muted
        className="w-full h-full object-cover"
      ></video>
    </div>
  );
}


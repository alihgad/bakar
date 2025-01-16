const Load = () => {
    return (
      <div className="flex items-center justify-center  absolute top-0 bottom-0 h-screen  right-0 left-0 ">
        <div className="relative">
          <div className="w-16 h-16 border-4 border-dashed rounded-full animate-pulse border-blue-500"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="block w-8 h-8 bg-blue-500 rounded-full animate-pulse"></span>
          </div>
        </div>
      </div>
    );
  };
  
  export default Load;
  
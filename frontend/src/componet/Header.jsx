import React from 'react';

const Header = () => {
  return (
    <div className="faidIn sm:relative duration-200 min-h-[60vw] sm:min-h-[34vw] bg-[url('/header_img.png')] bg-cover bg-center">
      <div className="h-full  sm:absolute to-25% px-5 sm:px-16 py-10 flex  flex-col gap-4 justify-center">
        
        <h1 className="text-3xl sm:text-6xl font-bold text-white leading-tight">
          Order your favourite food
        </h1>

        <p className="text-white text-sm sm:text-xl sm:w-2/4 w-full">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam 
          asperiores molestiae ipsa velit accusamus, at necessitatibus ab 
          cumque. Repudiandae odit quisquam facere aliquam soluta possimus 
          iure eum assumenda, at natus saepe blanditiis fugit culpa. Enim!
        </p>

        <button className="px-5 py-3 sm:px-7 sm:py-3 bg-black text-white rounded-lg w-fit">
          View Menu
        </button>

      </div>
    </div>
  );
};

export default Header;

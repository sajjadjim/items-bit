import React from 'react';

const Hero = () => {
    return (
        <div>
            <div
  className="hero min-h-screen"
  style={{
    backgroundImage: "url('/Banner-min.jpg')",
  }}>
  <div className="hero-overlay"></div>
<div className='relative md:mr-300'>
<div className="hero-content text-neutral-content ">
    <div className="max-w-md">
      <h1 className="mb-5 text-4xl font-bold text-left">Bid on Unique Items from Around the World</h1>
      <p className="mb-5 text-lg font-extralight text-left">
      Discover rare collectibles, luxury goods, and vintage treasures in our curated auctions
      </p>
      <button className="bg-white text-black font-semibold py-2 px-7 rounded-full cursor-pointer">Explore Auctions</button>
    </div>
  </div>
</div>
</div>
        </div>
    );
};

export default Hero;

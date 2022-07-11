import React from 'react';


const Home = () => {
    return (
        <div className='grid md:grid-cols-2 mt-5 items-center gap-5'>

            <div>
                <img src="https://i.ibb.co/BPt9hmG/bram-naus-N1g-UD-d-Cv-JE-unsplash.jpg" className='rounded-xl ml-3' alt="" />
                <button className='bg-green-500 px-2 py-2 text-white rounded-xl hover:bg-yellow-400 font-mono mt-2'>Shop Now</button>
            </div>

            <div>
                <h1 className='text-5xl text-sky-600'>Your Next Laptop</h1>
                <h1 className='text-5xl text-green-600'>Your Best Choose</h1>
                <h2 className='mt-8 ml-2 indent-2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus, facere? Distinctio totam, tempore labore quibusdam adipisci veritatis nobis! Debitis fugit id necessitatibus minima quisquam magnam.</h2>
                
            </div>
            
            
        </div>
        
    );
};

export default Home;
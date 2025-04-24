import React, { useEffect, useState } from 'react';

const Explore = () => {

    const allImages = [
        {
            id: "1",
            name: "ETHIOPIA",
            image: "/images/pic1.webp"
        },
        {
            id: "2",
            name: "INDIA",
            image: "/images/pic7.webp"
        },
        {
            id: "3",
            name: "SAUDI ARABIA",
            image: "/images/Saudi.webp"
        },
        {
            id: "4",
            name: "SWEDEN",
            image: "/images/Sweden.webp"
        },
        {
            id: "5",
            name: "VENEZUELA",
            image: "/images/Venezuela.webp"
        },
        {
            id: "1",
            name: "SOUTH SUDAN",
            image: "/images/Sudan.webp"
        },
        
       
    ];

    const allculture =[
        {id:"1",
            name:"Buddhism: Theravāda",
            img:"/images/Buddhism.webp"
        },
        {id:"2",
            name:"Christianity: Eastern Orthodox",
            img:"/images/RChristianity-Eastern.webp"
        },
        {id:"3",
            name:"HINDUISM",
            img:"/images/Hinduism.webp"
        },
        {id:"4",
            name:"JUDAISM",
            img:"/images/Judaism.webp"
        },
        {id:"5",
            name:"Christianity: Protestant",
            img:"/images/Christianity.webp"
        },
        
        {id:"6",
            name:"Christianity: Roman Catholic",
            img:"/images/Christianity-Roman.webp"
        },
        
        {id:"7",
            name:"ISLAM",
            img:"/images/Islam.webp"
        },
        

    ];
    
    const [cultureImages,setCultureImages]=useState([]);
    const [randomImages, setRandomImages] = useState([]);

    useEffect(() => {
        const getrandomimages = () => {
            const shuffle = [...allImages].sort(() => 0.5 - Math.random());
            return shuffle.slice(0, 3);
        };

        const randomcul=()=>{
            const culshuffle=[...allculture].sort(()=>0.5-Math.random());
            return culshuffle.slice(0,3);
        };
        setCultureImages(randomcul());
        setRandomImages(getrandomimages());


    }, [])


    return (
        <div className=' flex flex-col items-center w-[88%] m-[10px] '>
            <div >
                <div className='sm:flex block  justify-between items-center my-[20px]'>
                    <h2 className='text-[35px] mb-[20px] font-[600]'>Explore Different Cultures</h2>
                    <span className='text-[18px] font-[600] text-[#157e77]'>VIEW ALL CULTURES</span>
                </div>
                <div className='block sm:flex justify-between sm:gap-[90px]  items-center '>
                    {
                        randomImages.map((img, index) => (
                            <div className='flex mb-[20px] group relative' key={index}>
                                <div className='flex '>
                                    <img src={img.image} alt="" className='h-[245px] rounded filter group-hover:grayscale transition duration-200 w-[360px]' />
                                </div>
                                <div className='absolute left-[20px] bg-black group-hover:bg-[#157e77] p-[10px] px-[15px] top-[20px] '>
                                    <span className='text-[15px] font-[500] text-white '>{img.name }</span>
                                </div>

                            </div>
                        )

                        )

                    }
                </div>

            </div>
            <div >
                <div className='sm:flex block justify-between items-center my-[20px]'>
                    <h2 className='text-[35px] mb-[20px] font-[600]'>Explore Different Cultures</h2>
                    <span className='text-[18px] font-[600] text-[#157e77]'>VIEW ALL CULTURES</span>
                </div>
                <div className='sm:flex block justify-between  sm:gap-[90px]   items-center '>
                    {
                        cultureImages.map((item, index) => (
                            <div className='flex group mb-[20px] w-full relative' key={index}>
                                <div className='flex'>
                                    <img src={item.img} alt="" className='h-[245px] filter group-hover:grayscale transition duration-200 w-[360px]' />
                                </div>
                                <div className='absolute left-[20px] bg-black group-hover:bg-[#157e77] p-[10px] px-[15px] top-[20px] '>
                                    <span className='text-[15px] font-[500] text-white '>{item.name}</span>
                                </div>

                            </div>
                        )

                        )

                    }
                </div>
            </div>



        </div>
    )
}

export default Explore
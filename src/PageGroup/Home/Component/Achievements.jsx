import React from 'react'
import { achievementInTech } from '../../../../data/Achivement'

const Achievements = () => {

    return (
        <>
            <div
                className="group relative col-span-1 flex overflow-hidden rounded-md text-green-800 h-12 "
                style={{marginTop: "30px"}}
            >
                <h3 className="font-semibold" style={{fontSize: "20px", marginLeft: "20px"}}>Achievements</h3>
                <div className="absolute left-3 bottom-2 h-[5px] w-[30px] rounded bg-green-700 transition-all duration-300 group-hover:w-[10%] sm:left-4" />
            </div>

            <div className=" flex w-full flex-col items-center justify-center gap-y-8 font-[450]">
        
                <div className="mt-8 grid w-full grid-cols-1 gap-x-2 gap-y-6 px-6 sm:grid-cols-2 sm:gap-x-6 sm:px-8 md:px-12 lg:px-16">
                    {achievementInTech.map((achievement, i) => (
                        <div
                            className="group relative col-span-1 flex items-center justify-center overflow-hidden rounded-md text-green-800 shadow"
                            key={i}
                        >
                            <div className="flex w-full flex-col gap-y-3 bg-green-light px-4 pl-6 py-4 sm:pl-8 text-sm sm:px-8 md:px-12">
                                <h3 className="font-semibold">{achievement.title}</h3>
                                <p className="text-black">{achievement.description}</p>
                            </div>
                            <div className="absolute left-2 h-[80%] w-[6px] rounded bg-green-700 transition-all duration-300 group-hover:h-[60%] sm:left-4" />
                        </div>
                    ))}
                </div>
            </div>

            <div
                className="mt-3 group relative col-span-1 flex justify-end overflow-hidden rounded-md text-black h-12 "
            >
                <h3 className="font-semibold" style={{fontSize: "20px", marginRight:"30px"}}>View More</h3>
            </div>

        </>
    )
}

export default Achievements
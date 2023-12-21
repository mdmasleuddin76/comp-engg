import React, { useState } from 'react'

const Imagebox = ({title, num}) => {
  
  return (
    <>  
        { 
          title.slice(0, num).map((item) => (
        <div class="border-2 border-green-500 border-solid rounded-lg">
            <img class="h-auto max-w-full rounded-lg" src={item} alt="" />
            <div class="text-center mt-2">
                <span class="text-sm text-gray-600">Republic Day <span class="text-green-deep">, 2023</span></span>
            </div>
        </div>
    ))}
        
    </>
  )
}

export default Imagebox
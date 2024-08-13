import React from 'react'
// import img from 'next/img'

function gallery() {
  return (
    <>
    

<div className="grid grid-cols-2 md:grid-cols-3 gap-4">
    <div className="grid gap-4">
        <div>
            <img className="h-auto max-w-full rounded-lg" src="maa_light1.jpg" alt="your network is poor , plase wait."/>
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src="onshirt.jpg" alt="merimaa.vercel.app"/>
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src="meri-maa2.jpg" alt=""/>
        </div>
    </div>
    <div className="grid gap-4">
        <div>
            <img className="h-auto max-w-full rounded-lg" src="meri-maa1.jpg" alt=""/>
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src="allsketch.jpg" alt=""/>
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src="maalight2.jpg" alt=""/>
        </div>
    </div>
    <div className="grid gap-4">
        <div>
            <img className="h-auto max-w-full rounded-lg" src="salman.jpg" alt=""/>
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src="eye.jpg" alt=""/>
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src="mata.jpg" alt=""/>
        </div>
      
    </div>

   
</div>

    
    </>
  )
}

export default gallery
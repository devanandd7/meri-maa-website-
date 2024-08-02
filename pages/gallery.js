import React from 'react'
import Image from 'next/image'

function gallery() {
  return (
    <>
    

<div class="grid grid-cols-2 md:grid-cols-4 gap-4">
    <div class="grid gap-4">
        <div>
            <Image class="h-auto max-w-full rounded-lg" src="maa_light1.jpg" alt=""/>
        </div>
        <div>
            <Image class="h-auto max-w-full rounded-lg" src="onshirt.jpg" alt=""/>
        </div>
        <div>
            <Image class="h-auto max-w-full rounded-lg" src="meri-maa2.jpg" alt=""/>
        </div>
    </div>
    <div class="grid gap-4">
        <div>
            <Image class="h-auto max-w-full rounded-lg" src="meri-maa1.jpg" alt=""/>
        </div>
        <div>
            <Image class="h-auto max-w-full rounded-lg" src="allsketch.jpg" alt=""/>
        </div>
        <div>
            <Image class="h-auto max-w-full rounded-lg" src="maalight2.jpg" alt=""/>
        </div>
    </div>
    <div class="grid gap-4">
        <div>
            <Image class="h-auto max-w-full rounded-lg" src="salman.jpg" alt=""/>
        </div>
        <div>
            <Image class="h-auto max-w-full rounded-lg" src="eye.jpg" alt=""/>
        </div>
        <div>
            <Image class="h-auto max-w-full rounded-lg" src="mata.jpg" alt=""/>
        </div>
      
    </div>
</div>

    
    </>
  )
}

export default gallery
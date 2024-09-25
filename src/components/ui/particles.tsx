"use client"

import Particles from "@/components/magicui/particles";

export const ParticlesDemo = () =>{
    return(
        <Particles
            className="absolute left-0 top-0 w-full h-full pointer-events-none"
            quantity={200}
            ease={80}
            size={0.8}
            refresh
            color="#FFF"    
        />
    )
}
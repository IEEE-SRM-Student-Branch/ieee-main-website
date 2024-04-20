import React from 'react'

const Hero = () => {
    return (
        <div className="bg-green-100 max-w-screen-2xl mx-auto px-4 py-6 md:px-6 md:py-8 xl:px-8 xl:py-10">
            <section className="relative flex flex-1 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-gray-100 shadow-lg py-36 md:py-48">
                <img
                    src="/assets/Hero.mp4"
                    loading="lazy"
                    alt="IEEE SRM SB"
                    className="absolute inset-0 h-full w-full object-cover object-center"
                />
                <div className="relative flex flex-col items-center p-6 sm:max-w-xl">
                    <h1 className="mb-4 text-center text-4xl font-bold text-white sm:text-5xl md:mb-12 md:text-6xl">
                        I E E E
                    </h1>
                    <div className="animate-bounce text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Hero
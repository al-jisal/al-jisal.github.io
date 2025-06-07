const About = () => {
    
    return (
        <section className="c-space my-20">
            <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <img src="/assets/grid1.png" alt="profile picture of Desmond" className="w-ful sm:h-[276px] h-fit object-contain"/>
                        <div>
                            <p className="grid-headtext">I'm Desmond Frimpong</p>
                            <p className="grid-subtext">
                                With a strong foundation in Computer Science fundamentals, I’m a software engineer who builds  maintainable and
                                reliable software through test-driven development and code documentation, pays great attention to design details
                                for optimized performance, and prioritizes customer needs in product’s development
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <img src="/assets/grid2.png" alt="images of tech stack" className="w-full sm:w-[276px] h-fit object-contain"/>
                        <div>
                            <p className="grid-headtext">Tech Stack </p>
                            <p className="grid-subtext">
                                I have experience in a wide range of technologies, including React, Node.js, Express.js, MongoDB, and more. 
                                I am always eager to learn new technologies and improve my skills.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col-span-1 xl:row-span-4">
                    <div className="grid-container">
                        <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default About;
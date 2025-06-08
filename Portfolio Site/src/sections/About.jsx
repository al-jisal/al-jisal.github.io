import Globe from "react-globe.gl";
import Button from "../components/Button";
import { useState } from "react";

const About = () => { 
    const [hasCopied, setHasCopied] = useState(false);

    const handleCopy = () => {
       navigator.clipboard.writeText("desmond.frimpong@colby.edu");
       setHasCopied(true);
       setTimeout(() => {
              setHasCopied(false);
            }, 2000);
    }
    
    return (
        <section className="c-space my-20" id="about">
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
                            <Globe 
                                height={326}
                                width={326}
                                backgroundColor="rgba(0, 0, 0, 0)"
                                backgroundImageOpacity={0.5}
                                showAtmosphere
                                showGraticules
                                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                                pointsData={[
                                    { lat: 4.88447, lng: -1.75536, size: 0.5, color: 'red' }
                                ]}
                            />
                        </div>
                        <div>
                            <p className="grid-headtext">Where I am</p>
                            <p className="grid-subtext">
                                I am based in Waterville, US. I am open to remote work opportunities 
                                and willing to relocate for the right opportunity.
                            </p>
                            <Button name="Contact Me" isBeam containerClass="w-full mt-10" />
                        </div>
                    </div>
                </div>

                <div className="xl:col-span-2 xl:row-span-3">
                    <div className="grid-container">
                        <img src="/assets/grid3.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain"/>
                        <div>
                            <p className="grid-headtext">My Passion for Algorithmic Thinking</p>
                            <p className="grid-subtext">I love solving problems and building things through code. Programming isn't just my profession:
                                it's my way of contributing to the world.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="xl:col-span-1 xl:row-span-2">
                    <div className="grid-container">
                        <img src="/assets/grid4.png" alt="grid-4" className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"/>
                        <di className="space-y-2">
                            <p className="grid-subtext text-center">Contact Me</p>
                            <div className="copy-container" onClick={handleCopy}>
                                <img src={hasCopied ? '/assets/tick.svg' : '/assets/copy.svg'} alt="copy" />
                                <p className="grid-subtext">
                                    aljisal.frimpong@gmail.com
                                </p>
                            </div>
                        </di>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default About;
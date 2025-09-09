import bg from '../../assets/background.jpg'

const Numbers = () => {
    return (
        <section className="w-screen relative left-1/2 right-1/2 -mx-[50.5vw] h-[400px] px-36 mt-32 flex flex-row bg-cover bg-center" style={{ backgroundImage: `url(${bg})` }}>
            {/* numbers */}
            <div className="w-[50%] flex flex-row justify-start items-end gap-20 pb-20 text-white">
                <div>
                    <h1 className="text-8xl">$14B</h1>
                    <p className='text-xl mt-8'>Funds and syndicates</p>
                </div>
                <div>
                    <h1 className="text-8xl">23k+</h1>
                    <p className='text-xl mt-8'>Raised by active startups</p>
                </div>
            </div>

            {/* title */}
            <div className="w-[50%] flex flex-col justify-center text-white">
                {/* NUMBERS à esquerda */}
                <div className="flex justify-end w-full">
                    <p className="w-[70%] mb-4 text-left">NUMBERS</p>
                </div>
                

                {/* título alinhado à direita */}
                <div className="flex justify-end w-full">
                    <h1 className="w-[70%] text-6xl">
                        Market and build the solutions
                    </h1>
                </div>
            </div>
        </section>
    )
}

export default Numbers
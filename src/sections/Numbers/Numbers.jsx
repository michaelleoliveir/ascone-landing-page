import bg from '../../assets/background.jpg'

const Numbers = () => {
    return (
        <section className="h-[400px] mt-32 flex flex-row bg-cover bg-center" style={{ backgroundImage: `url(${bg})` }}>
        
            {/* numbers */}
            <div className="w-[50%] flex flex-row justify-center items-center gap-20 text-white">
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
            <div className="w-[50%] mt-[-80px] flex flex-col justify-center text-white">
                {/* NUMBERS à esquerda */}
                <div className="flex justify-end w-full">
                    <p className="w-[80%] mb-4 text-left">NUMBERS</p>
                </div>
                
                <div className="flex justify-end w-full">
                    <h1 className="w-[80%] text-6xl">
                        Market and build the solutions
                    </h1>
                </div>
            </div>
            
        </section>
    )
}

export default Numbers
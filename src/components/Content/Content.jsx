import details from '../../assets/details.webp'

export const Content = () => {
    return (
        <section className='flex'>
            {/* text */}
            <div className="w-[50%] mt-15">
                <div className='w-[85%]'>
                    <p className="text-green-800">TRY IT NOW!</p>
                    <h1 className="text-8xl mt-5">Change the way you use your <span className="italic">money</span></h1>
                    <p className="text-xl mt-16">From your everyday spending, to learning for your future with savings and investment, Ascone helps you get more from your money</p>
                    <button className="bg-(--color-green) text-white p-3 px-8 rounded-3xl mt-10 cursor-pointer">Get Started Now</button>
                </div>
            </div>

            {/* picture */}
            <div className="w-[50%] flex items-center justify-center">
                <img src={details} alt="" />
            </div>
        </section>
    )
}

import details from '../../assets/details.webp'

export const Content = () => {
    return (
        <section className='flex'>

            {/* text */}
            <div className="w-[50%] mt-15">
                <div className='w-[85%]'>
                    <p id='miniTitle'>TRY IT NOW!</p>
                    <h1 className="text-8xl mt-5 mb-17">Change the way you use your <span className="italic">money</span></h1>
                    <p id='description'>From your everyday spending, to learning for your future with savings and investment, Ascone helps you get more from your money</p>
                    <button className="mt-10" id='greenButton'>Get Started Now</button>
                </div>
            </div>

            {/* picture */}
            <div className="w-[50%] mt-15 flex">
                <img src={details} alt="" />
            </div>
        </section>
    )
}

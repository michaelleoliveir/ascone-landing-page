import details from '../../assets/details.png';

const Content = () => {
    return (
        <section className='flex items-stretch'>

            {/* text */}
            <div className="w-[60%] mt-10">
                <div className='w-[80%]'>
                    <p id='miniTitle'>TRY IT NOW!</p>
                    <h1 className="text-8xl mt-5 mb-17">Change the way you use your <span className="italic">money</span></h1>
                    <p id='description'>From your everyday spending, to learning for your future with savings and investment, Ascone helps you get more from your money</p>
                    <button className="mt-10" id='greenButton'>Get Started Now</button>
                </div>
            </div>

            {/* picture */}
            <div className="w-[40%] mt-15 flex justify-center items-center">
                <img src={details} alt="" className='h-[530px] w-[530px]' />
            </div>

        </section>
    )
}

export default Content
import data from '../../assets/data.png'

export const AboutUs = () => {
    return (
        <section className="mt-32 flex flex-col items-center text-center">

            {/* text */}
            <div>
                <p id='miniTitle'>ABOUT US</p>
                <h1 className="max-w-2xl" id='title'>One app for all your money things</h1>
                <p className="max-w-[60%] mx-auto text-center" id='description'>Remove all the friction that stands in the way of your money goals.</p>
            </div>

            {/* picture */}
            <div>
                <img src={data} alt="" className='w-[90%] block m-auto mt-14' />
            </div>
        </section>
    )
}

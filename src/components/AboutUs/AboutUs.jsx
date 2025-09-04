import data from '../../assets/data.png'

export const AboutUs = () => {
    return (
        <div className="mt-32 flex flex-col items-center justify-center text-center">
            <div>
                <p className="text-green-800 font-medium">ABOUT US</p>
                <h1 className="text-6xl mt-8 max-w-2xl mx-auto text-center font-semibold">One app for all your money things</h1>
                <p className="text-[1.2rem] text-gray-500 mt-8 max-w-[60%] mx-auto text-center">Remove all the friction that stands in the way of your money goals.</p>
            </div>
            <div>
                <img src={data} alt="" className='w-[90%] block m-auto mt-14' />
            </div>
        </div>
    )
}

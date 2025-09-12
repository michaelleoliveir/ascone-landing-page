import image from '../../assets/getToKnow.png'

const GetStarted = () => {
    return (
        <section className='mt-32 flex flex-row bg-(--color-green)'>

            {/* text */}
            <div className='flex flex-col w-[60%] items-center justify-center'> 
                <div className='w-[80%]'>
                    <h1 className='text-7xl font-semibold text-white'>Change the way you use your <i>money</i></h1>
                    <p className="w-[60%] text-gray-300 text-xl my-8 font-light">Join over a million people who choose Ascone for fast and secure future banking</p>
                    <button className="bg-white text-(--color-green) font-medium py-4 px-8 rounded-full mt-4 cursor-pointer hover:bg-gray-100">
                        <a href="#">Get Started Now</a>
                    </button>
                </div>
            </div>

            {/* image */}
            <div className='w-[40%] flex justify-end'>
                <img src={image} alt="Descrição da imagem" />
            </div>
            
        </section>
    )
}

export default GetStarted
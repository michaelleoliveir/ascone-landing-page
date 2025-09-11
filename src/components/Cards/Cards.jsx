import { useState, cloneElement } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { MoveUpRight } from 'lucide-react';
import { cardData } from './cardData';

const Cards = () => {
    const [expandedIndex, setExpandedIndex] = useState(null);

    const handleCardClick = (index) => {
        setExpandedIndex(index === expandedIndex ? null : index);
    };

    const cardVariants = {
        expanded: {
            width: "600px",
            transition: {
                duration: 0.7,
                ease: "easeInOut"
            }
        },
        collapsed: {
            width: '420px',
            transition: {
                duration: 0.7,
                ease: "easeInOut"
            }
        }
    };

    return (
        <div className='mt-18 flex md:flex-row justify-center gap-10'>
            {cardData.map((card, index) => (
                <motion.div
                    key={index}
                    className={`card cursor-pointer h-[500px] border-2 ${index === expandedIndex ? 'bg-(--color-beige) border-(--color-beige) rounded-tr-[10rem]' : 'bg-white border-gray-200'}`}
                    variants={cardVariants}
                    initial="collapsed"
                    animate={index === expandedIndex ? 'expanded' : 'collapsed'}
                    onClick={() => handleCardClick(index)}
                >
                    <div className="flex flex-col h-full">
                        <div className="flex flex-col justify-center h-full px-4 w-[80%] mx-auto">
                            <div className='mb-13'>
                                {cloneElement(card.icon, {
                                    color: index === expandedIndex ? '#022f30' : 'black',
                                    size: 52,
                                })}
                            </div>
                            <h1 className={`text-2xl font-semibold py-4 text-left ${index === expandedIndex ? 'text-(--color-green)' : 'text-black'}`}>
                                {card.title}
                            </h1>
                            <p className={`text-left text-xl w-full ${index === expandedIndex ? 'text-(--color-green)' : 'text-gray-500'}`}>
                                {card.description}
                            </p>
                            <button className={`mt-18 self-start p-4 rounded-[50%] ${index === expandedIndex ? 'bg-(--color-green)' : 'border-2 border-gray-200'} cursor-pointer`}>
                                <MoveUpRight color={`${index === expandedIndex ? 'white' : 'black'}`} />
                            </button>
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
    );
};

export default Cards;
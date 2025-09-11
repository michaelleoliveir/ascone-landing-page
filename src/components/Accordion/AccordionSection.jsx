import { AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const AccordionSection = ({ id, title, text  }) => {
    return (
        <AccordionItem value={`item-${id}`}>
            <AccordionTrigger className='text-3xl p-8 hover:no-underline hover:cursor-pointer'>{title}</AccordionTrigger>
            <AccordionContent className='text-lg px-8 mb-3 text-gray-600'>
                <p>{text}</p>
            </AccordionContent>
        </AccordionItem>
    )
}

export default AccordionSection
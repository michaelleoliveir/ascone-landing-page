import { Accordion } from "@/components/ui/accordion"
import AccordionSection from "./Accordion/AccordionSection"
import { accordionContent } from "./accordionData"

const Faq = () => {
    return (
        <section className="flex flex-row mt-32">

            {/* text */}
            <header className="w-[40%]">
                <p id="miniTitle">FAQ</p>
                <h1 id="title">Frequently asked questions</h1>
            </header>

            {/* accordion */}
            <div className="w-[60%]">
                <Accordion type='single' collapsible>
                    {accordionContent.map((content) => (
                        <AccordionSection key={content.id} id={content.id} text={content.text} title={content.title} />
                    ))}
                </Accordion>
            </div>
        </section>
    )
}

export default Faq
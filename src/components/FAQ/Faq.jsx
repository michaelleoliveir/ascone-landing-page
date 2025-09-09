import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const Faq = () => {
    return (
        <div className="flex flex-row mt-32">

            {/* text */}
            <div className="w-[50%]">
                <p id="miniTitle">FAQ</p>
                <h1 id="title">Frequently asked questions</h1>
            </div>

            {/* accordion */}
            <div className="w-[50%]">
                <Accordion type='single' collapsible>
                    <AccordionItem value='item-1'>
                        <AccordionTrigger>How sending a bank transfer</AccordionTrigger>
                        <AccordionContent>
                            <p>Sending a bank transfer is fast, simple, and secure: just log in to your account, choose the recipient, enter the amount, confirm the details, and your money is on its way—available 24/7 through our online platform with advanced encryption to keep every transaction safe.</p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value='item-2'>
                        <AccordionTrigger>What is the scheduled payments feature?</AccordionTrigger>
                        <AccordionContent>
                            <p>The scheduled payments feature allows you to manage all of your subscriptions or recurring payments in one place. This way, you can view details for every payment, which include the amount, frequency, payment dates etc</p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value='item-3'>
                        <AccordionTrigger>How can I reactivate a terminated card?</AccordionTrigger>
                        <AccordionContent>
                            <p>Reactivating a terminated card is simple. Log in to your online banking or mobile app, navigate to “Cards & Services”, and select the card you wish to reactivate. If the card is eligible, you’ll see the option to “Reactivate Card”—confirm your details, and your card will be restored for immediate use.</p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value='item-4'>
                        <AccordionTrigger>How about with a refund?</AccordionTrigger>
                        <AccordionContent>
                            <p>If your card was terminated while a refund was being processed, don’t worry—the refund will still be credited to your original account. In most cases, the money will automatically return to your linked bank account, even if the card is no longer active. If the account is closed or unavailable, our support team will contact you to arrange an alternative method of receiving your funds.</p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value='item-5'>
                        <AccordionTrigger>How can add money to my account?</AccordionTrigger>
                        <AccordionContent>
                            <p>Adding money to your account is quick and flexible—you can make a deposit through bank transfer, set up a direct deposit from your employer, use our mobile app to deposit checks, or visit one of our partner branches and ATMs. Once the funds are added, they’ll be available for use right away, giving you fast and convenient access to your money anytime.</p>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </div>
    )
}

export default Faq
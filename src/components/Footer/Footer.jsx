import { sectionAccount, sectionCompany, sectionFinance, sectionHelp } from "./footerSections"
import Sections from "../Sections/Sections"

const Footer = () => {
    return (
        <footer className="mt-32">

            {/* navigation */}
            <div className="h-85 flex flex-row justify-between">
            
                {/* sections */}
                <div className="flex flex-row">
                    <Sections title={'Account'} links={sectionAccount} />
                    <Sections title={'Help'} links={sectionHelp} />
                    <Sections title={'Finance'} links={sectionFinance} />
                    <Sections title={'Company'} links={sectionCompany} />
                </div>

                {/* company */}
                <div>
                    {/* title */}
                    <div>
                        <h1 className="text-9xl mb-14 mt-[-0.7rem] font-bold text-(--color-green-title)">Ascone</h1>
                    </div>

                    {/* address */}
                    <div className="flex flex-row justify-between text-gray-500">
                        <div>
                            <p>181 Bay StreetBay Wellington</p>
                            <p>Tower, Suite 292 Toronto</p>
                            <p>OntarioM5J 2T3</p>
                        </div>

                        <div>
                            <p>English (UK)</p>
                        </div>
                    </div>
                </div>
            </div>

            <hr className="text-gray-300" />

            {/* credits */}
            <div className="flex flex-row justify-between py-7">
                <div>
                    <p className="text-gray-500">© Ascone Finance Ltd 2025.</p>
                </div>

                <div className="flex flex-row font-medium gap-15">
                    <p>Privacy Policy</p>
                    <p>Terms of Use</p>
                    <p>Disclosure</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
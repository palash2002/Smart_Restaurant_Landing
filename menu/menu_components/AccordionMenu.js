import React from 'react';
import Cards from './Cards';
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
} from '@chakra-ui/react'

export default function AccordionMenu() {

    const foodType = ["sdfkjn", "sjdfn", "sejf-kaejfbljb", "ksjdoijwp-ojoijoijoijoij"];

    const accordionMenu = <Accordion defaultIndex={[]} allowMultiple>
        {foodType.map((foodTypeName) => (
                <AccordionItem>
                    <h2>
                    <Box margin={2}>
                        <AccordionButton>
                            <Box flex='1' textAlign='left' fontSize={"larger"} fontWeight={"bold"}>
                                {foodTypeName}
                            </Box>
                            <AccordionIcon/>
                        </AccordionButton>
                        </Box>
                    </h2>
                    <AccordionPanel pb={4}>
                        <Cards/>
                    </AccordionPanel>
                </AccordionItem>
            ))}
    </Accordion>

    return (
        <div className="accordion-menu">
            {accordionMenu}
        </div>
    );
}
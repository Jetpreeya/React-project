import React, {useState} from "react";
import { Container } from "../jumbotron/styles/jumbotron";

export default function Accordion ({children, ...resProps}) {
    return (
        <Container {...restProps}>
            <Inner>{children}</Inner>
        </Container>
    );
}
Accordion.Title = function AccordionTitle
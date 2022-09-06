import { Page, PageContent, Paragraph } from "grommet";
import { Favorite, ShareOption } from "grommet-icons";
import React from "react";

function Portfolio() {
    return (
        <>
            <Page kind="wide">
            <PageContent background="light-3">
                <Paragraph>
                Project 1 
                </Paragraph>
            </PageContent>
            </Page>
            <Page kind="wide">
            <PageContent background="light-3">
                <Paragraph>
                Project 2
                </Paragraph>
            </PageContent>
            </Page>
            <Page kind="wide">
            <PageContent background="light-3">
                <Paragraph>
                Project 3
                </Paragraph>
            </PageContent>
            </Page>

        </>
    )
}

export default Portfolio;
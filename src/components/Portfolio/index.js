import { Page, PageContent, Anchor, Button, PageHeader, Image, Box, Paragraph } from "grommet";
import React from "react";
import { Github } from "grommet-icons";
import imageJag from '../../assets/images/jaguar-games-home.jpg'
import imageStat from '../../assets/images/stats-buddy.jpg'
function Portfolio() {
    return (
        <>
            <Page kind="wide" pad='small'>
            <PageContent background="dark-3"  elevation="medium">
            <PageHeader
                title="Stats Buddy"
                subtitle=<Box width='small'> <Button border='brand' label="Visit Page" /> <Button border='brand'label=<Github/> /></Box>
                actions={ <Box><Image fit="contain"
                src={imageStat} /></Box> }
            />
            <Paragraph>An application for cataloging and managing a baseball league with individual player and team stats. Full Stack, JavaScript, HandleBars</Paragraph>
            </PageContent>
            </Page>
            <Page kind="wide" pad='small'>
            <PageContent background="dark-3" elevation="medium">
            <PageHeader
                title="Jaguar Games"
                subtitle=<Box width='small'> <Button border='brand' label="Visit Site" /> <Button border='brand'label=<Github/> /></Box>
                parent={<Anchor label="" />}
                actions={<Box height="small" width="small"><Image fit="contain"
                src={imageJag} /></Box>}
            />
            <Paragraph>A central hub for users to organize their favorite games and search through todays most popular games. Full Stack, M.E.R.N.</Paragraph>
            </PageContent>
            </Page>
            <Page kind="wide" pad='small'>
            <PageContent background="dark-3" elevation="medium">
            <PageHeader
                title="Meal Maker"
                subtitle=<Box width='small'> <Button border='brand' label="Visit Site" /> <Button border='brand'label=<Github/> /></Box>
                parent={<Anchor label="" />}
                actions={<Box height="small" width="small"><Image fit="contain"
                src={imageJag} /></Box>}
            />
            <Paragraph>A simple app built for generating a list of helpful recipe ideas through using helpful online API's. HTML, Materialize, JavaScript</Paragraph>
            </PageContent>
            </Page>

        </>
    )
}

export default Portfolio;
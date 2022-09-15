import { Page, PageContent, Anchor, Button, PageHeader, Image, Box, Paragraph } from "grommet";
import React from "react";
import { Github } from "grommet-icons";
import imageJag from '../../assets/images/jaguar-games-home.jpg'
import imageStat from '../../assets/images/stats-buddy.jpg'
import imageMeal from '../../assets/images/meal-maker.png'
function Portfolio() {
    return (
        <Box height={{ min: 'medium' }} pad={{ vertical: 'large' }} border='between'>
            <Page wrap kind="wide" pad='small' >
            <PageContent background="#cdd9eb"  elevation="medium" round='large'>
            <PageHeader
                title='Stats Buddy'
                subtitle=<Box width='small'> <Button margin="small" href="https://nameless-taiga-18247.herokuapp.com/" border='brand' label="Visit Page" alignSelf="center" /> <Button href="https://github.com/SafteyDav3/stats-buddy" alignSelf="center" border='brand'label=<Github/> /></Box>
                actions={ <Box height="small" width="small"><Image fit="contain"
                src={imageStat} /></Box> }
            />
            <Paragraph>An application for cataloging and managing a baseball league with individual player and team stats. Full Stack, JavaScript, HandleBars</Paragraph>
            </PageContent>
            </Page>
            <Page wrap kind="wide" pad='small'>
            <PageContent background="#cdd9eb" elevation="medium" round='large'>
            <PageHeader
                title="Jaguar Games"
                subtitle=<Box width='small'> <Button margin='small' href="https://jaguar-games.herokuapp.com/" border='brand' label="Visit Site" alignSelf="center" /> <Button href="https://github.com/mcmahonmike/jaguar-games" alignSelf="center" border='brand'label=<Github/> /></Box>
                actions={<Box height="small" width="small"><Image fit="contain"
                src={imageJag} /></Box>}
            />
            <Paragraph>A central hub for users to organize their favorite games and search through todays most popular games. Full Stack, M.E.R.N.</Paragraph>
            </PageContent>
            </Page>
            <Page wrap kind="wide" pad='small'>
            <PageContent background="#cdd9eb" elevation="medium" round='large'>
            <PageHeader
                title="Meal Maker"
                subtitle=<Box width='small'> <Button margin='small' href="https://mcmahonmike.github.io/meal-maker/" border='brand' label="Visit Site" alignSelf="center" /> <Button href="https://github.com/mcmahonmike/meal-maker" alignSelf="center" border='brand'label=<Github/> /></Box>
                actions={<Box height="small" width="small"><Image fit="contain"
                src={imageMeal} /></Box>}
            />
            <Paragraph>A simple app built for generating a list of helpful recipe ideas through using helpful online API's. HTML, Materialize, JavaScript</Paragraph>
            </PageContent>
            </Page>

        </Box>
    )
}

export default Portfolio;
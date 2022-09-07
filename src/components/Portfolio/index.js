import { Page, PageContent, Anchor, Button, PageHeader, Image, Box } from "grommet";
import React from "react";
import image from '../../assets/images/IMG_1344.jpg'
function Portfolio() {
    return (
        <>
            <Page kind="wide" pad='small'>
            <PageContent background="light-3"  elevation="medium">
            <PageHeader
                title="Stats Buddy"
                subtitle="JavaScript, HandleBars"
                parent={<Anchor label="" />}
                actions={ <Box height="small" width="small"><Image fit="contain"
                src={image} /></Box> }
            />
            </PageContent>
            </Page>
            <Page kind="wide" pad='small'>
            <PageContent background="light-3" elevation="medium">
            <PageHeader
                title="Jaguar Games"
                subtitle="M.E.R.N"
                parent={<Anchor label="" />}
                actions={<Box height="small" width="small"><Image fit="contain"
                src={image} /></Box>}
            />
            </PageContent>
            </Page>
            <Page kind="wide" pad='small'>
            <PageContent background="light-3" elevation="medium">
            <PageHeader
                title="Stats Buddy"
                subtitle="JavaScript, HandleBars"
                parent={<Anchor label="" />}
                actions={<Box height="small" width="small"><Image fit="contain"
                src={image} /></Box>}
            />
            </PageContent>
            </Page>

        </>
    )
}

export default Portfolio;
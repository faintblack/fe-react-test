// import React from 'react'
// import BreadCrumbsComp from './components/breadcrumbs'
// import Typography from '@mui/material/Typography'
import BreadCrumbsComp from '../components/breadcrumbs';
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';

const Home = () => {
  return (
    <>
      <BreadCrumbsComp data={[
        {
          title: 'Dashboard',
          underline: 'none',
          color: 'inherit',
          href: "/",
        },
      ]}/>
      <Typography variant="h3" align='left' gutterBottom>
        Dashboard
      </Typography>
      {/* List Item */}
      <Card sx={{ maxWidth: '90%' }}>
        <CardActionArea sx={{ display: 'flex' }} onClick={() => console.log('masuk pak')}>
          <CardMedia
            component="img"
            height="120"
            image="/src/img/panda-img.jpg"
            alt="panda"
            sx={{ maxWidth: '120px' }}
          />
          <CardContent sx={{ flex: 5 }} >
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over 6,000
              species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
        {/* <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
        </CardActions> */}
      </Card>
    </>
  )
}

export default Home

import React from 'react';
import {Typography,Button, Box, Card, CardActions, CardMedia, CardContent, CssBaseline, Toolbar, Grid, Container, AppBar } from "@material-ui/core";
import {PhotoCamera} from "@material-ui/icons";
import useStyles from './styles.js';
const App= () => {
  const classes= useStyles();
  const arrayCards=[1,2,3,4,5,6,7,8,9];
  return (
   <>
   <CssBaseline/>
   <AppBar position='relative'>
    <Toolbar>
      <PhotoCamera className={classes.icons}/>
      <Typography variant='h6'>Photo Album</Typography>
    </Toolbar>
   </AppBar>
   <main>
    <Box className={classes.container}>
      <Container maxWidth='sm'>
        <Typography variant='h1' align='center' color='textSecondary' gutterBottom>
         Hello
         </Typography>
         <Typography variant='h5' align='center' color='textPrimary' paragraph>
          This is a sample photo album app made using react nad material UI. This is beginner friendly and very easy to learn .
         </Typography>
         <div className={classes.buttons}>
             <Grid container spacing={4} justifyContent='center'>
                <Grid item>
                   <Button variant='contained' color='secondary'>
                      Check My Photos
                   </Button>
                </Grid>
             </Grid>
         </div>
      </Container>
    </Box>
      <Container className={classes.cardGrid} maxWidth='md' >
          <Grid cotainer spacing={6}>
            {arrayCards.map((card) => (
            <Grid item key={card} xs={12} sm={6} md={4} >
                <Card className={classes.card}>
                  <CardMedia
                      className={classes.cardMedia}
                      img="https://preview.redd.it/ikai8t3zdls51.jpg?auto=webp&s=23e1be3ea84a8a53b2400f6501390d433e3e4363"
                      title='Image Title'
                      alt='random'
                      component='img'
                     />
                     <CardContent className={classes.cardContent} >
                        <Typography variant='h4' gutterbottom>
                           This is the heading.
                        </Typography>
                           <Typography>
                               This is a random description of the image given above since the program is still in early
                           </Typography>
                     </CardContent>
                     <CardActions>
                      <Button size='small' variant="contained" color='secondary'>View</Button>
                      <Button size='small' variant='contained' color='secondary'>Edit</Button>
                     </CardActions>
                </Card>
            </Grid>
            ))}
          </Grid>
      </Container>
   </main>
   </>
  );
}

export default App;

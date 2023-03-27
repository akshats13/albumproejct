import { makeStyles } from '@material-ui/core/styles';

const useStyles= makeStyles((theme) => ({ 
container: {
backgroundColor: theme.palette.background.paper,
},
icons: {
marginRight:'20px'
},
buttons: {
marginTop:'10%'
},
cardGrid:{
padding:'20px 20px'
},
card:{
height:'100%',
display:'flex',
flexDirection:'column'
},
cardMedia:{
    paddingTop:'56.25%'
},
cardContent:{
flexGrow:1,
},
}));

export default useStyles;
import { makeStyles } from "@material-ui/core";

export default makeStyles((theme)=>({
    grid:{
        flexGrow:1,
        paddingLeft:"16px",
        width:'100%'
    },
    rating:{
        color:"#37474F",
        display:"flex", 
      },
      mediaDiv:{
        // padding:"0px 16px 16px 16px",
        display:"flex",
        justifyContent:"center",
      },
      image: {
        height:"400px",
        width:"300px" // 4:3
      }
}));
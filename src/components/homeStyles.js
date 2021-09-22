import { makeStyles } from "@material-ui/core";

export default makeStyles((theme)=>({
    root: {
        maxWidth: 345,
      },
      header : {
          paddingLeft:"23px"
      },
      grid:{
        flexGrow:1,
        paddingLeft:"30px",
        width:'100%'
    },
      mediaDiv:{
        padding:"0px 16px 16px 16px",
        display:"flex",
        justifyContent:"center",
      },
      media: {
        height:"320px",
        width:"240px" // 16:9
      },
      rating:{
        color:"#37474F",
        paddingLeft:"23px",
        display:"flex", 
      },
      cardaction:{
        paddingLeft:"23px",
      },
}));
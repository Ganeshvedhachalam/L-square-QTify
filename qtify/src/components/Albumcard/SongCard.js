import { Card, CardContent, CardMedia, Chip, Typography } from "@mui/material";

function SongCard({ album }) {
  return (
    <Card sx={{ maxWidth: 250, backgroundColor: "transparent", display: "flex", 
    flexDirection: "column", alignItems: "center", marginBottom: 2 }}>
      <CardMedia
        component="img"
        image={album.images[0].url}
        alt={album.name}
        sx={{ height: 300, width: 300, objectFit: 'cover' }}
      />
      <CardContent style={{padding:0 }}>
      
        <div style={{ display: "flex", justifyContent: "center",backgroundColor:"white" ,minWidth:"300px"}}>

          <Chip color="primary" label={`${album.name}`} size="large"
           variant="filled" clickable style={{ width: 100, marginRight: 0 }} />
           
        </div>

       
      </CardContent>
      <Typography gutterBottom variant="h6" component="div" color="white" align="center">
          {album.name}
        </Typography>
    </Card>
  );
}
 export default SongCard;
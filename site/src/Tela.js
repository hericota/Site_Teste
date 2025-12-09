import React from "react";
import { Box, Button,Typography,stack} from "@mui/material";

export default function Tela() {
    return (
        <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Box sx={{ width: "100vw", height: "10vh", backgroundColor: "#050629ff",display:"flex",flexDirection:"row",gap:"100px"}}>
                <Box sx={{}}><Button size="large"><Typography fontSize="40px">HOME</Typography></Button>
                <Button size="large"><Typography fontSize="40px">SOBRE</Typography></Button>
                <Button size="large"><Typography fontSize="40px">COMPRAR</Typography></Button>
                <Button size="large"><Typography fontSize="40px">CONTATO</Typography></Button>
                </Box>
            </Box>
            <Box sx={{ width: "100vw", height: "70vh", backgroundColor: "#040218ff",paddingTop:"2%",display:"flex",flexDirection:"column", alignItems:"center"}}>
                <Box sx={{height:"35%",width:"95%",backgroundColor:"rgba(0, 0, 0, 1)",borderRadius:"1rem"}}><Box sx={{marginLeft:"10px",paddingTop:"10px"}}><Typography marginLeft="10px" marginTop="px" fontSize="100%" color="#1976d2">Ao contrário do que se acredita, Lorem Ipsum não é simplesmente um texto randômico. Com mais de 2000 anos, suas raízes podem ser encontradas em uma obra de literatura latina clássica datada de 45 AC. Richard McClintock, um professor de latim do Hampden-Sydney College na Virginia, pesquisou uma das mais obscuras palavras em latim, consectetur, oriunda de uma passagem de Lorem Ipsum, e, procurando por entre citações da palavra na literatura clássica, descobriu a sua indubitável origem. Lorem Ipsum vem das seções 1.10.32 e 1.10.33 do "de Finibus Bonorum et Malorum" (Os Extremos do Bem e do Mal), de Cícero, escrito em 45 AC. Este livro é um tratado de teoria da ética muito popular na época da Renascença. A primeira linha de Lorem Ipsum, "Lorem Ipsum dolor sit amet..." vem de uma linha na seção 1.10.32.</Typography></Box>
                </Box>
                <Box sx={{height:"35%",width:"95%",backgroundColor:"rgba(0, 0, 0, 1)",borderRadius:"1rem",marginTop:"10px"}}><Box sx={{marginLeft:"10px",paddingTop:"10px"}}><Typography marginLeft="10px" marginTop="px" fontSize="100%" color="#1976d2">Ao contrário do que se acredita, Lorem Ipsum não é simplesmente um texto randômico. Com mais de 2000 anos, suas raízes podem ser encontradas em uma obra de literatura latina clássica datada de 45 AC. Richard McClintock, um professor de latim do Hampden-Sydney College na Virginia, pesquisou uma das mais obscuras palavras em latim, consectetur, oriunda de uma passagem de Lorem Ipsum, e, procurando por entre citações da palavra na literatura clássica, descobriu a sua indubitável origem. Lorem Ipsum vem das seções 1.10.32 e 1.10.33 do "de Finibus Bonorum et Malorum" (Os Extremos do Bem e do Mal), de Cícero, escrito em 45 AC. Este livro é um tratado de teoria da ética muito popular na época da Renascença. A primeira linha de Lorem Ipsum, "Lorem Ipsum dolor sit amet..." vem de uma linha na seção 1.10.32.</Typography></Box>
                </Box>
            </Box>
            <Box sx={{ width: "100vw", height: "15.9vh", backgroundColor: "#080427ff", }}>
                <Box sx={{ display: "flex", flexDirection: "row",alignItems:"center",paddingLeft:"10px"}}>
                    <Typography fontSize="60px">BATATA</Typography>
                    <Typography fontSize="60px">BATATA</Typography>
                </Box>
            </Box>
        </Box>
            );
}

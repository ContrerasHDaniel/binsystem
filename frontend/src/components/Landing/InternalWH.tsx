import React, { useState } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import { Paper, Typography } from "@material-ui/core";
import { Container } from "./Container";
import { PresentToAll } from "@material-ui/icons";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      borderColor: "#fff",
    },
    cardMobiliario: {
      backgroundColor: "#fff",
      borderStyle: "solid",
      borderColor: "black",
      height: 60,
    },
    textMobiliario: {
      textAlign: "center",
      fontSize: 18,
    },
    textoExterior: {
      textAlign: "center",
      fontSize: 12,
    },
    cardCharger: {
      fontSize: 12,
      borderStyle: "solid",
      borderColor: "black",
      height: 50,
    },
    shippingArea: {
      marginTop: 60,
    },
    cardShipping: {
      height: 165,
      minHeight: 165,
      borderStyle: "solid",
      borderColor: "black",
    },
    buttonEmpty: {
      margin: theme.spacing(1),
      width: 100,
      minWidth: 100,
      height: 50,
      minHeight: 50,
    },
    buttonB01B02: {},
    buttonFull: {
      margin: theme.spacing(1),
      width: 150,
      minWidth: 150,
      backgroundColor: "#e8ce71",
      height: 50,
      minHeight: 50,
    },
  })
);

export interface Props {
  containers: Container[];
  originMaterialID: number;
  setOriginMaterialID: any;
  setOriginContainerID: any;
  setDestContainerID: any;
  handleAlertOpen: any;
  handleConfirmDialogOpen: any;
}

const InernalWH = ({
  containers,
  setOriginMaterialID,
  setOriginContainerID,
  originMaterialID,
  setDestContainerID,
  handleAlertOpen,
  handleConfirmDialogOpen,
}: Props) => {
  const classes = useStyles();

  const [buttonSelected, setButtonSelected] = useState(0);

//   const handleSelectDest = async (containerID: string) => {
//     if (originMaterialID) {
//       setDestContainerID(containerID);
//       handleConfirmDialogOpen();
//     } else {
//       handleAlertOpen();
//     }
//   };

//   const handleSelectOrigin = (
//     currentButton: number,
//     materialID: number,
//     containerID: string
//   ) => {
//     if (buttonSelected !== 0) {
//       setOriginMaterialID(0);
//       setOriginContainerID("");
//       setButtonSelected(0);
//     } else {
//       setOriginContainerID(containerID);
//       setOriginMaterialID(materialID);
//       setButtonSelected(currentButton);
//     }
//   };

  return (
    <Grid container spacing={3}>
      <Grid item xs={2}>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <Typography className={classes.textoExterior}>
              Area izquierda
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Card className={classes.cardMobiliario}>
              <Typography className={classes.textMobiliario}>SW 1</Typography>
            </Card>
          </Grid>
        </Grid>
        <Grid container spacing={1}>
          <Grid item xs={8}>
            <Typography className={classes.textoExterior}>
              Shipping Area
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Card className={classes.cardCharger}>
              <Typography className={classes.textoExterior}>Charger</Typography>
            </Card>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <Typography className={classes.textoExterior}>
              Area izquierda
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Card className={classes.cardMobiliario}>
              <Typography className={classes.textMobiliario}>HF</Typography>
            </Card>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={6}></Grid>
          <Grid item xs={6}>
            <Card className={classes.cardMobiliario}>
              <Typography className={classes.textMobiliario}>HF</Typography>
            </Card>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <Typography className={classes.textoExterior}>
              External Lodles Pre-Hatcher
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Card className={classes.cardMobiliario}>
              <Typography className={classes.textMobiliario}>SW 2</Typography>
            </Card>
          </Grid>
        </Grid>
        <Grid container spacing={1}>
          <Grid item xs={8}></Grid>
          <Grid item xs={4}>
            <Card className={classes.cardCharger}>
              <Typography className={classes.textoExterior}>Charger</Typography>
            </Card>
          </Grid>
        </Grid>
        <Grid container className={classes.shippingArea}>
          <Grid item xs={8}>
            <Card className={classes.cardShipping}>
              <Typography className={classes.textoExterior}>
                Shipping area
              </Typography>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card className={classes.cardCharger}>
              <Typography className={classes.textoExterior}>
                Material Stock
              </Typography>
            </Card>
            <Card className={classes.cardCharger}>
              <Typography className={classes.textoExterior}>
                Tooling Stock
              </Typography>
            </Card>
            <Card className={classes.cardCharger}>
              <Typography className={classes.textoExterior}>MAINT.</Typography>
            </Card>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={9}>
        <Grid container spacing={1}>
          <Grid item xs={2}>
            <Card className={classes.cardMobiliario}>
              <Typography className={classes.textoExterior}>
                Dross Cooler
              </Typography>
            </Card>
          </Grid>
          <Grid item xs={2}>
            <Card className={classes.cardMobiliario}>
              <Typography className={classes.textoExterior}>
                Rotory Furnace 1
              </Typography>
            </Card>
          </Grid>
          <Grid item xs={2}>
            <Card className={classes.cardMobiliario}>
              <Typography className={classes.textoExterior}>
                Rotory Furnace 2
              </Typography>
            </Card>
          </Grid>
          <Grid item xs={2}></Grid>
          <Grid item xs={2}>
            <Button
              id="B01"
              variant="contained"
              color="default"
              className={classes.buttonEmpty}
              startIcon={<PresentToAll></PresentToAll>}
            >
              B01
            </Button>
          </Grid>
          <Grid item xs={2}>
            <Button
              variant="contained"
              color="default"
              className={classes.buttonEmpty}
              startIcon={<PresentToAll></PresentToAll>}
            >
              B02
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Paper elevation={0} className={classes.paper}></Paper>
          </Grid>
          <Grid item xs={8}></Grid>
          <Grid item xs={4}>
            <Grid container>
              <Grid item xs={6}>
                <Button
                  variant="contained"
                  color="default"
                  className={classes.buttonEmpty}
                  startIcon={<PresentToAll></PresentToAll>}
                >
                  B03
                </Button>
              </Grid>
              <Grid item xs={6}>
                <Button
                  variant="contained"
                  color="default"
                  className={classes.buttonEmpty}
                  startIcon={<PresentToAll></PresentToAll>}
                >
                  B04
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={1}></Grid>
          <Grid item xs={6}>
            <Grid container>
              <Grid item xs={4} key={"B03"}>
                <Button
                  variant="contained"
                  color="default"
                  className={classes.buttonEmpty}
                  startIcon={<PresentToAll></PresentToAll>}
                >
                  B05
                </Button>
              </Grid>
              <Grid item xs={4} key={"B03"}>
                <Button
                  variant="contained"
                  color="default"
                  className={classes.buttonEmpty}
                  startIcon={<PresentToAll></PresentToAll>}
                >
                  B06
                </Button>
              </Grid>
              <Grid item xs={4} key={"B04"}>
                <Button
                  variant="contained"
                  color="default"
                  className={classes.buttonEmpty}
                  startIcon={<PresentToAll></PresentToAll>}
                >
                  B07
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={1}></Grid>
          <Grid item xs={4}>
            <Grid container>
              <Grid item xs={6}>
                <Button
                  variant="contained"
                  color="default"
                  className={classes.buttonEmpty}
                  startIcon={<PresentToAll></PresentToAll>}
                >
                  B08
                </Button>
              </Grid>
              <Grid item xs={6}>
                <Button
                  variant="contained"
                  color="default"
                  className={classes.buttonEmpty}
                  startIcon={<PresentToAll></PresentToAll>}
                >
                  B09
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Paper elevation={0} className={classes.paper}></Paper>
          </Grid>
          <Grid item xs={1}></Grid>
          <Grid item xs={6}>
            <Grid container>
              <Grid item xs={4} key={"B03"}>
                <Button
                  variant="contained"
                  color="default"
                  className={classes.buttonEmpty}
                  startIcon={<PresentToAll></PresentToAll>}
                >
                  B10
                </Button>
              </Grid>
              <Grid item xs={4} key={"B03"}>
                <Button
                  variant="contained"
                  color="default"
                  className={classes.buttonEmpty}
                  startIcon={<PresentToAll></PresentToAll>}
                >
                  B11
                </Button>
              </Grid>
              <Grid item xs={4} key={"B04"}>
                <Button
                  variant="contained"
                  color="default"
                  className={classes.buttonEmpty}
                  startIcon={<PresentToAll></PresentToAll>}
                >
                  B12
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={1}></Grid>
          <Grid item xs={4}>
            <Grid container>
              <Grid item xs={6}>
                <Button
                  variant="contained"
                  color="default"
                  className={classes.buttonEmpty}
                  startIcon={<PresentToAll></PresentToAll>}
                >
                  B13
                </Button>
              </Grid>
              <Grid item xs={6}>
                <Button
                  variant="contained"
                  color="default"
                  className={classes.buttonEmpty}
                  startIcon={<PresentToAll></PresentToAll>}
                >
                  B14
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={8}></Grid>
          <Grid item xs={4}>
            <Grid container>
              <Grid item xs={6}>
                <Button
                  variant="contained"
                  color="default"
                  className={classes.buttonEmpty}
                  startIcon={<PresentToAll></PresentToAll>}
                >
                  B15
                </Button>
              </Grid>
              <Grid item xs={6}>
                <Button
                  variant="contained"
                  color="default"
                  className={classes.buttonEmpty}
                  startIcon={<PresentToAll></PresentToAll>}
                >
                  B16
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Paper elevation={0} className={classes.paper}></Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper elevation={0} className={classes.paper}></Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper elevation={0} className={classes.paper}></Paper>
          </Grid>
          <Grid item xs={1}></Grid>
          <Grid item xs={2}>
            <Button
              variant="contained"
              color="default"
              className={classes.buttonEmpty}
              startIcon={<PresentToAll></PresentToAll>}
            >
              B17
            </Button>
          </Grid>
          <Grid item xs={2}>
            <Button
              variant="contained"
              color="default"
              className={classes.buttonEmpty}
              startIcon={<PresentToAll></PresentToAll>}
            >
              B18
            </Button>
          </Grid>
          <Grid item xs={2}>
            <Button
              variant="contained"
              color="default"
              className={classes.buttonEmpty}
              startIcon={<PresentToAll></PresentToAll>}
            >
              B19
            </Button>
          </Grid>
          <Grid item xs={2}>
            <Button
              variant="contained"
              color="default"
              className={classes.buttonEmpty}
              startIcon={<PresentToAll></PresentToAll>}
            >
              B20
            </Button>
          </Grid>
          <Grid item xs={2}>
            <Button
              variant="contained"
              color="default"
              className={classes.buttonEmpty}
              startIcon={<PresentToAll></PresentToAll>}
            >
              B21
            </Button>
          </Grid>
          <Grid item xs={1}></Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default InernalWH;

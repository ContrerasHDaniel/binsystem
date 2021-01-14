import React, { useState } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import { Typography } from "@material-ui/core";
import { Container } from "./Container";
import { PresentToAll, PresentToAllTwoTone } from "@material-ui/icons";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
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
    buttonEmpty: {
      margin: theme.spacing(1),
      width: 150,
      minWidth: 150,
      height: 50,
      minHeight: 50,
      borderStyle: 'solid',
      borderColor: 'blue'
    },
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

const AlmacenInterno = ({
  containers,
  setOriginMaterialID,
  setOriginContainerID,
  originMaterialID,
  setDestContainerID,
  handleAlertOpen,
  handleConfirmDialogOpen
}: Props) => {
  const classes = useStyles();

  const [buttonSelected, setButtonSelected] = useState<number>(0);

  const handleSelectDest = async (
    containerID: string
  ) => {
    if (originMaterialID) {
      setDestContainerID(containerID)
      handleConfirmDialogOpen()
    } else {
      handleAlertOpen()
    }
  }

  const handleSelectOrigin = (
    currentButton: number,
    materialID: number,
    containerID: string
  ) => {
    if (buttonSelected !== 0) {
      setOriginMaterialID(0);
      setOriginContainerID("");
      setButtonSelected(0);
    } else {
      setOriginContainerID(containerID);
      setOriginMaterialID(materialID);
      setButtonSelected(currentButton);
    }
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={3}>
        <Grid container spacing={3}>
          <Grid item xs={6}></Grid>
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
          {containers.map((container, id = 0) => {
            id = id + 1;
            if (!container.MaterialID) {
              return (
                <Grid item xs={3} key={container.ContainerID}>
                  <Button
                    onClick={()=> handleSelectDest(container.ContainerID)}
                    variant="outlined"
                    color="default"
                    className={classes.buttonEmpty}
                    startIcon={<PresentToAll></PresentToAll>}
                  >
                    {container.ContainerID}
                  </Button>
                </Grid>
              );
            } else {
              return (
                <Grid item xs={2} key={container.ContainerID}>
                  <Button
                    onClick={() =>
                      handleSelectOrigin(
                        id,
                        container.MaterialID,
                        container.ContainerID
                      )
                    }
                    variant={buttonSelected === id ? "outlined" : "contained"}
                    color={buttonSelected === id ? "primary" : "inherit"}
                    className={classes.buttonFull}
                    startIcon={<PresentToAllTwoTone></PresentToAllTwoTone>}
                  >
                    {container.ContainerID}
                  </Button>
                </Grid>
              );
            }
          })}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default AlmacenInterno;

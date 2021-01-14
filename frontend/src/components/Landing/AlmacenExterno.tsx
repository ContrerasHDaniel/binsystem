import React, { useState } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import PresentToAllIcon from "@material-ui/icons/PresentToAll";
import PresentToAllTwoToneIcon from "@material-ui/icons/PresentToAllTwoTone";
import { Typography } from "@material-ui/core";
import { Container } from "./Container";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    cardEscoria: {
      height: 150,
      maxHeight: 150,
      backgroundColor: "#969696",
    },
    textEscoria: {
      textAlign: "center",
      alignItems: "center",
      fontSize: 24,
      color: "#fff",
      marginTop: 30,
    },
    cardCuarentena: {
      height: 50,
      minHeight: 50,
      borderStyle: "dashed",
      borderColor: "red",
      alignItems: "center",
      textAlign: "center",
    },
    textCuarentena: {
      marginTop: 10,
      fontWeight: "bold",
    },
    cardContExt: {
      width: 180,
      minWidth: 100,
      textAlign: "center",
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

const AlmacenExterno = ({
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
      setOriginMaterialID(materialID);
      setOriginContainerID(containerID);
      setButtonSelected(currentButton);
    }
  };

  return (
    <Grid container spacing={1}>
      <Grid item xs={2}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Card className={classes.cardEscoria}>
              <Typography className={classes.textEscoria}>
                Almacén de Escoria
              </Typography>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card className={classes.cardCuarentena} variant="outlined">
              <Typography className={classes.textCuarentena}>
                Cuarentena Externa
              </Typography>
            </Card>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={10}>
        <Grid container>
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
                    startIcon={<PresentToAllIcon />}
                  >
                    {container.ContainerID}
                  </Button>
                </Grid>
              );
            } else {
              return (
                <Grid item xs={3} key={container.ContainerID}>
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
                    startIcon={<PresentToAllTwoToneIcon />}
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

export default AlmacenExterno;

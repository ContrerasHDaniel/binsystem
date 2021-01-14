import React, { useEffect, useState } from "react";
import { Material } from "./Material";
import { Container } from "./Container";
import * as materialServices from "./MaterialService";
import * as containerServices from "./ContainerService";
import AlmacenExterno from "./AlmacenExterno";
import AlmacenInterno from "./AlmacenInterno";
//import InternalWH from "./InternalWH";
import Button from "@material-ui/core/Button";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import FormLabel from "@material-ui/core/FormLabel";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import logo from "../../assets/logo512.png";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary,
    },
    gridLabel1: {
      alignContent: "center",
      alignItems: "center",
      textAlign: "right",
    },
    dialogLabel: {
      color: "black",
      fontSize: 18,
      fontWeight: 700,
    },
    dialogLabel2: {
      color: "#588c66",
      fontSize: 18,
      fontWeight: 800,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      color: "black",
      marginLeft: 10,
    },
    logo: {
      maxWidth: 100,
      maxHeight: 100,
    },
    appbarModal: {
      height: 60,
      maxHeight: 60,
      backgroundColor: "#b5b3ae",
    },
    logoModal: {
      height: 50,
      maxHeight: 50,
      marginRight: 10,
      marginLeft: "auto",
    },
  })
);

const LandingPage = () => {
  const classes = useStyles();
  const [materials, setMaterials] = useState<Material[]>([]);
  const [containers, setContainers] = useState<Container[]>([]);
  const [originContainerID, setOriginContainerID] = useState<string>("");
  const [originMaterialID, setOriginMaterialID] = useState<number>(0);
  const [destContainerID, setDestContainerID] = useState<string>("");
  const [openAlert, setOpenAlert] = useState(false);
  const [openConfirmDialog, setOpenConfirmDialog] = useState(false);
  const [materialMovedInfo, setMaterialMovedInfo] = useState<Material>();

  const handleAlertOpen = () => {
    setOpenAlert(true);
  };

  const handleAlertClose = () => {
    setOpenAlert(false);
  };

  const handleConfirmDialogOpen = () => {
    setMaterialMovedInfo(
      materials.find((material) => material.MaterialID === originMaterialID)
    );
    setOpenConfirmDialog(true);
  };

  const handleConfirmDialogClose = () => {
    setOpenConfirmDialog(false);
  };

  const handleConfirmAction = async () => {
    await containerServices.setMaterialID(destContainerID, originMaterialID);
    await containerServices.setMaterialID(originContainerID);
    handleConfirmDialogClose();
    window.location.reload(false);
  };

  const loadMaterials = async () => {
    const res = await materialServices.getMaterials();
    setMaterials(res.data);
  };

  const loadContainers = async () => {
    const res = await containerServices.getContainers();
    setContainers(res.data);
  };

  useEffect(() => {
    loadMaterials();
    loadContainers();
  }, []);

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ backgroundColor: "#fff" }}>
        <Toolbar>
          <img src={logo} alt="logo" className={classes.logo} />
          <Typography variant="h6" className={classes.title}>
            Bins System
          </Typography>
        </Toolbar>
      </AppBar>
      <Grid container spacing={2} style={{ marginTop: 30 }}>
        <Grid item xs={6}>
          <Paper className={classes.paper}> Almacen interno </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}> Almacen externo </Paper>
        </Grid>
        <Grid item xs={6}>
          <AlmacenInterno
            originMaterialID={originMaterialID}
            handleConfirmDialogOpen={handleConfirmDialogOpen}
            handleAlertOpen={handleAlertOpen}
            setOriginContainerID={setOriginContainerID}
            setOriginMaterialID={setOriginMaterialID}
            setDestContainerID={setDestContainerID}
            containers={containers.filter((container) =>
              container.ContainerID.includes("B")
            )}
          ></AlmacenInterno>
          {/* <InternalWH
                        originMaterialID = {originMaterialID}
                        handleConfirmDialogOpen = {handleConfirmDialogOpen}
                        handleAlertOpen = {handleAlertOpen}
                        setOriginContainerID = {setOriginContainerID}
                        setOriginMaterialID = {setOriginMaterialID}
                        setDestContainerID = {setDestContainerID}
                        containers={containers.filter(container => container.ContainerID.includes('B'))}></InternalWH> */}
        </Grid>
        <Grid item xs={6}>
          <AlmacenExterno
            originMaterialID={originMaterialID}
            handleConfirmDialogOpen={handleConfirmDialogOpen}
            handleAlertOpen={handleAlertOpen}
            setOriginContainerID={setOriginContainerID}
            setOriginMaterialID={setOriginMaterialID}
            setDestContainerID={setDestContainerID}
            containers={containers.filter((container) =>
              container.ContainerID.includes("A")
            )}
          ></AlmacenExterno>
        </Grid>
        <Dialog
          open={openAlert}
          onClose={handleAlertClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"Seleccione un origen primero"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Primero debe seleccionar un contenedor de origen que tenga
              material
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleAlertClose} color="default">
              Entendido
            </Button>
          </DialogActions>
        </Dialog>

        <Dialog
          open={openConfirmDialog}
          onClose={handleConfirmDialogClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
          fullWidth
        >
          <AppBar position="static" className={classes.appbarModal}>
            <Toolbar>
              <Typography
                variant="h6"
                style={{ marginLeft: 10, color: "#588c66" }}
              >
                Traspaso de Bin
              </Typography>
              <img src={logo} alt="logo" className={classes.logoModal} />
            </Toolbar>
          </AppBar>
          <DialogTitle id="alert-dialog-title" style={{ textAlign: "center" }}>
            {"¿Está seguro de mover el bin seleccionado?"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <Grid container spacing={3}>
                    <Grid item xs={6} className={classes.gridLabel1}>
                      <FormLabel className={classes.dialogLabel2}>
                        Bin Origen:{" "}
                      </FormLabel>
                    </Grid>
                    <Grid item xs={6}>
                      <FormLabel className={classes.dialogLabel}>
                        {originContainerID}
                      </FormLabel>
                    </Grid>
                  </Grid>
                  <Grid container spacing={3}>
                    <Grid item xs={6} className={classes.gridLabel1}>
                      <FormLabel className={classes.dialogLabel2}>
                        Bin Destino:{" "}
                      </FormLabel>
                    </Grid>
                    <Grid item xs={6}>
                      <FormLabel className={classes.dialogLabel}>
                        {destContainerID}
                      </FormLabel>
                    </Grid>
                  </Grid>
                  <Grid container spacing={3}>
                    <Grid item xs={6} className={classes.gridLabel1}>
                      <FormLabel className={classes.dialogLabel2}>
                        Lote:{" "}
                      </FormLabel>
                    </Grid>
                    <Grid item xs={6}>
                      <FormLabel className={classes.dialogLabel}>
                        {materialMovedInfo?.lote}
                      </FormLabel>
                    </Grid>
                  </Grid>
                  <Grid container spacing={3}>
                    <Grid item xs={6} className={classes.gridLabel1}>
                      <FormLabel className={classes.dialogLabel2}>
                        Material:{" "}
                      </FormLabel>
                    </Grid>
                    <Grid item xs={6}>
                      <FormLabel className={classes.dialogLabel}>
                        {materialMovedInfo?.material_type}
                      </FormLabel>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleConfirmAction} color="primary">
              Continuar
            </Button>
            <Button onClick={handleConfirmDialogClose} color="secondary">
              Cancelar
            </Button>
          </DialogActions>
        </Dialog>
      </Grid>
    </div>
  );
};

export default LandingPage;

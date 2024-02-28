import { View, Text, StyleSheet, Alert } from "react-native";
import { Input, Button } from "@rneui/base";
import { useState } from "react";
import {
  saveLaptopRest,
  updateLaptopRest,
} from "../rest_client/laptopsConexion";

export const LaptopsForm = ({ navigation, route }) => {
  let laptopRetrived = route.params.laptopParam;
  let isNew = true;
  if (laptopRetrived != null) {
    isNew = false;
  }

  const [marca, setMarca] = useState(isNew ? null : laptopRetrived.marca);
  const [procesador, setProcesador] = useState(
    isNew ? null : laptopRetrived.procesador
  );
  const [memoria, setMemoria] = useState(isNew ? null : laptopRetrived.memoria);
  const [disco, setDisco] = useState(isNew ? null : laptopRetrived.disco);

  const showMessage = () => {
    Alert.alert("CONFIRMACION", "Laptop creada exitosamente");
  };

  const saveLaptop = () => {
    console.log("Laptop guardada");
    navigation.goBack();
    saveLaptopRest(
      {
        marca: marca,
        procesador: procesador,
        memoria: memoria,
        disco: disco,
      },
      showMessage
    );
  };
  return (
    <View style={styles.container}>
      <Input
        value={marca}
        placeholder="MARCA"
        onChangeText={(value) => {
          setMarca(value);
        }}
      />
      <Input
        value={procesador}
        placeholder="PROCESADOR"
        onChangeText={(value) => {
          setProcesador(value);
        }}
      />
      <Input
        value={memoria}
        placeholder="MEMORIA"
        onChangeText={(value) => {
          setMemoria(value);
        }}
      />
      <Input
        value={disco}
        placeholder="DISCO"
        onChangeText={(value) => {
          setDisco(value);
        }}
      />

      <Button title="Guardar" onPress={saveLaptop} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

import { View, Text, StyleSheet, FlatList } from "react-native";
import { Button, ListItem } from "@rneui/base";
import { getAllLaptops } from "../rest_client/laptopsConexion";
import { useState } from "react";

export const ListaLaptops = () => {
  const [listaLaptops, setlistaLaptops] = useState([]);

  const LaptopsItem = ({ laptop }) => {
    return (
      <ListItem>
        <ListItem.Content>
          <ListItem.Title>Marca: {laptop.marca}</ListItem.Title>
          <ListItem.Subtitle>Procesador: {laptop.procesador}</ListItem.Subtitle>
          <ListItem.Subtitle>Memoria: {laptop.memoria}</ListItem.Subtitle>
          <ListItem.Subtitle>Disco: {laptop.disco}</ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
    );
  };
  fnRefreshList = (laptops) => {
    setlistaLaptops(laptops);
  };
  return (
    <View>
      <Text style={styles.titleText}>LISTA DE LAPTOPS</Text>
      <Button
        title="Consultar"
        onPress={() => {
          getAllLaptops(fnRefreshList);
        }}
      />
      <FlatList
        data={listaLaptops}
        renderItem={({ item }) => {
          return <LaptopsItem laptop={item} />;
        }}
      />
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
  titleText: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
    color: "#007BFF",
  },
});

import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableHighlight,
} from "react-native";
import { Button, ListItem, FAB } from "@rneui/base";
import { getAllLaptops } from "../rest_client/laptopsConexion";
import { useState, useEffect } from "react";

export const ListaLaptops = ({ navigation }) => {
  const [listaLaptops, setlistaLaptops] = useState([]);

  useEffect(() => {
    getAllLaptops(fnRefreshList);
  }, []);

  const LaptopsItem = ({ laptop }) => {
    return (
      <TouchableHighlight
        onPress={() => {
          navigation.navigate("LaptosFormNav", { laptopParam: laptop });
        }}
      >
        <ListItem>
          <ListItem.Content>
            <ListItem.Title>Marca: {laptop.marca}</ListItem.Title>
            <ListItem.Subtitle>
              Procesador: {laptop.procesador}
            </ListItem.Subtitle>
            <ListItem.Subtitle>Memoria: {laptop.memoria}</ListItem.Subtitle>
            <ListItem.Subtitle>Disco: {laptop.disco}</ListItem.Subtitle>
          </ListItem.Content>
        </ListItem>
      </TouchableHighlight>
    );
  };
  fnRefreshList = (laptops) => {
    setlistaLaptops(laptops);
  };
  return (
    <View View style={styles.container}>
      <FlatList
        data={listaLaptops}
        renderItem={({ item }) => {
          return <LaptopsItem laptop={item} />;
        }}
      />
      <FAB title="+" onPress={() => navigation.navigate("LaptosFormNav", {})} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "strech",
    justifyContent: "flex-start",
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
    color: "#007BFF",
  },
});

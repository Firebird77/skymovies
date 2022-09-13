import React, { useEffect } from 'react';
import { Alert, FlatList, ImageBackground, LogBox, Platform, ScrollView, TextInput, StatusBar, StyleSheet, Text, TouchableOpacity, View, Image, Pressable } from "react-native"
import { COLORS, SIZES } from "./../constants"



const Order = ({ route, navigation }) => {

  ////////////////////////////////////////////////////////////////////////////////////
  // States
  const [name, setName] = React.useState("")
  const [email, setEmail] = React.useState("")
  const [error, setError] = React.useState(false)
  ////////////////////////////////////////////////////////////////////////////////////


  ////////////////////////////////////////////////////////////////////////////////////
  // Variables
  const { cart } = route.params;
  const empty = [];

  const total = cart.reduce((accumulator, object) => {
    return accumulator + object.price;
  }, 0);
  ////////////////////////////////////////////////////////////////////////////////////



  ////////////////////////////////////////////////////////////////////////////////////
  // Hooks
  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
  }, [])
  ////////////////////////////////////////////////////////////////////////////////////



  ////////////////////////////////////////////////////////////////////////////////////
  // Functions
  const back = () => name.length > 0 & email.length > 0 ?
    (Alert.alert("Confirmation", "Votre réservation est confirmée. Le paiement se fera au gichet. Merci pour votre confiance :)", [
      {
        text: "Fermer",
        onPress: () => {
          navigation.navigate("Home", { empty })
        },
      },
    ])) : setError(true)




  function renderMoviesList() {
    const renderItem = ({ item }) => (
      <View style={{ marginBottom: 15, borderBottomWidth: 1, paddingBottom: 15, borderBottomColor: "#1B1D23" }}>

        <View style={{ width: "100%", height: 140 - 50, flexDirection: "row" }}>
          <Image
            source={item.photo}
            resizeMode="cover"
            style={{
              width: 100 - 30,
              height: 140 - 50,
              borderRadius: 5
            }}
          />

          <View style={{ marginLeft: 15 }}>
            <Text style={{ fontSize: SIZES.h6, fontWeight: "bold", color: COLORS.secondary, marginBottom: 6 }} >{item.date}  {item.location}</Text>
            <Text style={{ fontSize: SIZES.h2, fontWeight: "bold", color: COLORS.white, marginBottom: 6 }} >{item.title}</Text>
            <Text style={{ fontSize: SIZES.h5, fontWeight: "bold", color: COLORS.secondary, marginBottom: 11 }} >{item.category}  ({item.duration})</Text>
            <Text style={{ fontSize: SIZES.h2, fontWeight: "bold", color: COLORS.white, }} >{item.price} €</Text>

          </View>
        </View>
      </View>
    )
    return (
      <FlatList
        data={cart}
        keyExtractor={item => `${item.id}`}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <View style={{ justifyContent: "space-between", flexDirection: "row", alignItems: "center", marginVertical: 65, marginBottom: 30 }}>
            <Text style={{ fontSize: SIZES.h1 + 5, fontWeight: "bold", color: COLORS.white, }}>Réservation</Text>

          </View>
        }
      />
    )
  }
  ////////////////////////////////////////////////////////////////////////////////////



  ////////////////////////////////////////////////////////////////////////////////////
  // Return
  return (
    <View style={styles.container}>

      <StatusBar barStyle={"light-content"} translucent={true} backgroundColor={COLORS.primary} />


      <ScrollView contentContainerStyle={{ paddingBottom: 120 }} style={styles.container2}>
        {renderMoviesList()}


        <Text style={{ fontSize: SIZES.h1 + 5, fontWeight: "bold", color: COLORS.white, marginTop: 20, marginBottom: 10 }}>Informations</Text>

        <View style={styles.searchBar}>
          <TextInput
            value={name}
            onChangeText={(text) => setName(text)}
            placeholder="Nom & Prenom*                 "
            style={{ fontSize: SIZES.h3, fontWeight: "normal", color: COLORS.white }} />
        </View>
        <View style={styles.searchBar}>
          <TextInput
            onChangeText={(text) => setEmail(text)}
            value={email}
            placeholder="adresse email*                  "
            style={{ fontSize: SIZES.h3, fontWeight: "normal", color: COLORS.white }} />
        </View>
        {error ? <Text style={{ fontSize: SIZES.h6, fontWeight: "normal", color: COLORS.primary, marginTop: 3 }}>Complétez vos informations</Text> : null}



      </ScrollView>
      <Pressable onPress={back} style={{
        position: "absolute",
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "center",
        left: 0,
        right: 0,
        bottom: 0,
        height: 70,
        width: "100%",
        backgroundColor: COLORS.primary,
        paddingVertical: 20,
        paddingHorizontal: SIZES.padding2,
      }}>
        <Text style={{ fontSize: SIZES.h2, fontWeight: "bold", color: COLORS.white, }}>Valider</Text>
        <Text style={{ fontSize: SIZES.h2, fontWeight: "bold", color: COLORS.white, }}>Total : {total} €</Text>

      </Pressable>



    </View>
  )
}

export default Order;
////////////////////////////////////////////////////////////////////////////////////




////////////////////////////////////////////////////////////////////////////////////
// Style
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.darkgray,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },

  container2: {
    flex: 1,
    backgroundColor: COLORS.darkgray,
    paddingHorizontal: SIZES.padding2,
    paddingTop: 20,
    paddingBottom: 105,
  },
  searchBar: {
    height: SIZES.bar,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.darkgray,
    borderRadius: 8,
    paddingHorizontal: 20,
    borderColor: COLORS.secondary,
    borderWidth: 0.5,
    marginTop: 10,
  },

})
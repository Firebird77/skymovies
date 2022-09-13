import React, { useEffect } from 'react';
import { Alert, FlatList, ImageBackground, LogBox, Platform, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View, Image, Pressable } from "react-native"
import Icon from "react-native-vector-icons/AntDesign"
import { COLORS, SIZES, images } from "./../constants"
import { Order } from "../screens"
import { movies } from "../data/Movies"




const Home = ({ route, navigation }) => {




  ////////////////////////////////////////////////////////////////////////////////////
  // States
  const [cart, setCart] = React.useState([])
  ////////////////////////////////////////////////////////////////////////////////////
  

  ////////////////////////////////////////////////////////////////////////////////////
  // Hooks
  useEffect(() => {
    LogBox.ignoreAllLogs();//Ignore all log notifications
  }, [])

  React.useEffect(() => {
    if (route.params) {
      setCart([])
    }
  }, [route.params]);
  ////////////////////////////////////////////////////////////////////////////////////
  



  ////////////////////////////////////////////////////////////////////////////////////
  // Function
  function renderMoviesList() {
    const renderItem = ({ item }) => (
      <View style={{ marginBottom: 30, borderBottomWidth: 1, paddingBottom: 30, borderBottomColor: "#1B1D23" }}>
        <View style={{ width: "100%", height: 140, flexDirection: "row" }}>
          <Image
            source={item.photo}
            resizeMode="cover"
            style={{
              width: 100,
              height: 140,
              borderRadius: 5
            }}
          />
          <View style={{ marginLeft: 15 }}>
            <Text style={{ fontSize: SIZES.h6, fontWeight: "bold", color: COLORS.secondary, marginBottom: 6 }} >{item.date}  {item.location}</Text>
            <Text style={{ fontSize: SIZES.h1, fontWeight: "bold", color: COLORS.white, marginBottom: 6 }} >{item.title}</Text>
            <Text style={{ fontSize: SIZES.h4, fontWeight: "bold", color: COLORS.secondary, marginBottom: 6 }} >{item.category} ({item.duration})</Text>
            <View style={{ marginTop: 27, height: 40, width: 120 }}>
              {cart.includes(item) ? (
                <Pressable onPress={() => setCart(cart.filter((x) => x.id !== item.id))}
                  style={{
                    height: 40, width: 120, backgroundColor: COLORS.darkgray, alignItems: "center", justifyContent: "center",
                    borderRadius: 5, borderWidth: 1, borderColor: COLORS.primary
                  }}>
                  <Text style={{ fontSize: SIZES.h4, fontWeight: "bold", color: COLORS.primary }} >Suprimer</Text>
                </Pressable>
              ) : (
                  <Pressable onPress={() => setCart([...cart, item])}
                    style={{
                      height: 40, width: 120, backgroundColor: COLORS.primary, alignItems: "center", justifyContent: "center",
                      borderRadius: 5
                    }}>
                    <Text style={{ fontSize: SIZES.h4, fontWeight: "bold", color: COLORS.white }} >Reserver</Text>
                  </Pressable>
                )}
            </View>
          </View>
        </View>
      </View>
    )
    return (
      <FlatList
        data={movies}
        keyExtractor={item => `${item.id}`}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}

      />
    )
  }
  ////////////////////////////////////////////////////////////////////////////////////
  



  ////////////////////////////////////////////////////////////////////////////////////
  // Return
  return (
    <View style={styles.container}>
      <StatusBar barStyle={"light-content"} translucent={true} backgroundColor={COLORS.primary} />
      <View
        style={{
          height: Platform.OS === "ios" ? SIZES.headios + 100 : SIZES.head,
          backgroundColor: COLORS.darkgray,
        }}
      >
        <ImageBackground source={images.imgback} resizeMode="cover" imageStyle={{ opacity: 0.5 }}>
          <View style={{
            paddingTop: Platform.OS === "ios" ? 46 : 0,
            paddingLeft: 20,
          }}>
            <View style={{
              width: '89%'
            }}>
              <Text style={{ fontSize: SIZES.h2 + 15, fontWeight: "bold", color: COLORS.white, marginVertical: 36 }}>Vos films préférés diffusés en plein air</Text>
            </View>
          </View>
        </ImageBackground>
      </View>

      <View style={styles.container2}>
        <View style={{ justifyContent: "space-between", flexDirection: "row", alignItems: "center", marginVertical: 35 }}>
          <Text style={{ fontSize: SIZES.h2, fontWeight: "bold", color: COLORS.white, }}>Films</Text>
          {cart.length > 0 ?
            <Text onPress={() =>
              navigation.navigate("Order", { cart })} style={{ fontSize: SIZES.h2, fontWeight: "bold", color: COLORS.primary, }}>Valider ({cart.length})</Text>
            : null}
        </View>

        {renderMoviesList()}

      </View>
    </View>
  )
}

export default Home;
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

  },
})
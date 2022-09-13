import React from 'react';
import { Alert, FlatList, ImageBackground, LogBox, Platform, ScrollView, TextInput, StatusBar, StyleSheet, Text, TouchableOpacity, View, Image, Pressable } from "react-native"
import { COLORS, SIZES, images } from "./../constants"






const User = () => {

  ////////////////////////////////////////////////////////////////////////////////////
  // States
  const [name, setName] = React.useState("")
  const [email, setEmail] = React.useState("")
  const [password, setPassword] = React.useState("")
  const [el, setEl] = React.useState("")
  const [pword, setPword] = React.useState("")


  const [account, setAccount] = React.useState(false)
  const [error2, setError2] = React.useState(false)
  const [login, setLogin] = React.useState(false)

  const [profile, setProfile] = React.useState({
    name: "",
    email: "",
    password: "",
  })
  ////////////////////////////////////////////////////////////////////////////////////
  



  ////////////////////////////////////////////////////////////////////////////////////
  // Functions
  const inscription = () => {
    if (name.length > 0 & email.length > 0 & password.length > 0) {
      setProfile({ name: name, password: password, email: email })
      setLogin(true)
    } else null
  }


  const connexion = () => { el.length > 0 & el == profile.email & pword.length > 0 & pword == profile.password ?
     setLogin(true) : setError2(true) 
  }

  const deconnexion = () => { { setLogin(false), setAccount(true), setName(""), setError2(false), 
     setPassword(""), setEmail(""), setPword(""), setEl("") 
     } 
  }
  ////////////////////////////////////////////////////////////////////////////////////
  


  ////////////////////////////////////////////////////////////////////////////////////
  // Return
  return (
    <View style={styles.container}>
      <StatusBar barStyle={"light-content"} translucent={true} backgroundColor={COLORS.primary} />



      {!login ? <View style={styles.container2}>
        <View
          style={{
            height: Platform.OS === "ios" ? SIZES.headios + 80 : SIZES.head,
            paddingTop: Platform.OS === "ios" ? 46 : 0,
            alignContent: "center",
            justifyContent: "center",
            textAlign: "center",
            alignItems: "center",
            backgroundColor: COLORS.darkgray,
          }}
        >
          <Text style={{ fontSize: SIZES.h1 + 5, fontWeight: "bold", color: COLORS.white }}>SKYMOVIES</Text>
        </View>


        {!account ? <View style={{ marginTop: 0 }}>
          <Text style={{ fontSize: SIZES.h2, fontWeight: "bold", color: COLORS.white, marginTop: 20, marginBottom: 10 }}>Inscription</Text>

          <View style={styles.searchBar}>
            <TextInput
              value={name}
              onChangeText={(text) => setName(text)}
              placeholder="Nom & Prenom*                            "
              style={{ fontSize: SIZES.h3, fontWeight: "normal", color: COLORS.white }} />
          </View>
          <View style={styles.searchBar}>
            <TextInput
              onChangeText={(text) => setEmail(text)}
              value={email}
              placeholder="Adresse email*                            "
              style={{ fontSize: SIZES.h3, fontWeight: "normal", color: COLORS.white }} />
          </View>
          <View style={styles.searchBar}>
            <TextInput
              onChangeText={(text) => setPassword(text)}
              value={password}
              placeholder="Mot de passe*                             "
              style={{ fontSize: SIZES.h3, fontWeight: "normal", color: COLORS.white }} />
          </View>
          <Text style={{ fontSize: SIZES.h6, fontWeight: "normal", color: COLORS.secondary, marginTop: 3 }}>*Obligatoire</Text>

          <Pressable onPress={inscription} style={styles.searchBar2}>
            <Text style={{ fontSize: SIZES.h3, fontWeight: "bold", color: COLORS.white }}>S'inscrire</Text>
          </Pressable>
          <Text style={{ fontSize: SIZES.h4, fontWeight: "normal", color: COLORS.white, marginTop: 25, textAlign: "center" }}>Vous avez deja un compte ?</Text>

          <Text onPress={() => setAccount(true)} style={{ fontSize: SIZES.h4, fontWeight: "bold", color: COLORS.primary, marginTop: 12, textAlign: "center" }}>Connetez-vous</Text>

        </View> : <View>
            <Text style={{ fontSize: SIZES.h2, fontWeight: "bold", color: COLORS.white, marginTop: 20, marginBottom: 10 }}>Connexion</Text>


            <View style={styles.searchBar}>
              <TextInput
                onChangeText={(text) => setEl(text)}
                value={el}
                placeholder="Adresse email*                          "
                style={{ fontSize: SIZES.h3, fontWeight: "normal", color: COLORS.white }} />
            </View>
            <View style={styles.searchBar}>
              <TextInput
                onChangeText={(text) => setPword(text)}
                value={pword}
                placeholder="Mot de passe*                               "
                style={{ fontSize: SIZES.h3, fontWeight: "normal", color: COLORS.white }} />
            </View>
            {error2 ? <Text style={{ fontSize: SIZES.h6, fontWeight: "normal", color: COLORS.primary, marginTop: 3 }}>Compte inconnu</Text> : null}

            <Pressable onPress={connexion} style={styles.searchBar2}>
              <Text style={{ fontSize: SIZES.h3, fontWeight: "bold", color: COLORS.white }}>Se connecter</Text>
            </Pressable>
            <Text style={{ fontSize: SIZES.h4, fontWeight: "normal", color: COLORS.white, marginTop: 25, textAlign: "center" }}>Vous n'avez pas de compte ?</Text>

            <Text onPress={() => setAccount(false)} style={{ fontSize: SIZES.h4, fontWeight: "bold", color: COLORS.primary, marginTop: 12, textAlign: "center" }}>Inscrivez-vous</Text>

          </View>}
      </View> :
        <View>
          <View style={{
            height: Platform.OS === "ios" ? SIZES.headios + 190 : SIZES.head,
            backgroundColor: COLORS.darkgray,
            justifyContent: "center",
            alignItems: "center",
            alignContent: "center"
          }}>
            <ImageBackground source={images.bg} style={{ width: "100%", height: "100%", }} resizeMode="cover" imageStyle={{ opacity: 0.5 }}>

              <View style={{
                width: "100%", height: "100%", justifyContent: "center",
                alignItems: "center",
                alignContent: "center"
              }}>
                <Image
                  source={images.avatar}
                  resizeMode="contain"
                  style={{
                    width: 90,
                    height: 90,
                    marginTop: 39
                  }}
                />
                <Text style={{ fontSize: SIZES.h1 + 10, fontWeight: "bold", color: COLORS.white, marginTop: 20, marginBottom: 10 }}>{profile.name}</Text>
                <Text style={{ fontSize: SIZES.h3, fontWeight: "normal", color: COLORS.secondary, marginTop: 10, marginBottom: 10 }}>Quel film allez-vous voir aujourd'hui ?</Text>

              </View>
            </ImageBackground>


          </View>
          <View style={{
            marginTop: 30,
            paddingHorizontal: SIZES.padding2 + 8,
          }}>
            <Text style={{ fontSize: SIZES.h1, fontWeight: "bold", color: COLORS.white, marginTop: 0, marginBottom: 10 }}>Information</Text>


            <View style={styles.searchBar}>
              <Text style={{ fontSize: SIZES.h3, fontWeight: "bold", color: COLORS.secondary }}>{profile.name}</Text>
            </View>
            <View style={styles.searchBar}>
              <Text style={{ fontSize: SIZES.h3, fontWeight: "bold", color: COLORS.secondary }}>{profile.email}</Text>
            </View>
            <View style={styles.searchBar}>
              <Text style={{ fontSize: SIZES.h3, fontWeight: "bold", color: COLORS.secondary }}>{profile.password}</Text>
            </View>

            <Pressable style={styles.searchBar2} onPress={deconnexion}>
              <Text style={{ fontSize: SIZES.h3, fontWeight: "bold", color: COLORS.white }}>Déconnexion</Text>
            </Pressable>

            <Text style={{ fontSize: SIZES.h1, fontWeight: "bold", color: COLORS.white, marginTop: 40, marginBottom: 10 }}>Réservation</Text>
            <Text style={{ fontSize: SIZES.h4, fontWeight: "normal", textAlign: "center", color: COLORS.secondary, marginTop: 10, marginBottom: 10 }}>Aucune réservation pour l'instant.</Text>


          </View>


        </View>}
    </View>

  )
}

export default User;
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
  searchBar2: {
    height: SIZES.bar,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.primary,
    borderRadius: 8,
    marginTop: 19,
  }
})
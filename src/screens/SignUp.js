import React from 'react'
import { StyleSheet, View, ScrollView } from 'react-native'
import { Text, Button, TextInput, Avatar } from 'react-native-paper'

import Header from '../components/Header'

function SignUp({ navigation }) {
    return (
      <>
        <Header titleText='Registrasi' />
        <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
          <View style={styles.titleContainer}>
          <Avatar.Text style={styles.avatarText} size={128} label="MP" />
            <Text style={styles.title}>Selamat Datang User!</Text>
            <Text style={styles.subtitle}>Silahkan melengkapi form dibawah ini untuk melakukan pendaftaran</Text>
          </View>
          <TextInput
            label='Nama Lengkap'
            mode='flat'
            style={styles.textInput}
          />
          <TextInput
            label='Nomor Handphone'
            mode='flat'
            style={styles.textInput}
          />
          <Button style={styles.button} mode="contained" onPress={() => navigation.navigate('ShareOffers')}>Sign Up</Button>
        </View>
        </ScrollView>
      </>
    )
  }

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      paddingHorizontal: 10,
      paddingVertical: 20,
    },
    scrollView: {
      backgroundColor: 'white',
    },
    titleContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      margin: 20
    },
    avatarText: {
      backgroundColor: '#f94c01',
      justifyContent: 'center',
      marginBottom: 30
    },
    title: {
      // margin: 20,
      fontWeight: 'bold',
      fontSize: 20,
      marginBottom: 10,
      textAlign: 'left',
      alignSelf: 'stretch'
    },
    subtitle: {
      fontSize: 18
    },
    textInput: {
      margin: 20,
      // bottom: 120,
    },
    button: {
      margin: 20,
      // bottom: 50,
      backgroundColor: '#0055a5'
    }
  })

export default SignUp


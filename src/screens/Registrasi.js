import React from 'react'
import { StyleSheet, View, ScrollView } from 'react-native'
import { Text, FAB, Avatar, Button, Card, Title, Paragraph, IconButton, Colors} from 'react-native-paper'

function Registrasi({ navigation }) {
    return (
      <>
        <View style={styles.container}>
            <Title>Halaman Registrasi.</Title>
            <Button style={styles.tombol} mode="contained" onPress={() => navigation.navigate('ShareOffers')}>
          NEXT
          </Button>
        </View>
      </>
    )
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      paddingHorizontal: 10,
      paddingVertical: 20
    },
    titleContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1
    },
    title: {
      fontSize: 20
    },
    titleDesc: {
        fontWeight: 'bold'
    },
    fab: {
      position: 'absolute',
      margin: 20,
      right: 0,
      bottom: 10
    },
    tombol: {
        marginTop: 20,
        paddingVertical: 5,
        backgroundColor: 'purple',
      }
  })

export default Registrasi
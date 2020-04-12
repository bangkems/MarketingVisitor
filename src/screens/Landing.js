import React from 'react'
import { StyleSheet, View, ScrollView } from 'react-native'
import { Button, Card, Paragraph } from 'react-native-paper'
import Header from '../components/Header'

function Landing({ navigation }) {
    return (
      <>
        <Header titleText='Voucher untuk Kamu!' />
        
        <View style={styles.container}>
            <ScrollView>
            <Card>
            <Card.Cover source={{ uri: 'https://via.placeholder.com/700x300?text=Gambar+Voucher' }} />
            <Card.Title
                title="Diskon 30% Potong Rambut"
                subtitle="Semua Suka Barbershop, Surabaya"
             />
            <Card.Content>
                <Paragraph style={styles.titleDesc}>Lebih gaya dengan model rambut baru dengan capster professional!</Paragraph>
                <Paragraph>Kini kamu tak perlu risau lagi memiliki gaya rambut yang usang karena Semua Suka Barbershop lagi ada promo lho! Promo ini berlaku di semua cabang di Surabaya</Paragraph>
                <Paragraph></Paragraph>
                <Paragraph style={styles.titleDesc}>Syarat dan Ketentuan</Paragraph>
                <Paragraph>Promo ini berlaku untuk pemilik akun Marketing Platform</Paragraph>
            </Card.Content>
            </Card>
            </ScrollView>
            <Button style={styles.tombol} mode="contained" onPress={() => navigation.navigate('SignUp')}>
          AMBIL VOUCHER
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
        backgroundColor: '#2980b9',
      }
  })

export default Landing
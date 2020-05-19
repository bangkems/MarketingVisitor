import React from 'react'
import { StyleSheet, View, ScrollView } from 'react-native'
import { Button, Card, Paragraph } from 'react-native-paper'
import Header from '../components/Header'

function Landing({ navigation }) {
    return (
      <>
        <Header titleText='Semua Produk Diskon 20% !' />
        
        <View style={styles.container}>
            <ScrollView>
            <Card>
            <Card.Cover source={{ uri: "https://source.unsplash.com/collection/10017690/700x700"}} />
            <Card.Title
                title="Ripped Jeans Company"
                subtitle="Bandung, Jawa Barat"
             />
            <Card.Content>
                <Paragraph style={styles.titleDesc}>Penawaran</Paragraph>
                <Paragraph style={styles.paragraph}>RPJ sedang mengadakan promo Ripped Gokil demi merayakan
                      acara Distinguished Gentleman's Ride yang akan
                      diselenggarakan di Bali tahun ini. Semua produk diskon
                      20%!</Paragraph>
                <Paragraph style={styles.titleDesc}>Syarat dan Ketentuan</Paragraph>
                <Paragraph style={styles.paragraph}>                      
                      1. Campaign ini menggunakan sistem CPA Sales{"\n"}
                      2. Influencer disarankan memberi review dan menampilkan
                      banner atau text link yang telah disediakan disini{"\n"}
                      3. Periode validasi kupon berlaku 30 Hari</Paragraph>
                      <Paragraph style={styles.titleDesc}>Media Sosial</Paragraph>
            </Card.Content>
            <View style={styles.sosmed}>
            <Button icon="instagram">@rippedjeansbro</Button>
            <Button icon="whatsapp">+62 8121554****</Button>
            <Button icon="link">http://rpj.com</Button>
            </View>
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
    paragraph: {
      paddingBottom: 10
    },
    tombol: {
        marginLeft: 10,
        marginRight: 10,
        marginTop: 10,
        paddingVertical: 5,
        backgroundColor: '#2980b9',
      },
    sosmed: {
      alignItems: 'flex-start',
      paddingLeft: 2
    }
  })

export default Landing
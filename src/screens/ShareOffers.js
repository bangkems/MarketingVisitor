import React from 'react'
import { StyleSheet, View, ScrollView, Share } from 'react-native'
import { Text, Button, Card, Title, Paragraph} from 'react-native-paper'
import Header from '../components/Header'

function ShareOffers({ navigation }) {
    const onShare = async () => {
        try {
          const result = await Share.share({
            message:
              'Saya mendapatkan Voucher 30% klik link ini untuk mendapatkan hal yang sama {link}',
          });
          if (result.action === Share.sharedAction) {
            if (result.activityType) {
              // shared with activity type of result.activityType
            } else {
              // shared
            }
          } else if (result.action === Share.dismissedAction) {
            // dismissed
          }
        } catch (error) {
          alert(error.message);
        }
      }
    return (
      <>
        <Header titleText='Bagikan Penawaran' />
        
        <View style={styles.container}>
            <ScrollView>
            <View>
            <Title style={styles.title}>Yeay, Voucher berhasil kamu peroleh!</Title>
            </View>
            <Card>
            <Card.Cover source={{ uri: 'https://via.placeholder.com/700x300?text=Gambar+Voucher' }} />
            </Card>
            <View style={styles.detilVoucher}>
            <Card>
            <Card.Title
                title="Diskon 30% Potong Rambut"
                subtitle="Semua Suka Barbershop, Surabaya"
             />
            </Card>
            </View>
            </ScrollView>
            <Button style={styles.tombol} mode="contained" onPress={onShare}>
          Bagikan ke Teman
          </Button>
          <Text style={styles.tombolLink} onPress={() => navigation.navigate('Registrasi')}>Lanjutkan ke Unduh Voucher</Text>
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
    detilVoucher: {
        textAlign: 'center'
    },
    title: {
        flex: 1,
        paddingBottom: 20,
        textAlign: 'center'
    },
    tombol: {
        marginTop: 20,
        paddingVertical: 5,
        backgroundColor: 'purple',
    },
    tombolLink: {
        paddingTop: 10,
        textDecorationLine: 'underline',
        textAlign: 'center',
        color: 'grey'
    }
  })


export default ShareOffers
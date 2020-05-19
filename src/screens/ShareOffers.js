import React from 'react'
import { StyleSheet, View, ScrollView, Share } from 'react-native'
import { Text, Button, Card, Title, Paragraph} from 'react-native-paper'
import Header from '../components/Header'

function ShareOffers({ navigation }) {
    const onShare = async () => {
        try {
          const result = await Share.share({
            message:
              'Semua Produk Diskon 20% di Ripped Jeans Company! - https://marketingvisitor-dev.netlify.app',
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
            <Card style={styles.cardVoucher}>
            <Card.Cover source={{ uri: "https://source.unsplash.com/collection/10017690/700x700" }} />
            <Title style={styles.titleVoucher}>Semua Produk Diskon 20% !</Title>
            <Paragraph style={styles.locationVoucher}>Ripped Jeans Company - Bandung, Jawa Barat</Paragraph>
            </Card>
            <View>
            <Paragraph style={styles.titleAjakan}>Mau mendapatkan reward dari membagikan voucher?</Paragraph>
            <Paragraph style={styles.subAjakan}>Kamu akan mendapat reward ketika temanmu menggunakan voucher yang kamu bagikan. Download aplikasi MarketingFans untuk klaim rewardmu</Paragraph>
            <Paragraph></Paragraph>   
            </View>
            </ScrollView>
            <Button style={styles.tombol} mode="contained" onPress={onShare}>
          Bagikan ke Teman
          </Button>
          <Text style={styles.tombolLink} onPress={() => navigation.navigate('DownloadVoucher')}>Lanjutkan ke Unduh Voucher</Text>
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
    cardVoucher: {
        backgroundColor: '#16a085'
    },
    detilVoucher: {
        textAlign: 'center'
    },
    title: {
        flex: 1,
        paddingBottom: 20,
        textAlign: 'center'
    },
    titleVoucher: {
        textAlign: 'center',
        paddingTop: 20,
        color: 'white'
    },
    titleAjakan: {
        paddingTop: 20,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 16
    },
    subAjakan: {
        textAlign: 'center',
        paddingLeft: 10,
        paddingRight: 10
    },
    locationVoucher: {
        textAlign: 'center',
        color: 'black',
        paddingBottom: 20,
        color: 'white'
    },
    tombol: {
        marginTop: 20,
        paddingVertical: 5,
        backgroundColor: '#2980b9',
    },
    tombolLink: {
        paddingTop: 10,
        textDecorationLine: 'underline',
        textAlign: 'center',
        color: 'grey'
    }
  })


export default ShareOffers
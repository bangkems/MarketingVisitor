import React from 'react'
import { StyleSheet, View, ScrollView, Linking } from 'react-native'
import { Text, Button, Card, Title, Paragraph, TextInput} from 'react-native-paper'
import Header from '../components/HeaderBack'

function DownloadVoucher({ navigation }) {
  const kodeVoucher = 'AKH12SSZA1122AKS'
    return (
      <>
        <Header titleText='Download Voucher' backButton={ () => navigation.goBack() } />
        <View style={styles.container}>
            <ScrollView>
            <Card style={styles.cardVoucher}>
            <Card.Cover source={{ uri: "https://source.unsplash.com/collection/10017690/700x700" }} />
            <Title style={styles.titleVoucher}>Semua Produk Diskon 20% !</Title>
            <Paragraph style={styles.locationVoucher}>Ripped Jeans Company - Bandung, Jawa Barat</Paragraph>
            </Card>
            <View>
            <Paragraph style={styles.validity}>Berlaku Hingga: 04-07-2021</Paragraph>
            <Text style={styles.tombolLink} onPress={ ()=>{ Linking.openURL('https://via.placeholder.com/700x500.png?text=Kode%20Voucher:%20AKH12SSZA1122AKS')}}>Download Voucher</Text>
            <Paragraph style={styles.descVoucher}>Tunjukkan gambar atau kode voucher yang telah kamu download saat melakukan transaksi offline di merchant sebelum masa berlaku habis</Paragraph>
            <TextInput
              label='Kode Voucher'
              value={kodeVoucher}
              dense='TRUE'
              style={styles.kodeVoucher}
            />
            </View>
            </ScrollView>
            <View>
            <Paragraph style={styles.ajakanDownload}>Jadi pahlawan UKM dengan Marketing Platform. Download sekarang!</Paragraph>
            <Button style={styles.tombol} mode="contained" onPress={ ()=>{ Linking.openURL("market://details?id=id.ac.its.my.mahasiswa")}}>
          DOWNLOAD MARKETINGFANS
          </Button>
          </View>
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
    kodeVoucher: {
      marginRight: 75,
      marginLeft: 75,
      marginTop: 10,
      marginBottom: 8
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
    validity: {
        paddingTop: 20,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 16
    },
    descVoucher: {
      textAlign: 'center',
      paddingLeft: 10,
      paddingRight: 10
    },
    ajakanDownload: {
        textAlign: 'center',
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 10,
        fontWeight: 'bold'
    },
    locationVoucher: {
        textAlign: 'center',
        color: 'black',
        paddingBottom: 20,
        color: 'white'
    },
    tombol: {
        marginTop: 10,
        paddingVertical: 5,
        backgroundColor: '#2980b9'
    },
    tombolLink: {
        textDecorationLine: 'underline',
        textAlign: 'center',
        color: 'grey',
        paddingBottom: 10
    }
  })


export default DownloadVoucher
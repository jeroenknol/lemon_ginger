import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import Title from '../components/shared/Title'
import styles from './About.styles'

class AboutScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.photo}
          source={{uri: 'http://localhost:3000/assets/RosaFaber-d3ace19a1e494a1530f7dafafba9a6dac829cd3155b7c818ae72ef2de6961d4d.jpg'}}
        />
        <Title content="Welkom bij Lemon & Ginger"/>
        <Text style={styles.text}>Toen ik 20 was zag ik mijzelf geen kok worden, maar tijdens mijn studie Cultureel Erfgoed kwam ik er achter dat ik echt liever achter het fornuis stond dan in de boeken zat. Het was niet dat ik mijn studie niet leuk vond, maar eten en koken intrigeerde mij nog meer. Ik heb toen mijn studie verruild voor een stage in de keuken en ben tegelijk begonnen met het schrijven van recepten. Kort daarna ben ik begonnen met Roos kookt en heb ik een aantal jaren ervaring als cateraar, taartenbakker en chef van mijn gezin. Nu is het tijd mijn recepten, kennis en tips met jullie te delen in een superhandig mobiele app.</Text>
      </View>
    );
  }
}

export default AboutScreen
// connect(null, { navigateTo })(Home)

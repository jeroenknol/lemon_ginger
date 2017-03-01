import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Title from '../components/shared/Title'
import styles from './About.styles'

class AboutScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Title content="About Ginger & Lemons"/>
        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam finibus enim nisi, ac pellentesque urna porttitor eget. Curabitur quis facilisis metus. Cras blandit, arcu non finibus rutrum, dui felis accumsan eros, sit amet varius purus sem nec eros. Aliquam vel volutpat nisi, ut tristique urna. Nulla pellentesque neque dolor, quis consequat nunc dictum vel. Sed ac sagittis odio. Proin ut ipsum ut purus interdum accumsan id id erat. Etiam eu hendrerit orci, in aliquam sem. Quisque vel lacus gravida, facilisis leo nec, sodales dolor. Quisque ullamcorper leo a tellus pulvinar ultrices.</Text>

      </View>
    );
  }
}

export default AboutScreen
// connect(null, { navigateTo })(Home)

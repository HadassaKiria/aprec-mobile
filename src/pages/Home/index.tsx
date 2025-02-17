/*import React from 'react';
import { View, Text } from 'react-native'

export default function Home(){
    return(
        <View>
            <Text>Tela Home</Text>
        </View>
    )
}*/


import React from "react";
import { SafeAreaView, View, Text, StyleSheet } from "react-native";

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Home Screen</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 60, // Evita que o conteúdo fique sob a TabBar
  },
});
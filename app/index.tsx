import { themeColors } from '@/utils/themeutils';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function IndexScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: themeColors.blue, // Blue background
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: themeColors.Grey
  },
});
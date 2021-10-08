import React from "react";
import { View, Text, ShadowPropTypeIOS } from "react-native";
import styles from "./style";

export default function Mensagens(props) {
  return (
    <View style={styles.resultado}>
      <Text style={styles.txtResultado}>{props.resultado}</Text>
    </View>
  );
}
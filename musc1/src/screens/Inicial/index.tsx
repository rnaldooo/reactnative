import React, { useState, Component, ComponentProps } from "react";

// prettier-ignore
import {Platform, StyleSheet, Text, View, Button,  Image,  StatusBar} from 'react-native';
import { ButtonIcon } from "../../components/ButtonIcon";
import logo from "../../assets/Warframe-logo.png";
//let logo = require('../../assets/logo.png');
import { styles } from "./styles";

//var RNFS = require("react-native-fs");
//import * as RNFS from "react-native-fs";

const RNFS = require("react-native-fs");

export function aaaa() {
  // get a list of files and directories in the main bundle
  RNFS.readDir(RNFS.MainBundlePath) // On Android, use "RNFS.DocumentDirectoryPath" (MainBundlePath is not defined)
    .then((result) => {
      console.log("GOT RESULT", result);

      // stat the first file
      return Promise.all([RNFS.stat(result[0].path), result[0].path]);
    })
    .then((statResult) => {
      if (statResult[0].isFile()) {
        // if we have a file, read it
        return RNFS.readFile(statResult[1], "utf8");
      }

      return "no file";
    })
    .then((contents) => {
      // log the file contents
      console.log(contents);
    })
    .catch((err) => {
      console.log(err.message, err.code);
    });
}

export function Inicial() {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      <Image source={logo} style={styles.image} resizeMode="stretch" />
      <View style={styles.content}>
        <Text style={styles.title}>Warframe inventario{"\n"}</Text>
        <Text style={styles.subtitle}>{"\n"}v.01</Text>
        <ButtonIcon title="Warframe" />
        <ButtonIcon title="Armas" />
      </View>
    </View>
  );
}

// † Cristão †
//onChangeText={(value) => console.log(value)}
//TextInput
//<TextInput style={styles.input} onChangeText={setText} />
//<Text> {text} </Text>
//const [text, setText] = useState("† Cristão †");

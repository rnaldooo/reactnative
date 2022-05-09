import React, { useState } from 'react';
import { Button, PermissionsAndroid, Platform, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from './styles';
import { Profile } from '../../components/Profile';
import { ButtonIcon } from '../../components/ButtonIcon';
import * as FileSystem from 'expo-file-system';
import * as RNFS from 'react-native-fs';
import { selectDirectory } from 'react-native-directory-picker';
import DocumentPicker from 'react-native-document-picker';

function tamanhoEmDisco() {
  //console.log(RNFS.DocumentDirectoryPath.toString());
  //return RNFS.DocumentDirectoryPath;
}

function teste1() {
  const [path, setpath] = useState('');
  setpath: selectDirectory();
  console.log(`The path is ${path}`);
  //RNFS.readFile(filePath.uri, 'base64').then((content) => {console.log(content)});
}

export async function requestStoragePermission() {
  if (Platform.OS !== 'android') return true;

  const pm1 = await PermissionsAndroid.check(
    PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE
  );
  const pm2 = await PermissionsAndroid.check(
    PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE
  );

  if (pm1 && pm2) return true;

  const userResponse = await PermissionsAndroid.requestMultiple([
    PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
    PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
  ]);

  if (
    userResponse['android.permission.READ_EXTERNAL_STORAGE'] === 'granted' &&
    userResponse['android.permission.WRITE_EXTERNAL_STORAGE'] === 'granted'
  ) {
    return true;
  } else {
    return false;
  }
}

export function Configurações() {
  const navigation = useNavigation();
  const [text, setText] = useState('');

  const [singleFile, setSingleFile] = useState('');
  const [multipleFile, setMultipleFile] = useState([]);

  const selectOneFile = async () => {
    //Opening Document Picker for selection of one file
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
        //There can me more options as well
        // DocumentPicker.types.allFiles
        // DocumentPicker.types.images
        // DocumentPicker.types.plainText
        // DocumentPicker.types.audio
        // DocumentPicker.types.pdf
      });
      //Printing the log realted to the file
      console.log('res : ' + JSON.stringify(res));
      // console.log('URI : ' + res.uri);
      // console.log('Type : ' + res.type);
      //console.log('File Name : ' + res.name);
      // console.log('File Size : ' + res.size);
      //Setting the state to show single file attributes

      //setSingleFile(res);
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        alert('Cancelado');
      } else {
        alert('Erro: ' + JSON.stringify(err));
        throw err;
      }
    }
  };

  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.texto}>Configurações</Text>
      </View>

      <Profile />

      <ButtonIcon title='Configurações' iconName='folder' onPress={teste1} />

      <Text style={styles.texto}>Tamanho: {text}</Text>

      <Button
        title='Back'
        onPress={() => {
          navigation.goBack();
        }}
      />
    </View>
  );
}

//}
//const gifDir = FileSystem.cacheDirectory;
//console.log(gifDir);
//console.log(RNFS.DocumentDirectoryPath.toString());
//function espaçoLivre(){
//const gifDir2 = FileSystem.getFreeDiskStorageAsync().then((freeDiskStorage) => {
//  console.log(gifDir2);
//});

//var path: string;
//selectDirectory().then((path) => {
//  console.log(`The path is ${path}`);
//});
//console.log(RNFS.DocumentDirectoryPath.toString());

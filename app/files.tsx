import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList, Alert, Linking } from 'react-native';
import * as DocumentPicker from 'expo-document-picker';
import { Ionicons } from '@expo/vector-icons';

export default function UploadFiles() {
  const [files, setFiles] = useState<DocumentPicker.DocumentResult[]>([]);

  const handleFilePick = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: '*/*', // allows all file types
        copyToCacheDirectory: true,
        multiple: false,
      });

      if (result.type === 'success') {
        setFiles(prev => [...prev, result]);
      }
    } catch (error) {
      Alert.alert('Error', 'Could not pick file.');
    }
  };

  const handleOpenFile = async (uri: string) => {
    try {
      const supported = await Linking.canOpenURL(uri);
      if (supported) {
        await Linking.openURL(uri);
      } else {
        Alert.alert("Can't open this file.");
      }
    } catch (err) {
      Alert.alert("Error", 'Failed to open file.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>File Upload</Text>

      <TouchableOpacity style={styles.uploadButton} onPress={handleFilePick}>
        <Ionicons name="cloud-upload" size={24} color="white" />
        <Text style={styles.uploadText}>Upload File</Text>
      </TouchableOpacity>

      <FlatList
        data={files}
        keyExtractor={(item, index) => `${item.name}-${index}`}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.fileItem}
            onPress={() => handleOpenFile(item.assets?.[0]?.uri ?? '')}
          >
            <Ionicons name="document" size={20} color="#2c3e50" />
            <Text style={styles.fileName}>{item.name}</Text>
          </TouchableOpacity>
        )}
        ListEmptyComponent={<Text style={styles.noFiles}>No files uploaded yet.</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 20,
    backgroundColor: '#f1f8fc',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#2c3e50',
    textAlign: 'center',
  },
  uploadButton: {
    flexDirection: 'row',
    backgroundColor: '#00a3cb',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  uploadText: {
    color: 'white',
    marginLeft: 10,
    fontWeight: 'bold',
    fontSize: 16,
  },
  fileItem: {
    flexDirection: 'row',
    backgroundColor: '#d6eaf8',
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
    alignItems: 'center',
  },
  fileName: {
    marginLeft: 10,
    fontSize: 15,
    color: '#2c3e50',
  },
  noFiles: {
    textAlign: 'center',
    marginTop: 40,
    color: '#aaa',
  },
});

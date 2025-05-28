import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, Modal, Pressable, StatusBar } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useRouter } from 'expo-router';

export default function LocationScreen() {
  const navigation = useNavigation();
  const router = useRouter();

  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState('Select Project');

  const projects = [
    'Building A',
    'Bridge Construction',
    'Road Project',
    'Residential Complex',
  ];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />

      {/* Navigation Bar */}
      <View style={styles.navBar}>
        <TouchableOpacity style={styles.navButton} onPress={() => router.push('/profile')}>
          <Ionicons name="person" size={24} color="#2c3e50" />
        </TouchableOpacity>

        <Text style={styles.navTitle}>BETHANAN ASSOCIATES</Text>

        <TouchableOpacity style={styles.navButton} onPress={() => setDropdownVisible(!dropdownVisible)}>
          <Ionicons name="menu" size={24} color="#2c3e50" />
        </TouchableOpacity>
      </View>

      {/* Dropdown Modal */}
      <Modal
        transparent={true}
        visible={dropdownVisible}
        onRequestClose={() => setDropdownVisible(false)}
      >
        <Pressable style={styles.modalOverlay} onPress={() => setDropdownVisible(false)}>
          <View style={styles.dropdownMenu}>
            {projects.map((project, index) => (
              <TouchableOpacity
                key={index}
                style={styles.dropdownItem}
                onPress={() => {
                  setSelectedOption(project);
                  setDropdownVisible(false);
                }}
              >
                <Text style={styles.dropdownItemText}>{project}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </Pressable>
      </Modal>

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.dateTime}>May 13, 2025</Text>
        <TouchableOpacity style={styles.projectDropdown} onPress={() => setDropdownVisible(true)}>
          <Text style={styles.dropdownText}>{selectedOption}</Text>
          <Ionicons name="chevron-down" size={16} color="#2c3e50" />
        </TouchableOpacity>
      </View>

      {/* Location Section */}
      <View style={styles.mapSection}>
        <Text style={styles.sectionTitle}>Your Live Location</Text>
        <View style={styles.mapPlaceholder}>
          <Text style={styles.mapText}>[ Map Showing Current Location ]</Text>
        </View>

        <Text style={styles.sectionTitle}>Project Location</Text>
        <View style={styles.mapPlaceholder}>
          <Text style={styles.mapText}>[ Map Showing Project Location ]</Text>
        </View>
      </View>

      {/* Bottom Buttons */}
      <View style={styles.bottomButtons}>
        <TouchableOpacity style={styles.bottomButton} onPress={() => router.push('/projects')}>
          <Text style={styles.bottomButtonText}>Project</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomButton}>
          <Text style={styles.bottomButtonText}>Remote</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomButton}>
          <Text style={styles.bottomButtonText}>Create video</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDFD96',
    paddingHorizontal: 16,
  },
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 10,
    backgroundColor: '#FFF44F',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  navTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2c3e50',
  },
  navButton: {
    padding: 8,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 16,
  },
  dateTime: {
    fontSize: 14,
    color: '#666',
  },
  projectDropdown: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
    elevation: 3,
  },
  dropdownText: {
    marginRight: 8,
    color: '#2c3e50',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dropdownMenu: {
    backgroundColor: '#FFF44F',
    borderRadius: 8,
    width: '80%',
    padding: 10,
    elevation: 5,
  },
  dropdownItem: {
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  dropdownItemText: {
    fontSize: 16,
    color: '#2c3e50',
  },
  mapSection: {
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginVertical: 10,
  },
  mapPlaceholder: {
    height: 180,
    backgroundColor: '#fff',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    elevation: 3,
  },
  mapText: {
    color: '#888',
    fontStyle: 'italic',
  },
  bottomButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  bottomButton: {
    backgroundColor: '#3498db',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
    width: '32%',
    alignItems: 'center',
  },
  bottomButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

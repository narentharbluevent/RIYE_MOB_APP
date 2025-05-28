import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Modal, Pressable, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
const router = useRouter();
export default function HomeScreen() {
  const navigation = useNavigation();
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState('Select Project');

  const projects = [
    'Building A',
    'Bridge Construction',
    'Road Project',
    'Residential Complex'
  ];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      
      {/* Navigation Bar */}
      <View style={styles.navBar}>
        <TouchableOpacity 
          style={styles.navButton}
          onPress={() => router.push('/profile')}
        >
          <Ionicons name="person" size={24} color="#2c3e50" />
        </TouchableOpacity>
        
        <Text style={styles.navTitle}>BETHANAN ASSOCIATES</Text>
        
        <TouchableOpacity 
          style={styles.navButton}
          onPress={() => setDropdownVisible(!dropdownVisible)}
        >
          <Ionicons name="menu" size={24} color="#2c3e50" />
        </TouchableOpacity>
      </View>
      
      {/* Dropdown Modal */}
      <Modal
        transparent={true}
        visible={dropdownVisible}
        onRequestClose={() => setDropdownVisible(false)}
      >
        <Pressable 
          style={styles.modalOverlay} 
          onPress={() => setDropdownVisible(false)}
        >
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
      
      {/* Header with date and time and project dropdown */}
      <View style={styles.header}>
        <Text style={styles.dateTime}>May 2, 10:33AM</Text>
        <TouchableOpacity 
          style={styles.projectDropdown}
          onPress={() => setDropdownVisible(true)}
        >
          <Text style={styles.dropdownText}>{selectedOption}</Text>
          <Ionicons name="chevron-down" size={16} color="#2c3e50" />
        </TouchableOpacity>
      </View>
      
      {/* Welcome message */}
      <Text style={styles.welcomeText}>Welcome to the RIYE!</Text>
      
      {/* Main menu buttons */}
      <View style={styles.menuContainer}>
        <View style={styles.menuRow}>
          <TouchableOpacity 
            style={styles.menuButton}
            onPress={() => router.push('/projects')}
          >
            <Ionicons name="briefcase" size={32} color="#2c3e50" />
            <Text style={styles.menuButtonText}>Projects</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={styles.menuButton}
            onPress={() => router.push('/tasks')}
          >
            <Ionicons name="checkbox" size={32} color="#2c3e50" />
            <Text style={styles.menuButtonText}>Tasks</Text>
          </TouchableOpacity>
        </View>
        
        <View style={styles.menuRow}>
          <TouchableOpacity 
            style={styles.menuButton}
            onPress={() => router.push('/files')}
          >
            <Ionicons name="document" size={32} color="#2c3e50" />
            <Text style={styles.menuButtonText}>Files</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={styles.menuButton}
            onPress={() => router.push('/attendence')}
          >
            <Ionicons name="calendar" size={32} color="#2c3e50" />
            <Text style={styles.menuButtonText}>DLR</Text>
          </TouchableOpacity>
        </View>
      </View>
      
      {/* Activity section */}
      <View style={styles.activityContainer}>
        <Text style={styles.sectionTitle}>Activity</Text>
        
        <ScrollView style={styles.activityList}>
          <View style={styles.activityItem}>
            <View style={styles.activityBullet} />
            <View>
              <Text style={styles.activityText}>Inspection 1 completed</Text>
              <Text style={styles.activitySubtext}>Today - {selectedOption}</Text>
            </View>
          </View>
          <View style={styles.activityItem}>
            <View style={styles.activityBullet} />
            <View>
              <Text style={styles.activityText}>Inspection 2 inprocess</Text>
              <Text style={styles.activitySubtext}>Today - {selectedOption}</Text>
            </View>
          </View>
          <View style={styles.activityItem}>
            <View style={styles.activityBullet} />
            <View>
              <Text style={styles.activityText}>Inspection 3 inprocess</Text>
              <Text style={styles.activitySubtext}>Today - {selectedOption}</Text>
            </View>
          </View>
          <View style={styles.activityItem}>
            <View style={styles.activityBullet} />
            <View>
              <Text style={styles.activityText}>Inspection 4 inprocess</Text>
              <Text style={styles.activitySubtext}>Today - {selectedOption}</Text>
            </View>
          </View>
        </ScrollView>
      </View>
      
      {/* Bottom buttons */}
      <View style={styles.bottomButtons}>
        <TouchableOpacity style={styles.bottomButton} onPress={() => router.push('/projects')}>
          <Text style={styles.bottomButtonText}>Project</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.bottomButton} onPress={() => router.push('/location')}>
          <Text style={styles.bottomButtonText}>Location</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.bottomButton} onPress={() => router.push('/attendence')}>
          <Text style={styles.bottomButtonText}>Reports</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#rgba(179, 226, 245, 0.73)',
    paddingHorizontal: 16,
  },
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 10,
    backgroundColor: 'rgba(0, 163, 203, 1)',
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
    alignItems: 'flex-end',
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
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
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
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
    borderRadius: 8,
    width: '80%',
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    backgroundColor: 'rgba(0, 163, 203, 1)',
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
  appTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginTop: 20,
    textAlign: 'center',
  },
  welcomeText: {
    fontSize: 18,
    color: '#666',
    textAlign: 'center',
    marginVertical: 20,
  },
  menuContainer: {
    marginVertical: 20,
    backgroundColor: 'rgb(137, 167, 188)',
    borderRadius: 10,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  menuRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  menuButton: {
    backgroundColor: '#rgb(248, 249, 249)',
    borderRadius: 10,
    padding: 20,
    width: '48%',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  menuButtonText: {
    marginTop: 8,
    fontSize: 16,
    color: '#2c3e50',
  },
  activityContainer: {
    flex: 1,
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 10,
  },
  activityList: {
    borderRadius: 10,
    padding: 16,
    backgroundColor: 'rgb(137, 167, 188)',
  },
  activityItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    marginBottom: 10,
  },
  activityBullet: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#3498db',
    marginRight: 12,
  },
  activityText: {
    fontSize: 16,
    color: '#2c3e50',
  },
  activitySubtext: {
    fontSize: 14,
    color: '#666',
    marginTop: 2,
  },
  bottomButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  bottomButton: {
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
    width: '32%',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 163, 203, 1)',
  },
  bottomButtonText: {
    color: '#fff',
    fontWeight: 'bold',

  },
});
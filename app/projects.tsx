import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, SafeAreaView, ScrollView, StatusBar, Modal, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const router = useRouter();

export default function ProjectPage() {
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

      {/* Project Overview */}
      <View style={styles.projectOverview}>
        <Text style={styles.sectionTitle}>Project Overview</Text>
        <View style={styles.overviewDetails}>
          <Text style={styles.detailTitle}>Project Name: </Text>
          <Text style={styles.detailText}>{selectedOption}</Text>
        </View>
        <View style={styles.overviewDetails}>
          <Text style={styles.detailTitle}>Status: </Text>
          <Text style={styles.detailText}>In Progress</Text>
        </View>
        <View style={styles.overviewDetails}>
          <Text style={styles.detailTitle}>Start Date: </Text>
          <Text style={styles.detailText}>Jan 15, 2025</Text>
        </View>
        <View style={styles.overviewDetails}>
          <Text style={styles.detailTitle}>End Date: </Text>
          <Text style={styles.detailText}>Dec 31, 2025</Text>
        </View>
        <View style={styles.overviewDetails}>
          <Text style={styles.detailTitle}>Budget: </Text>
          <Text style={styles.detailText}>$1,200,000</Text>
        </View>
      </View>

      {/* Task Management */}
      <View style={styles.taskContainer}>
        <Text style={styles.sectionTitle}>Task Management</Text>
        <ScrollView style={styles.taskList}>
          <View style={styles.taskItem}>
            <Text style={styles.taskText}>Foundation Work</Text>
            <Text style={styles.taskSubtext}>In Progress</Text>
          </View>
          <View style={styles.taskItem}>
            <Text style={styles.taskText}>Building Framing</Text>
            <Text style={styles.taskSubtext}>Pending</Text>
          </View>
          <View style={styles.taskItem}>
            <Text style={styles.taskText}>Roof Installation</Text>
            <Text style={styles.taskSubtext}>Pending</Text>
          </View>
        </ScrollView>
      </View>

      {/* Document Management */}
      <View style={styles.documentContainer}>
        <Text style={styles.sectionTitle}>Documents and Files</Text>
        <TouchableOpacity style={styles.documentItem}>
          <Ionicons name="document" size={24} color="#2c3e50" />
          <Text style={styles.documentText}>Blueprints</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.documentItem}>
          <Ionicons name="document" size={24} color="#2c3e50" />
          <Text style={styles.documentText}>Project Contracts</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.documentItem}>
          <Ionicons name="document" size={24} color="#2c3e50" />
          <Text style={styles.documentText}>Work Order</Text> 
        </TouchableOpacity>
      </View>
      {/* Bottom Buttons */}
            <View style={styles.bottomButtons}>
              <TouchableOpacity style={styles.bottomButton} onPress={() => router.push('/attendence')}>
                <Text style={styles.bottomButtonText}>DLR</Text>
              </TouchableOpacity>
              
              <TouchableOpacity style={styles.bottomButton} onPress={() => router.push('/')}>
                <Text style={styles.bottomButtonText}>Home</Text>
              </TouchableOpacity>
              
              <TouchableOpacity style={styles.bottomButton} onPress={() => router.push('/location')}>
                <Text style={styles.bottomButtonText}>Location</Text>
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
    backgroundColor: '#FFF44F',
    borderRadius: 8,
    width: '80%',
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
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
  projectOverview: {
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 10,
  },
  overviewDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 6,
  },
  detailTitle: {
    fontSize: 16,
    color: '#666',
  },
  detailText: {
    fontSize: 16,
    color: '#2c3e50',
  },
  taskContainer: {
    marginTop: 20,
  },
  taskList: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 16,
  },
  taskItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  taskText: {
    fontSize: 16,
    color: '#2c3e50',
  },
  taskSubtext: {
    fontSize: 14,
    color: '#666',
  },
  documentContainer: {
    marginTop: 20,
  },
  documentItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  documentText: {
    fontSize: 16,
    color: '#2c3e50',
    marginLeft: 8,
  },
  activityContainer: {
    marginTop: 20,
  },
  activityList: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 16,
  },
  activityItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
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


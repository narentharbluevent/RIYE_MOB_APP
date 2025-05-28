import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function TeamMenuScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Top Navbar */}
      <View style={styles.navBar}>
        <TouchableOpacity 
          style={styles.navButton}
          onPress={() => router.push('/profile')}
        >
          <Ionicons name="person" size={24} color="#2c3e50" />
        </TouchableOpacity>      
        <Text style={styles.navTitle}>Daily Labour Report</Text>
      </View>

      {/* Header */}
      <Text style={styles.header}>Select Team</Text>

      {/* Team Menu Rows */}
      <View style={styles.menuRow}>
        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => router.push('/team/masonry')}
        >
          <Ionicons name="hammer" size={32} color="#2c3e50" />
          <Text style={styles.menuButtonText}>Masonry Team</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => router.push('/team/barbending')}
        >
          <Ionicons name="construct" size={32} color="#2c3e50" />
          <Text style={styles.menuButtonText}>Barbending Team</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.menuRow}>
        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => router.push('/team/carpentering')}
        >
          <Ionicons name="cut" size={32} color="#2c3e50" />
          <Text style={styles.menuButtonText}>Carpentering Team</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => router.push('/team/plumbing')}
        >
          <Ionicons name="water" size={32} color="#2c3e50" />
          <Text style={styles.menuButtonText}>Plumbing Team</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.menuRow}>
        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => router.push('/team/electrical')}
        >
          <Ionicons name="flash" size={32} color="#2c3e50" />
          <Text style={styles.menuButtonText}>Electrical Team</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => router.push('/team/special_skilled')}
        >
          <Ionicons name="people" size={32} color="#2c3e50" />
          <Text style={styles.menuButtonText}>Special Skilled Team</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.menuRow}>
        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => router.push('/team/fabricating')}
        >
          <Ionicons name="build" size={32} color="#2c3e50" />
          <Text style={styles.menuButtonText}>Fabricating Team</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => router.push('/team/local_labours')}
        >
          <Ionicons name="man" size={32} color="#2c3e50" />
          <Text style={styles.menuButtonText}>Local Labours</Text>
        </TouchableOpacity>
      </View>

      {/* Bottom Buttons */}
      <View style={styles.bottomButtons}>
        <TouchableOpacity style={styles.bottomButton} onPress={() => router.push('/projects')}>
          <Text style={styles.bottomButtonText}>Project</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.bottomButton} onPress={() => router.push('/location')}>
          <Text style={styles.bottomButtonText}>Location</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.bottomButton} onPress={() => router.push('/')}>
          <Text style={styles.bottomButtonText}>Home</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: 'rgba(179, 226, 245, 0.73)',
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
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#2c3e50',
  },
  menuRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  menuButton: {
    flex: 0.48,
    backgroundColor: '#bdc3c7',
    borderRadius: 10,
    paddingVertical: 20,
    alignItems: 'center',
  },
  menuButtonText: {
    marginTop: 10,
    fontSize: 14,
    fontWeight: '600',
    color: '#2c3e50',
    textAlign: 'center',
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


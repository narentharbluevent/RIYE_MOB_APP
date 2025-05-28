import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function AttendanceScreen() {
  const [rows, setRows] = useState([
    {
      name: 'John',
      date: '2025-05-15',
      team: 'Masonry',
      work: 'Concrete',
      shift: 'Day',
      ot: '2',
      skill: 'MC',
      type: 'NMR',
      rate: '1000',
      amount: '1000',
      remarks: '',
      punchIn: '',
      punchOut: '',
    },
  ]);

  const addRow = () => {
    setRows([
      ...rows,
      {
        name: 'New',
        date: '',
        team: '',
        work: '',
        shift: '',
        ot: '',
        skill: '',
        type: '',
        rate: '',
        amount: '',
        remarks: '',
        punchIn: '',
        punchOut: '',
      },
    ]);
  };

  const handlePunch = (index: number, type: 'in' | 'out') => {
    const newRows = [...rows];
    const currentTime = new Date().toLocaleTimeString();
    if (type === 'in') {
      newRows[index].punchIn = currentTime;
    } else {
      newRows[index].punchOut = currentTime;
    }
    setRows(newRows);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Carpentering Labour Report</Text>

      <ScrollView horizontal contentContainerStyle={{ flexGrow: 1 }}>        <View style={styles.table}>
          {/* Table Header */}
          <View style={[styles.tableRow, styles.tableHeader]}>
            <Text style={styles.headerCell}>S.No</Text>
            <Text style={styles.headerCell}>Name</Text>
            <Text style={styles.headerCell}>Date</Text>
            <Text style={styles.headerCell}>Team</Text>
            <Text style={styles.headerCell}>Work</Text>
            <Text style={styles.headerCell}>Shift</Text>
            <Text style={styles.headerCell}>OT</Text>
            <Text style={styles.headerCell}>Skill</Text>
            <Text style={styles.headerCell}>Type</Text>
            <Text style={styles.headerCell}>Rate</Text>
            <Text style={styles.headerCell}>Amount</Text>
            <Text style={styles.headerCell}>Remarks</Text>
            <Text style={styles.headerCell}>Punch In</Text>
            <Text style={styles.headerCell}>Punch Out</Text>
          </View>

          {/* Table Rows */}
          <ScrollView style={{ maxHeight: 300 }}>
            {rows.map((row, index) => (
              <View key={index} style={styles.tableRow}>
                <Text style={styles.cell}>{index + 1}</Text>
                <Text style={styles.cell}>{row.name}</Text>
                <Text style={styles.cell}>{row.date}</Text>
                <Text style={styles.cell}>{row.team}</Text>
                <Text style={styles.cell}>{row.work}</Text>
                <Text style={styles.cell}>{row.shift}</Text>
                <Text style={styles.cell}>{row.ot}</Text>
                <Text style={styles.cell}>{row.skill}</Text>
                <Text style={styles.cell}>{row.type}</Text>
                <Text style={styles.cell}>{row.rate}</Text>
                <Text style={styles.cell}>{row.amount}</Text>
                <Text style={styles.cell}>{row.remarks}</Text>
                <TouchableOpacity onPress={() => handlePunch(index, 'in')}>
                  <Text style={[styles.cell, { color: 'green' }]}>
                    {row.punchIn || 'Punch In'}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handlePunch(index, 'out')}>
                  <Text style={[styles.cell, { color: 'red' }]}>
                    {row.punchOut || 'Punch Out'}
                  </Text>
                </TouchableOpacity>
              </View>
            ))}
          </ScrollView>
        </View>
      </ScrollView>

      {/* Add Row Button */}
      <TouchableOpacity style={styles.addButton} onPress={addRow}>
        <Ionicons name="add-circle" size={24} color="#fff" />
        <Text style={styles.addButtonText}>Add Labour</Text>
      </TouchableOpacity>
    </View>
  );
}

// Colors from your image
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#CDEFFF', // light background
    padding: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: '#0D273D',
  },
  table: {
    backgroundColor: '#A6BED1',
    borderRadius: 10,
    paddingBottom: 8,
    minWidth: 1500,
  },
  tableHeader: {
    backgroundColor: '#0D273D',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  tableRow: {
    flexDirection: 'row',
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderColor: '#ccc',
    alignItems: 'center',
  },
  headerCell: {
    flex: 1,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    fontSize: 12,
  },
  cell: {
    flex: 1,
    textAlign: 'center',
    color: '#000',
    fontSize: 12,
  },
  addButton: {
    marginTop: 16,
    backgroundColor: '#2C3E50',
    padding: 10,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
  },
  addButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    marginLeft: 6,
  },
});

import React from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import { COLORS } from '../Constant'

const data = [
  { name: 'John Doe hjlop', id: '1' },
  { name: 'Jane Smith', id: '2' },
  { name: 'Ghadi Hassan', id: '3' },
  { name: 'John ali ', id: '4' },
  { name: 'Jane Smith', id: '5' },
  { name: 'Ghadi Hassan', id: '6' },
  { name: ' Hassan', id: '7' },
];

const Exercis7 = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTextn}> التمرين  </Text>
        <Text style={styles.headerText}>رقم التمرين</Text>
      </View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          
          <View style={styles.row}>
            <Text style={styles.celln}>{item.name} 
            
            </Text>
            <Text style={styles.cell}>{item.id}</Text>
            
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: 'w',
  },
  header: {
    flexDirection: 'row',
    borderBottomWidth: 2,
    paddingBottom: 10,
    marginBottom: 10,
    backgroundColor: COLORS.white,
    paddingHorizontal: 13,
    borderRadius: 15,
  },
  headerText: {
    flex: 1,
    fontSize: 18,
    fontWeight: 'bold',
    color:'#007acc',
    textAlign: 'right',
    marginTop: 45,  // إضافة تباعد علوي
  },
  headerTextn:{
    flex: 2,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#007acc',
    textAlign: 'right',
    marginTop: 45,  // إضافة تباعد علوي
  },
  row: {
    flexDirection: 'row',
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    backgroundColor: '#fff',
    paddingHorizontal: 19,
    marginBottom: 10,
    borderRadius: 10,
    shadowColor: '#000',
    
    elevation: 2,
  },
  cell: {
    flex: 1,
    fontSize: 18,
    color: '#333',
    textAlign: 'right',
    marginTop: 5, // إضافة تباعد علوي
  },
  celln: {
    flex: 3,
    fontSize: 18,
    color: '#333',
    textAlign: 'right',
    marginTop: 5, // إضافة تباعد علوي
  },
  
});

export default Exercis7;

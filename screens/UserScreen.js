import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Picker, StyleSheet } from 'react-native';
import { Ionicons, FontAwesome5 } from '@expo/vector-icons';

const UserScreen = () => {
  const [petType, setPetType] = useState('Perro');
  const [name, setName] = useState('');
  const [breed, setBreed] = useState('');
  const [sex, setSex] = useState('Macho');
  const [weight, setWeight] = useState('');

  const dogBreeds = ['Labrador', 'Poodle', 'Bulldog'];
  const catBreeds = ['Siamese', 'Persian', 'Maine Coon'];

  const breeds = petType === 'Perro' ? dogBreeds : catBreeds;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>PERFIL DE MI PELUDITO</Text>
      <Text style={styles.subtitle}>Agrega la información de tu amigo</Text>

      <View style={styles.optionContainer}>
        <TouchableOpacity
          style={[styles.option, petType === 'Perro' && styles.selectedOption]}
          onPress={() => setPetType('Perro')}
        >
          <FontAwesome5 name="dog" size={24} color="black" />
          <Text style={styles.optionText}>Perro</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.option, petType === 'Gato' && styles.selectedOption]}
          onPress={() => setPetType('Gato')}
        >
          <FontAwesome5 name="cat" size={24} color="black" />
          <Text style={styles.optionText}>Gato</Text>
        </TouchableOpacity>
      </View>

      <TextInput
        style={styles.input}
        placeholder="Nombre*"
        value={name}
        onChangeText={setName}
      />

      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={breed}
          style={styles.picker}
          onValueChange={(itemValue) => setBreed(itemValue)}
        >
          <Picker.Item label="Seleccionar" value="" />
          {breeds.map((breed, index) => (
            <Picker.Item key={index} label={breed} value={breed} />
          ))}
        </Picker>
      </View>

      <View style={styles.optionContainer}>
        <TouchableOpacity
          style={[styles.option, sex === 'Macho' && styles.selectedOption]}
          onPress={() => setSex('Macho')}
        >
          <Ionicons name="male" size={24} color="black" />
          <Text style={styles.optionText}>Macho</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.option, sex === 'Hembra' && styles.selectedOption]}
          onPress={() => setSex('Hembra')}
        >
          <Ionicons name="female" size={24} color="black" />
          <Text style={styles.optionText}>Hembra</Text>
        </TouchableOpacity>
      </View>

      <TextInput
        style={styles.input}
        placeholder="Peso*"
        value={weight}
        onChangeText={setWeight}
        keyboardType="numeric"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#87CEFA',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  optionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  option: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
    marginHorizontal: 5,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'gray',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  selectedOption: {
    backgroundColor: '#ffebcd',
    borderColor: 'black',
  },
  optionText: {
    fontSize: 16,
    marginLeft: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
    backgroundColor: 'white',
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
    marginBottom: 20,
    backgroundColor: 'white',
  },
  picker: {
    flex: 1,
    height: 40,
  },
});

export default UserScreen;

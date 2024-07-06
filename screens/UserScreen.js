import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Picker, StyleSheet } from 'react-native';
import { Ionicons, FontAwesome5 } from '@expo/vector-icons';

const UserScreen = () => {
  const [petType, setPetType] = useState('Perro');
  const [name, setName] = useState('');
  const [breed, setBreed] = useState('');
  const [sex, setSex] = useState('Macho');
  const [weight, setWeight] = useState('');
  const [ownerName, setOwnerName] = useState('');
  const [ownerEmail, setOwnerEmail] = useState('');

  const dogBreeds = ['Labrador', 'Poodle', 'Bulldog'];
  const catBreeds = ['Siamese', 'Persian', 'Maine Coon'];

  const breeds = petType === 'Perro' ? dogBreeds : catBreeds;

  const handleRegister = () => {
    // Aquí puedes implementar la lógica para registrar los datos, por ejemplo, enviar a una API.
    console.log('Registrando datos:', {
      petType,
      name,
      breed,
      sex,
      weight,
      ownerName,
      ownerEmail,
    });
    // Aquí puedes reiniciar los estados o realizar cualquier acción posterior al registro.
  };

  const handleUpdate = () => {
    // Aquí puedes implementar la lógica para actualizar los datos, por ejemplo, enviar a una API.
    console.log('Actualizando datos:', {
      petType,
      name,
      breed,
      sex,
      weight,
      ownerName,
      ownerEmail,
    });
    // Aquí puedes reiniciar los estados o realizar cualquier acción posterior a la actualización.
  };

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

      <Text style={styles.ownerTitle}>DATOS DEL DUEÑO</Text>

      <TextInput
        style={styles.input}
        placeholder="Nombre del Dueño*"
        value={ownerName}
        onChangeText={setOwnerName}
      />

      <TextInput
        style={styles.input}
        placeholder="Correo Electrónico del Dueño*"
        value={ownerEmail}
        onChangeText={setOwnerEmail}
        keyboardType="email-address"
      />

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleRegister}>
          <Text style={styles.buttonText}>Registrar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleUpdate}>
          <Text style={styles.buttonText}>Actualizar</Text>
        </TouchableOpacity>
      </View>
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
  ownerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  button: {
    backgroundColor: '#e91e63',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default UserScreen;

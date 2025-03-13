import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import { Text } from 'react-native-paper'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import TextInput from '../components/TextInput'
import BackButton from '../components/BackButton'
import { theme } from '../core/theme'
import { CustomDropDownList } from '../components/CustomDropDownList'

export function ArticleScreen({ navigation }) {
  const [name, setName] = useState({ value: '', error: '' })
  const [description, setDescription] = useState({ value: '', error: '' })
  const [selectedType, setSelectedType] = useState(null)
  const [selectedState, setSelectedState] = useState(null)
  const [selectedLocation, setSelectedLocation] = useState(null)

  const itemTypes = [
    { title: 'Mobiliario de oficina' },
    { title: 'Equipo de cómputo' },
    { title: 'Otros' },
  ]

  const itemState = [
    { title: 'Sin determinar' },
    { title: 'Mal estado' },
    { title: 'Regular' },
    { title: 'Buen estado' },
    { title: 'Excelente estado' },
  ]

  const locations = [
    { title: 'Almacén' },
    { title: 'Recepción' },
  ]

  return (
    <Background>
      <BackButton goBack={navigation.goBack} />
      <Logo />
      <Header>Agregar artículo</Header>

      <TextInput
        label="Nombre del artículo"
        returnKeyType="next"
        value={name.value}
        onChangeText={(text) => setName({ value: text, error: '' })}
        error={!!name.error}
        errorText={name.error}
        style={styles.input}
      />

      <TextInput
        label="Descripción general"
        returnKeyType="next"
        value={description.value}
        onChangeText={(text) => setDescription({ value: text, error: '' })}
        error={!!description.error}
        errorText={description.error}
        style={styles.input}
      />

      <CustomDropDownList
        data={itemTypes}
        placeholder="Seleccionar tipo de artículo"
        selectedValue={selectedType}
        setSelectedValue={setSelectedType}
        style={styles.dropdown}
      />

      <CustomDropDownList
        data={itemState}
        placeholder="Seleccionar estado del artículo"
        selectedValue={selectedState}
        setSelectedValue={setSelectedState}
        style={styles.dropdown}
      />

      <CustomDropDownList
        data={locations}
        placeholder="Seleccionar ubicación"
        selectedValue={selectedLocation}
        setSelectedValue={setSelectedLocation}
        style={styles.dropdown}
      />

      <Button mode="contained" style={styles.button}>Guardar artículo</Button>
    </Background>
  )
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#f3e5f5', // light purple background for inputs
    marginBottom: 10,
  },
  dropdown: {
    backgroundColor: '#f3e5f5', // light purple background for dropdowns
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#9c4dcc', // light purple button color
    marginTop: 24,
  },
})

import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Text } from 'react-native-paper'
import SelectDropdown from 'react-native-select-dropdown'
import Ionicons from '@expo/vector-icons/Ionicons'
import { theme } from '../core/theme'

const purpleTheme = {
  colors: {
    primary: '#A78BFA', 
    primaryLight: '#D8B4FE', 
    surface: '#F3E8FF', 
    text: '#4C1D95', 
  },
};

export function CustomDropDownList({ data, placeholder, selectedValue, setSelectedValue }) {
  return (
    <SelectDropdown
      data={data}
      onSelect={(selectedItem) => setSelectedValue(selectedItem)}
      renderButton={(selectedItem, isOpened) => (
        <View style={styles.dropdownButtonStyle}>
          <Text style={styles.dropdownButtonTxtStyle}>
            {(selectedItem && selectedItem.title) || placeholder}
          </Text>
          <Ionicons 
            name={isOpened ? 'chevron-up' : 'chevron-down'} 
            size={20} 
            color={purpleTheme.colors.text} 
            style={styles.dropdownButtonArrowStyle}
          />
        </View>
      )}
      renderItem={(item, index, isSelected) => (
        <View style={{ 
          ...styles.dropdownItemStyle, 
          ...(isSelected && { backgroundColor: purpleTheme.colors.primaryLight }) 
        }}>
          <Text style={styles.dropdownItemTxtStyle}>{item.title}</Text>
        </View>
      )}
      buttonStyle={styles.customDropdownButton}
      dropdownStyle={styles.dropdownMenuStyle}
    />
  )
}

const styles = StyleSheet.create({
  dropdownButtonStyle: {
    width: '100%',
    height: 50,
    backgroundColor: purpleTheme.colors.surface,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: purpleTheme.colors.primary,
  },
  dropdownButtonTxtStyle: {
    flex: 1,
    fontSize: 16,
    fontWeight: '500',
    color: purpleTheme.colors.text,
  },
  dropdownButtonArrowStyle: {
    fontSize: 20,
  },
  dropdownMenuStyle: {
    backgroundColor: purpleTheme.colors.surface,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: purpleTheme.colors.primary,
  },
  dropdownItemStyle: {
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  dropdownItemTxtStyle: {
    fontSize: 16,
    fontWeight: '500',
    color: purpleTheme.colors.text,
  },
  customDropdownButton: {
    backgroundColor: purpleTheme.colors.surface,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: purpleTheme.colors.primary,
  },
})
import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { RoundedCheckbox } from 'react-native-rounded-checkbox'
import Responsiveness from '../../helpers/Responsiveness'
import Checkbox from 'expo-checkbox'

interface SurverProps {
    type: 'rounded' | 'box',
    children: String,
}

const SurveyItem: React.FC<SurverProps> = ({type, children}) => {
    const [isChecked, setIsChecked] = useState(false)
  return (
    <View style={{borderBottomWidth: 2, borderColor: "#EEEE"}} className='flex flex-row items-center space-x-4 py-6'>
        {type === "rounded" ? <RoundedCheckbox
            onPress={(checked) => console.log("Checked: ", checked)}
            checkedColor="blue"
            text=""
            outerStyle={{width: Responsiveness.getResponsiveWidth(5), height: Responsiveness.getResponsiveWidth(5)}}
            innerStyle={{width: Responsiveness.getResponsiveWidth(5), height: Responsiveness.getResponsiveWidth(5)}}
        /> : <Checkbox
            style={styles.checkbox}
            value={isChecked}
            // onValueChange={handleValueChange}
            color={isChecked ? "#4630EB" : undefined}
        />}
        <Text>{children}</Text>
      </View>
  )
}

export default SurveyItem

const styles = StyleSheet.create({
    checkbox: {
      margin: 8,
      height: Responsiveness.getResponsiveWidth(4),
      width: Responsiveness.getResponsiveWidth(4),
      borderRadius: 5,
    }
  });
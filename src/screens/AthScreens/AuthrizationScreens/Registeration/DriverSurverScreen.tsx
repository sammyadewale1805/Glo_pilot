import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import Header from '../../../../widget/Header'
import Responsiveness from '../../../../helpers/Responsiveness'
import ProgressBar from '../../../../component/Verification/ProgressBar'
import { RoundedCheckbox } from 'react-native-rounded-checkbox'
import SurveyItem from '../../../../component/Registeration/SurveyItem'
import Btn from '../../../../widget/Btn'

const DriverSurverScreen = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false} className='flex flex-1 bg-white px-4'>
      <View style={{marginTop: Responsiveness.getResponsiveWidth(5)}}>
        <Header type='Back-Button' />
      </View>
      <ProgressBar/>
      <View>
        <Text style={{fontWeight: '600', fontSize: Responsiveness.getResponsiveWidth(5)}}>
            Why do you want to drive with
            GloPilots?
        </Text>

        <View>
            <SurveyItem type='rounded' children={"Be my own boss"} />
            <SurveyItem type='rounded' children={"Make extra money on the side"} />
            <SurveyItem type='rounded' children={"Save for a specific purchase"} />
            <SurveyItem type='rounded' children={"Meet new people"} />
            <SurveyItem type='rounded' children={"Need something temporary"} />
        </View>
      </View>
      <View style={{marginTop: Responsiveness.getResponsiveWidth(5)}}>
        <Text style={{fontWeight: '600', fontSize: Responsiveness.getResponsiveWidth(5)}}>
        How many hours are looking to drive
        each week?
        </Text>

        <View>
            <SurveyItem type='rounded' children={"Fewer than 5 hours"} />
            <SurveyItem type='rounded' children={"5-15 hours"} />
            <SurveyItem type='rounded' children={"6-20 hours"} />
            <SurveyItem type='rounded' children={"21-35 hours"} />
            <SurveyItem type='rounded' children={"36+ hours"} />
        </View>
      </View>
      <View style={{marginTop: Responsiveness.getResponsiveWidth(5)}}>
        <Text style={{fontWeight: '600', fontSize: Responsiveness.getResponsiveWidth(5)}}>
        When do you want to drive?
        </Text>

        <View>
            <SurveyItem type='box' children={"Morning"} />
            <SurveyItem type='box' children={"Afternoon"} />
            <SurveyItem type='box' children={"Evening"} />
            <SurveyItem type='box' children={"Night"} />
            <SurveyItem type='box' children={"Weekend"} />
            <SurveyItem type='box' children={"Weekday"} />
            <SurveyItem type='box' children={"All time of the day"} />
        </View>
      </View>
      <View style={{marginTop: Responsiveness.getResponsiveWidth(5)}}>
        <Text style={{fontWeight: '600', fontSize: Responsiveness.getResponsiveWidth(5)}}>
        Are you applying to drive with any
        other app?
        </Text>

        <View>
            <SurveyItem type='rounded' children={"No, Just Glopilots"} />
            <SurveyItem type='rounded' children={"Yes, Rideshare apps"} />
            <SurveyItem type='rounded' children={"Yes, Delivery Apps"} />
            <SurveyItem type='rounded' children={"21-35 hours"} />
            <SurveyItem type='rounded' children={"Yes, Both rideshare and delivery apps"} />
        </View>
      </View>
      <View className='items-center my-8'>
        <Btn type='action' label={"Next"}/>
      </View>
    </ScrollView>
  )
}

export default DriverSurverScreen
import React from "react";
import { View, Text } from "react-native"

import { CustomPicker, CustomPickerDate } from "../custom-picker"; 
import {} from "./styles"
import { s } from "./styles"

const services = [
    {label: "Nutrição", value: "Nutrição"},
    {label: "Odontologia", value: "Odontologia"},
    {label: "Fisioterapia", value: "Fisioterapia"},
    {label: "Nefrologista", value: "Nefrologista"},
    {label: "Clínico Geral", value: "Clínico Geral"}
]

const doctors = [
    {label: "Dra. Meredith Grey", value: "Dra. Meredith Grey"},
    {label: "Dra. Caliup Torres", value: "Dra. Caliup Torres"},
    {label: "Dr. Derek Shepherd", value: "Dr. Derek Shepherd"},
    {label: "Dra. Miranda Bailey", value: "Dra. Miranda Bailey"},
    {label: "Dr. Mark Sloan", value: "Dr. Mark Sloan"},
    {label: "Dr. Richard Webber", value: "Dr. Richard Webber"}
]

const horários = [
    {label: "08:00", value: "08:00"},
    {label: "09:00", value: "09:00"},
    {label: "14:00", value: "14:00"},
    {label: "17:00", value: "17:00"}
]

function FormScheduling() {
    return(
        <View style={s.container}>
            <Text style={s.label}>Serviço</Text>
            <CustomPicker options={services}></CustomPicker>

            <Text style={s.label}>Médico</Text>
            <CustomPicker options={doctors}></CustomPicker>

            <Text style={s.label}>Dia do atendimento</Text>
            <CustomPickerDate></CustomPickerDate>

            <Text style={s.label}>Horário</Text>
            <CustomPicker options={horários}></CustomPicker>
        </View>
    )
}

export { FormScheduling };
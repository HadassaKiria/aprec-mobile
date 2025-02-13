import React from "react";
import {View, Text, TouchableOpacity} from "react-native"

import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack'; 
import { StackParamsList } from '../../routes/auth.routes';

import { Ionicons } from "@expo/vector-icons";

import { colors } from "../../styles/colors"
import { s } from "./styles";
import { FormScheduling } from "../../components/form-scheduling"; 


export default function ConsultPage(){
    const navigation = useNavigation<NativeStackNavigationProp<StackParamsList>>();
    
    return(
        <View style={s.container}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={s.icon}>
                <Ionicons name="arrow-back" size={24} color={colors.orange[500]} />
            </TouchableOpacity>

            <Text style={s.title}>Agendamento</Text>

            <FormScheduling></FormScheduling>

        </View>
    )
}
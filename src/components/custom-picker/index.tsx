import React, { useState } from "react";
import { View, Platform, TouchableOpacity, TextInput } from "react-native";

import DateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker';
import { Picker } from "@react-native-picker/picker"; 

import { s } from "./styles"
import { Ionicons } from "@expo/vector-icons";


type PickerItem = {
    label: string;
    value: string
}

type CustomPickerProps = {
    options: PickerItem[];
}


function CustomPicker({ options }: CustomPickerProps) {
    const [selectedValue, setSelectedValue] = useState<string>('');

    const handleValueChange = (value: string) => {
        setSelectedValue(value);
    }

    return(
        <View style={s.container}>
            <View style={s.pickerContainer}>
                <Picker
                    style={s.input}
                    selectedValue={selectedValue}
                    onValueChange={handleValueChange}
                >
                    <Picker.Item label="" value=""/>
                    {options.map((option, index) => (
                        <Picker.Item key={index} value={option.value} label={option.label} />
                    ))}
                </Picker>
            </View>
        </View>
    );
}

function CustomPickerDate(){
    const [date, setDate] = useState<Date | null>(null);
    const [show, setShow] = useState(false);

    const handleOnChange = (event: any, selectedDate?: Date) => {
        if(selectedDate){
            setDate(selectedDate);
        }
        setShow(false);
    }

    return (
        <View style={s.containerDate}>
            <TouchableOpacity onPress={() => setShow(true)} style={s.inputWrapper}>
                <TextInput
                    value={date?.toLocaleDateString()}
                    editable={false}
                    style={s.inputContainer}
                />
                <Ionicons name='calendar-outline' size={24} style={s.iconDate} />
            </TouchableOpacity>

            {show && (
                <DateTimePicker
                    value={date ?? new Date()}
                    mode='date'
                    display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                    onChange={handleOnChange}
                />
            )}
        </View>
    )
}

export { CustomPicker,
    CustomPickerDate
 };
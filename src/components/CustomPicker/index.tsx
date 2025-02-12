import React, { useState } from "react";
import { View } from "react-native";

import { Picker } from "@react-native-picker/picker"; 

import { s } from "./styles"


type PickerItem = {
    label: string;
    value: string
}

type CustomPickerProps = {
    options: PickerItem[];
}


function CustomPicker({ options }: CustomPickerProps) {
    const [selectedValue, setSelectedValue] = useState<string>("");

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
                    {options.map((option, index) => (
                        <Picker.Item key={index} value={option.value} label={option.label} />
                    ))}
                </Picker>
            </View>
        </View>
    );
}

export { CustomPicker };
import { View, Text, TextInput, TextProps } from "react-native"

import { s } from "./styles"

type Props = {
    label: string
    placeholder: string
}

function Input({ label, placeholder }: Props){
    return(
        <View style={s.container}>
            <Text style={s.label}>{label}</Text>
            <TextInput
                placeholder={placeholder}
                style={s.containerInput}
            />
        </View>
    )
}

export { Input }
import React, { useState, useEffect } from 'react';
import { View, Text, Image, FlatList, TouchableOpacity, ActivityIndicator, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackParamsList } from '../../routes/auth.routes';
import { api } from '../../services/api';
import { s } from './styles';
import { colors } from '../../styles/colors';
 
type NewsData = {
    id: number;
    title: string;
    media: string;
};
 
export default function News() {
    const [data, setData] = useState<NewsData[]>([]);
    const [loading, setLoading] = useState(true);
    const navigation = useNavigation<NativeStackNavigationProp<StackParamsList>>();
 
    async function fetchNews() {
        try {
            const response = await api.get('/feed');
            setData(response.data.feeds || []);
        } catch (error) {
            console.error("Fetch error:", error);
            Alert.alert("Erro", "Erro ao carregar notícias.");
        } finally {
            setLoading(false);
        }
    }
 
    useEffect(() => {
        fetchNews();
    }, []);
 
    if (loading) {
        return (
            <View style={s.container}>
                <ActivityIndicator size="large" color={colors.orange[500]} />
            </View>
        );
    }
 
    return (
        <View style={s.container}>
            <FlatList
                data={data}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={s.card}
                        onPress={() => navigation.navigate('NewsDetail', { feedId: item.id })}
                    >
                        <Image source={{ uri: item.media }} style={s.image} />
                        <View style={s.textContainer}>
                            <Text style={s.title}>{item.title}</Text>
                        </View>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
}
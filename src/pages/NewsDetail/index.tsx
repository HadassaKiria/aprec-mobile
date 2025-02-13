import React, { useEffect, useState } from "react";
import { View, Text, Image, Alert, ActivityIndicator, TouchableOpacity } from "react-native"

import { useRoute } from "@react-navigation/native"; 
import { Ionicons } from "@expo/vector-icons";

import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack'; 
import { StackParamsList } from '../../routes/auth.routes';

import { api } from "../../services/api"; 
import { colors } from "../../styles/colors"
import { s } from "./styles"


type RouteParams = {
    feedId: number;
}

type NewsData = {
    title: string;
    description: string;
    media: string;
}

export default function NewsDetail(){
    const navigation = useNavigation<NativeStackNavigationProp<StackParamsList>>();
    
    const route = useRoute();
    const { feedId } = route.params as RouteParams

    const [news, setNews] = useState<NewsData>({
        title: "",
        description: "",
        media: ""
    });

    const [loading, setLoading] = useState(false);

    async function fetchNewsDetail(){
        try {
            setLoading(true)
            const response = await api.get(`/feed/${feedId}`);
            setNews(response.data);
        } catch (error) {
            console.log('Erro ao acessar', error)
            Alert.alert(
                "Erro",
                "Erro ao carregar notícia."
            );
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchNewsDetail();
    }, []);
    
    return(
        <View style={s.container}>
            {loading ? (
                <ActivityIndicator size={60} color={colors.orange[500]} />
            ) : news ? (
                <>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={s.icon}>
                        <Ionicons name="arrow-back" size={24} color={colors.orange[500]} />
                    </TouchableOpacity>

                    <Image source={{ uri: news.media }} style={s.image} />
                    
                    <Text style={s.title}>{news.title}</Text>
                    <Text style={s.description}>{news.description}</Text>
                </>
            ) : (
                <Text>Notícia não encontrada.</Text>
            )}
        </View>
    )
}
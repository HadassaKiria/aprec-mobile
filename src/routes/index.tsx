import React, { useContext } from 'react';

import {View, ActivityIndicator} from 'react-native'

import { colors } from "../styles/colors"

import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes';
import { AuthContext } from "../contexts/AuthContext"

function Routes(){
    const { isAuthenticated, loading } = useContext(AuthContext)

    if(loading){
        return(
            <View
                style={{
                    flex:1, 
                    backgroundColor: '#FFF',
                    justifyContent: 'center', 
                    alignItems: 'center' 
                    }}
            >
                <ActivityIndicator  size={60} color={colors.orange[500]} />
            </View>
        )
    }

    return(
        isAuthenticated ? <AppRoutes/> : <AuthRoutes/>
    )
}

export default Routes;
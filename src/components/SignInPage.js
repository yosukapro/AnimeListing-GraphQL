import React from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
// import { ANI_CODE, CLIENT_ID, CLIENT_SECRET, REDIRECT_URI } from '../constants';
import styles from './styles'

// var options = {
//     uri: 'https://anilist.co/api/v2/oauth/token',
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json',
//         'Accept': 'application/json',
//     },
//     json: {
//         'grant_type': 'authorization_code',
//         'client_id': CLIENT_ID,
//         'client_secret': CLIENT_SECRET,
//         'redirect_uri': REDIRECT_URI, // http://example.com/callback
//         'code': ANI_CODE, // The Authorization Code received previously
//     }
// };

export default function ({navigation}) {
    const pressSignIn = () => {
        navigation.navigate("Home")
    }

    return (
        <View style={styles.root}>
            <TouchableOpacity style={styles.btnSignIn} onPress={pressSignIn}>
                <Text>Sign in</Text>
            </TouchableOpacity>
        </View>
    )
}
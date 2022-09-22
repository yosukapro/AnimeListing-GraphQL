import React from 'react'
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native'

export default ItemMedia = ({item}) => {
    const {media, status, updatedAt} = item
    const {title, coverImage, type} = media || {}

    const getStatus = () => {
        switch (status) {
            case 'CURRENT':
                return `Currently ${type === 'ANIME' ? 'watching' : 'reading'}`
            case 'PLANNING':
                return `Planning to ${type === 'ANIME' ? 'watch' : 'read'}`
            case 'COMPLETED':
                return `Finished ${type === 'ANIME' ? 'watching' : 'reading'}`
            case 'DROPPED':
                return `Stopped ${type === 'ANIME' ? 'watching' : 'reading'} before completing`
            case 'PAUSED':
                return `Paused ${type === 'ANIME' ? 'watching' : 'reading'}`
            case 'REPEATING':
                return `Re-${type === 'ANIME' ? 'watching' : 'reading'}`
        
            default:
                break;
        }
    }

    if(!item) return null
    return (
        <View style={styles.root}>
            <Image source={{uri: coverImage?.medium}} style={styles.coverImage}/>
            <TouchableOpacity style={styles.viewRow}>
                <Text style={styles.mw70}>{getStatus()}
                    <Text style={styles.colorMovie}>
                        {' ' + title.native}
                    </Text>
                </Text>
                <Text style={styles.txtTime}>
                    {updatedAt}
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        flexDirection: 'row',
        borderTopLeftRadius: 4,
        borderBottomLeftRadius: 4,
        height: 80,
        backgroundColor: '#FFF',
        marginBottom: 12
    },
    coverImage: {
        height: '100%',
        aspectRatio: 0.6,
        borderTopLeftRadius: 4,
        borderBottomLeftRadius: 4
    },
    viewRow: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
        paddingHorizontal: 14
    },
    colorMovie: {
        color: 'pink'
    },
    txtTime: {
        marginLeft: 'auto',
        fontSize: 14,
        fontWeight: 'bold',
        color: 'grey'
    },
    mw70: {
        maxWidth: '70%'
    }
})
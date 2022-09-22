import { StyleSheet } from 'react-native'

export const PINK = '#ff5dc8'

export const screenOptions = {
    headerStyle: {
        backgroundColor: PINK,
    },
    headerTintColor: '#fff',
}

export default StyleSheet.create({
    centered: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    item: {
        paddingTop: 16,
        paddingBottom: 16,
        paddingLeft: 20,
        paddingRight: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc',
    },
    header: {
        fontWeight: 'bold',
    },
    subheader: {
        paddingTop: 10,
    },
    root: {
        flex: 1,
        justifyContent: 'center',
    },
    btnSignIn: {
        width: '90%',
        height: 48,
        backgroundColor: 'pink',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'
    },
    viewRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    avatar: {
        width: 30,
        height: 30,
        borderRadius: 15,
        marginHorizontal: 12
    },
    ml10: {
        marginLeft: 10
    },
    flatList: {
        flexGrow: 1,
        paddingHorizontal: 20,
        paddingVertical: 14
    },
    btnAddMedia: {
        position: 'absolute',
        bottom: 20,
        right: 20,
        width: 50,
        height: 50,
        borderRadius: 25,
        elevation: 4,
        backgroundColor: 'pink',
        justifyContent: 'center',
        alignItems: 'center'
    },
    txtAdd: {
        color: '#FFF',
        fontSize: 24,
        fontWeight: 'bold'
    }
})
import { ActivityIndicator, FlatList, Image, Text, TouchableOpacity, View } from 'react-native'
import React, { Fragment, useEffect, useLayoutEffect, useState } from 'react'
import { useLazyQuery, useMutation, useQuery } from '@apollo/client'
import { ANIME_MOVIES_QUERY, MUTATION_SAVE_MEDIA_LIST_ENTRY, VIEWER_QUERY } from '../graphQL'
import AppLoading from './Loading'
import styles, { PINK } from './styles'
import ItemMedia from './ItemMedia'

const PER_PAGE = 10

export default function ({ navigation }) {
    const [user, setUser] = useState()
    const [mediaLoading, setMediaLoading] = useState(true)
    const [mediaList, setMediaList] = useState([])
    const [page, setPage] = useState(1)
    const [endReached, setEndReached] = useState(false)


    const { loading } = useQuery(VIEWER_QUERY, {
        onCompleted(data) {
            setUser(data?.Viewer)
        }
    })

    const [getMediaList] = useLazyQuery(ANIME_MOVIES_QUERY, {
        onCompleted(data) {
            const { mediaList: mediaListGRQ, pageInfo } = data.Page || {}
            if (!pageInfo.hasNextPage) setEndReached(true)
            else setPage(prev => prev + 1)
            setMediaList(mediaListGRQ)
            setMediaLoading(false)
        },
        onError(error) {
            setMediaLoading(false)
        }
    })

    const [mutateSaveMediaList, {loading: addLoading}] = useMutation(MUTATION_SAVE_MEDIA_LIST_ENTRY)

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <View style={styles.viewRow}>
                    {loading
                        ? <ActivityIndicator size={'small'} color={PINK} />
                        : <>
                            <Text>{user?.name}</Text>
                            <Image source={{ uri: user?.avatar?.medium }} style={styles.avatar} />
                        </>}
                </View>
            ),
        })
    }, [navigation, user])

    useEffect(() => {
        if (user) fetchData()
    }, [user])

    const fetchData = (page) => {
        getMediaList({
            variables: {
                page,
                perPage: PER_PAGE,
                userId: user.id
            }
        })
    }

    const loadMore = () => {
        if (!endReached && !mediaLoading) {
            fetchData(page + 1)
        }
    }

    const pressAdd = () => {
        mutateSaveMediaList({
            variables: {
                mediaId: 1,
                status: 'CURRENT',
            },
            onCompleted(data) {
                setMediaList(prev => [data.SaveMediaListEntry, ...prev])
            },
            onError(err) {
                console.log("Save list media error", JSON.stringify(err))
            }
        })
    }

    const renderItem = ({ item }) => (
        <ItemMedia item={item} />
    )

    const renderFooter = () => (
        <View style={styles.viewRow}>
            <ActivityIndicator animating size="small" />
            <Text style={styles.ml10}>{'Loading...'}</Text>
        </View>
    )

    const ListEmptyComponent = () => (
        <View style={styles.centered}>
            <Text>No result found!</Text>
        </View>
    )

    if (mediaLoading) {
        return <AppLoading />
    }
    return (
        <Fragment>
            <FlatList
                data={mediaList}
                renderItem={renderItem}
                keyExtractor={(_, index) => index.toString()}
                onEndReachedThreshold={0.1}
                onEndReached={loadMore}
                ListFooterComponent={!endReached ? renderFooter() : null}
                ListEmptyComponent={endReached ? ListEmptyComponent : null}
                style={styles.flatList}
            />
            <TouchableOpacity style={styles.btnAddMedia} onPress={pressAdd} disabled={addLoading}>
                <Text style={styles.txtAdd}>+</Text>
            </TouchableOpacity>
        </Fragment>
    )
}
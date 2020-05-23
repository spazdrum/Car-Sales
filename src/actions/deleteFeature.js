export const deleteFeature = item => {
    return {
        type: 'DELETE_ITEM',
        payload: item
    }
}
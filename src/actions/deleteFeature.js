export const DELETE_FEATURE = 'DELETE_FEATURE'

export const deleteFeature = item => {
    return {
        type: 'DELETE_FEATURE',
        payload: item
    }
}
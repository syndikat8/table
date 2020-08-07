import {BaseThunkType, InferActionTypes} from "./store";
import {DataType, tableApi} from "../api/api";

const initialState = {
    items: [] as Array<DataType>,
    pageSize: 10,
    currentPage: 0,
    isLoading: true,
    search: ""
}

type InitialStateType = typeof initialState

export const table = (state: InitialStateType = initialState, action: TableActionType): InitialStateType => {
    switch (action.type) {
        case "tableReducer/GET_ITEMS":
            return {
                ...state,
                items: action.items
            }

        case "tableReducer/SET_CURRENT_PAGE":
            return {...state, currentPage: action.currentPage}

        case "tableReducer/ADD_ITEM":
            return {
                ...state,
                items: [action.item, ...state.items]
            }

        case "tableReducer/LOADING_IS_FETCHING":
            return {...state, isLoading: action.isLoading}

        case "tableReducer/SEARCH":
            return {
                ...state,
                search: action.name,
                currentPage: 0
            }
    }
    return state;
}

type TableActionType = InferActionTypes<typeof actions>

export const actions = {
    loadingIsFetching: (isLoading: boolean) => ({type: 'tableReducer/LOADING_IS_FETCHING', isLoading} as const),
    getItems: (items: Array<DataType>) => ({type: 'tableReducer/GET_ITEMS', items} as const),
    setCurrentPage: (currentPage: number) => ({type: 'tableReducer/SET_CURRENT_PAGE', currentPage} as const),
    addItem: (item: DataType) => ({type: 'tableReducer/ADD_ITEM', item} as const),
    search: (name: string ) => ({type: 'tableReducer/SEARCH', name} as const),
}

type ThunkType = BaseThunkType<TableActionType>

export const getItems = (rows: number, delay: number): ThunkType => async (dispatch) => {
    try {
        const data = await tableApi.getItems(rows, delay)
        dispatch(actions.getItems(data))
        dispatch(actions.loadingIsFetching(false))
    } catch (err) {
        console.log(err.name)
        console.log(err.message)
    }
}


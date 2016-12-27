const DASHBOARD_INCREMENT = 'DASHBOARD_INCREMENT'
const DASHBOARD_ADD_ITEM = 'DASHBOARD_ADD_ITEM'
const DASHBOARD_EDIT_ITEM = 'DASHBOARD_EDIT_ITEM'

export const visitsIncrement = (value = 1) => ({
  type: DASHBOARD_INCREMENT,
  value
})

export const dashboardAddItem = (label) => ({
    type: DASHBOARD_ADD_ITEM,
    label
})

export const dashboardEditItem = (label, index) => ({
    type: DASHBOARD_EDIT_ITEM,
    label,
    index
})

const initialState = {
    visitsCount: 0,
    list: [
        {key: 0, label: 'None1'},
        {key: 1, label: 'test'},
        {key: 3, label: 'vas te faire foutre'},
        {key: 4, label: 'essai'}
    ]
}

export default function dashboard(state = initialState, action) {
  switch (action.type) {
    case DASHBOARD_INCREMENT:
        state.visitsCount = state.visitsCount + action.value
        return Object.assign({}, state)
    case DASHBOARD_ADD_ITEM:
        const mockedId = Math.floor(Date.now() / 1000);
        const newItem = {
            label: action.label,
            id: mockedId
        }
        state.list.push(newItem);
        return Object.assign({}, state)
    case DASHBOARD_EDIT_ITEM:
        const newLabel = action.label;
        const index = action.index;
        state.list[index].label = newLabel;
        return Object.assign({}, state)
    default:
      return state
  }
}

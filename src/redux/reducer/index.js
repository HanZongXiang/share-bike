const initialState = {
  menuItemText: '首页',
  desc: '左上角面包屑导航'
}

export default (state = initialState,action) => {
  switch(action.type){
    case 'CHANGE_MENU_ITEM':
      return {
        ...state,
        menuItemText: action.text
      }
    default:
      return state;
  }
}
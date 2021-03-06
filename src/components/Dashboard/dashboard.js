import React from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet} from 'react-native'
import LoginDashboard from './loginDashboard'
import DashboardDragDropList from './dashboardDragDropList'

const Dashboard = (props) => {
  const { value, list , onChangeText, submitAction, itemOnEdit, textInput, buttonText, loginAsync,
  isNotLoggedIn, loginToken, dashboardChangeItemsOrder } = props;

  const inputSubmitAction = () => {
    submitAction();
  }

  const editLabelAction = (key) => {
    itemOnEdit(key);
  }

  const changeItemOrder= (newOrder) => {
    dashboardChangeItemsOrder(newOrder);
  }

  const listJSX = list.map((item, i) => {
    return <TouchableOpacity key={i} onPress={() => editLabelAction(i)}>
            <Text key={i}>{item.label}</Text>
           </TouchableOpacity>
  })

  return (
    <View style={styles.container}>
     {
       (isNotLoggedIn) ?
       <LoginDashboard submitLogin={loginAsync} isError={loginToken === 'invalid'}/>
      :
      null
     }
     {
     (isNotLoggedIn) ?
     <Text style={styles.text}>
       Please LogIn first
     </Text>
     :
     <View>
         <Text style={styles.text}>
           Dashboard visits: <Text style={styles.value}>{value}</Text>
         </Text>
         <TextInput
           style={styles.inputText}
           onChangeText={(text)=>onChangeText(text)}
           value={textInput}
           placeholder='Type new label' />
         <TouchableOpacity onPress={inputSubmitAction} style={styles.button}>
           <Text style={styles.buttonText}> {buttonText} </Text>
         </TouchableOpacity>
         <DashboardDragDropList list={list} editLabelAction={editLabelAction} changeItemOrder={changeItemOrder}/>
     </View>
     }
    </View>
    )


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  text: {
    fontSize: 30,
    textAlign: 'center',
    margin: 20,
  },
  value: {
    width: 40,
    fontWeight: 'bold',
    color: 'limegreen',
    textAlign: 'center',
  },
  inputText: {
    //height: 50,
    //width: 100,
    borderColor: 'gray',
    borderWidth: 1,
   // margin: 10,
    fontSize: 15,
    textAlign: 'center',
    margin: 10,
  },
  button: {
    paddingLeft: 4,
    paddingRight: 4,
    backgroundColor: 'rgb(233, 233, 233)',
    borderWidth: 1,
    borderColor: 'rgb(213, 213, 213)',
    margin: 10,
  },
  buttonText: {
    fontSize: 15,
    textAlign: 'center',
    margin: 10,
  },
  item: {
    fontSize: 20,
    textAlign: 'center',
  }
})

export default Dashboard

import { View, Text,Button } from 'react-native'
import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { addition,subtraction } from '../redux/Action'

const Counter = () => {
    const data=useSelector((state)=>state.counter)
    const dispatch=useDispatch()
  return (
    <View>
      <View>
        <Text>{data}</Text>
      </View>
      <View>
        <Button title='Add' onPress={()=>dispatch(addition())}/>
        <Button title='Subtract' onPress={()=>dispatch(subtraction())}/>
      </View>
    </View>
  )
}

export default Counter
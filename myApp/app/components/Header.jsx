import { View, Text } from 'react-native'
import React from 'react'

const Header = () => {
  return (
    <View className='w-screen h-[15%] bg-slate-600 rounded-b-xl'>
        <View className='flex h-full flex-row justify-start items-center mt-6 ml-6 gap-x-4'>
            <View className='bg-white rounded-full w-16 h-16'></View>
            <View className='w-[60%] text-white'>
            <Text className='text-2xl text-white font-semibold'>Hallo</Text>
            <Text className='text-white'>Silahkan login untuk membuka semua fitur</Text>
            </View>
        </View>
      
    </View>
  )
}

export default Header
import { View, Text, SafeAreaView, ScrollView, Dimensions } from 'react-native'
import React, { useRef, useEffect } from "react";
import Header from './Header.jsx'

const { width } = Dimensions.get("window");
const Home = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    let scrollValue = 0;
    const interval = setInterval(() => {
      if (scrollRef.current) {
        scrollValue += width / 2; // Geser setengah layar setiap interval
        scrollRef.current.scrollTo({ x: scrollValue, animated: true });

        // Jika sudah mencapai batas, reset kembali ke awal
        if (scrollValue >= width * 3) {
          scrollValue = 0;
          scrollRef.current.scrollTo({ x: 0, animated: false });
        }
      }
    }, 2000); // Auto-scroll setiap 2 detik

    return () => clearInterval(interval);
  }, []);
  
  return (
    <View>
        <Header></Header>
        <SafeAreaView className='bg-white w-screen h-full flex'>
          <View className='w-screen h-[20%] items-center mt-5'>
            <ScrollView  
              ref={scrollRef}
              horizontal 
              showsHorizontalScrollIndicator={false} 
              contentContainerStyle={{ gap: 20 }}
              className='w-screen h-12 bg-blue-100 flex flex-row gap-x-5'
              >
              <View className='bg-black w-[160px] h-full'></View>
              <View className='bg-black w-[160px] h-full'></View>
              <View className='bg-black w-[160px] h-full'></View>
              <View className='bg-black w-[160px] h-full'></View>
              <View className='bg-black w-[160px] h-full'></View>
            </ScrollView>
          </View>
        </SafeAreaView>
    </View>
    
  )
}

export default Home
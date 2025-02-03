import React, { useState, useEffect } from 'react';
import { Button, View, Text, StyleSheet, TouchableWithoutFeedback, Keyboard } from 'react-native';

export default function HomeScreen() {
  const [currentTime, setCurrentTime] = useState(0); // Секунд
k,l  const [currentMilliseconds, setCurrentMilliseconds] = useState(0); // Миллисекунд
  const [isRunning, setIsRunning] = useState(false); // Цаг явж байна уу, үгүй юу
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null); // Interval ID-ийг хадгалах

  // Цаг эхлүүлэх
  const startClock = () => {
    if (intervalId) return; // Хэрэв аль хэдийн цаг явж байгаа бол дахин эхлүүлэхгүй
    const id = setInterval(() => {
      setCurrentMilliseconds((prevMilliseconds) => {
        if (prevMilliseconds === 999) {
          setCurrentTime((prevTime) => prevTime + 1); // Секундыг 1 нэгжээр нэмнэ
          return 0; // Миллисекундийг 0 болгож шинэчлэнэ
        }
        return prevMilliseconds + 1; // Миллисекундыг 1 нэмнэ
      });
    }, 1); // Миллисекундыг 1 миллисекунд тутамд нэмнэ
    setIntervalId(id); // Interval ID-ийг хадгална
    setIsRunning(true); // Цаг явж эхэллээ
  };

  // Цаг зогсоох
  const stopClock = () => {
    if (intervalId) {
      clearInterval(intervalId); // Цагийг зогсооно
      setIntervalId(null); // Interval ID-ийг устгана
      setIsRunning(false); // Цаг зогссон гэж тэмдэглэнэ
    }
  };

  // Цагийг зогсоогоод хаана ч дараагүй бол компонент дараа нь зогссон хэвээр байх
  useEffect(() => {
    // Компонент дэлгэцээс гарах үед цагийг зогсоох
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [intervalId]);

  // Дэлгэцийн бүх орчинд дарах үед цагийг эхлүүлэх/зогсоох
  const handleTouch = () => {
    if (isRunning) {
      stopClock(); // Хэрэв цаг явж байвал зогсооно
    } else {
      startClock(); // Хэрэв цаг зогссон бол эхлүүлнэ
    }
  };

  return (
    <TouchableWithoutFeedback onPress={handleTouch}>
      <View style={styles.container}>
        {/* Секунд болон Миллисекунд гарч ирэх хэсэг */}
        <Text style={styles.timeText}>
          {`Elapsed Time: ${currentTime}.${currentMilliseconds.toString().padStart(3, '0')} seconds`}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5', // Тайван өнгөний тохиргоо
  },
  timeText: {
    fontSize: 48,  // Том текст
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#4CAF50',  // Дараах секундын өнгө
  },
});

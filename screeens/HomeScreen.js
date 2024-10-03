import React from 'react';
import { ScrollView, View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

// Sample data for the webtoon cards
const webtoonData = [
  {
    id: 1,
    title: 'รวมพลตัวบอส!',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuA35LIIo8gjM65NEc53GZgpGkEOneG83Suw&s', // Replace with actual URL
  },
  {
    id: 2,
    title: 'NEW! ต้อนรับเว็บตูนใหม่',
    image: 'https://www.mangakimi.com/wp-content/uploads/2023/02/I-Became-the-Male-Leads-Adopted-Daughter-209x300.jpg',
  },
  {
    id: 3,
    title: 'COMEBACK มาสนุกต่อ!',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpyfp2wH2pM6oyCcTeqE4wnnAfwFb1VbujIA&s',
  },
  // Add more data as needed
];

const HomeScreen = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>กำลังฮิต</Text>
      </View>

      {/* Image Slider */}
      <View style={styles.slider}>
        <Image
          source={{ uri: 'https://th-a.kakaopagecdn.com/P/EO/876/68947/tn/2x/714140b8-1c64-4e26-83eb-2db5cb460fc6.jpg' }}  // Replace with actual slider image URL
          style={styles.sliderImage}
        />
        <Text style={styles.sliderTitle}>องค์หญิงน้อย คัมแบ็ค</Text>
        <Text style={styles.sliderSubtitle}>องค์หญิงของทุกคน</Text>
      </View>

      {/* Cards Section */}
      <View style={styles.cardsSection}>
        {webtoonData.map((webtoon) => (
          <TouchableOpacity key={webtoon.id} style={styles.card}>
            <Image source={{ uri: webtoon.image }} style={styles.cardImage} />
            <Text style={styles.cardText}>{webtoon.title}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',  // Dark background
  },
  header: {
    padding: 16,
    backgroundColor: '#1e1e1e',
    alignItems: 'center',
  },
  headerText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  slider: {
    paddingHorizontal: 16,
    marginVertical: 10,
    backgroundColor: '#333333',
    borderRadius: 8,
  },
  sliderImage: {
    width: '100%',
    height: 200,
    borderRadius: 8,
  },
  sliderTitle: {
    color: '#fff',
    fontSize: 16,
    marginTop: 10,
  },
  sliderSubtitle: {
    color: '#ccc',
    fontSize: 12,
    marginBottom: 10,
  },
  cardsSection: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    paddingVertical: 16,
  },
  card: {
    width: 120,
    marginBottom: 16,
  },
  cardImage: {
    width: 120,
    height: 150,
    borderRadius: 8,
    marginBottom: 8,
  },
  cardText: {
    color: '#fff',
    fontSize: 12,
    textAlign: 'center',
  },
});

export default HomeScreen;

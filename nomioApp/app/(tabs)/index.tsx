import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Platform,
  StatusBar,
  useWindowDimensions,
  Image,
  ScrollView,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import AntDesign from "@expo/vector-icons/AntDesign";
const FirstRoute = () => (
  <ScrollView  style={{ flex: 1, backgroundColor: "#ccc" }}>
    <ScrollView showsHorizontalScrollIndicator={false}>
      <View style={{ height: 150 }}>
        <ScrollView showsHorizontalScrollIndicator={false}
          horizontal={true}
          contentContainerStyle={{
            alignItems: "center",
            //justifyContent: "space-around",
            flexDirection: "row",

            //height: 150,
            //borderWidth: 1,
          }}
        >
          <Image
            style={styles.imgContainer}
            source={{
              uri: "https://reactnative.dev/img/tiny_logo.png",
            }}
          />
          <Image
            style={styles.imgContainer}
            source={{
              uri: "https://reactnative.dev/img/tiny_logo.png",
            }}
          />
          <Image
            style={styles.imgContainer}
            source={{
              uri: "https://reactnative.dev/img/tiny_logo.png",
            }}
          />
          <Image
            style={styles.imgContainer}
            source={{
              uri: "https://reactnative.dev/img/tiny_logo.png",
            }}
          />
          <Image
            style={styles.imgContainer}
            source={{
              uri: "https://reactnative.dev/img/tiny_logo.png",
            }}
          />
          <Image
            style={styles.imgContainer}
            source={{
              uri: "https://reactnative.dev/img/tiny_logo.png",
            }}
          />
          <Image
            style={styles.imgContainer}
            source={{
              uri: "https://reactnative.dev/img/tiny_logo.png",
            }}
          />
          <Image
            style={styles.imgContainer}
            source={{
              uri: "https://reactnative.dev/img/tiny_logo.png",
            }}
          />
          <Image
            style={styles.imgContainer}
            source={{
              uri: "https://reactnative.dev/img/tiny_logo.png",
            }}
          />
          <Image
            style={styles.imgContainer}
            source={{
              uri: "https://reactnative.dev/img/tiny_logo.png",
            }}
          />
          <Image
            style={styles.imgContainer}
            source={{
              uri: "https://reactnative.dev/img/tiny_logo.png",
            }}
          />
          <Image
            style={styles.imgContainer}
            source={{
              uri: "https://reactnative.dev/img/tiny_logo.png",
            }}
          />
          <Image
            style={styles.imgContainer}
            source={{
              uri: "https://reactnative.dev/img/tiny_logo.png",
            }}
          />
        </ScrollView>
      </View>
      <View style={{ flexDirection: "row" }}>
        <Text style={{ fontWeight: 800 }}>Энэ сарын онцлох</Text>
        <AntDesign name="star" size={18} color="gold" />
      </View>
      <View style={{}}>
        <Text style={{ fontSize: 10 }}>Аудио ном</Text>
      </View>
      <ScrollView showsHorizontalScrollIndicator={false}
        horizontal={true}
        contentContainerStyle={{
          alignItems: "center",
          //justifyContent: "space-around",
          flexDirection: "row",

          //height: 150,
          //borderWidth: 1,
        }}
      >
        <ScrollView  showsHorizontalScrollIndicator={false} horizontal={true}>
          <View>
            <Image
              style={styles.imgContainer}
              source={{
                uri: "https://th.bing.com/th/id/OIP.BYw2010cO4YfAQ2QI_rlXQHaMA?w=115&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
              }}
            />
            <Text style={{ color: "gray", marginLeft: 10 }}>Б.Шүүдэрцэцэг</Text>
            <Text style={{ fontSize: 10, marginLeft: 10 }}>Уулсын домог Хотулун</Text>
          </View>
          <View>
            <Image
              style={styles.imgContainer}
              source={{
                uri: "https://th.bing.com/th/id/OIP.S5S-F6XheLyBXSekY55S6gAAAA?rs=1&pid=ImgDetMain",
              }}
            />
            <Text style={{ color: "gray", marginLeft: 10 }}>Жеймс Р. Доти</Text>
            <Text style={{ fontSize: 10, marginLeft: 10 }}>Шидэт мухлаг </Text>
          </View>
          <View>
            <Image
              style={styles.imgContainer}
              source={{
                uri: "https://th.bing.com/th/id/OIP.c08kiVWSyML2ASCZFbuMgwHaD4?w=298&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
              }}
            />
            <Text style={{ color: "gray", marginLeft: 10 }}>С. Оюун</Text>
            <Text style={{ fontSize: 10, marginLeft: 10 }}>Тань руу нүүж явна (шилмэл түүх) </Text>
          </View>
          <View>
            <Image
              style={styles.imgContainer}
              source={{
                uri: "https://th.bing.com/th/id/OIP.TH9L-U70owwRHDmhihIhPAE5G9?w=115&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
              }}
            />
            <Text style={{ color: "gray", marginLeft: 10 }}>Г. Гэрэлбаатар</Text>
            <Text style={{ fontSize: 10, marginLeft: 10 }}>Бэлгийн энергийг оюуны энерги болгох нь  </Text>
          </View>
          <View>
            <Image
              style={styles.imgContainer}
              source={{
                uri: "https://reactnative.dev/img/tiny_logo.png",
              }}
            />
            <Text style={{ color: "gray", marginLeft: 10 }}>Хайтан</Text>
            <Text style={{ fontSize: 10, marginLeft: 10 }}>Эргээд ир  </Text>
          </View>
          <View>
            <Image
              style={styles.imgContainer}
              source={{
                uri: "https://th.bing.com/th/id/OIP.JkZiitvMhWmwO7-sb1u9BwAAAA?rs=1&pid=ImgDetMain",
              }}
            />
            <Text style={{ color: "gray", marginLeft: 10 }}>Алис Жеймс</Text>
            <Text style={{ fontSize: 10, marginLeft: 10 }}>Сэтгэлээ хайрлах ном  </Text>
          </View>
          <View>
            <Image
              style={styles.imgContainer}
              source={{
                uri: "https://internom.mn/_next/image?url=https%3A%2F%2Fsinpim130259-dev.s3.ap-southeast-1.amazonaws.com%2Fpublic%2Fproduct-thumb%2FWRC3nO1aeKqCp49VzKNe-thumb.jpg&w=828&q=75",
              }}
            />
            <Text style={{ color: "gray", marginLeft: 10 }}>А. Амарсайхан</Text>
            <Text style={{ fontSize: 10, marginLeft: 10 }}>Аранзал зөн </Text>
          </View>
          <View>
            <Image
              style={styles.imgContainer}
              source={{
                uri: "https://book.mn/timthumb.php?src=https://book.mn/uploads/products/1724291965-72782694.JPG&w=400&h=500&zc=2&q=90&s=1",
              }}
            />
            <Text style={{ color: "gray", marginLeft: 10 }}>А. Наранболд </Text>
            <Text style={{ fontSize: 10, marginLeft: 10 }}>Махчин 2-Хүн чоно</Text>
          </View>
          <View>
            <Image
              style={styles.imgContainer}
              source={{
                uri: "https://th.bing.com/th/id/OIP.FGixTxOYOR1RfTqTrCTYpwAAAA?rs=1&pid=ImgDetMain",
              }}
            />
            <Text style={{ color: "gray", marginLeft: 10 }}>Ёко Огова</Text>
            <Text style={{ fontSize: 10, marginLeft: 10 }}>Төгс тоо </Text>
          </View>
          <View>
            <Image
              style={styles.imgContainer}
              source={{
                uri: "https://th.bing.com/th/id/OIP.rZbEgr5cTs9R3uPH-WuCEAEiGQ?rs=1&pid=ImgDetMain",
              }}
            />
            <Text style={{ color: "gray", marginLeft: 10 }}>Саяака Мурата</Text>
            <Text style={{ fontSize: 10, marginLeft: 10 }}>Нэрийн дэлгүүрийн эмэгтэй </Text>
          </View>
          
        </ScrollView>
      </ScrollView>
    <ScrollView showsHorizontalScrollIndicator={false}>
    <View style={{ flexDirection: "row" }}>
      <View style={{ flexDirection: "row" }}>
        <Text style={{ fontWeight: 800 }}>Зөвхөн Мbook-ээс </Text>
        <AntDesign name="star" size={18} color="gold" />
      </View>
      <View style={{flexDirection:"row",
                    alignItems:"center",
                    flex:1,
                    justifyContent:"flex-end"}}>  
        <Text style={{ fontWeight: 800 }}>Бүгд </Text>
        <AntDesign name="right" size={18} color="black" />
      </View>
      </View>
      <View style={{}}>
        <Text style={{ fontSize: 10 }}>Аудио номнууд</Text>
      </View>
      <ScrollView showsHorizontalScrollIndicator={false}
        horizontal={true}
        contentContainerStyle={{
          alignItems: "center",
          //justifyContent: "space-around",
          flexDirection: "row",

          //height: 150,
          //borderWidth: 1,
        }}
      >
        <ScrollView  showsHorizontalScrollIndicator={false} horizontal={true}>
          <View>
            <Image
              style={styles.imgContainer}
              source={{
                uri: "",
              }}
            />
            <Text style={{ color: "gray", marginLeft: 10 }}>Ү Чэн Энь </Text>
            <Text style={{ fontSize: 10, marginLeft: 10 }}>Баруунш зорчсон тэмдэглэл</Text>
          </View>
          <View>
            <Image
              style={styles.imgContainer}
              source={{
                uri: "https://th.bing.com/th/id/OIP.S5S-F6XheLyBXSekY55S6gAAAA?rs=1&pid=ImgDetMain",
              }}
            />
            <Text style={{ color: "gray", marginLeft: 10 }}>Х. Болор-Эрдэнэ</Text>
            <Text style={{ fontSize: 10, marginLeft: 10 }}>Үлгэр дуустал хайрлана. </Text>
          </View>
          <View>
            <Image
              style={styles.imgContainer}
              source={{
                uri: "https://th.bing.com/th/id/OIP.c08kiVWSyML2ASCZFbuMgwHaD4?w=298&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
              }}
            />
            <Text style={{ color: "gray", marginLeft: 10 }}>Х. Болормаа</Text>
            <Text style={{ fontSize: 10, marginLeft: 10 }}>Есөн </Text>
          </View>
          <View>
            <Image
              style={styles.imgContainer}
              source={{
                uri: "https://th.bing.com/th/id/OIP.TH9L-U70owwRHDmhihIhPAE5G9?w=115&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
              }}
            />
            <Text style={{ color: "gray", marginLeft: 10 }}>Демон Захариадес </Text>
            <Text style={{ fontSize: 10, marginLeft: 10 }}>Үгүй гэж хэлэх урлаг  </Text>
          </View>
          <View>
            <Image
              style={styles.imgContainer}
              source={{
                uri: "https://reactnative.dev/img/tiny_logo.png",
              }}
            />
            <Text style={{ color: "gray", marginLeft: 10 }}>Б. Шүүдэрцэцэг</Text>
            <Text style={{ fontSize: 10, marginLeft: 10 }}>Домогт Ану Хатан </Text>
          </View>
          <View>
            <Image
              style={styles.imgContainer}
              source={{
                uri: "https://th.bing.com/th/id/OIP.JkZiitvMhWmwO7-sb1u9BwAAAA?rs=1&pid=ImgDetMain",
              }}
            />
            <Text style={{ color: "gray", marginLeft: 10 }}>Дэн Харрис </Text>
            <Text style={{ fontSize: 10, marginLeft: 10 }}>10% илүү аз жаргалтай  </Text>
          </View>
          <View>
            <Image
              style={styles.imgContainer}
              source={{
                uri: "https://internom.mn/_next/image?url=https%3A%2F%2Fsinpim130259-dev.s3.ap-southeast-1.amazonaws.com%2Fpublic%2Fproduct-thumb%2FWRC3nO1aeKqCp49VzKNe-thumb.jpg&w=828&q=75",
              }}
            />
            <Text style={{ color: "gray", marginLeft: 10 }}>Лю Цы Синь </Text>
            <Text style={{ fontSize: 10, marginLeft: 10 }}>Гурван биет I-Гараг дэлхийн өнийн хэрэг  </Text>
          </View>
          <View>
            <Image
              style={styles.imgContainer}
              source={{
                uri: "https://book.mn/timthumb.php?src=https://book.mn/uploads/products/1724291965-72782694.JPG&w=400&h=500&zc=2&q=90&s=1",
              }}
            />
            <Text style={{ color: "gray", marginLeft: 10 }}>Л. Түдэв </Text>
            <Text style={{ fontSize: 10, marginLeft: 10 }}>Хувьсал танаа өчье</Text>
          </View>
          <View>
            <Image
              style={styles.imgContainer}
              source={{
                uri: "https://th.bing.com/th/id/OIP.FGixTxOYOR1RfTqTrCTYpwAAAA?rs=1&pid=ImgDetMain",
              }}
            />
            <Text style={{ color: "gray", marginLeft: 10 }}>И Жи Сонг</Text>
            <Text style={{ fontSize: 10, marginLeft: 10 }}>Дээврийн өрөөн дэх миний мөрөөдөл </Text>
          </View>
          <View>
            <Image
              style={styles.imgContainer}
              source={{
                uri: "https://th.bing.com/th/id/OIP.rZbEgr5cTs9R3uPH-WuCEAEiGQ?rs=1&pid=ImgDetMain",
              }}
            />
            <Text style={{ color: "gray", marginLeft: 10 }}>Мишика Юкио</Text>
            <Text style={{ fontSize: 10, marginLeft: 10 }}>Хайрын цангаа  </Text>
          </View>
          
        </ScrollView>
      </ScrollView>
    </ScrollView>
    <ScrollView showsHorizontalScrollIndicator={false}>
    <View style={{ flexDirection: "row" }}>
        <Text style={{ fontWeight: 800 }}>Анх удаа ном сонсох гэж байна уу? </Text>
        
        <AntDesign name="star" size={18} color="gold" />
      </View>
      <View style={{}}>
        <Text style={{ fontSize: 10 }}>Унших завгүй бол СОНСООД үз</Text>
      </View>
      <ScrollView showsHorizontalScrollIndicator={false}
        horizontal={true}
        contentContainerStyle={{
          alignItems: "center",
          //justifyContent: "space-around",
          flexDirection: "row",

          //height: 150,
          //borderWidth: 1,
        }}
      >
        <ScrollView horizontal={true}>
          <View>
            <Image
              style={styles.imgContainer}
              source={{
                uri: "https://th.bing.com/th/id/OIP.BYw2010cO4YfAQ2QI_rlXQHaMA?w=115&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
              }}
            />
            <Text style={{ color: "gray", marginLeft: 10 }}>Б.Лхагвасүрэн</Text>
            <Text style={{ fontSize: 10, marginLeft: 10 }}>Уянгын тойрог </Text>
          </View>
          <View>
            <Image
              style={styles.imgContainer}
              source={{
                uri: "https://th.bing.com/th/id/OIP.S5S-F6XheLyBXSekY55S6gAAAA?rs=1&pid=ImgDetMain",
              }}
            />
            <Text style={{ color: "gray", marginLeft: 10 }}>Франц Кафра </Text>
            <Text style={{ fontSize: 10, marginLeft: 10 }}>Хувирал</Text>
          </View>
          <View>
            <Image
              style={styles.imgContainer}
              source={{
                uri: "https://th.bing.com/th/id/OIP.c08kiVWSyML2ASCZFbuMgwHaD4?w=298&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
              }}
            />
            <Text style={{ color: "gray", marginLeft: 10 }}>Кадано Ээко</Text>
            <Text style={{ fontSize: 10, marginLeft: 10 }}>Кикигийн хүргэлтийн үйлчилгээ  </Text>
          </View>
          <View>
            <Image
              style={styles.imgContainer}
              source={{
                uri: "https://th.bing.com/th/id/OIP.TH9L-U70owwRHDmhihIhPAE5G9?w=115&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
              }}
            />
            <Text style={{ color: "gray", marginLeft: 10 }}>Колин Хүүвер </Text>
            <Text style={{ fontSize: 10, marginLeft: 10 }}>Верити </Text>
          </View>
          <View>
            <Image
              style={styles.imgContainer}
              source={{
                uri: "https://reactnative.dev/img/tiny_logo.png",
              }}
            />
            <Text style={{ color: "gray", marginLeft: 10 }}>Ч. Лодойдамба </Text>
            <Text style={{ fontSize: 10, marginLeft: 10 }}>Тунгалаг Тамир /Тэргүүн дэвтэр /</Text>
          </View>
          <View>
            <Image
              style={styles.imgContainer}
              source={{
                uri: "https://th.bing.com/th/id/OIP.JkZiitvMhWmwO7-sb1u9BwAAAA?rs=1&pid=ImgDetMain",
              }}
            />
            <Text style={{ color: "gray", marginLeft: 10 }}>Хайтан</Text>
            <Text style={{ fontSize: 10, marginLeft: 10 }}>Согоомаа  </Text>
          </View>
          <View>
            <Image
              style={styles.imgContainer}
              source={{
                uri: "https://internom.mn/_next/image?url=https%3A%2F%2Fsinpim130259-dev.s3.ap-southeast-1.amazonaws.com%2Fpublic%2Fproduct-thumb%2FWRC3nO1aeKqCp49VzKNe-thumb.jpg&w=828&q=75",
              }}
            />
            <Text style={{ color: "gray", marginLeft: 10 }}>Харуки Мураками </Text>
            <Text style={{ fontSize: 10, marginLeft: 10 }}>Хилийн лээснээс урагшхан, алтан нар </Text>
          </View>
          <View>
            <Image
              style={styles.imgContainer}
              source={{
                uri: "https://book.mn/timthumb.php?src=https://book.mn/uploads/products/1724291965-72782694.JPG&w=400&h=500&zc=2&q=90&s=1",
              }}
            />
            <Text style={{ color: "gray", marginLeft: 10 }}>НОЖО Паблишинг </Text>
            <Text style={{ fontSize: 10, marginLeft: 10 }}>Аянгат цагийн тууж</Text>
          </View>
          <View>
            <Image
              style={styles.imgContainer}
              source={{
                uri: "https://th.bing.com/th/id/OIP.FGixTxOYOR1RfTqTrCTYpwAAAA?rs=1&pid=ImgDetMain",
              }}
            />
            <Text style={{ color: "gray", marginLeft: 10 }}>Ч. Ганжавхлан</Text>
            <Text style={{ fontSize: 10, marginLeft: 10 }}>Хол биш  </Text>
          </View>
          <View>
            <Image
              style={styles.imgContainer}
              source={{
                uri: "https://th.bing.com/th/id/OIP.rZbEgr5cTs9R3uPH-WuCEAEiGQ?rs=1&pid=ImgDetMain",
              }}
            />
            <Text style={{ color: "gray", marginLeft: 10 }}>НОЖО Паблишинг</Text>
            <Text style={{ fontSize: 10, marginLeft: 10 }}>Өнчин цагаан ботго  </Text>
          </View>
          
        </ScrollView>
      </ScrollView>
    </ScrollView>
    <ScrollView showsHorizontalScrollIndicator={false}>
    <View style={{ flexDirection: "row" }}>3
        <Text style={{ fontWeight: 800 }}>Багц Номнууд </Text>
        <AntDesign name="star" size={18} color="gold" />
      </View>
      
      <ScrollView showsHorizontalScrollIndicator={false}
        horizontal={true}
        contentContainerStyle={{
          alignItems: "center",
          //justifyContent: "space-around",
          flexDirection: "row",

          //height: 150,
          //borderWidth: 1,
        }}
      >
        <ScrollView  showsHorizontalScrollIndicator={false} horizontal={true}>
          <View>
            <Image
              style={styles.imgContainer}
              source={{
                uri: "https://th.bing.com/th/id/OIP.BYw2010cO4YfAQ2QI_rlXQHaMA?w=115&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
              }}
            />
            <Text style={{ color: "gray", marginLeft: 10 }}>Б.Шүүдэрцэцэг</Text>
            <Text style={{ fontSize: 10, marginLeft: 10 }}>Уулсын домог Хотулун</Text>
          </View>
          <View>
            <Image
              style={styles.imgContainer}
              source={{
                uri: "https://th.bing.com/th/id/OIP.S5S-F6XheLyBXSekY55S6gAAAA?rs=1&pid=ImgDetMain",
              }}
            />
            <Text style={{ color: "gray", marginLeft: 10 }}>Жеймс Р. Доти</Text>
            <Text style={{ fontSize: 10, marginLeft: 10 }}>Шидэт мухлаг </Text>
          </View>
          <View>
            <Image
              style={styles.imgContainer}
              source={{
                uri: "https://th.bing.com/th/id/OIP.c08kiVWSyML2ASCZFbuMgwHaD4?w=298&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
              }}
            />
            <Text style={{ color: "gray", marginLeft: 10 }}>С. Оюун</Text>
            <Text numberOfLines={5}  style={{ fontSize: 10, marginLeft: 10, width:100 }}>Тань руу нүүж явна hshshhshshshshsh(шилмэл түүх) </Text>
          </View>
          <View>
            <Image
              style={styles.imgContainer}
              source={{
                uri: "https://th.bing.com/th/id/OIP.TH9L-U70owwRHDmhihIhPAE5G9?w=115&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
              }}
            />
            <Text style={{ color: "gray", marginLeft: 10 }}>Г. Гэрэлбаатар</Text>
            <Text style={{ fontSize: 10, marginLeft: 10 }}>Бэлгийн энергийг оюуны энерги болгох нь  </Text>
          </View>
          <View>
            <Image
              style={styles.imgContainer}
              source={{
                uri: "https://reactnative.dev/img/tiny_logo.png",
              }}
            />
            <Text style={{ color: "gray", marginLeft: 10 }}>Хайтан</Text>
            <Text style={{ fontSize: 10, marginLeft: 10 }}>Эргээд ир  </Text>
          </View>
          <View>
            <Image
              style={styles.imgContainer}
              source={{
                uri: "https://th.bing.com/th/id/OIP.JkZiitvMhWmwO7-sb1u9BwAAAA?rs=1&pid=ImgDetMain",
              }}
            />
            <Text style={{ color: "gray", marginLeft: 10 }}>Алис Жеймс</Text>
            <Text style={{ fontSize: 10, marginLeft: 10 }}>Сэтгэлээ хайрлах ном  </Text>
          </View>
          <View>
            <Image
              style={styles.imgContainer}
              source={{
                uri: "https://internom.mn/_next/image?url=https%3A%2F%2Fsinpim130259-dev.s3.ap-southeast-1.amazonaws.com%2Fpublic%2Fproduct-thumb%2FWRC3nO1aeKqCp49VzKNe-thumb.jpg&w=828&q=75",
              }}
            />
            <Text style={{ color: "gray", marginLeft: 10 }}>А. Амарсайхан</Text>
            <Text style={{ fontSize: 10, marginLeft: 10 }}>Аранзал зөн </Text>
          </View>
          <View>
            <Image
              style={styles.imgContainer}
              source={{
                uri: "https://book.mn/timthumb.php?src=https://book.mn/uploads/products/1724291965-72782694.JPG&w=400&h=500&zc=2&q=90&s=1",
              }}
            />
            <Text style={{ color: "gray", marginLeft: 10 }}>А. Наранболд </Text>
            <Text style={{ fontSize: 10, marginLeft: 10 }}>Махчин 2-Хүн чоно</Text>
          </View>
          <View>
            <Image
              style={styles.imgContainer}
              source={{
                uri: "https://th.bing.com/th/id/OIP.FGixTxOYOR1RfTqTrCTYpwAAAA?rs=1&pid=ImgDetMain",
              }}
            />
            <Text style={{ color: "gray", marginLeft: 10 }}>Ёко Огова</Text>
            <Text style={{ fontSize: 10, marginLeft: 10 }}>Төгс тоо </Text>
          </View>
          <View>
            <Image
              style={styles.imgContainer}
              source={{
                uri: "https://th.bing.com/th/id/OIP.rZbEgr5cTs9R3uPH-WuCEAEiGQ?rs=1&pid=ImgDetMain",
              }}
            />
            <Text style={{ color: "gray", marginLeft: 10 }}>Саяака Мурата</Text>
            <Text style={{ fontSize: 10, marginLeft: 10 }}>Нэрийн дэлгүүрийн эмэгтэй </Text>
          </View>
          
        </ScrollView>
      </ScrollView>
    </ScrollView>
    </ScrollView>
  </ScrollView>
);

const SecondRoute = () => (
  <View style={{ flex: 1, backgroundColor: "#673ab7" }}></View>
);

const ThirdRoute = () => (
  <View style={{ flex: 1, backgroundColor: "#673ab7" }} />
);

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
  third: ThirdRoute,
  a: ThirdRoute,
});

const routes = [
  { key: "first", title: "Танд зориулсан" },
  { key: "second", title: "Аудио ном" },
  { key: "third", title: "Цахим ном" },
  { key: "a", title: "Подкаст" },
];

export default function index() {
  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(0);
  return (
    <SafeAreaView style={styles.container}>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
        renderTabBar={(props) => (
          <TabBar
            {...props}
            scrollEnabled={true} // Tab-ууд гүйлгэх боломжтой болно
            style={{ backgroundColor: "orange" }}
          />
        )}
      />
      <Text>HELLO WORLD</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  imgContainer: {
    height: 100,
    width: 200,
    marginRight: 10,
    marginLeft: 10,
  },
});

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
  ImageBackground,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import AntDesign from "@expo/vector-icons/AntDesign";
import Icon from 'react-native-vector-icons/FontAwesome';
// import AntDesign from "@expo/vector-icons";
const FirstRoute = () => (
  <ScrollView style={{ flex: 1, backgroundColor: "#ccc" }}>
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
            style={[styles.imgContainer, { width: 300, height: '100%', borderRadius: 10 }]}
            source={{
              uri: "https://reactnative.dev/img/tiny_logo.png",
            }}
          />
          <Image
            style={[styles.imgContainer, { width: 300, height: '100%', borderRadius: 10 }]}

            source={{
              uri: "https://reactnative.dev/img/tiny_logo.png",
            }}
          />
          <Image
            style={[styles.imgContainer, { width: 300, height: '100%', borderRadius: 10 }]}

            source={{
              uri: "https://reactnative.dev/img/tiny_logo.png",
            }}
          />
          <Image
            style={[styles.imgContainer, { width: 300, height: '100%', borderRadius: 10 }]}

            source={{
              uri: "https://reactnative.dev/img/tiny_logo.png",
            }}
          />
          <Image
            style={[styles.imgContainer, { width: 300, height: '100%', borderRadius: 10 }]}

            source={{
              uri: "https://reactnative.dev/img/tiny_logo.png",
            }}
          />
          <Image
            style={[styles.imgContainer, { width: 300, height: '100%', borderRadius: 10 }]}

            source={{
              uri: "https://reactnative.dev/img/tiny_logo.png",
            }}
          />
          <Image
            style={[styles.imgContainer, { width: 300, height: '100%', borderRadius: 10 }]}

            source={{
              uri: "https://reactnative.dev/img/tiny_logo.png",
            }}
          />
          <Image
            style={[styles.imgContainer, { width: 300, height: '100%', borderRadius: 10 }]}

            source={{
              uri: "https://reactnative.dev/img/tiny_logo.png",
            }}
          />
          <Image
            style={[styles.imgContainer, { width: 300, height: '100%', borderRadius: 10 }]}

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
        <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
          <View>
            <Image
              style={styles.imgContainer}
              source={{
                uri: "https://th.bing.com/th/id/OIP.BYw2010cO4YfAQ2QI_rlXQHaMA?w=115&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
              }}
            />
            <Text style={{ color: "gray", marginLeft: 10 }}>Б.Шүүдэрцэцэг</Text>
            <Text numberOfLines={5} style={{ fontSize: 10, marginLeft: 10, width:100 }}>Уулсын домог Хотулун</Text>
          </View>
          <View>
            <Image
              style={styles.imgContainer}
              source={{
                uri: "https://th.bing.com/th/id/OIP.S5S-F6XheLyBXSekY55S6gAAAA?rs=1&pid=ImgDetMain",
              }}
            />
            <Text style={{ color: "gray", marginLeft: 10 }}>Жеймс Р. Доти</Text>
            <Text numberOfLines={5} style={{ fontSize: 10, marginLeft: 10, width:100}}>Шидэт мухлаг </Text>
          </View>
          <View>
            <Image
              style={styles.imgContainer}
              source={{
                uri: "https://th.bing.com/th/id/OIP.c08kiVWSyML2ASCZFbuMgwHaD4?w=298&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
              }}
            />
            <Text style={{ color: "gray", marginLeft: 10 }}>С. Оюун</Text>
            <Text numberOfLines={5} style={{ fontSize: 10, marginLeft: 10 , width:100}}>Тань руу нүүж явна (шилмэл түүх) </Text>
          </View>
          <View>
            <Image
              style={styles.imgContainer}
              source={{
                uri: "https://th.bing.com/th/id/OIP.TH9L-U70owwRHDmhihIhPAE5G9?w=115&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
              }}
            />
            <Text style={{ color: "gray", marginLeft: 10 }}>Г. Гэрэлбаатар</Text>
            <Text numberOfLines={5} style={{ fontSize: 10, marginLeft: 10 ,width:100}}>Бэлгийн энергийг оюуны энерги болгох нь  </Text>
          </View>
          <View>
            <Image
              style={styles.imgContainer}
              source={{
                uri: "https://reactnative.dev/img/tiny_logo.png",
              }}
            />
            <Text style={{ color: "gray", marginLeft: 10 }}>Хайтан</Text>
            <Text  numberOfLines={5} style={{ fontSize: 10, marginLeft: 10 ,width:100}}>Эргээд ир  </Text>
          </View>
          <View>
            <Image
              style={styles.imgContainer}
              source={{
                uri: "https://th.bing.com/th/id/OIP.JkZiitvMhWmwO7-sb1u9BwAAAA?rs=1&pid=ImgDetMain",
              }}
            />
            <Text style={{ color: "gray", marginLeft: 10 }}>Алис Жеймс</Text>
            <Text  numberOfLines={5}style={{ fontSize: 10, marginLeft: 10, width:100 }}>Сэтгэлээ хайрлах ном  </Text>
          </View>
          <View>
            <Image
              style={styles.imgContainer}
              source={{
                uri: "https://internom.mn/_next/image?url=https%3A%2F%2Fsinpim130259-dev.s3.ap-southeast-1.amazonaws.com%2Fpublic%2Fproduct-thumb%2FWRC3nO1aeKqCp49VzKNe-thumb.jpg&w=828&q=75",
              }}
            />
            <Text style={{ color: "gray", marginLeft: 10 }}>А. Амарсайхан</Text>
            <Text  numberOfLines={5}style={{ fontSize: 10, marginLeft: 10, width:100 }}>Аранзал зөн </Text>
          </View>
          <View>
            <Image
              style={styles.imgContainer}
              source={{
                uri: "https://book.mn/timthumb.php?src=https://book.mn/uploads/products/1724291965-72782694.JPG&w=400&h=500&zc=2&q=90&s=1",
              }}
            />
            <Text style={{ color: "gray", marginLeft: 10 }}>А. Наранболд </Text>
            <Text  numberOfLines={5} style={{ fontSize: 10, marginLeft: 10 , width:100}}>Махчин 2-Хүн чоно</Text>
          </View>
          <View>
            <Image
              style={styles.imgContainer}
              source={{
                uri: "https://th.bing.com/th/id/OIP.FGixTxOYOR1RfTqTrCTYpwAAAA?rs=1&pid=ImgDetMain",
              }}
            />
            <Text style={{ color: "gray", marginLeft: 10 }}>Ёко Огова</Text>
            <Text  numberOfLines={5} style={{ fontSize: 10, marginLeft: 10 }}>Төгс тоо </Text>
          </View>
          <View>
            <Image
              style={styles.imgContainer}
              source={{
                uri: "https://th.bing.com/th/id/OIP.rZbEgr5cTs9R3uPH-WuCEAEiGQ?rs=1&pid=ImgDetMain",
              }}
            />
            <Text style={{ color: "gray", marginLeft: 10 }}>Саяака Мурата</Text>
            <Text numberOfLines={5} style={{ fontSize: 10, marginLeft: 10 , width:100}}>Нэрийн дэлгүүрийн эмэгтэй </Text>
          </View>

        </ScrollView>
      </ScrollView>
      <ScrollView showsHorizontalScrollIndicator={false}>
        <View style={{ flexDirection: "row" }}>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ fontWeight: 800 }}>Зөвхөн Мbook-ээс </Text>
            <Icon name="headphones" size={18} color="gray" />
          </View>
          <View style={{
            flexDirection: "row",
            alignItems: "center",
            flex: 1,
            justifyContent: "flex-end"
          }}>
            <Text style={{ fontWeight: 800, color: "blue" }}>Бүгд </Text>
            <AntDesign name="right" size={18} color="blue" />
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
          <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
            <View>
              <Image
                style={styles.imgContainer}
                source={{
                  uri: "",
                }}
              />
              <Text style={{ color: "gray", marginLeft: 10 }}>Ү Чэн Энь </Text>
              <Text  numberOfLines={5} style={{ fontSize: 10, marginLeft: 10, width:100 }}>Баруунш зорчсон тэмдэглэл</Text>
            </View>
            <View>
              <Image
                style={styles.imgContainer}
                source={{
                  uri: "https://th.bing.com/th/id/OIP.S5S-F6XheLyBXSekY55S6gAAAA?rs=1&pid=ImgDetMain",
                }}
              />
              <Text style={{ color: "gray", marginLeft: 10 }}>Х. Болор-Эрдэнэ</Text>
              <Text  numberOfLines={5} style={{ fontSize: 10, marginLeft: 10, width:100 }}>Үлгэр дуустал хайрлана. </Text>
            </View>
            <View>
              <Image
                style={styles.imgContainer}
                source={{
                  uri: "https://th.bing.com/th/id/OIP.c08kiVWSyML2ASCZFbuMgwHaD4?w=298&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
                }}
              />
              <Text style={{ color: "gray", marginLeft: 10 }}>Х. Болормаа</Text>
              <Text  numberOfLines={5} style={{ fontSize: 10, marginLeft: 10 , width:100}}>Есөн </Text>
            </View>
            <View>
              <Image
                style={styles.imgContainer}
                source={{
                  uri: "https://th.bing.com/th/id/OIP.TH9L-U70owwRHDmhihIhPAE5G9?w=115&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
                }}
              />
              <Text style={{ color: "gray", marginLeft: 10 }}>Демон Захариадес </Text>
              <Text  numberOfLines={5} style={{ fontSize: 10, marginLeft: 10 , width:100}}>Үгүй гэж хэлэх урлаг  </Text>
            </View>
            <View>
              <Image
                style={styles.imgContainer}
                source={{
                  uri: "https://reactnative.dev/img/tiny_logo.png",
                }}
              />
              <Text style={{ color: "gray", marginLeft: 10 }}>Б. Шүүдэрцэцэг</Text>
              <Text  numberOfLines={5} style={{ fontSize: 10, marginLeft: 10, width:100 }}>Домогт Ану Хатан </Text>
            </View>
            <View>
              <Image
                style={styles.imgContainer}
                source={{
                  uri: "https://th.bing.com/th/id/OIP.JkZiitvMhWmwO7-sb1u9BwAAAA?rs=1&pid=ImgDetMain",
                }}
              />
              <Text style={{ color: "gray", marginLeft: 10 }}>Дэн Харрис </Text>
              <Text   numberOfLines={5} style={{ fontSize: 10, marginLeft: 10 , width:100}}>10% илүү аз жаргалтай  </Text>
            </View>
            <View>
              <Image
                style={styles.imgContainer}
                source={{
                  uri: "https://internom.mn/_next/image?url=https%3A%2F%2Fsinpim130259-dev.s3.ap-southeast-1.amazonaws.com%2Fpublic%2Fproduct-thumb%2FWRC3nO1aeKqCp49VzKNe-thumb.jpg&w=828&q=75",
                }}
              />
              <Text style={{ color: "gray", marginLeft: 10 }}>Лю Цы Синь </Text>
              <Text  numberOfLines={5} style={{ fontSize: 10, marginLeft: 10 , width:100}}>Гурван биет I-Гараг дэлхийн өнийн хэрэг  </Text>
            </View>
            <View>
              <Image
                style={styles.imgContainer}
                source={{
                  uri: "https://book.mn/timthumb.php?src=https://book.mn/uploads/products/1724291965-72782694.JPG&w=400&h=500&zc=2&q=90&s=1",
                }}
              />
              <Text style={{ color: "gray", marginLeft: 10 }}>Л. Түдэв </Text>
              <Text  numberOfLines={5}style={{ fontSize: 10, marginLeft: 10 , width:100}}>Хувьсал танаа өчье</Text>
            </View>
            <View>
              <Image
                style={styles.imgContainer}
                source={{
                  uri: "https://th.bing.com/th/id/OIP.FGixTxOYOR1RfTqTrCTYpwAAAA?rs=1&pid=ImgDetMain",
                }}
              />
              <Text style={{ color: "gray", marginLeft: 10 }}>И Жи Сонг</Text>
              <Text  numberOfLines={5} style={{ fontSize: 10, marginLeft: 10 , width:100}}>Дээврийн өрөөн дэх миний мөрөөдөл </Text>
            </View>
            <View>
              <Image
                style={styles.imgContainer}
                source={{
                  uri: "https://th.bing.com/th/id/OIP.rZbEgr5cTs9R3uPH-WuCEAEiGQ?rs=1&pid=ImgDetMain",
                }}
              />
              <Text style={{ color: "gray", marginLeft: 10 }}>Мишика Юкио</Text>
              <Text  numberOfLines={5} style={{ fontSize: 10, marginLeft: 10, width:100 }}>Хайрын цангаа  </Text>
            </View>

          </ScrollView>
        </ScrollView>
      </ScrollView>
      <ScrollView showsHorizontalScrollIndicator={false}>
        <View style={{ flexDirection: "row" }}>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ fontWeight: 800 }}>Анх удаа ном сонсох гэж байна уу? </Text>

          </View>
          <View style={{
            flexDirection: "row",
            alignItems: "center",
            flex: 1,
            justifyContent: "flex-end"
          }}>
            <Text style={{ fontWeight: 800, color: "blue" }}>Бүгд </Text>
            <AntDesign name="right" size={18} color="blue" />
          </View>
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
              <Text  numberOfLines={5} style={{ fontSize: 10, marginLeft: 10, width:100 }}>Уянгын тойрог </Text>
            </View>
            <View>
              <Image
                style={styles.imgContainer}
                source={{
                  uri: "https://th.bing.com/th/id/OIP.S5S-F6XheLyBXSekY55S6gAAAA?rs=1&pid=ImgDetMain",
                }}
              />
              <Text style={{ color: "gray", marginLeft: 10 }}>Франц Кафра </Text>
              <Text  numberOfLines={5} style={{ fontSize: 10, marginLeft: 10, width:100}}>Хувирал</Text>
            </View>
            <View>
              <Image
                style={styles.imgContainer}
                source={{
                  uri: "https://th.bing.com/th/id/OIP.c08kiVWSyML2ASCZFbuMgwHaD4?w=298&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
                }}
              />
              <Text style={{ color: "gray", marginLeft: 10 }}>Кадано Ээко</Text>
              <Text   numberOfLines={5} style={{ fontSize: 10, marginLeft: 10, width:100 }}>Кикигийн хүргэлтийн үйлчилгээ  </Text>
            </View>
            <View>
              <Image
                style={styles.imgContainer}
                source={{
                  uri: "https://th.bing.com/th/id/OIP.TH9L-U70owwRHDmhihIhPAE5G9?w=115&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
                }}
              />
              <Text style={{ color: "gray", marginLeft: 10 }}>Колин Хүүвер </Text>
              <Text  numberOfLines={5} style={{ fontSize: 10, marginLeft: 10, width:100}}>Верити </Text>
            </View>
            <View>
              <Image
                style={styles.imgContainer}
                source={{
                  uri: "https://reactnative.dev/img/tiny_logo.png",
                }}
              />
              <Text style={{ color: "gray", marginLeft: 10 }}>Ч. Лодойдамба </Text>
              <Text  numberOfLines={5} style={{ fontSize: 10, marginLeft: 10, width:100}}>Тунгалаг Тамир /Тэргүүн дэвтэр /</Text>
            </View>
            <View>
              <Image
                style={styles.imgContainer}
                source={{
                  uri: "https://th.bing.com/th/id/OIP.JkZiitvMhWmwO7-sb1u9BwAAAA?rs=1&pid=ImgDetMain",
                }}
              />
              <Text style={{ color: "gray", marginLeft: 10 }}>Хайтан</Text>
              <Text  numberOfLines={5} style={{ fontSize: 10, marginLeft: 10, width:100 }}>Согоомаа  </Text>
            </View>
            <View>
              <Image
                style={styles.imgContainer}
                source={{
                  uri: "https://internom.mn/_next/image?url=https%3A%2F%2Fsinpim130259-dev.s3.ap-southeast-1.amazonaws.com%2Fpublic%2Fproduct-thumb%2FWRC3nO1aeKqCp49VzKNe-thumb.jpg&w=828&q=75",
                }}
              />
              <Text style={{ color: "gray", marginLeft: 10 }}>Харуки Мураками </Text>
              <Text numberOfLines={5} style={{ fontSize: 10, marginLeft: 10, width:100 }}>Хилийн лээснээс урагшхан, алтан нар </Text>
            </View>
            <View>
              <Image
                style={styles.imgContainer}
                source={{
                  uri: "https://book.mn/timthumb.php?src=https://book.mn/uploads/products/1724291965-72782694.JPG&w=400&h=500&zc=2&q=90&s=1",
                }}
              />
              <Text style={{ color: "gray", marginLeft: 10 }}>НОЖО Паблишинг </Text>
              <Text  numberOfLines={5} style={{ fontSize: 10, marginLeft: 10, width:100}}>Аянгат цагийн тууж</Text>
            </View>
            <View>
              <Image
                style={styles.imgContainer}
                source={{
                  uri: "https://th.bing.com/th/id/OIP.FGixTxOYOR1RfTqTrCTYpwAAAA?rs=1&pid=ImgDetMain",
                }}
              />
              <Text style={{ color: "gray", marginLeft: 10 }}>Ч. Ганжавхлан</Text>
              <Text  numberOfLines={5} style={{ fontSize: 10, marginLeft: 10 , width:100}}>Хол биш  </Text>
            </View>
            <View>
              <Image
                style={styles.imgContainer}
                source={{
                  uri: "https://th.bing.com/th/id/OIP.rZbEgr5cTs9R3uPH-WuCEAEiGQ?rs=1&pid=ImgDetMain",
                }}
              />
              <Text style={{ color: "gray", marginLeft: 10 }}>НОЖО Паблишинг</Text>
              <Text   numberOfLines={5}style={{ fontSize: 10, marginLeft: 10 , width:100}}>Өнчин цагаан ботго  </Text>
            </View>

          </ScrollView>
        </ScrollView>
      </ScrollView>
      <ScrollView showsHorizontalScrollIndicator={false}>
        <View style={{ flexDirection: "row" }}>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ fontWeight: 800 }}>Багц номнууд  </Text>
            <Icon name="book" size={18} color="gold" />
          </View>
          <View style={{
            flexDirection: "row",
            alignItems: "center",
            flex: 1,
            justifyContent: "flex-end"
          }}>
            <Text style={{ fontWeight: 800 }}>Бүгд </Text>
            <AntDesign name="right" size={18} color="blue" />


          </View>
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
          <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
            <View>
              <Image
                style={styles.imgContainer}
                source={{
                  uri: "https://th.bing.com/th/id/OIP.BYw2010cO4YfAQ2QI_rlXQHaMA?w=115&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
                }}
              />
              <Text style={{ color: "gray", marginLeft: 10 }}>Б.Шүүдэрцэцэг</Text>
              <Text  numberOfLines={5} style={{ fontSize: 10, marginLeft: 10, width:100 }}>Уулсын домог Хотулун</Text>
            </View>
            <View>
              <Image
                style={styles.imgContainer}
                source={{
                  uri: "https://th.bing.com/th/id/OIP.S5S-F6XheLyBXSekY55S6gAAAA?rs=1&pid=ImgDetMain",
                }}
              />
              <Text style={{ color: "gray", marginLeft: 10 }}>Жеймс Р. Доти</Text>
              <Text  numberOfLines={5} style={{ fontSize: 10, marginLeft: 10, width:100 }}>Шидэт мухлаг </Text>
            </View>
            <View>
              <Image
                style={styles.imgContainer}
                source={{
                  uri: "https://th.bing.com/th/id/OIP.c08kiVWSyML2ASCZFbuMgwHaD4?w=298&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
                }}
              />
              <Text style={{ color: "gray", marginLeft: 10 }}>С. Оюун</Text>

              <Text numberOfLines={5} style={{ fontSize: 10, marginLeft: 10, width: 100 }}>Тань руу нүүж явна hshshhshshshshsh(шилмэл түүх) </Text>
            </View>
            <View>
              <Image
                style={styles.imgContainer}
                source={{
                  uri: "https://th.bing.com/th/id/OIP.TH9L-U70owwRHDmhihIhPAE5G9?w=115&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
                }}
              />
              <Text style={{ color: "gray", marginLeft: 10 }}>Г. Гэрэлбаатар</Text>

              <Text numberOfLines={3} style={{ fontSize: 10, marginLeft: 10 , width: 100}}>Бэлгийн энергийг оюуны энерги болгох нь  </Text>
            </View>
            <View>
              <Image
                style={styles.imgContainer}
                source={{
                  uri: "https://reactnative.dev/img/tiny_logo.png",
                }}
              />
              <Text style={{ color: "gray", marginLeft: 10 }}>Хайтан</Text>
              <Text numberOfLines={5} style={{ fontSize: 10, marginLeft: 10 }}>Эргээд ир  </Text>
            </View>
            <View>
              <Image
                style={styles.imgContainer}
                source={{
                  uri: "https://th.bing.com/th/id/OIP.JkZiitvMhWmwO7-sb1u9BwAAAA?rs=1&pid=ImgDetMain",
                }}
              />
              <Text style={{ color: "gray", marginLeft: 10 }}>Алис Жеймс</Text>
              <Text numberOfLines={5} style={{ fontSize: 10, marginLeft: 10 , width:100}}>Сэтгэлээ хайрлах ном  </Text>
            </View>
            <View>
              <Image
                style={styles.imgContainer}
                source={{
                  uri: "https://internom.mn/_next/image?url=https%3A%2F%2Fsinpim130259-dev.s3.ap-southeast-1.amazonaws.com%2Fpublic%2Fproduct-thumb%2FWRC3nO1aeKqCp49VzKNe-thumb.jpg&w=828&q=75",
                }}
              />
              <Text style={{ color: "gray", marginLeft: 10 }}>А. Амарсайхан</Text>
              <Text numberOfLines={5} style={{ fontSize: 10, marginLeft: 10 }}>Аранзал зөн </Text>
            </View>
            <View>
              <Image
                style={styles.imgContainer}
                source={{
                  uri: "https://book.mn/timthumb.php?src=https://book.mn/uploads/products/1724291965-72782694.JPG&w=400&h=500&zc=2&q=90&s=1",
                }}
              />
              <Text style={{ color: "gray", marginLeft: 10 }}>А. Наранболд </Text>
              <Text numberOfLines={5} style={{ fontSize: 10, marginLeft: 10, width:100 }}>Махчин 2-Хүн чоно</Text>
            </View>
            <View>
              <Image
                style={styles.imgContainer}
                source={{
                  uri: "https://th.bing.com/th/id/OIP.FGixTxOYOR1RfTqTrCTYpwAAAA?rs=1&pid=ImgDetMain",
                }}
              />
              <Text style={{ color: "gray", marginLeft: 10 }}>Ёко Огова</Text>
              <Text numberOfLines={5} style={{ fontSize: 10, marginLeft: 10 }}>Төгс тоо </Text>
            </View>
            <View>
              <Image
                style={styles.imgContainer}
                source={{
                  uri: "https://th.bing.com/th/id/OIP.rZbEgr5cTs9R3uPH-WuCEAEiGQ?rs=1&pid=ImgDetMain",
                }}
              />
              <Text style={{ color: "gray", marginLeft: 10 }}>Саяака Мурата</Text>
              <Text numberOfLines={5} style={{ fontSize: 10, marginLeft: 10, width:100}}>Нэрийн дэлгүүрийн эмэгтэй </Text>
            </View>

          </ScrollView>
        </ScrollView>
      </ScrollView>
      <ImageBackground source={{ uri: "https://www.bing.com/images/search?q=background%20image%20blue%20color&FORM=IQFRBA&id=2E6E26D7018F146FA738AC2E42FA04D198B7AA7C" }} style={{ width: "auto", height: 200 }}>
        <ScrollView showsHorizontalScrollIndicator={false}>
          <View style={{ flexDirection: "row" }}>
            <View style={{ flexDirection: "row" }}>
              <Text style={{ fontWeight: 800 }}>end credit books heseg baina   </Text>
              <Icon name="book" size={18} color="gold" />
            </View>
            <View style={{
              flexDirection: "row",
              alignItems: "center",
              flex: 1,
              justifyContent: "flex-end"
            }}>

              <AntDesign name="right" size={18} color="blue" />


            </View>
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
            <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
              <View>
                <Image
                  style={styles.imgContainer}
                  source={{
                    uri: "https://th.bing.com/th/id/OIP.BYw2010cO4YfAQ2QI_rlXQHaMA?w=115&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
                  }}
                />
                <Text style={{ color: "gray", marginLeft: 10 }}>Б.Шүүдэрцэцэг</Text>
                <Text numberOfLines={5} style={{ fontSize: 10, marginLeft: 10, width:100 }}>Уулсын домог Хотулун</Text>
              </View>
              <View>
                <Image
                  style={styles.imgContainer}
                  source={{
                    uri: "https://th.bing.com/th/id/OIP.S5S-F6XheLyBXSekY55S6gAAAA?rs=1&pid=ImgDetMain",
                  }}
                />
                <Text style={{ color: "gray", marginLeft: 10 }}>Жеймс Р. Доти</Text>
                <Text numberOfLines={5} style={{ fontSize: 10, marginLeft: 10 }}>Шидэт мухлаг </Text>
              </View>
              <View>
                <Image
                  style={styles.imgContainer}
                  source={{
                    uri: "https://th.bing.com/th/id/OIP.c08kiVWSyML2ASCZFbuMgwHaD4?w=298&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
                  }}
                />
                <Text style={{ color: "gray", marginLeft: 10 }}>С. Оюун</Text>
                <Text numberOfLines={5} style={{ fontSize: 10, marginLeft: 10, width: 100 }}>Тань руу нүүж явна hshshhshshshshsh(шилмэл түүх) </Text>
              </View>
              <View>
                <Image
                  style={styles.imgContainer}
                  source={{
                    uri: "https://th.bing.com/th/id/OIP.TH9L-U70owwRHDmhihIhPAE5G9?w=115&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
                  }}
                />
                <Text style={{ color: "gray", marginLeft: 10 }}>Г. Гэрэлбаатар</Text>
                <Text numberOfLines={5} style={{ fontSize: 10, marginLeft: 10, width: 100 }}>Бэлгийн энергийг оюуны энерги болгох нь  </Text>
              </View>
              <View>
                <Image
                  style={styles.imgContainer}
                  source={{
                    uri: "https://reactnative.dev/img/tiny_logo.png",
                  }}
                />
                <Text style={{ color: "gray", marginLeft: 10 }}>Хайтан</Text>
                <Text numberOfLines={5} style={{ fontSize: 10, marginLeft: 10 , width:100}}>Эргээд ир  </Text>
              </View>
              <View>
                <Image
                  style={styles.imgContainer}
                  source={{
                    uri: "https://th.bing.com/th/id/OIP.JkZiitvMhWmwO7-sb1u9BwAAAA?rs=1&pid=ImgDetMain",
                  }}
                />
                <Text style={{ color: "gray", marginLeft: 10 }}>Алис Жеймс</Text>
                <Text numberOfLines={5} style={{ fontSize: 10, marginLeft: 10, width:100 }}>Сэтгэлээ хайрлах ном  </Text>
              </View>
              <View>
                <Image
                  style={styles.imgContainer}
                  source={{
                    uri: "https://internom.mn/_next/image?url=https%3A%2F%2Fsinpim130259-dev.s3.ap-southeast-1.amazonaws.com%2Fpublic%2Fproduct-thumb%2FWRC3nO1aeKqCp49VzKNe-thumb.jpg&w=828&q=75",
                  }}
                />
                <Text style={{ color: "gray", marginLeft: 10 }}>А. Амарсайхан</Text>
                <Text numberOfLines={5} style={{ fontSize: 10, marginLeft: 10 }}>Аранзал зөн </Text>
              </View>
              <View>
                <Image
                  style={styles.imgContainer}
                  source={{
                    uri: "https://book.mn/timthumb.php?src=https://book.mn/uploads/products/1724291965-72782694.JPG&w=400&h=500&zc=2&q=90&s=1",
                  }}
                />
                <Text style={{ color: "gray", marginLeft: 10 }}>А. Наранболд </Text>
                <Text numberOfLines={5} style={{ fontSize: 10, marginLeft: 10, width:100}}>Махчин 2-Хүн чоно</Text>
              </View>
              <View>
                <Image
                  style={styles.imgContainer}
                  source={{
                    uri: "https://th.bing.com/th/id/OIP.FGixTxOYOR1RfTqTrCTYpwAAAA?rs=1&pid=ImgDetMain",
                  }}
                />
                <Text style={{ color: "gray", marginLeft: 10 }}>Ёко Огова</Text>
                <Text numberOfLines={5} style={{ fontSize: 10, marginLeft: 10 }}>Төгс тоо </Text>
              </View>
              <View>
                <Image
                  style={styles.imgContainer}
                  source={{
                    uri: "https://th.bing.com/th/id/OIP.rZbEgr5cTs9R3uPH-WuCEAEiGQ?rs=1&pid=ImgDetMain",
                  }}
                />
                <Text style={{ color: "gray", marginLeft: 10 }}>Саяака Мурата</Text>
                <Text numberOfLines={5} style={{ fontSize: 10, marginLeft: 10 , width:100}}>Нэрийн дэлгүүрийн эмэгтэй </Text>
              </View>

            </ScrollView>
          </ScrollView>
        </ScrollView></ImageBackground>
      <ScrollView showsHorizontalScrollIndicator={false}>

        <View style={{ flexDirection: "row" }}>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ fontWeight: 800 }}>Заавал сонсох 10 ном </Text>
            <Icon name="headphones" size={18} color="gold" />
          </View>
          <View style={{
            flexDirection: "row",
            alignItems: "center",
            flex: 1,
            justifyContent: "flex-end"
          }}>


          </View>
        </View>
        <View>Subscription/Credit эрхээрээ аваарай </View>
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
          <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
            <View>
              <Image
                style={styles.imgContainer}
                source={{
                  uri: "",
                }}
              />
              <Text style={{ color: "gray", marginLeft: 10 }}>Ү Чэн Энь </Text>
              <Text numberOfLines={5} style={{ fontSize: 10, marginLeft: 10, width:100}}>Баруунш зорчсон тэмдэглэл</Text>
            </View>
            <View>
              <Image
                style={styles.imgContainer}
                source={{
                  uri: "https://th.bing.com/th/id/OIP.S5S-F6XheLyBXSekY55S6gAAAA?rs=1&pid=ImgDetMain",
                }}
              />
              <Text style={{ color: "gray", marginLeft: 10 }}>Х. Болор-Эрдэнэ</Text>
              <Text numberOfLines={5} style={{ fontSize: 10, marginLeft: 10, width:100 }}>Үлгэр дуустал хайрлана. </Text>
            </View>
            <View>
              <Image
                style={styles.imgContainer}
                source={{
                  uri: "https://th.bing.com/th/id/OIP.c08kiVWSyML2ASCZFbuMgwHaD4?w=298&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
                }}
              />
              <Text style={{ color: "gray", marginLeft: 10 }}>Х. Болормаа</Text>
              <Text numberOfLines={5} style={{ fontSize: 10, marginLeft: 10 }}>Есөн </Text>
            </View>
            <View>
              <Image
                style={styles.imgContainer}
                source={{
                  uri: "https://th.bing.com/th/id/OIP.TH9L-U70owwRHDmhihIhPAE5G9?w=115&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
                }}
              />
              <Text style={{ color: "gray", marginLeft: 10 }}>Демон Захариадес </Text>
              <Text numberOfLines={5} style={{ fontSize: 10, marginLeft: 10 , width:100}}>Үгүй гэж хэлэх урлаг  </Text>
            </View>
            <View>
              <Image
                style={styles.imgContainer}
                source={{
                  uri: "https://reactnative.dev/img/tiny_logo.png",
                }}
              />
              <Text style={{ color: "gray", marginLeft: 10 }}>Б. Шүүдэрцэцэг</Text>
              <Text numberOfLines={5} style={{ fontSize: 10, marginLeft: 10 , width:100}}>Домогт Ану Хатан </Text>
            </View>
            <View>
              <Image
                style={styles.imgContainer}
                source={{
                  uri: "https://th.bing.com/th/id/OIP.JkZiitvMhWmwO7-sb1u9BwAAAA?rs=1&pid=ImgDetMain",
                }}
              />
              <Text style={{ color: "gray", marginLeft: 10 }}>Дэн Харрис </Text>
              <Text numberOfLines={5} style={{ fontSize: 10, marginLeft: 10 , width:100}}>10% илүү аз жаргалтай  </Text>
            </View>
            <View>
              <Image
                style={styles.imgContainer}
                source={{
                  uri: "https://internom.mn/_next/image?url=https%3A%2F%2Fsinpim130259-dev.s3.ap-southeast-1.amazonaws.com%2Fpublic%2Fproduct-thumb%2FWRC3nO1aeKqCp49VzKNe-thumb.jpg&w=828&q=75",
                }}
              />
              <Text style={{ color: "gray", marginLeft: 10 }}>Лю Цы Синь </Text>
              <Text numberOfLines={5} style={{ fontSize: 10, marginLeft: 10 ,width:100}}>Гурван биет I-Гараг дэлхийн өнийн хэрэг  </Text>
            </View>
            <View>
              <Image
                style={styles.imgContainer}
                source={{
                  uri: "https://book.mn/timthumb.php?src=https://book.mn/uploads/products/1724291965-72782694.JPG&w=400&h=500&zc=2&q=90&s=1",
                }}
              />
              <Text style={{ color: "gray", marginLeft: 10 }}>Л. Түдэв </Text>
              <Text numberOfLines={5} style={{ fontSize: 10, marginLeft: 10 ,width:100}}>Хувьсал танаа өчье</Text>
            </View>
            <View>
              <Image
                style={styles.imgContainer}
                source={{
                  uri: "https://th.bing.com/th/id/OIP.FGixTxOYOR1RfTqTrCTYpwAAAA?rs=1&pid=ImgDetMain",
                }}
              />
              <Text style={{ color: "gray", marginLeft: 10 }}>И Жи Сонг</Text>
              <Text numberOfLines={5} style={{ fontSize: 10, marginLeft: 10, width:100 }}>Дээврийн өрөөн дэх миний мөрөөдөл </Text>
            </View>
            <View>
              <Image
                style={styles.imgContainer}
                source={{
                  uri: "https://th.bing.com/th/id/OIP.rZbEgr5cTs9R3uPH-WuCEAEiGQ?rs=1&pid=ImgDetMain",
                }}
              />
              <Text style={{ color: "gray", marginLeft: 10 }}>Мишика Юкио</Text>
              <Text numberOfLines={5} style={{ fontSize: 10, marginLeft: 10, width:100 }}>Хайрын цангаа  </Text>
            </View>

          </ScrollView>
        </ScrollView>
      </ScrollView>
      <ImageBackground 
      source={{ uri: 'https://th.bing.com/th/id/OIP.n6h7TpIgPECN16i4GDEseQHaEo?rs=1&pid=ImgDetMain' }}
      >
        
        <ScrollView showsHorizontalScrollIndicator={false}>

          <View style={{ flexDirection: "row" }}>
            <View style={{ flexDirection: "row" }}>
              <Text style={{ fontWeight: 800 }}>Burii-н санал болгох номнууд </Text>
              <Icon name="headphones" size={18} color="gold" />
            </View>
            <View style={{
              flexDirection: "row",
              alignItems: "center",
              flex: 1,
              justifyContent: "flex-end"
            }}>
              <Icon name="rigth" size={18} color="blue"></Icon>


            </View>
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
            <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
              <View>
                <Image
                  style={styles.imgContainer}
                  source={{
                    uri: "",
                  }}
                />
                <Text style={{ color: "gray", marginLeft: 10 }}>Ү Чэн Энь </Text>
                <Text numberOfLines={5} style={{ fontSize: 10, marginLeft: 10 , width:100}}>Баруунш зорчсон тэмдэглэл</Text>
              </View>
              <View>
                <Image
                  style={styles.imgContainer}
                  source={{
                    uri: "https://th.bing.com/th/id/OIP.S5S-F6XheLyBXSekY55S6gAAAA?rs=1&pid=ImgDetMain",
                  }}
                />
                <Text style={{ color: "gray", marginLeft: 10 }}>Х. Болор-Эрдэнэ</Text>
                <Text numberOfLines={5} style={{ fontSize: 10, marginLeft: 10, width:100 }}>Үлгэр дуустал хайрлана. </Text>
              </View>
              <View>
                <Image
                  style={styles.imgContainer}
                  source={{
                    uri: "https://th.bing.com/th/id/OIP.c08kiVWSyML2ASCZFbuMgwHaD4?w=298&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
                  }}
                />
                <Text style={{ color: "gray", marginLeft: 10 }}>Х. Болормаа</Text>
                <Text numberOfLines={5} style={{ fontSize: 10, marginLeft: 10 }}>Есөн </Text>
              </View>
              <View>
                <Image
                  style={styles.imgContainer}
                  source={{
                    uri: "https://th.bing.com/th/id/OIP.TH9L-U70owwRHDmhihIhPAE5G9?w=115&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
                  }}
                />
                <Text style={{ color: "gray", marginLeft: 10 }}>Демон Захариадес </Text>
                <Text numberOfLines={5} style={{ fontSize: 10, marginLeft: 10 , width:100}}>Үгүй гэж хэлэх урлаг  </Text>
              </View>
              <View>
                <Image
                  style={styles.imgContainer}
                  source={{
                    uri: "https://reactnative.dev/img/tiny_logo.png",
                  }}
                />
                <Text style={{ color: "gray", marginLeft: 10 }}>Б. Шүүдэрцэцэг</Text>
                <Text numberOfLines={5} style={{ fontSize: 10, marginLeft: 10, width:100 }}>Домогт Ану Хатан </Text>
              </View>
              <View>
                <Image
                  style={styles.imgContainer}
                  source={{
                    uri: "https://th.bing.com/th/id/OIP.JkZiitvMhWmwO7-sb1u9BwAAAA?rs=1&pid=ImgDetMain",
                  }}
                />
                <Text style={{ color: "gray", marginLeft: 10 }}>Дэн Харрис </Text>
                <Text numberOfLines={5} style={{ fontSize: 10, marginLeft: 10, width:100 }}>10% илүү аз жаргалтай  </Text>
              </View>
              <View>
                <Image
                  style={styles.imgContainer}
                  source={{
                    uri: "https://internom.mn/_next/image?url=https%3A%2F%2Fsinpim130259-dev.s3.ap-southeast-1.amazonaws.com%2Fpublic%2Fproduct-thumb%2FWRC3nO1aeKqCp49VzKNe-thumb.jpg&w=828&q=75",
                  }}
                />
                <Text style={{ color: "gray", marginLeft: 10 }}>Лю Цы Синь </Text>
                <Text numberOfLines={5} style={{ fontSize: 10, marginLeft: 10 , width:100}}>Гурван биет I-Гараг дэлхийн өнийн хэрэг  </Text>
              </View>
              <View>
                <Image
                  style={styles.imgContainer}
                  source={{
                    uri: "https://book.mn/timthumb.php?src=https://book.mn/uploads/products/1724291965-72782694.JPG&w=400&h=500&zc=2&q=90&s=1",
                  }}
                />
                <Text style={{ color: "gray", marginLeft: 10 }}>Л. Түдэв </Text>
                <Text numberOfLines={5} style={{ fontSize: 10, marginLeft: 10 , width:100}}>Хувьсал танаа өчье</Text>
              </View>
              <View>
                <Image
                  style={styles.imgContainer}
                  source={{
                    uri: "https://th.bing.com/th/id/OIP.FGixTxOYOR1RfTqTrCTYpwAAAA?rs=1&pid=ImgDetMain",
                  }}
                />
                <Text style={{ color: "gray", marginLeft: 10 }}>И Жи Сонг</Text>
                <Text numberOfLines={5} style={{ fontSize: 10, marginLeft: 10 , width:100}}>Дээврийн өрөөн дэх миний мөрөөдөл </Text>
              </View>
              <View>
                <Image
                  style={styles.imgContainer}
                  source={{
                    uri: "https://th.bing.com/th/id/OIP.rZbEgr5cTs9R3uPH-WuCEAEiGQ?rs=1&pid=ImgDetMain",
                  }}
                />
                <Text style={{ color: "gray", marginLeft: 10 }}>Мишика Юкио</Text>
                <Text numberOfLines={5} style={{ fontSize: 10, marginLeft: 10 ,width:100}}>Хайрын цангаа  </Text>
              </View>

            </ScrollView>
          </ScrollView>
        </ScrollView></ImageBackground >
      <ScrollView showsHorizontalScrollIndicator={false}>

        <View style={{ flexDirection: "row" }}>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ fontWeight: 800 }}>+10 цагийн бүтээлүүд</Text>

          </View>
          <View style={{
            flexDirection: "row",
            alignItems: "center",
            flex: 1,
            justifyContent: "flex-end"
          }}>
            <Text style={{ fontWeight: 800, color: "blue" }}>Бүгд </Text>
            <AntDesign name="right" size={18} color="blue" />
          </View>
        </View>
        <View>Аудио ном </View>
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
          <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
            <View>
              <Image
                style={styles.imgContainer}
                source={{
                  uri: "",
                }}
              />
              <Text style={{ color: "gray", marginLeft: 10 }}>Ү Чэн Энь </Text>
              <Text numberOfLines={5} style={{ fontSize: 10, marginLeft: 10 ,width:100}}>Баруунш зорчсон тэмдэглэл</Text>
            </View>
            <View>
              <Image
                style={styles.imgContainer}
                source={{
                  uri: "https://th.bing.com/th/id/OIP.S5S-F6XheLyBXSekY55S6gAAAA?rs=1&pid=ImgDetMain",
                }}
              />
              <Text style={{ color: "gray", marginLeft: 10 }}>Х. Болор-Эрдэнэ</Text>
              <Text numberOfLines={5} style={{ fontSize: 10, marginLeft: 10, width:100 }}>Үлгэр дуустал хайрлана. </Text>
            </View>
            <View>
              <Image
                style={styles.imgContainer}
                source={{
                  uri: "https://th.bing.com/th/id/OIP.c08kiVWSyML2ASCZFbuMgwHaD4?w=298&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
                }}
              />
              <Text style={{ color: "gray", marginLeft: 10 }}>Х. Болормаа</Text>
              <Text numberOfLines={5} style={{ fontSize: 10, marginLeft: 10 }}>Есөн </Text>
            </View>
            <View>
              <Image
                style={styles.imgContainer}
                source={{
                  uri: "https://th.bing.com/th/id/OIP.TH9L-U70owwRHDmhihIhPAE5G9?w=115&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
                }}
              />
              <Text style={{ color: "gray", marginLeft: 10 }}>Демон Захариадес </Text>
              <Text numberOfLines={5} style={{ fontSize: 10, marginLeft: 10 , width:100}}>Үгүй гэж хэлэх урлаг  </Text>
            </View>
            <View>
              <Image
                style={styles.imgContainer}
                source={{
                  uri: "https://reactnative.dev/img/tiny_logo.png",
                }}
              />
              <Text style={{ color: "gray", marginLeft: 10 }}>Б. Шүүдэрцэцэг</Text>
              <Text numberOfLines={5} style={{ fontSize: 10, marginLeft: 10 , width:100}}>Домогт Ану Хатан </Text>
            </View>
            <View>
              <Image
                style={styles.imgContainer}
                source={{
                  uri: "https://th.bing.com/th/id/OIP.JkZiitvMhWmwO7-sb1u9BwAAAA?rs=1&pid=ImgDetMain",
                }}
              />
              <Text style={{ color: "gray", marginLeft: 10 }}>Дэн Харрис </Text>
              <Text numberOfLines={5} style={{ fontSize: 10, marginLeft: 10 ,width:100}}>10% илүү аз жаргалтай  </Text>
            </View>
            <View>
              <Image
                style={styles.imgContainer}
                source={{
                  uri: "https://internom.mn/_next/image?url=https%3A%2F%2Fsinpim130259-dev.s3.ap-southeast-1.amazonaws.com%2Fpublic%2Fproduct-thumb%2FWRC3nO1aeKqCp49VzKNe-thumb.jpg&w=828&q=75",
                }}
              />
              <Text style={{ color: "gray", marginLeft: 10 }}>Лю Цы Синь </Text>
              <Text numberOfLines={5} style={{ fontSize: 10, marginLeft: 10, width:100 }}>Гурван биет I-Гараг дэлхийн өнийн хэрэг  </Text>
            </View>
            <View>
              <Image
                style={styles.imgContainer}
                source={{
                  uri: "https://book.mn/timthumb.php?src=https://book.mn/uploads/products/1724291965-72782694.JPG&w=400&h=500&zc=2&q=90&s=1",
                }}
              />
              <Text style={{ color: "gray", marginLeft: 10 }}>Л. Түдэв </Text>
              <Text numberOfLines={5} style={{ fontSize: 10, marginLeft: 10 , width:100}}>Хувьсал танаа өчье</Text>
            </View>
            <View>
              <Image
                style={styles.imgContainer}
                source={{
                  uri: "https://th.bing.com/th/id/OIP.FGixTxOYOR1RfTqTrCTYpwAAAA?rs=1&pid=ImgDetMain",
                }}
              />
              <Text style={{ color: "gray", marginLeft: 10 }}>И Жи Сонг</Text>
              <Text numberOfLines={5} style={{ fontSize: 10, marginLeft: 10 , width:100}}>Дээврийн өрөөн дэх миний мөрөөдөл </Text>
            </View>
            <View>
              <Image
                style={styles.imgContainer}
                source={{
                  uri: "https://th.bing.com/th/id/OIP.rZbEgr5cTs9R3uPH-WuCEAEiGQ?rs=1&pid=ImgDetMain",
                }}
              />
              <Text style={{ color: "gray", marginLeft: 10 }}>Мишика Юкио</Text>
              <Text numberOfLines={5} style={{ fontSize: 10, marginLeft: 10, width:100 }}>Хайрын цангаа  </Text>
            </View>

          </ScrollView>
        </ScrollView>
      </ScrollView>
      <ScrollView showsHorizontalScrollIndicator={false}>

        <View style={{ flexDirection: "row" }}>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ fontWeight: 800 }}>2024 Бестселлер </Text>
            <AntDesign name="star" size={18} color="go" />
          </View>
          <View style={{
            flexDirection: "row",
            alignItems: "center",
            flex: 1,
            justifyContent: "flex-end"
          }}>
            <Text style={{ fontWeight: 800, color: "blue" }}>Бүгд </Text>
            <AntDesign name="right" size={18} color="blue" />
          </View>
        </View>
        <View>Аудио ном </View>
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
          <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
            <View>
              <Image
                style={styles.imgContainer}
                source={{
                  uri: "",
                }}
              />
              <Text style={{ color: "gray", marginLeft: 10 }}>Ү Чэн Энь </Text>
              <Text numberOfLines={5} style={{ fontSize: 10, marginLeft: 10 , width:100}}>Баруунш зорчсон тэмдэглэл</Text>
            </View>
            <View>
              <Image
                style={styles.imgContainer}
                source={{
                  uri: "https://th.bing.com/th/id/OIP.S5S-F6XheLyBXSekY55S6gAAAA?rs=1&pid=ImgDetMain",
                }}
              />
              <Text style={{ color: "gray", marginLeft: 10 }}>Х. Болор-Эрдэнэ</Text>
              <Text numberOfLines={5} style={{ fontSize: 10, marginLeft: 10 , width:100}}>Үлгэр дуустал хайрлана. </Text>
            </View>
            <View>
              <Image
                style={styles.imgContainer}
                source={{
                  uri: "https://th.bing.com/th/id/OIP.c08kiVWSyML2ASCZFbuMgwHaD4?w=298&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
                }}
              />
              <Text style={{ color: "gray", marginLeft: 10 }}>Х. Болормаа</Text>
              <Text numberOfLines={5} style={{ fontSize: 10, marginLeft: 10 }}>Есөн </Text>
            </View>
            <View>
              <Image
                style={styles.imgContainer}
                source={{
                  uri: "https://th.bing.com/th/id/OIP.TH9L-U70owwRHDmhihIhPAE5G9?w=115&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
                }}
              />
              <Text style={{ color: "gray", marginLeft: 10 }}>Демон Захариадес </Text>
              <Text numberOfLines={5} style={{ fontSize: 10, marginLeft: 10 , width:100}}>Үгүй гэж хэлэх урлаг  </Text>
            </View>
            <View>
              <Image
                style={styles.imgContainer}
                source={{
                  uri: "https://reactnative.dev/img/tiny_logo.png",
                }}
              />
              <Text style={{ color: "gray", marginLeft: 10 }}>Б. Шүүдэрцэцэг</Text>
              <Text numberOfLines={5} style={{ fontSize: 10, marginLeft: 10, width:100 }}>Домогт Ану Хатан </Text>
            </View>
            <View>
              <Image
                style={styles.imgContainer}
                source={{
                  uri: "https://th.bing.com/th/id/OIP.JkZiitvMhWmwO7-sb1u9BwAAAA?rs=1&pid=ImgDetMain",
                }}
              />
              <Text style={{ color: "gray", marginLeft: 10 }}>Дэн Харрис </Text>
              <Text numberOfLines={5} style={{ fontSize: 10, marginLeft: 10, width:100}}>10% илүү аз жаргалтай  </Text>
            </View>
            <View>
              <Image
                style={styles.imgContainer}
                source={{
                  uri: "https://internom.mn/_next/image?url=https%3A%2F%2Fsinpim130259-dev.s3.ap-southeast-1.amazonaws.com%2Fpublic%2Fproduct-thumb%2FWRC3nO1aeKqCp49VzKNe-thumb.jpg&w=828&q=75",
                }}
              />
              <Text style={{ color: "gray", marginLeft: 10 }}>Лю Цы Синь </Text>
              <Text numberOfLines={5} style={{ fontSize: 10, marginLeft: 10 , width:100}}>Гурван биет I-Гараг дэлхийн өнийн хэрэг  </Text>
            </View>
            <View>
              <Image
                style={styles.imgContainer}
                source={{
                  uri: "https://book.mn/timthumb.php?src=https://book.mn/uploads/products/1724291965-72782694.JPG&w=400&h=500&zc=2&q=90&s=1",
                }}
              />
              <Text style={{ color: "gray", marginLeft: 10 }}>Л. Түдэв </Text>
              <Text style={{ fontSize: 10, marginLeft: 10 , width:100 }}>Хувьсал танаа өчье</Text>
            </View>
            <View>
              <Image
                style={styles.imgContainer}
                source={{
                  uri: "https://th.bing.com/th/id/OIP.FGixTxOYOR1RfTqTrCTYpwAAAA?rs=1&pid=ImgDetMain",
                }}
              />
              <Text style={{ color: "gray", marginLeft: 10 }}>И Жи Сонг</Text>
              <Text numberOfLines={5} style={{ fontSize: 10, marginLeft: 10 , width:100}}>Дээврийн өрөөн дэх миний мөрөөдөл </Text>
            </View>
            <View>
              <Image
                style={styles.imgContainer}
                source={{
                  uri: "https://th.bing.com/th/id/OIP.rZbEgr5cTs9R3uPH-WuCEAEiGQ?rs=1&pid=ImgDetMain",
                }}
              />
              <Text style={{ color: "gray", marginLeft: 10 }}>Мишика Юкио</Text>
              <Text numberOfLines={5} style={{ fontSize: 10, marginLeft: 10 , width:100}}>Хайрын цангаа  </Text>
            </View>

          </ScrollView>
        </ScrollView>
      </ScrollView>
      <ScrollView showsHorizontalScrollIndicator={false}>

        <View style={{ flexDirection: "row" }}>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ fontWeight: 800 }}>-5цагийн бүтээлүүд </Text>
          </View>
          <View style={{
            flexDirection: "row",
            alignItems: "center",
            flex: 1,
            justifyContent: "flex-end"
          }}>
            <Text style={{ fontWeight: 800, color: "blue" }}>Бүгд </Text>
            <AntDesign name="right" size={18} color="blue" />
          </View>
        </View>
        <View>Аудио ном </View>
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
          <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
            <View>
              <Image
                style={styles.imgContainer}
                source={{
                  uri: "",
                }}
              />
              <Text style={{ color: "gray", marginLeft: 10 }}>Ү Чэн Энь </Text>
              <Text  numberOfLines={5} style={{ fontSize: 10, marginLeft: 10, width:100 }}>Баруунш зорчсон тэмдэглэл</Text>
            </View>
            <View>
              <Image
                style={styles.imgContainer}
                source={{
                  uri: "https://th.bing.com/th/id/OIP.S5S-F6XheLyBXSekY55S6gAAAA?rs=1&pid=ImgDetMain",
                }}
              />
              <Text style={{ color: "gray", marginLeft: 10 }}>Х. Болор-Эрдэнэ</Text>
              <Text numberOfLines={5} style={{ fontSize: 10, marginLeft: 10, width:100}}>Үлгэр дуустал хайрлана. </Text>
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
          <View style={{ flexDirection: "row" }}>
            <Text style={{ fontWeight: 800 }}>Үнэгүй аудио ном  </Text>
          </View>
          <View style={{
            flexDirection: "row",
            alignItems: "center",
            flex: 1,
            justifyContent: "flex-end"
          }}>
            <Text style={{ fontWeight: 800, color: "blue" }}>Бүгд </Text>
            <AntDesign name="right" size={18} color="blue" />
          </View>
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
          <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
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
          <View style={{ flexDirection: "row" }}>
            <Text style={{ fontWeight: 800 }}>Зохиолчид </Text>
            <Icon name="hand" size={18} color="gold" />
          </View>
          <View style={{
            flexDirection: "row",
            alignItems: "center",
            flex: 1,
            justifyContent: "flex-end"
          }}>
            <Text style={{ fontWeight: 800, color: "blue" }}>Бүгд </Text>
            <AntDesign name="right" size={18} color="blue" />
          </View>
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
          <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
            <View>
              <Image
                style={[styles.imgContainer, { borderRadius: 150 }]}
                source={{
                  uri: "https://th.bing.com/th/id/OIP.S5S-F6XheLyBXSekY55S6gAAAA?rs=1&pid=ImgDetMain",
                }}
              />
              <Text style={{ color: "gray", marginLeft: 10 }}>М. Уянсүх</Text>
            </View>
            <View>
              <Image
                style={[styles.imgContainer, { borderRadius: 150 }]}
                source={{
                  uri: "https://th.bing.com/th/id/OIP.S5S-F6XheLyBXSekY55S6gAAAA?rs=1&pid=ImgDetMain",
                }}
              />
              <Text style={{ color: "gray", marginLeft: 10 }}>Х. Болор-Эрдэнэ</Text>
            </View>
            <View>
              <Image
                style={[styles.imgContainer, { borderRadius: 150 }]}
                source={{
                  uri: "https://th.bing.com/th/id/OIP.c08kiVWSyML2ASCZFbuMgwHaD4?w=298&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
                }}
              />
              <Text style={{ color: "gray", marginLeft: 10 }}>Х. Болормаа</Text>
            </View>
            <View>
              <Image
                style={[styles.imgContainer, { borderRadius: 150 }]}
                source={{
                  uri: "https://th.bing.com/th/id/OIP.TH9L-U70owwRHDmhihIhPAE5G9?w=115&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
                }}
              />
              <Text style={{ color: "gray", marginLeft: 10 }}>Демон Захариадес </Text>
            </View>
            <View>
              <Image
                style={[styles.imgContainer, { borderRadius: 150 }]}
                source={{
                  uri: "https://reactnative.dev/img/tiny_logo.png",
                }}
              />
              <Text style={{ color: "gray", marginLeft: 10 }}>Б. Шүүдэрцэцэг</Text>
            </View>
            <View>
              <Image
                style={[styles.imgContainer, { borderRadius: 150 }]}
                source={{
                  uri: "https://th.bing.com/th/id/OIP.JkZiitvMhWmwO7-sb1u9BwAAAA?rs=1&pid=ImgDetMain",
                }}
              />
              <Text style={{ color: "gray", marginLeft: 10 }}>Дэн Харрис </Text>
            </View>
            <View>
              <Image
                style={[styles.imgContainer, { borderRadius: 150 }]}
                source={{
                  uri: "https://internom.mn/_next/image?url=https%3A%2F%2Fsinpim130259-dev.s3.ap-southeast-1.amazonaws.com%2Fpublic%2Fproduct-thumb%2FWRC3nO1aeKqCp49VzKNe-thumb.jpg&w=828&q=75",
                }}
              />
              <Text style={{ color: "gray", marginLeft: 10 }}>Лю Цы Синь </Text>
            </View>
            <View>
              <Image
                style={[styles.imgContainer, { borderRadius: 150 }]}
                source={{
                  uri: "https://book.mn/timthumb.php?src=https://book.mn/uploads/products/1724291965-72782694.JPG&w=400&h=500&zc=2&q=90&s=1",
                }}
              />
              <Text style={{ color: "gray", marginLeft: 10 }}>Л. Түдэв </Text>
            </View>
            <View>
              <Image
                style={[styles.imgContainer, { borderRadius: 150 }]}
                source={{
                  uri: "https://th.bing.com/th/id/OIP.FGixTxOYOR1RfTqTrCTYpwAAAA?rs=1&pid=ImgDetMain",
                }}
              />
              <Text style={{ color: "gray", marginLeft: 10 }}>И Жи Сонг</Text>
            </View>
            <View>
              <Image
                style={[styles.imgContainer, { borderRadius: 150 }]}
                source={{
                  uri: "https://th.bing.com/th/id/OIP.rZbEgr5cTs9R3uPH-WuCEAEiGQ?rs=1&pid=ImgDetMain",
                }}
              />
              <Text style={{ color: "gray", marginLeft: 10 }}>Мишика Юкио</Text>
            </View>

          </ScrollView>
        </ScrollView>
      </ScrollView>
      <ScrollView showsHorizontalScrollIndicator={false}>

        <View style={{ flexDirection: "row" }}>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ fontWeight: 800 }}>эрхлэн гаргагч, хэвлэлийн газрууд </Text>
            <Icon name="book" size={18} color="gold" />
          </View>
          <View style={{
            flexDirection: "row",
            alignItems: "center",
            flex: 1,
            justifyContent: "flex-end"
          }}>
            <Text style={{ fontWeight: 800, color: "blue" }}>Бүгд </Text>
            <AntDesign name="right" size={18} color="blue" />
          </View>
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
          <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
            <View>
              <Image
                style={[styles.imgContainer, { borderRadius: 150 }]}
                source={{
                  uri: "",
                }}
              />
              <Text  numberOfLines={5} style={{ color: "gray", marginLeft: 10 ,width:100 }}>Монголын зохиолчдын эвлэл </Text>

            </View>
            <View>
              <Image
                style={[styles.imgContainer, { borderRadius: 150 }]}
                source={{
                  uri: "https://th.bing.com/th/id/OIP.S5S-F6XheLyBXSekY55S6gAAAA?rs=1&pid=ImgDetMain",
                }}
              />
              <Text style={{ color: "gray", marginLeft: 10 }}>Hummun publishing</Text>
            </View>
            <View>
              <Image
                style={[styles.imgContainer, { borderRadius: 150 }]}
                source={{
                  uri: "https://th.bing.com/th/id/OIP.c08kiVWSyML2ASCZFbuMgwHaD4?w=298&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
                }}
              />
              <Text style={{ color: "gray", marginLeft: 10 }}> Sweet Secret LLC</Text>
            </View>
            <View>
              <Image
                style={[styles.imgContainer, { borderRadius: 150 }]}
                source={{
                  uri: "https://th.bing.com/th/id/OIP.TH9L-U70owwRHDmhihIhPAE5G9?w=115&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
                }}
              />
              <Text style={{ color: "gray", marginLeft: 10 }}>Zero LLC </Text>
            </View>
            <View>
              <Image
                style={[styles.imgContainer, { borderRadius: 150 }]}
                source={{
                  uri: "https://reactnative.dev/img/tiny_logo.png",
                }}
              />
              <Text style={{ color: "gray", marginLeft: 10 }}> S Audio</Text>
            </View>
            <View>
              <Image
                style={[styles.imgContainer, { borderRadius: 150 }]}
                source={{
                  uri: "https://th.bing.com/th/id/OIP.JkZiitvMhWmwO7-sb1u9BwAAAA?rs=1&pid=ImgDetMain",
                }}
              />
              <Text style={{ color: "gray", marginLeft: 10 }}>DND суваг</Text>
            </View>
            <View>
              <Image
                style={[styles.imgContainer, { borderRadius: 150 }]}
                source={{
                  uri: "https://internom.mn/_next/image?url=https%3A%2F%2Fsinpim130259-dev.s3.ap-southeast-1.amazonaws.com%2Fpublic%2Fproduct-thumb%2FWRC3nO1aeKqCp49VzKNe-thumb.jpg&w=828&q=75",
                }}
              />
              <Text style={{ color: "gray", marginLeft: 10 }}> Uibar Publishing </Text>
            </View>
            <View>
              <Image
                style={[styles.imgContainer, { borderRadius: 150 }]}
                source={{
                  uri: "https://book.mn/timthumb.php?src=https://book.mn/uploads/products/1724291965-72782694.JPG&w=400&h=500&zc=2&q=90&s=1",
                }}
              />
              <Text style={{ color: "gray", marginLeft: 10 }}> Nill Publishing </Text>
            </View>
            <View>
              <Image
                style={[styles.imgContainer, { borderRadius: 150 }]}
                source={{
                  uri: "https://th.bing.com/th/id/OIP.FGixTxOYOR1RfTqTrCTYpwAAAA?rs=1&pid=ImgDetMain",
                }}
              />
              <Text style={{ color: "gray", marginLeft: 10 }}>Амар өргөө</Text>
              
            </View>
          </ScrollView>
        </ScrollView>
      </ScrollView>
      <ScrollView showsHorizontalScrollIndicator={false}>

        <View style={{ flexDirection: "row" }}>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ fontWeight: 800 }}>MBook номын клубээс санал болгох нь  </Text>
            <Icon name="book" size={18} color="gold" />
          </View>
          <View style={{
            flexDirection: "row",
            alignItems: "center",
            flex: 1,
            justifyContent: "flex-end"
          }}>
            <Text style={{ fontWeight: 800, color: "blue" }}>Бүгд </Text>
            <AntDesign name="right" size={18} color="blue" />
          </View>
        </View>
        <View>Бидний сонссон номнууд...</View>
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
          <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
            <View>
              <Image
                style={styles.imgContainer}
                source={{
                  uri: "",
                }}
              />
              <Text style={{ color: "gray", marginLeft: 10 }}>Нил Гейман </Text>
              <Text style={{ fontSize: 10, marginLeft: 10 }}>Коралайн</Text>
            </View>
            <View>
              <Image
                style={styles.imgContainer}
                source={{
                  uri: "https://th.bing.com/th/id/OIP.S5S-F6XheLyBXSekY55S6gAAAA?rs=1&pid=ImgDetMain",
                }}
              />
              <Text style={{ color: "gray", marginLeft: 10 }}>Харуки Мураками</Text>
              <Text style={{ fontSize: 10, marginLeft: 10 }}>Хилийн дээснээс урагшхан алтан нарнаас баруунта. </Text>
            </View>
            <View>
              <Image
                style={styles.imgContainer}
                source={{
                  uri: "https://th.bing.com/th/id/OIP.c08kiVWSyML2ASCZFbuMgwHaD4?w=298&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
                }}
              />
              <Text style={{ color: "gray", marginLeft: 10 }}>Франц Кафка</Text>
              <Text style={{ fontSize: 10, marginLeft: 10 }}> Хувирал</Text>
            </View>
            <View>
              <Image
                style={styles.imgContainer}
                source={{
                  uri: "https://th.bing.com/th/id/OIP.TH9L-U70owwRHDmhihIhPAE5G9?w=115&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
                }}
              />
              <Text style={{ color: "gray", marginLeft: 10 }}>Кацухико Сато </Text>
              <Text style={{ fontSize: 10, marginLeft: 10 }}>Нойр хулжаам сансар огторгуй   </Text>
            </View>
            <View>
              <Image
                style={styles.imgContainer}
                source={{
                  uri: "https://reactnative.dev/img/tiny_logo.png",
                }}
              />
              <Text style={{ color: "gray", marginLeft: 10 }}>Эдит Эгер</Text>
              <Text style={{ fontSize: 10, marginLeft: 10 }}>Бэлэг </Text>
            </View>
            <View>
              <Image
                style={styles.imgContainer}
                source={{
                  uri: "https://th.bing.com/th/id/OIP.JkZiitvMhWmwO7-sb1u9BwAAAA?rs=1&pid=ImgDetMain",
                }}
              />
              <Text style={{ color: "gray", marginLeft: 10 }}>Тим Рэйборон </Text>
              <Text style={{ fontSize: 10, marginLeft: 10 }}>Аз жаргалын скандинав хөтөч  </Text>
            </View>
            <View>
              <Image
                style={styles.imgContainer}
                source={{
                  uri: "https://internom.mn/_next/image?url=https%3A%2F%2Fsinpim130259-dev.s3.ap-southeast-1.amazonaws.com%2Fpublic%2Fproduct-thumb%2FWRC3nO1aeKqCp49VzKNe-thumb.jpg&w=828&q=75",
                }}
              />
              <Text style={{ color: "gray", marginLeft: 10 }}>Крисбосс </Text>
              <Text style={{ fontSize: 10, marginLeft: 10 }}>Хочрын хооронд хэлэлцээ бүү хий  </Text>
            </View>
            <View>
              <Image
                style={styles.imgContainer}
                source={{
                  uri: "https://book.mn/timthumb.php?src=https://book.mn/uploads/products/1724291965-72782694.JPG&w=400&h=500&zc=2&q=90&s=1",
                }}
              />
              <Text style={{ color: "gray", marginLeft: 10 }}>Малала </Text>
              <Text style={{ fontSize: 10, marginLeft: 10 }}>Малала</Text>
            </View>
            <View>
              <Image
                style={styles.imgContainer}
                source={{
                  uri: "https://th.bing.com/th/id/OIP.FGixTxOYOR1RfTqTrCTYpwAAAA?rs=1&pid=ImgDetMain",
                }}
              />
              <Text style={{ color: "gray", marginLeft: 10 }}>Девид Сөрвен</Text>
              <Text style={{ fontSize: 10, marginLeft: 10 }}>Хорт хавдрбн эсрэг амьдралын шинэ хэв маяг </Text>
            </View>
            <View>
              <Image
                style={styles.imgContainer}
                source={{
                  uri: "https://th.bing.com/th/id/OIP.rZbEgr5cTs9R3uPH-WuCEAEiGQ?rs=1&pid=ImgDetMain",
                }}
              />
              <Text style={{ color: "gray", marginLeft: 10 }}>Хермон Хссе</Text>
              <Text style={{ fontSize: 10, marginLeft: 10 }}>Сиддхарта  </Text>
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
    width: 100,
    marginRight: 10,
    marginLeft: 10,
  },
});

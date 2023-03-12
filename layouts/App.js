import { StatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
} from "react-native";

export default function App() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={{ flexDirection: "row" }}>
          <Image
            source={require("./assets/img/bg.jpg")}
            style={styles.banner}
          />
        </View>

        <View style={styles.content}>
          <Text style={styles.title}>What you can do in Paris</Text>

          <ScrollView horizontal>
            <View>
              <Image
                style={styles.city}
                source={require("./assets/img/actividad1.jpg")}
              />
            </View>
            <View>
              <Image
                style={styles.city}
                source={require("./assets/img/actividad2.jpg")}
              />
            </View>
            <View>
              <Image
                style={styles.city}
                source={require("./assets/img/actividad3.jpg")}
              />
            </View>
            <View>
              <Image
                style={styles.city}
                source={require("./assets/img/actividad4.jpg")}
              />
            </View>
            <View>
              <Image
                style={styles.city}
                source={require("./assets/img/actividad5.jpg")}
              />
            </View>
          </ScrollView>

          <Text style={styles.title}>Best places to visit</Text>

          <View>
            <Image
              style={styles.best}
              source={require("./assets/img/mejores1.jpg")}
            />

            <Image
              style={styles.best}
              source={require("./assets/img/mejores2.jpg")}
            />

            <Image
              style={styles.best}
              source={require("./assets/img/mejores3.jpg")}
            />
          </View>

          <Text style={styles.title}>
            Lodging in LA
          </Text>

          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-between",
            }}
          >
            <Image
              style={styles.best}
              source={require("./assets/img/hospedaje1.jpg")}
            />

            <Image
              style={styles.best}
              source={require("./assets/img/hospedaje2.jpg")}
            />

            <Image
              style={styles.best}
              source={require("./assets/img/hospedaje3.jpg")}
            />

            <Image
              style={styles.best}
              source={require("./assets/img/hospedaje4.jpg")}
            />

            </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  banner: {
    height: 250,
    flex: 1,
  },
  content: {
    marginHorizontal: 20,
  },
  title: {
    marginVertical: 20,
    fontSize: 24,
    fontWeight: "bold",
  },
  city: {
    width: 250,
    height: 300,
    marginRight: 10,
  },
  best: {
    width: "100%",
    height: 200,
    marginVertical: 5,
  },
});

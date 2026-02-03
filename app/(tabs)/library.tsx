// your
import { StyleSheet, View, Text, StatusBar } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function LibraryTab() {
  return (
    <View style={styles.body}>
      <View> {/**header */}
        <View style={styles.topHeader}> {/**top header */}
          <Text style={styles.userColor}>H</Text>
          <Text style={styles.libraryText}>Your Library</Text>
          <MaterialIcons name='search' size={30} color={'white'} />
          <MaterialIcons name='add' size={30} color={'white'} />
        </View>
        <View style={styles.bottomHeader}> {/**bottom header */}
          <Text style={styles.color} >Playlists</Text>
          <Text style={styles.color}  >Podcasts</Text>
          <Text style={styles.color} >Artists</Text>
        </View>
      </View>
    </View >
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: "black"
  },
  topHeader: {
    padding: StatusBar.currentHeight,
    flexDirection: 'row',
    justifyContent: "space-between",
  },
  userColor: {
    width: 30,
    height: 30,
    backgroundColor: "#49f384",
    color: "black",
    padding: 5,
    borderRadius: 100,
    fontSize: 13,
    textAlign: 'center',

  },
  libraryText: {
    color: "white",
    padding: 2,
    fontSize: 18,
    fontWeight: "bold",
    marginRight: 160,

  },
  bottomHeader: {
    flexDirection: "row",
  },
  color: {
    color: "white"
  }
});

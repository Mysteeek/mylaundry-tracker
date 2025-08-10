import { themeColors } from "@/utils/themeutils";
import { Text, View} from "react-native";

export default function Track () {
  return (
    <View style={{flex:1,justifyContent: "center",alignItems: "center",backgroundColor: themeColors.blue}}>
      <Text style={{fontSize: 24,fontWeight: 'bold',color: themeColors.Grey}}>Track</Text>
    </View>
  );
}
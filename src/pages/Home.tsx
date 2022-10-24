import { styles } from "./styles";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import {
    SafeAreaView,
    View,
    Text,
    TextInput,
    FlatList,
    ScrollView
} from "react-native";
import {
    LexendDeca_400Regular,
    LexendDeca_500Medium
} from '@expo-google-fonts/lexend-deca';
import { TextBox } from "../components/TextBox";

export const Home = () => {
    const [fontsLoaded] = useFonts({
        LexendDeca_400Regular,
        LexendDeca_500Medium
    });

    if (!fontsLoaded) {
        return <AppLoading />
    } else {
        return (
            <SafeAreaView>
                <View style={styles.box}>
                    <View style={styles.textHeader}>
                        <Text style={styles.text}>Codelândia</Text>
                        <Text style={styles.text}>blog</Text>
                    </View>
                    <TextInput style={styles.input}
                        placeholder="Pesquisar no blog" />
                </View>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <TextBox
                        title='Agora é oficial: o Windows 11 está vindo'
                        subTitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Vestibulum vestibulum auctor est. Nam vitae finibus ante. 
                    Duis lobortis tellus vel diam fringilla, eu ullamcorper ex iaculis.'/>
                    <TextBox
                        title='Tim Berners-Lee vai leiloar código-fonte da web'
                        subTitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Cras hendrerit lectus libero, id efficitur arcu viverra ac.  
                    Etiam sed sagittis velit, vitae convallis turpis. Praesent in purus non 
                    tellus tincidunt fermentum eu at sem. Curabitur lacus libero.'/>
                    <TextBox
                        title='Tem Firefox novo no pedaço e você vai quer migrar'
                        subTitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Vestibulum vestibulum auctor est.' />
                    <TextBox
                        title='John MCAfee, criador do antivírus McAfee, morre'
                        subTitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Cras hendrerit lectus libero, id efficitur arcu viverra ac. 
                    Etiam sed sagittis velit, vitae convallis turpis. Praesent in purus
                    non tellus tincidunt fermentum eu at sem. Curabitur lacus libero.'/>                 
                </ScrollView>
            </SafeAreaView >
        )
    }
}
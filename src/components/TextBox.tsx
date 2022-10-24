import { View, Text } from "react-native"
import { styles } from "./styles"
import Ionicons from '@expo/vector-icons/Ionicons'

export const TextBox = (props: { title: string, subTitle: string }) => {
    return (
        <View style={styles.view}>
            <View style={styles.container}>
                <View style={styles.dataIcon}>
                    <Text style={styles.data}>02 de jul, 2021</Text>
                    <Ionicons style={styles.icon}
                        name='heart-outline' />
                </View>
                    <Text style={styles.title}>{props.title}</Text>
                    <Text style={styles.subTitle}>{props.subTitle}
                </Text>
            </View>
        </View>
    )
}
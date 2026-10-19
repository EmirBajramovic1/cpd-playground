import { Text, View } from 'react-native';
import { styles } from './styles'

// 1.
function ProfileCard({name, role, year}) {
    return (
        <View>
            <Text>{name}</Text>
            <Text>{role} · {year}</Text>
        </View>
    )
}

// 2.
function Section({text, children}) {
    return (
        <View>
            <Text style={styles.title}>{text}</Text>
            {children}
        </View>
    )
}

export default function Cards() {
    return (
        <View style={ styles.screen }>
            <Text style={ styles.title }>Lab 2</Text>
            <Section text='Team'>
                <ProfileCard style={styles.card} name='Ana' year='3' role='Student' />
                <ProfileCard style={styles.card} name='Marko' year='2' role='Student' />
                <ProfileCard style={styles.card} name='Ivana' year='5' role='Teaching Assistant' />
            </Section>
        </View>
    )
}
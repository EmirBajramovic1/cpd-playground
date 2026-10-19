import { useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import { styles } from './styles';

export default function Counter() {
    const [count, setCount] = useState(0);
    const [like, setLike] = useState(false);

    return (
        <View style={styles.screen}>
            <Text>Count: {count}</Text>
            <Pressable style={styles.button} onPress={() => setCount(c => c - 1)}>
                <Text style={styles.buttonText}>-1</Text>
            </Pressable>
            <Pressable style={styles.button} onPress={() => setCount(c => c + 1)}>
                <Text style={styles.buttonText}>+1</Text>
            </Pressable>
           <Pressable style={styles.button} onPress={() => setCount(0)}>
                <Text style={styles.buttonText}>Reset</Text>
            </Pressable> 

            <Pressable style={!like ? styles.button : styles.button2} onPress={ () => {
                like ? setLike(false) : setLike(true)
            }
            }>
                <Text style={styles.buttonText}>{!like ? 'Like' : 'Liked'}</Text>
            </Pressable>
        </View>
    )
}
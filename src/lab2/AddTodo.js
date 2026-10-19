import { useState } from 'react';
import { Pressable, Text, TextInput, View } from 'react-native';
import { styles } from './styles';

export default function AddTodo({ onAdd }) {
    const [text, setText] = useState('');

    const handleAdd = () => {
        if (!text.trim()) return;

        onAdd(text.trim());
        setText('');
    };

    return (
        <View style={{ gap: 12 }}>
            <TextInput
                value={text}
                onChangeText={setText}
                placeholder="New task"
                style={styles.input}
            />

            <Pressable style={styles.button} onPress={handleAdd}>
                <Text style={styles.buttonText}>Add</Text>
            </Pressable>
        </View>
    );
}
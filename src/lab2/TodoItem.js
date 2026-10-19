import { Pressable, Text, View } from 'react-native';
import { styles } from './styles';

export default function TodoItem({ todo, onToggle, onRemove }) {
    return (
        <View style={[styles.row, { justifyContent: 'space-between' }]}>
            <Text
                style={{ textDecorationLine: todo.done ? 'line-through' : 'none' }}
                onPress={() => onToggle(todo.id)}
            >
                {todo.title}
            </Text>

            <Pressable onPress={() => onRemove(todo.id)}>
                <Text style={{ color: 'red' }}>Delete</Text>
            </Pressable>
        </View>
    );
}
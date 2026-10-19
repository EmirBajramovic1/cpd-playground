import { Pressable, Text, View } from 'react-native';
import { styles } from './styles';

export default function FilterBar({ filter, onChange }) {
    return (
        <View style={{ flexDirection: 'row', gap: 12, justifyContent: 'center' }}>
            {['all', 'active', 'done'].map(filterType => (
                <Pressable
                    key={filterType}
                    style={[
                        styles.button,
                        {
                            backgroundColor: filter === filterType
                                ? '#096dc4ff'
                                : '#003A6D'
                        }
                    ]}
                    onPress={() => onChange(filterType)}
                >
                    <Text style={styles.buttonText}>
                        {filterType.charAt(0).toUpperCase() + filterType.slice(1)}
                    </Text>
                </Pressable>
            ))}
        </View>
    );
}
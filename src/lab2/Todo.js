import { useState } from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';

import AddTodo from './AddTodo';
import TodoItem from './TodoItem';
import FilterBar from './FilterBar';

export default function Todo() {
    const [todos, setTodos] = useState([
        { id: '1', title: 'Install Expo Go', done: true },
        { id: '2', title: 'Finish Lab 2', done: false },
    ]);

    const [filter, setFilter] = useState('all');

    const addTodo = (title) => {
        if (!title.trim()) return;

        const newTodo = {
            id: Date.now().toString(),
            title: title,
            done: false
        };

        setTodos(prev => [...prev, newTodo]);
    };

    const handleToggle = (id) => {
        setTodos(prev =>
            prev.map(t => t.id === id ? { ...t, done: !t.done } : t)
        );
    };

    const handleDelete = (id) => {
        setTodos(prev => prev.filter(t => t.id !== id));
    };

    const left = todos.filter(todo => !todo.done).length;

    const visibleTodos = todos.filter(todo => {
        if (filter === 'active') return !todo.done;
        if (filter === 'done') return todo.done;
        return true;
    });

    return (
        <View style={styles.screen}>
            <AddTodo onAdd={addTodo} />

            <FilterBar filter={filter} onChange={setFilter} />

            <Text>Left: {left}</Text>

            {todos.length === 0 ? (
                <Text>No tasks yet</Text>
            ) : (
                <View style={{ flexDirection: 'column', gap: 8 }}>
                    {visibleTodos.map(t => (
                        <TodoItem
                            key={t.id}
                            todo={t}
                            onToggle={handleToggle}
                            onRemove={handleDelete}
                        />
                    ))}
                </View>
            )}
        </View>
    );
}
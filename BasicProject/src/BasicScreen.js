import { useState } from "react";
import { View, Text, StyleSheet, Button, TextInput, ScrollView, FlatList, TouchableOpacity, Modal, } from 'react-native';


import React from 'react'
import AntDesign from 'react-native-vector-icons';



function BasicScreen(props) {
    const [enteredGoalText, setEnteredTextGoal] = useState('');
    const [courseGoals, setCourseGoals] = useState([]);
    const [modalIsVisible, setModalIsVisible] = useState(false);

    function startAddGoalHandler() {
        setModalIsVisible(true);
    }

    function goalInputHandler(enteredText) {
        setEnteredTextGoal(enteredText);

    };

    function addGoalHandler() {
        setCourseGoals([...courseGoals,
        { text: enteredGoalText, key: Math.random().toString() },
        ]);
        setEnteredTextGoal('');
        setModalIsVisible(false)
    };

    function deleteGoalHandler(id) {
        console.log(id)
        setCourseGoals(
            courseGoals.filter((goal) => goal.key !== id)
        );
    }
    return (
        <View style={styles.appContainer}>
            <Button title="Add New Title" color="#5e0acc" onPress={startAddGoalHandler} />
            <Modal visible={modalIsVisible} animationType="slide" >
                <View style={styles.inputContainer}>

                    <TextInput value={enteredGoalText} style={styles.textInput} placeholder="Your course goal!"
                        onChangeText={goalInputHandler} />
                    <Button title="Add Goal!" onPress={addGoalHandler} />
                </View>
            </Modal>
            <View style={styles.goalsContainer}>
                <FlatList data={courseGoals} renderItem={itemData => {

                    return (<TouchableOpacity style={styles.goalItem} onPress={() => deleteGoalHandler(itemData.item.key)}>
                        <Text style={styles.goalText}> {itemData.item.text} {itemData.item.id} </Text>
                    </  TouchableOpacity >

                    );
                }} alwaysBounceVertical={false} />


            </View>
        </View >
    );
}
const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        paddingTop: 50,
        paddingHorizontal: 16,
        backgroundColor: "#311b6b"

    },
    inputContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 24,
        borderBottomWidth: 1,
        borderBottomColor: "#cccccc",
        backgroundColor: "#311b6b"

    },
    textInput: {
        borderWidth: 1,
        borderColor: '#cccccc',
        width: '70%',
        marginRight: 8,
        padding: 8,
        // color: "white"
    },
    goalsContainer: {
        flex: 5,
    },
    goalItem: {
        margin: 8,
        borderRadius: 6,
        backgroundColor: "#5e0acc",

    },
    goalText: {
        color: "white",
        padding: 8,
    }

});
export default BasicScreen;

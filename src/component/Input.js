import React from 'react';
import { Text, View } from 'react-native';
import { TextInput } from 'react-native-paper';

const textinput = () => {
    const [EmailID, setText] = React.useState('');

    return (
        <View
            style={{
                flex: 1,
                justifyContent: 'center',
                
            }}>
            <TextInput
                label="Email"
                value={EmailID}
                style={{ margin: 10, textAlign: 'left' }}
                mode="outlined"
                activeOutlineColor="#3399ff"
                // selectionColor = 'red'
                outlineColor="grey"
                onChangeText={text => setText(text)}
            />
        </View>
    );
};
export default textinput;

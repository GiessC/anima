import { useFormik } from 'formik';
import React from 'react';
import { View } from 'react-native';
import { Button, Text, TextInput } from 'react-native-paper';

interface LoginRequest {
    username: string;
    password: string;
}

const DEFAULT_VALUES: LoginRequest = {
    username: '',
    password: '',
};

const LoginScreen = () => {
    const { handleChange, handleBlur, submitForm, values, errors } = useFormik({
        initialValues: DEFAULT_VALUES,
        onSubmit: (values: LoginRequest) => {
            console.log('Login', values);
        },
    });

    const submit = async () => {
        await submitForm();
    };

    return (
        <View>
            <Text>Login</Text>
            <TextInput
                label='Username'
                onChangeText={handleChange('username')}
                onBlur={handleBlur('username')}
                value={values.username}
                error={!!errors.username}
            />
            <TextInput
                label='Password'
                onChangeText={handleChange('username')}
                onBlur={handleBlur('username')}
                value={values.username}
                error={!!errors.password}
                secureTextEntry
            />
            <Button onPress={submit}>Login</Button>
        </View>
    );
};

export default LoginScreen;

import * as React from 'react';
import {
    View, Text, SafeAreaView, StyleSheet, Pressable,
    ScrollView, TextInput, ImageBackground
} from 'react-native';
import Logo from './assets/svg/logo.svg';
import { Auth } from './src/services/api';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true
        }
    }

    login() {
        Auth()
            .then(res => {
                console.log(res);
            })
    }

    render() {
        return (
            <SafeAreaView style={styles.MainContainer}>
                <ImageBackground source={require('./assets/login-bg.png')} resizeMode="cover" style={styles.bgImage}>
                    <ScrollView>
                        <View style={styles.authModal}>
                            <View style={styles.header}>
                                <Logo style={styles.logo} />
                            </View>

                            <TextInput style={styles.input} value="abc" />
                            <TextInput secureTextEntry={true} style={styles.input} value="abc" />
                            <Pressable style={styles.loginBtn} onPress={this.login}>
                                <Text>Войти</Text>
                            </Pressable>
                        </View>
                    </ScrollView>
                </ImageBackground>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    MainContainer: {
        flex: 1,
        fontFamily: 'Arial'
    },

    bgImage: {
        flex: 1,
        height: '122%',
        top: '-10%',
        paddingTop: '10%'
    },

    header: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%'
    },

    logo: {
        width: '60%',
        height: '120px'
    },

    authModal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: 280,
        marginTop: '52%'
    },

    input: {
        height: 32,
        width: '66%',
        borderRadius: 7,
        backgroundColor: '#e4e4e4',
        margin: 7,
        paddingHorizontal: 4
    },

    loginBtn: {
        paddingVertical: 7,
        paddingHorizontal: 15,
        borderRadius: 4,
        backgroundColor: '#ffffff',
        marginTop: 20
    }
});

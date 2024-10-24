import { useState, useRef } from "react";
import { View, StyleSheet, Image, Pressable, Text, Button } from "react-native";
import { CameraView, useCameraPermissions } from "expo-camera";
import * as MediaLibrary from 'expo-media-library'; 

export default function Camera() {
    const [permissao, pedirPermissao] = useCameraPermissions();
    const [mediaPermissao, pedirMediaPermissao] = MediaLibrary.usePermissions(); 
    const [foto, setFoto] = useState(null);
    const [cameraType, setCameraType] = useState("back"); 
    const cameraRef = useRef(null);

    
    if (!permissao) {
        return <View></View>;
    }

    
    if (!permissao.granted) {
        return (
            <View style={styles.container}>
                <Text style={styles.textpermission}>Você precisa autorizar o aplicativo para utilizar a câmera</Text>
                <Button title="Dar Permissão" onPress={pedirPermissao} />
            </View>
        );
    }

    
    if (!mediaPermissao?.granted) {
        return (
            <View style={styles.container}>
                <Text style={styles.textpermission}>Você precisa autorizar o aplicativo para salvar fotos na galeria</Text>
                <Button title="Dar Permissão para Galeria" onPress={pedirMediaPermissao} />
            </View>
        );
    }

    const tirarFoto = async () => {
        const foto = await cameraRef.current?.takePictureAsync({
            quality: 0.5,
            base64: true
        });
        setFoto(foto);

        const asset = await MediaLibrary.createAssetAsync(foto.uri);
        MediaLibrary.createAlbumAsync('Camera', asset, false)
            .then(() => {
                console.log('Foto salva com sucesso!');
            })
            .catch((error) => {
                console.log('Erro ao salvar a foto:', error);
            });
    };

    const alternarCamera = () => {
        setCameraType((prevCameraType) => (prevCameraType === "back" ? "front" : "back"));
    };

    return (
        <CameraView
            facing={cameraType} 
            style={styles.camera}
            ref={cameraRef}
        >
            <View style={styles.buttonContainer}>
                {}
                <Pressable onPress={alternarCamera} style={styles.switchButton}>
                    <Image
                        source={require('./alterna.png')}
                        style={styles.switchImage}
                    />
                </Pressable>

                {}
                <Pressable onPress={tirarFoto} style={styles.cameraButtonContainer}>
                    <Image
                        source={require('./botaaoo.png')}
                        style={styles.cameraButton}
                    />
                </Pressable>
            </View>
        </CameraView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textpermission: {
        textAlign: 'center',
        marginBottom: 20
    },
    camera: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    buttonContainer: {
        flexDirection: 'row', 
        width: '100%', 
        alignItems: 'center',
        justifyContent: 'space-between', 
        paddingHorizontal: 20,
        marginBottom: 20,
    },
    cameraButtonContainer: {
        flex: 1, 
        justifyContent: 'center',
        alignItems: 'center',
    },
    cameraButton: {
        width: 90,
        height: 90,
        marginLeft: -50,
        resizeMode: 'contain',
    },
    switchButton: {
        justifyContent: 'flex-start',
    },
    switchImage: {
        width: 50,
        height: 50,
        resizeMode: 'contain',
    }
});
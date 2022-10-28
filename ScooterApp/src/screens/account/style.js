import {StyleSheet} from 'react-native';
import Colors from '../../utilis/AppColors';

export default StyleSheet.create({
    container:{
        flex: 1,
        padding: 30,
        backgroundColor: Colors.bg,
        alignItems: 'center',
        justifyContent: 'center',
    },
    input:{
        width: '100%',
        padding: 14,
        backgroundColor: Colors.white,
        borderRadius: 20, 
        marginBottom: 12,
    },
    btn:{
        width:'100%',
        paddingVertical: 20,
        alignItems: 'center',
        backgroundColor: Colors.pink,
        borderRadius: 20
    },
    btn_Text: {
        color: Colors.white,
        fontWeight: '700',
        fontSize: 24
    }
})
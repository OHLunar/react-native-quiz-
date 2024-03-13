import react from "react";
import { StyleSheet } from "react-native";
import AppColor from "./AppColor";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: AppColor.white,
    },
    title: {
        paddingTop: 20,
        textAlign: 'center',
        fontSize: 40,
        fontWeight: '500',
        color: AppColor.anti_flash_white,
    },
    quiz_screen: {
        height: '90%',
        padding: 20,
    },
    result_screen: {
        height: '85%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    question_text: {
        height: '30%',
        fontSize: 25,
    },
    question_btn: {
        padding: 14,
        marginBottom: 12,
        borderRadius: 12,
        textAlign: 'center',
        backgroundColor: AppColor.anti_flash_white,
    },
    answer_text: {
        fontSize: 20,
    },
    result_text: {
        fontSize: 30,
        textAlign: 'center',
    },
    restart_btn: {
        marginTop: 12,
        padding: 20,
        borderRadius: 20,
        backgroundColor: AppColor.anti_flash_white,
    },
    failed_result: {
        backgroundColor: AppColor.folly,
    },
    passed_result: {
        backgroundColor: AppColor.emerald,
    },
    question_index: {
        backgroundColor: AppColor.night,
    },
})

export default styles 
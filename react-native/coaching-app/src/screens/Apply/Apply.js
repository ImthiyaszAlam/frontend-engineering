import React from 'react';
import { ScrollView, View, Text, TextInput, useWindowDimensions } from 'react-native';
import styles from './Apply.styles';
import AppButton from '../../components/AppButton/AppButton';
import Footer from '../../components/Footer/Footer';
import useApplyForm from '../../hooks/useApplyForm';
import { Linking } from 'react-native';
import { basicdata } from '../../content/basicdata';


const Apply = () => {
    const { width, height } = useWindowDimensions();
    const style = styles(width, height);
    const { values, errors, handleChange, handleSubmit } = useApplyForm();

    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps="handled"
        >

            <View
                style={style.container}>



                <View style={style.form}>

                <Text style={style.heading}>Secure Your Admission Today</Text>

                    <TextInput
                        placeholder="Full Name"
                        style={[style.input, errors.name && style.inputError]}
                        value={values.name}
                        onChangeText={(text) => handleChange('name', text)}
                    />
                    {errors.name && <Text style={style.error}>{errors.name}</Text>}

                    <TextInput
                        placeholder="Phone Number"
                        style={[style.input, errors.phone && style.inputError]}
                        keyboardType="phone-pad"
                        value={values.phone}
                        onChangeText={(text) => handleChange('phone', text)}
                    />
                    {errors.phone && <Text style={style.error}>{errors.phone}</Text>}

                    <TextInput
                        placeholder="Email Address"
                        style={[style.input, errors.email && style.inputError]}
                        keyboardType="email-address"
                        value={values.email}
                        onChangeText={(text) => handleChange('email', text)}
                    />
                    {errors.email && <Text style={style.error}>{errors.email}</Text>}

                    <TextInput
                        placeholder="Course (e.g. NEET / Class 12)"
                        style={[style.input, errors.course && style.inputError]}
                        value={values.course}
                        onChangeText={(text) => handleChange('course', text)}
                    />
                    {errors.course && <Text style={style.error}>{errors.course}</Text>}

                    <TextInput
                        placeholder="Message (optional)"
                        style={[style.input, style.textArea, errors.message && style.inputError]}
                        multiline
                        value={values.message}
                        onChangeText={(text) => handleChange('message', text)}
                    />
                    {errors.message && <Text style={style.error}>{errors.message}</Text>}



                    <AppButton style={style.applybtn} title="Submit Application" onPress={handleSubmit} />
                </View>

                <View style={style.callSection}>
                    <Text style={style.callTitle}>Need Guidance?</Text>
                    <Text style={style.callSubtitle}>
                        Talk to our expert for free consultation
                    </Text>

                    <AppButton
                        title="📞 Call for Free Consultation"
                        style={style.callBtn}
                        onPress={() => Linking.openURL(`tel:${basicdata.phones[0]}`)}
                    />
                </View>
            </View>
            <Footer />
        </ScrollView>
    );
};

export default Apply;
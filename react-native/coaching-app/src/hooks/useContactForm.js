import { useState } from 'react';
import { Linking, Alert } from 'react-native';
import { basicdata } from '../content/basicdata';

const useContactForm = () => {
    const [values, setValues] = useState({
        name: '',
        phone: '',
        message: '',
    });

    const [errors, setErrors] = useState({});

    const handleChange = (key, value) => {
        setValues(prev => ({ ...prev, [key]: value }));
        // Clear error on change
        if (errors[key]) {
            setErrors(prev => ({ ...prev, [key]: '' }));
        }
    };

    const validate = () => {
        const newErrors = {};
        if (!values.name.trim()) {
            newErrors.name = 'Name is required';
        }
        if (!values.phone.trim()) {
            newErrors.phone = 'Phone is required';
        } else if (!/^\d{10,15}$/.test(values.phone.replace(/[\s\-\(\)]/g, ''))) {
            newErrors.phone = 'Enter a valid phone number';
        }
        if (!values.message.trim()) {
            newErrors.message = 'Message is required';
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = () => {
        if (validate()) {
            const text = `I'd love to discuss my query.\nName: ${values.name}\nPhone: ${values.phone}\nMessage: ${values.message}`;
            const phoneNumber = basicdata.phones[0].replace(/[\+\s]/g, '');
            const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
            Linking.openURL(url).catch(() => {
                Alert.alert('Error', 'Unable to open WhatsApp.');
            });
        }
    };

    return { values, errors, handleChange, handleSubmit };
};

export default useContactForm;
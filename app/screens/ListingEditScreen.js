import React from 'react';
import { StyleSheet } from "react-native";
import * as Yup from 'yup';

import {
    AppForm,
    AppFormField,
    AppFormPicker,
    SubmitButton
} from "../components/forms"
import Screen from "../components/Screen"
import CategoryPickerItem from '../components/CategoryPickerItem'
import AppFormImagePicker from '../components/forms/AppFormImagePicker';
import useLocation from '../hooks/useLocation';

const validationSchema = Yup.object().shape({
    title: Yup.string().required().min(1).label("Title"),
    price: Yup.number().required().min(1).max(100000).label("Price"),
    description: Yup.string().label("Description"),
    category: Yup.object().required().nullable().label("Category"),
    images: Yup.array().min(1, "Please select at least one image.")
});

const categories = [
    { label: "Shows", value: 1, backgroundColor: "#ffa500", icon: 'drama-masks' },
    { label: "Movies", value: 2, backgroundColor: "#cccccc", icon: 'movie-roll' },
    { label: "Concerts", value: 3, backgroundColor: "#c0d6e4", icon: 'music-clef-treble' },
    { label: "Sports", value: 4, backgroundColor: "#800080", icon: 'football' },
    { label: "Race", value: 4, backgroundColor: "#ff1a21", icon: 'car-sports' },
    { label: "Free", value: 5, backgroundColor: "#81d8d0", icon: 'flag-variant-outline' }
];
export default function ListingEditScreen() {
    const location = useLocation();
    return (
        <Screen style={styles.container}>
            <AppForm
                initialValues={{
                    title: "",
                    price: "",
                    description: "",
                    category: null,
                    images: []
                }}
                onSubmit={(values) => console.log(location)}
                validationSchema={validationSchema}
            >
                <AppFormImagePicker name="images" />
                <AppFormField maxLength={255} name="title" placeholder="Title" />
                <AppFormField
                    keyboardType="numeric"
                    maxLength={8}
                    name="price"
                    placeholder="Price"
                    width={120}
                />
                <AppFormPicker
                    items={categories}
                    name="category"
                    numberOfColumns={3}
                    PickerItemComponent={CategoryPickerItem}
                    placeholder="Category"
                    width='50%'
                />
                <AppFormField
                    maxLength={255}
                    multiline
                    name="description"
                    numberOfLines={3}
                    placeholder="Description"
                />
                <SubmitButton title="Update" />
            </AppForm>
        </Screen>
    )
};

const styles = StyleSheet.create({

})
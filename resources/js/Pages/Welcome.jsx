import React from 'react';
import { Link, Head } from '@inertiajs/inertia-react';
import Guest from "@/Layouts/Guest";
import Nav from "@/Components/Home/Nav";
import IntroSection from "@/Components/Home/IntroSection";
import DietPlaning from "@/Components/Home/DietPlaning";
import PersonalWorkout from "@/Components/Home/PersonalWorkout";

export default function Welcome(props) {
    return (
        <>
            <Head title="Welcome" />
            <Nav/>
            <IntroSection/>
            <PersonalWorkout/>
            <DietPlaning/>
        </>
    );
}

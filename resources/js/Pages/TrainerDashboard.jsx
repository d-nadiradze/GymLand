import React from 'react';
import { Head } from '@inertiajs/inertia-react';
import AuthTrainer from "@/Layouts/AuthTrainer";

export default function TrainerDashboard(props) {
    return (
        <AuthTrainer
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Trainer Dashboard</h2>}
        >
            <Head title="Trainer Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">You're logged in!</div>
                    </div>
                </div>
            </div>
        </AuthTrainer>
    );
}

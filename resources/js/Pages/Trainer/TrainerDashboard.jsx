import React from 'react';
import {Head, Link} from '@inertiajs/inertia-react';
import AuthTrainer from "@/Layouts/AuthTrainer";
import TrainersCard from "@/Components/UserDashboard/TrainersCard";

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
                    <div className="grid grid-cols-4 gap-x-4">
                    {
                        props.users &&
                            props.users.map((user, index) =>
                                <Link key = {index} href={route('trainer.view.trainingPlan', {user: user.id})}>
                                    <TrainersCard name={user.first_name} social={false}/>
                                </Link>
                            )
                    }
                    </div>
                </div>
            </div>
        </AuthTrainer>
    );
}

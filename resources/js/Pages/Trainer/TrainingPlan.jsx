import React from 'react';
import AuthTrainer from "@/Layouts/AuthTrainer";
import {Head, Link, useForm} from "@inertiajs/inertia-react";
import TrainersCard from "@/Components/UserDashboard/TrainersCard";
import Input from "@/Components/Input";
import Label from "@/Components/Label";
import Button from "@/Components/Button";

const TrainingPlan = (props) => {
    const now = new Date()

    const { data, setData, post, processing, errors, reset } = useForm({
        training: props?.trainingPlan.training ?? '',
        name: props?.trainingPlan.name ?? '',
        breakfast: props?.trainingPlan.breakfast ?? '',
        lunch: props?.trainingPlan.lunch ?? '',
        dinner: props?.trainingPlan.dinner ?? '',
        supper: props?.trainingPlan.supper ??'',
        day:  now.getDay() ,
        trainer: props.auth.user.id ,
        user: props.user.id,
        planId: props?.trainingPlan.id ??'',
    });

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();
        if(props?.trainingPlan){
            post(route('trainer.edit.trainingPlan'));
        } else {
            post(route('trainer.create.trainingPlan'));
        }
    };
    return (
        <AuthTrainer
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Trainer Dashboard</h2>}
        >
            <Head title="Trainer Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 bg">
                    <div className="bg-white rounded px-8 py-6">
                        <div className="text-center text-customOrange font-[500] text-xl capitalize">Make training plan for {props.user.first_name}</div>
                        <form onSubmit={ submit }>
                            <div className="mt-4">
                                <Label forInput={'name'}>Insert name</Label>
                                <Input
                                    type="text"
                                    name="name"
                                    value={data.name}
                                    className="mt-1 block w-full"
                                    autoComplete="username"
                                    handleChange={onHandleChange}
                                />
                            </div>
                             <div className="mt-4 w-full ">
                                 <div className={'text-lg text-customBlack font-[400] text-center'}> Food </div>
                                 <div className="grid grid-cols-2 gap-x-4  gap-y-4 my-4">
                                     <div className="">
                                         <Label forInput={'breakfast'} children={'Breakfast'}/>
                                         <textarea onChange={ onHandleChange } defaultValue={ data.breakfast } name='breakfast' className={'w-full rounded border border-gray-300 focus:ring-0 focus:shadow focus:shadow-blue-200'}/>
                                     </div>
                                     <div className="">
                                         <Label forInput={'lunch'} children={'Lunch'}/>
                                         <textarea onChange={ onHandleChange } defaultValue={ data.lunch } name='lunch' className={'w-full rounded border border-gray-300 focus:ring-0 focus:shadow focus:shadow-blue-200'}/>
                                     </div>
                                     <div className="">
                                         <Label forInput={'dinner'} children={'Dinner'}/>
                                         <textarea onChange={ onHandleChange } defaultValue={ data.dinner } name='dinner' className={'w-full rounded border border-gray-300 focus:ring-0 focus:shadow focus:shadow-blue-200'}/>
                                     </div>
                                     <div className="">
                                         <Label forInput={'dupper'} children={'Supper'}/>
                                         <textarea onChange={ onHandleChange } defaultValue={ data.supper } name='supper' placeholder={'Not necessary'} className={'w-full rounded border border-gray-300 focus:ring-0 focus:shadow focus:shadow-blue-200 placeholder:text-xs'}/>
                                     </div>
                                 </div>
                             </div>
                            <div className="mt-4">
                                <Label forInput={'training'} children={'training'}/>
                                <textarea onChange={ onHandleChange } defaultValue={ data.training } name='training' className={'w-full rounded border border-gray-300 focus:ring-0 focus:shadow focus:shadow-blue-200'}/>
                            </div>
                            <div className="w-full flex justify-center mt-6">
                                <Button className="mx-auto" processing={processing}>
                                    Submit
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </AuthTrainer>
    );
};

export default TrainingPlan;

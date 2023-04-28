'use client';
import Modal from "./Modal";
import useRentModal from "@/app/hooks/useRentModal";
import Heading from '../Heading';
import { useMemo, useState } from "react";


enum STEPS {
    CATEGORY = 0,
    LOCATION = 1,
    INFO = 2,
    IMAGES = 3,
    DESCRIPTION = 4,
    PRICE = 5,

}





const RentModal = () => {
const RentModal = useRentModal();


const [step, setStep] = useState(STEPS.CATEGORY);

const onBack = () => {
    setStep((value) => value - 1);
};

const onNext = () => {
    setStep((value) => value + 1);
};

const actionLabel = useMemo (() => {
    if (step === STEPS.PRICE) {
        return 'Create'
    }

    return 'Next';
}, [step]);

const secondaryActionLabel = useMemo (() => {
    if (step === STEPS.CATEGORY) {
return undefined;
    }

    return 'Back';
}, [step]);

let bodyContent = (
<div className="flex felx-col gap-8">
    <Heading
    title="Which of these best describes your property?"
    subtitle= "Pick a category"
    />

</div>


)


return (
    <Modal
        isOpen={RentModal.isOpen}
        onClose={RentModal.onClose}
        onSubmit={RentModal.onClose}
        actionLabel={actionLabel}
        secondaryActionLabel={secondaryActionLabel}
        secondaryAction={step === STEPS.CATEGORY ? undefined : onBack}
        title="Hotspot your home"
        body={bodyContent}
        />
)

}
 
export default RentModal;
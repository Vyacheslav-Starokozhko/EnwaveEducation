import React, {FC} from 'react';
import './OrderWork.scss';
interface OrderWorkProps {
    label: string;
    description: string;
    form: FC;
    titleForm: string;
    descriptionForm: string;
}

const OrderWork: React.FC<OrderWorkProps> = ({label,description, form, titleForm, descriptionForm}) => {
    return (
        <section className="OrderWork">
            <div className="OrderWork__label">
                <h1>{label}</h1>
                <p>{description}</p>
            </div>
            <div className="OrderWork__form">
                <h2>{titleForm}</h2>
                <p>{descriptionForm}</p>
                {form}
            </div>
        </section>
    );
};

export default OrderWork;

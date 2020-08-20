import React, {useState} from 'react';

type State = {
    isVisible: boolean;
};

type Props = {};

export const App: React.FC<Props> = () => {
    
    const [isVisible, setIsVisible] = useState<boolean>(false);
 
    const handleToggle = () => {
        setIsVisible(!isVisible);
    };

        return (
            <div>
                <h1>Функциональный компонент</h1>
                <button onClick={handleToggle}>Show/hide</button>
            </div>
        );
}

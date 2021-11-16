import {Component} from '../Component';

import './button.scss';
import ButtonComponentTemplate from './button.hbs';

export interface IButtonComponentProps {
    mode: 'primary' | 'secondary';
    size: 'regular' | 'big';
    label: string;
}

export class ButtonComponent extends Component<IButtonComponentProps> {
    private classList: {};

    constructor(props) {
        super(props);
        this.classList = {label: props.label, mode: `button__${this.props.mode}`};
    }

    render(): string {
        return ButtonComponentTemplate(this.classList);
    }

    label: string;
    mode: "primary" | "secondary";
    size: "regular" | "big";
}


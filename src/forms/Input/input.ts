import { Component } from 'components/Component/component';

import InputTemplate from './input.hbs';
import './input.scss';

export class InputComponent extends Component<null> {
    constructor(props) {
        super(props);
    }

    render() {
        return InputTemplate(this.props);
    }
}

import { Component } from 'components/Component/component';

import AvatarTemplate from './avatar.hbs';
import './avatar.scss';

interface IAvatar {
    avatar: string;
}

export class Avatar<
    TAvatar extends IAvatar = IAvatar
> extends Component<TAvatar> {
    constructor(props) {
        super(props);
    }

    render() {
        return AvatarTemplate({ userpic: this.props.avatar });
    }
}

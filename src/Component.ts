export abstract class Component<TProps> {
    protected props: TProps;

    constructor(props) {
        this.props = { ...props };
    }

    abstract render(): string;
}

import { Alert } from 'components/Alert/alert';

export default {
    title: 'Components/Alert',
    component: Alert,
};

export const Default = (args) => {
    return new Alert(args).render();
};

Default.args = {
    text: 'Добавлено',
};

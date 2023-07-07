import { LightningElement } from 'lwc';

export default class DropDown extends LightningElement {

    value = 'account';

    get options() {
        return [
            { label: 'Account', value: 'account' },
            { label: 'Contact', value: 'contact' },
            { label: 'Opportunity', value: 'oportunity' },
        ];
    }

    handleChange(event) {
        this.value = event.detail.value;
    }
}
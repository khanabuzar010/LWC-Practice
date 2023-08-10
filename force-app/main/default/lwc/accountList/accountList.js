import { LightningElement,wire,track } from 'lwc';
import getAccounts from '@salesforce/apex/AccountClass.getAccounts';

export default class AccountList extends LightningElement {

    @track accounts;
   @track error;
   @wire(getAccounts)
   wiredAccounts({ error, data }) {
       if (data) {
           this.accounts = data;
       } else if (error) {
           console.log(error);
           this.error = error;
       }
   }




}
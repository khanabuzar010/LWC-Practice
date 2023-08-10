public with sharing class AccountClass {

    @AuraEnabled(cacheable=true)
    public static List<Account> getAccounts() {

        List<Account> accList =[Select Id, Name from Account limit 4];

        return accList;

    }
}

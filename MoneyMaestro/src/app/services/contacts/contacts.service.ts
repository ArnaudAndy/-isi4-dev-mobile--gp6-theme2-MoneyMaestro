import { Injectable } from '@angular/core';
import { Contacts, Contact, ContactFieldType } from '@awesome-cordova-plugins/contacts/ngx';

@Injectable({
  providedIn: 'root',
})
export class ContactsService {
  constructor(private contacts: Contacts) {}

  // Fetch all contacts
  async getContacts(): Promise<Contact[]> {
    return this.contacts.find(['displayName', 'phoneNumbers'], { multiple: true });
  }
}

import { faker } from '@faker-js/faker';

export class randomDataUtil {

    static getFirstName(): string {
        return faker.person.firstName();
    }

    static getLastName(): string {
        return faker.person.lastName();
    }

    static getFullName(): string {
        return faker.person.fullName();
    }

    static getEmail(): string {
        return faker.internet.email().toLowerCase();
    }

    static getPhoneNumber(): string {
        return faker.string.numeric(10);
    }

    static getPassword(): string {
        return faker.internet.password({
            length: 12,
            memorable: false,
            pattern: /[A-Za-z0-9@#$]/
        });
    }

    static getCompany(): string {
        return faker.company.name();
    }

    static getCity(): string {
        return faker.location.city();
    }

    static getState(): string {
        return faker.location.state();
    }

    static getCountry(): string {
        return faker.location.country();
    }

    static getZipCode(): string {
        return faker.location.zipCode();
    }

    static getStreetAddress(): string {
        return faker.location.streetAddress();
    }

    static getUsername(): string {
        return faker.internet.username();
    }

    static getRandomNumber(min: number, max: number): number {
        return faker.number.int({ min, max });
    }

    static getRandomString(length: number): string {
        return faker.string.alpha(length);
    }

    static getUUID(): string {
        return faker.string.uuid();
    }

    static getCurrentDate(): string {
        return faker.date.recent().toISOString();
    }
}
/* tslint:disable: no-console */
import generatePassword = require("password-generator");

import * as Api from "./";
import IPasswordRecord, * as PasswordRecordApi from "./persistence/passwordRecord";
import IConfig from "./config";
import IStorage from "./persistence/storage";

const DEFAULT_PASSWORD_LENGTH = 16;
const DEFAULT_CHARSET = /[a-z]/;

/**
 * Convert command line arguments into application runtime configuration.
 */
function retrieveConfigFromArgs(argv: Array<string>): Promise<IConfig> {
    // TODO: implement
    return Promise.resolve({
        storage: {
            kind: "FILESYSTEM",
            loc: "/path/to/loc",
        },
    });
}

/**
 * Get a handle to the application-wide persistent store
 */
function getStorage(storageSpec: { kind: string, loc: string }): Promise<IStorage> {
    // TODO: implement
    return new Promise(null);
}

/**
 * Interact with user to create a password to work on
 */
function createNewPasswordForUser(): IPasswordRecord {
    // TODO: support other password options
    const password = generatePassword(DEFAULT_PASSWORD_LENGTH, false, DEFAULT_CHARSET);
    console.log("Congrats! You have a new password. It is:")
    console.log(`    ${password}`);
    console.log("Please give it a short name, to keep track of what it's for:");
    // TODO: user interaction
    const title = null;

    return PasswordRecordApi.createPasswordRecord(password, title);
}

function promptUserForPasswordQuiz(storage: IStorage): Promise<IPasswordRecord> {
        if (passwordRecords.length === 0) {
            console.log("You are not working on any passwords yet.");
            console.log("Want to generate a new password and learn it?");
            // TODO: user interaction Y/N
            const newPasswordRecord = createNewPasswordForUser();
            return storage.persist(newPasswordRecord).then(() =>
                newPasswordRecord);
        } else {
            const noun = passwordRecords.length === 1 ? "passwords" : "password";
            console.log(`You are working on ${passwordRecords.length} ${noun}.`);
            console.log("Would you like to generate a new password, " +
                        "work on an exsting one, or exit?");
            // TODO: user interaction
            return Promise.resolve(
        }
    }).catch((err) => {
        console.error("We encountered a problem loading the list " +
                      "of passwords to learn.");
        throw err;
    });
}

function quizUser(allPasswordRecords: Array<IPasswordRecord>): void {
    const passwordRecord = promptUserForPasswordQuiz(storage)
    // TODO: run the quiz
    // TODO: prompt user to repeat
    const repeat = false;

    if (repeat) {
        quizUser();
    }
    ).catch((err) => {
        // TODO: handle error getting password record from user
        throw err;
    })
}

/**
 * Command line interface to this program
 */
export default function cli(argv: Array<string>): void {
    Promise.resolve().then(() =>
        retrieveConfigFromArgs(argv).catch((err) => {
            console.error("Error parsing arguments.");
            throw err;
        })
    ).then((config) => Promise.all(config, getStorage(config.storage))

    Promise.all(config, storage,
    ).then((config, storage) =>
        Promise.resolve(storage.retrieveAll()).catch((err) => {
            // TODO: handle retrieval error
            throw err;
        })
    ).then((allPasswordRecords) => quizUser(allPasswordRecords)
    ).catch((err) => {
        console.error(err);
        console.error("Program is aborting.");
        exit(-1);
    });
};

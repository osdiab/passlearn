/* tslint:disable: no-console */
import generatePassword = require("password-generator");

// import { CURRENT_VERSION } from "./persistence/database";
// import Storage from "./persistence/storage";

const DEFAULT_PASSWORD_LENGTH = 16;
const DEFAULT_CHARSET = /[a-z]/;

function parseArgs(argv: Array<string>): {
    charset: RegExp,
    passwordLength: number,
} {
    // TODO: implement
    return {
        charset: DEFAULT_CHARSET,
        passwordLength: DEFAULT_PASSWORD_LENGTH,
    };
}

export default function cli(argv: Array<string>): void {
    const args = parseArgs(argv);

    const password = generatePassword(args.passwordLength, false, args.charset);
    console.log("Your new password is:\n\n" + password + "\n");
    console.log("This script only saves salted hashes of this password, so store this " +
                "password somewhere securely yourself until you have committed it to memory.");

    // const database = {
    //     delay: 0,
    //     password: password,
    //     successStreak: 0,
    //     version: CURRENT_VERSION,
    // };
    // storage.persist(database).then(() => {
    //     console.log("Your data has been stored! yay");
    // }).catch((err) => {
    //     // TODO: handle err
    // });
};

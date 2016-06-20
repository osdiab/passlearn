import _ = require("lodash");

/**
 * Represents a password stored by the program, and progress in learning
 * that password.
 */
interface IPasswordRecord {
    delay: number;
    lastQuizzed: Date;
    numTimesQuizzed: number;
    password: string;
    successStreak: number;
    title: string;
    version: string; // version of the serialized record, for deserialization
}

export function deserializePasswordRecord(seralized: string): IPasswordRecord {
    const deserialized = JSON.fromString(serialized);
    switch(deserialized.version) {
        case CURRENT_VERSION:
            return deserialized as IPasswordRecord;
        default:
            throw new Error("Invalid version");
    }

}

/**
 * Creates and initializes a new password record.
 */
export function createPasswordRecord(
    password: string, title: string
): IPasswordRecord {
    return {
        delay: 0, // in milliseconds
        lastQuizzed: new Date(),
        numTimesQuizzed: 0,
        password: password,
        successStreak: 0,
        title: title,
        version: CURRENT_VERSION,
    };
}

/**
 * Increases the delay before showing the password in a quiz.
 */
export function increaseDelay(prevRecord: IPasswordRecord): IPasswordRecord {
    return _.assign({}, prevRecord, {
        delay: prevRecord.delay + 500,
    }) as IPasswordRecord;
}

/**
 * Increments the streak of correct password entry before seeing the full
 * password.
 */
export function incrementStreak(prevRecord: IPasswordRecord): IPasswordRecord {
    return _.assign({}, prevRecord, {
        successStreak: prevRecord.successStreak + 1,
    }) as IPasswordRecord;
}

/**
 * Sets the streak to 0 upon failure to enter a password before it is displayed.
 */
export function resetStreak(prevRecord: IPasswordRecord): IPasswordRecord {
    return _.assign({}, prevRecord, {
        successStreak: 0,
    }) as IPasswordRecord;
}

export const CURRENT_VERSION = "0.0.0";
export default IPasswordRecord;

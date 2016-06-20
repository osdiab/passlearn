import IPasswordRecord from "../passwordRecord";

/**
 * Save a password record for later retrieval. Returns all records
 * after the operation is complete.
 */
interface IPersistFunction {
    (data: IPasswordRecord): Promise<Array<IPasswordRecord>>;
}

/**
 * Returns all password records in storage.
 */
interface IRetrieveAllFunction {
    (): Promise<Array<IPasswordRecord>>;
}

/**
 * Deletes a password record by title. Returns all records after the
 * operation is complete.
 */
interface IDestroyFunction {
    (title: string): Promise<Array<IPasswordRecord>>;
}

/**
 * Abstraction of a store for password records, like the filesystem or
 * browser local storage.
 */
interface IStorage {
    destroy: IDestroyFunction;
    persist: IPersistFunction;
    retrieveAll: IRetrieveAllFunction;
}

export default IStorage;

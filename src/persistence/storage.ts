import Database from "./database";

interface PersistFunction {
    (data: Database): Promise<string>;
}

interface RetrieveFunction {
    (): Promise<Database>;
}

interface Storage {
    persist: PersistFunction;
    retrieve: RetrieveFunction;
}

export default Storage;

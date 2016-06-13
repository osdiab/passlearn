interface Database {
    version: string;
    password: string;
    delay: number;
    successStreak: number;
}

export const CURRENT_VERSION = "0.0.0";
export default Database;

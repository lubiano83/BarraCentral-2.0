import * as ExpoSQLite from "expo-sqlite"
import { Platform } from "react-native"

let db = null;
 if(Platform.OS !== 'web') db = ExpoSQLite.openDatabase("sessions.db"); // solo funciona en dispositivos moviles

export const initSQLiteDB = () => {
    const promise = new Promise((resolve, reject) => {
        db.transaction((tx) => {
            //Define SQL statement. BEWARE of PARENTHESIS
            tx.executeSql(
                "CREATE TABLE IF NOT EXISTS sessions (localId TEXT PRIMARY KEY NOT NULL, email TEXT NOT NULL, token TEXT NOT NULL)",
                [], //Parameters
                (_, result) => resolve(result), //Resolve transaction
                (_, error) => reject(error) //Transaction error
            )
        })
    })
    return promise
}

export const dropSessionsTable = () => {
    const promise = new Promise((resolve, reject) => {
        db.transaction((tx) => {
            //Define SQL statement. BEWARE of PARENTHESIS
            tx.executeSql(
                "DROP TABLE IF EXISTS sessions",
                (_, result) => resolve(result), //Resolve transaction
                (_, error) => reject(error) //Transaction error
            )
        })
    })
    return promise
}

export const truncateSessionsTable = () => { // sentencia que borra los registros de la tabla
    const promise = new Promise((resolve, reject) => {
        db.transaction((tx) => {
            //Define SQL statement. BEWARE of PARENTHESIS
            tx.executeSql(
                "DELETE FROM sessions",
                [], //Parameters
                (_, result) => resolve(result), //Resolve transaction
                (_, error) => reject(error) //Transaction error
            )
        })
    })
    return promise
}

export const insertSession = ({email, localId, token}) => {
    const promise = new Promise((resolve, reject) => {
        db.transaction((tx) => {
            //Define SQL statement. BEWARE of PARENTHESIS
            tx.executeSql(
                "INSERT INTO sessions (localId, email, token) VALUES (?, ?, ?);",
                [localId, email, token], //Parameters
                (_, result) => resolve(result), //Resolve transaction
                (_, error) => reject(error) //Transaction error
            )
        })
    })
    return promise
}

export const getSession = () => {
    const promise = new Promise((resolve, reject) => {
        db.transaction((tx) => {
            //Define SQL statement. BEWARE of PARENTHESIS
            tx.executeSql(
                "SELECT * from sessions",
                [], //Parameters
                (_, result) => resolve(result), //Resolve transaction
                (_, error) => reject(error) //Transaction error
            )
        })
    })
    return promise
}

import { IConn } from "./connection.js";
import { MySQLConn } from "./options/mysql-conn.js";
import { MongoConn } from "./options/mongo-conn.js";
import { FirebaseConn } from "./options/firebase-conn.js";

export const options = {
    mysql : new Option(document.getElementById("mysql"), new MySQLConn()),
    mongo : new Option(document.getElementById("mongo"), new MongoConn()),
    firebase : new Option(document.getElementById("firebase"), new FirebaseConn())
}

/**
 * constructor function to map form of required connection establishment with specified html element
 * @param {HTMLElement} htmlElement element to show establish connection dialog
 * @param {IConn} connObject connection class
 */
function Option(htmlElement, connObject) {
    this.htmlElement = htmlElement;
    this.connObject = connObject;
}
import { resolve, reject } from '_any-promise@1.3.0@any-promise';

const connect = require('mongodb').MongoClient.connect;

const DB_CONN_STR = 'mongodb://localhost:27017/'; //数据库地址

const collection = {
    // 查
    find(collect,data) {
        return new Promise((resolve,reject) => {
            connect(DB_CONN_STR).then(async (db) => {
                const myDB = db.db('test');
                const collection = myDB.collection(collect);
                const res = await collection.find(data).toArray();
                resolve(res);
                db.close();
            });
        })
    },

    findOne(collect,data) {
        return new Promise((resolve,reject) => {
            connect(DB_CONN_STR).then(async (db) => {
                const myDB = db.db('test');
                const collection = myDB.collection(collect);
                const res = await collection.findOne(data);
                resolve(res);
                db.close();
            })
        });
    },

    // 改
    update(collect,select,newData) {
        return new Promise((resolve,reject) => {
            connect(DB_CONN_STR).then(async (db) => {
                const myDB = db.db('test');
                const collection = myDB.collection(collect);
                const res = await collection.update(select,newData);
                resolve(res);
                db.close();
            })
        })
    },

    // 增
    insert(collect,data) {
        return new Promise((resolve,reject) => {
            connect(DB_CONN_STR).then(async (db) => {
                const myDB = db.db('test');
                const collection = myDB.collection(collect);
                const res = await collection.insert(data);
                resolve(res);
                db.close();
            })
        })
    }

}

export default collection;